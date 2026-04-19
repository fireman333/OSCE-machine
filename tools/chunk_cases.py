#!/usr/bin/env python3
"""
chunk_cases.py — Read cases.js, parse 133 cases, split into 14 chunks
(~8-10 cases each) for parallel subagent rewrite.

Output:
  /tmp/osce_rewrite_chunk_1_in.json  .. chunk_14_in.json
"""
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CASES_JS = ROOT / "cases.js"

NODE_SCRIPT = """
const fs = require('fs');
const text = fs.readFileSync(process.argv[1], 'utf8');
eval(text.replace('window.OSCE_CASES', 'var OSCE_CASES'));
process.stdout.write(JSON.stringify(OSCE_CASES));
"""

def load_cases():
    result = subprocess.run(
        ["node", "-e", NODE_SCRIPT, str(CASES_JS)],
        capture_output=True, text=True, check=True
    )
    return json.loads(result.stdout)

def chunk(lst, n):
    """Split list into n roughly-equal chunks."""
    k, m = divmod(len(lst), n)
    return [lst[i*k + min(i, m):(i+1)*k + min(i+1, m)] for i in range(n)]

def main():
    cases = load_cases()
    print(f"Loaded {len(cases)} cases", file=sys.stderr)
    chunks = chunk(cases, 14)
    out_paths = []
    for i, ch in enumerate(chunks, 1):
        path = Path(f"/tmp/osce_rewrite_chunk_{i}_in.json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(ch, f, ensure_ascii=False, indent=2)
        print(f"chunk {i}: {len(ch)} cases ({ch[0]['id']}..{ch[-1]['id']}) → {path}", file=sys.stderr)
        out_paths.append(str(path))
    print("\n".join(out_paths))

if __name__ == "__main__":
    main()
