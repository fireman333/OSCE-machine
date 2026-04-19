#!/usr/bin/env python3
"""
merge_rewrite.py — Merge 14 chunk output JSONs back into cases.js.

For each case in original cases.js, overwrite history / pe / explanation / treatment
from the corresponding chunk output. Preserve everything else (vignette, ddx, redFlags,
metadata) byte-identical.
"""
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CASES_JS = ROOT / "cases.js"
CHUNK_OUT_PATHS = [Path(f"/tmp/osce_rewrite_chunk_{i}_out.json") for i in range(1, 15)]

NODE_LOAD = """
const fs = require('fs');
const text = fs.readFileSync(process.argv[1], 'utf8');
eval(text.replace('window.OSCE_CASES', 'var OSCE_CASES'));
process.stdout.write(JSON.stringify(OSCE_CASES));
"""

FIELD_ORDER = [
    "id", "source", "age", "sex", "department", "system",
    "chiefComplaint", "vignette",
    "history", "pe", "ddx", "explanation", "treatment", "redFlags"
]

HEADER = """// OSCE 刷題機 — 題庫
// 共 133 個 case：63 例 114 年 OSCE SP 劇情範例 + 40 例個人 OSCE 筆記衍生 + 30 例 2025 OSCE 考古題
// 每個 case 拆成 3 張卡（history / pe / ddx）→ 共 399 張刷題卡
// 欄位：id, source, age, sex, chiefComplaint, department, system, vignette,
//       history[], pe[], ddx[], explanation[], treatment[], redFlags[]
// 內容依 osce-answer 框架重寫：history = LQQOPERA + 內外敏藥住個家；pe = IPPA + 特殊測試；
// ddx mode (UI: 病情解釋) = explanation (pathophys / 自然病程) + treatment (處置 / 治療 / 衛教)
// history mode 翻面同時顯示 DDx；pe mode 單一 checklist

window.OSCE_CASES = """

FOOTER = ";\n"


def load_original_cases():
    result = subprocess.run(
        ["node", "-e", NODE_LOAD, str(CASES_JS)],
        capture_output=True, text=True, check=True
    )
    return json.loads(result.stdout)


def js_repr(value, indent=0):
    """Recursively render Python value as JS literal."""
    pad = "  " * indent
    if isinstance(value, str):
        # Escape backslash, double quote, newline
        s = value.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n").replace("\r", "")
        return f'"{s}"'
    if isinstance(value, bool):
        return "true" if value else "false"
    if value is None:
        return "null"
    if isinstance(value, (int, float)):
        return str(value)
    if isinstance(value, list):
        if not value:
            return "[]"
        inner = ",\n".join("  " * (indent + 1) + js_repr(v, indent + 1) for v in value)
        return "[\n" + inner + "\n" + pad + "]"
    if isinstance(value, dict):
        if not value:
            return "{}"
        # Use FIELD_ORDER for case objects, otherwise dict order
        keys = [k for k in FIELD_ORDER if k in value] + [k for k in value if k not in FIELD_ORDER]
        parts = []
        for k in keys:
            parts.append("  " * (indent + 1) + f'{k}: ' + js_repr(value[k], indent + 1))
        return "{\n" + ",\n".join(parts) + "\n" + pad + "}"
    raise TypeError(f"Cannot serialize {type(value)}")


def main():
    original = load_original_cases()
    print(f"Loaded {len(original)} original cases", file=sys.stderr)

    # Build map id → rewrite
    rewrites = {}
    for path in CHUNK_OUT_PATHS:
        if not path.exists():
            print(f"ERROR: missing chunk output {path}", file=sys.stderr)
            sys.exit(1)
        with open(path, encoding="utf-8") as f:
            arr = json.load(f)
        print(f"  {path.name}: {len(arr)} cases", file=sys.stderr)
        for c in arr:
            rewrites[c["id"]] = c

    print(f"Total rewritten cases: {len(rewrites)}", file=sys.stderr)

    # Merge: for each original case, overwrite the 4 fields
    merged = []
    missing = []
    for c in original:
        cid = c["id"]
        if cid not in rewrites:
            missing.append(cid)
            merged.append(c)
            continue
        r = rewrites[cid]
        new_c = dict(c)
        for field in ("history", "pe", "explanation", "treatment"):
            if field in r:
                new_c[field] = r[field]
        merged.append(new_c)

    if missing:
        print(f"WARNING: {len(missing)} cases not in rewrites: {missing[:10]}...", file=sys.stderr)

    # Render JS
    inner = ",\n\n".join("  " + js_repr(c, 1) for c in merged)
    output = HEADER + "[\n" + inner + "\n]" + FOOTER

    with open(CASES_JS, "w", encoding="utf-8") as f:
        f.write(output)

    print(f"Wrote {len(merged)} cases to {CASES_JS} ({len(output):,} bytes)", file=sys.stderr)


if __name__ == "__main__":
    main()
