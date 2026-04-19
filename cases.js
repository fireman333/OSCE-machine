// OSCE 刷題機 — 題庫
// 共 133 個 case：63 例 114 年 OSCE SP 劇情範例 + 40 例個人 OSCE 筆記衍生 + 30 例 2025 OSCE 考古題
// 每個 case 拆成 3 張卡（history / pe / ddx）→ 共 399 張刷題卡
// 欄位：id, source, age, sex, chiefComplaint, department, system, vignette,
//       history[], pe[], ddx[], explanation[], treatment[], redFlags[]
// 內容依 osce-answer 框架重寫：history = LQQOPERA + 內外敏藥住個家；pe = IPPA + 特殊測試；
// ddx mode (UI: 病情解釋) = explanation (pathophys / 自然病程) + treatment (處置 / 治療 / 衛教)
// history mode 翻面同時顯示 DDx；pe mode 單一 checklist

window.OSCE_CASES = [
  {
    id: "114-01",
    source: "114",
    age: 25,
    sex: "F",
    department: "婦",
    system: "婦產",
    chiefComplaint: "下腹疼痛 + 不規則陰道出血",
    vignette: "25 歲女性，下腹疼痛。今天因整個下腹疼痛加劇、一碰就很痛、無法忍受，故來到急診就診。這兩星期偶爾出現下腹痛情形，偏右下腹，並合併些許不規則陰道出血。這個月的月經好像有來，但不確定是不是正常，因為只有兩三天的點狀出血。",
    history: [
      "婦產科必問「性孕經分片」：性行為史、避孕方式、GPA（gravida/para/abortion）、LMP/PMP、月經週期",
      "本次出血量、性質、與月經週期的關係（不規則 spotting、血塊大小、衛生棉用量）",
      "腹痛 LQQOPERA：位置（RLQ）、轉移痛、性質、時程、加重/緩解因子、止痛藥反應",
      "伴隨症狀：頭暈、肩膀痛（橫膈刺激提示內出血）、噁心嘔吐、發燒、暈厥",
      "過去史：PID（pelvic inflammatory disease，骨盆腔發炎）、STD、子宮外孕、IUD 使用、不孕史"
    ],
    pe: [
      "Vital signs（特別注意 BP/HR：unstable 或姿勢性 → ruptured ectopic）",
      "腹部 IPPA：bowel sound、rebounding/guarding、Cullen sign、局部壓痛",
      "Pelvic exam：cervical motion tenderness、adnexal mass/tenderness、後穹窿飽滿",
      "Bedside β-hCG（quantitative）+ TVS（transvaginal sonography）找子宮內外妊娠囊",
      "評估休克徵兆：意識、capillary refill、四肢冰冷"
    ],
    ddx: [
      "Ectopic pregnancy（異位妊娠，必排）",
      "Ovarian torsion（卵巢扭轉）",
      "Ruptured ovarian cyst / 黃體破裂",
      "PID / TOA",
      "Acute appendicitis"
    ],
    explanation: [
      "受精卵著床在子宮腔外（最常在輸卵管），稱為 ectopic pregnancy（異位妊娠），是育齡女性下腹痛加不規則出血必排診斷",
      "胚胎在輸卵管長大會撐裂血管，造成內出血、腹膜刺激、血壓下降甚至休克",
      "點狀出血是因內膜失去黃體支持而剝落，與正常月經的量與規則度不同",
      "破裂後可短時間內失血數百 mL，是婦產科急症，致死率不可忽視",
      "若早期診斷可用藥物或腹腔鏡保留輸卵管；延誤則需切除患側輸卵管，影響日後生育"
    ],
    treatment: [
      "Workup：β-hCG 血清定量 + TVS 找子宮內外妊娠囊、CBC、blood type、cross-match、凝血功能",
      "急性處置：兩條大孔徑 IV、IV fluid resuscitation、NPO、連續監測生命徵象，破裂出血者立即備血",
      "藥物治療（未破裂、β-hCG < 5000、無胎心、患者穩定）：methotrexate（MTX）50 mg/m² IM single dose，後續追蹤 β-hCG",
      "手術治療：腹腔鏡 salpingostomy 保留輸卵管或 salpingectomy 切除，破裂或血流動力不穩定走 emergency 手術",
      "支持療法：輸血時維持 Hb > 7、監測尿量與 lactate、ICU 觀察血流動力",
      "衛教：Rh(-) 者打 anti-D immunoglobulin、術後 3 個月追蹤 β-hCG 至測不到、下次懷孕早期超音波確認位置、討論避孕"
    ],
    redFlags: [
      "BP↓ HR↑ + peritoneal sign → 疑 ruptured ectopic，立即備手術 + 輸血",
      "肩膀痛/暈厥 → 腹腔內出血"
    ]
  },

  {
    id: "114-02",
    source: "114",
    age: 55,
    sex: "M",
    department: "內",
    system: "心血管",
    chiefComplaint: "擔心心肌梗塞（健檢諮詢）",
    vignette: "55 歲，已退休，平時每天爬山。看電視說冬天 MI 增加，尤其有 HTN/DM 者更應注意，所以很擔心，想來門診檢查。HTN 病史 20 餘年（父 50 歲 MI 過世），規則服 Norvasc，BP 控制在 120-130/80。除了拿藥沒做其他檢查。",
    history: [
      "ASCVD（atherosclerotic cardiovascular disease）危險因子：HTN（hypertension，高血壓）、DM、dyslipidemia、吸菸、家族早發 CAD（父 50 歲 MI）",
      "目前症狀 LQQOPERA：有無 exertional chest pain、胸悶、喘、心悸、運動耐受度改變",
      "藥物史：降壓藥種類與劑量（Norvasc）、依從性、是否已有 antiplatelet 或 statin",
      "個人史 TOCC+ABC：飲食型態、運動（爬山頻率）、菸酒、體重變化、睡眠、壓力",
      "健檢史：上次 lipid profile、HbA1c、ECG、ABI 或 CIMT 的時間與結果"
    ],
    pe: [
      "Vital signs（雙臂血壓、HR、BMI、腰圍）",
      "心肺聽診：S3/S4、murmur、ralesl；頸動脈/腎動脈/股動脈 bruit",
      "周邊脈搏對稱性 + ABI（ankle-brachial index）篩 PAOD（peripheral arterial occlusive disease）",
      "Funduscopy 看 HTN retinopathy、下肢水腫、皮膚黃色瘤",
      "12-lead ECG 看 LVH、ST-T 變化或陳舊性 MI"
    ],
    ddx: [
      "Stable CAD / silent ischemia",
      "Hypertensive cardiomyopathy",
      "Metabolic syndrome",
      "白袍高血壓"
    ],
    explanation: [
      "coronary artery disease（CAD，冠狀動脈疾病）是 atherosclerosis（動脈粥樣硬化）導致冠狀動脈狹窄、影響心肌供血的慢性病",
      "您有的危險因子包含長期 HTN、父親 50 歲 MI 的早發家族史，屬於高風險族群",
      "冬天血管收縮、血壓上升，加上交感活性增加，acute MI（急性心肌梗塞）發生率確實上升",
      "早期 silent ischemia（無症狀缺血）可能完全沒感覺，因此系統性風險評估與篩檢很重要",
      "良好控制 BP、戒菸、規律運動與合適藥物治療可大幅降低心血管事件，不必過度焦慮也不可掉以輕心"
    ],
    treatment: [
      "Workup：12-lead ECG、lipid profile（TC/LDL/HDL/TG）、HbA1c、fasting glucose、BUN/Cr、UA、必要時 exercise treadmill test 或 coronary CTA",
      "ASCVD 10-year risk 評估：根據結果決定是否啟動 statin，如 atorvastatin 20-40 mg PO QD 目標 LDL < 70 mg/dL",
      "BP 目標 < 130/80（已 HTN + 高 ASCVD 風險）：amlodipine（Norvasc）控制良好可續用，必要時加 ACEI/ARB",
      "Lifestyle：DASH diet、減鹽 < 5 g/d、規律有氧 150 min/週、戒菸、體重控制、限酒",
      "預防：aspirin 僅在 ASCVD 高風險 + 出血風險低者個別考慮；流感與肺炎疫苗",
      "衛教：認識 MI 警訊（胸悶痛、冒冷汗、轉移痛、呼吸喘）立即叫救護車；冬天注意保暖、晨起運動前先暖身；定期門診追蹤"
    ],
    redFlags: [
      "新發胸痛/呼吸喘 → 立即 ECG + Troponin",
      "BP > 180/120 + 器官受損 → hypertensive emergency"
    ]
  },

  {
    id: "114-03",
    source: "114",
    age: 38,
    sex: "F",
    department: "內",
    system: "神經/骨骼",
    chiefComplaint: "右肩頸酸痛 + 右手麻木無力",
    vignette: "38 歲女性，肩頸酸痛。今天早上覺得右手無力，右上臂外側麻木，及右手腹側 1、2、3 指酸麻，擔心右半身不遂。長時間打電腦、Facebook、購物。",
    history: [
      "麻木分布 LQQOPERA：沿 dermatome（C6 拇指食指 / C7 中指）、單側 vs 雙側、持續或陣發",
      "無力評估：grip strength、肩外展/伸展、扣釦子寫字、日常功能影響",
      "頸部疼痛：時程、有無 radicular pain、咳嗽或用力加劇（Valsalva 陽性）",
      "外科史/外傷史：車禍、跌倒、頸椎扭傷、過去頸部手術、長時間低頭打電腦",
      "Red flags：bowel/bladder dysfunction、saddle anesthesia、雙側症狀、步態不穩、體重減輕、發燒"
    ],
    pe: [
      "頸椎 ROM + Spurling test（頸後仰 + 偏向患側誘發 radicular pain）",
      "上肢 motor（C5-T1 myotomes）+ DTR（biceps C5-6、triceps C7、brachioradialis C6）",
      "Sensory：dermatome 分布（pinprick、light touch）",
      "Hoffmann sign、Babinski、步態（排除 cord compression 與 stroke）",
      "頸動脈聽診 + 臉部肌力與言語（排除 stroke）"
    ],
    ddx: [
      "Cervical radiculopathy（C6/C7 HIVD）",
      "Cervical spondylosis",
      "Carpal tunnel syndrome / thoracic outlet syndrome",
      "Brachial plexopathy",
      "Stroke（先排除）"
    ],
    explanation: [
      "cervical radiculopathy（頸神經根病變）多由 HIVD（herniated intervertebral disc，椎間盤突出）或骨刺壓迫頸神經根造成",
      "C6 神經根分布到拇指與食指外側；C7 涵蓋中指與前臂腹側，與您的麻木分布吻合",
      "長時間低頭打電腦、滑手機，使頸椎承受前傾壓力，加速椎間盤退化與壓迫",
      "通常單側、與姿勢相關，活動或牽拉會誘發；多數可在 6-12 週內以保守治療緩解",
      "需與 stroke（中風）區分：中風常為突發、面臂腿同側、可能合併語言或意識改變，屬緊急情況"
    ],
    treatment: [
      "Workup：完整神經學檢查（dermatome、myotome、DTR、Spurling）、頸椎 X-ray（AP/lat/oblique），持續 > 6 週或有 red flag 加 MRI；疑中風則 brain CT/MRI",
      "急性疼痛：NSAIDs 如 naproxen 250-500 mg PO BID + muscle relaxant 如 methocarbamol 500 mg PO TID，短期可加 acetaminophen 500 mg PO QID",
      "神經痛：gabapentin 300 mg PO qHS 起調至 300 mg TID 或 pregabalin 75 mg PO BID",
      "復健：頸椎牽引、姿勢矯正、肩頸伸展與深層肌力訓練、熱敷",
      "保守治療 6-12 週無效或有進行性無力 / 大小便失禁 → 骨科/神經外科評估 ACDF（anterior cervical discectomy and fusion）",
      "衛教：每 30-60 分鐘起身活動、螢幕與視線平行、避免長時間低頭、加強核心與肩頸肌力、正確枕頭高度"
    ],
    redFlags: [
      "突發無力 + 構音/視覺 → 中風",
      "雙側症狀 + 步態不穩 + 反射亢進 → cord compression"
    ]
  },

  {
    id: "114-04",
    source: "114",
    age: 41,
    sex: "M",
    department: "內",
    system: "骨骼/風濕",
    chiefComplaint: "右膝突發劇痛（半夜痛醒）",
    vignette: "41 歲男性，半夜一點突發右膝疼痛醒來，持續性疼痛如撕筋裂骨，走站時更痛無法蹲下，吃普拿疼稍緩，感覺體溫有點熱。",
    history: [
      "急性單關節炎 LQQOPERA：發作時間（半夜 1 點）、是否首次、過去是否同關節再犯、疼痛程度",
      "誘發因子：飲食（紅肉/海鮮/啤酒）、外傷、用藥（thiazide、aspirin 低劑量）、脫水、禁食",
      "全身症狀：發燒、寒顫、其他關節痛、皮疹",
      "內科病史：過去痛風發作史、tophi（痛風石）、HTN、DM、CKD、hyperuricemia",
      "個人史：飲酒量、職業、性接觸史（排除 gonococcal arthritis）、TB/STD"
    ],
    pe: [
      "Vital signs（septic arthritis 會發燒、tachycardia）",
      "右膝 IPPA：紅腫熱痛、ROM 受限、effusion（patellar tap/ballottement）、熱感",
      "其他關節掃描 + 耳廓/手指/阿基里斯腱 tophi",
      "Joint aspiration（arthrocentesis）送 cell count、Gram stain、culture、polarized microscopy",
      "皮膚 cellulitis 與全身淋巴結檢查（排除感染源）"
    ],
    ddx: [
      "Acute gouty arthritis（最可能）",
      "Septic arthritis（必排，必抽關節液）",
      "Pseudogout（CPPD）",
      "Reactive arthritis / 創傷"
    ],
    explanation: [
      "acute gouty arthritis（急性痛風性關節炎）是 MSU（monosodium urate，尿酸鈉）結晶沉積在關節腔誘發發炎反應",
      "好發中年男性，半夜突發、單一關節（第一蹠趾最常見，膝、踝次之），痛到床單都不能碰",
      "誘因包含飲酒（尤其啤酒）、海鮮紅肉、脫水、利尿劑、手術、創傷",
      "septic arthritis（化膿性關節炎）是必排診斷：若延誤可在 24-48 小時破壞關節軟骨、致殘甚至致命，因此必抽關節液鑑別",
      "急性期過後若不控制 hyperuricemia（高尿酸血症），會反覆發作並出現 tophi 與痛風性腎病變"
    ],
    treatment: [
      "Workup：arthrocentesis 送 cell count、Gram stain、culture、polarized microscopy 找 negatively birefringent needle-shaped crystal；CBC、CRP、uric acid、BUN/Cr",
      "急性期一線：NSAIDs 如 indomethacin 50 mg PO TID 或 naproxen 500 mg PO BID；或 colchicine 1.2 mg PO 後 0.6 mg 1 小時 later",
      "腎功能差或 NSAIDs 禁忌：prednisolone 30-40 mg PO QD ×5 days 後 taper，或 intra-articular triamcinolone",
      "若關節液懷疑 septic arthritis：立即 IV antibiotics（vancomycin 15-20 mg/kg q12h + ceftriaxone 2 g IV QD）+ 骨科會診考慮 drainage",
      "急性期過後 2-4 週開始 urate-lowering therapy：allopurinol 100 mg PO QD 起調，目標 SUA < 6 mg/dL；併用 colchicine 0.6 mg QD prophylaxis 3-6 個月",
      "衛教：limit purine（內臟、海鮮、紅肉）、戒啤酒、每日水分 > 2 L、減重、避免脫水與 thiazide diuretics、定期追蹤 SUA"
    ],
    redFlags: [
      "發燒 + 關節劇痛 → 立即 joint tap 排 septic arthritis",
      "WBC > 50000 in synovial fluid → septic"
    ]
  },

  {
    id: "114-05",
    source: "114",
    age: 60,
    sex: "F",
    department: "急",
    system: "感染/血液動力",
    chiefComplaint: "全身無力 + 發燒寒顫",
    vignette: "60 歲女性。3-4 天間斷輕微發燒，2 天前食慾不佳、虛弱無力和頭昏（站起來頭昏）。診所打點滴後好一點。今天發燒、寒顫、心悸、呼吸喘、軟弱無力被送急診。",
    history: [
      "發燒 LQQOPERA：pattern（間歇/持續）、最高溫、寒顫、退燒藥反應、時程（3-4 天）",
      "感染源定位：泌尿（dysuria、頻尿、腰痛）、呼吸、腸胃、皮膚軟組織、近期住院/手術/導管",
      "Volume status：飲水量、尿量、姿勢性頭暈、口乾",
      "免疫抑制狀態：DM、steroid、化療、splenectomy、HIV、老年",
      "qSOFA 三項（意識、RR ≥ 22、SBP ≤ 100）+ 旅遊接觸史 TOCC"
    ],
    pe: [
      "Vital signs（BP 含姿勢性、HR、RR、SpO2、體溫、capillary refill）",
      "系統性 IPPA：心肺聽診、腹部、CVA knocking tenderness、皮膚（cellulitis、necrosis、瘀點）",
      "Mental status（GCS）、頸部僵硬（Kernig、Brudzinski）",
      "Bedside：lactate、blood culture × 2、urine culture、CXR、ECG",
      "導管/傷口/人工裝置檢查"
    ],
    ddx: [
      "Sepsis / septic shock（首要）",
      "Urosepsis（老年女性常見）",
      "Pneumonia",
      "Acute cholangitis（Charcot triad）",
      "Adrenal crisis / DKA"
    ],
    explanation: [
      "sepsis（敗血症）是感染引起 host immune response 失調，造成器官功能障礙，SOFA 分數上升 ≥ 2 即達標",
      "老年女性最常見感染源是 urosepsis（尿路敗血症），其次為 pneumonia、cholangitis（膽管炎）、軟組織感染",
      "發燒寒顫、心悸、呼吸喘、姿勢性低血壓提示血流動力已受影響，可能進展到 septic shock",
      "若不及時處置，每延遲一小時 antibiotic，死亡率約上升 7-8%",
      "Surviving Sepsis 1-hour bundle（早期辨識、lactate、culture、broad-spectrum antibiotics、fluid）是降低死亡率的關鍵"
    ],
    treatment: [
      "Workup：CBC、CRP、procalcitonin、lactate、blood culture ×2、UA + urine culture、CXR、BUN/Cr、LFT、electrolyte、血糖、ABG",
      "Sepsis 1-hour bundle：lactate、blood culture before antibiotics、broad-spectrum antibiotics（如 piperacillin/tazobactam（Tazocin）4.5 g IV q6-8h ± vancomycin）、crystalloid 30 mL/kg IV bolus（若 hypotension 或 lactate ≥ 4）",
      "持續監測：MAP 目標 ≥ 65 mmHg，補液後仍 hypotension 加 norepinephrine（Levophed）0.05-0.1 μg/kg/min titrate",
      "Source control：尋找並處理感染源（移除導尿管、引流膿瘍、膽道引流、必要時手術）",
      "調整治療：culture 結果出爐後 de-escalation 到窄譜 antibiotic；追蹤 lactate clearance、尿量、意識",
      "衛教：家屬說明病情嚴重度、ICU 必要性、預後；退燒不是治療目標而是找病原控制感染"
    ],
    redFlags: [
      "SBP < 90 + lactate > 2 → septic shock，1 hr bundle：culture/abx/fluid",
      "意識改變 → ICU"
    ]
  },

  {
    id: "114-06",
    source: "114",
    age: 26,
    sex: "F",
    department: "婦",
    system: "婦產",
    chiefComplaint: "月經沒來",
    vignette: "26 歲女性，月經沒來。過去月經不規則 2-3 月一次。固定男友，2 年前懷孕做過 TOP，無固定避孕。月經前易長青春痘，無特殊內外科病史。今天無腹痛或不適。",
    history: [
      "性孕經分片：LMP/PMP、月經週期（過去 2-3 月一次）、性行為頻率、避孕方式（無固定）、GPA",
      "懷孕症狀：噁心嘔吐、乳房脹痛、頻尿、疲倦、體重變化",
      "產科史：2 年前 TOP（termination of pregnancy）、過去懷孕結果與併發症",
      "PCOS（polycystic ovary syndrome，多囊性卵巢症候群）線索：青春痘、多毛、肥胖、acanthosis nigricans、不孕",
      "其他內分泌：galactorrhea（泌乳）、視野缺損、頭痛、體重劇變、運動量、怕熱怕冷"
    ],
    pe: [
      "BMI、hirsutism 分布、acne 嚴重度、acanthosis nigricans（頸後腋下）",
      "甲狀腺觸診、乳房擠壓看 galactorrhea",
      "腹部 IPPA、男性化徵象（virilization：clitoromegaly、低音）",
      "婦科內診 + urine pregnancy test（bedside）",
      "Visual field confrontation 排除 pituitary mass"
    ],
    ddx: [
      "Pregnancy（必排）",
      "PCOS（多囊性卵巢症候群）",
      "Hyperprolactinemia",
      "Hypothyroidism",
      "Hypothalamic amenorrhea"
    ],
    explanation: [
      "secondary amenorrhea（次發性無月經）首要排除 pregnancy，其次為 PCOS、hyperprolactinemia（高泌乳素血症）、thyroid disorder、hypothalamic amenorrhea",
      "PCOS 依 Rotterdam criteria 由 hyperandrogenism（高雄激素）+ ovulatory dysfunction + polycystic ovary morphology 三項中符合兩項構成",
      "Hyperandrogenism 表現為痤瘡、多毛、雄性禿；anovulation 造成月經稀少或無月經、不孕",
      "長期 unopposed estrogen 會增加 endometrial hyperplasia（子宮內膜增生）與 endometrial cancer 風險",
      "PCOS 亦與胰島素阻抗、metabolic syndrome、T2DM、心血管疾病風險上升相關"
    ],
    treatment: [
      "Workup：urine pregnancy test（必驗）、TSH、prolactin、FSH/LH、estradiol、total testosterone、DHEA-S、17-OHP；TVS 看卵巢型態；OGTT + lipid 評估代謝",
      "排除 pregnancy + 確認 PCOS 後，未計畫懷孕：COC（combined oral contraceptive，如 ethinylestradiol 30 μg/drospirenone 3 mg）規律月經並降雄激素",
      "想懷孕：letrozole 2.5-5 mg PO QD ×5 days（first-line ovulation induction），取代過去的 clomiphene",
      "代謝介入：減重 5-10% 可恢復排卵；metformin 500 mg PO TID（合併 insulin resistance 或 OGTT 異常）",
      "週期保護：若無 COC 使用，至少每 3 個月用 medroxyprogesterone 10 mg PO ×10 days 引導撤退出血",
      "衛教：規律運動、均衡飲食、體重管理、定期月經追蹤預防 endometrial hyperplasia、長期避孕與生育規劃"
    ],
    redFlags: [
      "懷孕 + 腹痛 → 排 ectopic",
      "視野缺損 + 頭痛 → pituitary tumor"
    ]
  },

  {
    id: "114-07",
    source: "114",
    age: 45,
    sex: "F",
    department: "婦",
    system: "婦產",
    chiefComplaint: "月經量過多 + 嚴重經痛",
    vignette: "45 歲女性，昨晚月經來，今早經血量非常多（一小時換衛生棉還滲出），經痛劇烈陣痛，頭暈噁心。一年前開始經血過多+經痛，自服止痛藥緩解。近兩個月惡化、月經持續 10 天、爬樓梯會喘。",
    history: [
      "月經史：週期、長度（現持續 10 天）、衛生棉用量（每小時滲出 → HMB）、血塊大小、PMP/LMP",
      "經痛 LQQOPERA：時程（1 年漸進、近 2 月惡化）、與月經關係、止痛藥反應、影響生活",
      "貧血症狀：頭暈、疲倦、爬樓梯喘、心悸、耳鳴、異食癖",
      "壓迫症狀：頻尿、排便不順、性交疼痛、腹脹",
      "婦科 / 個人史：生育史（GPA）、避孕、過去肌瘤或腺肌症診斷、家族婦癌史、出血傾向"
    ],
    pe: [
      "Vital signs（HR、orthostatic BP）+ pallor（conjunctiva、甲床）",
      "腹部 IPPA：可觸及子宮腫大或肌瘤（fibroid uterus）、壓痛",
      "Pelvic exam：子宮大小形狀活動度、附件腫塊、cervical motion tenderness",
      "Bedside：CBC（Hb）、urine pregnancy test、TVS 看內膜厚度與肌瘤",
      "皮膚 ecchymosis、點狀出血（排除 coagulopathy）"
    ],
    ddx: [
      "Uterine fibroid / leiomyoma",
      "Adenomyosis",
      "Endometrial hyperplasia / polyp / 內膜癌",
      "Coagulopathy（vWD）",
      "Perimenopausal DUB"
    ],
    explanation: [
      "abnormal uterine bleeding（AUB，異常子宮出血）以 PALM-COEIN 分類：結構性（polyp、adenomyosis、leiomyoma、malignancy）vs 非結構性（coagulopathy、ovulatory dysfunction、endometrial、iatrogenic、not classified）",
      "uterine fibroid（子宮肌瘤）與 adenomyosis（子宮腺肌症）在 40-50 歲女性最常見，造成 heavy menstrual bleeding + dysmenorrhea",
      "長期經血過多會造成 iron deficiency anemia（缺鐵性貧血），出現頭暈、爬樓梯喘、心悸",
      "停經前後必須排除 endometrial hyperplasia 或 endometrial cancer，尤其在 unopposed estrogen 暴露者",
      "急性大量出血若血流動力不穩，要當作婦科急症處理，可能需緊急止血與輸血"
    ],
    treatment: [
      "Workup：CBC、ferritin、coagulation profile（PT/aPTT）、β-hCG、TSH、TVS、endometrial sampling（age ≥ 45 或高風險）；血壓 / 心率監測",
      "急性大量出血：IV fluid resuscitation、transfuse if Hb < 7 或不穩；conjugated estrogen 25 mg IV q4-6h 或 high-dose COC、tranexamic acid 1 g PO/IV TID",
      "慢性 HMB（heavy menstrual bleeding）：levonorgestrel-IUS（Mirena）first-line、tranexamic acid 1 g PO TID 月經期、NSAIDs（mefenamic acid 500 mg PO TID）止痛 + 減量",
      "結構性問題：symptomatic fibroid → myomectomy 或 UAE（uterine artery embolization）；adenomyosis 完成生育 → hysterectomy",
      "貧血補充：ferrous sulfate 325 mg PO QD/BID ×3-6 個月，追蹤 Hb 與 ferritin",
      "衛教：月經量與日期記錄、症狀惡化（每小時衛生棉 > 1 片、暈厥）即就醫、定期追蹤 endometrial 評估"
    ],
    redFlags: [
      "Hb < 7 + active bleeding → 輸血 + 急診止血",
      "懷孕 + 大出血 → 排 abortion / molar"
    ]
  },

  {
    id: "114-08",
    source: "114",
    age: 10,
    sex: "F",
    department: "小",
    system: "小兒/內分泌",
    chiefComplaint: "身材矮小（10 歲 4 個月）",
    vignette: "10 歲 4 個月女生，身高班上最矮。從幼稚園起身高沿第 3 百分位下緣走，每年只長 4 公分。兩個月前胸部有些壓痛隆起，上個月消失。出生體重 2670 gm（SGA），出生第 3 天有黃疸照光 2 天。",
    history: [
      "母生 3A + 吃喝拉動睡：出生體重 2670 g（SGA，small for gestational age）、足月否、Apgar、出生後黃疸照光",
      "生長曲線 + 身高速度：每年只長 4 cm 屬 growth failure；父母身高（mid-parental height）、手足身高",
      "青春期 Tanner stage：thelarche（乳房發芽，兩月前出現又消失）、pubarche、menarche、陰毛腋毛",
      "營養與運動、慢性病史、長期用藥（steroid、stimulant）、學習表現、social history",
      "全身性徵象：頭痛/視野缺損（pituitary）、便秘怕冷（hypothyroid）、慢性下痢（celiac、IBD）、chronic illness"
    ],
    pe: [
      "身高/體重/BMI 描點到生長曲線、臂展、上下身比",
      "Tanner stage（breast、pubic hair）+ 外生殖器發育",
      "特殊面容：Turner（webbed neck、low hairline、cubitus valgus、shield chest）、Noonan、甲狀腺腫、心雜音",
      "神經學檢查、視野、皮膚（café-au-lait、vitiligo）",
      "Bone age（左手腕 X-ray）、IGF-1、IGFBP-3、TSH、karyotype"
    ],
    ddx: [
      "Familial short stature",
      "Constitutional delay of growth",
      "GH deficiency",
      "Turner syndrome（女性必排）",
      "Hypothyroidism / chronic illness"
    ],
    explanation: [
      "short stature（短身材）定義為身高 < 第 3 百分位或 < -2 SD，每年生長速率 < 4-5 cm 即為 growth failure",
      "本案 SGA 出生 + 持續低生長速率 + 早期短暫 thelarche 再消失，需系統性排除多種病因",
      "Turner syndrome（45,X，透納氏症）是女性短身材必排診斷：表現為 short stature、gonadal dysgenesis、估計學習能力正常但 estrogen 缺乏影響第二性徵",
      "GH（growth hormone）deficiency、hypothyroidism、chronic illness（CKD、celiac、IBD）皆會造成 growth retardation",
      "及早診斷與治療（如 rhGH replacement、適齡 estrogen replacement）可顯著改善最終身高與第二性徵發育"
    ],
    treatment: [
      "Workup：身高體重 BMI 與生長曲線描點、bone age（左手 X-ray）、CBC、TSH/free T4、IGF-1、IGFBP-3、karyotype（女性必驗）、celiac screen（tTG-IgA）、BUN/Cr、UA",
      "功能測試：GH stimulation test（clonidine、arginine、insulin tolerance）確認 GH deficiency；MRI sella 查 pituitary 病灶",
      "Turner syndrome 確診：rhGH（recombinant human GH）皮下注射啟動 + 適齡（約 11-12 歲）開始 estrogen replacement、心臟 / 腎臟超音波篩檢",
      "GH deficiency：rhGH 0.025-0.05 mg/kg/day SC qHS 至 bone age 接近成熟",
      "合併症治療：若 hypothyroidism 補 levothyroxine；celiac 則 gluten-free diet",
      "衛教：每 3-6 個月追蹤生長、營養（蛋白質、鈣、維他命 D）、運動、心理支持、家長理解診斷與長期治療計畫"
    ],
    redFlags: [
      "height velocity < 4 cm/yr → 內分泌轉診",
      "頭痛 + 視野缺損 → CNS tumor"
    ]
  },

  {
    id: "114-09",
    source: "114",
    age: 1,
    sex: "M",
    department: "小",
    system: "小兒/呼吸",
    chiefComplaint: "1 歲男童慢性咳嗽 + wheezing",
    vignette: "1 歲男童，秋季開始咳嗽變頻繁，早晚嚴重，有痰，咳到吐。曾聽到咻咻呼吸聲、喘，急診做過呼吸治療。最近又開始頻繁，食慾差、夜咳影響睡眠，>1 個月。AD 史，爸媽均有 AR + AD。",
    history: [
      "母生 3A + 吃喝拉動睡：出生史、足月否、Apgar、出生後呼吸問題、疫苗接種、生長發展",
      "咳嗽 LQQOPERA：日夜 pattern、早晚加重、誘發因子（運動/冷空氣/過敏原）、持續 > 1 個月",
      "Wheezing 史、過去急診與住院、bronchodilator therapy 反應",
      "Atopy triad：個人 AD（atopic dermatitis，異位性皮膚炎）、AR（allergic rhinitis）、asthma；家族 AR + AD（父母皆有）",
      "鑑別線索：感染性（發燒、流鼻水、接觸史）、GERD（嘔吐、吐奶）、foreign body（突發嗆咳）"
    ],
    pe: [
      "Vital signs + SpO2 + RR + work of breathing（retraction、nasal flaring、grunting）",
      "肺部 IPPA：wheezing、prolonged expiration、crackles、air entry 對稱",
      "皮膚 AD 病灶分布、allergic shiner、Dennie-Morgan line、nasal turbinate 蒼白腫脹",
      "Growth curve、ENT（扁桃體、中耳）",
      "Bedside peak flow（年齡許可時）、必要時 CXR 排除異物與 pneumonia"
    ],
    ddx: [
      "Childhood asthma（最可能）",
      "Post-viral cough / RAD",
      "Allergic rhinitis with post-nasal drip",
      "GERD-induced cough",
      "Foreign body aspiration（要問清楚）"
    ],
    explanation: [
      "childhood asthma（兒童氣喘）核心是 chronic airway inflammation + bronchial hyperresponsiveness + reversible airflow obstruction",
      "Atopic march（過敏進行曲）：嬰幼兒 AD → AR → asthma，本案父母皆 AR + AD 屬高風險族群",
      "夜咳、咳到吐、聽到 wheezing、急診做過 bronchodilator 緩解，符合 asthma 典型特徵",
      "未控制 asthma 會影響生長、睡眠、活動量，反覆 exacerbation 可造成 airway remodeling 與肺功能下降",
      "正確使用 controller medication（尤其 ICS）可大幅減少 exacerbation 與住院，並改善長期預後"
    ],
    treatment: [
      "Workup：詳細病史與 trigger 評估、CXR 排除 foreign body / pneumonia、IgE 與吸入性過敏原檢測、peripheral eosinophil count",
      "急性 wheezing：nebulized SABA（salbutamol（Ventolin）0.15 mg/kg q20min ×3）+ 若中重度 oral prednisolone 1-2 mg/kg/day ×3-5 days",
      "Controller（GINA for children < 5 yr）：低劑量 ICS（fluticasone 50 μg BID via spacer）daily 或 ICS-LTRA（montelukast 4 mg PO qHS）",
      "Rescue：salbutamol MDI 2-4 puff with spacer，按需求使用；評估 asthma control 每 3 個月",
      "預防：流感疫苗年年打、肺炎鏈球菌疫苗依時程",
      "衛教：避免二手菸與過敏原（塵蟎、寵物、黴菌）、規律使用 controller 不擅自停藥、辨識 exacerbation 警訊、正確 spacer 使用、定期追蹤調整治療"
    ],
    redFlags: [
      "SpO2 < 92% + 用力呼吸 → 急性嚴重 asthma",
      "突發 cough/choking → FB"
    ]
  },

  {
    id: "114-10",
    source: "114",
    age: 46,
    sex: "F",
    department: "內",
    system: "感染/腎泌",
    chiefComplaint: "發燒 3 天 + 畏寒 + 排尿燒灼",
    vignette: "46 歲女性，國中老師。發燒 3 天，自量 38-38.5℃，今晚畏寒、39℃。無上呼吸道/腸胃症狀，平常憋尿。近日小便燒灼，左腰及腹部不適。",
    history: [
      "發燒 LQQOPERA：pattern、最高溫（39℃）、間歇/持續、寒顫、退燒藥反應、時程（3 天）",
      "泌尿症狀：dysuria（排尿燒灼）、frequency、urgency、hematuria、suprapubic pain、尿液異味",
      "Flank pain（左腰）+ CVA tenderness、噁心嘔吐、上行感染徵象",
      "個人史 TOCC+ABC：性行為、衛生習慣、憋尿（國中老師職業特性）、飲水量、泌尿手術或結石史",
      "免疫抑制因子：DM、steroid、pregnancy、CKD、反覆 UTI 病史"
    ],
    pe: [
      "Vital signs（注意 sepsis：HR、BP、RR、體溫）+ 一般外觀與意識",
      "CVA knocking tenderness（單側 → acute pyelonephritis）",
      "Suprapubic tenderness、腹部 IPPA 排除其他感染源",
      "Pelvic exam（排除 PID）、皮膚 cellulitis",
      "Bedside：UA + urine culture、blood culture × 2、KUB 或 renal ultrasound"
    ],
    ddx: [
      "Acute pyelonephritis（APN，最可能）",
      "Lower UTI / cystitis",
      "Urolithiasis with infection",
      "PID（婦科必排）",
      "Acute appendicitis（右側）"
    ],
    explanation: [
      "acute pyelonephritis（APN，急性腎盂腎炎）是上泌尿道感染，最常見病原為 E. coli、Klebsiella pneumoniae、Proteus",
      "女性短尿道、憋尿、性活動是主要危險因子，細菌經尿道上行至膀胱再到腎盂",
      "典型三聯症：fever、flank pain（CVA tenderness）、dysuria/frequency，您的症狀完全吻合",
      "若不及時治療可能進展為 urosepsis、renal abscess、emphysematous pyelonephritis（尤其 DM 者）、慢性腎瘢痕",
      "Pregnant、DM、結石阻塞、免疫低下者風險更高，需積極住院處理並找結構性問題"
    ],
    treatment: [
      "Workup：UA + urine culture、CBC、CRP、procalcitonin、BUN/Cr、blood culture ×2（高燒者）；renal ultrasound 或 non-contrast CT 排除結石 / 阻塞 / 膿瘍",
      "輕症 outpatient：ciprofloxacin 500 mg PO BID ×7 days 或 ceftibuten 400 mg PO QD + 先給 1 dose IV ceftriaxone 1 g",
      "重症 / 高燒 / 嘔吐 / 懷疑敗血症 → 住院 IV：ceftriaxone（Rocephin）2 g IV QD 或 piperacillin/tazobactam 4.5 g IV q8h，依 culture 結果 de-escalation",
      "支持療法：IV hydration、acetaminophen 退燒、antiemetic；72 小時無改善要重新影像找膿瘍或阻塞",
      "特殊情況：obstructive uropathy + APN 立即 drainage（PCN 或 DJ stent）；pregnant APN 一律住院並避開 fluoroquinolones",
      "衛教：每日水分 ≥ 2 L、不憋尿、性行為後排尿、由前往後擦拭、完成完整療程、culture 追蹤並追蹤腎功能"
    ],
    redFlags: [
      "Sepsis criteria → admit + IV abx",
      "Obstructive uropathy + APN → 急 drainage"
    ]
  },

  {
    id: "114-11",
    source: "114",
    age: 55,
    sex: "F",
    department: "內",
    system: "精神",
    chiefComplaint: "近兩個月失眠",
    vignette: "55 歲家庭主婦，失眠 2 個月。身體健康、無慢性病、無用藥。婆婆 3 個月前搬來同住。個性神經質易緊張。擔心睡不好影響健康。",
    history: [
      "睡眠史 LQQOPERA：入睡困難、睡眠維持、早醒型態、總睡眠時數、規律性、持續多久",
      "精神科四大必問：mood（情緒）、appetite（食慾）、sleep 以外日間功能、suicide ideation 自殺意念",
      "心理社會壓力源：婆婆同住、家庭關係、婚姻、經濟、近期重大事件",
      "內科病史 + 藥物：甲狀腺疾病、停經症狀、咖啡因酒精、安眠藥或 OTC 使用史",
      "OSA（obstructive sleep apnea）篩檢：鼾聲、見證 apnea、日間嗜睡、BMI、頸圍"
    ],
    pe: [
      "Vital signs、BMI、頸圍（OSA 風險）、甲狀腺觸診",
      "心肺聽診排除心衰與氣喘夜咳",
      "Mental status exam：appearance、mood、affect、thought、insight、suicide risk",
      "篩檢量表：PHQ-9（憂鬱）、GAD-7（焦慮）、ISI（Insomnia Severity Index）",
      "實驗室 + 依需要檢查：TSH、CBC、血糖；疑 OSA 轉 polysomnography"
    ],
    ddx: [
      "Adjustment disorder with insomnia",
      "Generalized anxiety disorder",
      "Major depressive disorder",
      "Perimenopausal symptoms",
      "Hyperthyroidism / OSA"
    ],
    explanation: [
      "Insomnia disorder（失眠症）指入睡困難、維持困難或早醒 ≥ 3 nights/week 持續 ≥ 3 個月並影響日間功能",
      "您的失眠有明確誘因（婆婆同住壓力）加上易緊張性格，屬於 adjustment disorder with insomnia 或焦慮相關失眠",
      "大腦在壓力下過度警醒（hyperarousal），交感神經升高，入睡系統被抑制，形成惡性循環",
      "長期失眠會提高心血管疾病、代謝症候群、免疫下降、憂鬱與意外風險",
      "CBT-I（cognitive behavioral therapy for insomnia）是一線治療，效果優於長期安眠藥且無依賴"
    ],
    treatment: [
      "Workup：2 週睡眠日誌、PHQ-9/GAD-7/ISI、TSH、CBC、電解質；懷疑 OSA 安排 polysomnography",
      "First-line：CBT-I 包含 sleep restriction、stimulus control、relaxation、cognitive restructuring",
      "Sleep hygiene：固定就寢起床時間、避免白天小睡、睡前 6 小時避咖啡因酒精、臥室僅供睡眠與性生活",
      "短期藥物（< 4 週）：zolpidem（Stilnox）5-10 mg PO qHS prn，55 歲女性避免長期使用以防跌倒",
      "合併焦慮憂鬱者加 SSRI 如 escitalopram（Lexapro）10 mg PO QD，避免長期 BZD 依賴",
      "衛教：回診追蹤症狀、家人溝通減壓、壓力管理課程、出現自殺意念立即返診或精神科"
    ],
    redFlags: [
      "自殺意念 → 立即精神科轉介",
      "週末嚴重打鼾 + 日間嗜睡 → OSA"
    ]
  },

  {
    id: "114-12",
    source: "114",
    age: 50,
    sex: "M",
    department: "外",
    system: "腸胃",
    chiefComplaint: "腹痛（臍周 → 右下腹）",
    vignette: "50 歲男性，腹痛。昨晚 6 點晚餐後肚子不舒服（臍周）+ 嘔吐感。胃藥無效。9 時陣陣絞痛無嘔吐。半夜 3 點上廁所發現走路時 RLQ 痛無法直立。",
    history: [
      "腹痛 LQQOPERA：起始臍周 → RLQ（right lower quadrant）移轉痛、陣發絞痛、走路加劇是經典 appendicitis",
      "伴隨症狀：anorexia（食慾不振）、noausea、嘔吐、低燒、排氣排便變化、腹瀉",
      "排尿症狀排除 ureteral colic（輸尿管絞痛）；腹瀉 + 痙攣排除 gastroenteritis",
      "外科病史：腹部手術史、appendectomy、hernia、IBD、結石；藥物、過敏",
      "個人史 AMPLE：allergy、medication、past history、last meal、event 時序"
    ],
    pe: [
      "Vital signs（發燒、tachycardia 提示 infection/穿孔）",
      "腹部 IPPA：bowel sound、guarding、rebound tenderness、rigidity、muscle guarding",
      "特殊徵象：McBurney point tenderness、Rovsing sign、psoas sign、obturator sign",
      "DRE（digital rectal exam）觸診 pelvic appendix、Alvarado score 計算",
      "Bedside：CBC、CRP、UA、urine β-hCG（女性）、腹部超音波或 CT"
    ],
    ddx: [
      "Acute appendicitis（最可能）",
      "Mesenteric adenitis",
      "Right ureteral stone",
      "Cecal diverticulitis",
      "Meckel's diverticulitis"
    ],
    explanation: [
      "Acute appendicitis（急性闌尾炎）由 appendix lumen 被 fecalith 或淋巴增生阻塞 → 細菌增生 → 黏膜缺血壞死",
      "經典症狀：臍周痛 → 移轉到 RLQ McBurney point，伴 anorexia、nausea、低燒",
      "腹膜刺激徵象（rebound、guarding、Rovsing sign）代表發炎已波及腹膜",
      "若延誤 24-72 小時可能 perforation 形成 abscess、peritonitis、sepsis",
      "及時 appendectomy 預後良好、死亡率 < 1%；穿孔者併發症與住院天數大幅增加"
    ],
    treatment: [
      "Workup：CBC（leukocytosis with left shift）、CRP、UA 排除尿路、abdominal CT with contrast（或超音波於年輕女性）、Alvarado score",
      "急性處置：NPO、IV fluid resuscitation、IV antibiotics 如 cefoxitin 2 g IV q6h 或 ceftriaxone 2 g + metronidazole 500 mg IV q8h、IV analgesia",
      "Definitive：laparoscopic appendectomy 為 first-line；perforation with abscess 先 percutaneous drainage + IV abx 再 interval appendectomy",
      "術後：早期下床、漸進飲食、non-perforated 停 abx、perforated 延長 4-7 days",
      "併發症監測：surgical site infection、intra-abdominal abscess、ileus、stump leak",
      "衛教：傷口照護、辨識感染徵象（發燒、紅腫熱痛、膿液）、2 週內避免重物、門診回診拆線"
    ],
    redFlags: [
      "Peritoneal sign + 發燒 + WBC↑ → 急開（穿孔風險）",
      "Free air on imaging → 緊急手術"
    ]
  },

  {
    id: "114-13",
    source: "114",
    age: 48,
    sex: "M",
    department: "外",
    system: "腎泌",
    chiefComplaint: "血尿 + 腰酸（尿路結石史）",
    vignette: "48 歲男性，鐵工廠老闆。20 年前 appendectomy，5 年前左輸尿管結石做過內視鏡手術。早上工作時腰酸 + 一直想上廁所、解時下腹痛、紅尿帶血絲。腰痛站不直、噁心想吐，與以前結石相似。",
    history: [
      "Pain LQQOPERA：腰部 → 腹股溝或陰囊放射（renal colic 典型）、陣發絞痛、無法找到舒服姿勢",
      "Hematuria（血尿）特性：肉眼 vs 鏡下、起始 vs 末段、有無血塊",
      "排尿症狀：dysuria、frequency、urgency、suprapubic 脹痛；有無發燒（obstructive APN 警訊）",
      "過去史 + 職業史：結石史（5 年前 URS）、appendectomy、鐵工汗多脫水、水分攝取量",
      "Risk factors：脫水、高動物蛋白高鈉飲食、UTI、痛風、代謝症候群、家族結石史"
    ],
    pe: [
      "Vital signs（發燒 + 結石 → obstructive pyelonephritis 急症）",
      "CVA（costovertebral angle）knocking tenderness、abdominal IPPA",
      "Suprapubic tenderness、external genitalia、scrotum 觸診排除 torsion",
      "特殊：testicular exam 排除睪丸病變放射痛",
      "Bedside：UA（hematuria/leukocytes/nitrite）、bedside ultrasound 看 hydronephrosis、non-contrast CT KUB"
    ],
    ddx: [
      "Ureteral / renal stone（最可能）",
      "Obstructive pyelonephritis（必排，急症）",
      "Renal cell carcinoma / 膀胱癌",
      "Renal infarction",
      "Acute appendicitis（右側）"
    ],
    explanation: [
      "Ureteral stone（輸尿管結石）造成尿液阻塞，輸尿管平滑肌痙攣產生 colicky flank pain 放射至腹股溝或陰囊",
      "結石摩擦黏膜造成 hematuria（血尿）、頻尿、急尿；症狀與上次類似故再發可能性高",
      "< 5 mm 結石大多可自行排出；> 6 mm 或卡在 UPJ、cross iliac vessels、UVJ 三處生理狹窄較難自然排出",
      "Obstructive pyelonephritis（阻塞性腎盂腎炎）是泌尿急症：發燒 + 結石 + 阻塞 → 必須緊急 decompression",
      "結石病史者 5-10 年再發率達 50%，需長期水分與飲食調整以預防"
    ],
    treatment: [
      "Workup：UA、urine culture、CBC、BUN/Cr、electrolyte、Ca/uric acid/phosphate；non-contrast CT KUB（first-line imaging）或超音波",
      "急性止痛：IV ketorolac 30 mg 或 NSAIDs；嘔吐者加 antiemetic、IV hydration",
      "Medical expulsive therapy（5-10 mm distal stone）：tamsulosin（Harnalidge）0.4 mg PO QD ×4 weeks",
      "介入 indication：> 10 mm、感染合併阻塞、無法控制疼痛、單一腎臟、AKI → URS（ureteroscopy）+ stone extraction、ESWL、PCNL",
      "Obstructive APN 急症：立即 DJ stent 或 PCN（percutaneous nephrostomy）drainage + IV broad-spectrum abx",
      "衛教：每日水分 > 2.5 L、低鈉低動物蛋白飲食、依結石成分調整（calcium oxalate 限草酸、uric acid 加 allopurinol）、定期追蹤"
    ],
    redFlags: [
      "發燒 + 結石 + WBC↑ → 急 PCN drainage",
      "Anuria → 雙側阻塞 / 單腎"
    ]
  },

  {
    id: "114-14",
    source: "114",
    age: 65,
    sex: "M",
    department: "外",
    system: "心血管",
    chiefComplaint: "右腳大拇趾變黑 + 間歇跛行",
    vignette: "65 歲男性，右腳大拇趾變黑 3 天無外傷。最近 1 個月足部夜痛醒（一週 2-3 次），腳垂床邊可緩解。最近 1 年走 10 分鐘雙腳痛、跛行、冰冷麻木，小腿肚明顯，休息 10 分鐘緩解。20 歲起菸 1 包/d，現在 1.5 包/d。",
    history: [
      "Claudication（間歇跛行）LQQOPERA：可走距離、休息恢復時間、單側或雙側、小腿肚為主",
      "Rest pain（休息痛）：夜間痛醒、垂腳緩解 = critical limb ischemia 警訊",
      "Tissue loss：潰瘍、趾尖變黑（gangrene）、外傷史、發病時序",
      "Risk factors：吸菸 45 pack-year、DM（diabetes mellitus）、HTN、dyslipidemia、CAD/stroke 史",
      "其他血管系統：胸痛（CAD）、TIA/stroke 症狀、腹主動脈瘤家族史"
    ],
    pe: [
      "Vital signs + 雙側上肢 BP 比較、頸動脈與腹主動脈聽診 bruit",
      "周邊脈搏：femoral、popliteal、dorsalis pedis、posterior tibial 雙側比較",
      "皮膚視診：顏色、溫度、毛髮脫落、潰瘍、gangrene、capillary refill",
      "特殊測試：ABI（ankle-brachial index）< 0.9 為 PAOD、< 0.4 critical、Buerger test 看 elevation pallor",
      "Bedside：Doppler ultrasound、toe pressure、ECG 評估共病 CAD"
    ],
    ddx: [
      "PAOD with critical limb ischemia（必開）",
      "Acute limb ischemia（embolic）",
      "Buerger disease（thromboangiitis）",
      "Diabetic neuropathy（鑑別 rest pain）",
      "Spinal stenosis（neurogenic claudication）"
    ],
    explanation: [
      "PAOD（peripheral arterial occlusive disease，周邊動脈阻塞疾病）由 atherosclerosis 造成下肢動脈進行性狹窄阻塞",
      "Fontaine stage：I 無症狀 → II claudication → III rest pain → IV tissue loss；您已到 stage IV（critical limb ischemia, CLI）",
      "Rest pain 平躺時惡化、垂腳緩解（重力增加灌流）是嚴重缺血信號，代表血流已不足以維持組織代謝",
      "吸菸是最強危險因子，同時 PAOD 是全身 atherosclerosis 表現，CAD 與 cerebrovascular disease 風險顯著升高",
      "CLI 若不重建血流，6 個月內截肢率 30-40%、死亡率 20%，及早處理可顯著改善預後"
    ],
    treatment: [
      "Workup：ABI、toe pressure、Doppler ultrasound、CTA/MRA/DSA 評估病灶；CBC、HbA1c、lipid、ECG、心臟科評估共病",
      "急性處置：傷口清創與保護、控制感染用 broad-spectrum abx、止痛（腎功能差者避 NSAID）",
      "血管重建：endovascular PTA（percutaneous transluminal angioplasty）+ stent 或 bypass surgery；無法重建 + 廣泛 gangrene → amputation",
      "Medical therapy：antiplatelet aspirin 100 mg PO QD 或 clopidogrel（Plavix）75 mg、high-intensity statin atorvastatin 40-80 mg、cilostazol（Pletaal）100 mg PO BID",
      "Risk factor control：血壓 < 130/80、HbA1c < 7%、LDL < 70 mg/dL",
      "衛教：絕對戒菸為首要、supervised exercise therapy、足部每日檢查避免外傷、傷口惡化立即就醫、定期血管追蹤"
    ],
    redFlags: [
      "6P（pain/pallor/pulseless/paralysis/paresthesia/poikilothermia）→ 6 hr 內 revascularization",
      "Wet gangrene + 發燒 → 急 amputation"
    ]
  },

  {
    id: "114-15",
    source: "114",
    age: 35,
    sex: "F",
    department: "婦",
    system: "婦產",
    chiefComplaint: "子宮頸抹片異常",
    vignette: "35 歲女性，2 週前診所 Pap smear 異常被轉診婦科。再婚，2 個女兒（5、8 歲）。職業是舞廳服務人員。無病史。曾有 5 個性伴侶。",
    history: [
      "性孕經分片：first sex age、性伴侶數（本案 ≥ 5）、HPV vaccine 史、condom use、STD 史",
      "婦科症狀：post-coital bleeding（性交後出血）、intermenstrual bleeding、異常分泌物、骨盆痛",
      "抹片史：上次 Pap smear 時間、結果、HPV typing、過去 colposcopy 或 LEEP 史",
      "Risk factors：多性伴侶、早期性行為、吸菸、immunosuppression、HIV、職業暴露",
      "GPA（gravida/para/abortion）、避孕方式、家族婦癌史、LMP"
    ],
    pe: [
      "Vital signs、全身 lymph node（inguinal、supraclavicular）",
      "Speculum：cervix 外觀、friable tissue、ulcer、exophytic mass、異常血管",
      "Bimanual exam：子宮大小、附件（adnexa）腫塊或壓痛",
      "DRE：parametrium 侵犯、recto-vaginal septum nodularity",
      "Colposcopy + directed biopsy、HPV DNA typing、HIV/STD screen"
    ],
    ddx: [
      "Cervical intraepithelial neoplasia（CIN 1/2/3）",
      "Cervical cancer（micro-invasive vs invasive）",
      "Cervicitis（HPV、HSV、Chlamydia）",
      "Endometrial cancer（高齡）",
      "Vaginal cancer（rare）"
    ],
    explanation: [
      "Pap smear（子宮頸抹片）異常大多反映 HPV（human papillomavirus）感染相關的 cervical lesion",
      "持續 high-risk HPV（特別 16、18 型）感染可由 CIN 1 → CIN 2/3 → 微浸潤癌 → 浸潤癌，過程通常 5-15 年",
      "多性伴侶、早期性行為、吸菸、免疫低下會加速病程進展",
      "早期 CIN 與 carcinoma in situ 治療效果極佳，可局部切除保留子宮與生育力",
      "完整 screening + HPV vaccination 可大幅降低發生率與死亡率"
    ],
    treatment: [
      "Workup：複查 Pap + HPV co-testing、colposcopy + directed biopsy、必要時 ECC（endocervical curettage）排除管內病灶",
      "依結果分流：ASC-US/LSIL + HPV(-) → 12 個月追蹤；HSIL 或 CIN 2-3 → LEEP（loop electrosurgical excision procedure）或 cold knife conization",
      "侵犯癌依 FIGO stage：IA1 → conization 或 simple hysterectomy；IB-IIA → radical hysterectomy + pelvic LN dissection 或 CCRT（concurrent chemoradiotherapy）；advanced → CCRT ± brachytherapy",
      "治療後追蹤：6 個月與 12 個月 Pap + HPV co-test，連續 negative 後回歸常規 screening",
      "預防：9-valent HPV vaccine（治療後仍建議）、戒菸、condom use 降低再感染",
      "衛教：定期抹片、性伴侶 STD 篩檢、職業風險評估、出現異常出血或分泌物立即就醫"
    ],
    redFlags: [
      "Visible cervical mass + post-coital bleeding → 立即 biopsy",
      "HSIL/CIN3 → conization"
    ]
  },

  {
    id: "114-16",
    source: "114",
    age: 53,
    sex: "F",
    department: "內",
    system: "呼吸",
    chiefComplaint: "慢性咳嗽 2 個月 + 帶血絲",
    vignette: "53 歲女性，咳嗽 2 個多月，咳痰帶血絲，咳嗽時胸痛。CXR 異常住院。BP 120/80、T 36.5、HR 70。",
    history: [
      "咳嗽 LQQOPERA：2 個月慢性咳嗽（> 8 週為慢性）、痰量顏色、血量（streaks vs frank）、夜咳",
      "B symptoms：發燒、夜汗、體重減輕 ≥ 5%、食慾不振、疲倦",
      "胸痛性質 + 呼吸困難：pleuritic（胸膜侵犯）vs 持續鈍痛、端坐呼吸",
      "Risk factors：吸菸、二手菸、廚房油煙、TB（tuberculosis）接觸、職業 asbestos、家族肺癌史",
      "其他：吞嚥困難、聲音沙啞（recurrent laryngeal nerve）、SVC（superior vena cava）syndrome 臉脹、骨痛"
    ],
    pe: [
      "Vital signs + SpO2、general 評估 cachexia、clubbing（杵狀指）",
      "Lymph node：supraclavicular（Virchow node）、axillary、cervical",
      "胸部 IPPA：呼吸音減弱、dullness、egophony、crackles、pleural rub",
      "特殊徵象：頸靜脈怒張（SVC syndrome）、Horner syndrome（Pancoast tumor）、肝脾腫",
      "Bedside：CXR、pulse oximetry、ECG 排除心因性胸痛"
    ],
    ddx: [
      "Lung cancer（最可能）",
      "Pulmonary tuberculosis",
      "Bronchiectasis with hemoptysis",
      "Pneumonia / lung abscess",
      "Pulmonary embolism with infarct"
    ],
    explanation: [
      "Lung cancer（肺癌）是慢性咳嗽 > 8 週 + hemoptysis（咳血）+ 胸痛 + CXR 異常的高警訊組合",
      "病理分 NSCLC（non-small cell lung cancer，85%：adenocarcinoma、squamous、large cell）與 SCLC（small cell，15%）",
      "亞洲不吸菸女性 adenocarcinoma 比例高，常與 EGFR mutation 相關，需問廚房油煙與二手菸暴露",
      "Hemoptysis 因腫瘤侵犯支氣管黏膜或血管造成；胸痛提示 pleura 或 chest wall invasion",
      "TNM stage 與分子標記決定治療策略；早期手術預後佳，晚期 targeted therapy 與 immunotherapy 顯著改善存活"
    ],
    treatment: [
      "Workup：CXR、chest CT with contrast、sputum cytology、bronchoscopy + biopsy；確診後 PET-CT + brain MRI 做 staging、molecular testing（EGFR/ALK/ROS1/PD-L1）",
      "排除鑑別：sputum AFB ×3 + TB-PCR 排除 TB、blood culture、D-dimer ± CTPA 排除 PE、痰培養排除 lung abscess",
      "Treatment by stage：early-stage NSCLC → lobectomy + mediastinal LN dissection ± adjuvant chemo；locally advanced → CCRT；advanced/metastatic → targeted therapy（如 osimertinib）或 immunotherapy（pembrolizumab）± chemo",
      "SCLC：limited-stage concurrent chemoRT + PCI（prophylactic cranial irradiation）；extensive-stage platinum-based chemo + immunotherapy",
      "Symptom control：止咳 codeine 15-30 mg PO q4-6h prn、依 WHO ladder 止痛、營養支持、呼吸復健",
      "衛教：絕對戒菸、高風險者 LDCT（low-dose CT）篩檢、家人戒菸、multidisciplinary team 討論治療、預立醫療決定"
    ],
    redFlags: [
      "大量咳血 > 200 mL → bronchial artery embolization",
      "SVC syndrome → 急 RT/支架"
    ]
  },

  {
    id: "114-17",
    source: "114",
    age: 55,
    sex: "M",
    department: "外",
    system: "腸胃",
    chiefComplaint: "腹痛 3 天 + 墨綠色嘔吐",
    vignette: "55 歲，3 天前婚禮後腹痛 + 噁心嘔吐。診所拿藥無效，疼痛加劇送急診。早上吐出大量墨綠色液體（bilious vomiting）。",
    history: [
      "腹痛 LQQOPERA：絞痛 vs 持續痛、位置、有無排氣排便（3 天婚宴後）、加重緩解因子",
      "嘔吐性質：gastric content → bilious（墨綠色，提示 ampulla 以下阻塞）→ feculent（遠端 SBO）",
      "伴隨症狀：腹脹、bowel habit change、體重減輕、解黑便血便、發燒",
      "外科病史：腹部手術史（adhesion 最常見原因）、hernia、IBD、cancer、便祕史",
      "飲食、藥物（opioid ileus）、近期感染、最後進食與排氣時間"
    ],
    pe: [
      "Vital signs + orthostatic change（dehydration）、CRT、mucous membrane",
      "腹部 IPPA：distension、visible peristalsis、bowel sound high-pitched 或 silent、tympany on percussion",
      "特殊：previous surgical scar、hernia 觸診（inguinal/umbilical/femoral）、guarding、rebound",
      "DRE（digital rectal exam）：empty rectum、blood、mass",
      "Bedside：KUB（air-fluid levels、dilated loops）、abdominal CT with contrast、lactate、ABG"
    ],
    ddx: [
      "Small bowel obstruction（adhesion 最常見）",
      "Incarcerated/strangulated hernia",
      "Volvulus / intussusception",
      "Mesenteric ischemia",
      "Acute pancreatitis"
    ],
    explanation: [
      "Small bowel obstruction（SBO，小腸阻塞）最常見原因為術後 adhesion（沾黏）、hernia incarceration、tumor",
      "阻塞近端腸道擴張積液積氣 → 嘔吐（早期 gastric 之後 bilious 墨綠色）、腹脹、絞痛、無排氣排便",
      "若進展為 strangulation（絞窄）→ 腸壁缺血壞死 → 穿孔、敗血症，死亡率大幅上升",
      "須區分 partial vs complete、simple vs strangulated obstruction，後者需立即手術",
      "Bilious vomiting 提示阻塞點在 ampulla of Vater 以下，符合 SBO 定位"
    ],
    treatment: [
      "Workup：abdominal X-ray（air-fluid levels、dilated loops > 3 cm）、abdominal CT with contrast 找 transition point 與絞窄徵象；CBC、electrolyte、BUN/Cr、lactate、ABG",
      "急性處置：NPO、NG tube decompression、IV fluid resuscitation、correct electrolyte、Foley 監測尿量、IV analgesia、antiemetic",
      "IV antibiotics 若懷疑絞窄或穿孔：cefoxitin 2 g IV q6h 或 ceftriaxone 2 g + metronidazole 500 mg IV q8h",
      "Conservative trial（simple SBO 無絞窄徵象）24-48 hr；若無改善或出現 peritonitis、發燒、leukocytosis、lactate 上升 → emergency surgery（adhesiolysis、bowel resection）",
      "Closed-loop 或 strangulated obstruction：立即開刀，不可觀察",
      "衛教：術後早期下床、漸進飲食、避免高 residue 至腸蠕動恢復、辨識復發症狀（嘔吐、腹脹、停止排氣）、長期追蹤"
    ],
    redFlags: [
      "Strangulation：發燒 + peritoneal sign + lactate↑ → 急開",
      "完全阻塞 + 不解氣便 > 48 hr → surgery"
    ]
  },

  {
    id: "114-18",
    source: "114",
    age: 48,
    sex: "F",
    department: "婦",
    system: "婦產/內分泌",
    chiefComplaint: "心悸 + 月經不規則 + 熱潮紅",
    vignette: "48 歲女性，心悸。近 1 年月經不規則，最近 3 個月心悸、熱潮紅嚴重。月經週期由 22-25 天變 45-60 天，量減少。LMP 兩個月前。無慢性病。",
    history: [
      "性孕經分片：LMP（兩個月前）、月經週期由 22-25 天變 45-60 天、量減少、GPA、避孕、排除懷孕",
      "更年期症狀：hot flush（熱潮紅）、night sweat、vaginal dryness、dyspareunia、情緒波動、失眠",
      "心悸 LQQOPERA：頻率、持續時間、誘發因子、伴隨胸痛、暈厥、呼吸困難",
      "甲狀腺症狀：怕熱、體重下降、手抖、腹瀉、眼凸（鑑別 hyperthyroidism）",
      "內科病史 + 家族史：HTN、DM、CAD、乳癌、VTE、骨質疏鬆（MHT 禁忌評估）"
    ],
    pe: [
      "Vital signs（HR、BP、orthostatic）、BMI",
      "甲狀腺觸診、手部震顫、皮膚溫濕、眼徵（exophthalmos、lid lag）",
      "心肺聽診：murmur、bruit、rhythm regularity",
      "乳房檢查 + 婦科 pelvic exam（MHT 前 baseline）",
      "Bedside：TSH、free T4、FSH/LH、estradiol、ECG（心悸者）、urine β-hCG"
    ],
    ddx: [
      "Perimenopause / menopause",
      "Hyperthyroidism（鑑別關鍵）",
      "Anxiety disorder",
      "Pheochromocytoma",
      "Cardiac arrhythmia"
    ],
    explanation: [
      "Perimenopause（更年期過渡期）因 ovarian function 漸退、estrogen 波動造成 vasomotor symptoms 與月經週期改變",
      "典型表現：hot flush、night sweat、心悸、情緒波動、失眠、月經週期變長量變少，平均持續 4-8 年",
      "關鍵鑑別：hyperthyroidism（甲狀腺亢進）可呈現相似的心悸、體重下降、不耐熱，TSH 是區分關鍵",
      "長期 estrogen 缺乏增加 osteoporosis（骨質疏鬆）、CVD（cardiovascular disease）、urogenital atrophy 風險",
      "症狀嚴重影響生活時可考慮 MHT（menopausal hormone therapy），需個別化評估 benefit/risk"
    ],
    treatment: [
      "Workup：TSH、free T4（必排 hyperthyroidism）、FSH（升高支持 perimenopause）、CBC、lipid、血糖、ECG、DEXA 骨密度 baseline",
      "Vasomotor first-line：MHT（estrogen + progestogen 因子宮完整）如 estradiol patch 0.05 mg/d + micronized progesterone 100 mg PO qHS，療程個別化",
      "MHT 禁忌（乳癌、VTE、CHD、unexplained uterine bleeding）→ 非荷爾蒙：SSRI 如 paroxetine（Paxil）7.5-25 mg PO QD、SNRI venlafaxine、gabapentin",
      "Bone health：calcium 1000-1200 mg/d + vitamin D 800-1000 IU/d、weight-bearing exercise、戒菸限酒",
      "心悸評估：TSH 正常且 ECG 無異常可先觀察；持續發作 → 24 hr Holter monitor",
      "衛教：規律運動、地中海飲食、心理支持、定期 mammogram/Pap/DEXA、停經 ≥ 12 個月後再出血立即回診排內膜癌"
    ],
    redFlags: [
      "Stop bleeding > 12 mo 後再出血 → 排內膜癌",
      "心悸 + 暈厥 → 24 hr Holter"
    ]
  },

  {
    id: "114-19",
    source: "114",
    age: 28,
    sex: "F",
    department: "婦",
    system: "婦產",
    chiefComplaint: "經痛加劇 1 年",
    vignette: "28 歲未婚女，痛經加劇需止痛藥壓制，影響工作。經痛在月經第 1-2 天最痛，整個腹部痙攣。有性行為。母 48 歲因 adenomyosis 切除子宮。",
    history: [
      "經痛時序：primary（menarche 初即有）vs secondary（近 1 年加劇為 secondary）、嚴重度分級",
      "疼痛 LQQOPERA：月經第 1-2 天最痛、痙攣性、放射至背/大腿、NSAID 反應",
      "伴隨症狀：deep dyspareunia（深部性交痛）、dyschezia（排便痛）、dysuria、經期腹瀉（endometriosis 典型）",
      "性孕經分片：經血量、blood clot、menorrhagia、週期、GPA、不孕史、避孕方式",
      "家族史：母 48 歲因 adenomyosis 切除子宮 → endometriosis/adenomyosis 風險顯著增加"
    ],
    pe: [
      "Vital signs、腹部視觸診排除 pelvic mass、peritoneal sign",
      "Speculum：cervix 外觀、cul-de-sac 病灶、陰道後穹窿 nodularity",
      "Bimanual exam：子宮大小質地（boggy enlarged 提示 adenomyosis）、retroverted、附件腫塊（endometrioma）",
      "特殊：uterosacral ligament tenderness 與 nodularity（endometriosis 特徵）、cervical motion tenderness",
      "Bedside：TVS（transvaginal sonography）看 endometrioma、CA-125（不特異）、尿 β-hCG"
    ],
    ddx: [
      "Endometriosis（最可能）",
      "Adenomyosis",
      "Primary dysmenorrhea",
      "Pelvic inflammatory disease",
      "Uterine fibroid"
    ],
    explanation: [
      "Endometriosis（子宮內膜異位症）為 endometrial-like tissue 異位生長在子宮腔外（卵巢、骨盆腹膜、cul-de-sac）",
      "異位內膜隨月經週期出血造成發炎、沾黏、chocolate cyst、慢性骨盆疼痛、dysmenorrhea、deep dyspareunia、不孕",
      "家族史（母 adenomyosis 切除子宮）顯著增加風險，典型在生育年齡女性發病、停經後緩解",
      "Adenomyosis 是內膜長入子宮肌肉層造成 menorrhagia + dysmenorrhea + 子宮腫大",
      "未治療可造成不孕（30-50%）、影響生活與工作品質、ovarian endometrioma 罕見惡性化"
    ],
    treatment: [
      "Workup：詳細症狀史、bimanual exam、TVS 看 endometrioma；CA-125 不特異；確診 gold standard 為 laparoscopy + biopsy",
      "First-line：NSAIDs 如 ibuprofen 400-600 mg PO q6h prn + COC（combined oral contraceptive）continuous regimen 抑制排卵與月經",
      "Second-line：progestin 如 norethisterone 5 mg PO QD、levonorgestrel-IUS（Mirena）、GnRH agonist leuprolide + add-back therapy ≤ 6 months",
      "手術：refractory pain、endometrioma > 4 cm、不孕 → laparoscopic excision 或 ablation，保留生育功能",
      "生育規劃：有生育意願早期轉 reproductive medicine，endometriosis fertility index 評估",
      "衛教：經期止痛策略、規律運動與熱敷可減痛、長期追蹤避免復發、心理支持、家族女性 awareness"
    ],
    redFlags: [
      "不孕 + 嚴重痛經 → laparoscopy",
      "Acute pain + adnexal mass → ovarian endometrioma rupture"
    ]
  },

  {
    id: "114-20",
    source: "114",
    age: 63,
    sex: "F",
    department: "外",
    system: "腸胃",
    chiefComplaint: "排便困難 5 天（known 大腸癌）",
    vignette: "63 歲女性，2 週前知初期大腸癌但未決定手術。近日有排氣但排便困難 5 天，前來急診。",
    history: [
      "排便史：頻率、性質、stool caliber（鉛筆狀）、tenesmus、incomplete evacuation、血便、黏液",
      "近 5 天無排便但有排氣提示 partial obstruction；大腸癌位置（左側 descending/sigmoid 易阻塞）",
      "伴隨症狀：腹脹、腹痛、嘔吐、體重減輕、貧血、食慾不振、B symptoms",
      "已知疾病：2 週前確診 early CRC（colorectal cancer）、staging、治療決策狀態、ECOG performance status",
      "共病 + 家族史：DM、CAD、anticoagulant、Lynch syndrome 家族大腸癌史",
      "老年 ADL（activities of daily living）、心理社會支持、家屬共同決策準備"
    ],
    pe: [
      "Vital signs（sepsis/dehydration 徵象）、general 評估 cachexia、pallor",
      "腹部 IPPA：distension、visible peristalsis、bowel sound、palpable mass、guarding、tympany",
      "DRE（digital rectal exam）：觸診 rectal mass、blood、impacted stool、anal tone",
      "Lymph node：supraclavicular、inguinal；肝脾腫評估 metastasis",
      "Bedside：abdominal X-ray、abdominal CT with contrast、CBC、CEA、CA 19-9"
    ],
    ddx: [
      "Malignant colonic obstruction（known CA）",
      "Fecal impaction",
      "Sigmoid volvulus",
      "Diverticular stricture",
      "Postoperative ileus（尚未開）"
    ],
    explanation: [
      "Malignant colonic obstruction（惡性大腸阻塞）由腫瘤生長阻塞腸腔造成 partial 或 complete obstruction",
      "Left-sided（descending、sigmoid）腫瘤管徑較窄 + 糞便已成形，最易出現阻塞；您有排氣無排便提示尚未完全阻塞",
      "持續阻塞 → 近端擴張、腸壁缺血、穿孔風險上升、bacterial translocation、sepsis",
      "Acute obstruction 死亡率與穿孔機率明顯高於 elective surgery，建議盡快介入",
      "處置策略需平衡 emergency decompression vs definitive oncologic resection 與患者整體狀況"
    ],
    treatment: [
      "Workup：abdominal X-ray、abdominal CT with contrast 評估阻塞位置與腫瘤 staging（liver mets、peritoneal、LN）；CBC、electrolyte、CEA、CA 19-9、CXR、lactate",
      "急性處置：NPO、NG decompression、IV fluid resuscitation、correct electrolyte、Foley、IV antibiotics 若疑穿孔或缺血（cefoxitin 2 g IV q6h）",
      "Decompression options：（1）emergency surgery with resection ± stoma（Hartmann procedure）、（2）SEMS（self-expanding metallic stent）作為 bridge to surgery 或 palliation",
      "Definitive：依 stage oncologic resection（含 mesentery 與 regional LN）+ adjuvant chemo（FOLFOX 或 CAPEOX）若 stage III",
      "完全阻塞、closed-loop、perforation、peritonitis → emergency surgery 不可延誤",
      "衛教：與家屬共同決策 emergency vs elective 利弊、stoma care 預期與適應、術後追蹤 CEA 與 colonoscopy、一等親 CRC screening"
    ],
    redFlags: [
      "Closed-loop obstruction + ischemia → 急 surgery/stent",
      "Perforation + peritonitis → emergency"
    ]
  },

  {
    id: "114-21",
    source: "114",
    age: 37,
    sex: "F",
    department: "婦",
    system: "婦產",
    chiefComplaint: "右下腹痛 + 陰道出血",
    vignette: "37 歲女性，今早 RLQ 痛 + 陰道出血（月經 1 週前剛結束）。半年前開始有第一個男友，開始有性行為。",
    history: [
      "婦產科必問「性孕經分片」：LMP（1 週前剛結束）、PMP、月經週期規則度、避孕方式、性行為頻率、GPA",
      "RLQ pain LQQOPERA：起始時間、位置、性質（colicky/持續）、放射、加重/緩解因子、與活動或月經關係",
      "陰道出血特徵：量（墊幾片）、顏色（鮮紅/暗色）、有無血塊、與性行為或月經週期關係",
      "伴隨症狀：頭暈、冷汗、肩痛（橫膈刺激提示內出血）、噁心嘔吐、發燒、解尿/解便異常",
      "PID（pelvic inflammatory disease，骨盆腔發炎）史、STD 史、IUD 使用、既往 ectopic、不孕史、家族婦科腫瘤"
    ],
    pe: [
      "Vital signs（特別注意 BP/HR：低血壓/心搏過速提示破裂內出血）、疼痛評分",
      "腹部 IPPA：rebounding tenderness、guarding、Cullen sign、RLQ 壓痛、腸音",
      "Pelvic exam：外陰/陰道出血來源、cervical motion tenderness、adnexal mass 或壓痛",
      "特殊檢查：β-hCG（quantitative）定量、TVS（transvaginal sonography）找 IUP 或 adnexal mass、free fluid",
      "Bedside：CBC、blood type + cross-match、建立兩條大孔徑 IV、心電圖監測"
    ],
    ddx: [
      "Ectopic pregnancy（必排）",
      "Ovarian torsion / ruptured cyst",
      "Acute appendicitis",
      "PID / TOA",
      "黃體出血"
    ],
    explanation: [
      "育齡女性 RLQ 痛合併不規則出血，最怕是 ectopic pregnancy（異位妊娠）——受精卵著床在輸卵管而非子宮腔",
      "胚胎在輸卵管撐大血管，若破裂會造成腹腔內出血、腹膜刺激與休克，屬婦產科急症",
      "其他可能：ovarian torsion（卵巢扭轉）缺血 6-8 小時就壞死、ruptured cyst、acute appendicitis、PID 都需排除",
      "若延誤診治，ectopic 破裂可短時間內失血數百 mL，ovarian torsion 則會永久失去卵巢功能",
      "早期診斷可用 MTX 或 laparoscopic salpingostomy 保留輸卵管，延誤則需切除輸卵管影響日後生育"
    ],
    treatment: [
      "Workup：serum + urine β-hCG、CBC、blood type、cross-match、TVS 找 IUP/adnexal mass/free fluid、UA、必要時 abdominal CT",
      "急性處置：NPO、建立兩條 18G IV、IV fluid resuscitation、monitor vital signs；血流動力不穩立即備血並會診婦產科",
      "Ectopic 藥物：未破裂 + β-hCG < 5000 + 無胎心 + 穩定 → methotrexate（MTX）50 mg/m² IM single dose，每週追蹤 β-hCG",
      "手術治療：破裂或不穩定走 emergency laparoscopy，依情況做 salpingostomy（保留）或 salpingectomy（切除）",
      "Ovarian torsion：emergency laparoscopic detorsion ± cystectomy，儘量保留卵巢功能",
      "衛教：Rh(-) 打 anti-D immunoglobulin、術後 3 個月追蹤 β-hCG 至測不到、下次懷孕早期 TVS 確認位置、討論避孕"
    ],
    redFlags: [
      "β-hCG (+) + adnexal mass + 腹痛 → ectopic 處置",
      "Vital sign 不穩 → 急開"
    ]
  },

  {
    id: "114-22",
    source: "114",
    age: 1,
    sex: "F",
    department: "小",
    system: "小兒/腸胃",
    chiefComplaint: "11 個月女嬰，腹瀉 3 天",
    vignette: "11 個月女嬰，一天 6-10 次水樣便、偶有蛋花狀，蛋花狀大便酸味，無血絲。前 2 天吐 2 次，發燒 38.5℃，輕微流鼻水。奶量降至 100 cc，今早沒喝奶。換尿布從一天多次降到 6-8 小時一次。",
    history: [
      "小兒問診「母生 3A + 吃喝拉動睡」：母親孕產史、生產週數、Apgar、出生體重、發展里程碑、疫苗（含 rotavirus）",
      "腹瀉 LQQOPERA：頻率（6-10 次/日）、量、性質（水樣/蛋花狀/血絲/黏液）、氣味（酸臭）、持續時間",
      "嘔吐特徵：bile-stained 或 blood、與腹瀉先後關係、餵食後多久發生",
      "脫水評估問診：尿量（換尿布從多次降到 6-8 hr 一次）、淚液、活力、奶量（100 cc → 今早沒喝）、體重變化",
      "接觸史：托嬰中心、家人腹瀉、近期飲食改變、副食品、最近旅遊、輪狀病毒疫苗接種紀錄"
    ],
    pe: [
      "Vital signs：HR（心搏過速為脫水早期指標）、BP、RR、體溫、CRT（capillary refill time）",
      "Dehydration sign：囟門是否凹陷、眼窩凹陷、口腔黏膜乾燥、皮膚 turgor、哭時有無淚液",
      "腹部 IPPA：distension、bowel sound（活躍/減弱）、壓痛、腫塊（排 intussusception 的臘腸狀 mass）",
      "活力與意識：清醒度、對外界反應、肌張力；體重與病前比較",
      "Bedside workup：指尖 glucose、電解質、stool routine、必要時 rotavirus antigen / stool culture"
    ],
    ddx: [
      "Acute viral gastroenteritis（rotavirus）",
      "Bacterial gastroenteritis（Salmonella）",
      "Lactose intolerance / formula intolerance",
      "Intussusception（如血便）",
      "Sepsis with diarrhea"
    ],
    explanation: [
      "acute viral gastroenteritis（急性病毒性腸胃炎）最常見病原是 rotavirus（輪狀病毒）與 norovirus，秋冬高峰",
      "水樣便是因病毒破壞小腸絨毛 → 吸收不良 + 滲透性腹瀉；蛋花狀酸臭便提示暫時性 lactose intolerance",
      "嬰幼兒體液佔體重比例高、口渴表達能力差，dehydration 進展比成人快很多，奶量下降與尿量減少是重要警訊",
      "嚴重脫水會造成 hypovolemic shock、AKI、electrolyte imbalance（低鈉/低鉀），甚至死亡",
      "多數病程 5-7 天自限，口服補液（ORS）是一線治療，通常不需 antibiotics，疫苗可顯著降低重症率"
    ],
    treatment: [
      "Workup：脫水程度評分（體重、turgor、CRT、囟門、尿量）、serum electrolyte、glucose、BUN/Cr、stool routine、必要時 rotavirus antigen 或 stool culture",
      "Mild-moderate dehydration：ORS（oral rehydration solution）50-100 mL/kg over 4 hr + ongoing loss replacement，少量多次",
      "Severe dehydration / shock：IV bolus normal saline 20 mL/kg over 5-10 min，必要時重複，之後 maintenance + deficit replacement",
      "持續餵食：母乳繼續、配方奶不稀釋、持續腹瀉可暫換 lactose-free formula；避免高糖飲料與禁食",
      "藥物：probiotics（Lactobacillus）可考慮；嬰兒不建議 antiemetic（ondansetron 例外短期可用）或 antidiarrheal（loperamide 禁用）",
      "衛教：勤洗手、玩具消毒、rotavirus vaccine、警訊（嗜睡、無尿 ≥ 6 hr、血便、高燒不退、bilious vomit）立即返診"
    ],
    redFlags: [
      "重度脫水 → IV fluid + admit",
      "Bilious vomit / blood stool → 排 surgical（intussusception）"
    ]
  },

  {
    id: "114-23",
    source: "114",
    age: 53,
    sex: "M",
    department: "內",
    system: "腸胃/腫瘤",
    chiefComplaint: "進行性吞嚥困難 2 週",
    vignette: "53 歲男性，2 週逐漸吞嚥困難。抽菸 25 年 1 包/d，應酬時喝酒。父 HTN 18 年，75 歲心臟病死。",
    history: [
      "Dysphagia（吞嚥困難）性質：solid first（mechanical obstruction）vs solid + liquid 同時（motility disorder）、進行性 vs 間歇",
      "伴隨症狀 LQQOPERA：體重減輕幅度、odynophagia（吞嚥疼痛）、regurgitation、嘔血、黑便、anemia 症狀（頭暈、喘）",
      "個人史（菸酒檳榔）：25 pack-year smoking、應酬飲酒頻率與量、檳榔、熱飲習慣——皆為 esophageal SCC 危險因子",
      "內科病史：GERD（gastroesophageal reflux disease）史、heartburn、Barrett esophagus、corrosive ingestion、放射治療史",
      "家族史：消化道腫瘤、head and neck cancer；其他：聲音沙啞、嗆咳、aspiration pneumonia 反覆"
    ],
    pe: [
      "Vital signs + 身高體重 + BMI，評估 cachexia（惡病質）程度",
      "頭頸檢查：Virchow node（左鎖骨上）、cervical lymphadenopathy、口咽/喉部黏膜、聲帶功能（聲音嘶啞提示 RLN 侵犯）",
      "胸腹 IPPA：肺部呼吸音（aspiration？）、腹部肝脾腫大、Sister Mary Joseph nodule",
      "Performance status（ECOG）評估、Karnofsky score，影響治療策略",
      "Bedside workup：CBC（貧血？）、albumin、electrolyte、CXR；確診安排 upper GI endoscopy + biopsy"
    ],
    ddx: [
      "Esophageal cancer（squamous，菸酒史符合）",
      "Esophageal stricture（peptic / corrosive）",
      "Achalasia",
      "Esophageal web / ring",
      "External compression（lung CA）"
    ],
    explanation: [
      "esophageal cancer（食道癌）progressive dysphagia 從固體到液體是經典表現，常合併顯著體重減輕",
      "Squamous cell carcinoma（SCC）好發中上段，與抽菸、酗酒、熱飲、檳榔、亞硝胺高度相關；adenocarcinoma 多在下段、與 GERD/Barrett 相關",
      "您 25 pack-year 菸史加上應酬飲酒、符合 SCC 高風險族群",
      "晚期腫瘤可侵犯 recurrent laryngeal nerve（聲音沙啞）、aorta（出血）、trachea（tracheoesophageal fistula）",
      "整體 5-year survival < 20%，但早期診斷 + multimodal therapy 能顯著改善預後，及早檢查是關鍵"
    ],
    treatment: [
      "Workup：upper GI endoscopy + biopsy 確診；EUS 評估 T/N stage、contrast CT chest+abdomen、PET-CT 找 distant metastasis、上段腫瘤加 bronchoscopy",
      "Early stage（T1a）：endoscopic resection（EMR/ESD）；T1b-T2N0：esophagectomy（Ivor-Lewis / McKeown）",
      "Locally advanced（T3 or N+）：neoadjuvant CCRT（CROSS regimen：carboplatin + paclitaxel + 41.4 Gy）+ esophagectomy",
      "Unresectable / metastatic：definitive CCRT 或 palliative chemotherapy（FOLFOX、5-FU/cisplatin）± immunotherapy（nivolumab）",
      "Symptom palliation：esophageal stent 改善吞嚥、PEG/J-tube 營養支持、止痛依 WHO analgesic ladder",
      "衛教：戒菸戒酒、營養師會診高熱量高蛋白飲食、家屬支持、multidisciplinary team 規劃、定期追蹤"
    ],
    redFlags: [
      "大量體重減輕 + 進行性 dysphagia → 緊急 EGD",
      "Aspiration pneumonia 反覆 → 排 fistula"
    ]
  },

  {
    id: "114-24",
    source: "114",
    age: 57,
    sex: "M",
    department: "內",
    system: "內分泌",
    chiefComplaint: "2 個月內體重減輕 10 kg + 多飲多尿",
    vignette: "57 歲男性，2 個月減 10 kg，1 個月口渴頻尿。麵攤老闆，工作壓力大，外食多、宵夜炒飯肉圓，睡前喝 100 cc 高粱，菸 1 包/d，無運動。",
    history: [
      "DM 典型症狀「3P」：polyuria（多尿）、polydipsia（多飲）、polyphagia（多食）；加 unintentional weight loss 10 kg/2 個月",
      "伴隨症狀 LQQOPERA：視力模糊、傷口難癒、皮膚念珠菌感染、下肢麻木、陽痿、疲倦",
      "個人史：飲食（高熱量外食、宵夜）、飲酒（睡前 100 cc 高粱）、抽菸 1 包/日、無運動——classic metabolic syndrome 組合",
      "家族史 + 內科病史：DM、HTN、dyslipidemia、CAD；本人 BMI 與腰圍歷史、血壓紀錄",
      "鑑別其他減重原因：hyperthyroidism（心悸、怕熱）、malignancy（食慾、血便）、TB（夜汗）、depression"
    ],
    pe: [
      "Vital signs + BMI + 腰圍 + BP（排 metabolic syndrome）",
      "皮膚：acanthosis nigricans（頸部/腋下黑色棘皮）、necrobiosis lipoidica、黴菌感染、傷口",
      "甲狀腺觸診（排 hyperthyroidism）、心肺聽診、頸動脈 bruit",
      "足部檢查：足背動脈、10-g monofilament、128-Hz tuning fork、反射（評估 diabetic neuropathy）",
      "Bedside workup：指尖 BG、urine dipstick（glucose/ketone/protein）、ECG、眼底鏡（retinopathy）"
    ],
    ddx: [
      "Type 2 DM（最可能）",
      "Type 1 DM / LADA",
      "Hyperthyroidism",
      "Pancreatic cancer with new-onset DM",
      "Malignancy / TB / chronic infection"
    ],
    explanation: [
      "type 2 DM（第二型糖尿病）是由 insulin resistance（胰島素抵抗）加上 relative insulin deficiency 造成 hyperglycemia",
      "血糖過高使腎臟無法完全回收糖分，糖分帶水出去 → polyuria；體液流失 → polydipsia；細胞無法用糖 → 燃燒脂肪肌肉 → 體重減輕",
      "您的高熱量飲食、宵夜、酒精、吸菸、缺乏運動、工作壓力大，是典型高風險組合",
      "若不控制，長期高血糖會造成 microvascular（retinopathy、nephropathy、neuropathy）與 macrovascular（CAD、stroke、PAOD）併發症",
      "新發 DM 加體重快速減輕 > 50 歲，需排除 pancreatic cancer；及早控制血糖可大幅降低併發症風險"
    ],
    treatment: [
      "Workup：FPG、HbA1c、OGTT、UA（ketone/protein）、lipid profile、LFT、BUN/Cr、eGFR、autoantibodies（GAD/IA-2 排 LADA）、體重快減則加 abdominal CT 排 pancreatic cancer",
      "急性：若 DKA / HHS（嚴重高血糖 + 意識改變 + ketoacidosis）→ 住院 IV fluid + IV insulin protocol + electrolyte（特別是 K）correction",
      "First-line：metformin 500 mg PO BID titrate to 1000 mg BID；若 ASCVD/HF/CKD 加 GLP-1 RA（semaglutide）或 SGLT2i（empagliflozin 10 mg PO QD）",
      "共病控制目標：HbA1c < 7%（個別化）、BP < 130/80、LDL < 100（高風險 < 70）；high-intensity statin（atorvastatin 40-80 mg PO QD）",
      "戒菸戒酒、糖尿病衛教師會診、低 GI 飲食、規律運動 ≥ 150 min/wk moderate intensity、減重 5-10%",
      "衛教：SMBG（自我監測血糖）、年度 retinal/foot/nephropathy 篩檢、hypoglycemia 辨識與處理、隨身備糖果"
    ],
    redFlags: [
      "BG > 600 + 意識改變 → HHS / DKA",
      "新發 DM > 50 歲 + 體重減輕 → 排胰臟癌"
    ]
  },

  {
    id: "114-25",
    source: "114",
    age: 38,
    sex: "F",
    department: "急",
    system: "神經/中毒",
    chiefComplaint: "突發昏倒",
    vignette: "38 歲女性，今早突然昏倒救護車送急診。以前無昏倒。3 年因壓力失眠，精神科拿安眠藥。多種助眠藥 + 朋友介紹安神中藥。已婚 10 年 2 女（1 歲、4 歲）。",
    history: [
      "目擊者描述（最關鍵）：前驅症狀（視野黑、出汗、心悸）、跌倒姿勢、抽搐、大小便失禁、tongue bite、postictal confusion 持續時間",
      "昏倒 LQQOPERA：發作時間、持續時間、清醒過程、有無頭部外傷、之前是否有先兆",
      "用藥史（藥物史）：安眠藥種類（BZD/Z-drug）、劑量、來源、近期是否自行加量；朋友介紹的安神中藥成分未知",
      "精神科病史：3 年失眠 + 精神科用藥，近期情緒、壓力、自殺意念（兩個幼女照顧壓力）、酒精使用",
      "鑑別 syncope vs seizure：心律不整史、家族猝死、運動誘發、姿勢性、空腹低血糖、月經/懷孕狀態"
    ],
    pe: [
      "Vital signs 含 orthostatic BP + SpO2 + RR（呼吸抑制？），GCS（Glasgow Coma Scale）評估意識",
      "神經學完整檢查：瞳孔大小與反應（pinpoint → opioid）、focal deficit、reflex、Babinski、頸部僵硬",
      "心肺：心律不整、murmur、carotid bruit；皮膚 track mark、tongue bite、外傷",
      "特殊測試：毒物學檢查前評估呼吸型態（Kussmaul？）、口氣（酒精/ketone）、pupil size",
      "Bedside workup：指尖 glucose、12-lead ECG（QT 延長、Brugada、arrhythmia）、非對比 CT brain 視情況"
    ],
    ddx: [
      "Drug overdose / toxicity（多種安眠藥）",
      "Vasovagal syncope",
      "Cardiac arrhythmia / structural",
      "Seizure",
      "Hypoglycemia / hyponatremia"
    ],
    explanation: [
      "中年女性突發昏倒 + 多重精神科藥物 + 來源不明中藥，首要鑑別是 drug overdose/toxicity（藥物中毒）",
      "BZD（benzodiazepine）、Z-drug、opioid、antidepressant 過量會抑制 CNS 與呼吸中樞，可能致命",
      "朋友介紹的安神中藥成分未受管制，可能混入未標示西藥或重金屬（鉛、汞），加重藥物交互作用",
      "仍需鑑別 syncope（vasovagal、cardiac arrhythmia、structural heart disease）、seizure、hypoglycemia、hyponatremia",
      "急診處置優先 ABC 穩定，穩定後才找原因；若確認為有意服藥需評估自殺風險與子女照顧問題"
    ],
    treatment: [
      "Workup：ABC + vital signs、指尖 glucose、12-lead ECG、CBC、electrolyte、BUN/Cr、LFT、ammonia、ABG、osmolar gap、urine drug screen、serum acetaminophen/salicylate level、視情況頭部 CT",
      "急性處置：airway protection（GCS ≤ 8 → intubation）、O2、IV access、cardiac monitor；hypoglycemia → D50W 50 mL IV push",
      "解毒劑：opioid → naloxone 0.4 mg IV；acetaminophen → NAC（N-acetylcysteine）；BZD 過量 → flumazenil 0.2 mg IV（慎用，長期使用者可誘發 seizure）",
      "一般支持：activated charcoal 1 g/kg PO（< 1 hr 內服 + airway 安全）、IV fluid、電解質矯正",
      "穩定後評估：精神科會診、自殺風險評估（Columbia scale）、social worker、家屬與幼女照顧安排",
      "衛教：藥物清單整合、避免重複用藥、不自行購買中藥、CBT-I 與心理治療資源、必要時住院觀察、安眠藥安全使用"
    ],
    redFlags: [
      "呼吸抑制 → naloxone/flumazenil 視藥物",
      "ECG QT 延長 / Brugada → 心因性"
    ]
  },

  {
    id: "114-26",
    source: "114",
    age: 39,
    sex: "M",
    department: "外",
    system: "腎泌/肝膽",
    chiefComplaint: "右上腹/右腰劇痛 + 冷汗",
    vignette: "39 歲男性，3 個月前右側腰部隱痛，昨夜突發右腰及右上腹劇痛、冷汗、噁心想吐。過去無病史、無外傷、無過敏。",
    history: [
      "疼痛 LQQOPERA：起點（右腰 vs RUQ）、放射（腹股溝/陰囊提示 ureter，右肩提示 gallbladder）、性質（colicky vs 持續）、加重/緩解因子",
      "排尿症狀：dysuria、hematuria（肉眼/顯微）、頻急尿、尿量；結石史、家族結石史",
      "膽道症狀：油膩餐後加劇、jaundice、灰白便、深色尿、發燒寒顫（Charcot triad）",
      "個人史：水分攝取量、職業（高溫環境？）、飲食（高嘌呤/高草酸）、前 3 個月右腰隱痛病程",
      "伴隨：發燒（提示感染）、噁心嘔吐、血便、腹脹；無外傷、無藥物過敏"
    ],
    pe: [
      "Vital signs（發燒提示感染性結石/cholangitis、tachycardia、BP）",
      "腹部 IPPA：local tenderness、rebound、guarding、bowel sound、腫塊（hydronephrosis？）",
      "特殊測試：CVA（costovertebral angle）knocking 陽性提示腎臟或輸尿管病灶；Murphy sign（深吸氣觸診中斷）提示 cholecystitis",
      "Bedside workup：UA（RBC、WBC、nitrite、crystal）、指尖 glucose、尿妊娠（女性）",
      "影像：非對比 CT KUB 確診結石；若疑膽道走 abdominal ultrasound 看 gallbladder wall、stone、CBD 寬度"
    ],
    ddx: [
      "Right ureteral / renal stone（最可能）",
      "Acute cholecystitis / cholelithiasis",
      "Acute pyelonephritis",
      "Hepatic / renal abscess",
      "Acute appendicitis（高位）"
    ],
    explanation: [
      "中年男性突發 right flank + RUQ pain + 冷汗 + 噁心，最可能是 right ureteral/renal stone（右側輸尿管/腎結石）",
      "結石卡在輸尿管造成 colicky pain（腎絞痛），常輻射至腹股溝、陰囊，伴 hematuria 與頻急尿",
      "需鑑別 acute cholecystitis（Murphy sign、發燒、白血球升高）、cholelithiasis、acute pyelonephritis（APN）、appendicitis（高位盲腸）",
      "結石本身致死率低，但合併感染（obstructive pyelonephritis → urosepsis）或單腎阻塞為急症",
      "大部分 < 5 mm 結石可自行排出，> 10 mm 需手術介入；未來復發率高達 50%，預防復發是長期目標"
    ],
    treatment: [
      "Workup：UA + urine culture、CBC、BUN/Cr、electrolyte、Ca/uric acid、LFT、amylase/lipase；非對比 CT KUB 確診結石；abdominal ultrasound 看膽囊膽管",
      "急性疼痛控制：IV ketorolac 30 mg 或 NSAIDs（避開 AKI）、antiemetic（metoclopramide 10 mg IV）、IV hydration",
      "Stone ≤ 10 mm distal ureter：MET（medical expulsive therapy）tamsulosin 0.4 mg PO QD × 4 weeks + 多喝水",
      "手術介入 indication：> 10 mm、疼痛無法控制、感染 + 阻塞、單腎、AKI → URS（ureteroscopy）、ESWL、PCNL",
      "阻塞性 APN / urosepsis：立即 DJ stent 或 PCN + IV antibiotics（ceftriaxone 2 g IV QD ± gentamicin）",
      "衛教：水分 ≥ 2.5 L/d、低鈉低動物蛋白飲食、依結石成分（calcium oxalate/uric acid）調整飲食、24-hr urine 評估、每年影像追蹤"
    ],
    redFlags: [
      "發燒 + 結石 + 阻塞 → 急 PCN/PTGBD",
      "Charcot triad → 急 ERCP（cholangitis）"
    ]
  },

  {
    id: "114-27",
    source: "114",
    age: 28,
    sex: "M",
    department: "外",
    system: "肝膽",
    chiefComplaint: "右上腹劇痛 7-8 hr",
    vignette: "28 歲男性，今早突發 RUQ 痛，止痛藥無效，診所打點滴 + 兩次止痛針仍無效，急診時已痛 7-8 hr。HTN 病史。不抽不喝不檳榔。",
    history: [
      "RUQ pain LQQOPERA：油膩餐後發作、持續 > 6 hr、放射至右肩或背（referred pain via phrenic nerve）、絞痛 vs 持續痛",
      "伴隨：發燒寒顫、jaundice、灰白便、深色尿、噁心嘔吐、食慾差",
      "內科病史：膽結石史、肝炎（HBV/HCV）、酒精使用（不抽不喝不檳榔，排除部分風險）、HTN 控制情形",
      "家族史：膽道疾病、溶血性貧血（色素性結石）、肝膽腫瘤",
      "鑑別問診：胰臟炎（穿透至背、腰帶狀痛）、PUD（空腹痛/進食緩解）、hepatitis（疲倦、食慾差）、心肌梗塞（下壁 IWMI 可表現 epigastric）"
    ],
    pe: [
      "Vital signs：體溫（發燒）、HR、BP、jaundice（sclera 黃染）",
      "腹部 IPPA：RUQ tenderness、guarding、rebound、hepatomegaly；Boas sign（右肩胛下 hyperesthesia）",
      "特殊測試：Murphy sign 陽性（深吸氣時 RUQ 觸診中斷）高度提示 acute cholecystitis；Courvoisier sign（無痛脹大膽囊→惡性）",
      "Bedside workup：CBC（WBC 升高）、CRP、LFT（ALT/AST/ALP/bilirubin）、amylase/lipase、UA",
      "影像：abdominal ultrasound 首選（thick wall > 4 mm、pericholecystic fluid、stone、sonographic Murphy sign）"
    ],
    ddx: [
      "Acute cholecystitis（最可能）",
      "Choledocholithiasis / cholangitis",
      "Acute pancreatitis",
      "Peptic ulcer disease",
      "Hepatic abscess / hepatitis"
    ],
    explanation: [
      "acute cholecystitis（急性膽囊炎）多由 gallstone 阻塞 cystic duct（膽囊管）→ 膽汁滯留 → 化學性與細菌性發炎",
      "典型表現：RUQ pain > 6 hr 不緩解、高脂餐後發作、噁心嘔吐、低燒、Murphy sign 陽性",
      "若不治療可進展為 gangrenous cholecystitis（壞疽性膽囊炎）、perforation、cholangitis（膽管炎）、biliary peritonitis、sepsis",
      "需鑑別 choledocholithiasis（黃疸 + ALT/AST 升高）、cholangitis（Charcot triad：fever/jaundice/RUQ pain）、acute pancreatitis（amylase/lipase 升高）",
      "及早 laparoscopic cholecystectomy（< 72 hr）併發症率最低，延誤手術會增加粘連難度與開腹風險"
    ],
    treatment: [
      "Workup：CBC、CRP、LFT（AST/ALT/ALP/bilirubin）、amylase/lipase、UA、abdominal ultrasound；若懷疑 CBD stone 加 MRCP",
      "急性處置：NPO、IV fluid、analgesia（IV acetaminophen 1 g 或 opioid）、antiemetic、IV antibiotics（cefuroxime 1.5 g IV q8h 或 ceftriaxone 2 g IV QD + metronidazole 500 mg IV q8h）",
      "Definitive：early laparoscopic cholecystectomy（< 72 hr 內）；高手術風險者 → percutaneous cholecystostomy（PTGBD）bridge 後擇期手術",
      "合併 CBD stone：先 ERCP 取石 + sphincterotomy，之後 cholecystectomy；若 cholangitis 走 emergency biliary drainage（ERCP 或 PTCD）",
      "嚴重 Tokyo Grade III（Reynolds pentad：Charcot triad + shock + 意識改變）→ ICU + emergency drainage",
      "衛教：術前低脂飲食、術後 1 週恢復一般飲食、傷口照護、辨識感染徵象、術後持續黃疸或腹痛立即返診"
    ],
    redFlags: [
      "Charcot triad（fever/jaundice/RUQ pain）→ ERCP",
      "Reynolds pentad → ICU + 急 drainage"
    ]
  },

  {
    id: "114-28",
    source: "114",
    age: 48,
    sex: "M",
    department: "內",
    system: "腫瘤/病情解釋",
    chiefComplaint: "食道癌診斷後病情解釋",
    vignette: "48 歲男性，食道中段癌、無轉移。郵局基層主管，3 個女兒（國中 2、國小 1），配偶 3 年前車禍亡。心情沮喪但為女兒有強烈求生意志。",
    history: [
      "病人對診斷的理解（Perception）：先前醫師如何告知、對 esophageal cancer（食道癌）認知、想知道的資訊範圍",
      "目前症狀：dysphagia 程度（固體/液體）、體重減輕、胸痛、嗆咳、營養攝取狀況",
      "個人史 + 內科病史：抽菸、飲酒、檳榔、熱飲習慣（SCC 危險因子）、GERD 史、過去放射或腫瘤史",
      "家庭社會：3 個女兒（國中 2、國小 1）照顧者角色、配偶 3 年前車禍亡、經濟（郵局基層主管）、宗教信仰",
      "情緒與希望：sadness、憂鬱症狀、自殺意念、對治療的期待、為女兒求生意志"
    ],
    pe: [
      "Vital signs + 身高體重 + BMI + 近 3 個月體重下降幅度，評估 cachexia",
      "頭頸：Virchow node（左鎖骨上）、cervical lymphadenopathy、口咽黏膜、聲帶（hoarseness → RLN 侵犯）",
      "胸腹 IPPA：肺部呼吸音（pleural effusion、aspiration pneumonia）、腹部肝脾、Sister Mary Joseph nodule",
      "神經學：Performance status（ECOG 0-4）、Karnofsky score 決定治療耐受性",
      "營養評估：albumin、prealbumin、transferrin、NRS-2002 營養風險篩檢"
    ],
    ddx: [
      "Esophageal SCC（中段最常見）",
      "Adenocarcinoma（多在 lower）",
      "Treatment options：手術 ± neoadjuvant CCRT vs definitive CCRT vs palliative",
      "併發症：穿孔、瘻管、營養不良、誤吸"
    ],
    explanation: [
      "esophageal cancer（食道癌）是高侵襲性消化道腫瘤，中段以 squamous cell carcinoma 為主，與抽菸、飲酒、熱飲、檳榔有關",
      "腫瘤侵犯食道壁並循 lymphatic 擴散，造成 progressive dysphagia、weight loss、胸骨後不適等症狀",
      "Staging（TNM）決定治療：您屬無遠端轉移、中段腫瘤，可能有 curative intent 的治療機會",
      "Multimodal therapy（neoadjuvant CCRT + esophagectomy）可顯著改善 locally advanced 存活；中段手術較複雜（McKeown/Ivor-Lewis），併發症含 anastomotic leak、pneumonia、RLN palsy",
      "整體預後因 stage 而異，我們會與外科、腫瘤科、放腫科共同為您規劃個別化療程，配合營養與心理支持"
    ],
    treatment: [
      "Workup：upper GI endoscopy + biopsy、EUS、chest+abdomen CT、PET-CT、bronchoscopy（中段腫瘤）、PFT、cardiac stress test、albumin/prealbumin 營養評估",
      "Curative option：neoadjuvant CCRT（CROSS regimen：carboplatin AUC 2 + paclitaxel 50 mg/m² + 41.4 Gy over 5 weeks）+ esophagectomy",
      "替代方案：definitive CCRT（手術不耐或拒絕手術）；palliative：esophageal stent、PEG/jejunostomy、systemic chemo ± immunotherapy（nivolumab）",
      "Multidisciplinary team（外科、腫瘤、放腫、營養、心理、社工）共同制定治療計畫並與病人討論",
      "Supportive care：營養師會診高熱量高蛋白、必要時 jejunostomy feeding、止痛 WHO ladder、戒菸戒酒、預防 aspiration",
      "衛教（病情解釋重點）：誠實告知 diagnosis 與 prognosis、給予希望但不誇大、強調 multimodal treatment 可能性、安排第二次會談 + 心理師 + 社工、討論女兒照顧與生命預立"
    ],
    redFlags: [
      "大量出血 / 穿孔 / 完全阻塞 → 急 stent",
      "重度抑鬱 + 自殺意念 → 心理科"
    ]
  },

  {
    id: "114-29",
    source: "114",
    age: 60,
    sex: "F",
    department: "內",
    system: "腸胃",
    chiefComplaint: "腹痛 2 個月（門診）",
    vignette: "60 歲女性，腹痛 2 個月。蝦過敏。應酬偶喝酒。18 歲車禍右大腿骨折開過刀。停經 10 年。父 HTN 75 歲心臟病亡。母 HBV carrier 90 歲。",
    history: [
      "腹痛 LQQOPERA：位置、放射、性質（鈍痛/絞痛）、與飲食（油膩/空腹）、排便、月經關係、2 個月病程變化",
      "B symptoms：體重減輕、食慾下降、夜汗、發燒、疲倦——排除惡性重要依據",
      "消化道症狀：排便習慣改變（便秘/腹瀉交替）、hematochezia、melena、tenesmus、黃疸、灰白便",
      "家族史 + 內科病史：母 HBV carrier（vertical transmission 風險）、父 HTN/心臟病、蝦過敏、18 歲右股骨手術",
      "婦科史（停經後）：停經 10 年、停經後出血、骨盆痛、mammogram/Pap 篩檢紀錄、荷爾蒙替代治療"
    ],
    pe: [
      "Vital signs + 身高體重 + BMI + 近期體重下降幅度 + cachexia",
      "腹部 IPPA：mass（位置/大小/硬度/活動度）、hepatomegaly、splenomegaly、ascites（shifting dullness、fluid wave）、Sister Mary Joseph nodule",
      "淋巴結：Virchow node（左鎖骨上）、腋下、腹股溝；PR exam 看血便與直腸腫塊",
      "婦科與乳房：pelvic exam 排除婦科腫瘤、乳房觸診",
      "Bedside workup：CBC、LFT、AFP、CEA、CA 19-9、大便潛血、abdominal ultrasound"
    ],
    ddx: [
      "Hepatocellular carcinoma（HBV carrier 母）",
      "Colorectal cancer",
      "Gastric / pancreatic cancer",
      "Chronic cholecystitis",
      "IBS / functional abdominal pain"
    ],
    explanation: [
      "60 歲女性慢性腹痛 2 個月 + 母 HBV carrier，首要鑑別是 hepatocellular carcinoma（HCC，肝細胞癌）、colorectal cancer（大腸直腸癌）、gastric/pancreatic cancer",
      "Vertical transmission of HBV 可跨代傳播；HBV carrier 終身 HCC 風險顯著上升，需定期 surveillance",
      "停經後女性 CRC 發生率上升，早期常無明顯症狀，colonoscopy screening 是關鍵",
      "慢性腹痛也可能是 chronic cholecystitis、IBS、PUD，但必須先排除惡性才能考慮 functional disorder",
      "Early detection 對所有上述癌症的 5-year survival 影響最大；您具多重風險應全面評估"
    ],
    treatment: [
      "Workup：CBC、CRP、LFT、AFP、CEA、CA 19-9、HBsAg / anti-HBc / HBV-DNA、anti-HCV；abdominal ultrasound（liver/gallbladder/pancreas）；upper GI endoscopy + colonoscopy；必要時 contrast CT abdomen",
      "若 HBsAg(+)：FibroScan / APRI 評估肝纖維化，啟動 HCC surveillance（abdominal US + AFP q6mo），活動性肝炎 → antiviral（entecavir 0.5 mg PO QD 或 TAF 25 mg PO QD）",
      "若 colonoscopy 發現病灶：biopsy + staging CT + 腫瘤科會診依 TNM 決定 surgery/chemo/radiation",
      "Symptomatic management：依診斷個別化（PUD → PPI omeprazole 20 mg PO BID；IBS → 飲食調整 + antispasmodic）",
      "家族 HBV 篩檢：未感染家人接種 HBV vaccine、已感染者評估治療；戒酒、健康飲食",
      "衛教：年齡相關癌症 screening（CRC colonoscopy q5-10y、mammogram q2y、Pap smear、骨密度 DXA）、警訊（黃疸、血便、體重持續減輕）立即返診"
    ],
    redFlags: [
      "黃疸 + 體重減輕 + 腹塊 → 排惡性",
      "新發貧血 + 大便潛血 → 急 colonoscopy"
    ]
  },

  {
    id: "114-30",
    source: "114",
    age: 55,
    sex: "F",
    department: "急",
    system: "神經/腫瘤",
    chiefComplaint: "肺癌患者解尿不出 + 雙腿無力",
    vignette: "55 歲肺癌女性。1 個月前確診肺癌（化療放療中），昨天起尿不出。同時大腿後側麻、無力越來越嚴重，無法上廁所。",
    history: [
      "排尿症狀：retention 時間（昨起）、之前 stream 強弱、incontinence、overflow、血尿、dysuria",
      "下肢神經症狀 LQQOPERA：大腿後側麻（saddle area？）、power 下降進展、發作時間、對稱性、與姿勢關係",
      "Red flag：腰背痛（局部 vs radicular）、percussion tenderness、大便失禁或便秘（autonomic dysfunction）",
      "腫瘤病史：lung cancer staging（原發部位、組織型態、有無骨轉移）、目前化療放療 regimen、近期影像",
      "社會心理：對癱瘓恐懼、照顧者、經濟、advanced care planning、DNR 意願"
    ],
    pe: [
      "Vital signs + 意識（pain score）",
      "腹部：bladder distension（恥骨上叩診鈍音、觸診 mass）提示 urinary retention",
      "下肢神經：motor power（MRC grade 0-5）、sensation（pinprick/light touch）、reflex（上脊髓病灶→hyperreflexia + Babinski；cauda equina→hyporeflexia）",
      "特殊測試：saddle anesthesia（鞍區麻）、perianal sensation、anal tone（DRE）、bulbocavernosus reflex",
      "脊椎檢查：spinous process percussion tenderness 定位病灶節段；POCUS 看 bladder volume"
    ],
    ddx: [
      "Spinal cord compression by metastasis（必排，急症）",
      "Cauda equina syndrome",
      "Leptomeningeal carcinomatosis",
      "Paraneoplastic neuropathy",
      "Drug-induced（chemotherapy）"
    ],
    explanation: [
      "lung cancer 患者突發 urinary retention + 雙腿無力 + 鞍區麻，首要鑑別是 metastatic spinal cord compression（MSCC，脊髓轉移壓迫）——神經科急症",
      "腫瘤轉移至 vertebral body 或 epidural space → 壓迫脊髓 → motor/sensory deficit + autonomic dysfunction（bowel/bladder）",
      "若病灶在 L1 以下圓錐以下則為 cauda equina syndrome（馬尾症候群），表現 saddle anesthesia + urinary retention + 雙腿無力",
      "神經功能恢復與治療時機高度相關：若延誤 > 24-48 hr，恢復機率大幅下降，可能永久截癱",
      "需立即 emergency MRI whole spine + high-dose corticosteroid + 放腫/神經外科會診，時間就是神經"
    ],
    treatment: [
      "Workup：emergency MRI whole spine（首選，勿等排程）、CBC、CRP、Ca、ALP、PSA / 原發腫瘤 markers、CXR / CT 看原發進展；完整神經學檢查 + DRE",
      "立即處置：high-dose corticosteroid（dexamethasone 10 mg IV bolus then 4 mg IV q6h）減輕脊髓水腫；Foley catheterization 解尿滯留；止痛",
      "Definitive：放腫 emergency RT（30 Gy/10 fractions 常見）於 24 hr 內開始；若 spinal instability、單一病灶、radioresistant 或放療後惡化 → surgical decompression + stabilization 再 RT",
      "原發癌治療調整：與腫瘤科討論 systemic therapy（chemo、targeted、immunotherapy）是否需暫停或調整",
      "支持治療：bladder/bowel care、DVT prophylaxis、壓瘡預防、PT/OT 早期介入、營養、止痛",
      "衛教：與家屬說明 prognosis 與功能恢復預期、復健資源、心理支持、視情況安寧會診與 advanced care planning"
    ],
    redFlags: [
      "Cord compression → 急 MRI + steroid + RT/decompression（24 hr 內）",
      "雙側下肢無力 + 失禁 → 急 neurosurg"
    ]
  },

  {
    id: "114-31",
    source: "114",
    age: 52,
    sex: "M",
    department: "內",
    system: "心血管/病情解釋",
    chiefComplaint: "高血壓 + 高膽固醇用藥諮詢",
    vignette: "52 歲男性，6 個月前 TC 268、LDL 178、TG 160、HDL 42。HTN 規則服藥控制良好。建議降膽固醇藥但希望先飲食運動控制。父 HTN + dyslipidemia 54 歲 MI 裝支架。",
    history: [
      "ASCVD（atherosclerotic cardiovascular disease，動脈粥樣硬化心血管疾病）風險因子：年齡、性別、菸酒、DM（diabetes mellitus）、家族史（父 54 歲 MI（myocardial infarction，心肌梗塞））",
      "目前生活型態：飲食（油脂、精緻糖）、運動頻率、體重變化、菸酒使用量",
      "對藥物擔心：副作用、需終身服用、過去服 statin（他汀類）是否有肌肉痛",
      "心血管症狀 LQQOPERA：胸痛、運動喘、claudication（間歇性跛行）、TIA（transient ischemic attack，短暫性腦缺血）",
      "過去已嘗試 lifestyle modification 多久、減幾公斤、LDL 下降多少、遵從性如何"
    ],
    pe: [
      "Vital signs：BP 雙側量 × 2、HR、BMI、waist circumference（腰圍）",
      "頸動脈 bruit（雜音）、心音（S4、murmur）、周邊脈搏對稱性",
      "眼底檢查 funduscopy、眼瞼 xanthelasma（黃斑瘤）、阿基里斯腱 xanthoma",
      "特殊測試：ankle-brachial index（ABI）評估 peripheral artery disease",
      "Bedside workup：ECG（12-lead）、pooled cohort equation 算 10-year ASCVD risk"
    ],
    ddx: [
      "Mixed hyperlipidemia + HTN（high ASCVD risk）",
      "Familial hypercholesterolemia（父早發）",
      "Metabolic syndrome",
      "Secondary：hypothyroid、nephrotic、cholestasis",
      "已 high-intensity statin 適應症"
    ],
    explanation: [
      "您的情況是 mixed hyperlipidemia（混合型高脂血症）合併 HTN（hypertension，高血壓）與父親早發 MI 家族史，屬於 high ASCVD risk 族群",
      "LDL 178 mg/dL 且父親 54 歲心肌梗塞，要小心是 familial hypercholesterolemia（家族性高膽固醇血症），這類患者 LDL 從小就高",
      "單純飲食運動平均只能讓 LDL 下降 10-15%，很難達到您需要的 < 70 mg/dL 目標",
      "statin 除了降 LDL 還能穩定動脈斑塊、抗發炎、降低 MI 與 stroke 風險",
      "高風險者若不治療，10 年內發生 MI 或 stroke 機率顯著上升，及早用藥可大幅延長健康餘命"
    ],
    treatment: [
      "Workup：fasting lipid profile、HbA1c、LFT（liver function test）、CK（creatine kinase）、TSH、BUN/Cr、ECG、ASCVD risk calculator、必要時 coronary calcium score",
      "First-line：high-intensity statin atorvastatin 40-80 mg PO QHS 或 rosuvastatin 20-40 mg PO QHS，目標 LDL 下降 ≥ 50% 或 < 70 mg/dL",
      "LDL 未達標：加 ezetimibe（Ezetrol）10 mg PO QD；仍未達標考慮 PCSK9 inhibitor evolocumab（Repatha）140 mg SC q2w",
      "BP 控制 < 130/80 mmHg，現有 ACEi（angiotensin-converting enzyme inhibitor）或 ARB 續用",
      "急性胸痛或運動誘發胸悶立即就醫，家中備 NTG（nitroglycerin）sublingual",
      "衛教：地中海飲食、運動 ≥ 150 min/wk、戒菸、3 個月追蹤 lipid + LFT + CK，誠實說明 statin 肌肉痛 < 5%、LFT 異常 < 1%"
    ],
    redFlags: [
      "LDL > 190 + 早發家族史 → familial，立即 statin",
      "胸痛/缺血 → 急 ECG"
    ]
  },

  {
    id: "114-32",
    source: "114",
    age: 0,
    sex: "M",
    department: "小",
    system: "外科/小兒",
    chiefComplaint: "6 個月男嬰左鼠蹊腫塊（時有時無）",
    vignette: "6 個月男嬰，2 個月發現左鼠蹊有時腫腫。一晚哭得很兇，鼠蹊腫明顯且硬，持續 20 分鐘哭累睡著後消失。",
    history: [
      "小兒三大問「母生 3A」：母親孕期、生產方式、Apgar/Age/Allergy；加上吃喝拉動睡評估發展",
      "腫塊 LQQOPERA：何時發現、大小變化、左右側、是否紅腫熱痛、與哭鬧/用力的關係",
      "可還納性：平躺或睡著後會不會消失；今日哭鬧時持續 20 分鐘是 incarceration（嵌閉）警訊",
      "GI 症狀：嘔吐顏色（膽汁）、食慾、排氣排便、腹脹，評估 bowel obstruction",
      "出生史：早產（prematurity 為 hernia risk factor）、birth weight、家族 hernia 史、另側是否曾腫"
    ],
    pe: [
      "Vital signs：HR、RR、體溫、capillary refill；嬰兒脫水或敗血徵兆",
      "鼠蹊與陰囊：視診腫塊大小、紅腫、陰囊對稱、translumination（透光試驗）鑑別 hydrocele（陰囊積水）",
      "觸診：可否還納、tenderness、索狀物增厚（silk glove sign）",
      "腹部 IPPA：bowel sound、distension、壓痛，看有無 bowel obstruction",
      "對側鼠蹊常規檢查（30% bilateral）；testis 是否降入陰囊（排除 undescended testis）"
    ],
    ddx: [
      "Indirect inguinal hernia（小兒最常見）",
      "Incarcerated inguinal hernia（不可還納）",
      "Hydrocele（communicating vs non-）",
      "Inguinal lymphadenopathy",
      "Undescended testis"
    ],
    explanation: [
      "indirect inguinal hernia（間接型腹股溝疝氣）是小兒最常見的腹股溝腫塊，原因是 patent processus vaginalis（未閉合鞘狀突）沒隨發育關閉",
      "當寶寶哭鬧、用力時腹壓升高，小腸或網膜從 internal inguinal ring 擠出來，所以「有時腫、有時不腫」",
      "若腫塊卡住無法還納就是 incarceration，持續 6-8 小時可能進展成 strangulation（絞窄壞死），要急診處理",
      "與 hydrocele 鑑別：hydrocele 透光試驗陽性、不可還納至腹腔、不會隨哭鬧消長",
      "兒童 inguinal hernia 不會自己好，確診就要手術修補；1 歲內嵌閉風險最高，建議早排刀"
    ],
    treatment: [
      "Workup：詳細 physical exam（哭鬧時觀察、還納測試、透光試驗）；必要時 scrotal ultrasound 鑑別 hydrocele 或 undescended testis",
      "Reducible hernia：門診排程 elective herniotomy（高位結紮 hernia sac），通常日間手術即可出院",
      "Incarcerated but viable：先嘗試 manual reduction（鎮靜、Trendelenburg 姿、輕柔持續施壓），成功後 24-48 小時內手術",
      "Strangulation（紅腫劇痛、嘔吐、發燒、reduction 失敗）：立即 emergency surgery，必要時 bowel resection",
      "術前 NPO（nothing per os）、IV fluid 維持、監測生命徵象；術後止痛 acetaminophen 10-15 mg/kg PO q6h",
      "衛教：哭鬧時留意腫塊還納；若持續硬塊 + 哭鬧 + 嘔吐立即返診；傷口 48 小時保持乾燥、避免劇烈跳躍"
    ],
    redFlags: [
      "Incarceration > 6 hr → 急開（strangulation）",
      "嘔吐 + 腹脹 + 不安 → bowel obstruction"
    ]
  },

  {
    id: "114-33",
    source: "114",
    age: 63,
    sex: "M",
    department: "內",
    system: "腫瘤/胰臟",
    chiefComplaint: "體重減輕 8 kg + 右上腹/上腹悶痛",
    vignette: "63 歲男性，最近累、RUQ + 上腹悶痛。2 個月減 8 kg，可能因胃口不好。診所開胃藥無效。半年前診斷 DM 口服藥控制 FBS 180。無 B/C 肝、無腸胃病史。",
    history: [
      "腹痛 LQQOPERA：位置（RUQ（right upper quadrant）/上腹）、性質、放射至背、與飲食的關係、有無 painless jaundice（無痛性黃疸）",
      "B symptoms：2 個月減 8 kg、食慾、夜汗、灰白便（acholic stool）、深色尿、皮膚癢",
      "新發 DM：半年前診斷、FBS 180 mg/dL、血糖控制趨勢；> 50 歲新發 DM 是 pancreatic cancer 警訊",
      "內外敏藥：慢性胰臟炎史、B/C 肝、GI tract 症狀（吞嚥、噁心、排便改變、血便）",
      "個人史：菸酒量、職業暴露、家族癌症（尤其 pancreatic、breast、ovarian、colorectal）"
    ],
    pe: [
      "Vital signs + cachexia（惡病質）、jaundice（皮膚鞏膜）、scratch marks（瘙癢抓痕）",
      "腹部 IPPA：肝脾大、epigastric mass、Courvoisier sign（無痛可觸及膽囊）、ascites（shifting dullness）",
      "淋巴結：左鎖骨上 Virchow node、Sister Mary Joseph nodule（肚臍）、腋下",
      "特殊測試：Trousseau sign of malignancy（migratory thrombophlebitis，游走性血栓性靜脈炎）",
      "Bedside：bedside glucose、abdominal ultrasound 初步看膽道擴張與肝 mass"
    ],
    ddx: [
      "Pancreatic cancer（最可能）",
      "Cholangiocarcinoma",
      "Gastric / colorectal cancer",
      "Chronic pancreatitis",
      "HCC（雖無 B/C 肝）"
    ],
    explanation: [
      "您的情況是體重 2 個月減 8 kg、上腹 / RUQ 悶痛、半年前新發 DM，這組合高度懷疑 pancreatic cancer（胰臟癌）",
      "胰臟癌典型三聯：painless jaundice（胰頭腫瘤阻塞膽管）、深部背痛（侵犯 celiac plexus）、新發或惡化的 DM",
      "腫瘤破壞胰島細胞導致胰島素分泌異常，所以 50 歲以後突然出現 DM 要警覺胰臟癌",
      "胰臟癌位置深、早期無症狀，確診時常已 advanced；5-year survival < 10%，resectable 比例僅 15-20%",
      "越早診斷越有機會做 curative surgery（Whipple 手術），所以這次務必完整 workup 不能只開胃藥"
    ],
    treatment: [
      "Workup：CBC、LFT（bilirubin、ALP、GGT）、amylase/lipase、tumor marker CA 19-9、CEA、HbA1c",
      "影像：abdominal ultrasound 初篩 → pancreas protocol CT 評估 resectability；必要時 EUS（endoscopic ultrasound）+ FNA biopsy、MRCP",
      "Staging 分流：resectable → upfront Whipple 或 distal pancreatectomy + adjuvant mFOLFIRINOX；borderline/locally advanced → neoadjuvant chemo ± RT；metastatic → palliative FOLFIRINOX 或 gemcitabine + nab-paclitaxel",
      "Symptom palliation：黃疸 → ERCP + biliary stent；duodenal obstruction → duodenal stent 或 gastrojejunostomy；疼痛 → opioid + celiac plexus block",
      "DM 管理：改 insulin 為主，因 pancreatic DM 對 oral agent 反應差；合併 pancreatic enzyme replacement therapy",
      "衛教：高熱量 + 高蛋白營養支持、戒菸戒酒、multidisciplinary team（MDT）討論、心理 / 安寧諮詢、誠實告知家屬 prognosis"
    ],
    redFlags: [
      "Painless jaundice + Courvoisier → 胰頭癌",
      "新發 DM > 50 歲 + 體重減輕 → 篩 pancreatic"
    ]
  },

  {
    id: "114-34",
    source: "114",
    age: 30,
    sex: "M",
    department: "內",
    system: "風濕/骨骼",
    chiefComplaint: "下背痛 2 年（晨僵 + 活動緩解）",
    vignette: "30 歲男性，下背痛 2 年。天冷潮濕加劇。中醫推拿熱療稍緩。骨科復健科 X-ray + 抽血正常。活動緩解（運動、爬山），久坐久站惡化。最近影響穿鞋彎腰，背有點駝。",
    history: [
      "Inflammatory back pain（IBP）LQQOPERA：< 40 歲起病、晨僵 > 30 min、活動緩解、休息加重、夜痛醒、隱襲進展 > 3 個月",
      "痛的位置：low back、buttock（alternating）、胸椎、頸椎；周邊關節（膝、踝）腫脹",
      "Enthesitis（附著點炎）：腳跟、阿基里斯腱、足底筋膜；dactylitis（香腸指）",
      "Extra-articular 症狀：uveitis（葡萄膜炎，紅眼畏光）、psoriasis（牛皮癬）、IBD（inflammatory bowel disease）腹瀉血便",
      "家族史 + 個人史：HLA-B27、AS（ankylosing spondylitis）、psoriasis、IBD；近期尿道炎或結膜炎（reactive arthritis）"
    ],
    pe: [
      "Vital signs + 身高、觀察 thoracic kyphosis（胸椎駝背）、頸椎前傾",
      "Spine ROM 特殊測試：Schober test（< 5 cm 增加 = 受限）、occiput-to-wall distance、lateral spinal flexion",
      "Sacroiliac joint（SIJ）provocation：FABER（Patrick）test、Gaenslen test、direct compression",
      "Chest expansion 第 4 肋間 < 2.5 cm 提示 AS；enthesitis 檢查（Achilles、plantar fascia）",
      "Extra-articular：皮膚 psoriasis plaque、指甲 pitting、眼睛結膜 / 前房發炎"
    ],
    ddx: [
      "Ankylosing spondylitis（最可能）",
      "Non-radiographic axial spondyloarthritis",
      "HIVD（lumbar）",
      "Mechanical low back pain",
      "Reactive / psoriatic / IBD-associated"
    ],
    explanation: [
      "您的背痛是典型 inflammatory back pain：< 40 起病、晨僵、活動緩解、夜痛、慢性 2 年，最可能是 ankylosing spondylitis（AS，僵直性脊椎炎）",
      "AS 屬 axial spondyloarthritis，主要攻擊 sacroiliac joints（薦腸關節）與脊椎的附著點，與 HLA-B27 基因強相關（80-90% 陽性）",
      "發炎造成 morning stiffness（晨間僵硬），活動後血流增加帶走發炎介質所以會緩解",
      "若不治療會慢慢長出 syndesmophyte（骨橋），最終脊椎融合成 bamboo spine，永久駝背、胸廓擴張受限",
      "早期使用 NSAIDs 與 biologics 可顯著延緩 radiographic progression，多數人能維持正常工作與生活"
    ],
    treatment: [
      "Workup：HLA-B27、ESR、CRP、CBC；HBV/HCV/TB screening（用 biologic 前必要）；SIJ X-ray + MRI（偵測 early sacroiliitis 最敏感）",
      "First-line：full-dose NSAIDs naproxen 500 mg PO BID 或 etoricoxib 90 mg PO QD，連續 2-4 週評估反應",
      "NSAIDs 效果不足：TNF inhibitor adalimumab（Humira）40 mg SC q2w 或 etanercept（Enbrel）50 mg SC qw；或 IL-17 inhibitor secukinumab（Cosentyx）",
      "周邊關節炎加 sulfasalazine 1 g PO BID；避免長期 systemic steroid（AS 反應差且加速骨質流失）",
      "合併 uveitis 急性發作：眼科會診 topical steroid + cycloplegic agent",
      "衛教：每日伸展（游泳、瑜珈最佳）、姿勢矯正、戒菸（加速 progression）、bone density 追蹤、家族 HLA-B27 可諮詢、定期眼科篩 uveitis"
    ],
    redFlags: [
      "神經缺損 + cauda equina → 急 MRI",
      "脊椎骨折（強直後 brittle）+ 外傷 → 排不穩定"
    ]
  },

  {
    id: "114-35",
    source: "114",
    age: 67,
    sex: "M",
    department: "內",
    system: "腫瘤/病情解釋",
    chiefComplaint: "肺癌診斷後病情解釋",
    vignette: "67 歲男性，3 個月前感冒一直乾咳 + 血絲。確診右下葉肺癌 3 cm。礦工 30 年（pneumoconiosis 重大傷病卡），戒菸 1 年（去年 MI 行 PCI 前）。爬小山兩三層梯尚可。",
    history: [
      "病人對診斷的理解：知道是右下葉肺癌 3 cm 嗎？家人是否知情？想先聽多少細節",
      "肺癌相關症狀 LQQOPERA：cough 性質、hemoptysis（血絲）量、胸痛、呼吸困難、體重減輕",
      "轉移症狀篩查：骨痛、頭痛神經學變化、肝區不適、supraclavicular 淋巴結腫大",
      "內外敏藥：CAD（coronary artery disease）with PCI（percutaneous coronary intervention）、pneumoconiosis（塵肺症）、目前抗血小板藥、performance status（能爬 2-3 層樓）",
      "個人 / 家庭史：礦工職業暴露 30 年、戒菸 1 年、家屬支持系統、宗教信念、治療意願與期望"
    ],
    pe: [
      "Vital signs + SpO2、cachexia、clubbing（杵狀指）",
      "淋巴結：supraclavicular（Virchow）、cervical、axillary；SVC syndrome（上腔靜脈症候群）面部水腫、頸靜脈怒張",
      "胸部 IPPA：呼吸音對稱、局部 dullness、wheezing；Horner syndrome（上瞼下垂、瞳孔縮小、無汗）提示 Pancoast tumor",
      "心血管：PCI 術後心音、下肢水腫；腹部肝脾（排除 liver metastasis）",
      "Performance status（ECOG scale 0-4）、6-minute walk test 評估手術耐受性"
    ],
    ddx: [
      "NSCLC stage I-II（3 cm 右下葉）",
      "Treatment options：lobectomy / SBRT（高 risk surg）",
      "共病風險：cardiac（recent PCI）、肺功能（pneumoconiosis）",
      "Pneumoconiosis 補償申請",
      "Smoking cessation 持續"
    ],
    explanation: [
      "NSCLC（non-small cell lung cancer，非小細胞肺癌）是肺部細胞長期受吸菸與礦工塵肺刺激後基因突變、失控增生形成的腫瘤",
      "您的腫瘤位於右下葉 3 cm、尚未發現遠端轉移，屬 stage I-II 早期，治癒機會相對高",
      "乾咳合併血絲是腫瘤侵蝕支氣管黏膜造成微出血，pneumoconiosis 已使肺功能受損、咳嗽門檻低",
      "1 年前 MI 做過 PCI，手術麻醉風險需要心臟內科與麻醉科共同評估",
      "早期肺癌 5-year survival 約 60-80%，越早手術越好；若心肺無法承受手術可改做 SBRT 也有類似 local control"
    ],
    treatment: [
      "Workup：chest CT、PET-CT 確認 staging、brain MRI 排 brain metastasis、bronchoscopy + biopsy 取病理、分子檢測 EGFR/ALK/ROS1/PD-L1",
      "Pre-op 評估：PFT（pulmonary function test）、cardiac echo、stress test、會診心臟內科確認抗血小板藥調整（PCI 後 DAPT（dual antiplatelet therapy）)",
      "Definitive treatment：lobectomy（首選，若 PFT 過關）+ mediastinal lymph node dissection；心肺風險高者改 SBRT（stereotactic body radiotherapy）",
      "Adjuvant：依 stage 與 EGFR 狀態，陰性考慮 cisplatin-based chemo、陽性考慮 osimertinib（Tagrisso）3 年",
      "共病處理：持續戒菸、pneumoconiosis 申請職業病補償、心臟藥續用、肺復健",
      "衛教：術後每 3-6 個月 CT 追蹤、流感 / pneumococcal 疫苗、家屬加入治療決策、必要時安寧諮詢作為 parallel plan"
    ],
    redFlags: [
      "新發呼吸衰竭 → 排 PE/pneumonia",
      "突發胸痛 + ST 變化 → 排 stent thrombosis"
    ]
  },

  {
    id: "114-36",
    source: "114",
    age: 1,
    sex: "M",
    department: "小",
    system: "小兒/神經",
    chiefComplaint: "1.5 歲幼兒高燒抽搐",
    vignette: "1 歲 6 個月幼童，雙眼上吊 + 全身肢體抽動 1-2 分鐘。昨天感冒微燒，今晨高燒 + 四肢冰冷。哥哥流感。第二胎，發展正常。",
    history: [
      "小兒三大問：母生 3A（母親孕期、生產方式、Apgar/Age/Allergy）、吃喝拉動睡、發展里程碑",
      "Seizure（痙攣）SOAP：onset（突發）、時長 1-2 分鐘、generalized 雙眼上吊 + 四肢抽動、postictal（發作後）意識、頻率",
      "Simple vs complex febrile seizure：simple = < 15 min + generalized + 24 hr 只 1 次 + 神經學正常",
      "發燒源頭：今晨高燒 + 四肢冰冷、昨日感冒、哥哥流感接觸史；有無皮疹、嘔吐、腹瀉、尿少",
      "家族 + 個人史：家族 epilepsy 或 febrile seizure、過去發展史、預防接種（MMR、流感疫苗）"
    ],
    pe: [
      "Vital signs：體溫、HR、RR、SpO2；意識 GCS（Glasgow Coma Scale）或 AVPU 量表",
      "Meningeal signs：頸僵、Brudzinski sign、Kernig sign；嬰幼兒 bulging fontanelle（前囟膨出）",
      "皮疹：點狀出血（meningococcemia）、病毒疹；ENT（耳咽鼻）找感染源；肺部聽診",
      "神經學完整檢查：focal deficit、cranial nerve、muscle tone、reflex；Todd paralysis 排除",
      "Bedside：capillary blood glucose（排除 hypoglycemia 誘發 seizure）"
    ],
    ddx: [
      "Simple febrile seizure（最可能）",
      "Complex febrile seizure",
      "CNS infection（meningitis/encephalitis）→ 必排",
      "Influenza-associated encephalopathy",
      "First epileptic seizure with concurrent fever"
    ],
    explanation: [
      "febrile seizure（熱痙攣）是 6 個月到 5 歲幼童因發燒誘發未成熟腦部短暫異常放電，是小兒最常見的 seizure 類型",
      "Simple type：全身對稱抽動 < 15 分鐘、24 小時內只 1 次、發作後神經學正常，佔 febrile seizure 的 80-90%",
      "與遺傳體質有關，發燒升溫的速度比絕對溫度更關鍵，所以退燒藥不能預防再發",
      "Simple febrile seizure 長期預後良好，未來 epilepsy 風險僅略高於一般人群（2-4%），不會影響智力與發展",
      "但第一次發作仍需排除 meningitis（腦膜炎）、encephalitis（腦炎）等 CNS（central nervous system）感染"
    ],
    treatment: [
      "急性處置：side-lying position（側臥）防嗆吸、計時、勿塞物入口、鬆開衣物、保持呼吸道通暢、多數 1-2 分鐘自行停止",
      "Workup：capillary blood glucose、CBC、electrolytes、尿液；< 12 個月或意識持續不清或頸僵 → LP（lumbar puncture，腰椎穿刺）",
      "持續抽搐 > 5 分鐘：IV lorazepam（Ativan）0.1 mg/kg 或 rectal diazepam（Valium）0.5 mg/kg；流感流行季考慮 oseltamivir",
      "退燒增加舒適度：acetaminophen（Tylenol）10-15 mg/kg PO q4-6h 或 ibuprofen（Brufen）10 mg/kg PO q6h，注意不能預防再發",
      "家長衛教：30-50% 可能再發但多數在 5 歲後消失；發燒時不需預防性抗癲癇藥；拍影片給醫師看發作型態",
      "返診條件：抽搐 > 5 分鐘、focal 發作、24 小時內再發、意識持續不清、頸僵、紫斑疹"
    ],
    redFlags: [
      "Meningismus / 意識持續改變 → LP",
      "Status epilepticus（> 5 min）→ benzo + ICU"
    ]
  },

  {
    id: "114-37",
    source: "114",
    age: 50,
    sex: "F",
    department: "內",
    system: "感染/呼吸",
    chiefComplaint: "5 週黃痰咳嗽 + 午後發燒",
    vignette: "50 歲女性，5 週黃痰、輕微痰、咳嗽，下午發燒 38。DM 20 年口服藥控制。菸酒 20 年。",
    history: [
      "咳嗽 LQQOPERA：5 週黃痰、咳血、量、夜間加重、運動誘發；B symptom（體重減輕、夜汗）",
      "發燒 pattern：午後低燒 38 度是 TB（tuberculosis，結核）典型；有無寒顫、盜汗濕透衣物",
      "TB 接觸史：家人 / 同事 / 室友結核史、BCG 接種、職業（醫療、礦工、監獄收容）、旅遊史",
      "Risk factors：DM（20 年口服藥控制）、20 年菸酒、HIV（human immunodeficiency virus）、steroid 使用、營養狀態",
      "內外敏藥：其他共病、過去 latent TB infection 或 chest X-ray 異常、曾服 INH（isoniazid）"
    ],
    pe: [
      "Vital signs + SpO2、體重、cachexia、皮膚 pallor",
      "淋巴結：supraclavicular、cervical、腋下；scrofula（頸部淋巴結結核）",
      "胸部 IPPA：crackles、bronchial breath sound、egophony（E-to-A change）、上葉 amphoric breath（空洞呼吸音）",
      "腹部與脊椎：肝脾、spinal tenderness（Pott disease）；關節（TB arthritis）",
      "Bedside：sputum AFB（acid-fast bacilli）smear ×3、CXR、POCT（point-of-care test）glucose"
    ],
    ddx: [
      "Pulmonary tuberculosis（菸 + DM + 慢性 + 午後燒）",
      "Bacterial pneumonia",
      "Lung cancer（菸史）",
      "Bronchiectasis with infection",
      "Atypical pneumonia"
    ],
    explanation: [
      "您的症狀最可能是 pulmonary TB（肺結核），由 Mycobacterium tuberculosis（結核分枝桿菌）經飛沫傳染到肺部",
      "DM（糖尿病）+ 長期吸菸使免疫力下降，是結核病再活化的高危險族群，風險是一般人的 2-3 倍",
      "典型症狀：咳嗽 > 3 週、黃膿痰或咳血、午後低燒、夜間盜汗、體重減輕、食慾不振",
      "結核是法定傳染病，須通報疾管署並篩檢同住接觸者、工作接觸者的 LTBI（latent TB infection）",
      "規律服藥 6 個月以上治癒率 > 95%，自行停藥易產生 MDR-TB（multidrug-resistant TB）造成治療困難"
    ],
    treatment: [
      "Workup：CXR（upper lobe infiltrate / cavity）、sputum AFB smear ×3、TB PCR（如 Xpert MTB/RIF）、sputum mycobacterial culture、IGRA（interferon-gamma release assay）、HIV screening",
      "隔離：負壓病房、N95 口罩，sputum smear 連續 3 次陰轉才解隔離",
      "Standard regimen：HRZE 2 個月 → HR 4 個月（INH 5 mg/kg + RIF（rifampin）10 mg/kg + PZA（pyrazinamide）25 mg/kg + EMB（ethambutol）15 mg/kg PO QD）",
      "輔助：vitamin B6（pyridoxine）50 mg PO QD 預防 INH 周邊神經病變；monthly LFT、視力與色覺檢查（EMB）",
      "DM 控制：加強 insulin、HbA1c 目標 < 7%，RIF 會加速 oral hypoglycemic agent 代謝需調整",
      "衛教：通報疾管署、接觸者 IGRA 篩檢與 LTBI 治療、DOT（directly observed therapy）直接觀察治療、戒菸、營養補充、口罩衛教"
    ],
    redFlags: [
      "大量咳血 → embolization",
      "DM ketoacidosis 合併感染 → ICU"
    ]
  },

  {
    id: "114-38",
    source: "114",
    age: 50,
    sex: "M",
    department: "急",
    system: "肝臟/腫瘤",
    chiefComplaint: "HCC 末期 + 黃疸 + 呼吸困難",
    vignette: "50 歲男性，慢性 HBV 未追蹤。28 年酒癮幾乎每天喝。發現黃疸就診。3 個月體重減輕。肝腫大 + 壓痛 + 下肢水腫。Tbil/D 31/20、AFP 1174。CT：肝硬化 + 多發 HCC（最大 15 cm + portal vein thrombosis）。今天虛弱 + 呼吸困難。",
    history: [
      "主訴 LQQOPERA：今日虛弱 + 呼吸困難的 onset、體位變化、伴隨胸痛、咳嗽、咳血、發燒",
      "Liver decompensation（肝代償失調）徵兆：jaundice 進展、ascites（腹水）、意識變化（HE（hepatic encephalopathy，肝腦病變））、出血傾向",
      "GI bleeding：hematemesis（吐血）、melena（黑便）、varices（食道靜脈曲張）史；輸血史",
      "內外敏藥：HBV（hepatitis B virus）未追蹤、28 年酒癮每日飲用、其他共病、目前用藥",
      "末期照護意願：家屬支持、安寧諮詢意願、DNR（do not resuscitate）、症狀控制優先順序"
    ],
    pe: [
      "Vital signs + GCS + asterixis（肝性撲翼樣震顫）評估 HE",
      "腹部 IPPA：肝腫大 + 壓痛、脾腫、ascites（shifting dullness、fluid wave）、caput medusae（腹壁靜脈怒張）",
      "皮膚：spider angioma（蜘蛛痣）、palmar erythema（手掌紅斑）、jaundice、scratch marks、ecchymosis",
      "胸部：呼吸音（hepatic hydrothorax 多在右側 pleural effusion）、SpO2、RR、呼吸輔助肌",
      "其他：下肢 pitting edema、testicular atrophy、gynecomastia、fetor hepaticus（肝臭）"
    ],
    ddx: [
      "Decompensated cirrhosis with HCC（advanced）",
      "Hepatic encephalopathy（呼吸困難 → 排）",
      "Tumor rupture / portal vein thrombosis",
      "Hepatorenal syndrome",
      "Spontaneous bacterial peritonitis（SBP）"
    ],
    explanation: [
      "您的狀況是 chronic HBV 合併 28 年重度酒精使用導致 cirrhosis（肝硬化），再進展為 HCC（hepatocellular carcinoma，肝細胞癌）",
      "腫瘤已達 15 cm 且侵犯 portal vein（門靜脈），屬 BCLC（Barcelona Clinic Liver Cancer）stage D 末期",
      "黃疸來自肝細胞嚴重受損 + 膽汁排出受阻；下肢水腫與腹水則來自低 albumin（白蛋白）與 portal hypertension（門脈高壓）",
      "今天的呼吸困難可能是 hepatic hydrothorax、腫瘤壓迫橫膈、或 hepatic encephalopathy 引起的換氣改變",
      "末期 HCC 中位存活期僅數週至數月，治療重點轉為症狀緩解與維持生活品質，不再積極抗腫瘤"
    ],
    treatment: [
      "Workup：LFT、coagulation（PT/INR）、ammonia、CBC、electrolytes、abdominal ultrasound、diagnostic paracentesis 排 SBP（spontaneous bacterial peritonitis，自發性細菌性腹膜炎）",
      "呼吸困難鑑別：CXR 看 hepatic hydrothorax 與 pneumonia、Hb drop 看 tumor rupture、ammonia + GCS 看 HE",
      "Hepatic encephalopathy：lactulose 30 mL PO/NG q6-8h（目標每日 2-3 次軟便）+ rifaximin（Xifaxan）550 mg PO BID",
      "症狀緩解：fentanyl（優於 morphine，避免累積）處理疼痛與呼吸困難；spironolactone + furosemide 利尿控制 ascites；therapeutic paracentesis 必要時放腹水",
      "Advance care planning：與家屬討論 DNR / DNI（do not intubate）、安寧緩和照護團隊轉介、疼痛與呼吸困難 24 小時控制計畫",
      "衛教：絕對禁酒、低鈉飲食（< 2 g/day）、觀察意識 + 黑便 + 吐血立即返診、家屬心理支持與喪親預備"
    ],
    redFlags: [
      "GI bleeding from varices → endoscopy + octreotide",
      "病情末期 → 安寧緩和諮詢"
    ]
  },

  {
    id: "114-39",
    source: "114",
    age: 51,
    sex: "F",
    department: "內",
    system: "感染/呼吸",
    chiefComplaint: "發燒 5 天 + 流感接觸",
    vignette: "51 歲女老師。班上 3 個學生確診流感。持續發燒 5 天高至 39、咳嗽黃痰、頭痛、鼻塞、流鼻水、喉嚨痛、肌肉痠痛、輕微腹瀉。",
    history: [
      "發燒 LQQOPERA：5 天高至 39 度、最高溫、寒顫、退燒藥反應、diurnal pattern",
      "Influenza（流感）典型症狀組合：突發高燒、肌肉痠痛、頭痛、乾咳、喉嚨痛、鼻塞流鼻水、輕微腹瀉",
      "接觸史 + 疫苗史：班上 3 位學生確診、家人是否也有症狀、本季是否接種流感疫苗",
      "重症 risk factors：年齡、共病（DM、心肺疾病）、懷孕、肥胖（BMI > 40）、免疫抑制、> 65 歲",
      "併發症警訊：呼吸困難、胸痛、SpO2 下降、意識改變、咳血、持續高燒 > 5 天不退"
    ],
    pe: [
      "Vital signs + SpO2、體溫、RR、HR、hydration status",
      "ENT：結膜 injection、pharynx 紅腫、tonsil exudate、nasal turbinate boggy；頸部淋巴結",
      "胸部 IPPA：聽診 crackles、wheezing、bronchial breath（排 pneumonia 併發症）",
      "心臟：S1/S2、murmur、friction rub（排 myocarditis）；下肢水腫",
      "Bedside：rapid influenza antigen test、SpO2 連續監測、必要時 CXR"
    ],
    ddx: [
      "Influenza A/B（最可能）",
      "Influenza with bacterial pneumonia",
      "COVID-19",
      "Atypical pneumonia",
      "Mononucleosis"
    ],
    explanation: [
      "Influenza（流感）由 influenza virus A/B 經飛沫與接觸傳染，潛伏期 1-4 天，教師為高接觸族群",
      "典型症狀：突發高燒、頭痛、肌肉痠痛、咳嗽、喉嚨痛，全身症狀比一般感冒明顯且發作快",
      "健康成人多 7-10 天自癒，但高危險群（孕婦、慢性病、> 65 歲、肥胖）容易併發重症",
      "持續發燒 > 5 天或症狀先好轉又惡化，要警覺 bacterial pneumonia、myocarditis、encephalitis 併發症",
      "班上 3 位學生確診屬群聚事件，疫苗仍是最有效預防，每年接種可降低重症與住院風險"
    ],
    treatment: [
      "Workup：rapid influenza antigen test 或 PCR、CXR（排 pneumonia）、CBC、CRP；SpO2 < 94% 進一步 ABG（arterial blood gas）",
      "抗病毒：oseltamivir（Tamiflu）75 mg PO BID × 5 天（症狀 48 小時內最佳，高危險或重症超過 48 小時仍給）",
      "症狀治療：acetaminophen（Tylenol）500 mg PO q6h prn fever、多喝水、休息；避免 aspirin（兒童 Reye syndrome 風險）",
      "細菌併發症徵兆（再次發燒、痰量增加變膿、胸痛、SpO2 下降）→ 加 amoxicillin/clavulanate 875 mg PO BID 或 azithromycin",
      "隔離：戴口罩、勤洗手、發燒退燒 24 小時前不上班；家中通風、與家人保持距離",
      "衛教：每年 10 月接種季節性流感疫苗、班級群聚通報衛生單位、高危家屬可考慮 post-exposure prophylaxis"
    ],
    redFlags: [
      "SpO2 < 94% → CXR 排 pneumonia",
      "發病 < 48 hr → oseltamivir"
    ]
  },

  {
    id: "114-40",
    source: "114",
    age: 41,
    sex: "F",
    department: "內",
    system: "呼吸",
    chiefComplaint: "持續咳嗽 + wheeze + 夜間呼吸困難",
    vignette: "41 歲女性，過年大掃除後持續咳嗽。最近聽到喘鳴聲，半夜吸不到氣醒來。低燒 + 喘 + 咳嗽，運動課時更嚴重。長期 AR。",
    history: [
      "咳嗽 LQQOPERA：過年大掃除後開始、性質（乾/有痰）、誘發因子（過敏原、運動、冷空氣、感染）、日夜 pattern",
      "Asthma（氣喘）核心症狀：wheezing（喘鳴）、夜間吸不到氣醒來、運動受限、胸悶",
      "Atopy triad（特應三聯）：AR（allergic rhinitis，過敏性鼻炎）、AD（atopic dermatitis，異位性皮膚炎）、asthma 個人與家族史",
      "內外敏藥：GERD（gastroesophageal reflux disease，胃食道逆流）、ACEi 引起的乾咳、smoking、NSAIDs 敏感",
      "環境 trigger：清掃揚塵、寵物、裝修、新買家具、塵蟎、霉菌、職業暴露"
    ],
    pe: [
      "Vital signs + SpO2、RR、HR、pulsus paradoxus（奇脈）；發紺、accessory muscle（輔助呼吸肌）使用",
      "胸部 IPPA：expiratory wheezing、prolonged expiration、silent chest（near-fatal 警訊）",
      "Atopy 徵兆：allergic shiner（黑眼圈）、nasal turbinate 蒼白腫脹、postnasal drip、eczema、Dennie-Morgan line",
      "ENT 與鼻腔：polyps、nasal discharge；皮膚異位性皮膚炎疹",
      "Bedside：PEFR（peak expiratory flow rate）、spirometry 含 bronchodilator reversibility test、FeNO（fractional exhaled nitric oxide）"
    ],
    ddx: [
      "Adult-onset asthma（最可能）",
      "Allergic bronchopulmonary aspergillosis",
      "Vocal cord dysfunction",
      "GERD-induced cough",
      "COPD（雖年輕但需排）"
    ],
    explanation: [
      "Asthma（氣喘）是慢性氣道發炎，造成支氣管反覆痙攣、黏液分泌增加、氣道過度反應與 airway remodeling",
      "您的 trigger 包含過年大掃除揚塵、塵蟎、運動；長期 AR 使氣道已處於發炎狀態，屬 atopic march 進展的一環",
      "夜間 / 凌晨惡化是因迷走神經張力升高、cortisol 處於低點、平躺加重 airway narrowing",
      "未控制的氣喘會反覆 exacerbation 並造成永久 airway remodeling、肺功能不可逆下降",
      "規則使用 ICS（inhaled corticosteroid，吸入型類固醇）可以完全控制，多數患者能維持正常生活與運動"
    ],
    treatment: [
      "Workup：spirometry（FEV1/FVC < 70%、bronchodilator reversibility ≥ 12% 且 ≥ 200 mL）、PEFR diary、FeNO、total IgE + specific allergen panel",
      "急性緩解：SABA（short-acting beta-agonist）salbutamol（Ventolin）100 μg 2 puffs prn；急性發作加 systemic steroid prednisolone 40 mg PO × 5 天",
      "Maintenance（GINA 首選）：low-dose ICS-formoterol budesonide/formoterol（Symbicort）1 puff BID + as-needed reliever（MART（maintenance and reliever therapy））",
      "中重度加 LABA 或 LAMA tiotropium（Spiriva）；severe eosinophilic 考慮 biologics omalizumab（Xolair）或 dupilumab（Dupixent）",
      "AR 共病：intranasal steroid mometasone（Nasonex）1 spray BID + second-generation antihistamine loratadine（Clarityne）10 mg PO QD",
      "衛教：避免塵蟎（防螨套、每週 60 度洗床單）、戒菸、流感 + pneumococcal 疫苗、教 inhaler technique、寫 asthma action plan、PEFR < 50% predicted 立即就醫"
    ],
    redFlags: [
      "Silent chest + 意識改變 → near-fatal asthma + ICU",
      "PEFR < 50% predicted → severe"
    ]
  },

  {
    id: "114-41",
    source: "114",
    age: 43,
    sex: "F",
    department: "內",
    system: "神經/骨骼",
    chiefComplaint: "頸僵痛 + 右上肢麻無力（外傷後）",
    vignette: "43 歲女性，2 個月前浴室滑倒，頸先前彎後甩。隔天診所給止痛肌鬆。最近 1 個月頸僵痛加劇傳至右肩胛 + 右上肢麻無力。銀行職員久坐電腦。",
    history: [
      "外傷史 LQQOPERA：whiplash（揮鞭式損傷）機轉、有無 LOC（loss of consciousness）、外傷當下頸部位置",
      "頸痛：部位、放射至右肩胛與上肢、夜痛、咳嗽或 Valsalva 加重",
      "右上肢：dermatome（皮節）分布的麻木、muscle power、精細動作、握力",
      "Red flags：bowel/bladder dysfunction、saddle anesthesia、步態不穩、雙手笨拙、體重減輕",
      "內外敏藥住個家：久坐電腦工作姿勢、止痛肌鬆藥使用、家中照護者、過往頸椎病史"
    ],
    pe: [
      "Vital signs + 頸部視診（姿勢、肌肉萎縮、側彎）",
      "頸部 ROM（range of motion）+ Spurling test（誘發 radicular pain）",
      "上肢 motor（C5-T1 myotome）+ sensation（dermatome）+ DTR（deep tendon reflex）",
      "Hoffmann sign、下肢長徑反射、gait（排 cervical myelopathy）",
      "影像：cervical X-ray AP/lateral/oblique → MRI cervical spine"
    ],
    ddx: [
      "Cervical disc herniation（C6/7 most common）",
      "Cervical spondylosis with radiculopathy",
      "Whiplash-associated disorder",
      "Brachial plexus injury",
      "Cervical myelopathy（need to exclude）"
    ],
    explanation: [
      "cervical disc herniation（頸椎椎間盤突出）是椎間盤纖維環破裂、髓核向後壓迫神經根或脊髓",
      "外傷 whiplash 加上久坐電腦低頭姿勢，加速椎間盤退化與破裂",
      "C6/C7 最常被壓迫，造成右上肢放射痛、麻木、無力，對應 C7 神經根支配的中指與三頭肌",
      "若壓迫到脊髓本體會出現步態不穩、雙手笨拙、解尿異常，稱為 cervical myelopathy，需緊急處理",
      "多數 6-12 週保守治療可緩解，少部分 refractory 或有 myelopathy 才需手術"
    ],
    treatment: [
      "Workup：cervical X-ray（AP/lateral/oblique）、MRI cervical spine（看 disc 與神經根）、完整神經學檢查含 Spurling test",
      "急性止痛：NSAID celecoxib（Celebrex）200 mg PO BID 或 naproxen 500 mg PO BID + methocarbamol（Robaxin）肌肉鬆弛",
      "短期口服類固醇 prednisolone 60 mg PO QD taper × 7 天，可改善 radiculopathy",
      "復健：cervical traction、physical therapy、姿勢訓練、人因工學調整工作桌椅與螢幕高度",
      "Refractory 或 myelopathy：cervical epidural steroid injection，或轉骨科做 ACDF（anterior cervical discectomy and fusion）",
      "衛教：避免長時間低頭、每 30 分鐘起身活動、螢幕調至視線高度、睡眠使用頸椎支撐枕"
    ],
    redFlags: [
      "Myelopathy（步態不穩 + 反射亢進）→ 急 MRI",
      "外傷後 + 嚴重頸痛 → 排 fracture"
    ]
  },

  {
    id: "114-42",
    source: "114",
    age: 56,
    sex: "F",
    department: "外",
    system: "腫瘤/乳房",
    chiefComplaint: "左乳硬塊 1 個月",
    vignette: "56 歲女性，1 個月前洗澡時左乳內側外上方摸到硬塊。乳房偶有抽痛但無變形、皮膚變化、腋下淋巴、乳頭凹陷或異常分泌物。",
    history: [
      "硬塊 LQQOPERA：發現時間、位置（左乳內上象限）、大小變化、是否隨月經週期變化（停經者應固定）",
      "伴隨：皮膚 dimpling（酒窩徵）、peau d'orange（橘皮）、紅腫、潰瘍、nipple retraction、血性分泌物",
      "遠處轉移線索：腋下或鎖骨上淋巴腫、骨痛、體重減輕、咳嗽、頭痛",
      "婦產科「性孕經分片」：GPA、LMP/PMP、停經年齡、HRT（hormone replacement therapy）使用、哺乳史",
      "Risk factors：年齡、家族史（BRCA1/2）、未生育或晚生、早經晚停、肥胖、酒精、胸壁 RT 史"
    ],
    pe: [
      "Vital signs + 兩側乳房視診（對稱性、皮膚變化、nipple retraction、酒窩徵）",
      "觸診：仰臥 + 手舉過頭，四象限 + axillary tail 系統觸診",
      "Mass 評估：大小、consistency、邊界、固定或活動、壓痛",
      "腋下 + supraclavicular + infraclavicular lymph node",
      "影像與切片：mammography + breast ultrasound + core needle biopsy"
    ],
    ddx: [
      "Invasive ductal carcinoma（最可能）",
      "Fibroadenoma / phyllodes",
      "Cyst",
      "Mastitis / abscess",
      "Lobular carcinoma"
    ],
    explanation: [
      "breast cancer（乳癌）約 75% 源自乳腺管上皮，稱為 invasive ductal carcinoma（侵襲性乳管癌）",
      "惡性硬塊典型為不痛、邊界不清、固定、質地硬；fibroadenoma 則邊界清楚、活動度好",
      "Risk factors：年齡 > 50、初經早 / 停經晚、未生育、HRT、家族史、BRCA 基因突變",
      "皮膚 dimpling、peau d'orange、nipple retraction、腋下淋巴腫都是晚期或侵襲的徵象",
      "早期 stage I 5 年存活率 > 95%，越早診斷與治療預後越好"
    ],
    treatment: [
      "Workup：mammography + breast ultrasound + core needle biopsy 取病理；ER/PR/HER2 + Ki-67；staging 加 chest CT + bone scan",
      "早期手術：BCS（breast-conserving surgery）+ SLNB（sentinel lymph node biopsy），或 total mastectomy ± ALND",
      "Adjuvant：BCS 後 whole-breast RT；高風險給 AC-T chemo；HER2(+) 加 trastuzumab（Herceptin）1 年",
      "內分泌治療：ER(+) 停經前 tamoxifen 20 mg PO QD × 5-10 年；停經後 aromatase inhibitor letrozole 2.5 mg PO QD",
      "衛教：每月乳房自我檢查、規律 mammography、家族史高風險者考慮 BRCA testing 與遺傳諮詢",
      "術後復健：預防 lymphedema、肩關節 ROM 運動、心理支持與乳癌病友團體"
    ],
    redFlags: [
      "皮膚變化 + 腫塊 + LN → 急 biopsy",
      "Inflammatory breast CA（皮膚紅腫）"
    ]
  },

  {
    id: "114-43",
    source: "114",
    age: 50,
    sex: "F",
    department: "急",
    system: "感染/神經",
    chiefComplaint: "頭痛 + 發燒 1 週",
    vignette: "50 歲未婚女工程師。值班作息不規律。頭痛 + 全身倦怠 1 週，近 2 天頭痛加劇 + 發燒急診。",
    history: [
      "頭痛 LQQOPERA：突發 thunderclap（排 SAH）、worst ever、姿勢或活動相關、位置、性質",
      "伴隨：頸僵、畏光、噁心嘔吐、意識變化、視力改變、癲癇",
      "發燒 pattern：高燒、寒顫、熱型、退燒藥反應",
      "感染暴露史：近期 URI、sinusitis、otitis、性行為、旅遊、動物接觸",
      "內外敏藥住個家：免疫狀態（HIV、steroid、化療、DM）、作息不規律、疫苗史（meningococcal、pneumococcal）"
    ],
    pe: [
      "Vital signs + GCS（Glasgow Coma Scale）+ 意識狀態評估",
      "Meningismus 徵象：頸部僵硬、Brudzinski sign、Kernig sign",
      "顱神經、focal neurological deficit、papilledema（fundoscopy）",
      "皮膚 petechiae / purpura（meningococcal 敗血症）、心音、肺聽診找感染源",
      "Bedside：fingerstick glucose、血液培養，準備 CT brain 後 LP（lumbar puncture）"
    ],
    ddx: [
      "Bacterial meningitis（必排）",
      "Viral encephalitis（HSV）",
      "Subarachnoid hemorrhage（thunderclap）",
      "Brain abscess",
      "Migraine with fever"
    ],
    explanation: [
      "bacterial meningitis（細菌性腦膜炎）是 meninges（腦膜）被細菌感染，常見 S. pneumoniae、N. meningitidis",
      "典型三聯徵：fever、headache、neck stiffness，加 altered mental status",
      "細菌穿過 BBB（blood-brain barrier）引起強烈發炎、腦壓升高，可進展至 sepsis 與 brain herniation",
      "未治療死亡率 > 90%；及時抗生素加 steroid 可顯著降低死亡率與神經後遺症",
      "工程師作息不規律、免疫力下降是可能誘因，須盡早診斷與治療"
    ],
    treatment: [
      "Workup：blood culture × 2、CBC、CRP、coagulation；CT brain 排 mass effect 後 LP 取 CSF（cell count、protein、glucose、Gram stain、culture、PCR）",
      "經驗性抗生素（不等 LP 結果）：ceftriaxone（Rocephin）2 g IV q12h + vancomycin 15-20 mg/kg IV q8-12h",
      "> 50 歲或免疫低下加 ampicillin 2 g IV q4h 涵蓋 Listeria monocytogenes",
      "Adjuvant dexamethasone 10 mg IV q6h × 4 天，首劑於抗生素前或同時給予以降低神經後遺症",
      "支持治療：IV fluid 維持灌流、antipyretic、監測 ICP（intracranial pressure）與電解質（SIADH）",
      "懷疑 HSV encephalitis 加 empiric acyclovir 10 mg/kg IV q8h；meningococcal 密切接觸者 ciprofloxacin 500 mg PO × 1 預防"
    ],
    redFlags: [
      "Meningismus + altered mental → 立即 abx + LP",
      "Focal deficit → CT before LP"
    ]
  },

  {
    id: "114-44",
    source: "114",
    age: 52,
    sex: "F",
    department: "內",
    system: "感染/呼吸",
    chiefComplaint: "確診流感 + 持續發燒",
    vignette: "52 歲已婚高中老師，流感快篩 (+)。發燒 2 天 + 黃痰咳嗽不喘 + 頭痛、鼻塞、流鼻水、喉嚨痛、肌痛、輕微腹瀉。",
    history: [
      "症狀時序：發燒、肌痛、頭痛、咳嗽、黃痰、鼻塞、喉嚨痛、腹瀉之 onset 與演變",
      "重症 warning signs：呼吸困難、胸痛、嗜睡、意識改變、脫水、退燒後再發燒",
      "共病 risk factors：DM、HTN、chronic heart/lung disease、孕婦、肥胖、免疫抑制",
      "接觸與暴露史：家人、同事、學生症狀、群聚、校園狀況",
      "內外敏藥住個家：流感疫苗接種史、oseltamivir 使用經驗、藥物過敏、家中幼兒或長者"
    ],
    pe: [
      "Vital signs + SpO2（氧飽和度）",
      "ENT：咽喉紅腫、扁桃腺、耳膜、鼻黏膜；頸部淋巴",
      "胸部聽診：crackles、wheezing、呼吸音減弱（排 pneumonia）",
      "心音、腹部、皮膚（排 myocarditis、rash）",
      "Bedside：rapid influenza test 已 (+)、考慮 CXR、SpO2 持續監測"
    ],
    ddx: [
      "Influenza A/B（已確診）",
      "併發症：bacterial pneumonia、myocarditis、encephalitis",
      "COVID-19 co-infection",
      "Sinusitis（次發）",
      "Otitis media"
    ],
    explanation: [
      "influenza（流感）已快篩確診，由 influenza virus A/B 經飛沫傳播，潛伏期 1-4 天",
      "典型 high-grade fever + 全身症狀（肌痛、頭痛、倦怠）+ 上呼吸道症狀",
      "發燒 > 3-5 天或退燒後再發燒，要警覺 secondary bacterial pneumonia（S. pneumoniae、S. aureus）",
      "其他併發症：myocarditis、encephalitis、Reye syndrome（兒童避免 aspirin）",
      "教師為高暴露族群，需停課休息以免校園群聚爆發"
    ],
    treatment: [
      "Workup：CXR（持續發燒排 pneumonia）、CBC、CRP、procalcitonin 評估細菌共感染",
      "抗病毒：oseltamivir（Tamiflu）75 mg PO BID × 5 天，症狀 48 小時內投予效益最大",
      "退燒止痛：acetaminophen（Tylenol）500 mg PO q6h；避免 aspirin 以防 Reye syndrome",
      "懷疑細菌併發：amoxicillin/clavulanate（Augmentin）875/125 mg PO BID 或 azithromycin 500 mg PO QD × 5 天",
      "衛教：休息、多喝水、戴口罩、退燒 24 小時後才返校；家人密切接觸者觀察症狀",
      "預防：每年流感疫苗、勤洗手、咳嗽禮節、高風險接觸者可考慮 oseltamivir 預防性投藥"
    ],
    redFlags: [
      "呼吸喘 / SpO2 ↓ → 排 viral / bacterial pneumonia",
      "胸痛 / 心律不整 → myocarditis"
    ]
  },

  {
    id: "114-45",
    source: "114",
    age: 54,
    sex: "F",
    department: "內",
    system: "內分泌/心血管",
    chiefComplaint: "心悸 + 怕熱 + 體重減輕",
    vignette: "54 歲女性，心悸 1 個月。跳得快持續 10 分鐘。喝咖啡/茶/家事誘發，休息也會。呼吸不順、臉紅、怕熱。月減 2 kg。會失眠。已停經 5-6 年。",
    history: [
      "甲亢症狀群：怕熱、出汗、體重減輕、食慾增加、腹瀉、手抖、焦慮、失眠",
      "心悸 LQQOPERA：頻率、規則與否、持續時間、誘發因子（咖啡、茶、家事）、暈厥、胸痛",
      "眼部：複視、眼凸、異物感、淚溢（thyroid eye disease 線索）",
      "頸部腫脹、吞嚥困難、聲音沙啞",
      "婦產科「性孕經分片」+ 家族：已停經 5-6 年、家族 thyroid disease、近期含碘食物或藥物（amiodarone）"
    ],
    pe: [
      "Vital signs（注意 HR↑、systolic BP↑、脈壓增大）",
      "甲狀腺：goiter 大小、bruit（聽診）、nodule 觸診",
      "眼部：proptosis、lid lag、lid retraction",
      "皮膚（warm moist）、手部 fine tremor、DTR（亢進）、pretibial myxedema",
      "心音 + ECG（排 AF）、bedside TSH/fT4 送檢"
    ],
    ddx: [
      "Hyperthyroidism（Graves' disease 最可能）",
      "Toxic multinodular goiter",
      "Thyroiditis",
      "Pheochromocytoma",
      "Anxiety / perimenopause"
    ],
    explanation: [
      "hyperthyroidism（甲狀腺功能亢進）使 thyroid hormone（T3/T4）過量，全身代謝加速",
      "Graves' disease 為最常見成因，由 TSH receptor antibody（TRAb）自體抗體刺激甲狀腺",
      "症狀包括心悸、tremor、怕熱、體重減輕、失眠、焦躁、月經不規則",
      "未治療易併發 thyroid storm（甲狀腺風暴）、AF（atrial fibrillation）、osteoporosis、HF",
      "停經後出現需與 perimenopause 鑑別，但明顯體重減輕較不像單純更年期"
    ],
    treatment: [
      "Workup：TSH、free T4、free T3、TRAb、anti-TPO、thyroid echo 或 Tc-99m scan 評估病因",
      "症狀控制：propranolol（Inderal）10-40 mg PO TID 改善心悸、tremor、焦慮",
      "Antithyroid drug：methimazole（Tapazole）10-30 mg/d PO 首選；PTU 用於懷孕第一孕期或 thyroid storm",
      "確定治療：ATD 12-18 個月、RAI（radioactive iodine I-131）、subtotal thyroidectomy 三選一",
      "監測：每 4-6 週追 TSH/fT4、CBC（agranulocytosis）、LFT；眼科評估 thyroid eye disease",
      "衛教：戒咖啡因、避免過量碘（海帶、海藻）、戒菸（加重眼病變）、規律服藥勿自行停藥"
    ],
    redFlags: [
      "Thyroid storm（高燒 + 意識改變 + HF）→ ICU",
      "AF with rapid response → rate control"
    ]
  },

  {
    id: "114-46",
    source: "114",
    age: 50,
    sex: "F",
    department: "內",
    system: "內分泌/腫瘤",
    chiefComplaint: "半年內體重減輕 8 kg",
    vignette: "50 歲女性，半年內 58 → 50 kg + 疲倦。叔叔 3 個月前大腸癌過世，開始運動飲食調整。精神/睡眠/胃口正常。無流汗手抖心跳快。無咳嗽吞嚥困難。大小便正常。無陰道出血。",
    history: [
      "Quantify weight loss：起始與目前體重、時間軸、intentional vs unintentional 比例",
      "B symptoms：發燒、夜汗、食慾改變（malignancy 線索）",
      "系統 review：GI（吞嚥、腹痛、大便習慣、血便）、Resp（咳嗽、咳血）、GU、神經、內分泌",
      "婦產科「性孕經分片」+ 停經史、陰道出血、乳房腫塊；近期大腸鏡、Pap smear、mammography",
      "家族史：叔叔大腸癌過世；精神：情緒、憂鬱、焦慮、生活壓力、飲食運動內容"
    ],
    pe: [
      "Vital signs + 身高體重 BMI + muscle wasting 評估",
      "甲狀腺、頸部 + supraclavicular + 腋下淋巴",
      "心肺 + 腹部（mass、organomegaly、ascites、壓痛）",
      "乳房 + pelvic exam + DRE（digital rectal examination）+ 糞便潛血",
      "皮膚 pallor、jaundice、口腔黏膜"
    ],
    ddx: [
      "Intentional weight loss（飲食運動調整）",
      "Hyperthyroidism",
      "Malignancy（GI、肺、ovary）",
      "Diabetes mellitus",
      "Depression / anxiety"
    ],
    explanation: [
      "unintentional weight loss（非刻意體重減輕）定義：6 個月內 > 5% 或 > 4.5 kg",
      "本案半年減 8 kg（約 14%）超過警戒值，雖有飲食運動因素仍須完整評估",
      "鑑別三大方向：malignancy（GI、肺、婦科）、endocrine（hyperthyroidism、DM）、psychiatric（depression）",
      "家族史叔叔大腸癌過世，需盡早 colonoscopy 篩檢",
      "其他常見原因：chronic infection（TB、HIV）、malabsorption、慢性病惡化、藥物"
    ],
    treatment: [
      "Workup：CBC、CMP（含 glucose、LFT、creatinine）、TSH、HbA1c、HIV、stool occult blood、urinalysis、CXR",
      "癌症篩檢：colonoscopy（家族史）、mammography、Pap smear、abdominal ultrasound、必要時 upper GI endoscopy",
      "高度懷疑 malignancy 或 B symptoms 持續：PET-CT 全身評估",
      "Nutritional assessment：24-hr dietary recall、albumin、prealbumin、transferrin",
      "衛教：記錄每日飲食與運動量、刻意減重應確保蛋白質 1-1.2 g/kg/d、避免極端節食",
      "追蹤：1-3 個月內回診重測體重，若持續下降深入檢查並轉腫瘤科評估"
    ],
    redFlags: [
      "B symptoms + 體重減輕 → 全身 workup",
      "新發貧血 → 排 GI cancer"
    ]
  },

  {
    id: "114-47",
    source: "114",
    age: 22,
    sex: "M",
    department: "急",
    system: "呼吸/胸壁",
    chiefComplaint: "右側胸痛 + 呼吸困難",
    vignette: "22 歲男性，昨晚突發右側胸痛。胸悶、尖銳刺痛、痛擴散到背。今早胸悶 + 深呼吸不順 + 呼吸困難。趕報告壓力大、疲倦。無外傷、無慢性病。",
    history: [
      "胸痛 LQQOPERA：突發、pleuritic（呼吸加重）、尖銳刺痛、放射至背部、持續時間",
      "呼吸症狀：dyspnea（呼吸困難）、SOB（shortness of breath）、咳嗽、咳血",
      "誘發因子：外傷、劇烈用力、咳嗽、潛水、飛行、搭乘高速列車",
      "Risk factors：tall lean young male、smoker、Marfan syndrome、過去氣胸史、家族史",
      "內外敏藥住個家：排 PE（pulmonary embolism）risk（immobilization、長途、避孕藥、家族 DVT）、壓力大、疲倦"
    ],
    pe: [
      "Vital signs + SpO2 + 呼吸型態（tachypnea、accessory muscle use）",
      "胸部視聽叩觸：患側呼吸音減弱、hyperresonance percussion、tactile fremitus 減弱",
      "Tracheal deviation、JVP（jugular venous pressure）升高（tension 徵象）",
      "Subcutaneous emphysema、心音、下肢 DVT 評估",
      "Bedside：upright PA CXR、ECG、ABG（arterial blood gas）"
    ],
    ddx: [
      "Spontaneous pneumothorax（tall lean young male）",
      "Pulmonary embolism",
      "Costochondritis",
      "Musculoskeletal pain",
      "Pleurisy / pneumonia"
    ],
    explanation: [
      "spontaneous pneumothorax（自發性氣胸）是肺尖 subpleural bleb 破裂，空氣進入 pleural cavity",
      "典型族群：年輕、瘦高、男性、吸菸者；本案 22 歲男性符合 primary spontaneous pneumothorax 特徵",
      "突發單側胸痛 + 呼吸困難、患側呼吸音減弱與 hyperresonance percussion 是典型徵象",
      "tension pneumothorax 會壓迫對側肺與大血管 → hypotension、tracheal deviation、JVP↑，屬急症",
      "首次發作復發率 30-50%，戒菸可大幅降低復發風險"
    ],
    treatment: [
      "Workup：upright PA CXR（看肺尖虛線 + 無 lung marking 區）、不確定加 chest CT、ABG、ECG 排 PE/MI",
      "tension pneumothorax 急救：immediate needle decompression（2nd ICS MCL 或 4-5th ICS AAL）→ 接 chest tube",
      "Small（< 2 cm）且穩定：observation + 100% O2 加速氣體吸收",
      "Large 或症狀明顯：chest tube thoracostomy（24-28 Fr，4-5th ICS midaxillary line），接 water seal 或 suction",
      "復發或 persistent air leak：VATS（video-assisted thoracoscopic surgery）+ bleb resection + pleurodesis",
      "衛教：戒菸、術後 1-2 週內避免飛行與潛水、暫緩劇烈運動、復發症狀立即就醫"
    ],
    redFlags: [
      "Tension pneumothorax（HR↑ BP↓ JVP↑ tracheal shift）→ 立即 needle decompression",
      "Massive PE → thrombolysis"
    ]
  },

  {
    id: "114-48",
    source: "114",
    age: 55,
    sex: "F",
    department: "內",
    system: "內分泌/精神",
    chiefComplaint: "心悸 + 冷汗 + 熱感",
    vignette: "55 歲女性，心悸半年、一天 5-6 次，伴冷汗失眠。發作時無力、提不起精神。陣陣發熱、臉燙 30 秒-1 分。無暈倒。1 年內體重 +3 kg，飲食正常。無胸痛、頭痛、腹痛。",
    history: [
      "婦產科「性孕經分片」：停經年齡、最後月經、月經規則度、HRT 使用史",
      "心悸 LQQOPERA：頻率（一天 5-6 次）、誘發因子、持續時間、暈厥、胸痛",
      "Vasomotor symptoms：hot flush（熱潮紅）、night sweat、臉燙、持續秒數",
      "甲亢 vs 焦慮 vs perimenopause 鑑別：怕熱 vs 怕冷、體重變化、tremor、焦慮、panic attack",
      "內外敏藥住個家：情緒、壓力、睡眠品質、咖啡茶酒精、家族 CVD / 乳癌 / VTE、骨質疏鬆"
    ],
    pe: [
      "Vital signs + BMI + 血壓兩側比較",
      "甲狀腺觸診、手部 tremor、皮膚（warm moist vs normal）",
      "心音 + abdominal bruit（排 pheochromocytoma renal artery）",
      "乳房 + pelvic exam + 骨骼壓痛",
      "Bedside：ECG、24-hr Holter、TSH、FSH/LH、fasting glucose"
    ],
    ddx: [
      "Perimenopause / menopause",
      "Generalized anxiety / panic",
      "Hyperthyroidism",
      "Pheochromocytoma",
      "Cardiac arrhythmia（PSVT）"
    ],
    explanation: [
      "55 歲女性、停經前後出現 hot flush、心悸、失眠、體重增加，最像 perimenopause（更年期症候群）",
      "卵巢功能下降使 estrogen 波動 → 下視丘體溫調節中樞失調 → vasomotor symptoms",
      "鑑別仍需排 hyperthyroidism、cardiac arrhythmia（PSVT）、pheochromocytoma、anxiety / panic disorder",
      "pheochromocytoma 典型 5P：paroxysmal hypertension、palpitation、pallor、perspiration、pain（headache）",
      "更年期症狀可持續數月至數年，部分人只需衛教與生活調整即可改善"
    ],
    treatment: [
      "Workup：TSH、free T4、CBC、fasting glucose、lipid profile、ECG、24-hr Holter；懷疑 pheo 加 plasma metanephrines",
      "輕症：lifestyle modification（規律運動、避免咖啡因 / 酒精 / 辛辣、室溫涼爽、深呼吸放鬆、layer dressing）",
      "中重度 vasomotor：MHT（menopausal hormone therapy）estradiol + progesterone（有子宮者）；禁忌為乳癌、VTE、CVD 高風險",
      "Non-hormonal：SSRI paroxetine（Paxil）7.5 mg PO QD、SNRI venlafaxine、gabapentin（夜間熱潮紅）",
      "失眠：sleep hygiene、必要時短期 zolpidem（Stilnox）5-10 mg PO QHS",
      "衛教：定期 mammography、bone density（DXA）、心血管風險評估、補鈣 1200 mg/d + vit D 800-1000 IU/d"
    ],
    redFlags: [
      "心悸 + 暈厥 → 24 hr Holter + ECG",
      "停經後新發 → 排內膜癌（出血）"
    ]
  },

  {
    id: "114-49",
    source: "114",
    age: 0,
    sex: "M",
    department: "小",
    system: "小兒/新生兒",
    chiefComplaint: "15 天大男嬰，黃疸不褪 + 嗜睡",
    vignette: "15 天大男嬰，今天睡眠較多。全母乳直接餵食，每天換尿布 4 次無粉紅沉澱。大便金黃。哭聲宏亮。媽媽第二胎，39 週自然產 2953 gm。出生第 3 天黃疸 15、照光 2 天降到 12。父 O 母 B，老大也照光 3 天。",
    history: [
      "新生兒「母生 3A + 吃喝拉動睡」：母親 G2P2、39 週 NSD 2953 gm、Apgar、產檢、產房處置、疫苗（HBV、BCG）",
      "黃疸 onset、全身分布（cephalocaudal）、進展速度、出生第 3 天 bili 15、照光 2 天降至 12",
      "餵食：全母乳直接餵、每日次數、每次時長、體重變化；大便顏色（金黃 vs 灰白）與次數",
      "尿量：每日尿布片數、粉紅沉澱（uric acid crystal → dehydration）",
      "家族：父 O 母 B（ABO incompatibility 風險）、老大曾照光 3 天、G6PD（glucose-6-phosphate dehydrogenase）家族史"
    ],
    pe: [
      "Vital signs、體重（與出生比較，正常 < 7-10% 下降）、頭圍",
      "Skin：黃疸範圍（Kramer zone）、cephalocaudal progression、pallor",
      "Hydration：皮膚彈性、黏膜濕潤度、囟門、尿布濕度",
      "活力、哭聲、muscle tone、primitive reflex、吸吮力",
      "Bedside：transcutaneous bilirubin、腹部（肝脾腫）、cephalohematoma、stool color card 對照"
    ],
    ddx: [
      "Breast milk jaundice（最可能，prolonged jaundice）",
      "Breastfeeding jaundice（dehydration）",
      "ABO incompatibility（母 O 嬰 B/A）",
      "G6PD deficiency",
      "Biliary atresia（灰白便則必排）"
    ],
    explanation: [
      "breast milk jaundice（母乳性黃疸）：母乳中 β-glucuronidase 增加腸肝循環，使 unconjugated bilirubin 升高",
      "典型在出生 1 週後出現、可持續 4-12 週，indirect-predominant，嬰兒一般狀況良好",
      "breastfeeding jaundice 則是餵食不足 → 脫水 → bilirubin 累積，通常發生在第 1 週內",
      "需排除 ABO incompatibility（父 O 母 B 風險）、G6PD deficiency、UTI、biliary atresia（灰白便為紅旗）",
      "biliary atresia 必須在出生 60 天內完成 Kasai operation 才有最佳治癒機會，越晚越差"
    ],
    treatment: [
      "Workup：total/direct bilirubin、CBC、reticulocyte、blood type + Coombs test、G6PD、UA、TSH、stool color card",
      "direct bilirubin > 1 mg/dL 或 > 20% total：懷疑 cholestasis → abdominal echo、HIDA scan 排 biliary atresia",
      "依 Bhutani nomogram 分層：> 95th percentile 或 high-intermediate risk → phototherapy",
      "嚴重（近 exchange transfusion threshold）：double/triple phototherapy、IVIG（isoimmune hemolysis）、必要時 exchange transfusion",
      "breast milk jaundice 處理：繼續母乳哺餵；若 bilirubin 偏高可暫停母乳 24-48 小時觀察下降幅度確認診斷",
      "衛教：每天哺餵 8-12 次、確認 ≥ 6 片濕尿布/日、stool color card 每次回診對照、體重與黃疸連續追蹤"
    ],
    redFlags: [
      "TB > 20 mg/dL → 換血 + photo",
      "Conjugated > 20% → 排 biliary atresia（< 60 d）"
    ]
  },

  {
    id: "114-50",
    source: "114",
    age: 6,
    sex: "M",
    department: "小",
    system: "小兒/內分泌",
    chiefComplaint: "6 歲男孩身材矮小",
    vignette: "6 歲男孩，父親覺身高比同學矮。學習能力相當、運動可。家族無類似情況。父母小時無慢長印象。無住院/開刀史。足月自然產 3200 gm 50 cm。疫苗正常。",
    history: [
      "小兒「母生 3A + 吃喝拉動睡」：G1P1、足月 NSD 3200 gm 50 cm、新生兒無異常、疫苗按時",
      "生長：完整 growth chart 身高體重百分位、身高速度（cm/yr）、父母身高計算 MPH（mid-parental height）",
      "營養：每日飲食內容、挑食、熱量、蛋白質、鈣攝取；運動與睡眠時數",
      "慢性病 review：反覆腹瀉（celiac、IBD）、吸收不良、氣喘、心臟、腎臟、慢性感染",
      "發展 + 學校 + 情緒 + 霸凌；家族：父母兒時 growth pattern、有無青春期 late bloomer、遺傳疾病"
    ],
    pe: [
      "身高體重描 growth chart + 計算身高速度 + MPH 比對",
      "Tanner stage（pubic hair、testicular volume）、secondary sexual characteristics",
      "甲狀腺、心肺、腹部（肝脾、mass）、脊椎",
      "Body proportion（upper/lower segment、臂長）、dysmorphic features（Turner、Noonan 特徵）",
      "Bone age（左手腕 X-ray）、CBC、TSH、IGF-1、IGFBP-3"
    ],
    ddx: [
      "Familial short stature",
      "Constitutional delay of growth and puberty",
      "GH deficiency",
      "Hypothyroidism",
      "Chronic disease（celiac、IBD）"
    ],
    explanation: [
      "short stature（身材矮小）定義：身高 < 第 3 百分位或 < -2 SD，或生長速率異常下降",
      "familial short stature：父母矮、生長曲線平行於低百分位、bone age = chronological age，屬正常變異",
      "constitutional delay of growth and puberty：晚熟型，bone age < chronological age，最終身高接近正常",
      "病理性原因：GH（growth hormone）deficiency、hypothyroidism、Turner syndrome（女）、慢性病、skeletal dysplasia、營養不良",
      "預後與成因相關，及早診斷 GH 或 thyroid 問題可顯著改善最終身高"
    ],
    treatment: [
      "Workup：完整 growth chart + parental heights → MPH、bone age、CBC、CMP、TSH、IGF-1、IGFBP-3、celiac screen（tTG-IgA）",
      "懷疑 GH deficiency：GH stimulation test（clonidine、arginine、insulin）、brain MRI 評估 pituitary",
      "病因治療：hypothyroidism 給 levothyroxine 依體重調整；GH deficiency 給 recombinant GH 0.025-0.05 mg/kg/d SC QHS",
      "營養諮詢：確保熱量、蛋白質、鈣、維他命 D、zinc 攝取足量，矯正挑食",
      "衛教：規律記錄生長速率（學齡期每年 ≥ 5 cm 為正常）、充足睡眠（夜間 GH 分泌）、規律運動、避免濫用 steroid",
      "追蹤：每 3-6 個月小兒內分泌回診、必要時 genetics 諮詢（Turner、SHOX gene、skeletal dysplasia）"
    ],
    redFlags: [
      "Height velocity < 4 cm/yr → 內分泌轉診",
      "Disproportionate body → skeletal dysplasia"
    ]
  },

  {
    id: "114-51",
    source: "114",
    age: 45,
    sex: "F",
    department: "內",
    system: "腎臟",
    chiefComplaint: "雙腿水腫 1 個月 + 蛋白尿",
    vignette: "45 歲家庭主婦。1 個月前下肢水腫，1 週後合併眼皮腫求診，告知 proteinuria，利尿劑無效。2 週前食慾不振、腹脹、容易疲倦、暴躁。1 週前尿少。1 個月內體重 50 → 60 kg。15 年前 appendectomy。",
    history: [
      "水腫 LQQOPERA：位置（眼瞼晨起/下肢午後）、onset、pitting、泡沫尿、尿量變化",
      "伴隨症狀：腹脹 ascites（腹水）、喘、PND（paroxysmal nocturnal dyspnea）、體重增加 10 kg",
      "內外敏藥住家：DM（糖尿病）、HTN（高血壓）、HBV/HCV、SLE、長期 NSAID 或中草藥",
      "B symptoms 排 malignancy：發燒、體重減輕、盜汗；排 HF 與肝硬化症狀",
      "家族史：腎病、蛋白尿、SLE；婦科史與月經狀況（影響用藥選擇）"
    ],
    pe: [
      "Vital signs（特別 BP 與體重）+ BMI，監測尿量",
      "水腫分布：periorbital、pretibial pitting edema、scrotal/vulvar 水腫",
      "腹部 IPPA：shifting dullness、fluid wave（ascites）、hepatosplenomegaly",
      "心肺：JVP、crackles、S3 gallop、pleural effusion 徵象",
      "Bedside：dipstick UA 看 proteinuria、spot UPCR、床邊腎臟超音波"
    ],
    ddx: [
      "Nephrotic syndrome（minimal change、FSGS、membranous）",
      "Membranous nephropathy（成人最常見）",
      "Diabetic nephropathy",
      "Lupus nephritis",
      "Heart failure / cirrhosis（鑑別）"
    ],
    explanation: [
      "您的病是 nephrotic syndrome（腎病症候群），腎絲球過濾膜破損使蛋白質大量流進尿液",
      "血中 albumin（白蛋白）流失後血液無法留住水分，水跑到組織造成眼皮與腿部水腫",
      "泡沫尿就是尿裡含大量蛋白的表現，與一般泡沫不同在於久久不散",
      "不治療可能併發 VTE（靜脈血栓）、感染、AKI（急性腎損傷），長期進展為慢性腎衰竭",
      "及早找出原因並治療，多數病人腎功能可穩定；延誤則可能需要洗腎"
    ],
    treatment: [
      "Workup：spot UPCR（urine protein/creatinine ratio）或 24-hr urine protein、albumin、lipid、Cr、CBC、HBV/HCV/HIV、ANA、C3/C4、PLA2R Ab、腎超音波，必要時 renal biopsy 確診",
      "低鹽飲食 < 2 g Na/d；利尿劑 furosemide（Lasix）20-80 mg PO QD-BID，必要時加 thiazide",
      "降蛋白尿：ACEi enalapril 或 ARB losartan 50-100 mg PO QD；高血脂加 atorvastatin 10-40 mg QD",
      "免疫抑制依病理：minimal change → prednisolone 1 mg/kg/d；membranous → rituximab 或 cyclophosphamide + steroid",
      "VTE 預防：albumin < 2.5 g/dL 考慮 prophylactic anticoagulation；接種 pneumococcal 疫苗防感染",
      "衛教：戒菸、控制 BP < 130/80、定期追蹤 UPCR 與 Cr、避免 NSAID"
    ],
    redFlags: [
      "Anasarca + AKI → 急 dialysis 評估",
      "重度低 albumin + thrombosis 風險 → anticoagulation"
    ]
  },

  {
    id: "114-52",
    source: "114",
    age: 46,
    sex: "F",
    department: "婦",
    system: "婦產/腫瘤",
    chiefComplaint: "子宮內膜癌診斷後解釋",
    vignette: "46 歲女性，半年月經不規則 + 異常出血。婦產科 D&C 病理找到惡性 → 子宮內膜癌。需子宮切除。14 歲 appendectomy。母 40 歲子宮頸癌過世。",
    history: [
      "婦產科「性孕經分片」：性行為、GPA、LMP/PMP、月經週期變化、近期 Pap smear",
      "異常出血 LQQOPERA：量、性質、持續時間、是否停經後再出血、骨盆痛",
      "內外敏藥住家：肥胖、DM、HTN、PCOS（polycystic ovary syndrome）、tamoxifen、unopposed estrogen HRT",
      "B symptoms：體重減輕、食慾差、夜汗；排尿與排便變化（侵犯 bladder/rectum）",
      "家族史：母親 40 歲子宮頸癌過世 → 評估 Lynch syndrome（HNPCC 相關大腸 + 內膜癌）"
    ],
    pe: [
      "Vital signs + BMI（obesity 為 risk factor）",
      "腹部 IPPA：mass、hepatomegaly、ascites",
      "Pelvic exam：cervix 外觀、子宮大小、附件 mass、rectovaginal exam 評估侵犯",
      "淋巴結：inguinal、supraclavicular",
      "Staging：TVS（transvaginal sonography）測內膜厚度、pelvic MRI、CXR"
    ],
    ddx: [
      "Endometrial adenocarcinoma（type I endometrioid 最常見）",
      "Endometrial hyperplasia",
      "Cervical extension",
      "Ovarian / 婦科其他癌",
      "Lynch syndrome（家族）→ MSI/IHC test"
    ],
    explanation: [
      "Endometrial cancer（子宮內膜癌）由子宮內膜腺體發生，type I endometrioid 佔多數",
      "與 unopposed estrogen 刺激有關：肥胖、PCOS、單用 estrogen HRT、tamoxifen、晚停經",
      "半年月經不規則與異常出血就是腫瘤讓內膜不正常增生與剝落出血的表現",
      "不治療腫瘤會侵犯子宮肌層、子宮頸、骨盆腔並轉移至淋巴或肺，造成死亡",
      "早期 stage I 5 年存活率 > 90%；預後取決於 stage、grade、肌層侵犯深度"
    ],
    treatment: [
      "Workup：TVS 測 endometrial thickness、endometrial biopsy 或 D&C 病理、pelvic MRI、CA-125、CXR 或 chest CT staging",
      "Lynch 篩檢：腫瘤 MSI（microsatellite instability）或 MMR IHC，符合 Amsterdam criteria 轉 genetic counseling",
      "Surgery：total hysterectomy + BSO（bilateral salpingo-oophorectomy）+ pelvic/para-aortic lymph node dissection",
      "Adjuvant 依 stage/grade：vaginal brachytherapy、external beam RT、chemo carboplatin AUC 5 + paclitaxel 175 mg/m² q3w",
      "Advanced/recurrent：hormone therapy megestrol、immunotherapy pembrolizumab（MSI-H）",
      "衛教：避免 estrogen-only HRT、術後性生活諮詢、家族大腸鏡篩檢、前 2 年每 3-6 個月回診"
    ],
    redFlags: [
      "大量陰道出血 → 急止血 + transfusion",
      "Lynch family screening → 大腸鏡"
    ]
  },

  {
    id: "114-53",
    source: "114",
    age: 33,
    sex: "F",
    department: "婦",
    system: "婦產",
    chiefComplaint: "經痛加劇 2 年 + 右下腹痛",
    vignette: "33 歲未婚女，性行為。2 年前月經來下腹痛 + 腰酸。最近月經前後 2 天 RLQ 痛。偶腹瀉。止痛藥效果遞減。20 歲 TOP。週期 28-30 天 5-7 天。冰冷食物惡化。從未做 Pap。",
    history: [
      "婦產科「性孕經分片」：性行為、GPA（含 TOP 1 次）、LMP、週期 28-30/5-7 天、Pap 從未做",
      "經痛 LQQOPERA：progressive、月經前後 2 天 RLQ、止痛藥效果遞減、冷食惡化",
      "典型 4D：dyspareunia、dyschezia、dysuria、infertility 意願與嘗試",
      "內外敏藥住家：NSAID 用量、過敏、PID（pelvic inflammatory disease）史、手術史",
      "家族史：母姊 endometriosis、子宮肌瘤、不孕"
    ],
    pe: [
      "Vital signs + 體溫（排 PID）",
      "腹部 IPPA：RLQ tenderness、mass、rebounding",
      "Pelvic exam：cul-de-sac nodularity、adnexal tenderness/mass、retroverted uterus",
      "直腸陰道指診評估 deep infiltrating endometriosis",
      "TVS 看 endometrioma（ground-glass appearance）+ CA-125（supportive）"
    ],
    ddx: [
      "Endometriosis（最可能）",
      "Adenomyosis",
      "Ovarian endometrioma",
      "PID",
      "Primary dysmenorrhea"
    ],
    explanation: [
      "您的病可能是 endometriosis（子宮內膜異位症），子宮內膜組織跑到子宮外生長",
      "每次月經這些異位內膜也跟著出血，造成發炎、結痂、沾黏，引起週期性疼痛",
      "止痛藥效果逐年變差、痛感往下腹延伸是病灶惡化的表現，也可能造成不孕",
      "不治療疾病會持續進展、沾黏加重，可能影響生育並造成 chronic pelvic pain",
      "停經後多自然緩解；及早治療可保留生育功能，是慢性但可管理的疾病"
    ],
    treatment: [
      "Workup：pelvic exam、TVS、CA-125（輔助）、pelvic MRI 評估 deep lesion；Pap smear 依國健署 30 歲以上每 3 年免費篩檢",
      "First line：NSAID mefenamic acid 500 mg PO q8h prn + combined OCP（estrogen-progestin）連續服用抑制排卵",
      "Second line：progestin dienogest 2 mg PO QD、LNG-IUS（Mirena）、GnRH agonist leuprolide 3.75 mg IM 月針 + add-back therapy",
      "Refractory 或 endometrioma > 4 cm：laparoscopic excision/cystectomy",
      "Definitive（完成生育）：TAH-BSO（total abdominal hysterectomy + BSO）",
      "衛教：規律運動、低脂飲食、戒菸；想懷孕儘早備孕，必要時 IVF；定期 TVS 追蹤"
    ],
    redFlags: [
      "不孕 + 嚴重痛 → laparoscopy",
      "急性 RLQ + adnexal mass → 排 ovarian torsion"
    ]
  },

  {
    id: "114-54",
    source: "114",
    age: 67,
    sex: "M",
    department: "內",
    system: "腎臟",
    chiefComplaint: "雙下肢水腫 + 泡沫尿（NSAID 後）",
    vignette: "67 歲男性，菸 1 包/d，偶喝酒。2 個月前扭傷服止痛藥 2 週，之後尿量↓、深色 + 泡沫。足部水腫（午後）→ 小腿水腫，無痛。無 URI/皮膚病灶/胸悶/PND，可平躺。腹脹。",
    history: [
      "水腫 LQQOPERA：起始、分布（午後足部 → 小腿）、與 2 週 NSAID 服藥時序",
      "尿：量減少、深色、泡沫、頻率；有無 hematuria",
      "內外敏藥住家：菸 1 包/d、飲酒、HTN、DM、長期 NSAID、中草藥、保健品",
      "排 HF：PND、orthopnea、運動耐受；排 cirrhosis：黃疸、酒精史、肝炎",
      "老年 ADL 與共病：過去 Cr、蛋白尿病史、家族腎病"
    ],
    pe: [
      "Vital signs（BP、HR）+ 體重、pitting edema 程度",
      "心肺：JVP、crackles、S3；腹部：hepatosplenomegaly、shifting dullness",
      "Renal bruit、CVA（costovertebral angle）knocking pain",
      "皮膚：rash（AIN 過敏徵象）、allergic signs",
      "Bedside：dipstick UA（蛋白、血、casts）、POCUS 看腎大小與腎積水"
    ],
    ddx: [
      "Acute interstitial nephritis（NSAID）→ AKI",
      "Nephrotic syndrome（membranous nephropathy）",
      "CKD with NSAID-induced AKI",
      "Heart failure（鑑別）",
      "Hepatorenal / cirrhosis"
    ],
    explanation: [
      "您的病可能與 NSAID（non-steroidal anti-inflammatory drug，非類固醇消炎藥）有關，它有兩種腎損傷機轉",
      "一是 acute interstitial nephritis（AIN，急性間質性腎炎），一是抑制 prostaglandin 造成血流下降型 AKI（急性腎損傷）",
      "NSAID 也可能誘發 membranous nephropathy 造成 nephrotic syndrome，表現為泡沫尿加水腫",
      "不停藥繼續使用可能進展為 CKD（慢性腎病），甚至需要洗腎",
      "及時停藥加上治療，部分腎損傷可恢復；但 CKD 一旦形成就不可逆"
    ],
    treatment: [
      "立即停所有 NSAID 與其他腎毒性藥物（contrast、aminoglycoside、中草藥）",
      "Workup：UA（dipstick + sediment 看 WBC cast、eosinophils）、UPCR、24-hr urine protein、Cr、BUN、electrolytes、albumin、lipid、CBC、ANA、C3/C4、腎超音波",
      "若 nephrotic range 或診斷不明：renal biopsy 確認病理",
      "支持治療：低鹽飲食、furosemide（Lasix）20-40 mg PO QD；降蛋白尿 ACEi/ARB；降血脂 statin",
      "AIN 確診：prednisolone 1 mg/kg/d × 2-4 週後 taper",
      "衛教：戒菸戒酒、止痛改用 acetaminophen 500 mg PO q6h prn、定期追蹤 Cr 與 UPCR、控制 BP < 130/80"
    ],
    redFlags: [
      "Anuria + uremia → 急 dialysis",
      "NSAID 必停"
    ]
  },

  {
    id: "114-55",
    source: "114",
    age: 37,
    sex: "F",
    department: "內",
    system: "肝臟",
    chiefComplaint: "雙腳水腫 + 黃疸",
    vignette: "37 歲女性，2 個月疲倦食慾不振。仍下田。買維他命服用初有改善。最近 1 週皮膚變黃。3 天雙下肢水腫無痛。穿鞋困難無法下田。",
    history: [
      "黃疸 LQQOPERA：起始、深尿、灰白便、皮膚瘙癢、鞏膜黃染時序",
      "水腫與腹脹：下肢 pitting edema、腹圍增加、ascites、呼吸困難",
      "病因：HBV/HCV 史、飲酒量、herbal（維他命/草藥）、自體免疫、家族肝病（Wilson、HFE hemochromatosis）",
      "Decompensation：HE（hepatic encephalopathy，意識/日夜顛倒）、GI bleed、bruising",
      "B symptoms 排 HCC（hepatocellular carcinoma）：體重減輕、食慾不振、右上腹痛"
    ],
    pe: [
      "Vital signs + jaundice（鞏膜/皮膚）、cachexia、肌肉萎縮",
      "腹部 IPPA：hepatosplenomegaly、shifting dullness、fluid wave、caput medusae",
      "皮膚慢性肝病徵象：spider angioma、palmar erythema、Dupuytren contracture、gynecomastia",
      "下肢 pitting edema、testicular atrophy、asterixis（flapping tremor）",
      "Bedside：POCUS 看肝表面結節、ascites、門脈血流"
    ],
    ddx: [
      "Liver cirrhosis with decompensation（最可能）",
      "Acute hepatitis（HBV/HCV/A/E）",
      "Drug-induced liver injury（herbal）",
      "Autoimmune hepatitis",
      "Hepatocellular carcinoma"
    ],
    explanation: [
      "您出現的黃疸、水腫、疲倦提示 liver decompensation（肝硬化失代償期）",
      "肝臟無法合成足夠 albumin 與凝血因子，造成水分滲出組織與出血傾向",
      "膽紅素無法代謝而累積造成皮膚與眼白變黃；門脈壓力升高造成脾腫與 varices（食道靜脈曲張）",
      "您服用的維他命可能含 herbal hepatotoxicity（草藥肝毒性）成分，須立即停用查明原因",
      "代償期 5 年存活率約 80%，失代償後降至 20-50%，嚴重者需 liver transplantation"
    ],
    treatment: [
      "Workup：LFT（AST、ALT、Alk-P、GGT、total/direct bilirubin）、albumin、PT/INR、CBC、ammonia、HBsAg、anti-HCV、anti-HAV/HEV IgM、ANA、anti-SMA、AMA、ferritin、ceruloplasmin、AFP、abdominal echo",
      "立即停所有可疑藥物與草藥、維他命",
      "依病因治療：HBV → entecavir 0.5 mg PO QD 或 tenofovir；HCV → DAA（direct-acting antiviral）；autoimmune → prednisolone ± azathioprine",
      "Ascites/edema：限鈉 < 2 g/d、spironolactone 100 mg + furosemide 40 mg PO QD（100:40 比例）",
      "預防併發症：propranolol 防 variceal bleed、高風險 SBP（spontaneous bacterial peritonitis）加 norfloxacin、HCC 每 6 個月 echo + AFP 篩檢",
      "衛教：絕對戒酒、低鈉飲食、接種 HAV/HBV 疫苗、評估 MELD score 與 liver transplantation"
    ],
    redFlags: [
      "GI bleed / HE → 急住院",
      "Tense ascites + 發燒 → SBP（abx + paracentesis）"
    ]
  },

  {
    id: "114-56",
    source: "114",
    age: 65,
    sex: "F",
    department: "急",
    system: "感染/內分泌",
    chiefComplaint: "DM/HTN + 高燒 + 意識改變",
    vignette: "65 歲女性，DM + HTN 規則用藥。3 天前食慾減低，昨日發燒寒顫。無咳/頭痛/嘔吐/腹痛/拉肚子。2 天小便燒灼 + 腳腫 + 尿量少。今晨呼吸急促、反應較慢急診。",
    history: [
      "感染源線索：dysuria、flank pain、suprapubic pain、頻尿、血尿（UTI 典型）",
      "發燒 timeline：寒顫、退燒藥反應、最高溫、伴隨症狀",
      "老年 ADL + 意識改變：baseline mental status、嗜睡出現時點、家屬觀察",
      "DM 控制：近期 BG、HbA1c、用藥 adherence、多飲多尿（排 HHS/DKA）",
      "內外敏藥住家：尿管、腎結石、過去 UTI、抗生素使用史"
    ],
    pe: [
      "Vital signs + qSOFA（SBP ≤ 100、RR ≥ 22、GCS < 15）+ dehydration signs",
      "CVA knocking pain、suprapubic tenderness、皮膚（蜂窩性組織炎）",
      "心肺：crackles、murmur（排 endocarditis）；腹部：guarding",
      "神經學：GCS、focal deficit（排 stroke）、meningeal signs",
      "Bedside：POCT glucose、ketone、ABG、ECG、lactate、urine + blood culture × 2"
    ],
    ddx: [
      "Urosepsis with septic shock（最可能）",
      "HHS（DM + 意識改變）",
      "DKA",
      "Acute pyelonephritis",
      "Stroke（意識改變）"
    ],
    explanation: [
      "您的狀況是 urosepsis with septic shock（泌尿性敗血症合併敗血性休克），病情危急",
      "尿路感染的細菌進入血流引發全身發炎反應，造成血管擴張與組織灌流不足",
      "DM 患者免疫功能較差，感染容易從下泌尿道上行至腎臟再進入血流造成 bacteremia",
      "不及時治療會造成多重器官衰竭、急性腎衰竭、DIC 甚至死亡",
      "Septic shock 死亡率 30-50%，每延遲 1 小時給抗生素死亡率上升約 7%，必須分秒必爭"
    ],
    treatment: [
      "Workup（30 分鐘內）：CBC、CMP、glucose、lactate、ABG、blood culture × 2、UA、urine culture、CXR、ECG、意識差加 head CT",
      "Hour-1 bundle：IV crystalloid 30 mL/kg 灌注、測 lactate、給抗生素前取血培養",
      "Empiric antibiotics（1 小時內）：piperacillin/tazobactam（Tazocin）4.5 g IV q6h 或 ceftriaxone 2 g IV QD",
      "若 MAP（mean arterial pressure）< 65 mmHg 經 fluid 仍低：norepinephrine titrate to MAP ≥ 65",
      "DM 處理：BG > 250 mg/dL 加 insulin drip；查 ketone 與 osmolality 區分 DKA/HHS",
      "ICU 監測 urine output、lactate clearance、源頭控制（移除 Foley、引流 abscess）；衛教家屬病情嚴重度"
    ],
    redFlags: [
      "qSOFA ≥ 2 → ICU + 1 hr bundle",
      "BG > 600 + 意識 → HHS"
    ]
  },

  {
    id: "114-57",
    source: "114",
    age: 53,
    sex: "M",
    department: "內",
    system: "呼吸/過敏",
    chiefComplaint: "慢性咳 2 年 + 冷空氣誘發",
    vignette: "53 歲男性，咳嗽 2 年治不好。熱開水緩解，冷空氣/風/花粉/冷氣/打掃加重。胸悶、早晨流鼻水、鼻涕倒流、有點喘。膝關節疼痛史。母 AR。無菸酒檳榔。",
    history: [
      "咳嗽 LQQOPERA：2 年慢性、冷空氣/花粉/冷氣/打掃誘發、熱開水緩解、夜咳、運動誘發",
      "Atopy 史：allergic rhinitis（AR，過敏性鼻炎）、eczema、食物過敏；家族母 AR",
      "PND（postnasal drip）、鼻涕倒流、早晨流鼻水、胸悶、喘",
      "內外敏藥住家：ACEi（angiotensin-converting enzyme inhibitor）使用、GERD 症狀、職業暴露",
      "排 TB 與肺癌：體重減輕、夜汗、血痰、家族肺癌、結核接觸史"
    ],
    pe: [
      "Vital signs + SpO2 + PEFR（peak expiratory flow rate）",
      "胸部 IPPA：wheezing、prolonged expiration、hyperresonance",
      "ENT：allergic shiner、nasal mucosa pale/boggy、turbinate hypertrophy、PND visible",
      "皮膚：eczema、dermographism",
      "Spirometry + bronchodilator reversibility（FEV1 改善 ≥ 12% 且 200 mL）"
    ],
    ddx: [
      "Adult-onset asthma（最可能）",
      "Cough-variant asthma",
      "Allergic rhinitis with PND-induced cough",
      "GERD-related cough",
      "ACE inhibitor / COPD（要排）"
    ],
    explanation: [
      "您的病最可能是 adult-onset asthma（成人氣喘），氣道慢性發炎且對刺激物過度反應",
      "冷空氣、花粉、冷氣、打掃揚起的塵蟎都會誘發氣管收縮，產生咳嗽、胸悶、喘",
      "母親有 AR 加上您自己的 PND → atopic 體質，AR 與 asthma 常共存稱 united airway disease",
      "不治療長期氣道發炎會造成 airway remodeling 與 fixed airflow obstruction，肺功能不可逆下降",
      "規則使用 ICS（inhaled corticosteroid）治療多可良好控制、恢復正常活動",
      ""
    ],
    treatment: [
      "Workup：spirometry + bronchodilator reversibility、methacholine challenge（疑 cough-variant）、FeNO、CXR、過敏原 IgE、PPI trial 排 GERD",
      "Asthma controller：ICS-formoterol（Symbicort）1 puff BID（GINA step 3 MART therapy）",
      "Reliever：as-needed ICS-formoterol 或 SABA salbutamol（Ventolin）2 puff prn",
      "AR：intranasal steroid mometasone 1 puff each nostril QD + second-generation antihistamine loratadine 10 mg PO QD",
      "疑 GERD：PPI omeprazole 20 mg PO QD × 8 週",
      "衛教：避免冷空氣戴口罩、防蟎寢具、戒二手菸、每年 influenza 與 pneumococcal 疫苗、示範 inhaler technique"
    ],
    redFlags: [
      "Severe attack：silent chest → ICU",
      "PEFR < 50% → severe"
    ]
  },

  {
    id: "114-58",
    source: "114",
    age: 45,
    sex: "M",
    department: "內",
    system: "感染",
    chiefComplaint: "大陸台商再發燒",
    vignette: "45 歲男性，大陸台商居住東莞。1 週前感冒 + 退燒。昨天再發燒擔心嚴重。2 個月回台 1 次。已婚 1 子。父母獨子。大學畢業性沉穩。在大陸 > 3 年。健康無慢性病。",
    history: [
      "發燒 timeline + 寒顫 + 退燒藥反應 + biphasic pattern（1 週前感冒退燒、今再發燒）",
      "旅遊接觸史：大陸東莞 > 3 年、2 個月回台 1 次、endemic 疾病（malaria、dengue、typhoid、TB）",
      "暴露：飲食（生水、海鮮 shellfish）、動物、性行為、蚊蟲叮咬、淡水接觸（leptospirosis）",
      "局部症狀：URI、GI（腹瀉血便）、UTI、皮膚 rash/eschar、淋巴結腫大、黃疸",
      "內外敏藥住家：疫苗史（HAV、typhoid、Japanese encephalitis）、malaria chemoprophylaxis、家人症狀"
    ],
    pe: [
      "Vital signs + 體溫 pattern（cyclic → malaria、step-ladder → typhoid）",
      "全身淋巴結 + hepatosplenomegaly、relative bradycardia（typhoid 典型）",
      "皮膚：rose spots（typhoid）、eschar（scrub typhus）、petechiae（dengue）、jaundice",
      "心肺 + 神經學 + 腹部 guarding",
      "Bedside：malaria thick/thin smear、dengue rapid test、tourniquet test、UA"
    ],
    ddx: [
      "Imported malaria（必排，去過 endemic）",
      "Typhoid / paratyphoid",
      "Dengue fever",
      "Hepatitis A/E",
      "Influenza / COVID 相關"
    ],
    explanation: [
      "您是 returning traveler with fever（境外移入發燒），必須以旅遊相關感染為優先思考",
      "東莞屬中國南方，常見 dengue（登革熱）、malaria（瘧疾）、typhoid（傷寒）、HAV/HEV、TB、influenza、COVID",
      "Malaria 潛伏期 1 週至 1 個月以上、可致命，falciparum 感染 24 小時內可進展 severe malaria",
      "Dengue 潛伏期 4-10 天，退燒後第 3-7 天為 critical phase，須注意 warning signs（出血、休克、腹痛）",
      "不及早診斷與治療，severe malaria 與 severe dengue 死亡率高；及時治療預後良好"
    ],
    treatment: [
      "Workup：CBC（thrombocytopenia 提示 dengue/malaria）、LFT、CMP、CRP、blood culture × 2、UA、CXR、malaria thick/thin smear ± rapid test、dengue NS1 + IgM、HAV/HEV serology、COVID + influenza PCR、stool culture",
      "排除 malaria 前不要貿然給 broad-spectrum antibiotics 以免混淆診斷",
      "Malaria（P. falciparum）：artemether-lumefantrine（Riamet）或 IV artesunate 2.4 mg/kg（severe）",
      "Typhoid：ceftriaxone 2 g IV QD × 7-14 天 或 azithromycin 1 g PO QD × 5 天",
      "Dengue：支持性治療、IV crystalloid titrate to HCT 與尿量、avoid NSAID/aspirin、監測 platelet 與 HCT",
      "衛教：疾管署通報法定傳染病、下次赴疫區接種 HAV/typhoid 疫苗、malaria chemoprophylaxis、防蚊措施、避免生水生食"
    ],
    redFlags: [
      "Cyclic fever + 黃疸 + splenomegaly → malaria smear",
      "Severe dengue：bleeding/hypotension → ICU"
    ]
  },

  {
    id: "114-59",
    source: "114",
    age: 0,
    sex: "F",
    department: "小",
    system: "小兒/感染",
    chiefComplaint: "28 天大女嬰高燒 + 嗜睡",
    vignette: "28 天女嬰排行第三。今天反覆高燒到 39.5、食慾差、不愛喝奶、強餵會吐、嗜睡。無咳/流鼻水/腹瀉。BW 4.5 kg、L 54、HC 37。出生時自然產順 3.5 kg 50 cm 34.5 cm。母奶。每天大便 3 次黃色軟便。",
    history: [
      "小兒「母生 3A+吃喝拉動睡」：母親產前檢查、GBS、生產方式（自然產順）、3.5 kg 50 cm 34.5 cm Apgar",
      "吃：母奶量、吸吮力、餵食時間；喝：水量；拉：大便 3 次黃色軟便、尿布量",
      "動：活力、四肢張力；睡：嗜睡時點、可否叫醒；發燒到 39.5 timeline、退燒反應",
      "新生兒紅旗：< 3 個月 + T ≥ 38°C 視為 sepsis until proven otherwise",
      "接觸：家人感冒、幼兒園兄姊、HSV 病灶、產時抗生素、群居接觸"
    ],
    pe: [
      "Vital signs + 活力評分 + 體溫不穩（hypothermia 也可能）",
      "前囟（bulging 提示 meningitis）、皮疹、umbilicus（omphalitis）、肝脾",
      "胸部 IPPA（呼吸費力、grunting、nasal flaring）、腹部 IPPA、神經學（tone、reflex、primitive reflex）",
      "Capillary refill、皮膚 mottling、灌流評估",
      "Bedside：POCT glucose、dextrostix、SpO2、full septic workup 採檢"
    ],
    ddx: [
      "Neonatal sepsis（必排，late-onset 7-28 d，常 GBS / E. coli）",
      "UTI",
      "Meningitis",
      "Pneumonia",
      "Viral infection（HSV、enterovirus）"
    ],
    explanation: [
      "28 天大嬰兒發燒到 39.5、餵食差、嗜睡是 neonatal sepsis（新生兒敗血症）的紅旗，必須立刻住院",
      "Late-onset neonatal sepsis（7-28 天）常見病原：GBS（group B Streptococcus）、E. coli、Listeria、HSV、enterovirus",
      "新生兒免疫不成熟、血腦障壁尚未發展完全，症狀非特異但可快速進展為 septic shock 與 meningitis",
      "不治療可能在數小時內惡化致命，或留下永久性神經後遺症（腦性麻痺、發展遲緩）",
      "及時 IV antibiotics 與 NICU 監護下死亡率大幅下降，多數寶寶可完全康復"
    ],
    treatment: [
      "Workup：CBC + diff、CRP、procalcitonin、blood culture、catheterized UA + urine culture、LP（CSF cell、protein、glucose、Gram、culture、HSV PCR、enterovirus PCR）、CXR、electrolyte、POCT glucose",
      "立即住院 + IV empiric antibiotics 不等培養結果",
      "Empiric coverage：ampicillin 50 mg/kg IV q6h + gentamicin 4 mg/kg IV q24h（或 cefotaxime 50 mg/kg IV q6-8h 若懷疑 meningitis）",
      "懷疑 HSV（皮疹、水泡、seizure、hepatitis）：加 acyclovir 20 mg/kg IV q8h",
      "支持：IV fluid、體溫管理、glucose 監測、NICU 監護呼吸與循環",
      "衛教家長：嚴重度與住院必要性、疫苗時程（2 個月起 DTaP-Hib-HBV-IPV）、手部衛生、訪客限制、鼓勵持續母奶"
    ],
    redFlags: [
      "< 3 m 發燒 → 全 septic workup + empiric abx",
      "Bulging fontanel + altered mental → meningitis"
    ]
  },

  {
    id: "114-60",
    source: "114",
    age: 58,
    sex: "M",
    department: "急",
    system: "外傷/神經",
    chiefComplaint: "頭部外傷 + LOC + 熊貓眼",
    vignette: "58 歲男性，今下午工地 2 樓樓梯跌落（半層樓）。短暫 LOC 約 30 秒。左臉淤青、左眼熊貓眼。頭很痛、頭暈、想吐。營建主管。菸 1 包/d、週 1 喝酒、常喝維士比。",
    history: [
      "AMPLE：Allergy、Medication（anticoagulant/antiplatelet）、Past history、Last meal、Event（2 樓樓梯墜落機轉）",
      "LOC（loss of consciousness）約 30 秒、anterograde/retrograde amnesia、抽搐、嘔吐、視力聽力",
      "Skull fracture 徵象：raccoon eyes、Battle sign、CSF rhinorrhea/otorrhea、hemotympanum",
      "內外敏藥住家：菸 1 包/d、週 1 飲酒 + 維士比（chronic alcoholism 使腦萎縮）、DM/HTN",
      "跌倒原因：syncope、cardiac event、酒醉、機械性 trip；ROS 胸痛心悸"
    ],
    pe: [
      "ATLS primary survey：ABCDE（airway with C-spine、breathing、circulation、disability、exposure）",
      "GCS（Glasgow Coma Scale）+ 瞳孔大小與反射（anisocoria 提示 herniation）",
      "Skull fracture signs：raccoon eyes、Battle sign（耳後瘀青）、hemotympanum、CSF 漏",
      "頸椎壓痛 + 完整神經學（motor、sensory、cerebellar、cranial nerve）",
      "Bedside：POCT glucose、alcohol level、ECG 排 cardiac syncope、FAST 排腹內出血"
    ],
    ddx: [
      "Basal skull fracture（raccoon eyes）",
      "Epidural hematoma（lucid interval）",
      "Subdural hematoma",
      "Cerebral contusion / DAI",
      "Concussion（mild TBI）"
    ],
    explanation: [
      "墜落 + LOC + raccoon eyes（熊貓眼）高度懷疑 basal skull fracture（顱底骨折）",
      "其他顱底骨折徵象還有 Battle sign、CSF rhinorrhea/otorrhea、hemotympanum，代表底部硬膜撕裂",
      "頭部外傷後最怕 epidural hematoma（硬膜外血腫），典型 lucid interval 後快速意識惡化，常因 middle meningeal artery 破裂",
      "長期飲酒者腦萎縮使橋靜脈易拉扯斷裂，subdural hematoma（硬膜下血腫）風險高",
      "GCS 若下降或瞳孔不等大代表 herniation，必須緊急 CT 與神經外科介入否則致命"
    ],
    treatment: [
      "Initial：ABCDE、C-collar 固定頸椎、GCS、瞳孔、四肢 motor、Glasgow 監測",
      "Workup：non-contrast head CT（首選）、C-spine CT、CBC、coagulation（PT/INR/aPTT）、glucose、alcohol level、type & screen",
      "Basal skull fracture 確診：禁止 nasogastric tube（改 orogastric）、禁止 nasal suction、床頭抬高 30°、prophylactic antibiotics 不常規給",
      "Epidural/subdural hematoma 大量或 midline shift > 5 mm：神經外科 emergency craniotomy 減壓",
      "ICP（intracranial pressure）管理：mannitol 0.25-1 g/kg IV 或 3% hypertonic saline；維持 SpO2 > 94%、SBP > 90 mmHg、避免低血糖",
      "衛教：戒酒、職場安全（安全帶、安全帽）、密切觀察 24-48 小時 red flag（嗜睡、持續嘔吐、瞳孔不等、抽搐）即返診"
    ],
    redFlags: [
      "GCS↓ 或 anisocoria → 急 CT + neurosurg",
      "Anticoagulant + head injury → 即 reverse"
    ]
  },

  {
    id: "114-61",
    source: "114",
    age: 57,
    sex: "M",
    department: "內",
    system: "心血管",
    chiefComplaint: "雙腳水腫 + 進行性呼吸困難",
    vignette: "57 歲男性，3 個月日漸加劇 dyspnea，2 週雙踝水腫求診。1 年前體力變差、PND。活動加劇、休息緩解。教務主任。無 HTN/DM。不抽菸偶酒。咖啡 2 杯/d。",
    history: [
      "Dyspnea LQQOPERA：發作時間、exertional dyspnea、orthopnea（幾顆枕頭）、PND（paroxysmal nocturnal dyspnea，陣發性夜間呼吸困難）",
      "水腫位置（雙踝 pitting edema）、晝夜變化、體重每日變化、夜尿次數",
      "伴隨胸痛、心悸、暈厥、運動耐受度（NYHA functional class）",
      "內外敏藥住個家：HTN/DM/CAD、瓣膜病史、cardiomyopathy 家族史、酒精攝取、服藥史",
      "老年 ADL 評估：日常活動耐受度、登階能力、近期跌倒、獨立生活狀況"
    ],
    pe: [
      "Vital signs（BP、HR、RR、SpO2）+ JVP（jugular venous pressure）升高評估",
      "心音 auscultation：S3 gallop、apical displacement、MR（mitral regurgitation）murmur",
      "肺部：雙下肺 crackles、pleural effusion 叩診變濁",
      "腹部：hepatomegaly、hepatojugular reflux、ascites；四肢 pitting edema 與 cyanosis",
      "Bedside workup：ECG、CXR、床邊 echo（EF、wall motion）、BNP / NT-proBNP"
    ],
    ddx: [
      "Heart failure with reduced EF（最可能）",
      "Heart failure with preserved EF",
      "Valvular heart disease",
      "Cardiomyopathy（dilated）",
      "Constrictive pericarditis"
    ],
    explanation: [
      "heart failure（心衰竭）是心臟無法輸出足夠血液滿足身體代謝需求的症候群，依 EF 分 HFrEF（≤40%）、HFmrEF、HFpEF",
      "您會喘是因為左心無力 → 血液鬱積在肺 → 肺水腫 → 氣體交換受損；平躺時 venous return 增加更喘即 orthopnea",
      "雙腳水腫則是右心功能或全身容量過多 → 靜脈壓升高 → 體液滲到組織間隙",
      "若不治療會進展為急性肺水腫、cardiogenic shock、致命性 arrhythmia，可能猝死",
      "接受 guideline-directed medical therapy（GDMT）四大支柱 5 年存活率約 50%，越早治療預後越好"
    ],
    treatment: [
      "Workup：ECG、CXR（cardiomegaly、Kerley B lines）、echo 評估 EF 與瓣膜、BNP / NT-proBNP、CBC、CMP、TSH、HbA1c、lipid、ferritin、疑 CAD 做 coronary angiography",
      "Acute decompensation：IV furosemide 40 mg、坐起、O2 維持 SpO2 > 90%、監測 urine output、必要時 NIV",
      "HFrEF GDMT 四大支柱：ARNI sacubitril/valsartan（Entresto）、β-blocker carvedilol 或 bisoprolol、MRA spironolactone 25 mg PO QD、SGLT2i dapagliflozin 10 mg PO QD",
      "症狀控制維持劑量：loop diuretic furosemide 20-80 mg PO QD-BID 依容量狀態調整",
      "共病處置：AF 做 rate/rhythm control 與 anticoagulation（CHA2DS2-VASc 評估）",
      "衛教：每日量體重（3 天 ≥ 2 kg 回診）、限鹽 < 2 g/d、限水 1.5-2 L/d、戒菸限酒、cardiac rehab、流感與肺炎鏈球菌疫苗"
    ],
    redFlags: [
      "Acute pulmonary edema → IV diuretic + O2 + NIV",
      "Cardiogenic shock → ICU + inotrope"
    ]
  },

  {
    id: "114-62",
    source: "114",
    age: 16,
    sex: "F",
    department: "小",
    system: "感染/皮膚",
    chiefComplaint: "16 歲女喉痛 + 紅疹",
    vignette: "16 歲女，求診前一天發燒、喉嚨痛、食慾差。今天紅疹癢，從脖子 → 身體 → 四肢。摸起來粗粗的（sandpaper）。無咳/流鼻水/嘔吐/腹瀉。哥哥 2 週前發燒 + 皮膚脫屑。",
    history: [
      "小兒母生3A+吃喝拉動睡：疫苗接種史、有無過敏、近期食慾（anorexia）、活動力、睡眠、排尿排便",
      "發燒病程：體溫高峰、持續時間、伴隨 sore throat、吞嚥痛、頭痛",
      "皮疹 LQQOPERA：發作部位（頸 → 軀幹 → 四肢）、性質（sandpaper rash 砂紙感）、blanchable、搔癢",
      "口腔與舌頭：strawberry tongue（草莓舌）、circumoral pallor、口周蒼白",
      "接觸史：哥哥 2 週前發燒 + desquamation（脫屑）符合 scarlet fever 病程；校內 GAS（group A Streptococcus，A 型鏈球菌）流行"
    ],
    pe: [
      "Vital signs（發燒、HR 偏高）+ 全身觀察",
      "ENT：扁桃腺紅腫滲出、pharyngeal petechiae、strawberry tongue、circumoral pallor",
      "皮膚：全身 sandpaper rash、皺褶處 Pastia lines、blanchable erythroderma",
      "頸前 anterior cervical lymphadenopathy；腹部排 splenomegaly（鑑別 infectious mononucleosis）",
      "Bedside workup：throat rapid antigen detection test（RADT）+ throat culture"
    ],
    ddx: [
      "Scarlet fever（GAS）",
      "Streptococcal pharyngitis without rash",
      "Infectious mononucleosis（EBV）",
      "Kawasaki disease（年齡較小）",
      "Viral exanthem / 藥疹"
    ],
    explanation: [
      "scarlet fever（猩紅熱）是 GAS 感染後分泌 erythrogenic toxin 引起的全身性紅疹併咽炎",
      "您喉嚨痛是細菌在咽部繁殖造成發炎；紅疹則是毒素進入血液 → 皮膚小血管擴張 → 砂紙樣疹",
      "紅疹典型從頸部 → 軀幹 → 四肢，皺褶處 Pastia lines；恢復期手腳會脫屑（與哥哥病程吻合）",
      "未治療併發症包含 rheumatic fever（風濕熱）、APSGN（acute post-streptococcal glomerulonephritis，鏈球菌後腎炎）、peritonsillar abscess",
      "完整 10 天抗生素療程可預防 rheumatic fever 並大幅縮短病程與傳染期"
    ],
    treatment: [
      "Workup：RADT + throat culture（gold standard）、CBC、CRP、UA 追蹤 APSGN",
      "First-line：amoxicillin 50 mg/kg/d（max 1 g）PO QD × 10 天，或 penicillin V 250-500 mg PO QID × 10 天",
      "Penicillin allergy：cephalexin 或 clindamycin，或 azithromycin 12 mg/kg PO QD × 5 天",
      "症狀處置：acetaminophen（Tylenol）10-15 mg/kg PO q6h prn fever、多喝水、軟質飲食",
      "傳染管控：抗生素治療 24 小時後才返校、家中物品分開清潔消毒、家庭接觸者有症狀即就醫",
      "追蹤：完成 10 天療程預防 rheumatic fever；若出現茶色尿、臉部水腫 1-2 週內回診排 APSGN"
    ],
    redFlags: [
      "併發症：rheumatic fever（2-3 wk）、APSGN（1-2 wk）→ abx 完整 10 d",
      "Toxic shock → ICU"
    ]
  },

  {
    id: "114-63",
    source: "114",
    age: 35,
    sex: "M",
    department: "外",
    system: "腸胃",
    chiefComplaint: "腹痛 2 天加劇",
    vignette: "35 歲男老師，肚痛 2 天加劇。昨早胃悶不適 + 噁心無吐。整天無胃口。昨晚整個肚子悶痛，今晨走路更痛、車震動更痛。無 PHx、無菸酒。父 HTN。",
    history: [
      "腹痛 LQQOPERA：起點（periumbilical / epigastric）→ 移轉至 RLQ、性質（悶痛 → 銳痛）、震動 / 走路加劇（peritoneal sign）",
      "伴隨 anorexia、噁心、嘔吐、發燒、寒顫",
      "排氣排便狀態、bowel habit 改變、近期飲食內容、外傷或手術史",
      "內外敏藥住個家：無慢性病、不菸酒、家族 HTN；排除 PUD（peptic ulcer disease）與腎結石史",
      "Red flags：melena、hematochezia、jaundice、血尿、體重下降"
    ],
    pe: [
      "Vital signs（體溫、HR、BP）評估 sepsis",
      "腹部 IPPA：視診腹脹、聽診 bowel sound 減弱、叩診鼓音或壓痛、觸診 rebounding / guarding / rigidity",
      "特殊徵候：McBurney point tenderness、Rovsing sign、Psoas sign、Obturator sign",
      "DRE（digital rectal exam）評估 pelvic tenderness；男性睪丸檢查排 torsion",
      "Bedside workup：CBC（leukocytosis with left shift）、UA、abdominal ultrasound 或 contrast CT"
    ],
    ddx: [
      "Acute appendicitis（最可能）",
      "Mesenteric adenitis",
      "Right ureteral stone",
      "Meckel's diverticulitis",
      "Perforated peptic ulcer"
    ],
    explanation: [
      "acute appendicitis（急性闌尾炎）是 appendix 因 fecalith 或 lymphoid hyperplasia 阻塞 → 腔內壓力升高 → 細菌增生 → 缺血 → 可能穿孔",
      "您一開始肚臍周圍悶痛是 visceral pain；數小時後轉移至 RLQ McBurney point 是發炎波及 parietal peritoneum 的 somatic pain",
      "走路或車震動使疼痛加劇 = peritoneal sign，代表腹膜已受刺激",
      "若未治療 24-72 小時可能 perforation → peritonitis、abscess、sepsis，死亡率與住院時間顯著上升",
      "及時 laparoscopic appendectomy 預後極佳，術後短期即可恢復日常活動"
    ],
    treatment: [
      "Workup：CBC、CRP、UA 排結石、abdominal ultrasound；成人首選 contrast CT（appendix > 6 mm + periappendiceal fat stranding）",
      "風險分層：Alvarado 或 AIR score 評估 pre-test probability，協助決定影像或直接手術",
      "Acute management：NPO、IV fluid resuscitation、analgesia（IV fentanyl 或 morphine）、antiemetic（metoclopramide）",
      "Pre-op antibiotic：cefoxitin 2 g IV 或 ceftriaxone 1-2 g IV + metronidazole 500 mg IV",
      "Definitive：laparoscopic appendectomy 為首選；perforation / abscess 先 percutaneous drainage 後 interval appendectomy",
      "衛教：術後早期下床、傷口照護、2-4 週避免提重物、發燒 / 傷口紅腫 / 腹痛持續即回診"
    ],
    redFlags: [
      "全腹 rigidity + 發燒 → 排穿孔",
      "WBC↑ + free air → 急開"
    ]
  },

  {
    id: "RM-01",
    source: "remnote",
    age: 65,
    sex: "M",
    department: "內",
    system: "神經",
    chiefComplaint: "突發左側肢體無力 + 構音障礙",
    vignette: "65 歲男性，HTN/DM 病史。1 小時前看電視時突然左手腳無力、口齒不清，家人緊急送醫。",
    history: [
      "Onset：last known well（LKW）時間，精準到分鐘 — 決定 IV tPA（< 4.5 hr）與 thrombectomy（< 24 hr）窗口",
      "FAST 症狀：face droop、arm weakness、speech slurred、time of onset",
      "伴隨 headache、LOC（loss of consciousness）、抽搐 → 出血或 stroke mimic 線索",
      "內外敏藥住個家：HTN、DM、AF（atrial fibrillation）、smoking、過去 TIA / stroke 病史",
      "老年 ADL + 用藥：anticoagulant（warfarin、DOAC）、antiplatelet、近期手術或出血史 — 影響 tPA 適應症"
    ],
    pe: [
      "Vital signs + 雙手 BP（tPA 前需 < 185/110 mmHg）",
      "NIHSS（National Institutes of Health Stroke Scale）評分：眼球、顏面、肢體力量、語言、忽略",
      "心律聽診（AF 不規則）+ carotid bruit",
      "神經學：cranial nerve、motor、sensory、cerebellar、dysarthria、aphasia",
      "Bedside workup：fingerstick glucose（排 hypoglycemia mimic）、ECG、STAT non-contrast head CT"
    ],
    ddx: [
      "Acute ischemic stroke（最可能）",
      "Hemorrhagic stroke（必排）",
      "Hypoglycemia（stroke mimic）",
      "Postictal Todd's paralysis",
      "Complex migraine"
    ],
    explanation: [
      "acute ischemic stroke（急性缺血性中風）是腦血管阻塞造成該區腦組織缺血缺氧",
      "您 HTN + DM 長期加速 atherosclerosis 與 small vessel disease，是 stroke 主要危險因子",
      "左側肢體無力 + 構音障礙提示右側 MCA（middle cerebral artery）territory 病灶",
      "若不治療腦細胞每分鐘約死亡 190 萬顆（time is brain），延誤會留下永久性失能",
      "黃金治療時間：IV tPA < 4.5 hr、thrombectomy < 6-24 hr（large vessel occlusion），越早再灌流預後越好"
    ],
    treatment: [
      "Stroke code activation：door-to-CT < 25 分、door-to-needle < 60 分",
      "Workup：non-contrast head CT（排 hemorrhage）、CTA / CT perfusion、ECG、CBC、coagulation、glucose、electrolyte、troponin",
      "排除 stroke mimic：fingerstick glucose → hypoglycemia 立即給 D50W 50 mL IV",
      "符合條件：IV alteplase（tPA）0.9 mg/kg（max 90 mg），10% bolus + 90% over 1 hr；近期 tenecteplase 也列入建議",
      "Large vessel occlusion（ICA、M1）：mechanical thrombectomy < 24 小時 window",
      "二級預防：aspirin 100 mg PO QD 或 clopidogrel、atorvastatin 40-80 mg PO QD、BP < 130/80、HbA1c < 7%、戒菸、PT/OT/ST 復健"
    ],
    redFlags: [
      "Onset < 4.5 hr → tPA 評估",
      "Large vessel occlusion → thrombectomy < 24 hr"
    ]
  },

  {
    id: "RM-02",
    source: "remnote",
    age: 60,
    sex: "M",
    department: "急",
    system: "心血管",
    chiefComplaint: "突發胸痛 + 冒冷汗 30 分鐘",
    vignette: "60 歲男性，HTN + smoker。30 分鐘前運動後突發前胸壓榨痛 + 冒冷汗 + 噁心，痛放射至左肩下巴。",
    history: [
      "胸痛 LQQOPERA：性質（壓榨 vs 撕裂）、位置、放射（左肩 / 下巴 / 手臂）、持續時間（> 20 min）、誘發因子（運動後）",
      "伴隨 diaphoresis（冷汗）、呼吸困難、噁心、暈厥",
      "內外敏藥住個家：HTN、DM、dyslipidemia、smoking、家族早發 CAD（coronary artery disease）",
      "用藥：PDE5 inhibitor（viagra，為 nitrate 禁忌）、antiplatelet、anticoagulant",
      "鑑別線索：aortic dissection（撕裂背痛）、pulmonary embolism（pleuritic）、pericarditis（前傾減輕）"
    ],
    pe: [
      "Vital signs（雙手 BP 差 > 20 mmHg 疑 dissection）+ SpO2",
      "心音：S4 gallop、new murmur（MR 或 VSR 併發症）、pericardial rub",
      "肺部：basal crackles（HF）、下肢水腫",
      "四肢 pulses 對稱性、皮膚濕冷、neck vein distension",
      "Bedside workup：12-lead ECG within 10 分鐘、troponin、CXR、床邊 echo 看 wall motion"
    ],
    ddx: [
      "STEMI（最可能）",
      "NSTEMI / unstable angina",
      "Aortic dissection",
      "Pulmonary embolism",
      "Pericarditis / esophageal spasm"
    ],
    explanation: [
      "STEMI（ST-elevation myocardial infarction，ST 段上升型心肌梗塞）是冠狀動脈完全阻塞 → 該供血區心肌持續性缺血壞死",
      "典型症狀：> 20 分鐘前胸壓榨痛、放射至左肩 / 下巴 / 手臂、冒冷汗、噁心嘔吐",
      "HTN + smoker + 運動誘發 → 動脈粥狀硬化 plaque rupture + 血栓形成 → 完全阻塞",
      "Time is muscle — 每延遲 30 分鐘 reperfusion，死亡率上升 7.5%；可能併發 cardiogenic shock、致命性 arrhythmia、papillary muscle rupture",
      "STEMI 30 天死亡率 5-10%，及時 primary PCI 可大幅降低死亡率與心衰風險"
    ],
    treatment: [
      "立即 ECG（10 分鐘內）：≥ 2 contiguous leads ST elevation；抽 troponin、CBC、CMP、coagulation、CXR、type & screen",
      "Antiplatelet + anticoagulant：aspirin 300 mg PO chewable + ticagrelor 180 mg PO load（或 clopidogrel 600 mg）+ heparin 或 enoxaparin",
      "症狀處置：morphine 2-4 mg IV prn、nitrate SL（避免於 RV infarct 與 PDE5i 使用者）、O2 only if SpO2 < 90%",
      "Reperfusion（首選）：primary PCI door-to-balloon < 90 min；無 PCI 能力醫院 fibrinolysis door-to-needle < 30 min 後轉院",
      "Adjunctive：β-blocker metoprolol、ACEi enalapril、high-intensity statin atorvastatin 80 mg PO QD、MRA（若 EF < 40%）",
      "二級預防：DAPT × 12 個月、cardiac rehab、戒菸、BP < 130/80、LDL < 70 mg/dL、規律運動與地中海飲食"
    ],
    redFlags: [
      "STEMI → door-to-PCI < 90 min",
      "Cardiogenic shock → IABP / Impella"
    ]
  },

  {
    id: "RM-03",
    source: "remnote",
    age: 70,
    sex: "M",
    department: "內",
    system: "呼吸",
    chiefComplaint: "慢性咳嗽痰 + 漸進喘",
    vignette: "70 歲男性，菸 50 包年。慢性 productive cough > 3 個月/年 連續 2 年以上。最近爬樓梯就喘、AECOPD 急診 2 次。",
    history: [
      "Smoking history：pack-year（50 包年）+ 目前是否戒菸",
      "症狀 LQQOPERA：chronic productive cough、痰量與顏色、wheeze、dyspnea on exertion（mMRC dyspnea scale）",
      "AECOPD（acute exacerbation of COPD）頻率、急診與住院次數、近一年 exacerbation 史",
      "內外敏藥住個家：職業或環境粉塵暴露、生質燃料、二手菸、共病 CAD / HF / 肺癌",
      "老年 ADL：登階能力、日常活動限制、跌倒風險、居家氧氣使用"
    ],
    pe: [
      "Vital signs + SpO2 + RR（呼吸費力程度）",
      "胸廓：barrel chest、accessory muscle 使用、pursed-lip breathing、tripod position",
      "肺部 auscultation：wheezing、prolonged expiration、distant breath sound",
      "Cor pulmonale 徵候：JVP 升高、hepatomegaly、下肢水腫、parasternal heave",
      "Bedside workup：SpO2、peak flow、ABG（arterial blood gas）、spirometry 安排"
    ],
    ddx: [
      "COPD（GOLD stage assessment）",
      "Asthma-COPD overlap",
      "Bronchiectasis",
      "Lung cancer（菸史）",
      "Heart failure"
    ],
    explanation: [
      "COPD（chronic obstructive pulmonary disease，慢性阻塞性肺病）是菸長期刺激造成 chronic bronchitis + emphysema → fixed airflow limitation",
      "病理上氣道慢性發炎 + 黏液過多 + alveolar 破壞 → 氣體交換受損與 air trapping",
      "您爬樓梯就喘是因為肺彈性喪失 + 氣道阻塞，吐氣時空氣困在肺泡（hyperinflation）",
      "AECOPD 通常由病毒或細菌感染誘發，每次發作都加速肺功能下降與住院風險",
      "5 年存活率與 GOLD stage、BODE index 相關；戒菸是唯一能延緩肺功能下降的根本措施"
    ],
    treatment: [
      "Workup：post-bronchodilator spirometry（FEV1/FVC < 0.7 確診）、CXR、ABG、α1-antitrypsin（早發）、CBC（eosinophil 預測 ICS 反應）",
      "GOLD ABE 分組 maintenance：group A bronchodilator；group B LABA + LAMA；group E（exacerbator）LABA + LAMA ± ICS",
      "常用組合：tiotropium（Spiriva）+ salmeterol/fluticasone（Seretide）；triple therapy 如 Trelegy",
      "AECOPD：SABA + SAMA inhalation、prednisolone 40 mg PO × 5 天、antibiotic（azithromycin 或 amoxicillin-clavulanate × 5-7 天）、controlled O2 target SpO2 88-92%、severe 用 NIV（BiPAP）",
      "戒菸：varenicline、bupropion、nicotine replacement therapy + 行為治療",
      "衛教：流感與肺炎鏈球菌疫苗、pulmonary rehabilitation、營養、long-term O2（PaO2 ≤ 55 mmHg 或 SpO2 ≤ 88%）、評估 lung volume reduction / 移植"
    ],
    redFlags: [
      "AECOPD：increased dyspnea/sputum/purulence → abx + steroid + bronchodilator",
      "PaCO2↑ + 意識改變 → NIV / 插管"
    ]
  },

  {
    id: "RM-04",
    source: "remnote",
    age: 28,
    sex: "F",
    department: "內",
    system: "風濕",
    chiefComplaint: "蝶形紅斑 + 關節痛 + 疲倦",
    vignette: "28 歲女性，幾個月以來臉頰蝶形紅斑（曬太陽更紅）+ 多關節對稱疼痛 + 疲倦 + 口腔潰瘍。月經規則。",
    history: [
      "婦產科必問「性孕經分片」：LMP、月經規則度、避孕、GPA — SLE（systemic lupus erythematosus）懷孕需藥物調整",
      "SLE 11 criteria 口訣 SOAP-BRAIN-MD：serositis、oral ulcer、arthritis、photosensitivity、blood、renal、ANA、immunologic、neuro、malar rash、discoid",
      "皮膚：malar rash（蝶形紅斑）、discoid、photosensitivity、oral/nasal ulcer、alopecia",
      "關節：晨僵、對稱性、小關節 polyarthritis；全身症狀 fever、weight loss、Raynaud phenomenon",
      "系統性回顧：renal（水腫、泡泡尿）、neuro（seizure、psychosis）、hematologic（貧血、瘀青）"
    ],
    pe: [
      "Vital signs + 皮膚：malar rash、discoid lesion、oral ulcer、alopecia、Raynaud",
      "關節 ROM + 對稱性 + 腫痛（non-erosive arthritis）",
      "心肺：pericardial rub、pleural rub（serositis）、crackles",
      "腎臟 + 神經學檢查（cognitive、cranial nerve、motor）",
      "Bedside workup：UA + urine sediment、ANA、anti-dsDNA、C3/C4、CBC"
    ],
    ddx: [
      "Systemic lupus erythematosus（SLE）",
      "Mixed connective tissue disease",
      "Rheumatoid arthritis",
      "Drug-induced lupus",
      "Dermatomyositis"
    ],
    explanation: [
      "SLE（全身性紅斑狼瘡）是多系統自體免疫疾病，B/T 細胞失調產生 autoantibody + immune complex 沉積",
      "好發 育齡女性（15-45 歲），女男比約 9:1，可能與雌激素與遺傳相關",
      "您臉上蝶形紅斑、曬太陽更紅、口腔潰瘍、關節痛 — 這些是典型的 malar rash、photosensitivity、arthritis",
      "若不治療會進展到 lupus nephritis（狼瘡腎炎）、CNS lupus、pulmonary hemorrhage 等致命併發症",
      "依 EULAR/ACR 2019 criteria 早期診斷並治療，5 年存活率 > 95%；規則追蹤控制器官損傷是關鍵"
    ],
    treatment: [
      "Workup：ANA、anti-dsDNA、anti-Sm、complement C3/C4、CBC、UA + UPCR（urine protein/creatinine ratio）、creatinine、LFT、antiphospholipid antibodies、Coombs test",
      "Baseline：lupus nephritis screen、心血管風險、骨密度、TB/HBV/HCV screen（為 immunosuppressant 做準備）、疫苗接種",
      "Mild（皮膚 + 關節）：hydroxychloroquine（Plaquenil）200-400 mg PO QD（所有 SLE 皆建議）+ NSAID 或短期低劑量 prednisolone",
      "Moderate-severe / lupus nephritis：prednisolone 0.5-1 mg/kg/d + immunosuppressant（mycophenolate、azathioprine、cyclophosphamide、belimumab、anifrolumab）",
      "防曬 SPF ≥ 50、physical block、戒菸、避免日曬尖峰",
      "衛教：規律服藥、計畫懷孕需調整藥物（避 MMF、cyclophosphamide）、年度眼科檢查（hydroxychloroquine retinopathy）、疫苗（流感、肺炎鏈球菌、HPV）"
    ],
    redFlags: [
      "Lupus nephritis → 早期 biopsy",
      "Lupus cerebritis / pulmonary hemorrhage → ICU"
    ]
  },

  {
    id: "RM-05",
    source: "remnote",
    age: 50,
    sex: "F",
    department: "內",
    system: "風濕",
    chiefComplaint: "雙手晨僵 + 對稱多關節痛 6 個月",
    vignette: "50 歲女性，6 個月以來雙手 MCP/PIP 對稱腫痛 + 晨僵 > 1 hr，影響扣鈕扣。",
    history: [
      "晨僵時間（> 30 min 為發炎性；> 1 hr 提示 RA rheumatoid arthritis）與每日變化",
      "受影響關節：對稱、小關節（MCP、PIP、wrist）、無 DIP 侵犯（與 OA 不同）",
      "Extra-articular：眼乾口乾（Sjögren overlap）、皮下 nodule、ILD（interstitial lung disease）、心血管症狀",
      "家族 RA / 風濕病史；近期感染、血便（IBD 關節炎）、乾癬病灶",
      "功能影響：扣鈕扣、握物、晨間功能（日常活動影響程度）"
    ],
    pe: [
      "Vital signs + 全身關節 ROM 與腫痛評估",
      "MCP / PIP / wrist 對稱腫痛；變形 swan neck、boutonnière、ulnar deviation",
      "Squeeze test（MCP/MTP）、皮下 rheumatoid nodule（伸肌面）",
      "Extra-articular：scleritis、肺部 crackles、心音；頸椎不穩評估",
      "Bedside workup：RF、anti-CCP、ESR、CRP、X-ray hand & feet"
    ],
    ddx: [
      "Rheumatoid arthritis（最可能）",
      "Psoriatic arthritis",
      "SLE",
      "Polymyalgia rheumatica（年長）",
      "Viral arthritis（parvo B19）"
    ],
    explanation: [
      "RA（rheumatoid arthritis，類風濕性關節炎）是慢性對稱性多關節炎，autoimmune attack synovium → pannus 形成 → 軟骨與骨破壞",
      "典型 MCP / PIP / wrist 對稱腫痛、晨僵 > 1 小時、無 DIP（與 OA 骨關節炎不同）",
      "可有 extra-articular：rheumatoid nodule、ILD、scleritis、Felty syndrome、心血管風險升高",
      "Window of opportunity：發病 3-6 個月內早期治療可顯著改善長期預後與關節保留",
      "未控制會進展為 joint deformity（ulnar deviation、swan neck、boutonnière）與日常失能"
    ],
    treatment: [
      "Workup：RF、anti-CCP（specificity 較高）、ESR、CRP、CBC、LFT、creatinine、HBV/HCV/TB screen（biologics 準備）、hand/feet X-ray + MSK ultrasound",
      "診斷：ACR/EULAR 2010 classification criteria + DAS28 評估 disease activity",
      "First-line DMARD：methotrexate（MTX）7.5-25 mg PO once weekly + folic acid 5 mg/wk",
      "MTX 無效或不耐：加 hydroxychloroquine、sulfasalazine（triple therapy），或 biologics（TNF-α inhibitor adalimumab、etanercept）/ JAK inhibitor（tofacitinib）",
      "Symptomatic：NSAID celecoxib 200 mg PO BID、短期低劑量 prednisolone 5-10 mg PO QD bridge",
      "衛教：規律運動 + 物理治療、戒菸（加重 RA 並降低療效）、心血管風險管理、骨質疏鬆預防、避免活疫苗於 biologics 期間"
    ],
    redFlags: [
      "環樞椎不穩 + 神經症狀 → 急 MRI",
      "Felty syndrome（RA + splenomegaly + neutropenia）→ 感染風險"
    ]
  },

  {
    id: "RM-06",
    source: "remnote",
    age: 35,
    sex: "F",
    department: "內",
    system: "神經",
    chiefComplaint: "用力後眼皮下垂 + 複視 + 疲勞",
    vignette: "35 歲女性，數月來下午眼皮下垂、複視，活動後加劇休息緩解，最近吞嚥也偶有困難。",
    history: [
      "Fatigability 典型模式：下午加劇、休息緩解（症狀隨 muscle use 惡化）",
      "眼部：ptosis（眼皮下垂）、diplopia（複視）；bulbar：構音、咀嚼、吞嚥困難",
      "四肢近端無力、爬樓梯 / 舉手困難；呼吸症狀 → myasthenic crisis（肌無力危象）警訊",
      "用藥史：aminoglycoside、fluoroquinolone、β-blocker、magnesium — 可誘發或加重症狀",
      "共病：thymoma（胸腺瘤）篩檢、thyroid disease、其他自體免疫疾病家族史"
    ],
    pe: [
      "Vital signs + 呼吸肌力（NIF、VC）評估 crisis 風險",
      "Ice-pack test（ice 2 分鐘後 ptosis 改善）、sustained upward gaze 誘發眼瞼下垂",
      "Repeated muscle testing 誘發 fatigability（重複蹲下、舉手）",
      "Cranial nerve、motor、reflex（normal DTR 是 MG myasthenia gravis 特徵）",
      "Bedside workup：bedside spirometry、pulse ox、規劃 anti-AChR Ab、chest CT 排 thymoma"
    ],
    ddx: [
      "Myasthenia gravis（最可能）",
      "Lambert-Eaton（活動後加強）",
      "Botulism",
      "Multiple sclerosis",
      "Mitochondrial myopathy"
    ],
    explanation: [
      "myasthenia gravis（重症肌無力）是 acetylcholine receptor（乙醯膽鹼受體）被自體抗體攻擊的自體免疫疾病",
      "神經訊號無法有效傳到肌肉，所以肌肉用越久越無力、休息可恢復（fatigability）",
      "典型先影響眼皮與眼外肌 → ptosis 與 diplopia；再進展至 bulbar muscle → 吞嚥困難、講話含糊",
      "嚴重時進展為 myasthenic crisis（肌無力危象），呼吸肌無力需插管",
      "規則治療 + 避免誘發藥物與感染下，大多可長期穩定控制"
    ],
    treatment: [
      "Workup：anti-AChR Ab（必要時 anti-MuSK Ab）、ice pack test、repetitive nerve stimulation、single-fiber EMG",
      "Chest CT 排除 thymoma（約 10-15% MG 患者合併）",
      "症狀治療：pyridostigmine（Mestinon）30-60 mg PO TID-QID",
      "免疫治療：prednisolone 起始 low dose 逐步調升 + steroid-sparing agent（azathioprine、mycophenolate）",
      "Myasthenic crisis：IVIG 2 g/kg 分 5 天 或 plasmapheresis、必要時插管通氣；thymectomy 於 thymoma 或年輕 generalized MG",
      "衛教：避免 aminoglycoside、fluoroquinolone、β-blocker、magnesium 等惡化藥物；發燒 / 感染 / 呼吸急促立即就醫"
    ],
    redFlags: [
      "Myasthenic crisis（呼吸衰竭 / 吞嚥）→ ICU + IVIg / plasmapheresis",
      "Cholinergic crisis（abx 後）→ 停藥"
    ]
  },

  {
    id: "RM-07",
    source: "remnote",
    age: 50,
    sex: "M",
    department: "內",
    system: "風濕",
    chiefComplaint: "右大腳趾突發紅腫熱痛",
    vignette: "50 歲男性，凌晨突發右第一趾根紅腫熱痛無法觸碰。昨晚海鮮 + 啤酒。HTN 服 thiazide。",
    history: [
      "誘發因子：飲食（高 purine 內臟 / 海鮮）、酒精（啤酒）、thiazide 利尿劑、外傷、脫水",
      "發作 LQQOPERA：凌晨突發、MTP1（metatarsophalangeal joint 1，大腳趾根）podagra 紅腫熱痛、無法觸碰",
      "既往痛風發作次數、tophi（痛風石）、uric acid stones（尿酸腎結石）病史",
      "內外敏藥住個家：HTN（服 thiazide）、DM、CKD、metabolic syndrome、家族痛風",
      "排除 septic arthritis：發燒、寒顫、近期皮膚感染或外傷"
    ],
    pe: [
      "Vital signs（體溫是否發燒 → 鑑別 septic arthritis）",
      "MTP1 紅腫熱痛、ROM 受限、皮膚緊繃發亮",
      "其他關節（ankle、knee、wrist）、皮下 tophi（耳廓、手指、肘伸側）",
      "全身檢查 metabolic syndrome 跡象（BMI、waist、BP）",
      "Bedside workup：joint aspiration → polarized microscopy（negatively birefringent needle-shaped MSU crystal）+ culture 排 septic"
    ],
    ddx: [
      "Acute gouty arthritis（典型 podagra）",
      "Septic arthritis",
      "Pseudogout",
      "Cellulitis",
      "Acute trauma"
    ],
    explanation: [
      "gout（痛風）是血中 uric acid（尿酸）過高 → monosodium urate crystal 沉積在關節 → 引起急性發炎",
      "典型發作在大腳趾根（podagra），紅腫熱痛到不能碰床單",
      "誘因：海鮮、內臟、啤酒、thiazide 利尿劑、脫水 — 您昨晚海鮮 + 啤酒是典型誘發",
      "急性發作通常 7-10 天自然緩解，但反覆發作會侵蝕關節",
      "長期高尿酸會形成 tophi、urate nephropathy（尿酸腎病）、uric acid stones"
    ],
    treatment: [
      "Workup：serum uric acid（急性期可能正常）、CBC、CRP、creatinine、必要時 joint aspiration → polarized microscopy 看 negatively birefringent crystal",
      "急性期首選：NSAID（indomethacin 50 mg PO TID 或 naproxen 500 mg PO BID）或 colchicine 1.2 mg PO 起 + 0.6 mg PO 1 hr 後",
      "禁忌 NSAID / colchicine（CKD）：prednisolone 30-40 mg PO QD × 5-7 天 或關節內 steroid 注射",
      "緩解後 2-4 週開始 urate-lowering therapy：allopurinol（Zyloric）100 mg PO QD 起，每 2-4 週上調，目標 serum UA < 6 mg/dL（tophi < 5）",
      "ULT 起始期加 colchicine 0.6 mg PO QD-BID × 3-6 個月預防 flare",
      "衛教：戒啤酒、少高 purine（內臟、海鮮）、多喝水 > 2 L/d、體重控制、停 thiazide 改 losartan 等替代降壓藥"
    ],
    redFlags: [
      "發燒 + 急性紅腫 → 排 septic",
      "Tophi 多 + uric acid 高 → 長期 ULT 適應症"
    ]
  },

  {
    id: "RM-08",
    source: "remnote",
    age: 55,
    sex: "F",
    department: "內",
    system: "內分泌",
    chiefComplaint: "怕冷 + 體重增加 + 便秘 + 月經量多",
    vignette: "55 歲女性，半年來怕冷、體重增 5 kg、便秘、月經量增、容易疲倦、聲音低沉。",
    history: [
      "症狀 LQQOPERA：怕冷、體重增加、便秘、皮膚乾、疲倦、聲音低沉的起始時間與惡化速度",
      "月經量多 + 經期變化、停經狀況、更年期相關症狀（本例 55 歲 F 需問）",
      "誘因與病因：Hashimoto thyroiditis（橋本氏甲狀腺炎）家族史、甲狀腺手術/I-131 治療史",
      "藥物史：amiodarone（Cordarone）、lithium、interferon、近期顯影劑",
      "伴隨症狀：頸部腫脹、吞嚥困難、心搏過緩、下肢水腫、憂鬱、記憶變差"
    ],
    pe: [
      "Vital signs（注意 HR↓、BP↓、窄 pulse pressure、體溫↓、weight）",
      "甲狀腺視診觸診：size、質地、結節、nontender goiter（Hashimoto 特徵）",
      "皮膚毛髮：皮膚乾冷、myxedema（黏液水腫）、眉毛外側脫落、非凹陷性水腫",
      "神經學：delayed DTR（深肌腱反射）relaxation phase、反應變慢、cognition",
      "Bedside workup：TSH、free T4、anti-TPO Ab、ECG 看 bradycardia / low voltage"
    ],
    ddx: [
      "Primary hypothyroidism（Hashimoto 最常見）",
      "Subclinical hypothyroidism",
      "Drug-induced",
      "Secondary（pituitary）",
      "Iodine deficiency"
    ],
    explanation: [
      "hypothyroidism（甲狀腺功能低下症）是甲狀腺製造的荷爾蒙不夠，全身代謝整個變慢",
      "台灣最常見原因是 Hashimoto thyroiditis，自體抗體慢慢破壞甲狀腺造成功能低下",
      "代謝慢就會怕冷、體重增加、便秘、疲倦、皮膚乾、聲音變低沉；月經量多是因雌激素代謝減慢",
      "不治療嚴重時會進展成 myxedema coma（黏液水腫昏迷），合併低體溫、意識不清，死亡率高",
      "規律服藥 + 定期追蹤 TSH 預後非常好，多數病人需終身補充甲狀腺素"
    ],
    treatment: [
      "Workup：TSH（升高）、free T4（下降）、anti-TPO Ab、anti-Tg Ab 確認病因",
      "合併評估：lipid panel（常併高膽固醇）、CBC（可能 macrocytic anemia）、ECG",
      "首選：levothyroxine（Eltroxin / Synthroid）1.6 μg/kg/day PO QD 空腹服用",
      "年長或心臟病者：自 25-50 μg/day 起始緩慢調整，避免誘發 angina / arrhythmia",
      "追蹤：起始或調整劑量後 6-8 週 recheck TSH，目標 0.5-2.5 mIU/L",
      "衛教：固定空腹服、與鈣/鐵/制酸劑間隔 4 hr、終身服藥、孕期加量 30%"
    ],
    redFlags: [
      "Myxedema coma：意識↓ + 低體溫 + 低鈉 → ICU + IV LT4",
      "Recent MI → 慎啟動 LT4"
    ]
  },

  {
    id: "RM-09",
    source: "remnote",
    age: 40,
    sex: "M",
    department: "急",
    system: "內分泌",
    chiefComplaint: "DM 患者多飲多尿 + 嘔吐 + 腹痛",
    vignette: "40 歲男性，T1DM 自停 insulin 2 天。多飲多尿、噁心嘔吐、上腹痛。意識略遲鈍。Kussmaul breathing。",
    history: [
      "DM（diabetes mellitus，糖尿病）type、病程、insulin 種類劑量與近日 compliance（本例自停 2 天）",
      "症狀 timeline：polyuria/polydipsia/polyphagia（3P）→ 噁心嘔吐 → 腹痛 → 意識變化",
      "誘因：感染（UTI、pneumonia）、停藥、AMI、stroke、pancreatitis、steroid",
      "內外敏藥：過敏史、目前用藥、酒精、毒品",
      "排除 HHS（hyperosmolar hyperglycemic state）：年長 T2DM + 嚴重高血糖但無 ketosis"
    ],
    pe: [
      "Vital signs（HR↑、BP↓、tachypnea、Kussmaul breathing）+ GCS（Glasgow Coma Scale）",
      "脫水徵象：皮膚 turgor↓、黏膜乾、眼窩凹陷、水果味呼吸（acetone breath）",
      "腹部視聽叩觸：彌漫性壓痛（DKA 可假性腹膜炎），需排 surgical abdomen",
      "心肺：排除 pneumonia、MI 等誘因，auscultate 有無 crackles",
      "Bedside：fingerstick glucose、urine ketone、ABG（AG metabolic acidosis）、ECG 看 K"
    ],
    ddx: [
      "Diabetic ketoacidosis（最可能）",
      "HHS（鑑別）",
      "Sepsis",
      "Acute pancreatitis",
      "Salicylate poisoning"
    ],
    explanation: [
      "DKA（diabetic ketoacidosis，糖尿病酮酸中毒）是 insulin 嚴重缺乏，身體無法用葡萄糖只好燒脂肪",
      "脂肪分解產生 ketone body（酮體），酮體是強酸造成 metabolic acidosis（代謝性酸中毒）",
      "血糖太高引起 osmotic diuresis（滲透性利尿），大量水分電解質流失造成脫水",
      "身體用 Kussmaul breathing（深快呼吸）排 CO2 代償酸中毒，腹痛嘔吐是酸中毒表現",
      "延誤治療會休克、腦水腫死亡；規則打藥 + 學會 sick day rule 可大幅降低復發"
    ],
    treatment: [
      "查 ABG、glucose、β-hydroxybutyrate、electrolyte（K/Na/Cl）、anion gap、BUN/Cr、UA、ECG",
      "找誘因：CXR、UA、blood culture、lipase、troponin（排感染/MI/pancreatitis）",
      "Step 1 補液：0.9% NS 1-1.5 L 第 1 hr，再依 BP/Na 切 0.45% NS，血糖 250 mg/dL 加 D5W",
      "Step 2：regular insulin 0.1 U/kg IV bolus 後 0.1 U/kg/hr drip，K < 3.3 先補 K 再給 insulin",
      "Step 3：補 K（K < 5.3 即補 20-30 mEq/L），HCO3 一般不補（pH < 6.9 才考慮）",
      "衛教：sick day rule（生病不可自行停 insulin）、酮體試紙監測、CGM、規則回診"
    ],
    redFlags: [
      "K < 3.3 → 補 K 再給 insulin",
      "腦水腫（pediatric）→ 慢補液"
    ]
  },

  {
    id: "RM-10",
    source: "remnote",
    age: 55,
    sex: "M",
    department: "外",
    system: "肝膽",
    chiefComplaint: "RUQ 痛 + 發燒 + 黃疸",
    vignette: "55 歲男性，3 天來 RUQ 絞痛 + 發燒 39 + 寒顫 + 鞏膜黃染。膽結石史。",
    history: [
      "疼痛 LQQOPERA：RUQ（right upper quadrant）絞痛、放射至右肩/背、餐後加劇",
      "Charcot triad：fever + RUQ pain + jaundice；再問有無 Reynolds pentad（+ 意識改變 + shock）",
      "病因風險：gallstone 史、ERCP 史、Mirizzi syndrome、pancreatic head cancer、IPMN",
      "伴隨：茶色尿、灰白便、皮膚搔癢、體重減輕、食慾下降",
      "內外敏藥：anticoagulant、肝炎史、糖尿病、免疫抑制、過去腹部手術"
    ],
    pe: [
      "Vital signs + qSOFA（quick sepsis-related organ failure assessment）評估敗血症",
      "皮膚鞏膜：jaundice、scratch marks、spider angioma",
      "腹部：Murphy sign、RUQ tenderness、rebounding、palpable gallbladder（Courvoisier sign）",
      "意識與灌流：排除 Reynolds pentad（hypotension + mental change）",
      "Bedside：CBC、LFT、lipase、abdominal US 看 CBD 擴張 + 結石，續 MRCP / ERCP"
    ],
    ddx: [
      "Acute cholangitis（必排，Tokyo guideline）",
      "Acute cholecystitis",
      "Liver abscess",
      "Pancreatic head cancer",
      "Mirizzi syndrome"
    ],
    explanation: [
      "acute cholangitis（急性膽管炎）是膽管被結石或腫瘤塞住 + 細菌逆行感染，膽汁排不掉",
      "典型 Charcot triad：RUQ 痛 + 發燒寒顫 + jaundice（黃疸）",
      "嚴重時多加低血壓和意識變化 = Reynolds pentad，代表已進入 sepsis（敗血症）",
      "不處理會很快進展成 septic shock、multi-organ failure，死亡率可達 20-30%",
      "是內外科急症，需在 24-48 hr 內 biliary drainage（膽道引流）並用抗生素控制感染"
    ],
    treatment: [
      "查 CBC（leukocytosis）、CRP、LFT（↑bilirubin、↑ALP/GGT）、PT/INR、blood culture x2",
      "Image：abdominal US 看 CBD 擴張 + 結石，續 MRCP 定位、CT 排腫瘤",
      "依 Tokyo Guideline 2018 分級（Grade I mild / II moderate / III severe）",
      "Empirical antibiotic：piperacillin/tazobactam（Tazocin）4.5 g IV q8h，或 ceftriaxone 2 g IV QD + metronidazole 500 mg IV q8h",
      "Definitive：ERCP biliary drainage 24-48 hr 內（severe 越快越好），失敗改 PTCD",
      "穩定後 6 週內安排 laparoscopic cholecystectomy 預防再發；衛教低脂飲食、傷口照護"
    ],
    redFlags: [
      "Reynolds pentad → ICU + 急 ERCP / PTBD",
      "Severe → IV abx + drainage 不能延"
    ]
  },

  {
    id: "RM-11",
    source: "remnote",
    age: 45,
    sex: "F",
    department: "內",
    system: "腸胃",
    chiefComplaint: "餐後胸骨後燒灼感 + 反酸",
    vignette: "45 歲肥胖女性，半年來餐後胸骨後燒灼感、平躺加劇、酸水到喉。咖啡、巧克力、辛辣會誘發。",
    history: [
      "症狀 LQQOPERA：胸骨後燒灼感、餐後/平躺加劇、坐起/制酸劑緩解，頻率與夜間發作",
      "典型 GERD（gastroesophageal reflux disease，胃食道逆流）symptoms：heartburn、regurgitation、夜咳",
      "Atypical：non-cardiac chest pain、慢性咳、聲音沙啞、氣喘、喉嚨異物感",
      "Alarm symptoms：dysphagia、odynophagia、體重下降、貧血、嘔血、黑便",
      "內外敏藥：BMI、飲食（咖啡/巧克力/辛辣/油膩）、菸酒、bisphosphonate、NSAID、CCB"
    ],
    pe: [
      "Vital signs + BMI（本例肥胖為危險因子）",
      "頸部與 ENT：口腔黏膜、喉嚨紅腫、牙齒 acid erosion",
      "胸腹視聽叩觸：排除心因性胸痛和其他腹部病灶",
      "Bedside：ECG + troponin 排除 ACS（acute coronary syndrome），必要時 EGD",
      "Empirical PPI trial 4-8 週為診斷 + 治療工具，alarm sign 即刻 EGD"
    ],
    ddx: [
      "GERD（最可能）",
      "Peptic ulcer disease",
      "Esophagitis（pill、infectious）",
      "Cardiac chest pain（必排）",
      "Esophageal motility disorder"
    ],
    explanation: [
      "GERD（胃食道逆流）是 LES（lower esophageal sphincter，下食道括約肌）鬆弛，胃酸跑回食道",
      "胃酸刺激食道黏膜造成 heartburn（火燒心）和 regurgitation（反酸），平躺加重是因重力減少",
      "肥胖、懷孕、油膩餐、咖啡、巧克力、辛辣、菸酒、某些藥物會讓 LES 更鬆",
      "長期未治療可能進展為 erosive esophagitis、食道潰瘍、stricture、Barrett esophagus（食道腺癌前期）",
      "多數病人藥物 + 生活調整可良好控制，少數難治需 fundoplication 手術"
    ],
    treatment: [
      "典型症狀 + 無 alarm sign：empirical PPI trial 4-8 週即可診斷性治療",
      "Alarm sign（吞嚥困難、體重↓、貧血、嘔血、年齡 > 50 新發）→ 安排 EGD",
      "排除心因性胸痛：ECG、troponin、必要時 stress test",
      "首選：PPI（esomeprazole / Nexium）40 mg PO QD 餐前 30 min x 8 週，再 step-down",
      "輔助：H2 blocker（famotidine）20 mg PO BID、alginate（Gaviscon）餐後/睡前",
      "生活：減重 5-10%、戒菸酒、避免咖啡/巧克力/辛辣、睡前 3 hr 不進食、床頭抬高 15 cm"
    ],
    redFlags: [
      "Dysphagia + 體重↓ → 急 EGD（排 CA、Barrett）",
      "黑便 + anemia → 急 EGD"
    ]
  },

  {
    id: "RM-12",
    source: "remnote",
    age: 45,
    sex: "M",
    department: "內",
    system: "骨骼/神經",
    chiefComplaint: "突發下背痛 + 右下肢放射麻",
    vignette: "45 歲男性，搬重物後突發下背痛 + 右側 L5 dermatome 放射麻、咳嗽用力加劇。",
    history: [
      "受傷機轉：搬重物 / 彎腰 / 扭轉，突發 vs 漸進，與活動關係",
      "疼痛 LQQOPERA：下背痛 + 右側 L5 dermatome（皮節）放射麻、咳嗽用力加劇（Valsalva sign）",
      "神經學症狀：下肢肌力、麻木範圍、步態不穩、夜間痛",
      "Red flags（馬尾症候群）：saddle anesthesia、bowel/bladder incontinence、雙側下肢無力",
      "內外敏藥：癌症史、TB 史、免疫抑制、IV drug、體重減輕、發燒（排 malignancy / infection）"
    ],
    pe: [
      "Vital signs + 脊椎視觸診：tenderness、muscle spasm、step-off、ROM（range of motion）",
      "Straight leg raise（SLR）test：< 60° 誘發 radicular pain 高度提示 HIVD",
      "Motor：L5 dorsiflexion、EHL；S1 plantarflexion；對側 SLR（crossed SLR，specificity 高）",
      "Sensation 依 dermatome 檢查 + DTR（膝 L4、踝 S1）+ saddle sensation + perianal tone",
      "Bedside：無紅旗症狀不急於 imaging，> 6 週或神經學惡化 → MRI lumbar spine"
    ],
    ddx: [
      "Lumbar disc herniation（HIVD，L4-5 / L5-S1 most common）",
      "Spinal stenosis",
      "Mechanical low back pain",
      "Vertebral fracture",
      "Cauda equina syndrome（必排）"
    ],
    explanation: [
      "lumbar disc herniation（腰椎間盤突出，HIVD）是椎間盤的 nucleus pulposus（髓核）擠破外層壓到神經根",
      "L4-5 / L5-S1 節最常見，因為是脊椎活動度與壓力最大的節段",
      "神經根被壓迫就會下背痛 + 沿 dermatome 放射到腿部的 sciatica（坐骨神經痛）",
      "咳嗽、用力、Valsalva 會讓腹壓升高，壓迫加重所以痛更明顯",
      "大多 6-12 週保守治療即可緩解；少數合併 cauda equina syndrome（馬尾症候群）需緊急手術減壓"
    ],
    treatment: [
      "Workup：完整 neuro exam（SLR、肌力、感覺、DTR、saddle、肛門括約肌）排紅旗",
      "急性 < 6 週且無紅旗：不需 imaging，先保守治療（相對休息 1-2 天即可恢復活動）",
      "藥物：NSAID（ibuprofen 400-600 mg PO TID 或 naproxen）+ acetaminophen，必要時短期 muscle relaxant",
      "Neuropathic pain：gabapentin（Neurontin）300 mg PO TID titrate 或 pregabalin（Lyrica）75 mg PO BID",
      "復健：避免久坐久站、physical therapy、core muscle training、正確搬重姿勢",
      "手術 indication：cauda equina（48 hr 內急 decompression）、進行性 motor 缺損、保守 6-12 週無效"
    ],
    redFlags: [
      "Cauda equina（saddle + bowel/bladder）→ 急 MRI + decompression < 48 hr",
      "進行性 motor 缺損 → 急 surgery"
    ]
  },

  {
    id: "RM-13",
    source: "remnote",
    age: 70,
    sex: "F",
    department: "急",
    system: "心血管",
    chiefComplaint: "急性呼吸困難 + 端坐呼吸",
    vignette: "70 歲女性，CHF 病史。今晨突發呼吸困難無法平躺、咳粉紅泡沫痰、雙下肢水腫。",
    history: [
      "CHF（congestive heart failure，鬱血性心衰竭）病史、ejection fraction、NYHA 分級、近期用藥依從性",
      "症狀 LQQOPERA：dyspnea on exertion、orthopnea（端坐呼吸）、PND（paroxysmal nocturnal dyspnea）、咳粉紅泡沫痰",
      "誘因 FAILURE mnemonic：forgot meds、arrhythmia（AF）、ischemia、lifestyle（高鹽）、upregulation（妊娠/甲亢）、renal/rheumatic、embolism/endocarditis",
      "伴隨：胸痛、心悸、lower extremity edema、體重近期變化（3 天 +2 kg 是警訊）",
      "老年族群 ADL（activities of daily living）：進食、穿衣、移位、洗澡、如廁、自行服藥能力"
    ],
    pe: [
      "Vital signs + SpO2 + JVP（jugular venous pressure）升高是右心衰典型",
      "心音：S3 gallop（容量過多）、apex 位移、murmur（valvular）",
      "肺部：bilateral basal crackles、wheeze（cardiac asthma）、呼吸費力",
      "周邊：下肢 pitting edema、肝頸反射、hepatomegaly、cool extremities（cardiogenic shock）",
      "Bedside：ECG 看 AF/ischemia、CXR 看 butterfly opacity、床邊 POCUS 看 B-lines 與 LVEF"
    ],
    ddx: [
      "Acute decompensated HF / cardiogenic pulmonary edema",
      "Pneumonia",
      "Pulmonary embolism",
      "ARDS",
      "AECOPD"
    ],
    explanation: [
      "acute decompensated heart failure（急性失代償心衰竭）是心臟打不動，血液塞在肺部造成 pulmonary edema（肺水腫）",
      "肺微血管壓力升高，液體滲入肺泡，所以呼吸困難、咳出粉紅色泡沫痰",
      "平躺時下肢血液回流變多，加重肺水腫，所以必須坐起來才能喘氣（orthopnea）",
      "周邊血液回流也因右心衰減弱，水分積在下肢造成水腫",
      "若不及時處理會呼吸衰竭或 cardiogenic shock；找出誘因（感染、AF、缺血、停藥、高鹽）並矯正是關鍵"
    ],
    treatment: [
      "查 ECG、CXR（butterfly opacity / Kerley B lines）、BNP / NT-proBNP、troponin、CBC、BUN/Cr、electrolyte、ABG",
      "Echocardiogram 評估 LVEF（left ventricular ejection fraction）與瓣膜",
      "急性處置 LMNOP：Lasix、Morphine（謹慎）、Nitrate、Oxygen、Position（坐起）",
      "Furosemide（Lasix）40-80 mg IV bolus（家用劑量 x2）q6-12h + 嚴密 monitor 尿量與 electrolyte",
      "缺氧：O2 nasal 保 SpO2 > 92%，嚴重者 NIPPV / BiPAP，失敗插管",
      "穩定後 GDMT（guideline-directed medical therapy）：ACEi/ARB/ARNI + β-blocker + MRA + SGLT2i；衛教限鹽 < 2 g/day、限水 1.5 L、每日量體重"
    ],
    redFlags: [
      "SpO2↓ + 意識↓ → NIV / 插管",
      "Cardiogenic shock → ICU + inotrope"
    ]
  },

  {
    id: "RM-14",
    source: "remnote",
    age: 60,
    sex: "M",
    department: "內",
    system: "腸胃",
    chiefComplaint: "嘔血 + 黑便",
    vignette: "60 歲男性，肝硬化（HBV）史。今晨嘔吐大量鮮血 + 黑便 + 頭暈。",
    history: [
      "出血 LQQOPERA：嘔血量、性質（鮮紅 vs 咖啡渣）、次數、最後一次時間",
      "區分嘔血 vs 咳血、先嘔吐後吐血（Mallory-Weiss）vs 大量鮮血噴出（variceal）",
      "肝病史：HBV / HCV / 酒精性肝硬化、過去 varices 史、EVL（endoscopic variceal ligation）史",
      "用藥：NSAID、aspirin、anticoagulant、β-blocker（次級預防）、PPI",
      "伴隨：頭暈、syncope、黑便量、意識改變（hepatic encephalopathy）、腹脹"
    ],
    pe: [
      "Vital signs + orthostatic BP/HR + pallor + capillary refill（評估休克程度）",
      "肝病 stigmata：spider angioma、palmar erythema、gynecomastia、Caput medusae",
      "腹部：ascites（shifting dullness、fluid wave）、splenomegaly、hepatomegaly",
      "DRE（digital rectal exam）確認 melena 並排 hemorrhoid；asterixis 看 encephalopathy",
      "Bedside：CBC、PT/INR、LFT、ammonia、type & cross-match、急 EGD < 12 hr"
    ],
    ddx: [
      "Esophageal variceal bleeding（cirrhosis）",
      "Peptic ulcer disease",
      "Mallory-Weiss tear",
      "Gastric cancer",
      "Dieulafoy lesion"
    ],
    explanation: [
      "esophageal variceal bleeding（食道靜脈曲張出血）是肝硬化病人最致命的併發症之一",
      "肝硬化造成 portal hypertension（門脈高壓），血液繞道撐開食道和胃底靜脈形成 varices",
      "曲張靜脈壁薄壓力高，一旦破裂可短時間內大量出血到休克",
      "出血也會誘發 hepatic encephalopathy（肝性腦病變）、hepatorenal syndrome、SBP（spontaneous bacterial peritonitis）",
      "首次出血死亡率 15-20%、6 週內再出血率高，需內視鏡 + 藥物 + 預防性抗生素整套介入"
    ],
    treatment: [
      "立即 ABC：兩條 large-bore IV、CBC、PT/INR、type & cross-match、BUN/Cr、LFT、ammonia",
      "Resuscitation：crystalloid + PRBC 目標 Hb 7-8 g/dL（過量輸血會加重 portal pressure）",
      "Vasoactive：terlipressin 2 mg IV bolus q4h 或 octreotide 50 μg bolus + 50 μg/hr drip x 3-5 days",
      "Antibiotic prophylaxis：ceftriaxone 1 g IV QD x 7 days（降 SBP 風險、改善存活）",
      "Emergent EGD 12 hr 內 + endoscopic variceal ligation（EVL）；失敗用 Sengstaken-Blakemore tube 橋接 TIPS",
      "次級預防：non-selective β-blocker（propranolol、carvedilol）+ 重複 EVL，戒酒、HBV 抗病毒治療"
    ],
    redFlags: [
      "Active bleeding + shock → ICU + transfusion + octreotide + 急 EGD < 12 hr",
      "Variceal → ligation + abx prophylaxis"
    ]
  },

  {
    id: "RM-15",
    source: "remnote",
    age: 50,
    sex: "M",
    department: "內",
    system: "腸胃",
    chiefComplaint: "鮮血便 1 天",
    vignette: "50 歲男性，今天解大量鮮紅色血便 3 次 + 頭暈，無腹痛、無嘔吐。",
    history: [
      "出血 LQQOPERA：鮮紅色血便量、次數、與大便是否混合、滴血（hemorrhoid）vs 噴射",
      "鮮紅（lower GI 或 brisk upper GI）vs 暗紅（right colon）vs 黑便（upper GI）",
      "伴隨：腹痛（有無→憩室出血典型無痛）、頭暈、心悸、體重減輕、排便習慣改變",
      "家族 colorectal cancer（CRC）史、diverticulitis 史、IBD、痔瘡、polyp 史、過去 colonoscopy",
      "用藥：anticoagulant、antiplatelet、NSAID；飲食 fiber 與水分攝取"
    ],
    pe: [
      "Vital signs（含 orthostatic BP/HR）+ 皮膚 pallor 評估失血量",
      "腹部視聽叩觸：tenderness、mass、peritoneal sign（多數 diverticular bleeding 無痛）",
      "DRE 看血色、mass、痔瘡、fissure；visual anoscopy 排低位病灶",
      "Bedside：CBC、PT/INR、BUN/Cr ratio（> 30 提示 upper GI）、type & screen、ECG",
      "首選 colonoscopy 24 hr 內，BUN/Cr 高或不穩定則先 EGD 排上消化道"
    ],
    ddx: [
      "Diverticular bleeding（最常見 painless lower GI）",
      "Angiodysplasia",
      "Colorectal cancer",
      "Hemorrhoid（表面血）",
      "Brisk upper GI bleeding"
    ],
    explanation: [
      "diverticular bleeding（憩室出血）是大腸憩室旁的血管被磨破，是老年人下消化道出血最常見原因",
      "典型表現是大量無痛鮮紅色血便，與便秘、低纖飲食、NSAID 使用有關",
      "75-80% 會自行止血，但 20-40% 會再出血，所以仍需找出病灶做預防",
      "需先排除 brisk upper GI bleeding（NG aspirate、BUN/Cr ratio > 30）和 colorectal cancer",
      "大量出血可造成低血容性休克；整體預後依出血量與合併症而定"
    ],
    treatment: [
      "立即 ABC + 兩條 large-bore IV、CBC、PT/INR、type & cross-match、BUN/Cr",
      "Resuscitation：crystalloid + PRBC 目標 Hb 7-8 g/dL；必要時矯正凝血與停抗凝藥",
      "排上消化道來源：臨床判斷 + BUN/Cr ratio，不確定先 EGD",
      "首選 colonoscopy 24 hr 內定位 + endoscopic hemostasis（clip、epinephrine injection、thermal）",
      "活動性出血定位不到：CT angiography 或 RBC scan，必要時 angiography + embolization",
      "難治性或大量再出血：segmental colectomy；衛教高纖飲食、多喝水、避免 NSAID、定期 CRC screening"
    ],
    redFlags: [
      "大量出血 + shock → ICU + transfusion + 急 colonoscopy / angio embolization",
      "新發排便習慣改變 → colonoscopy"
    ]
  },

  {
    id: "RM-16",
    source: "remnote",
    age: 60,
    sex: "M",
    department: "內",
    system: "呼吸",
    chiefComplaint: "咳血 200 mL 一次",
    vignette: "60 歲男性，菸 30 包年，TB 史。今天突咳出鮮血約 200 mL。",
    history: [
      "咳血 LQQOPERA：量（本例 200 mL 屬 massive）、性質（鮮紅泡沫 → bronchial source）、頻率",
      "區分 hemoptysis vs hematemesis vs 鼻咽後流血：有無噁心嘔吐、pH 測試、鼻咽檢查",
      "病因風險：TB（tuberculosis）史、bronchiectasis、lung cancer、PE、AVM、mitral stenosis",
      "B symptoms（癌症/TB）：發燒、夜汗、體重下降；菸史（本例 30 pack-years）、職業暴露、接觸史",
      "用藥：anticoagulant、antiplatelet、近期呼吸道感染、免疫狀態（HIV、DM、steroid）"
    ],
    pe: [
      "Vital signs + SpO2 + 呼吸型態（看是否窒息風險）、意識",
      "頸部 + 鎖骨上 lymph node、clubbing（肺癌、bronchiectasis）、cachexia",
      "胸部：crackles、wheeze、bronchial breath sound、unilateral dullness（懷疑出血側朝下）",
      "口咽鼻腔檢查排 pseudohemoptysis；心音看 mitral stenosis",
      "Bedside：CXR 找病灶側，續 chest CT angiography + bronchoscopy 定位"
    ],
    ddx: [
      "Bronchiectasis with hemoptysis",
      "Pulmonary tuberculosis（reactivation）",
      "Lung cancer",
      "Pulmonary embolism with infarct",
      "AVM / Goodpasture"
    ],
    explanation: [
      "hemoptysis（咳血）指血來自下呼吸道，必須與嘔血和鼻咽出血先做區分",
      "Massive hemoptysis 定義為 > 200 mL/次或 > 600 mL/24 hr，主要死因是窒息而非失血",
      "血液來源 90% 是 bronchial artery（高壓體循環），所以出血快、壓力大、不易自止",
      "本案菸 30 pack-years + TB 史，最可能是 bronchiectasis 或 reactivation TB，也需排 lung cancer",
      "及時定位 + bronchial artery embolization（BAE）可有效止血，延誤會因窒息或失血性休克死亡"
    ],
    treatment: [
      "ABC：高流量氧氣、出血側朝下側臥避免健側嗆血、必要時 large-bore ETT 插管保護 airway",
      "查 CBC、PT/INR、type & cross-match、CXR、sputum AFB smear x3 + TB culture、cytology",
      "首選 chest CT angiography 定位出血血管 + 病灶；不穩定者直上 bronchoscopy",
      "Bronchoscopy：定位 + 局部止血（cold saline lavage、epinephrine、balloon tamponade）",
      "Definitive：bronchial artery embolization（BAE）成功率 > 85%，反覆出血可重複",
      "病因治療：TB reactivation 走 HRZE（isoniazid、rifampin、pyrazinamide、ethambutol）+ 隔離通報；戒菸 + 安排 LDCT lung cancer screening"
    ],
    redFlags: [
      "大量 > 200 mL/hr → bronchial artery embolization + 插管 ICU",
      "Suspect TB → 隔離 + AFB"
    ]
  },

  {
    id: "RM-17",
    source: "remnote",
    age: 55,
    sex: "F",
    department: "內",
    system: "神經",
    chiefComplaint: "陣發性旋轉性眩暈",
    vignette: "55 歲女性，頭轉動或起床時突發旋轉性眩暈持續 1 分鐘，伴噁心。無聽力變化。",
    history: [
      "LQQOPERA：眩暈性質（spinning 旋轉性 vs lightheaded 頭昏）、發作時間 < 1 分鐘、頭位改變誘發、平躺翻身起床加重",
      "伴隨症狀：噁心嘔吐、聽力變化、耳鳴、耳脹感、中樞徵象（複視、構音、無力、共濟失調）",
      "誘發與頻率：幾天內反覆發作、每次持續秒數、有無持續性 baseline 不平衡",
      "內外敏藥住個家：頭部外傷史、中耳炎史、ototoxic drug（aminoglycoside、loop diuretic）、高血壓與腦血管風險",
      "老年 ADL：跌倒史、步態不穩影響日常、家中照明與浴室防滑、居家獨居與照護支持"
    ],
    pe: [
      "Vital signs，特別是姿勢性血壓（排 orthostatic hypotension）",
      "Dix-Hallpike test 誘發 posterior canal BPPV（benign paroxysmal positional vertigo，良性陣發性姿勢性眩暈）",
      "HINTS（Head Impulse、Nystagmus、Test of Skew）exam 區分周邊 vs 中樞",
      "耳鏡 + Weber/Rinne test + 神經學檢查 + 步態（Romberg、tandem）",
      "Bedside：血糖、ECG，必要時 supine roll test 評估 horizontal canal BPPV"
    ],
    ddx: [
      "BPPV（最可能）",
      "Vestibular neuritis",
      "Meniere disease",
      "Vestibular migraine",
      "Posterior circulation stroke（必排）"
    ],
    explanation: [
      "BPPV 是內耳 otolith（耳石）脫落掉入 semicircular canal（半規管），頭位改變時刺激毛細胞引起短暫旋轉性眩暈",
      "典型每次發作 < 1 分鐘、與翻身起床有關、不影響聽力，與 Meniere disease、vestibular neuritis 不同",
      "症狀看似嚴重但屬於良性周邊眩暈，需排除後循環中風（posterior circulation stroke）這類中樞病因",
      "不治療會反覆發作、影響生活與增加跌倒骨折風險，老年人尤其危險",
      "預後良好，以 Epley maneuver（耳石復位術）多數 1-2 次即可緩解，但仍可能復發"
    ],
    treatment: [
      "Workup：Dix-Hallpike + supine roll test 定位患側與病灶半規管，HINTS 排中樞",
      "中樞徵象（垂直 nystagmus、skew deviation、神經缺損）→ 緊急 brain MRI 排 stroke",
      "Definitive：Epley maneuver 耳石復位，horizontal canal 用 Lempert/BBQ roll",
      "症狀控制短期用藥：meclizine 25 mg PO TID 或 betahistine（Merislon）6 mg PO TID，勿長期使用影響代償",
      "居家復健：教導 Brandt-Daroff exercise 自我復位練習",
      "衛教：可能復發、起床前先坐床邊 1 分鐘、夜間照明、老年防跌環境改善"
    ],
    redFlags: [
      "HINTS exam suggesting central → MRI brain（stroke）",
      "Sudden hearing loss + vertigo → labyrinthitis vs AICA"
    ]
  },

  {
    id: "RM-18",
    source: "remnote",
    age: 65,
    sex: "F",
    department: "內",
    system: "ENT",
    chiefComplaint: "雙耳鳴 6 個月",
    vignette: "65 歲女性，6 個月以來雙耳持續高音耳鳴，聽力似乎變差。",
    history: [
      "LQQOPERA：tinnitus（耳鳴）性質（持續 vs pulsatile 搏動性）、單側 vs 雙側、頻率（高音 vs 低音）、6 個月進展",
      "伴隨症狀：聽力下降（高頻優先）、vertigo（眩暈）、耳脹感、耳痛、耳漏、焦慮失眠",
      "誘發與加重：噪音暴露、咖啡因、壓力、特定藥物後惡化",
      "內外敏藥住個家：長期噪音職業史、ototoxic drug（aspirin 高劑量、aminoglycoside、cisplatin、loop diuretic、NSAID）、HTN、DM、心血管病史",
      "老年 ADL：聽力影響溝通與社交孤立、跌倒風險、助聽器使用意願與經濟負擔"
    ],
    pe: [
      "Vital signs + 頸部聽診（carotid bruit 提示搏動性耳鳴血管源）",
      "Otoscopy 檢查外耳道 cerumen（耳垢）、tympanic membrane（TM，鼓膜）有無積液或穿孔",
      "Weber test + Rinne test 區分 conductive vs sensorineural hearing loss",
      "Pure tone audiometry + speech audiometry 量化聽損程度與頻率曲線",
      "Bedside：神經學檢查（cranial nerve，尤 CN V、VII、VIII），疑單側 → 安排 MRI internal auditory canal"
    ],
    ddx: [
      "Presbycusis with tinnitus（最可能）",
      "Noise-induced hearing loss",
      "Ototoxicity（藥物）",
      "Acoustic neuroma（單側）",
      "Pulsatile：dural AVF、AVM、carotid stenosis"
    ],
    explanation: [
      "tinnitus 是在外界無聲源下仍聽到聲音，可分 subjective（主觀）與 objective（客觀可他人聽到）",
      "老年雙側高頻耳鳴伴聽力下降最常見是 presbycusis（老年性聽力退化），毛細胞從高頻開始退化",
      "腦對缺失頻率產生神經代償性放電，被感知為持續高音耳鳴",
      "單側進行性耳鳴需警覺 acoustic neuroma（聽神經瘤）；pulsatile 需找 dural AVF、carotid stenosis 等血管病變",
      "目前無法根治，但透過 hearing aid、聲音治療、CBT 可顯著改善困擾與睡眠品質"
    ],
    treatment: [
      "Workup：完整耳鳴與藥物史、otoscopy、Weber/Rinne、pure tone + speech audiometry",
      "單側或非對稱 sensorineural hearing loss → MRI internal auditory canal with contrast 排 acoustic neuroma",
      "Pulsatile tinnitus → MRA/CTA 頭頸評估 dural AVF、carotid stenosis、glomus tumor",
      "治療：hearing aid 配戴（有聽損者）、tinnitus retraining therapy（TRT）、cognitive behavioral therapy（CBT）",
      "助眠與減焦慮：白噪音機、睡前背景音；嚴重焦慮可短期 low-dose SSRI",
      "衛教：避免噪音暴露、停用 ototoxic drug、無速效根治、定期追蹤聽力與影像"
    ],
    redFlags: [
      "單側 progressive hearing loss → MRI 排 acoustic neuroma",
      "Pulsatile → vascular workup"
    ]
  },

  {
    id: "RM-19",
    source: "remnote",
    age: 70,
    sex: "M",
    department: "內",
    system: "眼科",
    chiefComplaint: "突發單眼視力模糊",
    vignette: "70 歲男性，HTN/DM。1 小時前突然右眼視力模糊（像窗簾遮住）+ 暫時性。",
    history: [
      "LQQOPERA：突發單眼視力模糊，像窗簾遮下的 amaurosis fugax（一過性黑矇）、持續數分鐘後恢復",
      "視覺細節：視野缺損 vs 整體模糊、有無飛蚊閃光、眼痛、紅眼、複視",
      "伴隨 TIA（transient ischemic attack，短暫性腦缺血）症狀：肢體無力、口齒不清、顏面歪斜、頭痛",
      "內外敏藥住個家：HTN、DM、高血脂、抽菸、AF（atrial fibrillation，心房顫動）、既往 stroke/TIA、carotid endarterectomy 史",
      "老年 ADL：獨居、用藥依從性、視力影響駕駛與日常功能"
    ],
    pe: [
      "Vital signs（含雙側血壓）、心律（AF → 心因栓子）",
      "Visual acuity 兩眼分別測 + visual field confrontation test",
      "Pupillary reflex、RAPD（relative afferent pupillary defect）、funduscopy 找 cherry red spot、Hollenhorst plaque、cotton wool spots",
      "頸部聽診 carotid bruit、心臟聽診 murmur",
      "Bedside：ECG、urgent ophthalmology 會診、神經學檢查 + ABCD2 score"
    ],
    ddx: [
      "Amaurosis fugax（carotid embolus，TIA equivalent）",
      "CRAO（cherry red spot）",
      "Retinal detachment（飛蚊 + 窗簾）",
      "Vitreous hemorrhage",
      "Acute angle-closure glaucoma（痛 + 紅眼）"
    ],
    explanation: [
      "amaurosis fugax 是短暫單眼視力喪失，典型像窗簾由上往下遮住再恢復",
      "多半是 internal carotid artery（內頸動脈）粥狀斑塊剝落形成微栓子，順血流塞住 retinal artery",
      "屬於 TIA equivalent（中風前兆），後續 90 天內缺血性中風風險顯著升高",
      "不治療可能進展為 CRAO（central retinal artery occlusion，視網膜中央動脈阻塞）造成永久視力喪失或腦中風",
      "及早找出栓子來源（頸動脈、心臟）並啟動二級預防，可大幅降低中風與失明風險"
    ],
    treatment: [
      "急診 workup：visual acuity、funduscopy、ECG、神經學檢查、ABCD2 score、CBC、lipid、HbA1c",
      "Carotid duplex US：狹窄 > 70% 考慮 carotid endarterectomy 或 stenting",
      "Echocardiogram + Holter ECG 找 AF 或瓣膜性栓子來源",
      "Brain MRI/MRA 評估 silent infarct 與顱內血管",
      "二級預防：aspirin 100 mg PO QD 或 clopidogrel（Plavix）75 mg PO QD；statin（atorvastatin 40-80 mg PO QHS）",
      "嚴格控制 HTN、DM、戒菸；AF 患者依 CHA2DS2-VASc 考慮 DOAC anticoagulation"
    ],
    redFlags: [
      "突發無痛性視力喪失 → CRAO（90 min window）",
      "Amaurosis fugax → 急 carotid Doppler + antiplatelet"
    ]
  },

  {
    id: "RM-20",
    source: "remnote",
    age: 50,
    sex: "F",
    department: "內",
    system: "ENT/腫瘤",
    chiefComplaint: "頸部右側無痛性腫塊 1 個月",
    vignette: "50 歲女性，1 個月前發現頸部右側無痛硬塊 3 cm，無消長。無發燒、無體重↓。",
    history: [
      "LQQOPERA：頸部右側無痛硬塊 1 個月、大小 3 cm、無消長、無紅腫、活動度",
      "B symptoms：發燒、夜間盜汗、半年內 > 10% 體重下降、疲倦",
      "ENT 症狀：聲音沙啞、吞嚥困難、鼻塞、鼻出血、耳痛（nasopharyngeal cancer 耳咽管阻塞）",
      "內外敏藥住個家：菸酒檳榔量、HPV（human papillomavirus）與性行為史、EBV/HBV、TB 接觸史、家族頭頸癌",
      "其他線索：皮膚病變、全身淋巴結、乳房與甲狀腺、腹部腫塊"
    ],
    pe: [
      "Vital signs + 視診頸部腫塊位置（anterior/posterior triangle、supraclavicular）",
      "觸診頸部 LN：大小、硬度、固定性、壓痛、consistency（硬固定提示惡性）",
      "完整 ENT：口腔、舌、扁桃腺、nasopharynx（鼻咽鏡）、larynx（喉鏡）找原發",
      "全身淋巴結 + 肝脾、甲狀腺、乳房、腋下、鼠蹊",
      "Bedside workup：fine needle aspiration（FNA）細胞學 + 頸部 US"
    ],
    ddx: [
      "Reactive lymphadenopathy（infection）",
      "Tuberculous lymphadenitis（scrofula）",
      "Lymphoma",
      "Metastatic SCC（head & neck primary）",
      "Thyroid nodule / branchial cleft cyst"
    ],
    explanation: [
      "成人頸部無痛硬塊 > 2 cm 且持續 > 2-4 週需積極評估，> 40 歲惡性機率顯著上升",
      "常見鑑別：reactive lymphadenopathy、TB lymphadenitis（scrofula）、lymphoma、metastatic squamous cell carcinoma（SCC）",
      "頭頸部 SCC（鼻咽、口腔、口咽、喉）常以頸部淋巴結轉移為首發表現",
      "不治療會持續增大、侵犯氣道與血管、遠端轉移，晚期治癒率明顯下降",
      "及早組織診斷與分期決定手術、放化療策略，早期病灶 5 年存活率可達 70-90%"
    ],
    treatment: [
      "Workup：CBC、LDH、EBV serology（鼻咽癌）、HIV、PPD/IGRA（疑 TB）、TSH",
      "影像：頸部 CT/MRI with contrast 評估腫塊與原發病灶，必要時 PET-CT 找隱匿原發",
      "病理：首選 FNA 細胞學；疑 lymphoma → excisional LN biopsy 保留結構與做 immunohistochemistry",
      "完整 ENT endoscopy：鼻咽鏡、喉鏡；若仍找不到原發 → panendoscopy + 扁桃腺切除 + 舌根 biopsy",
      "依診斷分流：SCC → 手術 ± 放療/CCRT（concurrent chemoradiotherapy）；lymphoma → 化療依亞型；TB → HRZE 9-12 個月",
      "衛教：戒菸戒酒戒檳榔、HPV 疫苗、長期追蹤再發、營養與口腔保健"
    ],
    redFlags: [
      "> 4 wk + 硬 + 固定 → biopsy",
      "Supraclavicular（Virchow）→ 排腹部惡性"
    ]
  },

  {
    id: "RM-21",
    source: "remnote",
    age: 60,
    sex: "M",
    department: "內",
    system: "腸胃/肝",
    chiefComplaint: "腹脹 + 體重增加 + 下肢水腫",
    vignette: "60 歲男性，HBV carrier，2 個月腹脹漸增、下肢水腫、體重 +5 kg、easy bruising。",
    history: [
      "LQQOPERA：腹脹 2 個月漸增、體重 +5 kg、下肢水腫位置與可凹性、夜間惡化",
      "肝病相關症狀：黃疸、茶色尿、easy bruising、意識混亂（hepatic encephalopathy，HE）、嘔血解黑便（varices 出血）",
      "排除心源：PND（paroxysmal nocturnal dyspnea）、orthopnea、胸悶、運動耐受力",
      "排除腎源：泡泡尿、晨起眼瞼水腫、蛋白尿病史",
      "內外敏藥住個家：HBV carrier 追蹤狀況、酒精量、NASH 風險（DM、肥胖、高血脂）、肝癌家族史、NSAID/中草藥"
    ],
    pe: [
      "Vital signs + 黃疸、sarcopenia、惡病質",
      "腹部：shifting dullness、fluid wave、caput medusae（臍周靜脈怒張）、hepatosplenomegaly",
      "肝病徵象：spider angioma、palmar erythema、gynecomastia、testicular atrophy、asterixis",
      "下肢凹陷性水腫、JVP（評估心因）、心肺聽診",
      "Bedside：diagnostic paracentesis（SAAG > 1.1 提示 portal HTN）、abdominal US"
    ],
    ddx: [
      "Cirrhotic ascites（HBV）",
      "HCC with portal vein thrombosis",
      "Heart failure",
      "Nephrotic syndrome",
      "Peritoneal carcinomatosis / TB"
    ],
    explanation: [
      "cirrhosis（肝硬化）是長期肝損傷後纖維化與結節形成，台灣最常見原因是 HBV",
      "纖維化造成 portal hypertension（門脈高壓），加上白蛋白合成下降，液體從血管滲出形成 ascites（腹水）與下肢水腫",
      "肝合成凝血因子（II、VII、IX、X）下降，造成 easy bruising 與 PT/INR 延長",
      "需警覺 HCC（hepatocellular carcinoma，肝細胞癌）伴 portal vein thrombosis 突然惡化腹水與黃疸",
      "Decompensated cirrhosis 5 年存活率約 50%，HCC 與食道靜脈曲張出血是主要死因"
    ],
    treatment: [
      "Workup：CBC、LFT、albumin、PT/INR、ammonia、HBV DNA、AFP、Cr、electrolyte、MELD-Na score",
      "影像：abdominal US（肝結節、脾腫大、portal vein thrombosis）、必要時 dynamic CT/MRI 監測 HCC",
      "Diagnostic paracentesis：cell count、SAAG、culture 排 SBP（spontaneous bacterial peritonitis，PMN > 250）",
      "Ascites：限鈉 < 2 g/day、spironolactone 100 mg + furosemide 40 mg PO QD 依體重調；大量腹水 therapeutic paracentesis + IV albumin 6-8 g/L removed",
      "Antiviral：entecavir 0.5 mg PO QD 或 tenofovir alafenamide 25 mg PO QD；EGD 篩 varices，予 non-selective beta-blocker",
      "衛教：戒酒、避免 NSAID/aminoglycoside、流感與肺炎疫苗、每 6 個月 US + AFP 監測 HCC"
    ],
    redFlags: [
      "SBP（fever + 腹痛）→ 立即 paracentesis（PMN > 250）+ abx",
      "HE → lactulose + rifaximin"
    ]
  },

  {
    id: "RM-22",
    source: "remnote",
    age: 6,
    sex: "M",
    department: "小",
    system: "小兒/感染",
    chiefComplaint: "持續發燒 5 天 + 結膜紅 + 草莓舌",
    vignette: "6 歲男童，發燒 39-40 持續 5 天，雙眼結膜紅無分泌物、草莓舌、嘴唇皴裂、頸部 LN 1.5 cm、軀幹紅疹、手腳水腫。",
    history: [
      "小兒必問母生 3A + 吃喝拉動睡：母親孕產史、Apgar、餵食量、活動力、睡眠、排便",
      "LQQOPERA：發燒 5 天 39-40、退燒藥反應差、起病順序（先發燒再皮膚黏膜）",
      "Kawasaki disease criteria 篩查：結膜炎（non-exudative bilateral）、草莓舌、嘴唇皴裂、手腳水腫脫皮、軀幹紅疹、頸部 LN > 1.5 cm 單側",
      "排除其他發燒源：URI、咽喉痛（strep）、接觸史、疫苗近期史、抗生素使用",
      "內外敏藥住個家：藥物過敏、過去發燒長疹史、家族自體免疫與川崎症病史"
    ],
    pe: [
      "Vital signs（tachycardia out of proportion to fever 警訊）+ 全身毒性外觀",
      "五大診斷特徵：bilateral non-exudative conjunctivitis、口唇皴裂草莓舌、軀幹多形紅疹、手足硬腫脫皮、頸部 LN 單側 > 1.5 cm",
      "心肺：gallop、murmur、tachypnea，評估 myocarditis/心衰徵象",
      "腹部 + 四肢關節、BCG 接種處發紅（台灣高敏感特徵）",
      "Bedside：CBC、CRP、ESR、ECG、echocardiogram 評估 coronary artery"
    ],
    ddx: [
      "Kawasaki disease（典型）",
      "Scarlet fever",
      "Adenovirus",
      "Stevens-Johnson / TEN",
      "Toxic shock"
    ],
    explanation: [
      "Kawasaki disease（川崎症）是兒童 medium vessel vasculitis（中型血管炎），病因不明，好發 < 5 歲亞洲兒童",
      "診斷需發燒 ≥ 5 天 + 5 項主要特徵中 ≥ 4 項（結膜炎、口唇變化、四肢變化、紅疹、頸部 LN）",
      "全身血管發炎造成發燒、皮膚黏膜改變；最嚴重併發症是 coronary artery aneurysm（冠狀動脈瘤）",
      "未治療 coronary aneurysm 發生率約 25%；發病 10 天內給 IVIG 可降至 < 5%",
      "是已開發國家兒童後天心臟病主因，長期可能導致心肌缺血、猝死，需終身心臟追蹤"
    ],
    treatment: [
      "Workup：CBC（白血球上升、第 2 週 thrombocytosis）、CRP/ESR 上升、LFT、albumin 下降、UA（sterile pyuria）",
      "Echocardiogram baseline + 第 2 週 + 第 6-8 週追蹤 coronary artery Z-score",
      "First-line：IVIG（intravenous immunoglobulin）2 g/kg single dose 10-12 小時輸注 + aspirin 30-50 mg/kg/day 分 4 次",
      "退燒 48 小時後 aspirin 降至 3-5 mg/kg/day 抗血小板，續用 6-8 週至 echo 正常",
      "IVIG resistant（24-48 小時仍發燒）：再給一次 IVIG 或 methylprednisolone pulse 30 mg/kg；高危巨大瘤（> 8 mm）加 anticoagulation",
      "衛教：長期心臟科追蹤、IVIG 後 11 個月內延後 MMR/水痘活菌疫苗、避免劇烈運動直到心臟評估正常"
    ],
    redFlags: [
      "未治療 → 25% coronary aneurysm，10 d 內給 IVIg + aspirin",
      "Echo follow at 2 wk + 6-8 wk"
    ]
  },

  {
    id: "RM-23",
    source: "remnote",
    age: 2,
    sex: "F",
    department: "小",
    system: "小兒/感染",
    chiefComplaint: "2 歲女童發燒 + 左耳痛",
    vignette: "2 歲女童，URI 3 天後發燒 + 左耳痛 + 哭鬧。",
    history: [
      "小兒必問母生 3A + 吃喝拉動睡：餵食量下降、活動力、睡眠哭鬧、尿布量",
      "LQQOPERA：URI 3 天後發燒 + 左耳痛 + 拉扯耳朵、哭鬧加劇",
      "耳部症狀：耳漏、聽力減退、平衡不穩、過去中耳炎史、TM perforation（鼓膜穿孔）",
      "風險因子：daycare 托嬰、二手菸、餵奶姿勢（平躺）、瓶餵 vs 母乳、奶嘴使用",
      "內外敏藥住個家：藥物過敏（尤其 penicillin）、疫苗完成度（PCV13、Hib）、家族過敏史"
    ],
    pe: [
      "Vital signs（發燒程度、tachypnea 評估 sepsis）+ 全身毒性外觀",
      "Otoscopy：tympanic membrane（TM）bulging、紅色或混濁、light reflex 消失、middle ear effusion",
      "Pneumatic otoscopy 檢查 TM mobility 降低（AOM 敏感特異性最高）",
      "Mastoid 區紅腫壓痛、耳後推出（mastoiditis 警訊）、頸部 LN",
      "Bedside：口咽（合併 pharyngitis）、其他發燒源、肺部聽診"
    ],
    ddx: [
      "Acute otitis media（最可能）",
      "Otitis media with effusion",
      "Otitis externa",
      "Mastoiditis（complication）",
      "Foreign body"
    ],
    explanation: [
      "acute otitis media（急性中耳炎，AOM）是幼兒最常見細菌感染之一",
      "幼兒 eustachian tube（耳咽管）較短、平、水平，URI 後鼻咽病原易逆行進入中耳",
      "常見病原：Streptococcus pneumoniae、non-typable Haemophilus influenzae、Moraxella catarrhalis",
      "中耳積膿造成鼓膜壓力上升 → 劇烈耳痛、發燒、哭鬧、暫時聽力下降",
      "多數 1 週內緩解，但可能併發 mastoiditis、TM perforation、反覆發作影響聽力與語言發展"
    ],
    treatment: [
      "Workup：otoscopy 確認 TM bulging + mobility 下降 + 紅；一般不需抽血培養",
      "嚴重度分流：< 2 歲、雙側、耳漏、發燒 ≥ 39 → 立即抗生素；輕中度 > 2 歲單側不嚴重可 watchful waiting 48-72 小時",
      "First-line：amoxicillin 80-90 mg/kg/day PO 分 2-3 次；< 2 歲療程 10 天，> 2 歲 5-7 天",
      "近期用 amoxicillin 或治療失敗：amoxicillin-clavulanate（Augmentin）90/6.4 mg/kg/day",
      "Penicillin allergy：cefdinir、cefpodoxime 或 azithromycin；對症 acetaminophen/ibuprofen 止痛退燒",
      "衛教：完成療程、追蹤聽力、避免二手菸、母乳哺餵、PCV13 與流感疫苗、餵奶勿平躺"
    ],
    redFlags: [
      "Mastoid tenderness + 紅腫 → mastoiditis 急 ENT",
      "TM perforation + 持續耳漏 → 持續 abx"
    ]
  },

  {
    id: "RM-24",
    source: "remnote",
    age: 3,
    sex: "F",
    department: "小",
    system: "小兒/感染",
    chiefComplaint: "3 歲女童發燒 + 排尿哭鬧",
    vignette: "3 歲女童，3 天發燒 39 + 解尿時哭鬧 + 食慾差，無 URI 症狀。",
    history: [
      "小兒必問母生 3A + 吃喝拉動睡：食慾差、活動力、排尿量與顏色、排便、哭鬧",
      "LQQOPERA：發燒 3 天 39、解尿時哭鬧、頻尿、急尿、尿液混濁或惡臭",
      "過去泌尿史：先前 UTI（urinary tract infection，泌尿道感染）、VUR（vesicoureteral reflux，膀胱輸尿管逆流）、產前 hydronephrosis（水腎）、便秘",
      "衛生與風險：包尿布更換頻率、擦拭方向、labial adhesion、不當觸摸（排除 sexual abuse）",
      "內外敏藥住個家：藥物過敏、疫苗史（含 PCV、Hib）、家族泌尿結構異常、近期抗生素使用"
    ],
    pe: [
      "Vital signs（高燒、tachycardia）+ 全身毒性外觀、脫水評估",
      "腹部：suprapubic（恥骨上）壓痛、可觸及脹滿膀胱、costovertebral angle（CVA）tenderness",
      "External genitalia：labial adhesion、vulvovaginitis、異物、虐待跡象",
      "其他發燒源：耳鼻喉、肺、皮膚、骨關節",
      "Bedside：catheterized urine（< 2 歲）做 UA + culture、BUN/Cr、CBC、CRP、血糖"
    ],
    ddx: [
      "Pediatric UTI（cystitis vs pyelonephritis）",
      "Vulvovaginitis",
      "Constipation",
      "Sexual abuse（排）",
      "Other source of fever"
    ],
    explanation: [
      "pediatric UTI 需區分 cystitis（膀胱炎，下尿路）與 pyelonephritis（腎盂腎炎，上尿路合併全身症狀）",
      "高燒 + 解尿哭鬧 + 無 URI 症狀，pyelonephritis 可能性高",
      "病原最常見 Escherichia coli（80-90%），女童尿道短易感染；男童 UTI 需排除 anatomical abnormality（VUR、PUV）",
      "不治療可能進展為 sepsis、renal scarring（腎疤痕）、長期 HTN 與 CKD（chronic kidney disease，慢性腎病）",
      "首次發燒 UTI 後需影像評估找結構異常，及早治療可保全腎功能"
    ],
    treatment: [
      "Workup：< 2 歲必須 catheterization 或 suprapubic aspiration 採尿，避免中段尿汙染；做 UA + urine culture",
      "診斷標準：catheter 採樣 ≥ 50,000 CFU/mL 或 clean catch ≥ 100,000 CFU/mL",
      "其他：CBC、CRP、BUN/Cr；毒性外觀或 < 3 個月加血液培養",
      "輕度可口服：cefixime（Cefspan）8 mg/kg/day PO QD × 7-14 天；嚴重或無法口服：IV ampicillin + gentamicin 或 ceftriaxone 50-75 mg/kg/day IV QD",
      "影像：< 2 歲首次發燒 UTI → renal US；異常或反覆 UTI → VCUG（voiding cystourethrogram）找 VUR；DMSA 評估 renal scar",
      "衛教：充分水分、定時排尿、處理便秘、清潔由前往後擦拭、低劑量預防性抗生素視 VUR 級數"
    ],
    redFlags: [
      "< 2 yo + UTI → ultrasound + 後續 VCUG if recurrent",
      "Pyelonephritis → 7-14 d abx + admit if 重"
    ]
  },

  {
    id: "RM-25",
    source: "remnote",
    age: 0,
    sex: "M",
    department: "小",
    system: "小兒/心血管",
    chiefComplaint: "新生兒心雜音 + 餵食差",
    vignette: "新生兒 5 d，產前 anomaly scan 正常。出生後聽到 systolic murmur，餵食差、發紺、呼吸快。",
    history: [
      "小兒必問母生 3A + 吃喝拉動睡：餵食時發紺、出汗、呼吸急促、中斷休息、體重增加緩慢",
      "LQQOPERA：產後 5 天 systolic murmur、發紺起始時間、cyanosis 加劇場景（哭鬧、餵食）",
      "產前史：anomaly scan 結果、羊水異常、母體 DM/SLE/rubella/Zika、服藥（warfarin、酒精）",
      "家族與遺傳：先天性心臟病家族史、染色體症候群（Trisomy 21、DiGeorge、Turner）",
      "圍產期：週數、出生體重、Apgar、缺氧病史、NICU 住院、新生兒篩檢（含 critical CHD 脈搏氧篩檢）"
    ],
    pe: [
      "Vital signs：4 limb BP + pre/post-ductal SpO2 differential > 3% 警示 coarctation 或 ductal-dependent",
      "視診：central cyanosis、tachypnea、retraction、餵食時出汗、failure to thrive",
      "心音：S2 splitting（fixed split → ASD）、murmur 位置與 radiation、gallop",
      "周邊脈搏：femoral 與 brachial 比較（femoral 弱或延遲 → coarctation of aorta）、肝腫大（右心衰）",
      "Bedside：hyperoxia test、pulse oximetry 4 肢、echocardiogram 會診"
    ],
    ddx: [
      "VSD（最常見）/ ASD / PDA / TOF",
      "Coarctation of aorta（femoral 弱）",
      "TAPVR / TGA（cyanotic）",
      "PPHN",
      "Sepsis"
    ],
    explanation: [
      "新生兒 CHD（congenital heart disease，先天性心臟病）需在 ductus arteriosus（動脈導管）關閉前診斷",
      "Ductal-dependent lesion（TGA、severe TOF、coarctation、HLHS）依賴導管血流，關閉後會急劇惡化成休克",
      "Acyanotic 最常見為 VSD（ventricular septal defect）、ASD、PDA；large VSD 會餵食差、呼吸快、長不大",
      "Hyperoxia test 可初步區分心因 vs 肺因 cyanosis，100% O2 後 PaO2 < 100 mmHg 提示 cyanotic CHD",
      "及早診斷 + 外科修補預後良好；延誤可致 heart failure、shock、死亡或神經發展受損"
    ],
    treatment: [
      "Workup：4 肢 pulse oximetry、CXR、ECG、ABG、CBC、blood culture、CRP（排 sepsis）、血糖、電解質",
      "Hyperoxia test：100% O2 10 分鐘後 PaO2 < 100 mmHg 高度懷疑 cyanotic CHD",
      "Echocardiogram 為 gold standard 確診病灶種類與嚴重度",
      "Ductal-dependent 疑診立即 prostaglandin E1（alprostadil）0.05-0.1 μg/kg/min IV 維持導管開放；準備插管備用",
      "Heart failure 支持：furosemide 1 mg/kg IV、digoxin、限水、熱量加強餵食；低氧補 O2 需謹慎（可能加速導管關閉）",
      "Definitive：依病灶外科修補（VSD repair、TOF total repair、arterial switch for TGA、coarctation resection），術後長期心臟科追蹤與 endocarditis prophylaxis"
    ],
    redFlags: [
      "Ductal-dependent lesion → PGE1",
      "重度 cyanosis + shock → 急 echo + ICU"
    ]
  },

  {
    id: "RM-26",
    source: "remnote",
    age: 0,
    sex: "M",
    department: "小",
    system: "小兒/血液",
    chiefComplaint: "新生兒黃疸 + 蠶豆症家族史",
    vignette: "出生第 3 天男嬰，全身黃疸 TB 18，餵食 OK。父為蠶豆症患者。",
    history: [
      "小兒必問母生 3A（母親產前、生產、產後）+ 吃喝拉動睡狀況、餵食種類與量",
      "黃疸 LQQOPERA：出現時間（< 24 hr 病理 / 2-3 d 生理 / > 1 週 prolonged）、進展速度",
      "大便顏色（排除 biliary atresia 灰白便）、尿色、體重變化、活動力",
      "家族史：G6PD（glucose-6-phosphate dehydrogenase，蠶豆症）、thalassemia、ABO/Rh 不合",
      "藥物與接觸史：樟腦丸、磺胺類、龍膽紫、母親中藥、印染衣物"
    ],
    pe: [
      "Vital signs + 體重變化 + 活動力評估",
      "Skin：cephalo-caudal 黃疸分布（頭→軀幹→四肢→手足底）估 bilirubin level",
      "HEENT：cephalohematoma、caput succedaneum（增加 bilirubin 負荷）",
      "腹部：hepatosplenomegaly（hemolysis 或感染線索）",
      "Bedside workup：TcB（transcutaneous bilirubin）+ TB/DB + CBC + Coombs + G6PD assay"
    ],
    ddx: [
      "G6PD deficiency-related hemolysis",
      "ABO incompatibility",
      "Physiologic / breast milk jaundice",
      "Sepsis",
      "Biliary atresia（< conjugated, prolonged）"
    ],
    explanation: [
      "G6PD 是 X-linked recessive 酵素缺乏，台灣男童盛行率約 3%，是新生兒黃疸常見原因",
      "G6PD 維持紅血球抗氧化能力，缺乏時 oxidative stress 造成 hemolysis（溶血）、bilirubin 急升",
      "bilirubin 過高（> 20-25 mg/dL）會 cross BBB（blood-brain barrier）造成 kernicterus（核黃疸）永久神經損傷",
      "需嚴格避免氧化性藥物食物：蠶豆、樟腦丸、磺胺類、primaquine、龍膽紫",
      "規則避開誘因下生活品質與一般人相同，新生兒期過後溶血風險大幅下降"
    ],
    treatment: [
      "Workup：TB/DB、CBC、reticulocyte、peripheral blood smear（Heinz body、bite cell）、G6PD activity assay",
      "排免疫性溶血：ABO/Rh blood typing、direct Coombs test；懷疑 sepsis 加 CRP、blood culture",
      "Phototherapy：依 Bhutani nomogram + 小時齡 + 危險因子決定 threshold",
      "Bilirubin 接近 exchange threshold：double-volume exchange transfusion；嚴重貧血加輸血支持",
      "藥物衛教：終生避蠶豆、樟腦丸、龍膽紫、磺胺、nitrofurantoin、primaquine、aspirin 高劑量、黃連",
      "藥袋註明 G6PD deficiency，配戴醫療手環，新生兒篩檢報告留存並告知日後看診醫師"
    ],
    redFlags: [
      "TB > 20 → 換血",
      "G6PD：避樟腦丸、shellfish、蠶豆、磺胺、primaquine"
    ]
  },

  {
    id: "RM-27",
    source: "remnote",
    age: 1,
    sex: "M",
    department: "小",
    system: "小兒/感染",
    chiefComplaint: "1 歲幼兒發燒 + 咳嗽 + 流鼻涕",
    vignette: "1 歲男童，3 天發燒 38.5 + 流鼻涕 + 咳嗽。活力胃口尚可。",
    history: [
      "小兒必問母生 3A + 吃喝拉動睡（活力、食慾、排尿排便、睡眠）、發燒天數與最高溫",
      "URI（upper respiratory infection）典型症狀：咳嗽、流鼻涕、咽痛、打噴嚏之 LQQOPERA",
      "Red flags：呼吸喘、retraction、SpO2 低、嗜睡、脫水、尿量減少、不喝水",
      "接觸史：幼兒園、兄姊、家人感冒；vaccine 史（influenza、Hib、PCV13 肺鏈）",
      "藥物過敏、過去氣喘／異位性體質、慢性疾病"
    ],
    pe: [
      "Vital signs + SpO2 + 體溫、呼吸速率（1 歲正常 24-40/min）",
      "HEENT：tympanic membrane（排 AOM, acute otitis media）、pharynx、tonsil、turbinate",
      "胸部：聽診 crackles/wheezing、retraction、nasal flaring 排 pneumonia/bronchiolitis",
      "腹部 + 皮膚：hepatomegaly、皮疹（排川崎、麻疹、腸病毒）",
      "Hydration：capillary refill、mucous membrane、活動力、尿布濕度"
    ],
    ddx: [
      "Viral URI（最可能）",
      "Acute otitis media",
      "Streptococcal pharyngitis",
      "Pneumonia",
      "Bronchiolitis"
    ],
    explanation: [
      "viral URI（上呼吸道感染）是 1 歲幼兒最常見發燒原因，平均每年 6-8 次",
      "常見病原：rhinovirus、RSV（respiratory syncytial virus）、parainfluenza、adenovirus、influenza",
      "症狀多自限 7-10 天，發燒通常 3-5 天內退，為免疫系統與病毒對抗的正常反應",
      "活力胃口尚可、無呼吸窘迫是 reassuring sign，絕大多數不需抗生素",
      "需警覺併發症：otitis media、pneumonia、bronchiolitis、febrile seizure；抗生素濫用反增 resistance"
    ],
    treatment: [
      "詳評：呼吸速率、retraction、wheezing、耳膜、咽喉、活動力、水分攝取、尿量",
      "活力好無呼吸窘迫不需常規 lab/image；高燒 > 5 天或毒性外觀才考慮 CBC、CRP、UA、CXR",
      "退燒：acetaminophen（Scanol）10-15 mg/kg PO q4-6h 或 ibuprofen 10 mg/kg PO q6-8h（> 6 個月）",
      "支持療法：充足水分、母奶/配方奶照常、生理食鹽水鼻噴、抬高床頭",
      "避免：< 4 歲不用 OTC 感冒藥、< 1 歲不用蜂蜜、抗生素無 indication 不開",
      "衛教：紅旗（呼吸困難、嗜睡、不喝、尿少、發燒 > 5 天）立即回診、勤洗手、疫苗接種"
    ],
    redFlags: [
      "呼吸喘 + retraction → 排 pneumonia / bronchiolitis",
      "高燒 > 5 d → 排 Kawasaki"
    ]
  },

  {
    id: "RM-28",
    source: "remnote",
    age: 30,
    sex: "F",
    department: "婦",
    system: "婦產",
    chiefComplaint: "陰道分泌物異味 + 搔癢",
    vignette: "30 歲女性，1 週白色凝乳狀分泌物 + 搔癢。最近抗生素治 UTI。",
    history: [
      "婦產科必問性孕經分片：性行為、避孕、GPA（gravida/para/abortion）、LMP、月經週期",
      "分泌物 LQQOPERA：顏色性質（cottage cheese / 灰白魚腥 / 黃綠泡沫）、量、氣味",
      "伴隨症狀：搔癢、灼熱、性交痛、排尿痛、下腹痛、發燒",
      "誘因：近期抗生素（破壞正常菌叢）、DM（糖尿病）、懷孕、HRT、IUD、免疫低下",
      "性伴侶症狀、衛生習慣（灌洗、緊身衣）、既往 vaginitis 發作"
    ],
    pe: [
      "Vital signs",
      "外陰：紅腫、excoriation、衛星病灶（satellite lesion）",
      "Speculum：分泌物外觀、cervix（strawberry cervix 見 Trichomonas）、vaginal mucosa",
      "Bimanual：CMT（cervical motion tenderness）、adnexal tenderness 排 PID",
      "Bedside：vaginal pH + wet mount + KOH prep（pseudohyphae / clue cells / trichomonad）"
    ],
    ddx: [
      "Candida vulvovaginitis（cottage cheese + 搔癢）",
      "Bacterial vaginosis（fishy + 灰白）",
      "Trichomonas（黃綠泡沫 + strawberry cervix）",
      "Atrophic vaginitis（停經）",
      "STD（chlamydia / GC）"
    ],
    explanation: [
      "candidal vulvovaginitis（念珠菌外陰陰道炎）是 Candida albicans 過度增生造成",
      "誘因：抗生素破壞正常乳酸桿菌菌叢、糖尿病、懷孕、免疫低下、口服避孕藥，本案近期用抗生素典型",
      "典型分泌物：cottage cheese 樣白色凝乳、無臭、合併嚴重搔癢與外陰紅腫、pH < 4.5",
      "與 BV（bacterial vaginosis，灰白魚腥、pH > 4.5）、Trichomonas（黃綠泡沫、strawberry cervix）鑑別",
      "治療反應良好，但 5-10% 會反覆發作（≥ 4 次/年），需長期抑制療法"
    ],
    treatment: [
      "Workup：pelvic exam + vaginal pH + wet mount + KOH prep；疑 STD 加 GC/chlamydia NAAT",
      "First-line：fluconazole（Diflucan）150 mg PO single dose",
      "Topical 替代：clotrimazole 或 miconazole vaginal cream/suppository x 7 天",
      "懷孕：禁口服 fluconazole，只用 topical azole 7 天療程",
      "Recurrent（≥ 4 次/年）：fluconazole 150 mg PO q72h x 3 doses 後每週 1 次 x 6 個月",
      "衛教：穿透氣棉質內褲、避免陰道灌洗、控制血糖、避用香精衛生用品、性伴侶通常不需治療"
    ],
    redFlags: [
      "孕婦 BV → preterm 風險",
      "PID 線索（CMT、骨盆痛）→ admit + IV abx"
    ]
  },

  {
    id: "RM-29",
    source: "remnote",
    age: 25,
    sex: "F",
    department: "婦",
    system: "婦產",
    chiefComplaint: "停經 6 週 + 突發 LLQ 痛",
    vignette: "25 歲女，LMP 6 週前。今早突發 LLQ 痛 + 少量陰道出血 + 頭暈。Urine pregnancy (+)。",
    history: [
      "婦產科必問性孕經分片 + LMP、PMP、月經週期、避孕方式、GPA",
      "懷孕症狀（noc-vom、乳房脹、頻尿）、spotting timing、出血量、組織排出",
      "腹痛 LQQOPERA：位置（LLQ）、急性突發、轉移痛、加重/緩解因子",
      "高危：PID 史、IUD、tubal surgery、ectopic 史、IVF、不孕史",
      "內出血徵象：肩膀痛（橫膈刺激）、暈厥、頭暈、冷汗"
    ],
    pe: [
      "Vital signs（BP/HR：unstable → ruptured ectopic，需警覺 hypovolemic shock）",
      "腹部：rebound、guarding、Cullen sign、Kehr sign（肩膀痛）",
      "Pelvic exam：CMT、adnexal mass/tenderness、posterior fornix 飽滿",
      "外陰/陰道：出血量、cervical os 開閉、組織排出",
      "Bedside：quantitative β-hCG + TVS（transvaginal sonography）+ CBC + blood type"
    ],
    ddx: [
      "Ectopic pregnancy（必排）",
      "Threatened / inevitable abortion",
      "Heterotopic pregnancy",
      "Ovarian cyst rupture",
      "Appendicitis"
    ],
    explanation: [
      "ectopic pregnancy（子宮外孕）是受精卵著床在子宮腔外，95% 在 fallopian tube（輸卵管）",
      "胚胎成長撐破輸卵管會大量內出血致 hypovolemic shock，是孕婦第一三月主要死因",
      "高危族群：PID 骨盆腔感染史、輸卵管手術、IUD、之前 ectopic、IVF、高齡",
      "典型三聯徵：停經 + 陰道出血 + 單側下腹痛；Urine pregnancy (+) 加單側下腹痛必須排 ectopic",
      "早期診斷可藥物治療保留輸卵管；破裂則需緊急手術，影響日後生育"
    ],
    treatment: [
      "立即 workup：quantitative β-hCG、CBC、blood type & Rh、cross-match、PT/INR",
      "TVS 找 intrauterine gestational sac；β-hCG > 1500-2000（discriminatory zone）但 TVS 無 IUP → 高度懷疑 ectopic",
      "急性處置：兩條大孔徑 IV、IV fluid resuscitation、NPO、監測 vital signs",
      "Vital sign 不穩 / 腹腔內出血：緊急 laparoscopy salpingostomy 或 salpingectomy",
      "穩定 + 小（< 3.5 cm）+ no FHB + β-hCG < 5000：methotrexate（MTX）50 mg/m² IM single dose，D4、D7 追 β-hCG",
      "Rh(-) 給 anti-D immunoglobulin（RhoGAM）；衛教避孕 3 個月後再懷孕、下次懷孕早期確認 IUP"
    ],
    redFlags: [
      "β-hCG > 1500 + empty uterus → ectopic",
      "Hemodynamic 不穩 → 急開"
    ]
  },

  {
    id: "RM-30",
    source: "remnote",
    age: 32,
    sex: "F",
    department: "婦",
    system: "婦產",
    chiefComplaint: "結婚 2 年未孕",
    vignette: "32 歲女性，結婚 2 年未避孕未孕。月經規則。先生 35 歲健康。",
    history: [
      "婦產科必問性孕經分片 + 性行為頻率、是否抓排卵期、避孕史、GPA",
      "infertility（不孕）定義：< 35 歲未避孕 1 年、≥ 35 歲 6 個月未孕",
      "婦科：PID 史、endometriosis、手術、abortion、月經規則度、痛經",
      "男方：sperm analysis、varicocele、感染、環境暴露、職業",
      "全身：thyroid 症狀、galactorrhea、多毛/痘/體重變化（PCOS、prolactinoma）、家族 DM/甲狀腺"
    ],
    pe: [
      "Vital signs + BMI + BP + 腰臀圍、hirsutism score、acanthosis nigricans",
      "甲狀腺觸診 + 乳房檢查 + galactorrhea",
      "Pelvic exam：子宮大小、adnexal mass、endometriosis nodule",
      "Bedside：TVS 看 ovary morphology、antral follicle count",
      "Workup：Day 3 FSH/LH/E2、AMH、TSH、prolactin、HSG（hysterosalpingography）、semen analysis"
    ],
    ddx: [
      "Anovulation（PCOS、hypothalamic）",
      "Tubal factor（PID）",
      "Endometriosis",
      "Male factor（30%）",
      "Unexplained（10-15%）"
    ],
    explanation: [
      "infertility（不孕）定義：< 35 歲未避孕 1 年未孕；≥ 35 歲半年未孕",
      "原因分布：女性因素 40%、男性因素 30%、雙方 20%、unexplained 10-15%",
      "女性主因：anovulation（PCOS）、tubal factor（PID 後遺症）、endometriosis、age-related ovarian reserve decline",
      "男性主因：oligospermia / azoospermia、varicocele、ductal obstruction",
      "男女需同時評估，不可只查女方；年齡越大成功率下降快，> 35 歲建議及早轉介"
    ],
    treatment: [
      "詳細病史 + PE：月經、性生活頻率、過去懷孕、STD、手術、生活習慣、BMI",
      "女性 workup：BBT（basal body temperature）、midluteal progesterone、AMH、Day 3 FSH/LH/E2、TSH、prolactin、HSG",
      "男性 workup：semen analysis（首要、便宜、非侵入）",
      "Anovulation：letrozole（Femara）2.5-5 mg PO QD D3-7 first-line，或 clomiphene citrate（Clomid）",
      "Tubal factor：laparoscopy 或 IVF；Endometriosis：手術 ± IVF；Male factor：IUI 或 ICSI",
      "衛教：排卵期前後 q2d 性行為、戒菸酒、體重控制（BMI 20-25）、葉酸 0.4 mg QD、及早轉不孕專科"
    ],
    redFlags: [
      "≥ 35 yo + 6 個月未孕 → 立即 workup",
      "AMH 過低 → 速送 ART"
    ]
  },

  {
    id: "RM-31",
    source: "remnote",
    age: 28,
    sex: "F",
    department: "婦",
    system: "婦產/內分泌",
    chiefComplaint: "月經不規則 + 多毛 + 痘",
    vignette: "28 歲 BMI 30 女性，月經 2-3 個月一次、下巴/腹中線有粗毛、青春痘。",
    history: [
      "婦產科必問性孕經分片：月經 pattern、LMP、週期長度、量、避孕、懷孕史",
      "Hyperandrogenism：hirsutism（Ferriman-Gallwey score）、acne、androgenic alopecia、聲音變化",
      "代謝：體重變化 + BMI、insulin resistance 症狀（acanthosis nigricans）、家族 DM",
      "不孕史、排卵相關症狀（mittelschmerz、BBT biphasic）",
      "排除其他高 androgen：快速進展、virilization（提示 tumor）、Cushing 徵（moon face、紫紋）、CAH（congenital adrenal hyperplasia）"
    ],
    pe: [
      "Vital signs + BMI + BP + 腰臀圍",
      "Hirsutism score（Ferriman-Gallwey）、acne 分布、androgenic alopecia、acanthosis nigricans",
      "甲狀腺觸診 + galactorrhea 擠壓測試",
      "Pelvic exam + 腹部（排 adrenal/ovarian mass）",
      "Bedside：TVS 看 polycystic ovary morphology（≥ 12 follicles 2-9 mm 或 ovarian volume > 10 mL）"
    ],
    ddx: [
      "PCOS（Rotterdam 2/3）",
      "Adrenal hyperplasia",
      "Cushing syndrome",
      "Androgen-secreting tumor",
      "Hypothyroidism / hyperprolactinemia"
    ],
    explanation: [
      "PCOS（polycystic ovary syndrome，多囊性卵巢症候群）是育齡女性最常見內分泌疾病，盛行率 5-10%",
      "Rotterdam criteria 三選二：oligo/anovulation、hyperandrogenism（多毛/痤瘡/雄性素高）、polycystic ovary on US",
      "病態核心：insulin resistance + 高雄性素 → 月經不規則、不孕、代謝症候群、肥胖",
      "長期風險：endometrial cancer（unopposed estrogen）、T2DM、心血管疾病、NAFLD、sleep apnea",
      "需排除其他高雄性素原因（CAH、Cushing、androgen-secreting tumor、hypothyroidism、hyperprolactinemia）",
      "生活調整 + 規則治療可改善月經、生育與代謝結局，減重 5-10% 即能恢復排卵"
    ],
    treatment: [
      "Workup：LH/FSH、total/free testosterone、DHEAS、17-OHP（排 CAH）、prolactin、TSH、fasting glucose/HbA1c、lipid panel",
      "Pelvic US：polycystic ovary morphology；疑 Cushing 加 dexamethasone suppression test、24h urine cortisol",
      "不想懷孕 + 月經不規則：combined OCP（規則月經 + 抗 androgen，如 drospirenone-containing）",
      "想懷孕：letrozole 2.5 mg PO QD D3-7 first-line；second-line clomiphene citrate 或 metformin 合併",
      "Insulin resistance / BMI ≥ 25：metformin（Glucophage）500 mg PO BID 起，漸調至 1500-2000 mg/day",
      "多毛：spironolactone（Aldactone）100 mg PO QD（需避孕配合）+ 雷射除毛；衛教減重 5-10%、低 GI 飲食、規則運動、定期篩 DM/HTN/dyslipidemia"
    ],
    redFlags: [
      "長期 unopposed estrogen → 內膜癌風險，週期性 progesterone",
      "Insulin resistance → metformin"
    ]
  },

  {
    id: "RM-32",
    source: "remnote",
    age: 35,
    sex: "F",
    department: "婦",
    system: "婦產",
    chiefComplaint: "右下腹間歇隱痛 + 月經規則",
    vignette: "35 歲女性，例行健康檢查 TVS 發現右側 6 cm 卵巢囊腫。最近偶有 RLQ 隱痛。",
    history: [
      "婦產科必問性孕經分片 + LMP、GPA、避孕、停經狀態",
      "腹痛 LQQOPERA：位置（RLQ）、急性突發（torsion 線索）、性質、與月經週期關係",
      "月經 pattern、痛經、不孕史、dyspareunia（endometriosis 線索）",
      "家族史：ovarian / 乳癌（BRCA）、Lynch syndrome",
      "內分泌症狀：異常出血、hirsutism、體重變化；停經後出血為紅旗"
    ],
    pe: [
      "Vital signs",
      "腹部：視聽叩觸、mass palpation、rebounding/guarding（排 torsion/rupture）",
      "Pelvic bimanual：adnexal mass size、mobility、tenderness、bilateral",
      "Speculum：cervix、vaginal mucosa",
      "Bedside：TVS + β-hCG（排懷孕）+ CA-125（停經後較有意義）+ tumor markers"
    ],
    ddx: [
      "Functional cyst（< 5 cm，月經期消退）",
      "Endometrioma",
      "Dermoid（mature teratoma）",
      "Cystadenoma（mucinous / serous）",
      "Ovarian malignancy（停經後 + 大）"
    ],
    explanation: [
      "ovarian cyst（卵巢囊腫）育齡女性常見，多數為 functional cyst（follicular / corpus luteum），多自行消退",
      "> 5 cm、複雜性（septation、solid component、ascites）、停經後出現需積極評估排惡性",
      "鑑別：endometrioma（chocolate cyst）、dermoid（mature teratoma）、cystadenoma、malignancy",
      "併發症：rupture（急性腹痛）、ovarian torsion（缺血壞死 6 hr 內搶救黃金期）、感染、惡性變化",
      "本案育齡 + 6 cm + 隱痛：依 IOTA/O-RADS 判讀影像，觀察或手術視 risk profile",
      "整體預後：良性佔絕大多數，及早發現惡性 5 年存活率佳"
    ],
    treatment: [
      "Workup：pelvic exam + TVS（評估大小、structure、bilateral、ascites、Doppler）",
      "Lab：β-hCG（排懷孕）、CBC、CA-125（停經後較有意義）、CEA、CA19-9（排 mucinous）",
      "Simple cyst < 5 cm 育齡：3-6 個月後追蹤 TVS；5-10 cm：每年 TVS 追蹤",
      "複雜性 / > 10 cm / 停經後 / 症狀明顯：MRI 進一步評估，考慮 laparoscopic cystectomy",
      "Suspected malignancy（IOTA/O-RADS 高風險）：轉婦癌科、完整分期手術",
      "Acute torsion / rupture with hemodynamic instability：emergent laparoscopy；衛教紅旗症狀（劇烈腹痛、發燒、大量出血、頭暈）立即回診"
    ],
    redFlags: [
      "突發劇痛 + adnexal mass → 排 torsion（< 6 hr salvage）",
      "停經後 + 大 + CA-125 高 → 急轉婦癌"
    ]
  },

  {
    id: "RM-33",
    source: "remnote",
    age: 26,
    sex: "F",
    department: "婦",
    system: "婦產",
    chiefComplaint: "懷孕 10 週 + 陰道出血",
    vignette: "26 歲懷孕 10 週初產婦，今晨陰道少量鮮紅出血 + 輕微下腹悶痛。Urine pregnancy (+)。",
    history: [
      "婦產科必問性孕經分片 + GPA（G1P0）+ LMP + 預產期（EDC）",
      "出血 LQQOPERA：出血量（幾片衛生棉/小時）、性質（鮮紅/暗紅）、blood clot、組織排出",
      "腹痛與 cramping：位置、強度、規則性（排產兆）",
      "誘因：trauma、性行為、vaginitis、近期運動",
      "Risk：fibroid、IUD、DM、AMA（advanced maternal age）、過去流產史、抗磷脂症候群"
    ],
    pe: [
      "Vital signs（警覺 hypovolemic shock）",
      "腹部：子宮大小、壓痛、contractions",
      "Speculum：cervical os open / closed、出血量、組織排出、羊水",
      "Bimanual（確認 os 狀態後）",
      "Bedside：TVS（fetal heart beat、subchorionic hemorrhage）+ quantitative β-hCG serial"
    ],
    ddx: [
      "Threatened abortion（os closed + fetal HR (+)）",
      "Inevitable / incomplete abortion",
      "Missed abortion",
      "Ectopic pregnancy",
      "Molar pregnancy"
    ],
    explanation: [
      "first trimester bleeding（第一三月出血）發生率 20-30%，其中半數會 spontaneous abortion（自然流產）",
      "鑑別：threatened（胚胎活、子宮頸口閉）/ inevitable（os 開）/ incomplete / missed / complete abortion",
      "必須排除 ectopic pregnancy 與 molar pregnancy（gestational trophoblastic disease）",
      "Threatened abortion 約 50% 可繼續懷孕至足月；fetal heart beat 見到後流產率降至 < 5%",
      "追蹤 β-hCG（正常每 48 hr 翻倍）+ TVS 看胎心；本案少量出血 + 輕微悶痛，最可能 threatened abortion"
    ],
    treatment: [
      "Workup：Pelvic speculum 看 os 開閉、出血量、組織排出；bimanual 評估子宮大小",
      "Lab：quantitative β-hCG、CBC、blood type & Rh、cross-match if 出血多",
      "Imaging：TVS 評估胚胎大小、fetal heart beat、subchorionic hemorrhage、yolk sac",
      "Threatened abortion：observation、pelvic rest（避免性生活）、bed rest 證據不強但可考慮",
      "Inevitable / incomplete / missed：misoprostol（Cytotec）800 μg PV 或 suction D&C",
      "Rh(-)：anti-D immunoglobulin（RhoGAM）50-300 μg IM 依孕週；衛教紅旗（大量出血 > 1 pad/hr、劇痛、發燒、組織排出）立即回診 + 心理支持"
    ],
    redFlags: [
      "大量出血 + shock → 急 D&C + transfusion",
      "Rh(-) → RhoGAM"
    ]
  },

  {
    id: "RM-34",
    source: "remnote",
    age: 30,
    sex: "F",
    department: "婦",
    system: "婦產",
    chiefComplaint: "懷孕 32 週產檢",
    vignette: "30 歲 G1P0，懷孕 32 週例行產檢。",
    history: [
      "婦產科必問性孕經分片 + GPA（G1P0）+ LMP + EDC（expected date of confinement）",
      "本次孕程：產檢史、超音波報告、OGTT（oral glucose tolerance test）、GBS（group B Streptococcus）篩檢、唐氏症篩檢",
      "症狀：fetal movement（胎動）、出血、分泌物、子宮收縮、腰痠、水腫",
      "用藥 + 葉酸 + 鐵劑 + 鈣；過去疾病、手術、過敏",
      "Risk：HTN、DM、AMA、家族 preeclampsia/DM、前胎產科併發症"
    ],
    pe: [
      "Vital signs + 體重變化 + BP（警覺 preeclampsia）",
      "Fundal height 測量（cm ≈ 孕週數 ± 2）",
      "Leopold 4 maneuver 確認胎位、fetal heart rate（doppler，正常 110-160 bpm）",
      "水腫（pretibial、facial）、DTR（deep tendon reflex）排 preeclampsia",
      "Bedside：urine dipstick（蛋白、糖）+ NST（nonstress test）if indicated"
    ],
    ddx: [
      "正常孕程",
      "Gestational HTN / preeclampsia",
      "GDM",
      "FGR / 大為孕齡",
      "Preterm labor / PROM"
    ],
    explanation: [
      "32 週例行產檢需同時評估母體與胎兒兩面",
      "母體重點：BP、體重、尿蛋白/尿糖、symphysis-fundal height、preterm labor 徵象、水腫",
      "胎兒重點：胎心、胎動、胎位、estimated fetal weight、growth percentile",
      "32 週為 late preterm 邊緣，需監測 preterm labor、PROM（premature rupture of membranes）、preeclampsia、GDM 控制",
      "G1P0 初產婦更需詳細衛教生產徵兆、母乳哺餵、新生兒準備",
      "規律產檢可及早發現高危狀況，降低母嬰不良結局"
    ],
    treatment: [
      "Workup：BP、體重、宮高、FHR（110-160 bpm）、Leopold maneuver 確認胎位、urine dipstick（蛋白、糖）",
      "胎兒評估：fetal kick count（每天固定時段，2 hr 內 ≥ 10 次）；高危群加 fetal growth scan、umbilical artery Doppler、NST",
      "必要時 CBC、UA、BP 系列；疑 preeclampsia 加 LFT、uric acid、protein/creatinine ratio",
      "疫苗：Tdap（tetanus-diphtheria-acellular pertussis）27-36 週每次懷孕都打、流感疫苗（季節中）、RSV 疫苗（32-36 週）",
      "Screening：Group B Strep 直腸陰道拭子 35-37 週；若陽性待產時 intrapartum penicillin",
      "衛教：胎動計數、preterm labor 徵兆（規則宮縮、出血、破水）、preeclampsia 警訊（頭痛、視力模糊、上腹痛、劇烈水腫）立即回診、母乳準備、生產計畫、待產包"
    ],
    redFlags: [
      "BP > 140/90 + 蛋白尿 → preeclampsia 評估",
      "Fetal movement 減少 → NST"
    ]
  },

  {
    id: "RM-35",
    source: "remnote",
    age: 32,
    sex: "F",
    department: "婦",
    system: "婦產",
    chiefComplaint: "懷孕 34 週 + 高血壓 + 蛋白尿",
    vignette: "32 歲 G2P1，34 週。產檢 BP 160/100 + 尿蛋白 (+++) + 頭痛 + 視力模糊。",
    history: [
      "婦產科必問性孕經分片：GPA、LMP、產檢週數、本次孕前 BP 基線與慢性病",
      "血壓症狀 LQQOPERA：頭痛位置與持續時間、視力模糊、視野缺損、閃光感",
      "severe features 紅旗：上腹或右上腹痛（HELLP）、抽搐、呼吸喘（肺水腫）、尿量",
      "胎兒狀況：胎動次數、子宮收縮、陰道出血或水樣分泌（abruption、PROM）",
      "內外敏藥住個家 + risk factors：AMA、初產、肥胖、CKD、DM、preeclampsia 家族史"
    ],
    pe: [
      "Vital signs：兩次間隔 4 hr BP ≥ 160/110、HR、RR、SpO2、每日體重變化",
      "神經學：視野、fundoscopy、DTR hyperreflexia、ankle clonus、意識狀態",
      "腹部：epigastric / RUQ tenderness（HELLP）、子宮底高度、壓痛、contraction",
      "胎兒評估：fetal heart rate、Leopold maneuver、NST 確認 reactive",
      "下肢 pitting edema、尿蛋白 dipstick、聽診 lung crackles（pulmonary edema）"
    ],
    ddx: [
      "Severe preeclampsia",
      "HELLP syndrome（hemolysis + ↑LFT + ↓plt）",
      "Eclampsia（+ seizure）",
      "Chronic HTN with superimposed preeclampsia",
      "Acute fatty liver"
    ],
    explanation: [
      "preeclampsia（子癇前症）是懷孕 20 週後新發的高血壓加蛋白尿，來自胎盤血管發育異常",
      "病態機轉是胎盤缺血釋放抗血管新生因子造成全身血管內皮失調、血壓飆高、多器官受損",
      "頭痛、視力模糊是腦部水腫警訊；上腹痛、血小板下降是 HELLP 肝臟受損",
      "不治療可能抽搐（eclampsia）、中風、胎盤早期剝離、肺水腫、母胎死亡",
      "根本治療是娩出胎盤；34 週後穩定即可生產，多數控制得當預後良好"
    ],
    treatment: [
      "立即住院 + IV access + 連續 BP/胎心監測；查 CBC、LFT、LDH、BUN/Cr、UA、spot urine P/Cr",
      "降壓（target 140-150/90-100）：labetalol 20 mg IV 或 hydralazine 5-10 mg IV q20min，口服 nifedipine 10 mg",
      "Seizure prophylaxis：MgSO4 4-6 g IV loading 20 min 後 2 g/hr maintenance，監測 DTR、RR、尿量",
      "Mg toxicity 給 calcium gluconate 1 g IV 解毒；< 34 週加 betamethasone 12 mg IM q24h x 2",
      "Delivery：≥ 37 週、severe features ≥ 34 週、eclampsia/HELLP/胎兒窘迫立即生產",
      "衛教：產後至少 24-48 hr 持續 MgSO4、回診追蹤 BP 至 12 週，下次懷孕孕 12 週前起 aspirin 100 mg"
    ],
    redFlags: [
      "Severe → MgSO4 prophylaxis + BP 控制 + 立即終止妊娠（≥ 34 wk）",
      "Eclampsia / HELLP → ICU"
    ]
  },

  {
    id: "RM-36",
    source: "remnote",
    age: 25,
    sex: "M",
    department: "急",
    system: "外傷",
    chiefComplaint: "車禍多發性外傷",
    vignette: "25 歲機車騎士被汽車撞，多處擦傷 + 右下肢變形 + 神智清楚但呼吸快。",
    history: [
      "AMPLE：Allergy、Medication、Past history、Last meal、Event（受傷機轉）",
      "Mechanism：車速、撞擊方向、安全帽、是否噴飛、現場 LOC、抽搐、嘔吐",
      "疼痛 LQQOPERA：位置、性質、放射、移動時是否加重（疑骨折）",
      "出血線索：頭暈、冷汗、口渴、尿量減少（hemorrhagic shock 早期）",
      "Prehospital 處置：止血、固定、IV fluid、鎮痛與使用藥物"
    ],
    pe: [
      "Vital signs：BP、HR、RR、SpO2、GCS（Glasgow Coma Scale）、體溫",
      "Primary survey ABCDE：A 氣道 + C-spine、B 呼吸音對稱、C 大出血、D 神經、E 暴露",
      "胸部：tracheal deviation、JVD、皮下氣腫、flail chest（tension pneumothorax 線索）",
      "腹部：distension、bruising、guarding；骨盆穩定度一次輕壓測試",
      "右下肢：deformity、開放傷、distal pulse、capillary refill、sensation、motor"
    ],
    ddx: [
      "Tension pneumothorax（必排於 B）",
      "Hemorrhagic shock（C）",
      "Cardiac tamponade",
      "Massive hemothorax",
      "Open pelvic fracture"
    ],
    explanation: [
      "多發性外傷依 ATLS（Advanced Trauma Life Support）原則 ABCDE primary survey 排除立即致命傷",
      "機車外傷常見致命原因：head injury、tension pneumothorax、massive hemothorax、hemorrhagic shock、pelvic fracture",
      "呼吸快加神智清楚可能是代償性 class II hemorrhagic shock，不可因清醒而鬆懈",
      "若未及時止血與輸血，golden hour 內會進展為不可逆休克；下肢開放骨折合併感染風險高",
      "Tension pneumothorax、cardiac tamponade 是可立即逆轉的死因，床邊 FAST + CXR 立刻判斷"
    ],
    treatment: [
      "Primary survey ABCDE：airway + C-spine 固定、bilateral breath sound、大出血加壓、GCS、全身暴露保暖",
      "兩條 large-bore IV + CBC、type & cross-match、PT/INR、ABG、lactate、ECG、β-hCG（女性）",
      "床邊 FAST + CXR + pelvis XR；Tension PTX → needle decompression 2nd ICS MCL 再放 chest tube",
      "Hemorrhagic shock：crystalloid 1 L bolus、MTP（massive transfusion protocol） 1:1:1 PRBC:FFP:platelet、TXA 1 g IV 3 hr 內",
      "骨盆骨折疑似 → pelvic binder；下肢骨折 splint、開放傷 cefazolin 2 g IV + tetanus toxoid",
      "Secondary survey head-to-toe、trauma CT pan-scan，依結果分流開刀房 / ICU / 骨科"
    ],
    redFlags: [
      "GCS↓ → 插管",
      "shock + FAST (+) → 急開腹",
      "Pelvic fracture + shock → binder + angio"
    ]
  },

  {
    id: "RM-37",
    source: "remnote",
    age: 70,
    sex: "M",
    department: "外",
    system: "腸胃",
    chiefComplaint: "腹脹 + 不解大便 3 天 + 嘔吐",
    vignette: "70 歲男性，腹部開過刀（5 年前 colon CA）。3 天腹脹、不解氣便 + 噁心嘔吐 + 絞痛。",
    history: [
      "腹痛 LQQOPERA：絞痛陣發、位置、放射、與進食關係、最後一次排氣排便",
      "嘔吐性質：feculent（晚期）、膽汁色；口服耐受度固體 vs 液體",
      "老年 ADL + 內外敏藥住個家：colon CA surgery 5 年前、放化療、抗凝血藥、allergy",
      "Red flags：體重減輕、糞便變細、血便、夜間痛醒（recurrence 線索）",
      "腹部手術史、hernia 史、IBD 史、腹膜炎或 TB 腹膜炎史"
    ],
    pe: [
      "Vital signs：tachycardia、hypotension、dry mucosa、skin turgor（dehydration）",
      "腹部視聽叩觸：distension、surgical scar、high-pitched → silent bowel sound、tympanic",
      "Hernia 點檢查：inguinal、femoral、umbilical、incisional；peritoneal sign、rebound、guarding",
      "DRE（digital rectal exam）：rectal mass、blood、empty rectum",
      "床邊 workup：upright + supine KUB 看 air-fluid level、dilated loop；POCUS 評估"
    ],
    ddx: [
      "Mechanical SBO（adhesion 最常見）",
      "Recurrent / metastatic colon CA causing obstruction",
      "Hernia incarceration",
      "Volvulus",
      "Paralytic ileus"
    ],
    explanation: [
      "small bowel obstruction（小腸阻塞，SBO）成人最常見原因是術後 adhesion（沾黏，60%），其次 hernia、tumor",
      "有 colon CA 手術史，adhesion 機率高，但須排除 cancer recurrence 造成再阻塞",
      "腸道近端脹氣積液造成腹脹嘔吐，遠端不通形成 obstipation（完全不排氣排便）",
      "若持續脹大、腸壁缺血可進展為 strangulation、穿孔、敗血症、死亡",
      "完全阻塞或 closed-loop 是外科急症需手術；部分阻塞多可 NG 減壓保守治療成功"
    ],
    treatment: [
      "Workup：CBC、electrolyte、BUN/Cr、lactate、ABG、PT/INR、type & cross-match、CEA（追 recurrence）",
      "影像：upright + supine abdominal XR 看 air-fluid level；contrast CT 找 transition point、closed loop、strangulation",
      "NPO + NG tube 減壓 + Foley 監測尿量；IV fluid resuscitation 矯正 K、Cl",
      "保守：部分阻塞可 Gastrografin challenge 50-100 mL 口服或 NG，24 hr 未下降考慮手術",
      "手術：closed loop、strangulation、完全阻塞、保守失敗 24-48 hr → lysis of adhesion 或 segmental resection",
      "衛教：復發風險高、出現發燒/劇痛/嘔吐立即回診，並追蹤 CEA 與大腸鏡監測 recurrence"
    ],
    redFlags: [
      "Strangulation 線索（fever、peritoneal sign、lactate↑）→ 急開",
      "Closed-loop obstruction → 急 surgery"
    ]
  },

  {
    id: "RM-38",
    source: "remnote",
    age: 65,
    sex: "M",
    department: "急",
    system: "肝臟/腫瘤",
    chiefComplaint: "HCC 患者突發劇烈腹痛 + 血壓不穩",
    vignette: "65 歲男性，HCC 已知 8 cm 左葉。今晨突發劇烈腹痛 + 冷汗 + BP 80/50。",
    history: [
      "腹痛 LQQOPERA：突發性質、位置（多在右上腹）、放射至肩、強度",
      "HCC（hepatocellular carcinoma）病史：大小位置、過去 TACE、surgery、targeted therapy",
      "出血線索：頭暈、冷汗、昏厥、血便、黑便、咖啡色嘔吐",
      "Trauma 即使輕微：咳嗽、用力、跌倒都可誘發 subcapsular rupture",
      "用藥：抗凝血藥、aspirin、NSAID；肝硬化併 varices 狀況"
    ],
    pe: [
      "Vital signs：hypovolemic shock 指標 BP 80/50、HR > 120、cold extremities",
      "腹部：distension、rebound、guarding、shifting dullness（hemoperitoneum）",
      "肝脾觸診：palpable mass、tender HCC nodule；皮膚觀察 jaundice、spider angioma",
      "床邊 FAST：Morison's pouch、splenorenal、pelvis free fluid 陽性",
      "床邊 lab：POC Hb、coagulation、type & cross-match 多備 blood"
    ],
    ddx: [
      "Spontaneous HCC rupture（必排）",
      "Variceal bleeding",
      "Aortic aneurysm rupture",
      "Splenic / hepatic abscess rupture",
      "Acute pancreatitis"
    ],
    explanation: [
      "spontaneous HCC rupture（自發性肝癌破裂）是 HCC 致命併發症，亞洲 HBV 相關 HCC 發生率 5-15%",
      "腫瘤內新生血管脆弱加上腫瘤體積大、被膜下位置，易破裂出血到腹腔",
      "典型表現：突發劇烈腹痛、hypovolemic shock、已知 HCC 病史三聯徵",
      "不處理 30 天死亡率 25-75%，死因為失血性休克與腹膜刺激",
      "緊急 TAE（transcatheter arterial embolization）止血成功率 > 80%，穩定後可再評估 staged hepatectomy"
    ],
    treatment: [
      "立即 ABC：兩條 large-bore IV、O2、monitor、Foley 量尿；查 CBC、PT/INR、LFT、AFP、ABG、lactate",
      "Type & cross-match 多備血 6-10 U PRBC；啟動 MTP（massive transfusion protocol）1:1:1",
      "FAST 或 contrast CT 確認 hemoperitoneum + active contrast extravasation",
      "First-line 止血：emergent TAE（transarterial embolization），成功率 > 80%",
      "TAE 失敗或不可用：emergency hepatic resection 或 perihepatic packing damage control",
      "穩定後 staged hepatectomy 或 TACE；衛教 HCC 患者突發劇痛立即就醫，並與家屬討論 goals of care"
    ],
    redFlags: [
      "Active bleeding → 急 TAE（transarterial embolization）",
      "Shock → 大量輸血 protocol"
    ]
  },

  {
    id: "RM-39",
    source: "remnote",
    age: 50,
    sex: "M",
    department: "急",
    system: "腸胃",
    chiefComplaint: "上腹劇痛穿透至背 + 嘔吐",
    vignette: "50 歲男性，每天高粱半瓶。今天宿醉後上腹劇痛穿透至背、嘔吐、屈膝姿勢稍緩。",
    history: [
      "腹痛 LQQOPERA：上腹、穿透至背、屈膝或前傾緩解（pancreatitis 典型）",
      "誘因：alcohol 每日高粱半瓶、gallstone 史、高 TG、ERCP、藥物（azathioprine、thiazide）",
      "嘔吐 + 食慾：頻率、內容、是否咖啡色血絲、進食後是否加劇",
      "內外敏藥住個家：DM、hyperlipidemia、gallstone、pancreatitis attacks、家族史",
      "紅旗：發燒、黃疸（gallstone）、呼吸喘（ARDS）、少尿（AKI）、意識變化"
    ],
    pe: [
      "Vital signs：fever、HR > 90、RR > 20、BP、SpO2（SIRS 指標）",
      "腹部：上腹 tenderness、guarding、rebound、bowel sound 減弱；Cullen sign、Grey-Turner sign（severe）",
      "黃疸：sclera、skin；肝觸診；murphy sign（cholangitis 合併）",
      "肺部：basal crackles、pleural effusion（common in severe pancreatitis）",
      "床邊 workup：lipase / amylase > 3x ULN、ABG、POCUS 看 gallstone 與 free fluid"
    ],
    ddx: [
      "Acute pancreatitis（alcohol / gallstone）",
      "Perforated peptic ulcer",
      "Acute cholangitis",
      "Mesenteric ischemia",
      "AAA rupture"
    ],
    explanation: [
      "acute pancreatitis（急性胰臟炎）兩大原因：gallstone（40%）與 alcohol（30%），酒精為本案主因",
      "病態是胰臟消化酵素提早在胰內活化，造成自我消化、發炎、水腫甚至壞死",
      "疼痛典型穿透至背、屈膝緩解，伴嘔吐與食慾下降；Atlanta criteria 三選二即可診斷",
      "輕度 80% 自限可恢復；重度可進展 SIRS、ARDS、AKI、infected necrosis、multiorgan failure",
      "30 天死亡率輕度 < 1%、重度 > 15%；戒酒與控制 TG 可大幅降低復發"
    ],
    treatment: [
      "Workup：lipase（首選）、amylase、CBC、BUN/Cr、glucose、Ca、LDH、AST/ALT、ALP、bilirubin、TG、ABG",
      "影像：abdominal US 找 gallstone + CBD 擴張；severe 或不明診斷 → contrast CT（發病 72 hr 後評估壞死）",
      "嚴重度評分：BISAP、Marshall、Atlanta classification，Ranson ≥ 3 或 SIRS → ICU",
      "Aggressive IV fluid：lactated Ringer's 5-10 mL/kg/hr 前 24 hr，target UO > 0.5 mL/kg/hr",
      "Pain control：IV opioid（fentanyl 25-50 mcg 或 morphine），meperidine 不推薦；早期 enteral feeding 24-72 hr",
      "Alcoholic 加 thiamine 100 mg IV + folate；衛教戒酒（AA referral）、低脂飲食、TG < 500 mg/dL"
    ],
    redFlags: [
      "Ranson ≥ 3 / SIRS → ICU",
      "Necrotizing + 感染 → debridement"
    ]
  },

  {
    id: "RM-40",
    source: "remnote",
    age: 65,
    sex: "M",
    department: "外",
    system: "外科/氣道",
    chiefComplaint: "氣切病人術後居家照護衛教",
    vignette: "65 歲男性，因 head & neck cancer 接受 tracheostomy 1 週，準備出院。",
    history: [
      "氣切原因：head & neck cancer 腫瘤位置、術式、是否 permanent vs 暫時",
      "老年 ADL + 家庭照顧能力：主要照顧者、suction 操作熟練度、居家清潔環境",
      "設備配置：suction machine、備用 tube、人工鼻、加濕器、O2、ambu bag、緊急聯絡",
      "症狀監測：分泌物量/顏色、呼吸喘、發燒、stoma 周圍紅腫、出血",
      "口語與吞嚥訓練：speech valve 使用、吞嚥評估、follow-up 排程"
    ],
    pe: [
      "Stoma 觀察：紅腫、granulation、出血、分泌物性質與量",
      "Tube 位置：cuff 壓力、通暢度、內管抽出清洗、外管固定帶鬆緊度",
      "肺部聽診：bilateral breath sound、wheezing、crackles；分泌物堆積線索",
      "Vital signs + SpO2 + 呼吸型態、accessory muscle use",
      "口腔與吞嚥：oral hygiene、gag reflex、飲水測試（若已訓練）"
    ],
    ddx: [
      "教學重點：suction、tube cleaning、stoma care、emergency（tube 脫落 → 重置）",
      "併發症：阻塞、感染、出血、tracheoesophageal fistula、stenosis",
      "緊急處置：dislodgement → cover with gauze + bag-valve-mask + 急 ENT",
      "Decannulation criteria",
      "Speech / swallow rehab 轉介"
    ],
    explanation: [
      "tracheostomy（氣切）是在頸前氣管切口置入套管，建立替代呼吸道以繞過上呼吸道阻塞",
      "適應症包含 head & neck cancer 腫瘤壓迫、長期呼吸器依賴、反覆吸入性肺炎",
      "套管繞過聲帶，初期無法正常發聲，需語言治療與 speech valve 協助",
      "氣道直接通外界，少了鼻腔加溫加濕功能，痰液易乾結阻塞，須規律 suction 與加濕",
      "長期照顧得當預後良好，多數可逐步 decannulation（移除套管）恢復自然呼吸"
    ],
    treatment: [
      "Suction：無菌技術、每次 < 10 秒、先 O2 預氧合、痰多時 q2-4h，避免深度超過 tube 末端",
      "Tube cleaning：內管每日清洗 2-3 次；stoma 每日換藥用 0.9% saline 保持乾燥",
      "緊急脫管處置：< 7 d 不強行重置（false tract）→ 紗布覆蓋 + bag-valve-mask 從口鼻給氧 + 立即 call ENT",
      "併發症監測：阻塞、感染、granulation、出血、tracheoesophageal fistula、tracheal stenosis",
      "衛教：保持氣道濕潤（人工鼻/蒸氣）、洗澡防水、外出帶備用套管與 ambu bag、突發出血警訊就醫",
      "後續：speech / swallow rehab 轉介、達 decannulation criteria（cuff-down 耐受、咳嗽強、分泌物少）後拔管"
    ],
    redFlags: [
      "Tube 脫落 < 7 d → 不要強行重置（false tract）→ bag mask + 急 ENT",
      "突發出血 + tube → tracheoinnominate fistula 急症"
    ]
  },

  {
    id: "2025-01",
    source: "2025",
    age: 55,
    sex: "M",
    department: "內",
    system: "Heme",
    chiefComplaint: "全身無力、疲勞、瘀斑",
    vignette: "中年男性，主訴全身無力、易倦怠數週，身上多處瘀斑（記不清何時開始）。桌上 lab：pancytopenia（WBC↓ Hb↓ Plt↓）、發燒、albumin↓、LDH↑、CRP 顯著上升。請做全身相關重點 PE（不需做鼠蹊部）。",
    history: [
      "症狀 LQQOPERA：無力、疲勞、瘀斑起始時間、進行性惡化或突發",
      "出血傾向：牙齦出血、鼻血、血尿、血便、月經量增加、點狀出血",
      "感染症狀：發燒、咽痛、咳嗽、尿路症狀、皮膚感染（neutropenia 線索）",
      "B symptoms：發燒 > 38°C、夜間盜汗、6 個月體重下降 > 10%",
      "內外敏藥住個家：化學/放射暴露、苯、農藥、近期輸血、旅遊、家族血液病"
    ],
    pe: [
      "Vital signs：fever、HR、BP、RR、SpO2；外觀蒼白與精神狀態",
      "皮膚：petechiae、ecchymosis、pallor、jaundice；指甲 pallor",
      "口腔：mucosal bleeding、ulcer、gingival hypertrophy（AML M5 線索）",
      "淋巴結：cervical、supraclavicular、axillary 觸診（鼠蹊跳過）",
      "腹部：hepatosplenomegaly、sternal tenderness；心肺：tachycardia、systolic flow murmur"
    ],
    ddx: [
      "Acute leukemia（AML / ALL）",
      "Aplastic anemia",
      "MDS（myelodysplastic syndrome）",
      "Lymphoma with marrow involvement",
      "Severe sepsis with DIC",
      "Vitamin B12 / folate deficiency（megaloblastic）"
    ],
    explanation: [
      "pancytopenia（全血球低下）= 白血球、紅血球、血小板三系同時下降",
      "白血球少導致易感染發燒，紅血球少造成疲倦無力，血小板少產生瘀斑出血",
      "病因可能是骨髓被異常細胞占據（leukemia、lymphoma）或骨髓衰竭（aplastic anemia、MDS）",
      "LDH↑、CRP↑ 加上發燒提示細胞快速代謝或合併感染，屬血液腫瘤急症",
      "Acute leukemia 若未治療數週至數月可致命，及時 induction chemo 有機會達到緩解"
    ],
    treatment: [
      "Workup：CBC/DC、peripheral blood smear、reticulocyte、LDH、uric acid、coagulation、B12/folate、HIV",
      "Bone marrow aspiration + biopsy + flow cytometry + cytogenetics + molecular panel 分型",
      "Febrile neutropenia（ANC < 500 + 發燒）：blood culture x 2 + cefepime 2 g IV q8h 或 piperacillin/tazobactam（Zosyn）4.5 g IV q6h",
      "輸血支持：Hb < 7 g/dL → PRBC；Plt < 10 K 或出血 → platelet transfusion；TLS 預防 allopurinol 300 mg PO",
      "Definitive：AML → cytarabine + daunorubicin 7+3 induction；ALL → multi-agent + CNS prophylaxis；aplastic anemia → ATG + cyclosporine 或 HSCT",
      "衛教：neutropenic precaution（避生食、人多場所）、口腔照護、出血預防、發燒立即就醫"
    ],
    redFlags: [
      "Pancytopenia + fever → febrile neutropenia 急症，empirical broad-spectrum Abx",
      "活動性出血 + Plt < 20K → 緊急輸血小板"
    ]
  },

  {
    id: "2025-02",
    source: "2025",
    age: 28,
    sex: "F",
    department: "內",
    system: "Rheum",
    chiefComplaint: "新診斷 SLE，準備結婚懷孕的衛教",
    vignette: "28 歲女性，最近被診斷 SLE，準備結婚並計畫懷孕。請給予飲食、工作生活、治療處置、懷孕用藥相關衛教，回答病人的疑問。",
    history: [
      "婦產科必問性孕經分片：性行為、避孕方式、GPA、LMP、月經規則度、計畫懷孕時程",
      "SLE（systemic lupus erythematosus）診斷時間、目前用藥（HCQ、prednisolone、MMF、cyclophosphamide）",
      "Disease activity：皮疹、關節痛、口腔潰瘍、脫髮、雷諾氏現象、發燒",
      "腎臟侵犯：泡尿、水腫、夜尿、BP、過去 UA 與 Cr 數值",
      "抗體：anti-Ro/La、anti-dsDNA、anti-phospholipid Ab、過去流產史、血栓史"
    ],
    pe: [
      "Vital signs：BP（preeclampsia 與 lupus nephritis 風險）",
      "皮膚：malar rash、discoid rash、photosensitivity、口腔潰瘍、脫髮",
      "關節：MCP、PIP、腕關節壓痛與腫脹；Jaccoud arthropathy",
      "心肺：pericardial friction rub、pleural friction rub、crackles",
      "腹部與下肢：hepatosplenomegaly、下肢 pitting edema（腎炎線索）"
    ],
    ddx: [
      "懷孕前必須控制 disease ≥ 6 個月 stable、無 active nephritis",
      "用藥調整：MMF / cyclophosphamide / methotrexate 致畸 → 停藥；HCQ 可繼續、prednisolone 低劑量可、azathioprine 可",
      "抗體檢查：anti-Ro/La → 新生兒 lupus、congenital heart block；APS → 流產、血栓",
      "懷孕風險：preeclampsia、preterm、IUGR、SLE flare、APS-related thrombosis",
      "生活：避日曬、規律作息、低鹽（若 HTN）、戒菸、避免感染",
      "工作：避過勞、壓力管理；高風險懷孕 → 產科 + 風免共照"
    ],
    explanation: [
      "SLE（systemic lupus erythematosus，系統性紅斑性狼瘡）是自體免疫疾病，免疫系統攻擊皮膚、關節、腎臟、血液、神經",
      "病程呈 flare 與 remission 交替，好發育齡女性，懷孕與雌激素變化可能誘發 flare",
      "anti-Ro/La (+) 可能導致新生兒 lupus 與 congenital heart block；APS (+) 易反覆流產與血栓",
      "若 active nephritis 下懷孕，母體 preeclampsia、preterm、IUGR 風險高，甚至腎功能惡化",
      "在疾病穩定 ≥ 6 個月加上多科共照下，多數可順利懷孕並產出健康寶寶"
    ],
    treatment: [
      "孕前評估：disease ≥ 6 個月 stable、無 active nephritis；查 anti-Ro/La、anti-dsDNA、complement、APS panel、BP、UA、Cr",
      "用藥調整：停 MMF、cyclophosphamide、methotrexate（致畸）；可續 hydroxychloroquine（Plaquenil） 200-400 mg/day、prednisolone < 7.5 mg/day、azathioprine",
      "預防：低劑量 aspirin 100 mg/day 從孕 12 週起（preeclampsia 預防）；APS (+) 加 LMWH（enoxaparin 40 mg SC QD）",
      "產檢：高危妊娠門診 + 風免共照；每月追蹤 BP、UA、anti-dsDNA、C3/C4；anti-Ro (+) → 胎兒心臟超音波 16-26 wk",
      "生活：嚴格防曬 SPF ≥ 50 + 帽子、規律作息、避過勞、戒菸、低鹽（若 HTN）、均衡飲食",
      "衛教：flare 警訊（皮疹、關節痛、發燒、蛋白尿、頭痛）立即回診；active nephritis 需先控制再懷孕"
    ],
    redFlags: [
      "Active lupus nephritis → 懷孕禁忌，需先控制",
      "APS + 反覆流產 → aspirin + LMWH 預防"
    ]
  },

  {
    id: "2025-03",
    source: "2025",
    age: 50,
    sex: "F",
    department: "外",
    system: "GI",
    chiefComplaint: "膽囊炎手術前衛教（lap chole）",
    vignette: "50 歲女性，急性膽囊炎安排腹腔鏡膽囊切除術。請解釋手術方式、術前準備、術後照顧，回答病人關於氣腹、恢復時間等細節。",
    history: [
      "確認診斷與 indication：acute cholecystitis、symptomatic gallstone、polyp > 1 cm",
      "麻醉評估：過敏、過去麻醉經驗、心肺疾病、OSA、ASA class",
      "抗凝血藥：aspirin、clopidogrel、warfarin、DOAC；出血傾向與家族出血病史",
      "內外敏藥住個家：DM、HTN、過去腹部手術（影響 port 位置）、懷孕可能",
      "禁食狀態：最後一次飲食時間、目前症狀（發燒、黃疸、嘔吐）"
    ],
    pe: [
      "Vital signs：fever、HR、BP、SpO2；體溫若 > 38.5°C 疑 cholangitis",
      "腹部：Murphy's sign、RUQ tenderness、guarding、rebound、palpable gallbladder",
      "皮膚與鞏膜：jaundice（總膽管結石或 cholangitis 線索）",
      "心肺評估：murmur、crackles，計算 ASA 與手術風險",
      "床邊：POC glucose、abdominal US 確認 gallstone、GB wall thickening、pericholecystic fluid"
    ],
    ddx: [
      "手術方式：腹腔鏡 4 個小傷口、鏡頭 + 器械，切除膽囊",
      "氣腹：CO2 撐開腹腔讓視野清楚（10–15 mmHg），術後可能肩膀痠痛（diaphragm 刺激）",
      "術前準備：禁食 8 hr、停 aspirin 5–7 d、術前抗生素",
      "術後恢復：當天可下床、隔天進食、住院 2–3 d、傷口照護、避免提重物 2–4 wk",
      "風險：bleeding、bile leak、bile duct injury、conversion to open（< 5%）、感染",
      "替代方案：保守治療 IV Abx + drainage（PTGBD），但易復發，最終仍需手術"
    ],
    explanation: [
      "acute cholecystitis（急性膽囊炎）是膽結石卡住膽囊管造成膽汁滯留加細菌感染發炎",
      "若不處理可進展為 gangrenous cholecystitis、perforation、cholangitis 甚至敗血症",
      "laparoscopic cholecystectomy（腹腔鏡膽囊切除）是標準治療，4 個小傷口、CO2 撐開腹腔操作",
      "術後膽汁由肝臟直接流入腸道，部分人初期會腹瀉或脹氣，多數 1-3 個月內適應",
      "治癒率高、復發風險低（無膽囊就無膽結石），整體預後良好"
    ],
    treatment: [
      "術前：禁食 8 hr、停 aspirin 5-7 d；術前 1 hr cefazolin 2 g IV 預防性抗生素；查 CBC、PT/INR、LFT、type & screen",
      "麻醉：全身麻醉 + 氣管插管；氣腹 CO2 壓力 10-15 mmHg，術後可能肩膀痠痛（diaphragm 刺激）",
      "術後恢復：當天可下床、隔天流質進食、住院 2-3 天、傷口照護、避免提重物 2-4 週",
      "風險告知：bleeding、bile leak、bile duct injury（< 0.5%）、conversion to open（< 5%）、surgical site infection",
      "替代方案：PTGBD（percutaneous transhepatic gallbladder drainage）+ IV antibiotics 僅適高麻醉風險者，易復發仍建議日後手術",
      "衛教：術後 1 個月低脂飲食、傷口紅腫流膿或發燒立即回診、1-2 週門診拆線與病理追蹤"
    ],
    redFlags: [
      "術中發現 anatomy 不清 → 改 open（避免 BDI）",
      "術後黃疸 + 腹痛 + 發燒 → 懷疑 bile duct injury / leak"
    ]
  },

  {
    id: "2025-04",
    source: "2025",
    age: 2,
    sex: "M",
    department: "小",
    system: "Neuro",
    chiefComplaint: "2 歲男童熱痙攣後家長衛教",
    vignette: "2 歲男童發燒後突發全身性抽搐約 2 分鐘自行緩解，意識恢復。家長焦慮詢問：下次怎麼處理？什麼情況要就醫？跟癲癇差別？以後會不會有慢性影響？",
    history: [
      "小兒必問「母生3A+吃喝拉動睡」：母孕史、生產史、過敏、疫苗、發展里程碑、活力食慾睡眠",
      "抽搐 LQQOPERA：持續時間、全身或局部、眼睛上吊、發紺、意識恢復時間",
      "發燒時程：何時開始、最高溫、退燒效果、感染源（耳鼻喉、尿路、腸胃）",
      "過去發作史、家族 febrile seizure（熱痙攣）或 epilepsy（癲癇）史",
      "neurodevelopment（神經發展）里程碑是否正常、近期接觸史與疫苗史"
    ],
    pe: [
      "Vital signs 含體溫、意識（AVPU）、活力評估",
      "神經學檢查：瞳孔、肌張力、肢體對稱、病理反射",
      "感染源 IPPA：耳鏡、咽喉、頸部僵硬（meningismus）、前囟",
      "皮膚檢查：roseola、HFMD（hand-foot-mouth disease）、petechiae、瘀斑",
      "bedside：血糖、若 < 6 個月或疑 meningitis 考慮 LP（lumbar puncture）"
    ],
    ddx: [
      "Simple febrile seizure：6 個月–5 歲、< 15 min、全身性、24 hr 內不再發作 → benign，不需 EEG / brain image",
      "下次處置：保持側躺、清呼吸道、勿放東西到口、計時、退燒（acetaminophen / ibuprofen）",
      "送醫時機：> 5 min、focal、24 hr 內反覆、意識不清、年齡 < 6 m 或 > 5 y、首次發作",
      "與癲癇差異：epilepsy = 無發燒誘因、反覆發作；febrile seizure 有發燒、長大會緩解",
      "預後：1/3 復發、< 5% 變 epilepsy、無慢性神經學後遺症",
      "預防：感染時積極退燒（但不能完全預防）"
    ],
    explanation: [
      "febrile seizure（熱痙攣）是 6 個月至 5 歲幼兒因發燒誘發的良性抽搐，與大腦發育未成熟有關",
      "因發燒速率上升使未成熟神經元同步放電，並非大腦本身有病變",
      "simple type（< 15 分鐘、全身性、24 小時內不再發作）預後極佳，不留後遺症",
      "與 epilepsy（癲癇）不同：epilepsy 無發燒誘因且反覆發作，febrile seizure 長大自然緩解",
      "復發率約三分之一，但轉為 epilepsy 的機率 < 5%，不影響智力與神經發展"
    ],
    treatment: [
      "Workup：simple febrile seizure 不需常規 EEG / brain image / LP，除非疑 meningitis 或 complex type",
      "急性處置：側躺防嗆、清呼吸道、勿放東西進口、計時、勿強壓肢體、拍影片給醫師看",
      "退燒：acetaminophen（Tylenol）10-15 mg/kg PO q4-6h 或 ibuprofen（Brufen）5-10 mg/kg PO q6-8h（≥ 6 個月）",
      "送醫時機：抽搐 > 5 分鐘、focal、24 hr 內反覆、意識久不清、< 6 個月或 > 5 歲、首次發作",
      "長期不需預防性 antiepileptic drug（AED，抗癲癇藥）；感染時積極退燒可減不適但無法完全預防",
      "衛教：家長辨識抽搐型態、紅旗警訊（postictal > 1 hr、complex seizure）立即回診"
    ],
    redFlags: [
      "Complex febrile seizure（> 15 min、focal、24 hr 內反覆）→ 須 work up",
      "意識持續不清 / postictal > 1 hr → meningitis / encephalitis"
    ]
  },

  {
    id: "2025-05",
    source: "2025",
    age: 38,
    sex: "F",
    department: "婦",
    system: "OB",
    chiefComplaint: "38 歲第一次產檢（高危妊娠）",
    vignette: "38 歲產婦，懷孕 20 週，G3P1A1，之前都在外面門診，今天第一次來產檢。已知 thalassemia trait、hypothyroidism。前胎 39 歲足月 NSD。今天 BP 140/85（高），但 urine protein (-)。請完成問診。",
    history: [
      "產科必問「性孕經分片」：性行為、避孕、GPA（G3P1A1）、LMP、月經週期、抹片史",
      "本胎 LQQOPERA：胎動、宮縮、出血、破水、頭痛、視力模糊、上腹痛",
      "GPA 細節：前次流產原因與週數、前胎 39 歲 NSD（normal spontaneous delivery）併發症、新生兒體重",
      "內外敏藥住個家：thalassemia trait（地中海型貧血帶因）基因型、hypothyroidism（甲狀腺低下）控制、TSH、levothyroxine 劑量、BP 史、配偶篩檢、家族遺傳",
      "個人史：抽菸、酒精、咖啡因、藥物過敏、職業暴露、家族 preeclampsia（子癇前症）史"
    ],
    pe: [
      "Vital signs：BP 重複測（140/85）、HR、體重增幅",
      "全身 IPPA：臉部浮腫、下肢 pitting edema、甲狀腺觸診大小硬度結節",
      "產科：fundal height（宮底高度）、Leopold maneuver、胎心音 Doppler",
      "Urine dipstick：protein、glucose；反射槌測 DTR（deep tendon reflex）",
      "bedside：若 BP 高再測一次 + 評估 anomaly scan 時機"
    ],
    ddx: [
      "高危妊娠評估：advanced maternal age + 前次流產 + chronic disease",
      "高血壓分類：chronic HTN（< 20 wk）vs gestational HTN vs preeclampsia → 此例 20 wk + 沒蛋白尿傾向 chronic / gestational",
      "Thalassemia：配偶須 screening；若兩人皆 carrier → 產前診斷（CVS / amniocentesis）",
      "Hypothyroidism：孕期 TSH 目標 < 2.5（T1）、< 3.0（T2/T3），levothyroxine 通常需加量 30–50%",
      "後續追蹤：blood pressure home monitoring、anomaly scan（20 wk）、OGTT 24–28 wk、aspirin 100 mg 預防 preeclampsia"
    ],
    explanation: [
      "advanced maternal age（高齡產婦，≥ 35 歲）合併 chronic disease 屬高危妊娠，需加密追蹤",
      "胎兒染色體異常（如 trisomy 21）風險隨年齡上升，需 NIPT 或 amniocentesis 評估",
      "孕婦本身 preeclampsia、GDM（gestational diabetes mellitus）、preterm、placental abruption 風險增加",
      "thalassemia trait 若配偶也帶因，胎兒有 1/4 機率為重型，需產前基因診斷",
      "hypothyroidism 控制不佳影響胎兒神經發育，孕期 levothyroxine 需求量增加 30-50%"
    ],
    treatment: [
      "Workup：CBC + Hb electrophoresis（配偶也驗）、TSH、free T4、UA、urine protein/Cr、OGTT 24-28 wk、anomaly scan 20 wk、NIPT 或 amniocentesis",
      "BP 管理：home BP monitoring；chronic HTN 用 labetalol 或 methyldopa；禁 ACEi/ARB（致畸）",
      "預防 preeclampsia：aspirin 100 mg PO QD from 12-16 wk until 36 wk",
      "hypothyroidism：levothyroxine 加量 30-50%，TSH 目標 T1 < 2.5、T2/T3 < 3.0，每 4-6 週追蹤",
      "thalassemia：兩人皆 carrier → CVS（chorionic villus sampling，10-13 wk）或 amniocentesis（16-20 wk）",
      "衛教：folate 0.4 mg + iron、kick count、警訊（頭痛、視力模糊、上腹痛、出血、胎動少）立即回診"
    ],
    redFlags: [
      "BP > 160/110 + proteinuria → severe preeclampsia 急症",
      "頭痛 + 視力模糊 + 上腹痛 → impending eclampsia"
    ]
  },

  {
    id: "2025-06",
    source: "2025",
    age: 70,
    sex: "F",
    department: "急",
    system: "Neuro",
    chiefComplaint: "車禍後 SDH 服用抗凝血藥的衛教",
    vignette: "70 歲女性車禍頭部外傷，CT 顯示 subdural hematoma（SDH）。平日服用抗凝血藥。請向家屬（女兒）解釋 GCS、CT 影像、住院觀察事項、後續處置與抗凝血藥停藥。",
    history: [
      "老年必問 ADL（activities of daily living）與跌倒史：平日功能、近期跌倒、步態、視力",
      "受傷機轉 LQQOPERA：車速、撞擊位置、安全帶、有無昏迷 LOC（loss of consciousness）、失憶",
      "症狀：頭痛、嘔吐、意識變化、抽搐、肢體無力、大小便失禁",
      "內外敏藥住個家：抗凝血藥種類（warfarin / DOAC / antiplatelet）、indication、最後服用時間、AF（atrial fibrillation）或 stroke 史",
      "藥物過敏、其他用藥、近期手術或 procedure、家屬監護與居家環境"
    ],
    pe: [
      "Vital signs + GCS（Glasgow Coma Scale）= E + V + M 總分",
      "瞳孔大小、對光反射、眼外肌、眼底（若可）",
      "頭皮 IPPA：裂傷、battle sign、raccoon eye、otorrhea、rhinorrhea",
      "神經學：motor power lateralization、Babinski、感覺、小腦",
      "ATLS secondary survey：頸椎、胸腹、骨盆、四肢合併傷"
    ],
    ddx: [
      "GCS 解釋：E（4）+ V（5）+ M（6）= 15，分數越低越嚴重",
      "CT 表現：SDH = crescent-shaped、cross suture lines；EDH = lens-shaped、不過 suture",
      "抗凝血處置：warfarin → vitamin K + PCC / FFP reversal；DOAC → idarucizumab（dabigatran）/ andexanet（Xa inhibitor）",
      "停藥時機：急性期停，未來是否恢復需 risk vs benefit（AF stroke risk vs rebleed）",
      "住院觀察：neuro check q1h、follow-up CT 6–24 hr、避免再撞擊",
      "可能處置：保守觀察 vs craniotomy / burr hole（mass effect、midline shift > 5 mm、GCS 下降）",
      "出院衛教：跌倒預防、家屬注意意識變化、後續門診追蹤"
    ],
    explanation: [
      "subdural hematoma（SDH，硬腦膜下血腫）= 腦表面 bridging vein 撕裂，血液積在硬腦膜與大腦之間",
      "CT 呈 crescent-shaped（新月形）可跨越 suture line，與 epidural hematoma 梭形不同",
      "老人因腦萎縮使 bridging vein 拉長，加上抗凝血藥使止血困難，輕微外傷即可大量出血",
      "GCS 用來量化意識 = E（4）+ V（5）+ M（6），滿分 15，分數越低越嚴重",
      "預後取決於出血量、midline shift、年齡與初始 GCS；延誤 reverse 可能 herniation 致命"
    ],
    treatment: [
      "Workup：non-contrast head CT（已做）、CBC、PT/INR/PTT、type & screen、follow-up CT 6-24 hr",
      "抗凝逆轉：warfarin → vitamin K 10 mg IV + PCC（prothrombin complex concentrate）25-50 IU/kg；dabigatran → idarucizumab（Praxbind）；Xa inhibitor → andexanet alfa",
      "住院觀察：neuro check q1h、HOB 30°、SBP < 140、antiepileptic prophylaxis 用 levetiracetam（Keppra）500 mg IV q12h ×7d",
      "手術 indication：midline shift > 5 mm、血腫厚度 > 10 mm、GCS 下降、mass effect → craniotomy 或 burr hole drainage",
      "抗凝藥重啟：急性期停藥，穩定 1-4 週後依 AF stroke risk vs rebleed 風險評估重啟",
      "衛教：跌倒預防（家中防滑、夜燈、助行器）、家屬監測意識、頭痛嘔吐立即回診、神外門診追蹤"
    ],
    redFlags: [
      "GCS 急速下降、瞳孔不等大 → uncal herniation 急開刀",
      "INR > 3 + active bleed → 緊急 reversal"
    ]
  },

  {
    id: "2025-07",
    source: "2025",
    age: 40,
    sex: "F",
    department: "內",
    system: "Endo",
    chiefComplaint: "心悸、體重減輕、容易出汗",
    vignette: "40 歲女性，主訴心悸、體重減輕、容易出汗來門診。請做相關 PE。桌上有血壓計（SP 結果正常）。",
    history: [
      "症狀 LQQOPERA：心悸、體重減輕（多少 kg / 多少時間）、出汗時程、加重緩解因子",
      "伴隨 hyperthyroidism（甲狀腺機能亢進）症狀：怕熱、手抖、易怒、失眠、腹瀉、肌無力",
      "產科：月經改變（oligomenorrhea）、性孕史；眼部：突眼、複視、流淚、視力模糊",
      "頸部：腫脹、吞嚥困難、聲音改變",
      "內外敏藥住個家：家族甲狀腺病史、自體免疫病、藥物（amiodarone、iodine contrast）、懷孕計畫"
    ],
    pe: [
      "Vital signs：HR（tachycardia）、BP（widened pulse pressure）、體溫",
      "手部 IPPA：skin warm and moist、palmar erythema、fine tremor（伸直手指放紙測試）",
      "眼部：exophthalmos、lid lag、lid retraction、EOM（extraocular movement）、visual acuity",
      "頸部 IPPA：thyroid 大小、硬度、結節、bruit（auscultation）、吞嚥時移動",
      "心臟：tachycardia、AF、systolic murmur；下肢：pretibial myxedema、proximal muscle weakness（站立試驗）、DTR hyperreflexia"
    ],
    ddx: [
      "Graves' disease（hyperthyroidism + ophthalmopathy + diffuse goiter + bruit）",
      "Toxic multinodular goiter",
      "Toxic adenoma",
      "Subacute thyroiditis（painful、self-limited）",
      "Factitious thyrotoxicosis",
      "Pheochromocytoma（high BP, palpitation）"
    ],
    explanation: [
      "hyperthyroidism 是甲狀腺素分泌過多，使全身代謝率上升產生心悸、體重減輕、多汗",
      "Graves' disease（葛瑞夫氏病）= 自體免疫產生 TSH receptor antibody 刺激甲狀腺，是最常見原因",
      "症狀來自交感神經過度活化 + 代謝加速，特徵三聯：ophthalmopathy、diffuse goiter、pretibial myxedema",
      "若未治療可能進展為 thyroid storm（甲狀腺風暴）危及生命，或併發 AF、heart failure、osteoporosis",
      "妥善治療預後良好，藥物、放射碘、手術三擇一；Graves' ophthalmopathy 戒菸是關鍵"
    ],
    treatment: [
      "Workup：TSH（↓）、free T4 / T3（↑）、TSH receptor antibody（TRAb）、anti-TPO、thyroid sono，不確定病因加做 I-123 uptake scan",
      "藥物：methimazole（Tapazole）10-30 mg PO QD（首選；孕婦 T1 改 PTU）；β-blocker propranolol（Inderal）20-40 mg PO q6h 控制心悸手抖",
      "Definitive：radioactive iodine（I-131）ablation 或 thyroidectomy（合併大 goiter、壓迫、懷孕計畫者）",
      "thyroid storm 處置：PTU + iodine（Lugol）+ propranolol + hydrocortisone 100 mg IV q8h + 降溫 + ICU 支持",
      "追蹤：TSH / free T4 q4-6 週；ATD（antithyroid drug）副作用（agranulocytosis 發燒喉痛立即停藥、hepatitis）",
      "衛教：規則服藥、戒菸（眼病變惡化）、Graves' ophthalmopathy 眼科會診 + 人工淚液"
    ],
    redFlags: [
      "Thyroid storm：高燒、心悸、意識改變 → ICU + PTU + propranolol + steroid",
      "AF + heart failure → rate control + anticoagulation"
    ]
  },

  {
    id: "2025-08",
    source: "2025",
    age: 60,
    sex: "M",
    department: "外",
    system: "Resp",
    chiefComplaint: "劇烈咳嗽後右側胸痛、呼吸困難",
    vignette: "60 歲男性，遠洋漁船船員，172 cm 52 kg，HTN poor control（BP 160/80）、抽菸。劇烈咳嗽後突發右側胸痛、呼吸困難。PE：右側 JVD、右側無呼吸音、叩診 hyperresonance。CXR：大範圍氣胸。請病解 + 後續處置。",
    history: [
      "胸痛 LQQOPERA：突發、刺痛、位置、隨呼吸加劇、放射、緩解因子",
      "伴隨：呼吸困難程度、orthopnea、咳嗽、咳血、心悸、昏厥",
      "誘發事件：劇烈咳嗽、運動、外傷、近期 procedure（中央靜脈、針灸）",
      "內外敏藥住個家：HTN（hypertension）控制、COPD、asthma、TB 史、bullous lung disease",
      "個人史：抽菸 pack-year、職業（漁船、潛水）、high altitude 活動、家族氣胸史"
    ],
    pe: [
      "Vital signs：BP（160/80）、HR、SpO2、RR、體溫",
      "頸部：tracheal deviation 向健側、JVD（jugular venous distension）",
      "胸壁 IPPA：unilateral chest expansion 減少、subcutaneous emphysema、壓痛",
      "叩診：hyperresonance（患側）；聽診：呼吸音消失（患側）",
      "bedside：ECG（排除 ACS）、POCUS lung（lung point、absent sliding）、SpO2"
    ],
    ddx: [
      "Tension pneumothorax（hemodynamic 不穩 + 上述 PE）→ 急 needle decompression（2nd ICS MCL）",
      "處置順序：tension → needle → chest tube；non-tension large → chest tube；small + stable → 觀察 + O2",
      "手術：thoracoscopic bullectomy + pleurodesis（recurrent / persistent air leak）",
      "風險：bleeding、infection、re-expansion pulmonary edema",
      "戒菸、避免 high altitude / diving"
    ],
    explanation: [
      "spontaneous pneumothorax（自發性氣胸）= 肺臟表面 bleb 破裂，空氣漏入胸膜腔造成肺塌陷",
      "好發瘦高男性、抽菸者；劇烈咳嗽、搬重或運動可能誘發",
      "tension pneumothorax（張力性氣胸）= 空氣只進不出，胸腔壓力升高壓迫健側肺與大血管",
      "典型 PE：患側呼吸音消失、hyperresonance、JVD、tracheal deviation 向對側，是急症",
      "及時 needle decompression + chest tube 預後良好，復發率 30-50%，反覆者需 VATS 手術"
    ],
    treatment: [
      "急救：tension pneumothorax → 立即 needle decompression，2nd ICS midclavicular line 或 5th ICS anterior axillary line",
      "後續：chest tube（24-28 Fr）置於 5th ICS mid-axillary line，接 water seal drainage",
      "Workup：CXR（chest X-ray）確認、ABG（arterial blood gas）、CBC、ECG 排除 ACS",
      "Definitive：recurrent 或 persistent air leak > 5-7 d → VATS（video-assisted thoracoscopic surgery）bullectomy + pleurodesis",
      "支持：高流量 O2（加速胸腔空氣吸收）、止痛（NSAID 或 opioid）、避免飛行 2-4 週",
      "衛教：戒菸（最重要）、避免 high altitude 與 scuba diving、復發症狀（突發胸痛喘）立即就醫"
    ],
    redFlags: [
      "BP 下降 + tracheal deviation → tension pneumothorax 急救",
      "Hemoptysis + 大範圍氣胸 → catamenial / 肺癌 work up"
    ]
  },

  {
    id: "2025-09",
    source: "2025",
    age: 50,
    sex: "M",
    department: "外",
    system: "GI",
    chiefComplaint: "上腹漲一週 + 黃疸",
    vignette: "50 歲男性，主訴上腹脹一週，看起來黃黃的，曾發生過灰白便（已好轉）。10 年前有膽結石未處理，每天喝 1/3 瓶威士忌，媽媽肝硬化病史。Echo：膽結石 + 疑似肝硬化。請做 PE 並給 DDx。",
    history: [
      "上腹脹 LQQOPERA：時程、位置、餐後加劇、放射、與排便關係",
      "黃疸：時程、伴隨灰白便、茶色尿、皮膚癢、體重減輕、食慾",
      "肝硬化症狀：腹水、嘔血、黑便、bruising、意識改變、asterixis",
      "內外敏藥住個家：酒精（1/3 瓶威士忌/日 × 年數）、HBV/HCV、家族肝硬化（母親）、中草藥、acetaminophen 使用",
      "膽結石史（10 年未處理）、過去 biliary colic、cholangitis、糖尿病、近期發燒"
    ],
    pe: [
      "Vital signs、BMI",
      "皮膚 IPPA：jaundice、spider angioma、palmar erythema、Dupuytren's contracture、bruising",
      "頭頸：scleral icterus、parotid enlargement、fetor hepaticus；胸部：gynecomastia、loss of axillary hair",
      "腹部 IPPA：caput medusae、distension、shifting dullness、fluid wave、肝脾觸診（肝縮小、脾腫大）、Murphy's sign、Courvoisier sign",
      "下肢 pitting edema、testicular atrophy；asterixis（flapping tremor）；bedside sono 確認腹水"
    ],
    ddx: [
      "Alcoholic liver cirrhosis with portal hypertension",
      "Choledocholithiasis（GS + obstructive jaundice）",
      "HCC（cirrhosis + 黃疸 + 體重減輕）",
      "Cholangitis（GS + 發燒 + 黃疸 + 腹痛）",
      "Pancreatic head cancer（無痛性黃疸 + 灰白便）"
    ],
    explanation: [
      "alcoholic liver cirrhosis（酒精性肝硬化）= 長期飲酒使肝細胞壞死、纖維化，肝功能逐漸衰退",
      "肝硬化造成 portal hypertension（門脈高壓）→ 食道靜脈瘤、腹水、脾腫大、側枝循環",
      "黃疸 = bilirubin 升高，可能來自肝細胞功能差或膽道阻塞（膽結石塞住 CBD（common bile duct））",
      "灰白便 + 茶色尿 = obstructive jaundice 特徵，膽汁無法進腸道",
      "需排除 HCC（hepatocellular carcinoma）、cholangitis、choledocholithiasis；預後依 Child-Pugh / MELD 分級"
    ],
    treatment: [
      "Workup：CBC、LFT（AST/ALT/ALP/GGT/T-bil/D-bil）、PT/INR、albumin、HBV/HCV、AFP、abd sono → MRCP 或 EUS 或 ERCP、CT triphasic 排除 HCC",
      "choledocholithiasis → ERCP（endoscopic retrograde cholangiopancreatography）+ sphincterotomy + stone extraction，後續 laparoscopic cholecystectomy",
      "cholangitis → IV Abx piperacillin/tazobactam（Tazocin）4.5 g IV q6h + urgent biliary drainage（ERCP 或 PTCD）",
      "cirrhosis 管理：完全戒酒、SBP 預防用 norfloxacin 400 mg PO QD、variceal bleeding 預防用 propranolol 或 EVL（endoscopic variceal ligation）",
      "腹水：spironolactone（Aldactone）+ furosemide（Lasix）+ 限鹽 < 2 g/day；HCC surveillance abd sono + AFP q6m",
      "衛教：完全戒酒、營養支持、HAV/HBV vaccine、避免肝毒性藥（acetaminophen < 2 g/day）、肝移植評估"
    ],
    redFlags: [
      "Hematemesis / melena → variceal bleeding 急救",
      "意識改變 + asterixis → hepatic encephalopathy"
    ]
  },

  {
    id: "2025-10",
    source: "2025",
    age: 4,
    sex: "M",
    department: "小",
    system: "ID",
    chiefComplaint: "腸病毒咽峽炎（herpangina）",
    vignette: "阿嬤帶 4 歲男童來門診，主訴發燒 2 天最高 39°C，診所診斷腸病毒咽峽炎（圖片顯示口腔後咽部潰瘍）。請病解、治療、衛教。阿嬤會問：有沒有藥、要不要住院、有沒有疫苗、會再感染嗎、如何避免傳染給妹妹（隔離？酒精消毒？）",
    history: [
      "小兒必問「吃喝拉動睡」：進食量、尿量（幾小時一次）、活力、睡眠、哭鬧時有無淚水",
      "發燒 LQQOPERA：時程、最高溫 39°C、退燒效果、間隔",
      "口腔症狀：潰瘍位置（後咽 vs 前口腔）、流口水、吞嚥疼痛、拒食",
      "重症前兆：嘔吐、嗜睡、myoclonic jerk（肌躍型抽搐）、肢體無力、心跳呼吸快",
      "接觸史：托兒所、家中妹妹、疫苗史（含 EV71 疫苗）、過去腸病毒史"
    ],
    pe: [
      "Vital signs + 體重（對比平時）、活力評分",
      "脫水 IPPA：mucous membrane 乾、capillary refill > 2 sec、皮膚彈性、前囟凹陷",
      "口腔：後咽部 vesicles / ulcers（herpangina）、扁桃腺、牙齦",
      "皮膚：手掌、腳底、屁股、膝肘 maculopapular / vesicular rash（HFMD）",
      "神經學：意識、肌張力、肢體無力、myoclonic jerk、cerebellar signs"
    ],
    ddx: [
      "Herpangina（Coxsackie A / EV71）",
      "HFMD（hand-foot-mouth disease）",
      "Herpetic gingivostomatitis（HSV，前口腔 + 牙齦）",
      "細菌性扁桃腺炎（GAS）",
      "治療：症狀治療（退燒、止痛、鼓勵水分），無特異 antiviral",
      "住院 indication：脫水嚴重、重症前兆（嗜睡、myoclonic jerk、心肺症狀）",
      "EV71 重症疫苗已上市（2 個月以上可打）",
      "傳染：飛沫 + 接觸 + 糞口；可重複感染（不同型別）",
      "隔離：發燒 + 水泡期不去學校 ≥ 7 天；勤洗手（酒精無效對 EV！需肥皂或漂白水）"
    ],
    explanation: [
      "herpangina（咽峽炎）= enterovirus（多為 Coxsackie A 或 EV71）感染口腔後咽部",
      "症狀來自病毒在後咽黏膜複製造成水泡潰瘍 → 吞嚥痛、流口水、食慾差、高燒",
      "與 HFMD（hand-foot-mouth disease，手足口病）同屬 enterovirus，差別在水泡分布位置",
      "多數 5-7 天自癒，但 EV71 可能引發 brainstem encephalitis、心肺衰竭等重症需警覺",
      "可重複感染不同型別，無終身免疫；EV71 疫苗可預防 EV71 重症但不防其他型"
    ],
    treatment: [
      "Workup：臨床診斷為主，不需常規病毒培養；重症懷疑 → CSF、enterovirus PCR、心臟超音波",
      "症狀治療：acetaminophen 10-15 mg/kg PO q4-6h 或 ibuprofen 5-10 mg/kg PO q6-8h，無特異 antiviral",
      "補水：少量多次冷飲、ORS（oral rehydration solution）、布丁果凍軟食；嚴重脫水 → 住院 IV fluid",
      "住院 indication：脫水嚴重無法進食、嗜睡、myoclonic jerk、持續嘔吐、心跳呼吸快、肢體無力",
      "隔離：發燒 + 水泡期不去學校 ≥ 7 天；分開餐具、避免共用奶嘴玩具、妹妹隔離",
      "衛教：肥皂或 500 ppm 漂白水洗手（酒精對 enterovirus 無效）、EV71 疫苗 2 個月以上可打"
    ],
    redFlags: [
      "嗜睡、肌躍型抽搐、持續嘔吐、心跳呼吸快 → EV71 重症前兆，立即就醫",
      "脫水 + 無法進食 → 住院 IV fluid"
    ]
  },

  {
    id: "2025-11",
    source: "2025",
    age: 45,
    sex: "F",
    department: "婦",
    system: "Gyn",
    chiefComplaint: "經血過多 2-3 個月加劇",
    vignette: "45 歲女性，G1P1A0，34 歲因胎位不正剖腹產。近 2-3 年經血過多，最近 2-3 個月特別嚴重。無痛經、無貧血症狀、有透明無味分泌物、定期抹片正常、性交疼痛。請做焦點問診 + DDx。",
    history: [
      "婦產科必問「性孕經分片」：性行為、避孕（IUD？）、GPA（G1P1A0）、LMP、抹片與 HPV 疫苗",
      "月經 LQQOPERA：週期、天數、量（夜用幾片 / 多久換）、血塊大小、近 2-3 個月加劇",
      "伴隨：夾經期出血、性交後出血、性交疼痛、分泌物（透明無味）",
      "貧血症狀：頭暈、心悸、易喘、疲倦、pica",
      "內外敏藥住個家：34 歲剖腹產原因、coagulopathy、hypothyroidism、抗凝藥、家族婦科癌症"
    ],
    pe: [
      "Vital signs：注意 orthostatic、pallor、tachycardia",
      "全身 IPPA：pallor、conjunctival pallor、petechiae、bruising",
      "腹部 IPPA：mass、tenderness、子宮底高度",
      "Speculum：cervix 外觀、polyp、出血源、分泌物",
      "Bimanual pelvic exam：子宮大小、形狀、硬度、壓痛、adnexal mass"
    ],
    ddx: [
      "Uterine fibroid（子宮肌瘤，最可能）",
      "Adenomyosis（子宮腺肌症，常合併經痛）",
      "Endometrial polyp",
      "Endometrial hyperplasia / cancer（45 歲須排除）",
      "Coagulopathy（vWD、antiplatelet 藥）",
      "Hypothyroidism",
      "處置：USG → endometrial biopsy（age > 45 或 risk factor）→ 治療：藥物（hormone、tranexamic acid、GnRH agonist）vs 手術（myomectomy / hysterectomy）"
    ],
    explanation: [
      "menorrhagia（月經過多）= 經量 > 80 mL 或經期 > 7 天，或影響日常生活",
      "45 歲女性最常見原因為 uterine fibroid（子宮肌瘤），雌激素刺激下平滑肌增生",
      "adenomyosis（子宮腺肌症）= 子宮內膜長進子宮肌肉層，常合併經痛與子宮均勻腫大",
      "45 歲屬 endometrial cancer（子宮內膜癌）風險年齡，必須排除惡性",
      "長期經血過多易致 iron deficiency anemia；多數良性病灶可藥物或手術控制"
    ],
    treatment: [
      "Workup：CBC、ferritin、TSH、PT/PTT、pregnancy test、pelvic USG（ultrasound，首選）、endometrial biopsy（≥ 45 歲或 risk factor 必做）、必要時 hysteroscopy / MRI",
      "藥物：tranexamic acid 1 g PO tid（經期使用）、NSAID mefenamic acid 500 mg PO tid、OCP（oral contraceptive pill）",
      "長效：levonorgestrel IUD（Mirena）效果佳；GnRH agonist（leuprolide）短期使用縮小肌瘤",
      "手術：myomectomy（保留子宮）、hysterectomy（無生育需求或嚴重）、endometrial ablation、UAE（uterine artery embolization）",
      "貧血矯正：ferrous sulfate 325 mg PO tid、嚴重者輸血",
      "衛教：經期日曆記錄量、頭暈心悸氣短立即就醫、定期抹片 + 婦科追蹤、停經後出血必回診"
    ],
    redFlags: [
      "停經後出血 → 子宮內膜癌須排除",
      "急性大量出血 + Hb < 7 → 緊急輸血"
    ]
  },

  {
    id: "2025-12",
    source: "2025",
    age: 30,
    sex: "F",
    department: "急",
    system: "GU",
    chiefComplaint: "右側腰痛 + 發燒 39°C",
    vignette: "30 歲女性，右側腰痛 + 發燒 39°C，已在診所開過口服抗生素無效。PE：right CV angle knocking pain。Lab：CRP↑、leukocytosis、尿液很髒。Sono：右腎皮質有 hypo-isogenic lesion、heterogenous。請給 DDx + 病解 + 後續處置。",
    history: [
      "腰痛 LQQOPERA：位置（右側）、放射、與排尿關係、加重緩解、持續時間",
      "發燒寒顫時程、最高溫、診所外院抗生素種類、劑量、療程、反應",
      "排尿症狀：頻尿、急尿、灼熱、血尿、混濁尿、解尿量",
      "伴隨：噁心、嘔吐、腹瀉、脫水；婦產科「性孕經分片」：性交史、避孕、LMP",
      "內外敏藥住個家：DM（diabetes mellitus）、結石史、過去 UTI（urinary tract infection）、近期 procedure、藥物過敏"
    ],
    pe: [
      "Vital signs：體溫、BP、HR、RR（注意 sepsis 徵象）",
      "腹部 IPPA：CV angle knocking pain（右側 +）、suprapubic tenderness、rebounding、guarding",
      "腎臟觸診、Murphy's punch sign、脫水評估（mucous membrane、skin turgor）",
      "bedside：urine dipstick、blood sugar、POCUS 確認 hydronephrosis",
      "Pelvic exam 排除 PID（pelvic inflammatory disease）鑑別診斷"
    ],
    ddx: [
      "Acute pyelonephritis（腎盂腎炎）",
      "Renal / perinephric abscess（外院 Abx 無效 + sono lesion → 高度懷疑）",
      "Renal cell carcinoma（heterogeneous mass）",
      "Renal cyst with infection",
      "Hydronephrosis with pyonephrosis（結石 obstruction）",
      "處置：CBC、血培養、UA + culture、CT with contrast 確認 abscess + 排除阻塞",
      "治療：IV Abx（涵蓋 G(-)，e.g. piperacillin/tazobactam）、若 abscess > 3-5 cm → percutaneous drainage、若有阻塞 → 緊急 PCN / DJ stent",
      "手術 indication：drainage 無效、大膿瘍、emphysematous pyelonephritis"
    ],
    explanation: [
      "acute pyelonephritis（急性腎盂腎炎）= 細菌（多為 E. coli）由膀胱上行感染腎臟實質",
      "症狀來自腎實質發炎：高燒寒顫、腰痛、CV angle knocking pain，常合併膀胱炎症狀",
      "口服抗生素無效 + 超音波見腎皮質低迴音病灶 → 高度懷疑 renal / perinephric abscess（腎膿瘍）",
      "若有結石或阻塞 → 膿尿無法引流（pyonephrosis）可快速進展 urosepsis",
      "及時引流 + 適當 IV Abx 預後良好；延誤可能 sepsis、永久腎功能受損、甚至 nephrectomy"
    ],
    treatment: [
      "Workup：CBC、CRP、blood culture ×2、UA + urine culture、Cr、electrolyte、CT with contrast 確認 abscess 大小 + 排除阻塞 / 結石 / emphysematous pyelonephritis",
      "IV Abx empirical：piperacillin/tazobactam（Tazocin）4.5 g IV q6h 或 ceftriaxone（Rocephin）1-2 g IV q24h，依培養 de-escalate",
      "Drainage：abscess > 3-5 cm 或藥物 5-7 天無效 → percutaneous drainage（PCN，percutaneous nephrostomy）",
      "Obstruction：阻塞性 pyonephrosis → 緊急 PCN 或 DJ（double-J）stent 引流",
      "手術 indication：drainage 無效、巨大膿瘍、emphysematous pyelonephritis poor response → nephrectomy",
      "衛教：IV → PO Abx 共 2-6 週療程、追蹤影像確認消退、多喝水、解尿衛生、DM 血糖控制"
    ],
    redFlags: [
      "BP 下降 + tachycardia → urosepsis 急救",
      "Obstruction + infection（pyonephrosis）→ 緊急減壓"
    ]
  },

  {
    id: "2025-13",
    source: "2025",
    age: 60,
    sex: "M",
    department: "內",
    system: "Endo",
    chiefComplaint: "雙下肢麻（DM neuropathy）",
    vignette: "60 歲男性，DM 多年血糖 poor control（300-500），HbA1C 9.0%。雙下肢麻。請解釋報告並做下肢 PE：light touch、vibration、pin prick、溫覺、Babinski、motor power、SI joint、SLRT、FABER、McMurray、Valgus/Varus。說明檢查與結果，不需診斷。",
    history: [
      "DM（diabetes mellitus，糖尿病）病史 LQQOPERA：發病時間、最近 HbA1C、血糖範圍、用藥",
      "麻木 LQQOPERA：部位（stocking-glove 或 dermatomal）、發作時程、burning / shooting、夜間加劇",
      "伴隨：肌無力、平衡感、跌倒史、足部潰瘍或傷口不癒",
      "DM 併發症回顧：眼底病變、腎病變、心血管疾病、自律神經症狀",
      "老年 ADL + 家：獨居？跌倒風險？足部自我檢查能力？其他神經毒性因子（B12、酒精、化療、HIV）"
    ],
    pe: [
      "Vital signs（含 BP 雙手、姿勢性低血壓篩檢自律神經）",
      "下肢 sensory：light touch（棉花棒）、pin prick（牙籤）、vibration（128 Hz 音叉）、溫覺、proprioception",
      "Motor + reflex：muscle power、tone、atrophy、DTR（patellar、Achilles）、Babinski",
      "關節 IPPA：SI joint tenderness、SLRT、FABER、McMurray、valgus/varus stress",
      "Diabetic foot 專檢：ulcer、deformity、callus、pulse（DP、PT）、10 g monofilament"
    ],
    ddx: [
      "DM peripheral neuropathy（distal symmetric polyneuropathy，stocking-glove）",
      "Lumbar radiculopathy（dermatomal、SLRT+）",
      "B12 deficiency（subacute combined degeneration）",
      "Alcoholic neuropathy",
      "PAOD（pulse 消失 + claudication）",
      "處置：HbA1C 控制 < 7、神經痛藥物（gabapentin、pregabalin、duloxetine）、足部照護"
    ],
    explanation: [
      "DM peripheral neuropathy（糖尿病周邊神經病變）是長期高血糖直接傷害小血管與神經纖維",
      "因神經末梢最長最脆弱，症狀從腳尖手指開始對稱出現，稱為 stocking-glove pattern",
      "感覺變鈍後，細小傷口、燙傷或擠壓不自覺，容易進展成 foot ulcer 甚至需截肢",
      "不治療會造成跌倒、慢性疼痛、潰瘍感染、下肢截肢，屬 DM 嚴重併發症之一",
      "血糖控制達標可延緩惡化，但已形成的神經損傷多難完全恢復，需早期介入"
    ],
    treatment: [
      "Workup：HbA1C、FPG、B12、TSH、Cr、UACR、眼底檢查、ABI 排除 PAOD（peripheral arterial occlusive disease）",
      "血糖控制：HbA1C < 7%（長者 7.5-8%），metformin first line，視情況加 SGLT2i 或 GLP-1 RA",
      "神經痛藥物：gabapentin（Neurontin）300-1200 mg tid、pregabalin（Lyrica）75-150 mg bid、duloxetine（Cymbalta）30-60 mg qd",
      "足部照護：每日檢視足底、穿合腳鞋襪、剪指甲小心、避免赤腳、傷口立即就醫",
      "併發症全面 screening：retinopathy 眼底、nephropathy UACR、CVD risk factor、戒菸",
      "衛教：低 GI 飲食、每週運動 150 min、參加糖尿病衛教課程、每 3 個月回診追蹤"
    ],
    redFlags: [
      "糖尿病足潰瘍 + 感染 → 緊急 debridement + Abx",
      "急性下肢無力 + 大小便失禁 → cauda equina"
    ]
  },

  {
    id: "2025-14",
    source: "2025",
    age: 55,
    sex: "M",
    department: "外",
    system: "MS",
    chiefComplaint: "L4-L5 HIVD 手術衛教",
    vignette: "55 歲男性，L4-L5 HIVD，藥物治療 + 復健療效差。病人帶 MRI 來詢問手術。請解釋手術方式 + 同意書，回答病人疑問（可不可以不做、會不會復發、要不要再決定、風險、替代方案）。",
    history: [
      "症狀 LQQOPERA：下肢放射痛部位（dermatome）、麻木、無力時程、NRS 疼痛分數",
      "保守治療史：藥物、復健方式、持續週數、療效，是否做過 epidural steroid injection",
      "Red flag：大小便失禁、saddle anesthesia、進行性 motor weakness、夜間痛",
      "工作 / 生活影響：需久坐久站？搬重物？無法正常行走或工作？",
      "內外敏藥住個家：underlying disease（DM、HTN）、過敏、藥物、家庭支持、心理準備"
    ],
    pe: [
      "Vital signs",
      "腰椎 IPPA：palpation 壓痛點、ROM、paraspinal spasm",
      "神經根張力測試：SLRT、crossed SLRT、Lasègue's sign",
      "Motor / sensory by root：dorsiflexion（L4-L5）、great toe extension（L5）、plantar flexion（S1）、dermatome",
      "Reflex + cauda equina screen：patellar、Achilles、Babinski、anal tone、perianal sensation"
    ],
    ddx: [
      "手術方式：microdiscectomy（顯微椎間盤切除）or endoscopic discectomy（內視鏡）",
      "Indication：保守 6-8 週無效 + 神經壓迫症狀；急刀 = cauda equina、進行性無力",
      "風險：感染、出血、dura tear / CSF leak、神經損傷、復發（5-15%）、相鄰節段退化",
      "替代方案：繼續復健 + 止痛、神經阻斷、慢性疼痛管理",
      "可不可以不做：若無 red flag 可繼續觀察，但長期可能影響生活；若有 progressive weakness 須儘快手術避免永久損傷",
      "復發：椎間盤本身退化過程，無法 100% 預防，需注意姿勢、核心肌力、避免提重物",
      "術後恢復：2-3 d 出院、4-6 週恢復輕度活動、3 月恢復重度活動"
    ],
    explanation: [
      "HIVD（herniated intervertebral disc，椎間盤突出）是椎間盤髓核突出壓迫神經根造成下肢麻痛",
      "L4-L5 突出多壓迫 L5 神經根，導致下肢外側放射痛、麻與大拇趾翹起無力",
      "保守治療 6-8 週無效或合併進行性無力、cauda equina syndrome 需考慮手術",
      "不手術可能繼續疼痛、肌力惡化甚至永久神經損傷，影響工作生活",
      "術後復發率 5-15%，因椎間盤退化本質無法 100% 防止，需長期核心訓練與姿勢維護"
    ],
    treatment: [
      "Workup：MRI lumbar spine（已備）、完整 neurological exam、SLRT、必要時 EMG/NCV",
      "手術選項：microdiscectomy（顯微椎間盤切除，主流）或 endoscopic discectomy（內視鏡，傷口較小）",
      "續用保守治療：NSAID、muscle relaxant、gabapentin、physical therapy、epidural steroid injection",
      "風險告知：感染、出血、dura tear / CSF leak、神經損傷、復發 5-15%、相鄰節段退化",
      "術後恢復：2-3 日出院、4-6 週輕度活動、3 個月恢復重度活動，避免搬重物久坐",
      "衛教：核心肌力訓練、正確姿勢、減重、戒菸，若再現大小便失禁 / 進行性無力立即就醫"
    ],
    redFlags: [
      "大小便失禁 + saddle anesthesia → cauda equina 24 hr 內急開",
      "進行性 motor weakness → 不可繼續觀察"
    ]
  },

  {
    id: "2025-15",
    source: "2025",
    age: 28,
    sex: "F",
    department: "婦",
    system: "OB",
    chiefComplaint: "懷孕 33 週開始規則陣痛",
    vignette: "30 歲女性，懷孕 33 週，中午開始規則陣痛。請解釋 NST（胎心監測）並說明後續處置（需不需要住院、是否算早產）。",
    history: [
      "婦產科「性孕經分片」：GPA、LMP、本胎孕週、產檢狀況、超音波（胎位、胎盤位置、羊水）",
      "陣痛 LQQOPERA：開始時間、頻率、強度、規律性、是否影響活動",
      "伴隨：破水、出血、陰道分泌物增加、胎動變化、腹痛持續性",
      "早產相關 risk：前胎早產史、cervical incompetence、多胞胎、IVF、UTI 或感染",
      "內外敏藥住個家：underlying disease、藥物、工作勞累、壓力、家庭支持"
    ],
    pe: [
      "Vital signs（focus 體溫、BP、HR）",
      "腹部 IPPA：fundal height、Leopold 觸診胎位、宮縮頻率強度",
      "胎心音 Doppler + NST（non-stress test，胎心監測）",
      "Speculum：cervix 外觀、出血、羊水積液 fern test / nitrazine",
      "Vaginal exam（排除 PROM 後）：cervical dilation、effacement、station"
    ],
    ddx: [
      "Preterm labor（< 37 wk + 規則宮縮 + cervical change）",
      "Braxton-Hicks contraction（不規則、無 cervical change）",
      "PROM（preterm premature rupture of membrane）",
      "Chorioamnionitis（PROM + 發燒 + 子宮壓痛）",
      "Placental abruption（出血 + 持續性腹痛 + 子宮硬）",
      "NST 解釋：baseline、variability、acceleration、deceleration → reactive vs non-reactive",
      "處置：住院觀察、tocolysis（nifedipine / atosiban）抑制宮縮、betamethasone 加速胎肺成熟（24-34 wk）、MgSO4 神經保護（< 32 wk）、若感染或胎兒窘迫 → 終止妊娠"
    ],
    explanation: [
      "preterm labor（早產）指妊娠 < 37 週出現規則宮縮加上子宮頸變化（dilation、effacement）",
      "33 週屬 late preterm，胎兒主要器官已發育但肺部 surfactant 仍不足，易出現 RDS",
      "NST 評估胎心基線、variability、acceleration、deceleration 來判斷胎兒是否缺氧",
      "若不處理可能早產、新生兒呼吸窘迫、IVH、NEC，嚴重者合併 chorioamnionitis 危及母胎",
      "及時 tocolysis + 產前類固醇可顯著改善早產兒存活率與神經預後"
    ],
    treatment: [
      "Workup：cervical exam、TVS cervical length、fetal fibronectin、NST、CBC、UA、GBS culture",
      "Tocolysis（< 34 wk 抑制宮縮 48 hr 爭取類固醇時間）：nifedipine（Adalat） 10 mg PO q20min × 4 → 20 mg q6h",
      "Antenatal corticosteroid：betamethasone 12 mg IM q24h × 2 doses，加速胎肺成熟",
      "MgSO4 神經保護：< 32 wk 預期 24 hr 內生產，4-6 g loading + 1-2 g/hr maintenance",
      "GBS prophylaxis：penicillin G 5 MU IV → 2.5 MU IV q4h until delivery",
      "衛教：住院臥床、監測胎動、警訊（破水、出血、發燒、持續腹痛）立即通知醫護"
    ],
    redFlags: [
      "破水 + 發燒 → chorioamnionitis 急生",
      "Persistent late deceleration → fetal distress 急生"
    ]
  },

  {
    id: "2025-16",
    source: "2025",
    age: 2,
    sex: "F",
    department: "小",
    system: "GI",
    chiefComplaint: "2 歲 5 個月女童腹瀉",
    vignette: "2 歲 5 個月女童，腹瀉、發燒、嘔吐、血便、黏液便。請病史詢問 + 診斷。問到脫水症狀時考官會有反應。",
    history: [
      "小兒母生 3A：母親孕產史、生產方式、出生週數體重、Apgar、Allergy、Admission、Abnormality",
      "腹瀉 LQQOPERA：時程、次數、性狀（水樣 / 血絲 / 黏液）、發燒最高溫、嘔吐次數",
      "吃喝拉動睡：進食量、尿布次數（評估脫水）、活力、意識、睡眠",
      "接觸 / 飲食史：托兒所、家人類似症狀、生食、餐廳、寵物、旅遊",
      "疫苗史（rotavirus、其他例行）、疫苗時程、過去類似病史"
    ],
    pe: [
      "Vital signs（體溫、HR、BP、capillary refill、體重比對）",
      "脫水評估：mucous membrane、皮膚 turgor、囟門、淚水、活力（mild < 5%、moderate 5-10%、severe > 10%）",
      "腹部 IPPA：bowel sound、tenderness、guarding、rebound、肝脾",
      "Perianal：rash、ulcer、fissure、肛門張力",
      "Bedside workup：accucheck 血糖（避免低血糖）、必要時 stool 外觀觀察"
    ],
    ddx: [
      "細菌性腸炎（Salmonella、Shigella、Campylobacter、EHEC）→ 血便 + 發燒 + 黏液便",
      "Viral gastroenteritis（rotavirus、norovirus）→ 通常水樣便，少血",
      "Amebic colitis（旅遊史）",
      "IBD（持續性、體重減輕）",
      "Intussusception（陣發性哭鬧 + currant jelly stool）",
      "處置：糞便培養、CBC、electrolyte、stool occult blood、ORS（口服補液）、IV fluid（中重度脫水）、Abx 視菌種（EHEC 不給 Abx 避免 HUS）"
    ],
    explanation: [
      "acute gastroenteritis with bloody diarrhea（急性腸胃炎合併血便）多由 invasive bacteria 感染引起",
      "常見病原：Salmonella、Shigella、Campylobacter、EHEC（enterohemorrhagic E. coli）",
      "血便 + 黏液便 + 高燒偏向細菌性（病毒多為水樣便、低燒），rotavirus、norovirus 較少血便",
      "小兒脫水進展快，體重流失 10% 即休克；需特別警覺眼眶凹陷、尿少、嗜睡、心跳快",
      "多數細菌性腸炎 self-limited，但 EHEC 可進展為 HUS（hemolytic uremic syndrome）危及生命"
    ],
    treatment: [
      "Workup：stool culture、stool WBC、stool occult blood、CBC、electrolyte、BUN/Cr、blood gas（嚴重脫水）",
      "脫水分級 + 補液：mild-moderate 給 ORS（oral rehydration solution）50-100 mL/kg over 4 hr",
      "Severe dehydration：IV NS 20 mL/kg bolus 可重複、持續監測 UOP 與意識",
      "Antibiotics：Shigella / 嚴重 Salmonella 用 azithromycin 10 mg/kg qd 或 ceftriaxone；EHEC 禁用 Abx 避免誘發 HUS",
      "止瀉藥：兒童避免 loperamide（減緩腸蠕動增加毒素吸收風險）",
      "衛教：勤洗手、食物煮熟、避生水、警訊（無尿、嗜睡、蒼白少尿可能 HUS）立即返診"
    ],
    redFlags: [
      "重度脫水 + 嗜睡 + 低血壓 → 急救 IV fluid",
      "EHEC + 急性腎損傷 + 溶血 + 血小板低 → HUS"
    ]
  },

  {
    id: "2025-17",
    source: "2025",
    age: 45,
    sex: "F",
    department: "外",
    system: "MS",
    chiefComplaint: "右手腕、大拇指痛",
    vignette: "45 歲女性，右手腕、大拇指痛。桌上病史：RA。請做純 PE：Tinel test、Phalen test、Finkelstein test，以及指關節、腕關節相關 PE（不需病史、衛教）。",
    history: [
      "症狀 LQQOPERA：疼痛部位（腕、拇指）、性質（刺、麻、酸）、加重動作、夜間症狀",
      "職業 / 重複性動作：抱小孩、打字、手工作業、家事頻率",
      "RA（rheumatoid arthritis，類風濕關節炎）病史：診斷時間、DMARD 使用、最近抽血、風免追蹤",
      "伴隨症狀：晨僵 > 1 hr、其他關節受累、眼乾口乾、疲倦",
      "內外敏藥住個家：藥物、allergy、underlying disease、家族自體免疫疾病"
    ],
    pe: [
      "Vital signs",
      "Inspection：手部變形（ulnar deviation、swan neck、boutonnière）、thenar atrophy、結節",
      "Palpation + ROM：MCP / PIP / DIP 逐一壓痛 synovitis、腕關節、屈伸角度",
      "特殊檢查：Tinel test（腕橫韌帶上 percussion）、Phalen test（60 秒屈腕）、Finkelstein test（拇指握拳 + 尺偏）",
      "感覺 + motor：median / ulnar / radial dermatome、grip strength、pinch strength"
    ],
    ddx: [
      "Carpal tunnel syndrome（CTS，median nerve compression）",
      "De Quervain tenosynovitis（媽媽手，APL/EPB）",
      "RA flare with synovitis",
      "OA of CMC joint（拇指基部）",
      "Trigger finger",
      "處置：CTS → splint、NSAID、steroid injection、surgery；de Quervain → splint、NSAID、steroid injection；RA → DMARD 調整 + 風免追蹤"
    ],
    explanation: [
      "carpal tunnel syndrome（CTS，腕隧道症候群）是 median nerve 在腕隧道受壓造成拇食中指與無名指橈側麻痛",
      "症狀夜間加劇、甩手可緩解；嚴重者出現 thenar atrophy 與手部無力",
      "RA 患者因 synovitis 滑膜增生易擠壓 median nerve 並合併 de Quervain tenosynovitis、trigger finger",
      "de Quervain tenosynovitis（媽媽手）是 APL/EPB 肌腱炎，Finkelstein test 陽性",
      "不治療可能造成永久肌肉萎縮與手功能喪失；及早治療多能恢復良好"
    ],
    treatment: [
      "Workup：Tinel test、Phalen test、Finkelstein test、grip strength、二點分辨；不確定 → NCV/EMG",
      "CTS 階梯式治療：night splint + 避免重複動作 + NSAID → local steroid injection（triamcinolone 10-20 mg）",
      "保守 3-6 個月無效或 thenar atrophy → carpal tunnel release surgery",
      "De Quervain：thumb spica splint + NSAID → steroid injection → surgical release",
      "RA 控制：DMARD 調整（methotrexate、HCQ、biologics）+ 風免科追蹤，減少滑膜炎擠壓肌腱",
      "衛教：人體工學（鍵盤滑鼠高度）、熱敷、職能治療；thenar 萎縮儘早手術"
    ],
    redFlags: [
      "RA + 持續 synovitis → 永久 joint destruction，需強化 DMARD",
      "Thenar atrophy → severe CTS 需手術 release"
    ]
  },

  {
    id: "2025-18",
    source: "2025",
    age: 50,
    sex: "F",
    department: "內",
    system: "Endo",
    chiefComplaint: "雙下肢水腫、甲狀腺切除史",
    vignette: "50 歲女性，雙下肢水腫，甲狀腺切除史，最近體重增加 5 kg。請病史詢問。",
    history: [
      "甲狀腺手術史：原因（cancer / hyperthyroid / goiter）、何時開、術後病理與 RAI",
      "Levothyroxine 用藥：劑量、是否規律、空腹服用、最近 TSH 追蹤結果",
      "水腫 LQQOPERA：pitting / non-pitting、時程、對稱性、晨起或晚間加劇",
      "體重變化 + hypothyroid 症狀：怕冷、便秘、嗜睡、皮膚乾、落髮、憂鬱、聲音沙啞",
      "老年 ADL + 鑑別：orthopnea、PND（心衰）、泡尿尿量（腎病）、腹水黃疸（肝）、CCB 用藥"
    ],
    pe: [
      "Vital signs（focus bradycardia、hypothermia、BP）",
      "頸部：甲狀腺手術疤痕、有無殘留結節、淋巴結",
      "皮膚 + DTR：cool dry skin、myxedema、DTR delayed relaxation（hypothyroid 典型）",
      "下肢 + 心肺：pitting vs non-pitting edema、JVP、crackles、bradycardia、murmur",
      "腹部 + bedside：肝脾、shifting dullness；ECG 篩 bradycardia / low voltage"
    ],
    ddx: [
      "Hypothyroidism（甲狀腺切除後 levothyroxine 不足或 noncompliance）→ myxedema",
      "Heart failure（若原本 hyperthyroid 引起 high output HF，術後仍存）",
      "Nephrotic syndrome（蛋白尿 + 水腫 + albumin 低）",
      "Hypoalbuminemia（甲狀腺癌 → 化療 / 營養不良）",
      "藥物副作用",
      "Uremic syndrome（CKD）",
      "處置：TSH、free T4、albumin、CBC、Cr、UA、心電圖、心臟超音波、調整 levothyroxine"
    ],
    explanation: [
      "post-thyroidectomy hypothyroidism（甲狀腺切除後甲狀腺功能低下）需終身補充甲狀腺素",
      "若 levothyroxine 劑量不足或 noncompliance → 全身代謝慢 → 體重增加、水腫、怕冷、便秘、疲倦",
      "嚴重者出現 myxedema（黏液水腫）non-pitting edema、DTR delayed relaxation",
      "不治療可能進展 myxedema coma（意識不清、低體溫、bradycardia），死亡率高",
      "適當劑量補充下預後極佳，規則追蹤 TSH 可維持正常生活"
    ],
    treatment: [
      "Workup：TSH、free T4、albumin、UA / urine protein、Cr、CBC、ECG、echocardiogram",
      "Levothyroxine（Eltroxin）1.6 μg/kg/day 起，空腹服用，4-6 週後追 TSH 調整",
      "目標 TSH：一般 0.5-2.5 mIU/L；thyroid cancer 術後依風險（低 0.5-2、中 0.1-0.5、高 < 0.1）",
      "老年 / 心臟病：起始劑量 25-50 μg/day 緩慢加量避免心律不整",
      "Myxedema coma：IV levothyroxine + hydrocortisone + 支持性治療",
      "衛教：固定時間服藥、與鈣鐵製劑間隔 4 hr、q6-12m 追 TSH、勿自行停藥"
    ],
    redFlags: [
      "Myxedema coma：意識不清 + hypothermia + bradycardia → IV thyroxine 急救",
      "Pleural effusion + ascites + 嚴重水腫 → uremia / cirrhosis 須排除"
    ]
  },

  {
    id: "2025-19",
    source: "2025",
    age: 35,
    sex: "F",
    department: "急",
    system: "Resp",
    chiefComplaint: "胸痛、喘、左下肢腫痛",
    vignette: "35 歲女性，胸痛、喘、左下肢腫痛。需問出有吃避孕藥。桌上 EKG（T 波倒置）、生命徵象。病人戴鼻導管。請問診 + 診斷。",
    history: [
      "胸痛 LQQOPERA：突發、刺痛、隨呼吸加劇、咳血、位置、嚴重度",
      "喘 + 心肺症狀：呼吸困難程度、orthopnea、syncope、palpitation、T 波倒置",
      "下肢腫痛 LQQOPERA：時程、單側 vs 雙側、發紅、Homan's sign",
      "婦科性孕經分片：OCP（oral contraceptive pill）種類與使用時間、LMP、有無懷孕、流產史（APS）",
      "Virchow triad 風險：久站久坐、長途旅行、最近手術 / 制動、癌症、家族 thrombophilia、抽菸"
    ],
    pe: [
      "Vital signs（focus HR、BP、SpO2、RR、體溫）— 戴鼻導管 → hypoxemia",
      "頸部：JVD",
      "心肺：tachycardia、loud P2、right ventricular heave、新出現 murmur、肺野通常 clear",
      "下肢：unilateral edema、calf tenderness、Homan's sign、palpable cord、皮膚顏色溫度",
      "Bedside workup：ECG（S1Q3T3、T inv）、bedside echo 找 RV strain"
    ],
    ddx: [
      "Pulmonary embolism + DVT（最可能；OCP + Virchow + EKG T inv → S1Q3T3）",
      "Acute coronary syndrome（cardiac risk factor 較少）",
      "Aortic dissection（撕裂痛、後背放射）",
      "Pneumothorax（單側無呼吸音）",
      "Pneumonia（發燒、咳痰）",
      "處置：D-dimer、CTPA、下肢 venous duplex、ECHO（RV strain）、anticoagulation（LMWH → DOAC / warfarin），massive PE 考慮 thrombolysis"
    ],
    explanation: [
      "pulmonary embolism（PE，肺栓塞）= 下肢深部靜脈血栓脫落卡到肺動脈阻塞血流",
      "DVT（deep vein thrombosis）+ PE 統稱 VTE（venous thromboembolism）",
      "Virchow triad：stasis（不動）+ hypercoagulability（OCP、懷孕、癌症）+ endothelial injury",
      "不治療 massive PE 可能急速休克、心跳停止；亦可形成慢性肺高壓",
      "及時抗凝可顯著降低死亡率，EKG 出現 S1Q3T3、T 波倒置、tachycardia 是警訊"
    ],
    treatment: [
      "Workup：D-dimer（敏感不特異）、CTPA（首選確診）、下肢 venous duplex、ABG、ECG、echo 找 RV strain",
      "Risk stratification：massive（SBP < 90 / 休克）、submassive（RV strain）、low risk",
      "Anticoagulation：enoxaparin（Clexane）1 mg/kg SC q12h 或 rivaroxaban（Xarelto）15 mg bid × 21d → 20 mg qd",
      "Massive PE：systemic thrombolysis tPA 100 mg IV over 2 hr、catheter-directed thrombolysis、surgical embolectomy",
      "Duration：provoked 3 個月、unprovoked ≥ 3-6 個月或長期、cancer-related 長期",
      "衛教：停 OCP 改其他避孕、長途旅行壓力襪 + 多走動、戒菸、警訊再現立即就醫"
    ],
    redFlags: [
      "Hemodynamic 不穩 → massive PE，考慮 tPA / 取栓",
      "OCP + 反覆流產 → APS work up（anticardiolipin、β2GP1、LA）"
    ]
  },

  {
    id: "2025-20",
    source: "2025",
    age: 65,
    sex: "M",
    department: "外",
    system: "CV",
    chiefComplaint: "右下肢麻腫、心悸",
    vignette: "65 歲男性，右下肢麻腫，伴心悸。請做純 PE 評估 PAOD。",
    history: [
      "（題目要求純 PE，僅簡短確認 DM / HTN / 抽菸 / AF 病史與用藥）"
    ],
    pe: [
      "Vital signs（HR rhythm irregular → AF、BP 雙手比較）",
      "Inspection：皮膚顏色 pallor / cyanosis、毛髮分布、肌肉萎縮、toe / lateral malleolus 潰瘍、壞疽",
      "Palpation：皮膚溫度、capillary refill；pulse femoral / popliteal / PT / DP 雙側比較",
      "特殊檢查：femoral / abdominal bruit、Buerger's test（抬高 60 度 1 min → pallor，下垂 > 40 秒恢復 = 嚴重缺血）",
      "Bedside workup：ABI（ankle-brachial index）< 0.9 PAOD、< 0.4 critical；ECG 找 AF",
      "急性缺血 6P 評估：pain、pallor、pulseless、paresthesia、paralysis、poikilothermia"
    ],
    ddx: [
      "Chronic PAOD（claudication、慢性缺血）",
      "Acute limb ischemia（embolic from AF、in-situ thrombosis）→ 6P 急症",
      "DVT（腫脹 + 痛，但 pulse 通常 +）",
      "Cellulitis",
      "Lumbar radiculopathy",
      "處置：ABI、CTA、duplex；保守（戒菸、cilostazol、antiplatelet、statin、運動）vs revascularization（angioplasty、stent、bypass）；急性 → embolectomy / thrombolysis"
    ],
    explanation: [
      "PAOD（peripheral arterial occlusive disease，周邊動脈阻塞）是動脈粥狀硬化造成下肢血流不足",
      "Risk factor：抽菸（最強）、DM、HTN、hyperlipidemia、年齡",
      "症狀：intermittent claudication（間歇性跛行，走路腳痛休息緩解）、嚴重時 rest pain、tissue loss",
      "Acute limb ischemia（急性肢體缺血）6P：6 hr 內須 revascularization 否則截肢",
      "合併心悸 + 下肢急性缺血 → 高度懷疑 AF（atrial fibrillation）引起 cardioembolic event"
    ],
    treatment: [
      "Workup：ABI、duplex US、CTA / MRA、ECG 找 AF、cardiac echo 找 thrombus 來源",
      "Acute limb ischemia：立即 IV heparin 80 U/kg bolus + 18 U/kg/hr → 緊急血管外科 embolectomy 或 catheter-directed thrombolysis",
      "Chronic PAOD 保守：戒菸（最重要）、cilostazol 100 mg bid、aspirin 100 mg qd 或 clopidogrel 75 mg qd、statin、血壓 / HbA1C 控制",
      "Revascularization：lifestyle-limiting claudication / CLI → angioplasty ± stent、bypass surgery",
      "AF 管理：rate control + anticoagulation（DOAC 或 warfarin INR 2-3）依 CHA2DS2-VASc",
      "衛教：足部照護防外傷潰瘍、戒菸、規律運動、心血管 risk factor 全面控制"
    ],
    redFlags: [
      "6P + 6 hr 內 → 緊急 revascularization 否則截肢",
      "AF + acute limb ischemia → cardiac embolism work up"
    ]
  },

  {
    id: "2025-21",
    source: "2025",
    age: 50,
    sex: "F",
    department: "內",
    system: "GI",
    chiefComplaint: "上腹痛兩個月（已切膽囊）",
    vignette: "中年女性，上腹悶痛兩個月，已切除膽囊。沒有發燒，吃東西完更痛。請純問診 + DDx。",
    history: [
      "腹痛 LQQOPERA：位置（epigastric）、放射（背？右肩？）、性質（burning / cramping / boring）、與進食關係（飯後 30 min / 空腹 / 半夜）",
      "緩解 / 加重因子：制酸劑、進食、姿勢、空腹；伴隨噁心、嘔吐、反酸、燒灼",
      "Alarm symptoms：體重減輕、黑便、吞嚥困難、持續嘔吐、貧血症狀",
      "膽囊切除史：手術時間、原因、術後是否類似症狀（post-cholecystectomy syndrome）",
      "內外敏藥住個家：NSAID / aspirin / steroid、酒精咖啡、抽菸、壓力、家族 PUD / pancreatic / gastric cancer 史"
    ],
    pe: [
      "Vital signs（warm shock？pallor？）",
      "腹部 IPPA：epigastric tenderness、Murphy's-like sign、肝脾、bowel sound、guarding",
      "皮膚 / 黏膜：jaundice、conjunctival pallor（慢性失血）",
      "Per rectal exam：tarry stool（UGI bleeding 篩檢）",
      "Bedside workup：accucheck、ECG（atypical MI 疼痛轉移排除）"
    ],
    ddx: [
      "Peptic ulcer disease（胃 / 十二指腸潰瘍）",
      "Chronic pancreatitis（飯後痛、放射至背）",
      "Choledocholithiasis（膽切後 retained / 新生 stone）",
      "Sphincter of Oddi dysfunction（post-cholecystectomy syndrome）",
      "GERD",
      "Functional dyspepsia",
      "Gastric cancer（年齡 + 體重減輕）",
      "處置：H. pylori test、PPI 試驗、UGI panendoscopy、CT、MRCP（懷疑膽道）、amylase / lipase"
    ],
    explanation: [
      "Post-cholecystectomy 上腹痛是膽切後仍有不適的常見情況，原因多元",
      "可能病因：retained / 新生 CBD stone、PUD（peptic ulcer disease）、chronic pancreatitis、sphincter of Oddi dysfunction、GERD、functional dyspepsia、gastric cancer",
      "飯後痛 → 偏向 gastric ulcer 或 chronic pancreatitis；空腹痛進食緩解 → duodenal ulcer",
      "中年女性 + 慢性病程 + 體重變化 → 必須排除 gastric cancer 等惡性疾病",
      "多數良性可治療；及早診斷介入預後良好，拖延可能 UGI bleeding、穿孔或錯失癌症治療時機"
    ],
    treatment: [
      "Workup：CBC、LFT、amylase / lipase、H. pylori test（UBT 或 stool antigen）、UGI panendoscopy（首選）、abd sono / CT、MRCP",
      "PUD：esomeprazole（Nexium）40 mg qd × 4-8 wk；H. pylori (+) 加 triple therapy（PPI + amoxicillin + clarithromycin）14 days",
      "Choledocholithiasis：ERCP + sphincterotomy + stone extraction",
      "Chronic pancreatitis：戒酒、低脂飲食、pancreatic enzyme replacement、止痛、控制 DM",
      "Sphincter of Oddi dysfunction：smooth muscle relaxant、ERCP + sphincterotomy（嚴重型）",
      "衛教：規律飲食、避辛辣油膩、戒菸戒酒、減壓；出現黑便 / 體重減輕 / 吞嚥困難立即就醫"
    ],
    redFlags: [
      "黑便 + 暈眩 → UGI bleeding 急救",
      "Severe radiating pain → pancreatitis"
    ]
  },

  {
    id: "2025-22",
    source: "2025",
    age: 50,
    sex: "F",
    department: "內",
    system: "GU",
    chiefComplaint: "雙下肢水腫、體重減輕（nephrotic syndrome）",
    vignette: "50 歲女性，雙下肢水腫，體重減輕。Lab、urine、sono 結果已給。請病解 + 診斷 + 處置。",
    history: [
      "水腫 LQQOPERA：時程、部位（眼瞼晨起明顯 vs 下肢傍晚明顯）、是否 pitting、加重因子",
      "尿液變化：泡尿（proteinuria）、尿量、顏色、血尿、夜尿",
      "伴隨症狀：腹脹（ascites）、體重增加、疲倦、食慾差、皮膚癢",
      "內外敏藥：DM、HTN、HBV/HCV、SLE、NSAID / gold / penicillamine 使用、感染史",
      "家族史：遺傳性腎病、SLE、癌症家族史"
    ],
    pe: [
      "Vital signs（BP 重要，常伴 HTN）、體重變化",
      "頭頸：眼瞼浮腫、JVD、xanthelasma（hyperlipidemia）",
      "胸腹 IPPA：crackle、pleural effusion、ascites（shifting dullness、fluid wave）",
      "下肢：pitting edema 程度（+1 ~ +4）、皮膚紫斑（HSP）",
      "Bedside：spot UPCR、dipstick 蛋白尿、血壓再量"
    ],
    ddx: [
      "Nephrotic syndrome：proteinuria > 3.5 g/day + hypoalbuminemia + edema + hyperlipidemia",
      "病因：minimal change（小孩多）、FSGS、MN、DM nephropathy、amyloidosis、lupus nephritis、HBV/HCV-related",
      "處置：24 hr urine protein / spot UPCR、albumin、lipid、Cr、HBV/HCV、ANA、complement、SPEP、kidney biopsy",
      "治療：limit salt + fluid、loop diuretic、ACEi/ARB（reduce proteinuria）、statin、anticoagulation（若 albumin < 2.5 + RVT 風險）、steroid +/- immunosuppressant 視 biopsy",
      "併發症：thromboembolism（renal vein thrombosis、PE）、感染（IgG 流失）、AKI"
    ],
    explanation: [
      "nephrotic syndrome（腎病症候群）= 腎絲球濾過屏障受損導致大量蛋白從尿排出（> 3.5 g/day）",
      "四大特徵：proteinuria、hypoalbuminemia、全身水腫、hyperlipidemia",
      "成人常見：membranous nephropathy（MN）、FSGS、DM nephropathy；也可能來自 SLE、HBV/HCV",
      "若不治療：持續蛋白尿會進展 CKD 甚至洗腎；低白蛋白易血栓、感染、肺水腫",
      "及早診斷並依 biopsy 用藥，多數可緩解；部分需長期免疫抑制治療追蹤"
    ],
    treatment: [
      "Workup：spot UPCR 或 24 hr urine protein、albumin、lipid、Cr、HBV/HCV、ANA、complement、anti-PLA2R、kidney biopsy",
      "症狀治療：limit salt < 2 g/day、適度限水、furosemide（Lasix）40-80 mg PO qd 視體重調整",
      "降蛋白尿 + 控 BP：enalapril 5-20 mg qd 或 losartan 50-100 mg qd，目標 BP < 130/80",
      "高血脂：atorvastatin（Lipitor）10-40 mg qd；albumin < 2.5 g/dL + 高風險 → 預防性 anticoagulation",
      "Specific therapy：minimal change → steroid；MN → rituximab ± steroid；FSGS → steroid",
      "衛教：低鹽、蛋白 0.8-1 g/kg/day、疫苗預防感染、警訊（flank pain + 血尿、胸痛喘）立即就醫"
    ],
    redFlags: [
      "突發 flank pain + 血尿 → renal vein thrombosis",
      "Albumin < 2 + 血栓 → 緊急 anticoagulation"
    ]
  },

  {
    id: "2025-23",
    source: "2025",
    age: 2,
    sex: "M",
    department: "小",
    system: "Resp",
    chiefComplaint: "哮吼（croup）病解 + 衛教",
    vignette: "2 歲男童哮吼（croup），請病解 + 衛教。",
    history: [
      "小兒「母生3A+吃喝拉動睡」：疫苗（Hib、流感）、URI 接觸史、活力、食慾、睡眠",
      "症狀時程：URI 前驅 → barking cough（狗吠咳）→ inspiratory stridor",
      "呼吸窘迫程度：stridor at rest、retraction、cyanosis、呼吸頻率",
      "發燒、drooling（警示 epiglottitis）、聲音沙啞、進食量、脫水",
      "過敏、異物吸入史、氣喘家族史"
    ],
    pe: [
      "Vital signs（RR、SpO2、體溫、HR、活力）",
      "Westley croup score：stridor、retraction、air entry、cyanosis、consciousness",
      "胸部 IPPA：inspiratory stridor、無 wheeze（區別 asthma）、retraction 位置",
      "口腔：避免壓 tongue depressor（疑 epiglottitis 勿刺激）、皮膚紫紺",
      "Bedside：SpO2 監測、準備 racemic epinephrine nebulizer"
    ],
    ddx: [
      "Croup（laryngotracheobronchitis，parainfluenza 最常見）",
      "Epiglottitis（高燒、drooling、tripod、無 barking cough）→ 急症",
      "Bacterial tracheitis（高燒 + 中毒貌）",
      "Foreign body aspiration（突發、無前驅 URI）",
      "RPA（retropharyngeal abscess）",
      "處置：Mild（無 stridor at rest）→ 口服 dexamethasone 0.6 mg/kg；Moderate-severe → racemic epinephrine nebulizer + dexamethasone + 觀察 3-4 hr；Severe → ICU、可能插管",
      "衛教：保持冷濕空氣、坐起、安撫（避免哭加劇）、退燒、足夠水分；觀察 stridor at rest、retraction、紫紺 → 立即就醫"
    ],
    explanation: [
      "croup（哮吼，laryngotracheobronchitis）= 病毒引起喉、氣管黏膜水腫造成上呼吸道阻塞",
      "致病原：parainfluenza virus（最常見）、RSV、influenza、adenovirus，好發 6 m-3 y，秋冬流行",
      "典型三症狀：barking cough（狗吠樣咳嗽）、inspiratory stridor、hoarseness（聲音沙啞）",
      "若不治療：多數 mild 3-5 天自限；少數進展呼吸窘迫、缺氧、甚至呼吸衰竭",
      "及時類固醇 + nebulizer 預後極佳；須與 epiglottitis（會厭炎）急症鑑別"
    ],
    treatment: [
      "Workup：臨床診斷為主、Westley score 評估；CXR neck AP（steeple sign）非必要",
      "Mild（無 rest stridor）：dexamethasone 0.6 mg/kg PO × 1（max 16 mg），家中觀察",
      "Moderate-severe：dexamethasone + racemic epinephrine 2.25% 0.5 mL nebulizer，急診觀察 3-4 hr 看有無反彈",
      "Severe：ICU、考慮 heliox、準備較小 size ETT 插管",
      "支持療法：冷濕空氣、坐起安撫避免哭鬧、退燒、足夠水分",
      "衛教：多為自限性、無特效抗病毒藥；警訊（rest stridor、retraction、紫紺、嗜睡）立即就醫"
    ],
    redFlags: [
      "Stridor at rest + retraction → 緊急處置",
      "Drooling + 拒食 + 高燒 → epiglottitis 不要碰口腔，急 ENT"
    ]
  },

  {
    id: "2025-24",
    source: "2025",
    age: 28,
    sex: "F",
    department: "婦",
    system: "OB",
    chiefComplaint: "羊膜穿刺衛教（amniocentesis）",
    vignette: "28 歲女性，懷孕 17 週，安排羊膜穿刺。請病解 + 衛教。",
    history: [
      "婦產科「性孕經分片」：G/P/A、LMP、本胎孕週（17 wk）、過去流產史",
      "本胎產檢：NT、母血篩檢（first/second trimester screen）、NIPT 結果、超音波 anomaly",
      "高風險指標：AMA（advanced maternal age ≥ 34）、染色體異常家族史、前胎異常",
      "內外敏藥：藥物、過敏、Rh 血型、出血傾向、感染史（HBV、HIV、梅毒）",
      "心理準備：夫妻對結果的接受度、若陽性的後續決定"
    ],
    pe: [
      "Vital signs、體重",
      "腹部：fundal height、Leopold maneuver 確認胎位",
      "產科超音波：胎兒位置、胎盤位置、羊水量、胎心音",
      "Bedside：Rh 血型確認、尋找最佳穿刺窗口"
    ],
    ddx: [
      "目的：取羊水 → 染色體分析（karyotype、CMA、QF-PCR）+ AFP（neural tube defect）",
      "適應症：母血篩檢高風險、超音波 anomaly、advanced maternal age、家族史",
      "時機：16-20 wk（最佳 16-18 wk）",
      "操作：超音波導引、22G 針穿過腹壁進入羊膜腔、抽 15-20 mL 羊水、避開胎兒與胎盤",
      "風險：流產 0.1-0.3%（過去 0.5%）、感染、羊水滲漏、出血、Rh 致敏（Rh- 須打 anti-D）",
      "替代：NIPT（無侵入但只篩 trisomy、無法確診）、CVS（10-13 wk）、不做（接受未知風險）",
      "報告：FISH 3-7 d、karyotype 2-3 wk、CMA 2 wk",
      "術後：休息 24 hr、無提重物、有出血或腹痛或發燒立即回診"
    ],
    explanation: [
      "amniocentesis（羊膜穿刺）= 用細針經腹部抽取 15-20 mL 羊水做胎兒染色體與基因分析",
      "檢查項目：karyotype（染色體數目結構）、CMA（chromosome microarray）、QF-PCR、AFP（neural tube defect 篩檢）",
      "適應症：母血篩檢高風險、超音波 anomaly、AMA ≥ 34、夫妻染色體異常、家族遺傳史",
      "若不做：NIPT 僅能篩 trisomy 無法確診；未篩出的染色體異常可能延遲到出生才發現",
      "現代技術下流產風險僅 0.1-0.3%，多數安全；最佳時機 16-20 wk"
    ],
    treatment: [
      "術前：超音波確認胎兒、胎盤位置與孕週；Rh 血型確認、不需空腹",
      "操作：超音波即時導引下用 22G spinal needle 經腹壁進入羊膜腔、抽 15-20 mL 羊水、避開胎兒胎盤",
      "術後：休息 24 hr、避免提重物/劇烈運動/性行為 1 週；Rh(-) 母親 → anti-D immunoglobulin 300 μg IM",
      "報告時間：FISH（aneuploidy 快篩）3-7 d、karyotype 2-3 wk、CMA 2 wk",
      "風險：流產 0.1-0.3%、感染、羊水滲漏、出血、Rh 致敏、針傷胎兒（極罕見）",
      "衛教：替代方案（NIPT、CVS、不做）；警訊（出血、腹痛、發燒、流羊水、規則宮縮）立即回診"
    ],
    redFlags: [
      "術後持續腹痛 + 發燒 → chorioamnionitis",
      "羊水滲漏 + 出血 → PPROM"
    ]
  },

  {
    id: "2025-25",
    source: "2025",
    age: 65,
    sex: "M",
    department: "內",
    system: "GI",
    chiefComplaint: "黃疸 + 灰白便 + 茶色尿",
    vignette: "65 歲男性，黃疸，伴上腹痛轉移背部、灰白便、茶色尿。HbA1C 9.0%。請問診 + DDx。",
    history: [
      "黃疸 LQQOPERA：時程、進行性 vs 波動性、伴隨皮膚癢、灰白便、茶色尿",
      "上腹痛：位置、輻射至背（pancreatic）、體位緩解（前傾減輕）、與進食關係",
      "體重減輕（多少 kg / 多久）、食慾、early satiety、脂肪便",
      "內外敏藥：DM（HbA1C 9.0% 是否新發是 pancreatic ca 警訊）、酒精、HBV/HCV、膽結石、過去腹部手術",
      "家族史：pancreatic ca、BRCA、膽道癌；Trousseau sign（migratory thrombophlebitis）"
    ],
    pe: [
      "Vital signs（發燒提示 cholangitis）",
      "皮膚鞏膜：jaundice、scleral icterus、scratch mark、xanthelasma",
      "腹部 IPPA：epigastric mass、Courvoisier sign（無痛性可觸及膽囊）、Murphy sign、肝脾、ascites",
      "淋巴結：Virchow node（左鎖骨上）、Sister Mary Joseph nodule（臍周）",
      "Bedside：glucose、下肢 phlebitis"
    ],
    ddx: [
      "Pancreatic head cancer（painless jaundice + new DM + 體重減輕，最可能）",
      "Choledocholithiasis（上腹痛 + 黃疸 + 發燒 = Charcot triad）",
      "Cholangiocarcinoma（distal vs hilar）",
      "Ampullary cancer",
      "IPMN（intraductal papillary mucinous neoplasm）",
      "Chronic pancreatitis（pancreatic insufficiency + DM）",
      "處置：abdominal sono → CT pancreas protocol → MRCP / EUS-FNA、tumor marker（CA 19-9、CEA）、CBC、LFT、PT/PTT",
      "治療：resectable → Whipple；borderline / locally advanced → neoadjuvant chemo；metastatic → palliative ERCP stent + chemo"
    ],
    explanation: [
      "obstructive jaundice（阻塞性黃疸）= 膽道被阻塞使膽汁無法排入腸道、bilirubin 逆流入血造成黃疸",
      "典型三聯：黃疸 + 灰白便（糞便缺乏 stercobilin）+ 茶色尿（bilirubin 從尿排出）",
      "Painless jaundice + 新發 DM + 體重減輕 → 高度懷疑 pancreatic head cancer（胰臟頭癌）",
      "若不治療：可能合併 ascending cholangitis（Charcot triad：黃疸 + 上腹痛 + 發燒）危及生命；癌症會持續進展轉移",
      "pancreatic ca 整體預後差（5-year survival < 10%），但 resectable 者手術可延長存活"
    ],
    treatment: [
      "Workup：CBC、LFT、amylase/lipase、PT/INR、CA 19-9、CEA、abd sono → CT pancreas protocol（double duct sign）→ MRCP / EUS-FNA biopsy",
      "若合併 cholangitis：piperacillin/tazobactam（Tazocin）4.5 g IV q6h + 緊急 ERCP 引流",
      "Choledocholithiasis：ERCP + sphincterotomy + stone extraction → 後續 laparoscopic cholecystectomy",
      "Resectable pancreatic ca：Whipple operation（pancreaticoduodenectomy）+ adjuvant FOLFIRINOX 或 gemcitabine + nab-paclitaxel",
      "Borderline/locally advanced → neoadjuvant chemo ± RT 再評估；metastatic → palliative ERCP stent + chemo + 症狀控制",
      "衛教：戒菸戒酒、DM 控制、營養支持、止痛階梯、晚期安寧緩和諮詢、家屬心理支持"
    ],
    redFlags: [
      "Charcot triad + 意識改變 + 低血壓 = Reynolds pentad → cholangitis 急救",
      "Painless jaundice + new DM → 高度懷疑 pancreatic cancer"
    ]
  },

  {
    id: "2025-26",
    source: "2025",
    age: 60,
    sex: "F",
    department: "內",
    system: "GU",
    chiefComplaint: "腎功能異常 + 雙下肢水腫（中藥 AKI）",
    vignette: "60 歲女性，雙下肢水腫，腎功能異常。病人有吃中藥。請病解 + 致病原因 + 處置 + 飲食衛教。",
    history: [
      "水腫 LQQOPERA：時程、進行性、部位（下肢 vs 眼瞼）、尿量變化、泡尿血尿",
      "中藥史重點：種類（是否含 aristolochic acid 馬兜鈴酸）、來源（民間 vs 合格中醫師）、何時開始、用多久",
      "其他藥物：NSAID、ACEi、aminoglycoside、近期顯影劑暴露、成藥",
      "內外敏藥：DM、HTN、痛風、過去 UTI、腎結石、心臟病（區別 HF）",
      "全身症狀：疲倦、噁心嘔吐、食慾差、皮膚癢（uremia）、意識改變"
    ],
    pe: [
      "Vital signs（BP、SpO2）、體重變化",
      "Volume status：JVD、crackle、pleural effusion、ascites、pitting edema",
      "皮膚：uremic frost、pallor、scratch mark",
      "心腹 IPPA：S3、pericardial friction rub（uremic pericarditis）、palpable kidney（hydronephrosis）",
      "Bedside：ECG（高血鉀 peaked T）、血糖、bladder scan 排除 retention"
    ],
    ddx: [
      "AKI 病因：pre-renal（脫水、HF、cirrhosis）、intrinsic（ATN、AIN、glomerulonephritis、中藥 herbal nephropathy / aristolochic acid）、post-renal（obstruction）",
      "中藥常見傷腎：aristolochic acid（馬兜鈴酸）、Chinese herb nephropathy",
      "處置：CBC、BUN/Cr、electrolyte、UA + sediment、urine Na/Cr、腎臟超音波、停藥所有可能腎毒性物質",
      "治療：dehydration → IV fluid 補水；overload → diuretic；electrolyte 矯正（K、Ca、PO4、HCO3）；若 AEIOU（acidosis、electrolyte K、ingestion、overload、uremia）→ dialysis",
      "飲食：限水（體重 × 30 + 700 - 點滴 = 飲水量；或前一日尿量 + 700）、低蛋白（0.6-0.8 g/kg/day）、低鹽、低磷、低鉀（視血鉀調整）"
    ],
    explanation: [
      "AKI（acute kidney injury，急性腎損傷）= 短期內腎功能下降使 BUN/Cr 上升、尿量減少",
      "三大類病因：pre-renal（脫水、HF、cirrhosis）、intrinsic（ATN、AIN、glomerulonephritis、藥物/中藥毒性）、post-renal（阻塞）",
      "中藥常見腎毒：aristolochic acid（馬兜鈴酸，已禁但仍有流通）→ Chinese herb nephropathy、間質性腎炎",
      "若不治療：electrolyte 失衡（高血鉀心律不整）、代謝性酸中毒、肺水腫、uremia 意識改變",
      "及早停藥 + 矯正可逆病因預後較好；長期暴露可能進展 CKD 甚至需洗腎"
    ],
    treatment: [
      "Workup：CBC、BUN/Cr、electrolyte（K、Na、Ca、PO4、HCO3）、UA + sediment、FENa、24 hr urine protein、腎臟超音波、必要時 biopsy",
      "立即停所有可能腎毒性藥物 / 中藥 / NSAID / 顯影劑",
      "補液 / 利尿：dehydration → IV normal saline；overload → furosemide 40-80 mg IV",
      "Electrolyte：高血鉀 → calcium gluconate 10 mL IV + insulin/D50 + kayexalate；acidosis → NaHCO3；高血磷 → phosphate binder",
      "Dialysis indication（AEIOU）：refractory Acidosis、Electrolyte（K > 6.5）、Ingestion、Overload、Uremia（pericarditis、encephalopathy）",
      "飲食衛教：限水（前一日尿量 + 500-700 mL）、低蛋白 0.6-0.8 g/kg/day、低鹽 < 2 g/day、低磷低鉀；絕對避免來路不明中藥、規則追蹤腎功能"
    ],
    redFlags: [
      "K > 6 + EKG 變化 → 急救（calcium、insulin/glucose、bicarbonate、dialysis）",
      "Anuria + uremia + 意識改變 → 緊急 dialysis"
    ]
  },

  {
    id: "2025-27",
    source: "2025",
    age: 60,
    sex: "F",
    department: "內",
    system: "Neuro",
    chiefComplaint: "視力模糊（從外圍開始黑）",
    vignette: "60 歲女性，視力模糊，從外圍開始黑。Vital signs：高血壓。請問診。",
    history: [
      "視力模糊 LQQOPERA：時程（突發 vs 漸進）、單眼 vs 雙眼、外圍 vs 中央、是否完全失明",
      "伴隨：頭痛、噁心嘔吐、看燈有 halo（光暈）、眼紅、眼痛（暗示 acute angle closure glaucoma）",
      "閃光、飛蚊、簾幕樣遮蔽（retinal detachment）、神經學症狀（肢體無力、複視、失語）",
      "內外敏藥：DM、HTN、青光眼家族史、stroke、AF、anticoagulation、外傷、近視深度",
      "老年 ADL：日常視力需求、跌倒史、anticholinergic 用藥（誘發 acute angle closure）"
    ],
    pe: [
      "Vital signs（雙手 BP 確認 hypertensive emergency）",
      "視覺：Snellen 視力、confrontation 視野、瞳孔大小 / 對光反射 / RAPD",
      "眼部：觸診眼壓硬度、結膜紅、角膜 haze、前房 cell/flare、瞳孔中等散大固定",
      "眼底鏡：optic disc、cup-disc ratio、papilledema、retinal detachment、bleeding",
      "Bedside：神經學完整檢查、fingerstick glucose、ECG（AF）"
    ],
    ddx: [
      "Acute angle closure glaucoma（外圍視野缺損 + halo + 頭痛嘔吐 + 高眼壓）→ 急症",
      "Intracranial hemorrhage（HTN + 頭痛 + visual change）",
      "IICP（視神經乳頭水腫 + papilledema）",
      "Retinal detachment（飛蚊、閃光、curtain）",
      "Optic neuritis、Stroke（occipital → homonymous hemianopia）",
      "TIA / Amaurosis fugax",
      "Hypertensive emergency with retinopathy",
      "處置：眼科會診（眼壓、tonometry、gonioscopy）、CT brain（排除 ICH / SAH）、控制 BP（降太快須小心）、急性青光眼 → IV mannitol + acetazolamide + topical（pilocarpine、timolol、brimonidine）+ laser iridotomy"
    ],
    explanation: [
      "acute angle closure glaucoma（急性隅角閉鎖性青光眼）= 房水排出通路被阻斷使眼壓急升",
      "症狀：突發單側眼痛、頭痛、噁心嘔吐、視力模糊、看燈 halo、結膜紅、瞳孔中等散大固定",
      "視野缺損從周邊開始呈隧道視覺；需與 retinal detachment、stroke、IICP、optic neuritis 鑑別",
      "若不治療：數小時內高眼壓壓迫視神經造成永久失明，是眼科急症",
      "高血壓 + 視覺異常亦須排除 hypertensive retinopathy、ICH、occipital stroke"
    ],
    treatment: [
      "Workup：眼科會診（IOP tonometry、gonioscopy、slit lamp、fundus）、CT brain 排除 ICH/stroke、BP、血糖、ECG",
      "急性青光眼急救：mannitol 1-2 g/kg IV over 30-60 min + acetazolamide（Diamox）500 mg PO/IV",
      "Topical：pilocarpine 2%（縮瞳）、timolol 0.5%、brimonidine、latanoprost 合併使用降眼壓",
      "Definitive：laser peripheral iridotomy（兩眼都做預防對側發作）；嚴重者 surgical trabeculectomy",
      "若 hypertensive emergency → IV labetalol 或 nicardipine，降壓勿過快避免 watershed infarct",
      "衛教：避免暗室久處、抗膽鹼藥、長時間低頭；家屬同病史者建議篩檢、規則眼科追蹤"
    ],
    redFlags: [
      "BP 嚴重升 + 頭痛 + 神經學症狀 → hypertensive emergency / ICH",
      "突發單眼失明 → CRAO 須 90 min 內處理"
    ]
  },

  {
    id: "2025-28",
    source: "2025",
    age: 32,
    sex: "F",
    department: "婦",
    system: "OB",
    chiefComplaint: "不孕症 + 輸卵管阻塞病解",
    vignette: "32 歲女性，不孕症。男生女生檢查都正常，主要看子宮輸卵管攝影報告（HSG 顯示輸卵管阻塞，雙側卵巢腫腫的）。沒有青春痘、禿頭（不像 PCOS）。請病解 + 治療選項（IVF）。",
    history: [
      "婦產科「性孕經分片」：性交頻率、避孕史、G/P/A、LMP、月經規則度、痛經",
      "不孕時程（≥ 12 個月未避孕未受孕）、過去懷孕流產史",
      "PID 史、骨盆腔手術、endometriosis 症狀（dysmenorrhea、deep dyspareunia、dyschezia）",
      "內外敏藥：thyroid、prolactinoma、PCOS（hirsutism、acne，已排除）、chlamydia/gonorrhea 感染",
      "男方精液分析結果（已正常）、雙方壓力與心理準備、家族遺傳史"
    ],
    pe: [
      "Vital signs、BMI、waist circumference",
      "皮膚：hirsutism、acne、acanthosis nigricans（PCOS，已排除）、甲狀腺觸診",
      "腹部 IPPA：腫塊、壓痛",
      "Pelvic exam：speculum 看子宮頸、bimanual 檢查 cervical motion tenderness、adnexal mass（endometrioma）",
      "Bedside：TVS（transvaginal sonography）確認卵巢腫脹性質"
    ],
    ddx: [
      "Tubal factor infertility（HSG 阻塞，可能 PID 後 / endometriosis / 手術後 adhesion）",
      "Endometriosis（卵巢腫脹 → 巧克力囊腫 endometrioma）",
      "PCOS（已排除：無 hirsutism / acne）",
      "Unexplained infertility",
      "治療選項：tubal surgery（fimbrioplasty、salpingostomy）若輕微 → 自然受孕機率仍低；嚴重 / 雙側阻塞 → IVF（in vitro fertilization）",
      "IVF 流程：ovarian stimulation → oocyte retrieval → fertilization → embryo transfer",
      "成功率：年齡相關，35 歲以下單次 IVF 約 40-50% live birth",
      "費用、療程時間、心理壓力、OHSS 風險、多胞胎風險"
    ],
    explanation: [
      "tubal factor infertility（輸卵管因素不孕）= 輸卵管阻塞或損傷使精卵無法相遇",
      "常見原因：PID（pelvic inflammatory disease）後遺症、endometriosis、骨盆腔手術後 adhesion、ectopic pregnancy 史",
      "HSG（hysterosalpingography）顯示輸卵管不通 + 卵巢腫脹 → 需考慮 endometriosis（chocolate cyst）",
      "若不治療：自然受孕機率極低；endometrioma 可能 torsion 或 rupture",
      "IVF（in vitro fertilization，體外受精）是首選，35 歲以下單次活產率約 40-50%"
    ],
    treatment: [
      "Workup：HSG（已做）、AMH、AFC（antral follicle count）、TSH、prolactin、男方精液分析（已正常）、染色體",
      "Tubal surgery：輕度 distal 阻塞可 fimbrioplasty；hydrosalpinx 建議 salpingectomy 提升 IVF 成功率",
      "IVF 流程：ovarian stimulation（gonadotropin）→ trigger（hCG）→ oocyte retrieval → IVF/ICSI → embryo culture 3-5 d → embryo transfer → luteal support（progesterone）",
      "Endometriosis 合併處置：mild 手術切除 endometrioma + IVF；severe 直接 IVF",
      "風險告知：OHSS（ovarian hyperstimulation syndrome）、多胞胎、ectopic、流產、費用 15-25 萬/cycle、心理壓力",
      "衛教：戒菸戒酒、BMI 18.5-25、folic acid 0.4-0.8 mg qd、規律作息、心理支持團體、警訊（急腹痛、少尿）立即回診"
    ],
    redFlags: [
      "Endometrioma + 急性下腹痛 → ovarian torsion / rupture",
      "OHSS（OHSS）：腹脹、嘔吐、少尿 → 急回診"
    ]
  },

  {
    id: "2025-29",
    source: "2025",
    age: 0.25,
    sex: "M",
    department: "小",
    system: "CV",
    chiefComplaint: "3 個月大新生兒膜性 VSD（5 mm）+ 左心衰",
    vignette: "3 個月大男嬰，新生兒外院檢查發現 membranous VSD（5 mm），左心衰、喘，已給 diuretic + digoxin。家長詢問第二意見、後續處置、寶寶照顧，並自責覺得是自己的問題。請病解 + 衛教。",
    history: [
      "小兒「母生3A+吃喝拉動睡」：孕期有無感染、生產過程、出生體重、Apgar、疫苗",
      "吃：餵奶量、餵奶時喘/流汗/停頓、單次時間；體重增加曲線（failure to thrive）",
      "呼吸：tachypnea、retraction、cyanosis（VSD 通常 acyanotic）、URI 頻率",
      "動睡：活力、睡眠量、是否易疲倦",
      "目前用藥：furosemide、digoxin 劑量與反應；家族先天性心臟病史、父母焦慮自責程度"
    ],
    pe: [
      "Vital signs（HR、RR、SpO2、體重 percentile、身長）",
      "皮膚胸部：cyanosis、perfusion、retraction、tachypnea",
      "心臟 IPPA：S1S2、loud P2（肺高壓）、harsh holosystolic murmur（LLSB）± thrill、diastolic rumble（large shunt）",
      "腹部：hepatomegaly（右心衰表徵）、下肢水腫（嬰兒罕見）",
      "Bedside：echocardiogram 確認 VSD size、shunt 方向、PA 壓力"
    ],
    ddx: [
      "VSD 病解：左右心室之間缺損 → 左→右分流 → 肺循環過多 → 左心 overload → 左心衰",
      "5 mm membranous VSD = moderate-large；自閉率較低（仍可能）",
      "處置：診斷 echo、CXR、ECG、追蹤；藥物：diuretic（lasix）+ ACEi（after-load reduction）+ digoxin",
      "餵食：高熱量配方、少量多餐、必要時鼻胃管餵食",
      "手術 indication：CHF 對藥物無效、failure to thrive、肺高壓進展、age 6 m 仍 large shunt → surgical closure 或 transcatheter closure",
      "風險：感染（IE prophylaxis 需要 → 首次術後 6 個月內 + 高風險手術）",
      "家長心理支持：VSD 不是父母過錯，是胎兒發育過程；強調可治療、預後好",
      "預防併發症：避免感染（疫苗、避免人多）、定期追蹤"
    ],
    explanation: [
      "VSD（ventricular septal defect，心室中膈缺損）= 左右心室之間有破洞，最常見的先天性心臟病",
      "Membranous VSD 佔 80%；5 mm 屬 moderate-large size，自閉機率較小 size 低",
      "因左室壓力 > 右室 → 血液左→右分流 → 肺循環血量過多 → 左心 overload → 左心衰、肺高壓",
      "症狀：餵食吃力、呼吸快、出汗、體重不增；若不治療可能進展 Eisenmenger syndrome（不可逆肺高壓）",
      "VSD 是胚胎發育問題不是父母過錯；及早藥物控制 + 必要時手術預後良好"
    ],
    treatment: [
      "Workup：echocardiogram（確診 + size + shunt）、CXR（cardiomegaly + 肺血增多）、ECG、BNP、每 1-3 個月追蹤",
      "藥物：furosemide（Lasix）1-2 mg/kg/day（減 preload）+ captopril 0.1-0.5 mg/kg q8h（減 afterload）+ digoxin 5-10 μg/kg/day",
      "餵食：高熱量配方 24-30 kcal/oz、少量多餐、必要時 NG tube feeding 補足熱量",
      "手術 indication：CHF 對藥物無效、failure to thrive、進展性肺高壓、6-12 個月大仍 large shunt → surgical closure 或 transcatheter device closure",
      "感染預防：IE prophylaxis（術後 6 個月內 + 高風險 dental procedure）、疫苗齊全（含 RSV palivizumab）、避免人多場所",
      "家長支持：強調非父母過錯、可治療、預後好；警訊（呼吸急促、發紺、嗜睡、餵食差）立即回診"
    ],
    redFlags: [
      "新生兒哭時 cyanosis 加劇 + reverse shunt → Eisenmenger 不可逆 → 已錯過手術時機",
      "急性 CHF 失代償 → ICU"
    ]
  },

  {
    id: "2025-30",
    source: "2025",
    age: 28,
    sex: "F",
    department: "婦",
    system: "Gyn",
    chiefComplaint: "PCOS + 不孕症衛教",
    vignette: "38 歲女性，跟老公結婚半年定期行房，多囊性卵巢與不孕症。桌上超音波（多囊性卵巢）、抽血（testosterone↑）。請藥物治療與非藥物治療建議 + 併發症衛教。",
    history: [
      "婦產科「性孕經分片」：性交頻率、避孕史、G/P/A、LMP、月經規則度（oligomenorrhea/amenorrhea）、痛經",
      "不孕時程（半年定期行房未受孕）、過去懷孕流產史",
      "Hyperandrogen 症狀：hirsutism、acne、androgenic alopecia、聲音變低沉",
      "內外敏藥：BMI、體重變化、insulin resistance（acanthosis nigricans）、DM、dyslipidemia、HTN",
      "家族史：PCOS、DM type 2、CV disease；男方精液分析"
    ],
    pe: [
      "Vital signs、BMI、waist circumference",
      "皮膚：Ferriman-Gallwey score 評估 hirsutism、acne、acanthosis nigricans、androgenic alopecia",
      "甲狀腺觸診、腹部 IPPA",
      "Pelvic exam + TVS：polycystic ovary morphology（≥ 12 個 2-9 mm follicles 或 ovarian volume > 10 mL）",
      "Bedside：血壓再量、OGTT 安排、lipid panel"
    ],
    ddx: [
      "PCOS 確診 + 不孕（anovulatory infertility）",
      "排除其他：congenital adrenal hyperplasia、Cushing、androgen-secreting tumor、prolactinoma、thyroid",
      "非藥物：減重 5-10%（最重要！）、運動、飲食控制、戒菸",
      "藥物（不孕）：letrozole（first line）> clomiphene > metformin > gonadotropin > IVF",
      "藥物（非不孕）：OCP 調經 + 抗 androgen、metformin（insulin resistance）、spironolactone（hirsutism）",
      "其他治療：laparoscopic ovarian drilling（藥物無效時）",
      "併發症：DM type 2、metabolic syndrome、心血管疾病、endometrial hyperplasia / cancer（長期 anovulation → unopposed estrogen）、sleep apnea、NAFLD、depression",
      "懷孕風險：GDM、preeclampsia、preterm、流產率高"
    ],
    explanation: [
      "PCOS（polycystic ovary syndrome，多囊性卵巢症候群）= 育齡女性最常見的內分泌疾病",
      "Rotterdam criteria（3 取 2）：oligo/anovulation、clinical/biochemical hyperandrogenism、polycystic ovaries on US",
      "病理機轉：insulin resistance + hyperandrogenism → 排卵不規則 → anovulatory infertility",
      "若不治療：長期 unopposed estrogen → endometrial hyperplasia / cancer；insulin resistance → DM type 2、metabolic syndrome、CVD、NAFLD、sleep apnea",
      "減重 5-10% + 規範治療多數可恢復排卵、成功懷孕"
    ],
    treatment: [
      "Workup：testosterone（已↑）、DHEAS、SHBG、17-OHP（排除 CAH）、prolactin、TSH、FSH/LH、OGTT、lipid、pelvic US",
      "非藥物（最重要）：減重 5-10%、低 GI 飲食、規律有氧運動 150 min/wk、戒菸",
      "不孕用藥階梯：letrozole（Femara）2.5-7.5 mg qd × 5 d（first line）→ clomiphene citrate 50-150 mg qd × 5 d → metformin 500-2000 mg/day → gonadotropin → IVF",
      "非不孕需求：OCP 調經 + 抗 androgen、metformin（insulin resistance）、spironolactone 50-200 mg/day（hirsutism）",
      "手術：laparoscopic ovarian drilling（藥物無效時備用）",
      "併發症監測 + 衛教：OGTT q1-3y、endometrial protection（週期性 progestin 撤退性出血）、sleep apnea 篩檢、NAFLD、depression、懷孕後高危妊娠追蹤（GDM、preeclampsia、preterm）"
    ],
    redFlags: [
      "長期未避孕 + amenorrhea > 3 個月 → 子宮內膜增生 / 癌症 work up",
      "OHSS：使用 gonadotropin / IVF 後腹脹、少尿 → 急回診"
    ]
  }
];
