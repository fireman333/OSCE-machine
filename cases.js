// OSCE 刷題機 — 題庫
// 共 133 個 case：63 例 114 年 OSCE SP 劇情範例 + 40 例個人 OSCE 筆記衍生 + 30 例 2025 OSCE 考古題
// 每個 case 拆成 3 張卡（history / pe / ddx）→ 共 399 張刷題卡
// 欄位：id, source, age, sex, chiefComplaint, department, system, vignette, history[], pe[], ddx[], redFlags[]

window.OSCE_CASES = [
  // ========== 114 PDF 第 1-10 例 ==========
  {
    id: "114-01", source: "114", age: 25, sex: "F", department: "婦",
    system: "婦產", chiefComplaint: "下腹疼痛 + 不規則陰道出血",
    vignette: "25 歲女性，下腹疼痛。今天因整個下腹疼痛加劇、一碰就很痛、無法忍受，故來到急診就診。這兩星期偶爾出現下腹痛情形，偏右下腹，並合併些許不規則陰道出血。這個月的月經好像有來，但不確定是不是正常，因為只有兩三天的點狀出血。",
    history: [
      "婦產科必問「性孕經分片」：性行為史、避孕方式、GPA、LMP/PMP、月經週期",
      "本次出血量、性質、與月經週期的關係（不規則 spotting）",
      "腹痛 LQQOPERA：位置（RLQ）、轉移痛、性質、加重/緩解因子",
      "伴隨症狀：頭暈、肩膀痛（橫膈刺激 → 內出血）、噁心嘔吐、發燒",
      "PID/STD 史、子宮外孕史、IUD 使用、不孕史"
    ],
    pe: [
      "Vital signs（特別注意 BP/HR：unstable → ruptured ectopic）",
      "腹部視聽叩觸：rebounding/guarding/Cullen sign",
      "Pelvic exam：cervical motion tenderness、adnexal mass/tenderness",
      "β-hCG（quantitative）+ TVS（transvaginal sonography）"
    ],
    ddx: [
      "Ectopic pregnancy（異位妊娠，必排）",
      "Ovarian torsion（卵巢扭轉）",
      "Ruptured ovarian cyst / 黃體破裂",
      "PID / TOA",
      "Acute appendicitis"
    ],
    redFlags: ["BP↓ HR↑ + peritoneal sign → 疑 ruptured ectopic，立即備手術 + 輸血", "肩膀痛/暈厥 → 腹腔內出血"]
  },
  {
    id: "114-02", source: "114", age: 55, sex: "M", department: "內",
    system: "心血管", chiefComplaint: "擔心心肌梗塞（健檢諮詢）",
    vignette: "55 歲，已退休，平時每天爬山。看電視說冬天 MI 增加，尤其有 HTN/DM 者更應注意，所以很擔心，想來門診檢查。HTN 病史 20 餘年（父 50 歲 MI 過世），規則服 Norvasc，BP 控制在 120-130/80。除了拿藥沒做其他檢查。",
    history: [
      "ASCVD risk factors：HTN/DM/dyslipidemia/smoking/家族史（早發 CAD <55M/<65F）",
      "目前症狀：胸痛/胸悶（exertional vs rest）、喘、心悸、運動耐受度",
      "藥物：降壓藥種類、劑量、依從性、有無 antiplatelet/statin",
      "生活型態：運動、飲食、菸酒、體重變化",
      "健檢史：上次 lipid profile、HbA1c、ECG、ABI/CIMT"
    ],
    pe: [
      "Vital signs + BMI + 腰圍",
      "心音、頸動脈/腎動脈/股動脈 bruit",
      "周邊脈搏、ABI（PAOD 篩檢）",
      "Funduscopy（HTN retinopathy）"
    ],
    ddx: [
      "Stable CAD / silent ischemia",
      "Hypertensive cardiomyopathy",
      "Metabolic syndrome",
      "白袍高血壓"
    ],
    redFlags: ["新發胸痛/呼吸喘 → 立即 ECG + Troponin", "BP > 180/120 + 器官受損 → hypertensive emergency"]
  },
  {
    id: "114-03", source: "114", age: 38, sex: "F", department: "內",
    system: "神經/骨骼", chiefComplaint: "右肩頸酸痛 + 右手麻木無力",
    vignette: "38 歲女性，肩頸酸痛。今天早上覺得右手無力，右上臂外側麻木，及右手腹側 1、2、3 指酸麻，擔心右半身不遂。長時間打電腦、Facebook、購物。",
    history: [
      "麻木分布：dermatome（C6-7：拇指/食指/中指）",
      "無力：grip strength、肩外展/伸展、是否影響日常",
      "頸部疼痛 LQQOPERA：是否有 radicular pain、咳嗽用力加劇",
      "外傷史、車禍、跌倒、頸椎扭傷",
      "Red flags：bowel/bladder dysfunction、saddle anesthesia、雙側症狀、體重減輕、發燒"
    ],
    pe: [
      "頸椎 ROM、Spurling test（誘發 radicular pain）",
      "上肢 motor（C5-T1 myotomes）+ DTR（biceps C5-6, triceps C7）",
      "感覺：dermatome 對應分布",
      "Hoffmann sign（cord compression）、長徑徵候"
    ],
    ddx: [
      "Cervical radiculopathy（C6/C7 HIVD）",
      "Cervical spondylosis",
      "Carpal tunnel syndrome / thoracic outlet syndrome",
      "Brachial plexopathy",
      "Stroke（先排除）"
    ],
    redFlags: ["突發無力 + 構音/視覺 → 中風", "雙側症狀 + 步態不穩 + 反射亢進 → cord compression"]
  },
  {
    id: "114-04", source: "114", age: 41, sex: "M", department: "內",
    system: "骨骼/風濕", chiefComplaint: "右膝突發劇痛（半夜痛醒）",
    vignette: "41 歲男性，半夜一點突發右膝疼痛醒來，持續性疼痛如撕筋裂骨，走站時更痛無法蹲下，吃普拿疼稍緩，感覺體溫有點熱。",
    history: [
      "急性 monoarticular arthritis：發作時間、首次或反覆、相同關節再犯",
      "誘發因子：飲食（紅肉/海鮮/啤酒）、外傷、用藥（thiazide/aspirin）、脫水",
      "全身症狀：發燒、寒顫、其他關節痛",
      "過去史：痛風發作史、tophi、HTN/DM/CKD、homozygous男性風險高",
      "性接觸史（GC arthritis）、TB/STD"
    ],
    pe: [
      "膝關節：紅腫熱痛、ROM、effusion（patellar tap/ballottement）",
      "Vital signs（septic arthritis 會發燒）",
      "其他關節 + 耳廓/手指 tophi",
      "Joint aspiration → crystal + Gram stain + culture"
    ],
    ddx: [
      "Acute gouty arthritis（最可能）",
      "Septic arthritis（必排，必抽關節液）",
      "Pseudogout（CPPD）",
      "Reactive arthritis / 創傷"
    ],
    redFlags: ["發燒 + 關節劇痛 → 立即 joint tap 排 septic arthritis", "WBC > 50000 in synovial fluid → septic"]
  },
  {
    id: "114-05", source: "114", age: 60, sex: "F", department: "急",
    system: "感染/血液動力", chiefComplaint: "全身無力 + 發燒寒顫",
    vignette: "60 歲女性。3-4 天間斷輕微發燒，2 天前食慾不佳、虛弱無力和頭昏（站起來頭昏）。診所打點滴後好一點。今天發燒、寒顫、心悸、呼吸喘、軟弱無力被送急診。",
    history: [
      "發燒 pattern、最高溫、寒顫、退燒藥反應",
      "感染源：泌尿、呼吸、腸胃、皮膚軟組織、近期住院/手術",
      "Volume status：飲水量、尿量、頭暈（postural）",
      "免疫抑制狀態：DM、steroid、化療、splenectomy",
      "qSOFA：意識、RR、SBP；旅遊接觸史"
    ],
    pe: [
      "Vital signs（特別 BP 姿勢性、HR、RR、SpO2、體溫、capillary refill）",
      "心肺聽診、腹部、CVA knocking、皮膚（cellulitis/necrosis）",
      "Mental status、頸部僵硬",
      "Lactate、blood culture × 2、urine culture、CXR"
    ],
    ddx: [
      "Sepsis / septic shock（首要）",
      "Urosepsis（老年女性常見）",
      "Pneumonia",
      "Acute cholangitis（Charcot triad）",
      "Adrenal crisis / DKA"
    ],
    redFlags: ["SBP < 90 + lactate > 2 → septic shock，1 hr bundle：culture/abx/fluid", "意識改變 → ICU"]
  },
  {
    id: "114-06", source: "114", age: 26, sex: "F", department: "婦",
    system: "婦產", chiefComplaint: "月經沒來",
    vignette: "26 歲女性，月經沒來。過去月經不規則 2-3 月一次。固定男友，2 年前懷孕做過 TOP，無固定避孕。月經前易長青春痘，無特殊內外科病史。今天無腹痛或不適。",
    history: [
      "性孕經分片：LMP/PMP、月經週期史、性行為頻率、避孕方式",
      "懷孕症狀：噁心嘔吐、乳房脹痛、頻尿、體重變化",
      "GPA（gravida/para/abortion）、過去懷孕結果",
      "PCOS 線索：青春痘、多毛、肥胖、不孕",
      "甲狀腺、prolactin 症狀（galactorrhea、視野缺損）、運動量、體重劇變"
    ],
    pe: [
      "BMI、hirsutism、acne、acanthosis nigricans",
      "甲狀腺檢查",
      "乳房 + galactorrhea",
      "婦科內診、urine pregnancy test"
    ],
    ddx: [
      "Pregnancy（必排）",
      "PCOS（多囊性卵巢症候群）",
      "Hyperprolactinemia",
      "Hypothyroidism",
      "Hypothalamic amenorrhea"
    ],
    redFlags: ["懷孕 + 腹痛 → 排 ectopic", "視野缺損 + 頭痛 → pituitary tumor"]
  },
  {
    id: "114-07", source: "114", age: 45, sex: "F", department: "婦",
    system: "婦產", chiefComplaint: "月經量過多 + 嚴重經痛",
    vignette: "45 歲女性，昨晚月經來，今早經血量非常多（一小時換衛生棉還滲出），經痛劇烈陣痛，頭暈噁心。一年前開始經血過多+經痛，自服止痛藥緩解。近兩個月惡化、月經持續 10 天、爬樓梯會喘。",
    history: [
      "月經史：週期、長度、衛生棉用量（quantify）、血塊大小",
      "經痛 LQQOPERA：時程、與月經關係、止痛藥反應",
      "貧血症狀：頭暈、疲倦、運動耐受、心悸、呼吸喘",
      "壓迫症狀：頻尿、便秘、性交疼痛",
      "婦科病史：肌瘤、腺肌症、子宮內膜異位、生育史、避孕"
    ],
    pe: [
      "Vital signs（HR、orthostatic BP）+ pallor",
      "腹部觸診：子宮腫大（fibroid uterus）",
      "Pelvic exam：子宮大小、形狀、活動度、壓痛",
      "CBC（Hb）、TVS、pregnancy test"
    ],
    ddx: [
      "Uterine fibroid / leiomyoma",
      "Adenomyosis",
      "Endometrial hyperplasia / polyp / 內膜癌",
      "Coagulopathy（vWD）",
      "Perimenopausal DUB"
    ],
    redFlags: ["Hb < 7 + active bleeding → 輸血 + 急診止血", "懷孕 + 大出血 → 排 abortion / molar"]
  },
  {
    id: "114-08", source: "114", age: 10, sex: "F", department: "小",
    system: "小兒/內分泌", chiefComplaint: "身材矮小（10 歲 4 個月）",
    vignette: "10 歲 4 個月女生，身高班上最矮。從幼稚園起身高沿第 3 百分位下緣走，每年只長 4 公分。兩個月前胸部有些壓痛隆起，上個月消失。出生體重 2670 gm（SGA），出生第 3 天有黃疸照光 2 天。",
    history: [
      "母生 3A、吃喝拉動睡：出生史、足月否、Apgar、早產",
      "生長曲線、身高速度（每年 cm/year）、父母身高（mid-parental height）",
      "青春期 Tanner stage、初經、乳房發芽（thelarche）",
      "營養、運動、慢性病、用藥（steroid）、social history",
      "全身性疾病：頭痛/視野（pituitary）、便秘/怕冷（hypothyroid）、慢性下痢"
    ],
    pe: [
      "身高/體重/BMI、生長曲線描點",
      "Tanner stage（breast/pubic hair）",
      "甲狀腺、心音、特殊面容（Turner、Noonan）",
      "Bone age（X-ray 左手腕）、IGF-1、TSH、karyotype"
    ],
    ddx: [
      "Familial short stature",
      "Constitutional delay of growth",
      "GH deficiency",
      "Turner syndrome（女性必排）",
      "Hypothyroidism / chronic illness"
    ],
    redFlags: ["height velocity < 4 cm/yr → 內分泌轉診", "頭痛 + 視野缺損 → CNS tumor"]
  },
  {
    id: "114-09", source: "114", age: 1, sex: "M", department: "小",
    system: "小兒/呼吸", chiefComplaint: "1 歲男童慢性咳嗽 + wheezing",
    vignette: "1 歲男童，秋季開始咳嗽變頻繁，早晚嚴重，有痰，咳到吐。曾聽到咻咻呼吸聲、喘，急診做過呼吸治療。最近又開始頻繁，食慾差、夜咳影響睡眠，>1 個月。AD 史，爸媽均有 AR + AD。",
    history: [
      "母生 3A、吃喝拉動睡（小兒固定問法）",
      "咳嗽 pattern：日夜、加重時段、誘發因子（運動/冷空氣/過敏原）",
      "Wheezing 史、急診/住院史、bronchodilator 反應",
      "atopy triad：AD、AR、asthma 個人 + 家族史",
      "感染性 vs 過敏性：發燒、流鼻水、結膜炎、接觸史"
    ],
    pe: [
      "Vital signs + SpO2 + RR + retraction",
      "肺部聽診：wheezing、prolonged expiration、crackles",
      "皮膚 AD 病灶、allergic shiner、nasal turbinate",
      "Growth curve、ENT 檢查"
    ],
    ddx: [
      "Childhood asthma（最可能）",
      "Post-viral cough / RAD",
      "Allergic rhinitis with post-nasal drip",
      "GERD-induced cough",
      "Foreign body aspiration（要問清楚）"
    ],
    redFlags: ["SpO2 < 92% + 用力呼吸 → 急性嚴重 asthma", "突發 cough/choking → FB"]
  },
  {
    id: "114-10", source: "114", age: 46, sex: "F", department: "內",
    system: "感染/腎泌", chiefComplaint: "發燒 3 天 + 畏寒 + 排尿燒灼",
    vignette: "46 歲女性，國中老師。發燒 3 天，自量 38-38.5℃，今晚畏寒、39℃。無上呼吸道/腸胃症狀，平常憋尿。近日小便燒灼，左腰及腹部不適。",
    history: [
      "發燒 pattern：最高溫、間歇/持續、寒顫、退燒藥反應",
      "泌尿症狀：dysuria、frequency、urgency、hematuria、suprapubic pain",
      "Flank pain（CVA tenderness）、噁心嘔吐",
      "性行為、衛生習慣、憋尿、泌尿手術/結石史",
      "免疫抑制：DM、steroid、pregnancy、CKD"
    ],
    pe: [
      "Vital signs（注意 sepsis）+ 一般 appearance",
      "CVA knocking tenderness（單側 → APN）",
      "Suprapubic tenderness、腹部觸診",
      "Urinalysis + urine culture + blood culture × 2 + KUB"
    ],
    ddx: [
      "Acute pyelonephritis（APN，最可能）",
      "Lower UTI / cystitis",
      "Urolithiasis with infection",
      "PID（婦科必排）",
      "Acute appendicitis（右側）"
    ],
    redFlags: ["Sepsis criteria → admit + IV abx", "Obstructive uropathy + APN → 急 drainage"]
  },
  // ========== 11-20 ==========
  {
    id: "114-11", source: "114", age: 55, sex: "F", department: "內",
    system: "精神", chiefComplaint: "近兩個月失眠",
    vignette: "55 歲家庭主婦，失眠 2 個月。身體健康、無慢性病、無用藥。婆婆 3 個月前搬來同住。個性神經質易緊張。擔心睡不好影響健康。",
    history: [
      "睡眠史：入睡困難 vs 睡眠維持 vs 早醒、睡眠時數、規律",
      "白天功能：日間嗜睡、注意力、情緒",
      "心理社會壓力：婆婆同住、家庭關係、工作",
      "情緒：低落、興趣、焦慮、自殺意念（PHQ-9/GAD-7）",
      "排除生理：甲狀腺、停經症狀、藥物/咖啡因、OSA（鼾聲、見證 apnea）"
    ],
    pe: [
      "Vital signs、BMI、頸圍",
      "甲狀腺、心肺",
      "Mental status exam：mood、affect、suicide risk",
      "TSH、CBC、依需要 sleep study"
    ],
    ddx: [
      "Adjustment disorder with insomnia",
      "Generalized anxiety disorder",
      "Major depressive disorder",
      "Perimenopausal symptoms",
      "Hyperthyroidism / OSA"
    ],
    redFlags: ["自殺意念 → 立即精神科轉介", "週末嚴重打鼾 + 日間嗜睡 → OSA"]
  },
  {
    id: "114-12", source: "114", age: 50, sex: "M", department: "外",
    system: "腸胃", chiefComplaint: "腹痛（臍周 → 右下腹）",
    vignette: "50 歲男性，腹痛。昨晚 6 點晚餐後肚子不舒服（臍周）+ 嘔吐感。胃藥無效。9 時陣陣絞痛無嘔吐。半夜 3 點上廁所發現走路時 RLQ 痛無法直立。",
    history: [
      "腹痛 LQQOPERA：起始位置（臍周 → RLQ 移轉痛 = 經典闌尾）",
      "伴隨症狀：發燒、噁心嘔吐、食慾、排氣排便、腹瀉",
      "排尿症狀（排 ureteral colic）",
      "過去史：腹部手術、闌尾切除、IBD、結石",
      "ATLS 風格 AMPLE（外傷無關但廣泛適用）"
    ],
    pe: [
      "Vital signs（發燒 → infection）",
      "腹部視聽叩觸：bowel sound、guarding、rebounding、rigidity",
      "McBurney point、Rovsing、Psoas、Obturator sign",
      "DRE（pelvic appendix）、CBC、CT abdomen"
    ],
    ddx: [
      "Acute appendicitis（最可能）",
      "Mesenteric adenitis",
      "Right ureteral stone",
      "Cecal diverticulitis",
      "Meckel's diverticulitis"
    ],
    redFlags: ["Peritoneal sign + 發燒 + WBC↑ → 急開（穿孔風險）", "Free air on imaging → 緊急手術"]
  },
  {
    id: "114-13", source: "114", age: 48, sex: "M", department: "外",
    system: "腎泌", chiefComplaint: "血尿 + 腰酸（尿路結石史）",
    vignette: "48 歲男性，鐵工廠老闆。20 年前 appendectomy，5 年前左輸尿管結石做過內視鏡手術。早上工作時腰酸 + 一直想上廁所、解時下腹痛、紅尿帶血絲。腰痛站不直、噁心想吐，與以前結石相似。",
    history: [
      "Pain LQQOPERA：腰 → 腹股溝放射（renal colic 典型）",
      "Hematuria：肉眼可見、起始 vs 末段、血塊",
      "排尿症狀：dysuria、frequency、urgency",
      "結石史、家族史、職業/水分攝取（鐵工汗多）",
      "Risk factors：脫水、高蛋白飲食、UTI、痛風、代謝症候群"
    ],
    pe: [
      "Vital signs（發燒 → obstructive APN，急症）",
      "CVA knocking tenderness、abdominal exam",
      "Suprapubic tenderness、external genitalia",
      "Urinalysis + KUB + non-contrast CT"
    ],
    ddx: [
      "Ureteral / renal stone（最可能）",
      "Obstructive pyelonephritis（必排，急症）",
      "Renal cell carcinoma / 膀胱癌",
      "Renal infarction",
      "Acute appendicitis（右側）"
    ],
    redFlags: ["發燒 + 結石 + WBC↑ → 急 PCN drainage", "Anuria → 雙側阻塞 / 單腎"]
  },
  {
    id: "114-14", source: "114", age: 65, sex: "M", department: "外",
    system: "心血管", chiefComplaint: "右腳大拇趾變黑 + 間歇跛行",
    vignette: "65 歲男性，右腳大拇趾變黑 3 天無外傷。最近 1 個月足部夜痛醒（一週 2-3 次），腳垂床邊可緩解。最近 1 年走 10 分鐘雙腳痛、跛行、冰冷麻木，小腿肚明顯，休息 10 分鐘緩解。20 歲起菸 1 包/d，現在 1.5 包/d。",
    history: [
      "Claudication：可走距離、休息恢復時間、單側/雙側",
      "Rest pain（夜痛、垂腳緩解 = critical limb ischemia）",
      "Tissue loss：潰瘍、壞疽（趾尖變黑）",
      "Risk factors：smoking、DM、HTN、dyslipidemia、CAD/stroke 史",
      "Other vascular beds：胸痛（CAD）、TIA/stroke 症狀"
    ],
    pe: [
      "周邊脈搏（dorsalis pedis、posterior tibial、popliteal、femoral）",
      "ABI（< 0.9 PAOD、< 0.4 critical）",
      "皮膚顏色、溫度、毛髮、潰瘍、gangrene、capillary refill",
      "Buerger test、頸動脈/腹主動脈 bruit"
    ],
    ddx: [
      "PAOD with critical limb ischemia（必開）",
      "Acute limb ischemia（embolic）",
      "Buerger disease（thromboangiitis）",
      "Diabetic neuropathy（鑑別 rest pain）",
      "Spinal stenosis（neurogenic claudication）"
    ],
    redFlags: ["6P（pain/pallor/pulseless/paralysis/paresthesia/poikilothermia）→ 6 hr 內 revascularization", "Wet gangrene + 發燒 → 急 amputation"]
  },
  {
    id: "114-15", source: "114", age: 35, sex: "F", department: "婦",
    system: "婦產", chiefComplaint: "子宮頸抹片異常",
    vignette: "35 歲女性，2 週前診所 Pap smear 異常被轉診婦科。再婚，2 個女兒（5、8 歲）。職業是舞廳服務人員。無病史。曾有 5 個性伴侶。",
    history: [
      "性孕經分片：first sex age、sexual partners、HPV vaccine、condom use、STD 史",
      "婦科症狀：post-coital bleeding、不正常分泌物、骨盆痛",
      "抹片史：上次抹片時間、結果、HPV typing",
      "Risk factors：多伴侶、early sex、smoking、immunosuppression、HIV",
      "GPA、避孕、家族婦癌史"
    ],
    pe: [
      "Speculum：cervix 外觀（friable、ulcer、mass）、訪 punctate pattern",
      "Bimanual：子宮、附件",
      "DRE：parametrium、recto-vaginal septum",
      "Colposcopy + biopsy、HPV DNA、HIV/STD screen"
    ],
    ddx: [
      "Cervical intraepithelial neoplasia（CIN 1/2/3）",
      "Cervical cancer（micro-invasive vs invasive）",
      "Cervicitis（HPV、HSV、Chlamydia）",
      "Endometrial cancer（高齡）",
      "Vaginal cancer（rare）"
    ],
    redFlags: ["Visible cervical mass + post-coital bleeding → 立即 biopsy", "HSIL/CIN3 → conization"]
  },
  {
    id: "114-16", source: "114", age: 53, sex: "F", department: "內",
    system: "呼吸", chiefComplaint: "慢性咳嗽 2 個月 + 帶血絲",
    vignette: "53 歲女性，咳嗽 2 個多月，咳痰帶血絲，咳嗽時胸痛。CXR 異常住院。BP 120/80、T 36.5、HR 70。",
    history: [
      "咳嗽性質、痰量/顏色/血量、夜咳",
      "B symptoms：發燒、夜汗、體重減輕、食慾不振",
      "胸痛 + 呼吸困難",
      "Risk factors：smoking、TB 接觸、職業（asbestos）、家族史、二手菸",
      "其他：吞嚥困難、聲音沙啞、SVC syndrome 症狀（臉脹）"
    ],
    pe: [
      "Vital signs + SpO2、cachexia、clubbing",
      "Lymph node：supraclavicular（Virchow）、腋下、頸",
      "胸部：呼吸音減弱、dullness、egophony",
      "頸部 SVC 徵候、肝脾腫"
    ],
    ddx: [
      "Lung cancer（最可能）",
      "Pulmonary tuberculosis",
      "Bronchiectasis with hemoptysis",
      "Pneumonia / lung abscess",
      "Pulmonary embolism with infarct"
    ],
    redFlags: ["大量咳血 > 200 mL → bronchial artery embolization", "SVC syndrome → 急 RT/支架"]
  },
  {
    id: "114-17", source: "114", age: 55, sex: "M", department: "外",
    system: "腸胃", chiefComplaint: "腹痛 3 天 + 墨綠色嘔吐",
    vignette: "55 歲，3 天前婚禮後腹痛 + 噁心嘔吐。診所拿藥無效，疼痛加劇送急診。早上吐出大量墨綠色液體（bilious vomiting）。",
    history: [
      "腹痛 LQQOPERA：絞痛 vs 持續、有無排氣排便",
      "嘔吐性質：墨綠 = bile（obstruction below ampulla）、糞便味（distal SBO）",
      "腹脹、bowel habit change、體重減輕",
      "過去史：腹部手術（adhesion）、hernia、IBD、cancer、便祕",
      "飲食、藥物、近期感染"
    ],
    pe: [
      "Vital signs（dehydration）+ orthostatic",
      "腹部：脹、bowel sound（high-pitched/silent）、guarding、scar、hernia 觸診",
      "DRE（empty rectum）",
      "KUB（air-fluid levels）+ CT abdomen"
    ],
    ddx: [
      "Small bowel obstruction（adhesion 最常見）",
      "Incarcerated/strangulated hernia",
      "Volvulus / intussusception",
      "Mesenteric ischemia",
      "Acute pancreatitis"
    ],
    redFlags: ["Strangulation：發燒 + peritoneal sign + lactate↑ → 急開", "完全阻塞 + 不解氣便 > 48 hr → surgery"]
  },
  {
    id: "114-18", source: "114", age: 48, sex: "F", department: "婦",
    system: "婦產/內分泌", chiefComplaint: "心悸 + 月經不規則 + 熱潮紅",
    vignette: "48 歲女性，心悸。近 1 年月經不規則，最近 3 個月心悸、熱潮紅嚴重。月經週期由 22-25 天變 45-60 天，量減少。LMP 兩個月前。無慢性病。",
    history: [
      "性孕經分片 + 婦科症狀：vaginal dryness、性交痛、停經症狀",
      "心悸：頻率、持續時間、誘因、伴隨胸痛/暈厥",
      "Vasomotor 症狀：熱潮紅、夜汗、情緒",
      "甲狀腺症狀：怕熱、體重變化、震顫、腹瀉",
      "排除懷孕（perimenopausal 仍可能）"
    ],
    pe: [
      "Vital signs（HR、BP）",
      "甲狀腺、震顫、皮膚",
      "心音、bruit",
      "TSH、FSH/LH、estradiol、ECG、pregnancy test"
    ],
    ddx: [
      "Perimenopause / menopause",
      "Hyperthyroidism（鑑別關鍵）",
      "Anxiety disorder",
      "Pheochromocytoma",
      "Cardiac arrhythmia"
    ],
    redFlags: ["Stop bleeding > 12 mo 後再出血 → 排內膜癌", "心悸 + 暈厥 → 24 hr Holter"]
  },
  {
    id: "114-19", source: "114", age: 28, sex: "F", department: "婦",
    system: "婦產", chiefComplaint: "經痛加劇 1 年",
    vignette: "28 歲未婚女，痛經加劇需止痛藥壓制，影響工作。經痛在月經第 1-2 天最痛，整個腹部痙攣。有性行為。母 48 歲因 adenomyosis 切除子宮。",
    history: [
      "經痛時序：primary（initial menarche）vs secondary（acquired）",
      "性質、與週期關係（初日 vs 中期 vs PMS）、放射至背/大腿",
      "深部性交痛（dyspareunia）、排便痛（dyschezia）→ endometriosis",
      "經血量、blood clot、不孕",
      "婦科病史 + 家族 endometriosis/adenomyosis"
    ],
    pe: [
      "腹部觸診（pelvic mass）",
      "Pelvic exam：cul-de-sac nodularity、tender uterosacral ligament",
      "子宮：boggy enlarged（adenomyosis）、retroverted",
      "TVS、CA-125、laparoscopy（gold standard）"
    ],
    ddx: [
      "Endometriosis（最可能）",
      "Adenomyosis",
      "Primary dysmenorrhea",
      "Pelvic inflammatory disease",
      "Uterine fibroid"
    ],
    redFlags: ["不孕 + 嚴重痛經 → laparoscopy", "Acute pain + adnexal mass → ovarian endometrioma rupture"]
  },
  {
    id: "114-20", source: "114", age: 63, sex: "F", department: "外",
    system: "腸胃", chiefComplaint: "排便困難 5 天（known 大腸癌）",
    vignette: "63 歲女性，2 週前知初期大腸癌但未決定手術。近日有排氣但排便困難 5 天，前來急診。",
    history: [
      "排便史：頻率、性質、stool caliber、tenesmus、incomplete evacuation",
      "大腸癌位置（左側 → obstructive symptoms）",
      "症狀：腹脹、腹痛、嘔吐、體重減輕、貧血",
      "病情解釋需求：診斷理解、治療選項、家屬支持",
      "ECOG performance status、共病"
    ],
    pe: [
      "Vital signs",
      "腹部：脹、bowel sound、palpable mass、guarding",
      "DRE：tumor、blood、impacted stool",
      "CT abdomen + colonoscopy（已知 CA → 確認 location/staging）"
    ],
    ddx: [
      "Malignant colonic obstruction（known CA）",
      "Fecal impaction",
      "Sigmoid volvulus",
      "Diverticular stricture",
      "Postoperative ileus（尚未開）"
    ],
    redFlags: ["Closed-loop obstruction + ischemia → 急 surgery/stent", "Perforation + peritonitis → emergency"]
  },
  // ========== 21-30 ==========
  {
    id: "114-21", source: "114", age: 37, sex: "F", department: "婦",
    system: "婦產", chiefComplaint: "右下腹痛 + 陰道出血",
    vignette: "37 歲女性，今早 RLQ 痛 + 陰道出血（月經 1 週前剛結束）。半年前開始有第一個男友，開始有性行為。",
    history: [
      "性孕經分片：LMP（剛結束）、避孕、性行為頻率",
      "RLQ 痛 LQQOPERA：發作、放射、加劇/緩解",
      "出血：量、色、與性行為關係",
      "懷孕症狀（spotting + 腹痛 = 排 ectopic）",
      "PID 史、STD、IUD"
    ],
    pe: [
      "Vital signs（穩定否）",
      "腹部：rebounding、guarding、Cullen",
      "Pelvic：cervical motion tenderness、adnexal mass、bleeding source",
      "β-hCG（quantitative）+ TVS"
    ],
    ddx: [
      "Ectopic pregnancy（必排）",
      "Ovarian torsion / ruptured cyst",
      "Acute appendicitis",
      "PID / TOA",
      "黃體出血"
    ],
    redFlags: ["β-hCG (+) + adnexal mass + 腹痛 → ectopic 處置", "Vital sign 不穩 → 急開"]
  },
  {
    id: "114-22", source: "114", age: 1, sex: "F", department: "小",
    system: "小兒/腸胃", chiefComplaint: "11 個月女嬰，腹瀉 3 天",
    vignette: "11 個月女嬰，一天 6-10 次水樣便、偶有蛋花狀，蛋花狀大便酸味，無血絲。前 2 天吐 2 次，發燒 38.5℃，輕微流鼻水。奶量降至 100 cc，今早沒喝奶。換尿布從一天多次降到 6-8 小時一次。",
    history: [
      "母生 3A、吃喝拉動睡（腹瀉題重點）",
      "腹瀉：頻率、量、性質（水樣/血絲/黏液）、味道",
      "嘔吐：bile/blood/食物，與腹瀉先後",
      "脫水評估：尿量、淚液、囟門、活力、體重",
      "接觸史、托嬰中心、輪狀病毒疫苗"
    ],
    pe: [
      "Vital signs（HR↑、CRT、BP）",
      "Dehydration sign：口乾、皮膚 turgor、囟門凹陷、淚少",
      "腹部：bowel sound、tenderness、distension",
      "活力、意識、體重變化"
    ],
    ddx: [
      "Acute viral gastroenteritis（rotavirus）",
      "Bacterial gastroenteritis（Salmonella）",
      "Lactose intolerance / formula intolerance",
      "Intussusception（如血便）",
      "Sepsis with diarrhea"
    ],
    redFlags: ["重度脫水 → IV fluid + admit", "Bilious vomit / blood stool → 排 surgical（intussusception）"]
  },
  {
    id: "114-23", source: "114", age: 53, sex: "M", department: "內",
    system: "腸胃/腫瘤", chiefComplaint: "進行性吞嚥困難 2 週",
    vignette: "53 歲男性，2 週逐漸吞嚥困難。抽菸 25 年 1 包/d，應酬時喝酒。父 HTN 18 年，75 歲心臟病死。",
    history: [
      "Dysphagia：solid first（mechanical）vs both solid & liquid（motility）",
      "進行性 vs 間歇、體重減輕、嘔吐、痛感（odynophagia）",
      "Heartburn/GERD 史、酒精、檳榔",
      "其他：聲音沙啞、咳嗽、誤吸、anemia 症狀",
      "家族癌症、放射史"
    ],
    pe: [
      "Cachexia、Virchow node",
      "口腔/咽部、聲帶、頸部腫塊",
      "腹部、肝脾",
      "Endoscopy + biopsy、CT/PET、barium swallow"
    ],
    ddx: [
      "Esophageal cancer（squamous，菸酒史符合）",
      "Esophageal stricture（peptic / corrosive）",
      "Achalasia",
      "Esophageal web / ring",
      "External compression（lung CA）"
    ],
    redFlags: ["大量體重減輕 + 進行性 dysphagia → 緊急 EGD", "Aspiration pneumonia 反覆 → 排 fistula"]
  },
  {
    id: "114-24", source: "114", age: 57, sex: "M", department: "內",
    system: "內分泌", chiefComplaint: "2 個月內體重減輕 10 kg + 多飲多尿",
    vignette: "57 歲男性，2 個月減 10 kg，1 個月口渴頻尿。麵攤老闆，工作壓力大，外食多、宵夜炒飯肉圓，睡前喝 100 cc 高粱，菸 1 包/d，無運動。",
    history: [
      "3P：polyuria/polydipsia/polyphagia",
      "體重減輕、視力模糊、傷口難癒、皮膚癢、念珠菌",
      "Risk factors：BMI、家族 DM、HTN、dyslipidemia、菸酒",
      "症狀 type 1 vs type 2、DKA 線索（噁心嘔吐、腹痛、kussmaul）",
      "其他減重原因：甲亢、惡性腫瘤、TB、HIV、depression"
    ],
    pe: [
      "Vital signs + BMI + 腰圍",
      "皮膚：acanthosis nigricans、necrobiosis、感染",
      "甲狀腺、心肺",
      "足部 + 神經（diabetic foot/neuropathy）"
    ],
    ddx: [
      "Type 2 DM（最可能）",
      "Type 1 DM / LADA",
      "Hyperthyroidism",
      "Pancreatic cancer with new-onset DM",
      "Malignancy / TB / chronic infection"
    ],
    redFlags: ["BG > 600 + 意識改變 → HHS / DKA", "新發 DM > 50 歲 + 體重減輕 → 排胰臟癌"]
  },
  {
    id: "114-25", source: "114", age: 38, sex: "F", department: "急",
    system: "神經/中毒", chiefComplaint: "突發昏倒",
    vignette: "38 歲女性，今早突然昏倒救護車送急診。以前無昏倒。3 年因壓力失眠，精神科拿安眠藥。多種助眠藥 + 朋友介紹安神中藥。已婚 10 年 2 女（1 歲、4 歲）。",
    history: [
      "目擊者描述：前驅症狀（視野黑、出汗、心悸）、跌倒姿勢、抽搐、incontinence、postictal",
      "持續時間、清醒過程、有無 tongue bite",
      "用藥：安眠藥種類/劑量、中藥、過量可能",
      "其他原因：心律不整史、運動誘發、姿勢性、空腹",
      "鑑別 syncope vs seizure"
    ],
    pe: [
      "Vital signs（orthostatic BP）+ 意識（GCS）",
      "心律、murmur、carotid bruit",
      "神經學完整檢查、tongue bite、傷口",
      "ECG、glucose、CT brain、毒物 screen"
    ],
    ddx: [
      "Drug overdose / toxicity（多種安眠藥）",
      "Vasovagal syncope",
      "Cardiac arrhythmia / structural",
      "Seizure",
      "Hypoglycemia / hyponatremia"
    ],
    redFlags: ["呼吸抑制 → naloxone/flumazenil 視藥物", "ECG QT 延長 / Brugada → 心因性"]
  },
  {
    id: "114-26", source: "114", age: 39, sex: "M", department: "外",
    system: "腎泌/肝膽", chiefComplaint: "右上腹/右腰劇痛 + 冷汗",
    vignette: "39 歲男性，3 個月前右側腰部隱痛，昨夜突發右腰及右上腹劇痛、冷汗、噁心想吐。過去無病史、無外傷、無過敏。",
    history: [
      "Pain LQQOPERA：起點（腰 vs RUQ）、放射至腹股溝（renal colic）vs 右肩（gallbladder）",
      "排尿：dysuria、hematuria、frequency",
      "膽道：油膩餐後加劇、jaundice、灰白便",
      "結石史、家族史、水分攝取、職業",
      "發燒（infection）、嘔吐"
    ],
    pe: [
      "Vital signs（發燒？）",
      "CVA knocking、Murphy sign",
      "腹部觸診（local tenderness、rebound）",
      "Urinalysis、CBC、LFT、KUB、超音波"
    ],
    ddx: [
      "Right ureteral / renal stone（最可能）",
      "Acute cholecystitis / cholelithiasis",
      "Acute pyelonephritis",
      "Hepatic / renal abscess",
      "Acute appendicitis（高位）"
    ],
    redFlags: ["發燒 + 結石 + 阻塞 → 急 PCN/PTGBD", "Charcot triad → 急 ERCP（cholangitis）"]
  },
  {
    id: "114-27", source: "114", age: 28, sex: "M", department: "外",
    system: "肝膽", chiefComplaint: "右上腹劇痛 7-8 hr",
    vignette: "28 歲男性，今早突發 RUQ 痛，止痛藥無效，診所打點滴 + 兩次止痛針仍無效，急診時已痛 7-8 hr。HTN 病史。不抽不喝不檳榔。",
    history: [
      "RUQ pain LQQOPERA：油膩餐後、放射至右肩/背、絞痛 vs 持續",
      "伴隨：發燒、黃疸、灰白便、深色尿、噁心嘔吐",
      "膽結石史、肝炎、酒",
      "家族膽道疾病",
      "其他：胰臟炎症狀（穿透至背）"
    ],
    pe: [
      "Vital signs（發燒、jaundice）",
      "Murphy sign（吸氣時觸診中斷）",
      "腹部：guarding、rebound、Boas sign",
      "CBC、LFT、amylase/lipase、超音波膽道"
    ],
    ddx: [
      "Acute cholecystitis（最可能）",
      "Choledocholithiasis / cholangitis",
      "Acute pancreatitis",
      "Peptic ulcer disease",
      "Hepatic abscess / hepatitis"
    ],
    redFlags: ["Charcot triad（fever/jaundice/RUQ pain）→ ERCP", "Reynolds pentad → ICU + 急 drainage"]
  },
  {
    id: "114-28", source: "114", age: 48, sex: "M", department: "內",
    system: "腫瘤/病情解釋", chiefComplaint: "食道癌診斷後病情解釋",
    vignette: "48 歲男性，食道中段癌、無轉移。郵局基層主管，3 個女兒（國中 2、國小 1），配偶 3 年前車禍亡。心情沮喪但為女兒有強烈求生意志。",
    history: [
      "病人對診斷的理解（SPIKES：Setting/Perception/Invitation）",
      "希望知道資訊的程度、家屬狀況",
      "症狀：dysphagia、體重減輕、疼痛、誤吸",
      "Functional/social：經濟、照顧者、宗教信仰",
      "情緒：sadness、自殺意念、希望"
    ],
    pe: [
      "Vital signs + 體重 + cachexia",
      "口腔/頸部 lymph node",
      "胸腹 + 神經",
      "Performance status（ECOG）、營養評估"
    ],
    ddx: [
      "Esophageal SCC（中段最常見）",
      "Adenocarcinoma（多在 lower）",
      "Treatment options：手術 ± neoadjuvant CCRT vs definitive CCRT vs palliative",
      "併發症：穿孔、瘻管、營養不良、誤吸"
    ],
    redFlags: ["大量出血 / 穿孔 / 完全阻塞 → 急 stent", "重度抑鬱 + 自殺意念 → 心理科"]
  },
  {
    id: "114-29", source: "114", age: 60, sex: "F", department: "內",
    system: "腸胃", chiefComplaint: "腹痛 2 個月（門診）",
    vignette: "60 歲女性，腹痛 2 個月。蝦過敏。應酬偶喝酒。18 歲車禍右大腿骨折開過刀。停經 10 年。父 HTN 75 歲心臟病亡。母 HBV carrier 90 歲。",
    history: [
      "腹痛 LQQOPERA、與飲食/排便/月經關係",
      "B symptoms：體重、食慾、夜汗、發燒",
      "排便習慣改變、blood/melena",
      "家族 HBV → 排肝臟、母方腫瘤史",
      "婦科：停經後出血、骨盆痛"
    ],
    pe: [
      "Vital signs + cachexia",
      "腹部：mass、肝脾、ascites、Sister Mary Joseph",
      "Lymph node、PR exam",
      "CBC、LFT、AFP、tumor markers、超音波"
    ],
    ddx: [
      "Hepatocellular carcinoma（HBV carrier 母）",
      "Colorectal cancer",
      "Gastric / pancreatic cancer",
      "Chronic cholecystitis",
      "IBS / functional abdominal pain"
    ],
    redFlags: ["黃疸 + 體重減輕 + 腹塊 → 排惡性", "新發貧血 + 大便潛血 → 急 colonoscopy"]
  },
  {
    id: "114-30", source: "114", age: 55, sex: "F", department: "急",
    system: "神經/腫瘤", chiefComplaint: "肺癌患者解尿不出 + 雙腿無力",
    vignette: "55 歲肺癌女性。1 個月前確診肺癌（化療放療中），昨天起尿不出。同時大腿後側麻、無力越來越嚴重，無法上廁所。",
    history: [
      "排尿症狀：retention 時間、之前 stream、incontinence",
      "下肢：power、numbness（saddle anesthesia）、bowel function",
      "Back pain（局部 vs radicular）、percussion tenderness",
      "肺癌：staging、目前治療、有無骨轉移",
      "對 paralysis 的擔心、support system"
    ],
    pe: [
      "Vital signs",
      "Bladder distension（叩診）",
      "下肢：power（grade 0-5）、sensation、reflex（hyperreflexia 上脊髓 vs hyporeflexia cauda）",
      "Saddle anesthesia + perianal tone + DRE"
    ],
    ddx: [
      "Spinal cord compression by metastasis（必排，急症）",
      "Cauda equina syndrome",
      "Leptomeningeal carcinomatosis",
      "Paraneoplastic neuropathy",
      "Drug-induced（chemotherapy）"
    ],
    redFlags: ["Cord compression → 急 MRI + steroid + RT/decompression（24 hr 內）", "雙側下肢無力 + 失禁 → 急 neurosurg"]
  },
  // ========== 31-40 ==========
  {
    id: "114-31", source: "114", age: 52, sex: "M", department: "內",
    system: "心血管/病情解釋", chiefComplaint: "高血壓 + 高膽固醇用藥諮詢",
    vignette: "52 歲男性，6 個月前 TC 268、LDL 178、TG 160、HDL 42。HTN 規則服藥控制良好。建議降膽固醇藥但希望先飲食運動控制。父 HTN + dyslipidemia 54 歲 MI 裝支架。",
    history: [
      "ASCVD risk：年齡、性別、菸、DM、family history（父早發 MI）",
      "目前生活型態：飲食、運動、體重、菸酒",
      "對藥物的擔心：副作用、終身用藥",
      "症狀：胸痛、claudication、TIA",
      "已嘗試 lifestyle modification 多久、效果"
    ],
    pe: [
      "BP × 2、HR、BMI、腰圍",
      "頸動脈 bruit、心音、周邊脈搏",
      "Funduscopy、xanthoma、achilles tendon",
      "ECG、ASCVD 10-yr risk score、HbA1c"
    ],
    ddx: [
      "Mixed hyperlipidemia + HTN（high ASCVD risk）",
      "Familial hypercholesterolemia（父早發）",
      "Metabolic syndrome",
      "Secondary：hypothyroid、nephrotic、cholestasis",
      "已 high-intensity statin 適應症"
    ],
    redFlags: ["LDL > 190 + 早發家族史 → familial，立即 statin", "胸痛/缺血 → 急 ECG"]
  },
  {
    id: "114-32", source: "114", age: 0, sex: "M", department: "小",
    system: "外科/小兒", chiefComplaint: "6 個月男嬰左鼠蹊腫塊（時有時無）",
    vignette: "6 個月男嬰，2 個月發現左鼠蹊有時腫腫。一晚哭得很兇，鼠蹊腫明顯且硬，持續 20 分鐘哭累睡著後消失。",
    history: [
      "母生 3A、吃喝拉動睡",
      "腫塊：大小、紅腫熱痛、可否還納、與哭/用力關係",
      "最近發作：incarceration 線索（持續硬塊、哭鬧、不安）",
      "嘔吐、食慾、排氣排便（obstruction）",
      "出生史：早產（hernia 風險高）、家族 hernia"
    ],
    pe: [
      "Vital signs",
      "鼠蹊：可見腫塊、陰囊大小、translumination（hydrocele）",
      "可否還納、tenderness、紅腫",
      "腹部：bowel sound、distension",
      "對側鼠蹊（30% bilateral）"
    ],
    ddx: [
      "Indirect inguinal hernia（小兒最常見）",
      "Incarcerated inguinal hernia（不可還納）",
      "Hydrocele（communicating vs non-）",
      "Inguinal lymphadenopathy",
      "Undescended testis"
    ],
    redFlags: ["Incarceration > 6 hr → 急開（strangulation）", "嘔吐 + 腹脹 + 不安 → bowel obstruction"]
  },
  {
    id: "114-33", source: "114", age: 63, sex: "M", department: "內",
    system: "腫瘤/胰臟", chiefComplaint: "體重減輕 8 kg + 右上腹/上腹悶痛",
    vignette: "63 歲男性，最近累、RUQ + 上腹悶痛。2 個月減 8 kg，可能因胃口不好。診所開胃藥無效。半年前診斷 DM 口服藥控制 FBS 180。無 B/C 肝、無腸胃病史。",
    history: [
      "腹痛：painless jaundice、放射至背（pancreatic）、與飲食關係",
      "B symptoms：體重、食慾、夜汗、灰白便、深尿",
      "新發 DM > 50 歲（胰臟癌警訊）",
      "腸胃：吞嚥、噁心、解便習慣、blood",
      "Risk factors：菸酒、家族癌症、慢性胰臟炎、B/C 肝"
    ],
    pe: [
      "Vital signs + cachexia + jaundice",
      "腹部：mass、肝脾、Courvoisier sign（painless palpable GB）",
      "Lymph node（Virchow、Sister Mary Joseph）",
      "CBC、LFT、CA 19-9、CT abdomen"
    ],
    ddx: [
      "Pancreatic cancer（最可能）",
      "Cholangiocarcinoma",
      "Gastric / colorectal cancer",
      "Chronic pancreatitis",
      "HCC（雖無 B/C 肝）"
    ],
    redFlags: ["Painless jaundice + Courvoisier → 胰頭癌", "新發 DM > 50 歲 + 體重減輕 → 篩 pancreatic"]
  },
  {
    id: "114-34", source: "114", age: 30, sex: "M", department: "內",
    system: "風濕/骨骼", chiefComplaint: "下背痛 2 年（晨僵 + 活動緩解）",
    vignette: "30 歲男性，下背痛 2 年。天冷潮濕加劇。中醫推拿熱療稍緩。骨科復健科 X-ray + 抽血正常。活動緩解（運動、爬山），久坐久站惡化。最近影響穿鞋彎腰，背有點駝。",
    history: [
      "Inflammatory back pain criteria：< 40 起病、晨僵 > 30 min、活動緩解、夜痛醒、隱襲",
      "Peripheral：周邊關節、腳跟（enthesitis）、dactylitis",
      "Extra-articular：uveitis、psoriasis、IBD",
      "家族 HLA-B27 / AS / spondyloarthritis",
      "其他：尿道炎、結膜炎（reactive）"
    ],
    pe: [
      "Schober test（< 5 cm = 受限）、occiput-to-wall",
      "Sacroiliac joint：FABER、Gaenslen、direct compression",
      "Chest expansion < 2.5 cm",
      "Heel/Achilles enthesitis、皮膚 psoriasis、眼"
    ],
    ddx: [
      "Ankylosing spondylitis（最可能）",
      "Non-radiographic axial spondyloarthritis",
      "HIVD（lumbar）",
      "Mechanical low back pain",
      "Reactive / psoriatic / IBD-associated"
    ],
    redFlags: ["神經缺損 + cauda equina → 急 MRI", "脊椎骨折（強直後 brittle）+ 外傷 → 排不穩定"]
  },
  {
    id: "114-35", source: "114", age: 67, sex: "M", department: "內",
    system: "腫瘤/病情解釋", chiefComplaint: "肺癌診斷後病情解釋",
    vignette: "67 歲男性，3 個月前感冒一直乾咳 + 血絲。確診右下葉肺癌 3 cm。礦工 30 年（pneumoconiosis 重大傷病卡），戒菸 1 年（去年 MI 行 PCI 前）。爬小山兩三層梯尚可。",
    history: [
      "病人對診斷的理解（SPIKES）",
      "症狀：cough、hemoptysis、體重減輕、骨痛、頭痛（mets）",
      "共病：CAD with PCI、pneumoconiosis、performance status",
      "支持系統、家庭、宗教",
      "希望了解的內容、是否要家屬一起"
    ],
    pe: [
      "Vital signs + SpO2 + cachexia",
      "Lymph node（supraclavicular）、clubbing",
      "胸部：呼吸音、SVC、Horner",
      "Performance status（ECOG）、CT/PET、EBUS"
    ],
    ddx: [
      "NSCLC stage I-II（3 cm 右下葉）",
      "Treatment options：lobectomy / SBRT（高 risk surg）",
      "共病風險：cardiac（recent PCI）、肺功能（pneumoconiosis）",
      "Pneumoconiosis 補償申請",
      "Smoking cessation 持續"
    ],
    redFlags: ["新發呼吸衰竭 → 排 PE/pneumonia", "突發胸痛 + ST 變化 → 排 stent thrombosis"]
  },
  {
    id: "114-36", source: "114", age: 1, sex: "M", department: "小",
    system: "小兒/神經", chiefComplaint: "1.5 歲幼兒高燒抽搐",
    vignette: "1 歲 6 個月幼童，雙眼上吊 + 全身肢體抽動 1-2 分鐘。昨天感冒微燒，今晨高燒 + 四肢冰冷。哥哥流感。第二胎，發展正常。",
    history: [
      "母生 3A、吃喝拉動睡 + 痙攣 SOAP",
      "痙攣：時長、generalized vs focal、有無 LOC、postictal、頻率",
      "Simple vs complex febrile seizure（< 15 min、generalized、< 24 hr 1 次 = simple）",
      "發燒源、感染接觸（哥哥流感）",
      "家族 epilepsy / febrile seizure、發展史、預防接種"
    ],
    pe: [
      "Vital signs + 意識（GCS / AVPU）",
      "頸僵、Brudzinski、Kernig（meningitis）",
      "前囟、皮疹（Mb purpura）、ENT、肺部",
      "神經學完整、有無 focal deficit"
    ],
    ddx: [
      "Simple febrile seizure（最可能）",
      "Complex febrile seizure",
      "CNS infection（meningitis/encephalitis）→ 必排",
      "Influenza-associated encephalopathy",
      "First epileptic seizure with concurrent fever"
    ],
    redFlags: ["Meningismus / 意識持續改變 → LP", "Status epilepticus（> 5 min）→ benzo + ICU"]
  },
  {
    id: "114-37", source: "114", age: 50, sex: "F", department: "內",
    system: "感染/呼吸", chiefComplaint: "5 週黃痰咳嗽 + 午後發燒",
    vignette: "50 歲女性，5 週黃痰、輕微痰、咳嗽，下午發燒 38。DM 20 年口服藥控制。菸酒 20 年。",
    history: [
      "咳嗽性質、痰量/顏色/血、夜汗、體重減輕（TB 線索）",
      "發燒 pattern（午後低燒 → TB）、寒顫",
      "TB 接觸史、家族史、BCG、職業（醫療/監獄）",
      "Risk factors：DM、smoker、HIV、steroid、營養",
      "其他：胸痛、呼吸困難、anorexia"
    ],
    pe: [
      "Vital signs + SpO2 + cachexia",
      "Lymph node（supraclavicular、cervical）",
      "胸部：crackles、bronchial breath、egophony、上葉 amphoric",
      "Sputum AFB × 3 + CXR + IGRA"
    ],
    ddx: [
      "Pulmonary tuberculosis（菸 + DM + 慢性 + 午後燒）",
      "Bacterial pneumonia",
      "Lung cancer（菸史）",
      "Bronchiectasis with infection",
      "Atypical pneumonia"
    ],
    redFlags: ["大量咳血 → embolization", "DM ketoacidosis 合併感染 → ICU"]
  },
  {
    id: "114-38", source: "114", age: 50, sex: "M", department: "急",
    system: "肝臟/腫瘤", chiefComplaint: "HCC 末期 + 黃疸 + 呼吸困難",
    vignette: "50 歲男性，慢性 HBV 未追蹤。28 年酒癮幾乎每天喝。發現黃疸就診。3 個月體重減輕。肝腫大 + 壓痛 + 下肢水腫。Tbil/D 31/20、AFP 1174。CT：肝硬化 + 多發 HCC（最大 15 cm + portal vein thrombosis）。今天虛弱 + 呼吸困難。",
    history: [
      "Liver decompensation：jaundice、ascites、變化意識（HE）、出血",
      "出血：bleeding tendency、varices 史、melena/hematemesis",
      "肝癌症狀：腫瘤破裂腹痛、ascites 急速增加",
      "酒精戒斷風險、家屬陪伴、安寧意願",
      "症狀控制需求：疼痛、噁心、呼吸困難、瘙癢"
    ],
    pe: [
      "Vital signs + GCS（HE）+ asterixis",
      "肝脾、ascites（shifting dullness、fluid wave）",
      "皮膚：spider、palmar erythema、jaundice",
      "下肢水腫、testicular atrophy"
    ],
    ddx: [
      "Decompensated cirrhosis with HCC（advanced）",
      "Hepatic encephalopathy（呼吸困難 → 排）",
      "Tumor rupture / portal vein thrombosis",
      "Hepatorenal syndrome",
      "Spontaneous bacterial peritonitis（SBP）"
    ],
    redFlags: ["GI bleeding from varices → endoscopy + octreotide", "病情末期 → 安寧緩和諮詢"]
  },
  {
    id: "114-39", source: "114", age: 51, sex: "F", department: "內",
    system: "感染/呼吸", chiefComplaint: "發燒 5 天 + 流感接觸",
    vignette: "51 歲女老師。班上 3 個學生確診流感。持續發燒 5 天高至 39、咳嗽黃痰、頭痛、鼻塞、流鼻水、喉嚨痛、肌肉痠痛、輕微腹瀉。",
    history: [
      "發燒 timeline、最高溫、寒顫、退燒藥反應",
      "流感典型 symptoms：發燒、肌痛、頭痛、咳嗽、喉嚨痛",
      "接觸史 + 疫苗史",
      "重症 risk factors：年齡、共病、孕婦、肥胖、免疫抑制",
      "併發症線索：呼吸喘、胸痛、SpO2、意識"
    ],
    pe: [
      "Vital signs + SpO2",
      "ENT、淋巴結、pharynx",
      "胸部聽診（pneumonia complication）",
      "Influenza rapid test、CXR if 喘"
    ],
    ddx: [
      "Influenza A/B（最可能）",
      "Influenza with bacterial pneumonia",
      "COVID-19",
      "Atypical pneumonia",
      "Mononucleosis"
    ],
    redFlags: ["SpO2 < 94% → CXR 排 pneumonia", "發病 < 48 hr → oseltamivir"]
  },
  {
    id: "114-40", source: "114", age: 41, sex: "F", department: "內",
    system: "呼吸", chiefComplaint: "持續咳嗽 + wheeze + 夜間呼吸困難",
    vignette: "41 歲女性，過年大掃除後持續咳嗽。最近聽到喘鳴聲，半夜吸不到氣醒來。低燒 + 喘 + 咳嗽，運動課時更嚴重。長期 AR。",
    history: [
      "咳嗽性質、誘發因子（過敏原、運動、冷空氣、感染）",
      "Wheezing、夜醒、運動受限",
      "Atopy triad：AR、AD、asthma 個人 + 家族",
      "GERD、ACE inhibitor、smoking",
      "新發 trigger：清掃、寵物、装修"
    ],
    pe: [
      "Vital signs + SpO2 + RR",
      "Wheezing、prolonged expiration、accessory muscle",
      "Allergic shiner、nasal turbinate、eczema",
      "PEFR、spirometry（reversibility test）"
    ],
    ddx: [
      "Adult-onset asthma（最可能）",
      "Allergic bronchopulmonary aspergillosis",
      "Vocal cord dysfunction",
      "GERD-induced cough",
      "COPD（雖年輕但需排）"
    ],
    redFlags: ["Silent chest + 意識改變 → near-fatal asthma + ICU", "PEFR < 50% predicted → severe"]
  },
  // ========== 41-50 ==========
  {
    id: "114-41", source: "114", age: 43, sex: "F", department: "內",
    system: "神經/骨骼", chiefComplaint: "頸僵痛 + 右上肢麻無力（外傷後）",
    vignette: "43 歲女性，2 個月前浴室滑倒，頸先前彎後甩。隔天診所給止痛肌鬆。最近 1 個月頸僵痛加劇傳至右肩胛 + 右上肢麻無力。銀行職員久坐電腦。",
    history: [
      "外傷史：whiplash mechanism、有無 LOC",
      "頸痛 LQQOPERA：放射、夜痛、咳嗽用力加重",
      "上肢：dermatome 分布、power、coordination",
      "Red flags：bowel/bladder、saddle、雙側、高燒、體重減輕",
      "工作姿勢、頸部肌肉緊張"
    ],
    pe: [
      "頸 ROM、Spurling test",
      "上肢 motor + sensation + DTR",
      "Hoffmann sign、長徑、gait（cord 受壓）",
      "MRI cervical spine"
    ],
    ddx: [
      "Cervical disc herniation（C6/7 most common）",
      "Cervical spondylosis with radiculopathy",
      "Whiplash-associated disorder",
      "Brachial plexus injury",
      "Cervical myelopathy（need to exclude）"
    ],
    redFlags: ["Myelopathy（步態不穩 + 反射亢進）→ 急 MRI", "外傷後 + 嚴重頸痛 → 排 fracture"]
  },
  {
    id: "114-42", source: "114", age: 56, sex: "F", department: "外",
    system: "腫瘤/乳房", chiefComplaint: "左乳硬塊 1 個月",
    vignette: "56 歲女性，1 個月前洗澡時左乳內側外上方摸到硬塊。乳房偶有抽痛但無變形、皮膚變化、腋下淋巴、乳頭凹陷或異常分泌物。",
    history: [
      "硬塊：發現時間、大小變化、與月經週期關係（已停經則不變）",
      "皮膚變化：皮厚、橘皮、紅腫、潰瘍",
      "乳頭：凹陷、分泌物（血性）",
      "腋下/鎖骨上腫塊、骨痛、體重減輕",
      "Risk factors：年齡、家族（BRCA）、晚生 / 不生 / 早經晚停、HRT、肥胖"
    ],
    pe: [
      "視診：兩側對稱、皮膚、乳頭、酒窩 sign",
      "觸診：仰臥、4 象限 + 腋窩 + supraclavicular",
      "Mass：大小、固定/活動、tenderness、margin",
      "Mammography + ultrasound + biopsy"
    ],
    ddx: [
      "Invasive ductal carcinoma（最可能）",
      "Fibroadenoma / phyllodes",
      "Cyst",
      "Mastitis / abscess",
      "Lobular carcinoma"
    ],
    redFlags: ["皮膚變化 + 腫塊 + LN → 急 biopsy", "Inflammatory breast CA（皮膚紅腫）"]
  },
  {
    id: "114-43", source: "114", age: 50, sex: "F", department: "急",
    system: "感染/神經", chiefComplaint: "頭痛 + 發燒 1 週",
    vignette: "50 歲未婚女工程師。值班作息不規律。頭痛 + 全身倦怠 1 週，近 2 天頭痛加劇 + 發燒急診。",
    history: [
      "頭痛 LQQOPERA：性質（thunderclap → SAH）、worst ever、與姿勢/活動關係",
      "伴隨：頸僵、畏光、噁心嘔吐、意識、視力",
      "發燒 pattern + 寒顫",
      "免疫狀態（HIV/steroid/DM/化療）",
      "外傷、近期感染、旅遊接觸、性行為"
    ],
    pe: [
      "Vital signs + GCS",
      "Meningismus：頸僵、Brudzinski、Kernig",
      "顱神經、focal neurology、papilledema",
      "皮疹（Mb purpura）、心音、肺"
    ],
    ddx: [
      "Bacterial meningitis（必排）",
      "Viral encephalitis（HSV）",
      "Subarachnoid hemorrhage（thunderclap）",
      "Brain abscess",
      "Migraine with fever"
    ],
    redFlags: ["Meningismus + altered mental → 立即 abx + LP", "Focal deficit → CT before LP"]
  },
  {
    id: "114-44", source: "114", age: 52, sex: "F", department: "內",
    system: "感染/呼吸", chiefComplaint: "確診流感 + 持續發燒",
    vignette: "52 歲已婚高中老師，流感快篩 (+)。發燒 2 天 + 黃痰咳嗽不喘 + 頭痛、鼻塞、流鼻水、喉嚨痛、肌痛、輕微腹瀉。",
    history: [
      "症狀詳述 + 重症 warning signs（呼吸困難、胸痛、嗜睡）",
      "共病：DM、HTN、心肺疾病、孕婦、肥胖、免疫抑制",
      "接觸史、家中其他人有無症狀",
      "疫苗史",
      "對 oseltamivir 的需求 + 隔離"
    ],
    pe: [
      "Vital signs + SpO2",
      "ENT + 淋巴",
      "胸部聽診",
      "Rapid flu test confirmed"
    ],
    ddx: [
      "Influenza A/B（已確診）",
      "併發症：bacterial pneumonia、myocarditis、encephalitis",
      "COVID-19 co-infection",
      "Sinusitis（次發）",
      "Otitis media"
    ],
    redFlags: ["呼吸喘 / SpO2 ↓ → 排 viral / bacterial pneumonia", "胸痛 / 心律不整 → myocarditis"]
  },
  {
    id: "114-45", source: "114", age: 54, sex: "F", department: "內",
    system: "內分泌/心血管", chiefComplaint: "心悸 + 怕熱 + 體重減輕",
    vignette: "54 歲女性，心悸 1 個月。跳得快持續 10 分鐘。喝咖啡/茶/家事誘發，休息也會。呼吸不順、臉紅、怕熱。月減 2 kg。會失眠。已停經 5-6 年。",
    history: [
      "甲亢症狀：怕熱、出汗、體重減輕、食慾增加、腹瀉、震顫、焦慮",
      "心悸：頻率、規則否、暈厥、胸痛",
      "眼部：複視、眼凸、淚溢",
      "頸部腫脹、吞嚥",
      "家族 thyroid disease、antithyroid drug、iodine"
    ],
    pe: [
      "Vital signs（HR↑ BP↑ 脈壓增大）",
      "甲狀腺：goiter、bruit、nodule",
      "Eyes：proptosis、lid lag",
      "震顫、皮膚（warm moist）、心音、ECG"
    ],
    ddx: [
      "Hyperthyroidism（Graves' disease 最可能）",
      "Toxic multinodular goiter",
      "Thyroiditis",
      "Pheochromocytoma",
      "Anxiety / perimenopause"
    ],
    redFlags: ["Thyroid storm（高燒 + 意識改變 + HF）→ ICU", "AF with rapid response → rate control"]
  },
  {
    id: "114-46", source: "114", age: 50, sex: "F", department: "內",
    system: "內分泌/腫瘤", chiefComplaint: "半年內體重減輕 8 kg",
    vignette: "50 歲女性，半年內 58 → 50 kg + 疲倦。叔叔 3 個月前大腸癌過世，開始運動飲食調整。精神/睡眠/胃口正常。無流汗手抖心跳快。無咳嗽吞嚥困難。大小便正常。無陰道出血。",
    history: [
      "Quantify weight loss + 隨時間軸（intentional vs unintentional）",
      "B symptoms：發燒、夜汗、食慾",
      "系統 review：GI、Resp、GU、神經、內分泌",
      "情緒 + 飲食 + 運動",
      "家族癌症史（叔叔）"
    ],
    pe: [
      "Vital signs + BMI + BMR",
      "甲狀腺、淋巴、心肺",
      "腹部：mass、organomegaly",
      "乳房 + pelvic + DRE"
    ],
    ddx: [
      "Intentional weight loss（飲食運動調整）",
      "Hyperthyroidism",
      "Malignancy（GI、肺、ovary）",
      "Diabetes mellitus",
      "Depression / anxiety"
    ],
    redFlags: ["B symptoms + 體重減輕 → 全身 workup", "新發貧血 → 排 GI cancer"]
  },
  {
    id: "114-47", source: "114", age: 22, sex: "M", department: "急",
    system: "呼吸/胸壁", chiefComplaint: "右側胸痛 + 呼吸困難",
    vignette: "22 歲男性，昨晚突發右側胸痛。胸悶、尖銳刺痛、痛擴散到背。今早胸悶 + 深呼吸不順 + 呼吸困難。趕報告壓力大、疲倦。無外傷、無慢性病。",
    history: [
      "胸痛 LQQOPERA：pleuritic（呼吸加重）vs constant、放射",
      "呼吸：dyspnea、SOB、咳嗽、咳血",
      "誘因：外傷、用力、咳嗽、潛水",
      "Risk factors：tall lean male、smoker、Marfan、過去氣胸",
      "PE risk：immobilization、長途、避孕藥、家族 DVT"
    ],
    pe: [
      "Vital signs + SpO2",
      "胸部：呼吸音減弱、hyperresonance（pneumothorax）、tracheal shift",
      "Subcutaneous emphysema、JVP（tension）",
      "CXR upright + ECG"
    ],
    ddx: [
      "Spontaneous pneumothorax（tall lean young male）",
      "Pulmonary embolism",
      "Costochondritis",
      "Musculoskeletal pain",
      "Pleurisy / pneumonia"
    ],
    redFlags: ["Tension pneumothorax（HR↑ BP↓ JVP↑ tracheal shift）→ 立即 needle decompression", "Massive PE → thrombolysis"]
  },
  {
    id: "114-48", source: "114", age: 55, sex: "F", department: "內",
    system: "內分泌/精神", chiefComplaint: "心悸 + 冷汗 + 熱感",
    vignette: "55 歲女性，心悸半年、一天 5-6 次，伴冷汗失眠。發作時無力、提不起精神。陣陣發熱、臉燙 30 秒-1 分。無暈倒。1 年內體重 +3 kg，飲食正常。無胸痛、頭痛、腹痛。",
    history: [
      "停經史 + 月經狀態",
      "心悸：頻率、誘發、伴隨胸痛 / 暈厥",
      "Vasomotor 症狀：熱潮紅、夜汗、睡眠",
      "甲亢 vs 焦慮 vs perimenopause 鑑別",
      "情緒 + 壓力 + 睡眠"
    ],
    pe: [
      "Vital signs + BMI",
      "甲狀腺、震顫、皮膚",
      "心音 + bruit",
      "TSH、FSH/LH、ECG、24 hr Holter"
    ],
    ddx: [
      "Perimenopause / menopause",
      "Generalized anxiety / panic",
      "Hyperthyroidism",
      "Pheochromocytoma",
      "Cardiac arrhythmia（PSVT）"
    ],
    redFlags: ["心悸 + 暈厥 → 24 hr Holter + ECG", "停經後新發 → 排內膜癌（出血）"]
  },
  {
    id: "114-49", source: "114", age: 0, sex: "M", department: "小",
    system: "小兒/新生兒", chiefComplaint: "15 天大男嬰，黃疸不褪 + 嗜睡",
    vignette: "15 天大男嬰，今天睡眠較多。全母乳直接餵食，每天換尿布 4 次無粉紅沉澱。大便金黃。哭聲宏亮。媽媽第二胎，39 週自然產 2953 gm。出生第 3 天黃疸 15、照光 2 天降到 12。父 O 母 B，老大也照光 3 天。",
    history: [
      "母生 3A、吃喝拉動睡（新生兒）",
      "黃疸 onset、全身分布、進展",
      "餵食：母奶量、餵食頻率、體重變化",
      "大便：顏色（金黃 vs 灰白 → biliary atresia）",
      "尿布：粉紅 = 高 uric → dehydration"
    ],
    pe: [
      "Vital signs、體重 vs 出生（要 < 7-10% 減少）",
      "Skin：黃疸範圍（cephalocaudal progression）、Kramer zone",
      "Hydration、活力、囟門",
      "肝脾、cephalohematoma、腹部"
    ],
    ddx: [
      "Breast milk jaundice（最可能，prolonged jaundice）",
      "Breastfeeding jaundice（dehydration）",
      "ABO incompatibility（母 O 嬰 B/A）",
      "G6PD deficiency",
      "Biliary atresia（灰白便則必排）"
    ],
    redFlags: ["TB > 20 mg/dL → 換血 + photo", "Conjugated > 20% → 排 biliary atresia（< 60 d）"]
  },
  {
    id: "114-50", source: "114", age: 6, sex: "M", department: "小",
    system: "小兒/內分泌", chiefComplaint: "6 歲男孩身材矮小",
    vignette: "6 歲男孩，父親覺身高比同學矮。學習能力相當、運動可。家族無類似情況。父母小時無慢長印象。無住院/開刀史。足月自然產 3200 gm 50 cm。疫苗正常。",
    history: [
      "母生 3A、吃喝拉動睡",
      "生長曲線、身高速度（cm/yr）、父母身高 → MPH",
      "營養 + 運動 + 睡眠 + 慢性病",
      "甲狀腺 / GI / GH / 發展遲緩線索",
      "情緒、學校"
    ],
    pe: [
      "身高/體重描點 + 速度",
      "Tanner stage（pubic hair、testis）",
      "甲狀腺、心肺、腹部",
      "Bone age、TSH、IGF-1、CBC"
    ],
    ddx: [
      "Familial short stature",
      "Constitutional delay of growth and puberty",
      "GH deficiency",
      "Hypothyroidism",
      "Chronic disease（celiac、IBD）"
    ],
    redFlags: ["Height velocity < 4 cm/yr → 內分泌轉診", "Disproportionate body → skeletal dysplasia"]
  },
  // ========== 51-63 ==========
  {
    id: "114-51", source: "114", age: 45, sex: "F", department: "內",
    system: "腎臟", chiefComplaint: "雙腿水腫 1 個月 + 蛋白尿",
    vignette: "45 歲家庭主婦。1 個月前下肢水腫，1 週後合併眼皮腫求診，告知 proteinuria，利尿劑無效。2 週前食慾不振、腹脹、容易疲倦、暴躁。1 週前尿少。1 個月內體重 50 → 60 kg。15 年前 appendectomy。",
    history: [
      "水腫部位 + onset：眼瞼晨起 + 下肢午後 → nephrotic",
      "尿：泡泡尿、量、顏色、hematuria",
      "腹脹（ascites）、呼吸困難（pleural effusion）",
      "Risk factors：DM、HTN、HBV/HCV、SLE、藥物（NSAID）",
      "家族腎病、之前蛋白尿"
    ],
    pe: [
      "BP、體重、水腫分布（pitting）",
      "Eye：periorbital edema",
      "腹部：ascites、shifting dullness",
      "心肺：JVP、crackles、S3、effusion"
    ],
    ddx: [
      "Nephrotic syndrome（minimal change、FSGS、membranous）",
      "Membranous nephropathy（成人最常見）",
      "Diabetic nephropathy",
      "Lupus nephritis",
      "Heart failure / cirrhosis（鑑別）"
    ],
    redFlags: ["Anasarca + AKI → 急 dialysis 評估", "重度低 albumin + thrombosis 風險 → anticoagulation"]
  },
  {
    id: "114-52", source: "114", age: 46, sex: "F", department: "婦",
    system: "婦產/腫瘤", chiefComplaint: "子宮內膜癌診斷後解釋",
    vignette: "46 歲女性，半年月經不規則 + 異常出血。婦產科 D&C 病理找到惡性 → 子宮內膜癌。需子宮切除。14 歲 appendectomy。母 40 歲子宮頸癌過世。",
    history: [
      "病人對診斷的理解（SPIKES）",
      "症狀：出血、骨盆痛、體重減輕、排尿問題",
      "Risk factors：肥胖、糖尿病、HTN、PCOS、unopposed estrogen、Lynch syndrome（母婦癌）",
      "家屬支持、保留生育意願（46 歲較不重要）",
      "對手術的擔心、共病"
    ],
    pe: [
      "Vital signs、BMI",
      "腹部：mass、organomegaly",
      "Pelvic：cervix、子宮、附件",
      "Lymph node、TVS、MRI staging"
    ],
    ddx: [
      "Endometrial adenocarcinoma（type I endometrioid 最常見）",
      "Endometrial hyperplasia",
      "Cervical extension",
      "Ovarian / 婦科其他癌",
      "Lynch syndrome（家族）→ MSI/IHC test"
    ],
    redFlags: ["大量陰道出血 → 急止血 + transfusion", "Lynch family screening → 大腸鏡"]
  },
  {
    id: "114-53", source: "114", age: 33, sex: "F", department: "婦",
    system: "婦產", chiefComplaint: "經痛加劇 2 年 + 右下腹痛",
    vignette: "33 歲未婚女，性行為。2 年前月經來下腹痛 + 腰酸。最近月經前後 2 天 RLQ 痛。偶腹瀉。止痛藥效果遞減。20 歲 TOP。週期 28-30 天 5-7 天。冰冷食物惡化。從未做 Pap。",
    history: [
      "經痛時序、性質、放射、止痛藥反應",
      "深部性交痛、排便痛、不孕（endometriosis 線索）",
      "性孕經分片",
      "經血量、blood clot",
      "家族 endometriosis"
    ],
    pe: [
      "腹部：tenderness、mass",
      "Pelvic：cul-de-sac nodularity、adnexal mass",
      "子宮：boggy、retroverted",
      "TVS + CA-125 + diagnostic laparoscopy"
    ],
    ddx: [
      "Endometriosis（最可能）",
      "Adenomyosis",
      "Ovarian endometrioma",
      "PID",
      "Primary dysmenorrhea"
    ],
    redFlags: ["不孕 + 嚴重痛 → laparoscopy", "急性 RLQ + adnexal mass → 排 ovarian torsion"]
  },
  {
    id: "114-54", source: "114", age: 67, sex: "M", department: "內",
    system: "腎臟", chiefComplaint: "雙下肢水腫 + 泡沫尿（NSAID 後）",
    vignette: "67 歲男性，菸 1 包/d，偶喝酒。2 個月前扭傷服止痛藥 2 週，之後尿量↓、深色 + 泡沫。足部水腫（午後）→ 小腿水腫，無痛。無 URI/皮膚病灶/胸悶/PND，可平躺。腹脹。",
    history: [
      "水腫：起始、分布、與 NSAID 時序",
      "尿：量、顏色、泡沫、頻率",
      "Risk factors：年齡、菸、HTN、DM、NSAID 長期",
      "排除 HF：PND、orthopnea、運動耐受",
      "排除 cirrhosis：黃疸、酒精、肝病史"
    ],
    pe: [
      "BP、體重、水腫（pitting）",
      "JVP、心肺、肝脾、ascites",
      "Renal：bruit、CVA",
      "Urinalysis（蛋白、血、casts）+ Cr + GFR"
    ],
    ddx: [
      "Acute interstitial nephritis（NSAID）→ AKI",
      "Nephrotic syndrome（membranous nephropathy）",
      "CKD with NSAID-induced AKI",
      "Heart failure（鑑別）",
      "Hepatorenal / cirrhosis"
    ],
    redFlags: ["Anuria + uremia → 急 dialysis", "NSAID 必停"]
  },
  {
    id: "114-55", source: "114", age: 37, sex: "F", department: "內",
    system: "肝臟", chiefComplaint: "雙腳水腫 + 黃疸",
    vignette: "37 歲女性，2 個月疲倦食慾不振。仍下田。買維他命服用初有改善。最近 1 週皮膚變黃。3 天雙下肢水腫無痛。穿鞋困難無法下田。",
    history: [
      "肝病線索：黃疸、深尿、灰白便、瘙癢",
      "病因：HBV/HCV、酒、藥物、herbal、自體免疫、遺傳（Wilson、HFE）",
      "decompensation：水腫、ascites、HE、出血、腹圍",
      "B symptoms（HCC）",
      "高風險暴露 + 家族肝病"
    ],
    pe: [
      "Vital signs + jaundice + cachexia",
      "肝脾、ascites、Caput medusae",
      "皮膚：spider、palmar、Dupuytren",
      "下肢水腫、testicular atrophy、asterixis"
    ],
    ddx: [
      "Liver cirrhosis with decompensation（最可能）",
      "Acute hepatitis（HBV/HCV/A/E）",
      "Drug-induced liver injury（herbal）",
      "Autoimmune hepatitis",
      "Hepatocellular carcinoma"
    ],
    redFlags: ["GI bleed / HE → 急住院", "Tense ascites + 發燒 → SBP（abx + paracentesis）"]
  },
  {
    id: "114-56", source: "114", age: 65, sex: "F", department: "急",
    system: "感染/內分泌", chiefComplaint: "DM/HTN + 高燒 + 意識改變",
    vignette: "65 歲女性，DM + HTN 規則用藥。3 天前食慾減低，昨日發燒寒顫。無咳/頭痛/嘔吐/腹痛/拉肚子。2 天小便燒灼 + 腳腫 + 尿量少。今晨呼吸急促、反應較慢急診。",
    history: [
      "感染源：UTI 線索（dysuria、flank pain）",
      "意識改變、發燒 timeline",
      "DM control：BG、HbA1c、用藥",
      "Volume status：尿量、口渴、PO intake",
      "排除 DKA / HHS（多飲多尿、Kussmaul）"
    ],
    pe: [
      "Vital signs（qSOFA）+ GCS + dehydration",
      "CVA tenderness、suprapubic、皮膚",
      "心肺、abdomen",
      "Glucose、ketones、ABG、urine + blood culture、lactate"
    ],
    ddx: [
      "Urosepsis with septic shock（最可能）",
      "HHS（DM + 意識改變）",
      "DKA",
      "Acute pyelonephritis",
      "Stroke（意識改變）"
    ],
    redFlags: ["qSOFA ≥ 2 → ICU + 1 hr bundle", "BG > 600 + 意識 → HHS"]
  },
  {
    id: "114-57", source: "114", age: 53, sex: "M", department: "內",
    system: "呼吸/過敏", chiefComplaint: "慢性咳 2 年 + 冷空氣誘發",
    vignette: "53 歲男性，咳嗽 2 年治不好。熱開水緩解，冷空氣/風/花粉/冷氣/打掃加重。胸悶、早晨流鼻水、鼻涕倒流、有點喘。膝關節疼痛史。母 AR。無菸酒檳榔。",
    history: [
      "咳嗽性質、誘發因子（典型 trigger pattern）",
      "Atopy 史 + 家族（母 AR）",
      "Wheezing、夜咳、運動誘發",
      "GERD、ACE inhibitor",
      "TB / 職業 / 家族肺癌"
    ],
    pe: [
      "Vital signs + SpO2",
      "Wheezing、prolonged expiration",
      "Allergic shiner、nasal mucosa、ENT",
      "PEFR、spirometry + reversibility"
    ],
    ddx: [
      "Adult-onset asthma（最可能）",
      "Cough-variant asthma",
      "Allergic rhinitis with PND-induced cough",
      "GERD-related cough",
      "ACE inhibitor / COPD（要排）"
    ],
    redFlags: ["Severe attack：silent chest → ICU", "PEFR < 50% → severe"]
  },
  {
    id: "114-58", source: "114", age: 45, sex: "M", department: "內",
    system: "感染", chiefComplaint: "大陸台商再發燒",
    vignette: "45 歲男性，大陸台商居住東莞。1 週前感冒 + 退燒。昨天再發燒擔心嚴重。2 個月回台 1 次。已婚 1 子。父母獨子。大學畢業性沉穩。在大陸 > 3 年。健康無慢性病。",
    history: [
      "發燒 timeline + 寒顫 + 退燒藥反應",
      "旅遊接觸：大陸地區 endemic 疾病（malaria、typhoid、TB、dengue、leptospirosis）",
      "暴露：飲食、水、動物、shellfish、性行為",
      "局部症狀：URI、GI、UTI、皮膚",
      "疫苗 + 預防"
    ],
    pe: [
      "Vital signs + 體溫 pattern",
      "全身淋巴 + 肝脾",
      "皮膚：rash、eschar、jaundice",
      "心肺 + 神經 + 腹部"
    ],
    ddx: [
      "Imported malaria（必排，去過 endemic）",
      "Typhoid / paratyphoid",
      "Dengue fever",
      "Hepatitis A/E",
      "Influenza / COVID 相關"
    ],
    redFlags: ["Cyclic fever + 黃疸 + splenomegaly → malaria smear", "Severe dengue：bleeding/hypotension → ICU"]
  },
  {
    id: "114-59", source: "114", age: 0, sex: "F", department: "小",
    system: "小兒/感染", chiefComplaint: "28 天大女嬰高燒 + 嗜睡",
    vignette: "28 天女嬰排行第三。今天反覆高燒到 39.5、食慾差、不愛喝奶、強餵會吐、嗜睡。無咳/流鼻水/腹瀉。BW 4.5 kg、L 54、HC 37。出生時自然產順 3.5 kg 50 cm 34.5 cm。母奶。每天大便 3 次黃色軟便。",
    history: [
      "母生 3A、吃喝拉動睡（neonate）",
      "發燒 timeline、最高溫、退燒反應",
      "活力、食慾、嗜睡（< 3 m 月發燒視為 sepsis until proven）",
      "排尿、大便、嘔吐",
      "GBS、母親感染、產時抗生素、群居接觸"
    ],
    pe: [
      "Vital signs + GCS + 活力",
      "前囟、皮疹、肝脾、umbilicus",
      "胸 + 腹 + 神經",
      "Full septic workup：CBC、CRP、blood + urine + CSF culture"
    ],
    ddx: [
      "Neonatal sepsis（必排，late-onset 7-28 d，常 GBS / E. coli）",
      "UTI",
      "Meningitis",
      "Pneumonia",
      "Viral infection（HSV、enterovirus）"
    ],
    redFlags: ["< 3 m 發燒 → 全 septic workup + empiric abx", "Bulging fontanel + altered mental → meningitis"]
  },
  {
    id: "114-60", source: "114", age: 58, sex: "M", department: "急",
    system: "外傷/神經", chiefComplaint: "頭部外傷 + LOC + 熊貓眼",
    vignette: "58 歲男性，今下午工地 2 樓樓梯跌落（半層樓）。短暫 LOC 約 30 秒。左臉淤青、左眼熊貓眼。頭很痛、頭暈、想吐。營建主管。菸 1 包/d、週 1 喝酒、常喝維士比。",
    history: [
      "AMPLE：Allergy、Medication、Past、Last meal、Event（受傷機轉）",
      "LOC、amnesia、抽搐、嘔吐、視力、聽力",
      "Skull fracture sign：raccoon eyes、Battle、CSF rhinorrhea/otorrhea",
      "Anticoagulant 服用",
      "酒精 + 跌倒原因（syncope vs trip）"
    ],
    pe: [
      "ATLS primary：ABCDE",
      "GCS + 瞳孔（asymmetry）",
      "Skull fracture signs（raccoon、Battle、hemotympanum）",
      "頸椎 + 神經學完整",
      "CT brain + C-spine"
    ],
    ddx: [
      "Basal skull fracture（raccoon eyes）",
      "Epidural hematoma（lucid interval）",
      "Subdural hematoma",
      "Cerebral contusion / DAI",
      "Concussion（mild TBI）"
    ],
    redFlags: ["GCS↓ 或 anisocoria → 急 CT + neurosurg", "Anticoagulant + head injury → 即 reverse"]
  },
  {
    id: "114-61", source: "114", age: 57, sex: "M", department: "內",
    system: "心血管", chiefComplaint: "雙腳水腫 + 進行性呼吸困難",
    vignette: "57 歲男性，3 個月日漸加劇 dyspnea，2 週雙踝水腫求診。1 年前體力變差、PND。活動加劇、休息緩解。教務主任。無 HTN/DM。不抽菸偶酒。咖啡 2 杯/d。",
    history: [
      "Dyspnea pattern：exertional、orthopnea、PND",
      "水腫：分布（雙下肢）、pitting、晝夜變化",
      "胸痛、心悸、暈厥",
      "Risk factors：CAD、HTN、DM、瓣膜、心肌病、酒精、家族",
      "其他：cough、blood、感染"
    ],
    pe: [
      "Vital signs + JVP",
      "心音：S3、murmur",
      "肺：crackles、effusion",
      "肝、ascites、下肢水腫、cyanosis"
    ],
    ddx: [
      "Heart failure with reduced EF（最可能）",
      "Heart failure with preserved EF",
      "Valvular heart disease",
      "Cardiomyopathy（dilated）",
      "Constrictive pericarditis"
    ],
    redFlags: ["Acute pulmonary edema → IV diuretic + O2 + NIV", "Cardiogenic shock → ICU + inotrope"]
  },
  {
    id: "114-62", source: "114", age: 16, sex: "F", department: "小",
    system: "感染/皮膚", chiefComplaint: "16 歲女喉痛 + 紅疹",
    vignette: "16 歲女，求診前一天發燒、喉嚨痛、食慾差。今天紅疹癢，從脖子 → 身體 → 四肢。摸起來粗粗的（sandpaper）。無咳/流鼻水/嘔吐/腹瀉。哥哥 2 週前發燒 + 皮膚脫屑。",
    history: [
      "發燒 + ENT 症狀詳述",
      "皮疹：分布、性質（sandpaper、blanchable）、瘙癢",
      "其他：草莓舌、phyaryngeal exudate、扁桃腺",
      "接觸史（哥哥脫屑 = scarlet fever 病程）",
      "Centor criteria：發燒、扁桃腺白斑、頸 LN、無咳"
    ],
    pe: [
      "Vital signs",
      "ENT：扁桃腺紅腫滲出、petechiae、strawberry tongue",
      "皮膚：sandpaper rash、Pastia line、circumoral pallor",
      "頸前 LN、腹部（splenomegaly 排 mono）"
    ],
    ddx: [
      "Scarlet fever（GAS）",
      "Streptococcal pharyngitis without rash",
      "Infectious mononucleosis（EBV）",
      "Kawasaki disease（年齡較小）",
      "Viral exanthem / 藥疹"
    ],
    redFlags: ["併發症：rheumatic fever（2-3 wk）、APSGN（1-2 wk）→ abx 完整 10 d", "Toxic shock → ICU"]
  },
  {
    id: "114-63", source: "114", age: 35, sex: "M", department: "外",
    system: "腸胃", chiefComplaint: "腹痛 2 天加劇",
    vignette: "35 歲男老師，肚痛 2 天加劇。昨早胃悶不適 + 噁心無吐。整天無胃口。昨晚整個肚子悶痛，今晨走路更痛、車震動更痛。無 PHx、無菸酒。父 HTN。",
    history: [
      "腹痛 LQQOPERA：起點 → 移轉痛、加重 / 緩解（震動加重 = peritoneal）",
      "Anorexia、噁心、嘔吐、發燒",
      "排氣排便、bowel habit",
      "近期飲食、外傷、手術史",
      "Red flags：melena、blood、jaundice"
    ],
    pe: [
      "Vital signs（發燒）",
      "腹部：rebounding、guarding、rigidity、bowel sound",
      "McBurney、Rovsing、Psoas、Obturator",
      "DRE + CBC + CT abdomen"
    ],
    ddx: [
      "Acute appendicitis（最可能）",
      "Mesenteric adenitis",
      "Right ureteral stone",
      "Meckel's diverticulitis",
      "Perforated peptic ulcer"
    ],
    redFlags: ["全腹 rigidity + 發燒 → 排穿孔", "WBC↑ + free air → 急開"]
  },

  // ========== RemNote 衍生 #64-103（40 例補充高頻 OSCE 主題） ==========
  {
    id: "RM-01", source: "remnote", age: 65, sex: "M", department: "內",
    system: "神經", chiefComplaint: "突發左側肢體無力 + 構音障礙",
    vignette: "65 歲男性，HTN/DM 病史。1 小時前看電視時突然左手腳無力、口齒不清，家人緊急送醫。",
    history: [
      "Onset：last known well 時間（決定 tPA 窗口）",
      "症狀詳述：FAST（face/arm/speech/time）",
      "頭痛 / LOC / 抽搐（出血或非中風線索）",
      "Risk：HTN、DM、AF、smoking、過去 TIA/stroke",
      "用藥：anticoagulant、antiplatelet"
    ],
    pe: [
      "NIHSS（必跑）",
      "Vital signs + BP（治療目標 < 185/110 if tPA）",
      "心律（AF）+ carotid bruit",
      "STAT non-contrast CT brain（排出血）"
    ],
    ddx: [
      "Acute ischemic stroke（最可能）",
      "Hemorrhagic stroke（必排）",
      "Hypoglycemia（stroke mimic）",
      "Postictal Todd's paralysis",
      "Complex migraine"
    ],
    redFlags: ["Onset < 4.5 hr → tPA 評估", "Large vessel occlusion → thrombectomy < 24 hr"]
  },
  {
    id: "RM-02", source: "remnote", age: 60, sex: "M", department: "急",
    system: "心血管", chiefComplaint: "突發胸痛 + 冒冷汗 30 分鐘",
    vignette: "60 歲男性，HTN + smoker。30 分鐘前運動後突發前胸壓榨痛 + 冒冷汗 + 噁心，痛放射至左肩下巴。",
    history: [
      "胸痛 LQQOPERA：壓榨 vs 撕裂、放射、持續時間",
      "伴隨：冷汗、呼吸困難、噁心、暈厥",
      "Risk：HTN、DM、dyslipidemia、smoking、家族早發 CAD",
      "藥物：viagra（NTG 禁忌）、antiplatelet",
      "排除：dissection（撕裂背痛）、PE（pleuritic）"
    ],
    pe: [
      "Vital signs（雙手 BP）+ SpO2",
      "心音：S4、murmur（MR、VSR）",
      "肺：crackles（HF）",
      "12-lead ECG within 10 min + Troponin"
    ],
    ddx: [
      "STEMI（最可能）",
      "NSTEMI / unstable angina",
      "Aortic dissection",
      "Pulmonary embolism",
      "Pericarditis / esophageal spasm"
    ],
    redFlags: ["STEMI → door-to-PCI < 90 min", "Cardiogenic shock → IABP / Impella"]
  },
  {
    id: "RM-03", source: "remnote", age: 70, sex: "M", department: "內",
    system: "呼吸", chiefComplaint: "慢性咳嗽痰 + 漸進喘",
    vignette: "70 歲男性，菸 50 包年。慢性 productive cough > 3 個月/年 連續 2 年以上。最近爬樓梯就喘、AECOPD 急診 2 次。",
    history: [
      "Smoking history（pack-year）+ 戒菸狀態",
      "症狀：咳嗽、痰量、wheeze、運動耐受（mMRC）",
      "Exacerbation 頻率、住院次數",
      "職業 / 環境暴露",
      "共病：CAD、HF、肺癌"
    ],
    pe: [
      "Vital signs + SpO2 + RR",
      "Barrel chest、accessory muscle、pursed-lip",
      "Wheezing、prolonged expiration、distant breath",
      "Cor pulmonale：JVP、hepatomegaly、edema"
    ],
    ddx: [
      "COPD（GOLD stage assessment）",
      "Asthma-COPD overlap",
      "Bronchiectasis",
      "Lung cancer（菸史）",
      "Heart failure"
    ],
    redFlags: ["AECOPD：increased dyspnea/sputum/purulence → abx + steroid + bronchodilator", "PaCO2↑ + 意識改變 → NIV / 插管"]
  },
  {
    id: "RM-04", source: "remnote", age: 28, sex: "F", department: "內",
    system: "風濕", chiefComplaint: "蝶形紅斑 + 關節痛 + 疲倦",
    vignette: "28 歲女性，幾個月以來臉頰蝶形紅斑（曬太陽更紅）+ 多關節對稱疼痛 + 疲倦 + 口腔潰瘍。月經規則。",
    history: [
      "SOAP-BRAIN-MD（SLE 11 criteria）",
      "皮膚：malar、discoid、photosensitivity",
      "關節：晨僵、對稱、小關節",
      "全身：fever、weight、Raynaud",
      "腎、神經、血液系統症狀"
    ],
    pe: [
      "Vital signs + 皮膚（malar、discoid、口腔潰瘍）",
      "關節 ROM + 對稱性",
      "心音（serositis）+ 肺",
      "ANA、anti-dsDNA、C3/C4、complement"
    ],
    ddx: [
      "Systemic lupus erythematosus（SLE）",
      "Mixed connective tissue disease",
      "Rheumatoid arthritis",
      "Drug-induced lupus",
      "Dermatomyositis"
    ],
    redFlags: ["Lupus nephritis → 早期 biopsy", "Lupus cerebritis / pulmonary hemorrhage → ICU"]
  },
  {
    id: "RM-05", source: "remnote", age: 50, sex: "F", department: "內",
    system: "風濕", chiefComplaint: "雙手晨僵 + 對稱多關節痛 6 個月",
    vignette: "50 歲女性，6 個月以來雙手 MCP/PIP 對稱腫痛 + 晨僵 > 1 hr，影響扣鈕扣。",
    history: [
      "晨僵時間（> 30 min = 發炎性）",
      "受影響關節（對稱、小關節 = RA）",
      "Extra-articular：眼乾、口乾、皮下結節、肺、心",
      "家族 RA / 風濕病",
      "前感染、血便（IBD）、乾癬"
    ],
    pe: [
      "關節：MCP/PIP/wrist 腫痛、變形（swan neck、boutonnière、ulnar deviation）",
      "Squeeze test、皮下 nodule",
      "Eye、肺、心",
      "RF、anti-CCP、CRP/ESR、X-ray hand"
    ],
    ddx: [
      "Rheumatoid arthritis（最可能）",
      "Psoriatic arthritis",
      "SLE",
      "Polymyalgia rheumatica（年長）",
      "Viral arthritis（parvo B19）"
    ],
    redFlags: ["環樞椎不穩 + 神經症狀 → 急 MRI", "Felty syndrome（RA + splenomegaly + neutropenia）→ 感染風險"]
  },
  {
    id: "RM-06", source: "remnote", age: 35, sex: "F", department: "內",
    system: "神經", chiefComplaint: "用力後眼皮下垂 + 複視 + 疲勞",
    vignette: "35 歲女性，數月來下午眼皮下垂、複視，活動後加劇休息緩解，最近吞嚥也偶有困難。",
    history: [
      "Fatigability：下午加劇、休息緩解",
      "Ptosis、複視、構音、咀嚼、吞嚥、四肢無力",
      "呼吸症狀（myasthenic crisis）",
      "藥物：aminoglycoside、quinolone（誘發）",
      "Thymoma 篩檢、其他自體免疫"
    ],
    pe: [
      "Ice-pack test（ptosis 改善）",
      "Sustained upward gaze（眼瞼下垂）",
      "Repeated muscle test（fatigability）",
      "Ach receptor Ab、anti-MuSK、CT chest（thymoma）"
    ],
    ddx: [
      "Myasthenia gravis（最可能）",
      "Lambert-Eaton（活動後加強）",
      "Botulism",
      "Multiple sclerosis",
      "Mitochondrial myopathy"
    ],
    redFlags: ["Myasthenic crisis（呼吸衰竭 / 吞嚥）→ ICU + IVIg / plasmapheresis", "Cholinergic crisis（abx 後）→ 停藥"]
  },
  {
    id: "RM-07", source: "remnote", age: 50, sex: "M", department: "內",
    system: "風濕", chiefComplaint: "右大腳趾突發紅腫熱痛",
    vignette: "50 歲男性，凌晨突發右第一趾根紅腫熱痛無法觸碰。昨晚海鮮 + 啤酒。HTN 服 thiazide。",
    history: [
      "誘發：飲食（普林）、酒精、利尿劑、外傷、脫水",
      "病史：痛風發作、tophi、結石（uric acid stones）",
      "共病：HTN、DM、CKD、metabolic syndrome",
      "家族痛風",
      "排除 septic（發燒、寒顫）"
    ],
    pe: [
      "Vital signs",
      "MTP1 紅腫熱痛 + ROM",
      "Tophi（耳廓、手指、肘）",
      "Joint aspiration → MSU crystal、culture"
    ],
    ddx: [
      "Acute gouty arthritis（典型 podagra）",
      "Septic arthritis",
      "Pseudogout",
      "Cellulitis",
      "Acute trauma"
    ],
    redFlags: ["發燒 + 急性紅腫 → 排 septic", "Tophi 多 + uric acid 高 → 長期 ULT 適應症"]
  },
  {
    id: "RM-08", source: "remnote", age: 55, sex: "F", department: "內",
    system: "內分泌", chiefComplaint: "怕冷 + 體重增加 + 便秘 + 月經量多",
    vignette: "55 歲女性，半年來怕冷、體重增 5 kg、便秘、月經量增、容易疲倦、聲音低沉。",
    history: [
      "甲低症狀：怕冷、體重、便秘、皮膚乾、聲音低、月經量多",
      "病因：Hashimoto、術後、I-131、藥物（amiodarone、lithium）",
      "家族甲狀腺、自體免疫",
      "頸部腫脹、吞嚥",
      "Cardiac：bradycardia、effusion"
    ],
    pe: [
      "Vital signs（HR↓ BP↓ pulse pressure）",
      "甲狀腺 size、質地、結節",
      "皮膚乾、myxedema、delayed DTR relaxation",
      "TSH、free T4、anti-TPO"
    ],
    ddx: [
      "Primary hypothyroidism（Hashimoto 最常見）",
      "Subclinical hypothyroidism",
      "Drug-induced",
      "Secondary（pituitary）",
      "Iodine deficiency"
    ],
    redFlags: ["Myxedema coma：意識↓ + 低體溫 + 低鈉 → ICU + IV LT4", "Recent MI → 慎啟動 LT4"]
  },
  {
    id: "RM-09", source: "remnote", age: 40, sex: "M", department: "急",
    system: "內分泌", chiefComplaint: "DM 患者多飲多尿 + 嘔吐 + 腹痛",
    vignette: "40 歲男性，T1DM 自停 insulin 2 天。多飲多尿、噁心嘔吐、上腹痛。意識略遲鈍。Kussmaul breathing。",
    history: [
      "DM type、insulin compliance、誘發（感染、停藥、心梗）",
      "症狀 timeline：3P → 嘔吐 → 意識",
      "Volume status",
      "感染源、心血管症狀",
      "排除 HHS（年長 type 2 + 嚴重高血糖無 ketosis）"
    ],
    pe: [
      "Vital signs（HR↑ BP↓ Kussmaul）+ 意識",
      "Dehydration、水果味呼吸（acetone）",
      "腹部觸診",
      "Glucose、ketones、ABG（AG metabolic acidosis）、electrolyte"
    ],
    ddx: [
      "Diabetic ketoacidosis（最可能）",
      "HHS（鑑別）",
      "Sepsis",
      "Acute pancreatitis",
      "Salicylate poisoning"
    ],
    redFlags: ["K < 3.3 → 補 K 再給 insulin", "腦水腫（pediatric）→ 慢補液"]
  },
  {
    id: "RM-10", source: "remnote", age: 55, sex: "M", department: "外",
    system: "肝膽", chiefComplaint: "RUQ 痛 + 發燒 + 黃疸",
    vignette: "55 歲男性，3 天來 RUQ 絞痛 + 發燒 39 + 寒顫 + 鞏膜黃染。膽結石史。",
    history: [
      "Charcot triad：fever / RUQ pain / jaundice",
      "Reynolds pentad：+ 意識改變 + shock",
      "膽結石史、ERCP 史",
      "Risk：胰臟癌阻塞、Mirizzi、IPMN",
      "用藥：anticoagulant"
    ],
    pe: [
      "Vital signs（qSOFA）+ jaundice",
      "Murphy sign、RUQ tenderness",
      "意識（Reynolds pentad）",
      "CBC、LFT、超音波 / MRCP / ERCP"
    ],
    ddx: [
      "Acute cholangitis（必排，Tokyo guideline）",
      "Acute cholecystitis",
      "Liver abscess",
      "Pancreatic head cancer",
      "Mirizzi syndrome"
    ],
    redFlags: ["Reynolds pentad → ICU + 急 ERCP / PTBD", "Severe → IV abx + drainage 不能延"]
  },
  {
    id: "RM-11", source: "remnote", age: 45, sex: "F", department: "內",
    system: "腸胃", chiefComplaint: "餐後胸骨後燒灼感 + 反酸",
    vignette: "45 歲肥胖女性，半年來餐後胸骨後燒灼感、平躺加劇、酸水到喉。咖啡、巧克力、辛辣會誘發。",
    history: [
      "GERD 典型 symptom：heartburn、regurgitation、夜咳",
      "Alarm symptoms：dysphagia、odynophagia、體重↓、貧血、嘔血",
      "誘發：飲食、姿勢、肥胖、菸酒",
      "Atypical：胸痛、慢性咳、聲音沙啞、asthma",
      "用藥：bisphosphonate、NSAID、CCB"
    ],
    pe: [
      "BMI、頸部 + ENT",
      "胸腹（排其他原因）",
      "Trial PPI 8 weeks",
      "EGD if alarm symptoms"
    ],
    ddx: [
      "GERD（最可能）",
      "Peptic ulcer disease",
      "Esophagitis（pill、infectious）",
      "Cardiac chest pain（必排）",
      "Esophageal motility disorder"
    ],
    redFlags: ["Dysphagia + 體重↓ → 急 EGD（排 CA、Barrett）", "黑便 + anemia → 急 EGD"]
  },
  {
    id: "RM-12", source: "remnote", age: 45, sex: "M", department: "內",
    system: "骨骼/神經", chiefComplaint: "突發下背痛 + 右下肢放射麻",
    vignette: "45 歲男性，搬重物後突發下背痛 + 右側 L5 dermatome 放射麻、咳嗽用力加劇。",
    history: [
      "受傷機轉（搬重物 / 彎腰）",
      "Pain LQQOPERA：放射至下肢（dermatome）",
      "誘發：咳嗽、用力、Valsalva → radicular pain",
      "Red flags：bowel/bladder、saddle、雙側、發燒、體重↓、夜痛",
      "癌症 / TB / 免疫抑制史"
    ],
    pe: [
      "脊椎觸診 + ROM + tenderness",
      "SLR test（< 60° + radicular pain → HIVD）",
      "Motor（L5：dorsiflexion；S1：plantarflexion）+ DTR",
      "Sensation（dermatome）+ saddle + perianal tone"
    ],
    ddx: [
      "Lumbar disc herniation（HIVD，L4-5 / L5-S1 most common）",
      "Spinal stenosis",
      "Mechanical low back pain",
      "Vertebral fracture",
      "Cauda equina syndrome（必排）"
    ],
    redFlags: ["Cauda equina（saddle + bowel/bladder）→ 急 MRI + decompression < 48 hr", "進行性 motor 缺損 → 急 surgery"]
  },
  {
    id: "RM-13", source: "remnote", age: 70, sex: "F", department: "急",
    system: "心血管", chiefComplaint: "急性呼吸困難 + 端坐呼吸",
    vignette: "70 歲女性，CHF 病史。今晨突發呼吸困難無法平躺、咳粉紅泡沫痰、雙下肢水腫。",
    history: [
      "CHF 病史 + 用藥依從性",
      "Trigger：salt、藥物 stop、感染、AF、心梗、貧血",
      "症狀：dyspnea、orthopnea、PND、cough",
      "胸痛、心悸、量變化",
      "Comorbidity：HTN、DM、CAD"
    ],
    pe: [
      "Vital signs + SpO2 + JVP",
      "心音：S3、murmur",
      "肺：bilateral crackles、wheeze（cardiac asthma）",
      "下肢水腫、cool extremities"
    ],
    ddx: [
      "Acute decompensated HF / cardiogenic pulmonary edema",
      "Pneumonia",
      "Pulmonary embolism",
      "ARDS",
      "AECOPD"
    ],
    redFlags: ["SpO2↓ + 意識↓ → NIV / 插管", "Cardiogenic shock → ICU + inotrope"]
  },
  {
    id: "RM-14", source: "remnote", age: 60, sex: "M", department: "內",
    system: "腸胃", chiefComplaint: "嘔血 + 黑便",
    vignette: "60 歲男性，肝硬化（HBV）史。今晨嘔吐大量鮮血 + 黑便 + 頭暈。",
    history: [
      "出血量、性質（鮮紅 vs 咖啡渣 vs 黑便）",
      "嘔吐先 vs 咳嗽吐血",
      "肝病、酒精、NSAID、aspirin、anticoagulant",
      "PUD 史、varices 史、cancer",
      "頭暈、syncope、呼吸喘"
    ],
    pe: [
      "Vital signs（orthostatic）+ pallor",
      "腹部：spider、ascites、splenomegaly、Caput",
      "DRE（melena confirmation）",
      "CBC、coag、LFT、type & screen、急 EGD"
    ],
    ddx: [
      "Esophageal variceal bleeding（cirrhosis）",
      "Peptic ulcer disease",
      "Mallory-Weiss tear",
      "Gastric cancer",
      "Dieulafoy lesion"
    ],
    redFlags: ["Active bleeding + shock → ICU + transfusion + octreotide + 急 EGD < 12 hr", "Variceal → ligation + abx prophylaxis"]
  },
  {
    id: "RM-15", source: "remnote", age: 50, sex: "M", department: "內",
    system: "腸胃", chiefComplaint: "鮮血便 1 天",
    vignette: "50 歲男性，今天解大量鮮紅色血便 3 次 + 頭暈，無腹痛、無嘔吐。",
    history: [
      "血便性質：鮮紅（lower GI 或 brisk upper）vs 暗紅 vs 黑",
      "與大便混合 vs 滴血（hemorrhoid）vs 表面",
      "排便習慣改變、體重↓、家族 CRC",
      "Diverticulitis、IBD、痔瘡史",
      "用藥：anticoagulant、NSAID"
    ],
    pe: [
      "Vital signs（orthostatic）",
      "腹部 + DRE（mass、blood、痔瘡）",
      "皮膚 pallor",
      "CBC、type & screen、colonoscopy + EGD if 找不到"
    ],
    ddx: [
      "Diverticular bleeding（最常見 painless lower GI）",
      "Angiodysplasia",
      "Colorectal cancer",
      "Hemorrhoid（表面血）",
      "Brisk upper GI bleeding"
    ],
    redFlags: ["大量出血 + shock → ICU + transfusion + 急 colonoscopy / angio embolization", "新發排便習慣改變 → colonoscopy"]
  },
  {
    id: "RM-16", source: "remnote", age: 60, sex: "M", department: "內",
    system: "呼吸", chiefComplaint: "咳血 200 mL 一次",
    vignette: "60 歲男性，菸 30 包年，TB 史。今天突咳出鮮血約 200 mL。",
    history: [
      "咳血量 + 性質（fresh、frothy → bronchial）",
      "鑑別：嘔血、鼻咽出血",
      "病因：TB、bronchiectasis、lung CA、PE、AVM、二尖瓣狹窄",
      "B symptoms（CA、TB）",
      "Anticoagulant"
    ],
    pe: [
      "Vital signs + SpO2",
      "Lymph node、clubbing",
      "胸部：crackles、wheeze、bronchial breath",
      "CXR + CT chest + bronchoscopy"
    ],
    ddx: [
      "Bronchiectasis with hemoptysis",
      "Pulmonary tuberculosis（reactivation）",
      "Lung cancer",
      "Pulmonary embolism with infarct",
      "AVM / Goodpasture"
    ],
    redFlags: ["大量 > 200 mL/hr → bronchial artery embolization + 插管 ICU", "Suspect TB → 隔離 + AFB"]
  },
  {
    id: "RM-17", source: "remnote", age: 55, sex: "F", department: "內",
    system: "神經", chiefComplaint: "陣發性旋轉性眩暈",
    vignette: "55 歲女性，頭轉動或起床時突發旋轉性眩暈持續 1 分鐘，伴噁心。無聽力變化。",
    history: [
      "Vertigo 性質：spinning vs lightheaded",
      "Trigger：頭位改變（BPPV）vs 持續（vestibular neuritis）",
      "持續時間：秒（BPPV）vs 分（migraine）vs 小時（Meniere）vs 天（neuritis）",
      "聽力 / 耳鳴 / 耳脹",
      "中樞線索：複視、構音、共濟失調、無力（必排）"
    ],
    pe: [
      "Dix-Hallpike（BPPV）",
      "HINTS（head impulse / nystagmus / test of skew → 排中樞）",
      "聽力、Weber、Rinne",
      "神經學完整 + 步態"
    ],
    ddx: [
      "BPPV（最可能）",
      "Vestibular neuritis",
      "Meniere disease",
      "Vestibular migraine",
      "Posterior circulation stroke（必排）"
    ],
    redFlags: ["HINTS exam suggesting central → MRI brain（stroke）", "Sudden hearing loss + vertigo → labyrinthitis vs AICA"]
  },
  {
    id: "RM-18", source: "remnote", age: 65, sex: "F", department: "內",
    system: "ENT", chiefComplaint: "雙耳鳴 6 個月",
    vignette: "65 歲女性，6 個月以來雙耳持續高音耳鳴，聽力似乎變差。",
    history: [
      "Tinnitus 性質：pulsatile（vascular）vs 持續、單側 vs 雙側",
      "聽力變化（high vs low frequency）",
      "Vertigo、耳脹、耳痛、耳漏",
      "誘發 / 加劇：噪音、咖啡、藥物（aspirin、aminoglycoside、loop）",
      "焦慮 / 失眠"
    ],
    pe: [
      "Otoscopy（cerumen、TM）",
      "Weber、Rinne",
      "Pure tone audiometry",
      "Auscultate carotid（pulsatile → bruit）"
    ],
    ddx: [
      "Presbycusis with tinnitus（最可能）",
      "Noise-induced hearing loss",
      "Ototoxicity（藥物）",
      "Acoustic neuroma（單側）",
      "Pulsatile：dural AVF、AVM、carotid stenosis"
    ],
    redFlags: ["單側 progressive hearing loss → MRI 排 acoustic neuroma", "Pulsatile → vascular workup"]
  },
  {
    id: "RM-19", source: "remnote", age: 70, sex: "M", department: "內",
    system: "眼科", chiefComplaint: "突發單眼視力模糊",
    vignette: "70 歲男性，HTN/DM。1 小時前突然右眼視力模糊（像窗簾遮住）+ 暫時性。",
    history: [
      "Onset、單側 / 雙側、痛 vs 無痛、暫時 vs 持續",
      "視野缺損 vs 整體模糊 vs 飛蚊閃光",
      "Amaurosis fugax 線索（窗簾遮）→ carotid",
      "頭痛 / TIA 症狀",
      "Risk：HTN、DM、smoking、AF、cholesterol"
    ],
    pe: [
      "Visual acuity（兩眼）+ visual field",
      "Pupillary（RAPD）+ funduscopy（cherry red、cotton wool、cup/disc）",
      "Carotid bruit + 心律",
      "Carotid Doppler、ECG、urgent ophthalmology"
    ],
    ddx: [
      "Amaurosis fugax（carotid embolus，TIA equivalent）",
      "CRAO（cherry red spot）",
      "Retinal detachment（飛蚊 + 窗簾）",
      "Vitreous hemorrhage",
      "Acute angle-closure glaucoma（痛 + 紅眼）"
    ],
    redFlags: ["突發無痛性視力喪失 → CRAO（90 min window）", "Amaurosis fugax → 急 carotid Doppler + antiplatelet"]
  },
  {
    id: "RM-20", source: "remnote", age: 50, sex: "F", department: "內",
    system: "ENT/腫瘤", chiefComplaint: "頸部右側無痛性腫塊 1 個月",
    vignette: "50 歲女性，1 個月前發現頸部右側無痛硬塊 3 cm，無消長。無發燒、無體重↓。",
    history: [
      "腫塊：onset、大小變化、tenderness、消長",
      "B symptoms：發燒、夜汗、體重↓",
      "ENT：聲音沙啞、吞嚥困難、鼻塞、耳痛",
      "Risk：菸酒檳榔、HBV/HPV、TB、家族",
      "皮膚 / 系統症狀"
    ],
    pe: [
      "頸部 LN：location、size、固定、tender",
      "ENT 全面：oral cavity、tongue、tonsil、nasopharynx、larynx",
      "全身淋巴 + 肝脾",
      "FNA / core biopsy + 影像（CT / MRI）"
    ],
    ddx: [
      "Reactive lymphadenopathy（infection）",
      "Tuberculous lymphadenitis（scrofula）",
      "Lymphoma",
      "Metastatic SCC（head & neck primary）",
      "Thyroid nodule / branchial cleft cyst"
    ],
    redFlags: ["> 4 wk + 硬 + 固定 → biopsy", "Supraclavicular（Virchow）→ 排腹部惡性"]
  },
  {
    id: "RM-21", source: "remnote", age: 60, sex: "M", department: "內",
    system: "腸胃/肝", chiefComplaint: "腹脹 + 體重增加 + 下肢水腫",
    vignette: "60 歲男性，HBV carrier，2 個月腹脹漸增、下肢水腫、體重 +5 kg、easy bruising。",
    history: [
      "Onset、進展速度",
      "肝病史 + 病因（HBV、酒、NASH）",
      "Decompensation：jaundice、HE、出血",
      "排除 cardiac（PND、orthopnea）",
      "排除 renal（蛋白尿）"
    ],
    pe: [
      "Vital signs + jaundice",
      "腹部：shifting dullness、fluid wave、Caput medusae",
      "肝脾、spider、palmar、testicular atrophy",
      "Diagnostic paracentesis（SAAG > 1.1 = portal HTN）"
    ],
    ddx: [
      "Cirrhotic ascites（HBV）",
      "HCC with portal vein thrombosis",
      "Heart failure",
      "Nephrotic syndrome",
      "Peritoneal carcinomatosis / TB"
    ],
    redFlags: ["SBP（fever + 腹痛）→ 立即 paracentesis（PMN > 250）+ abx", "HE → lactulose + rifaximin"]
  },
  {
    id: "RM-22", source: "remnote", age: 6, sex: "M", department: "小",
    system: "小兒/感染", chiefComplaint: "持續發燒 5 天 + 結膜紅 + 草莓舌",
    vignette: "6 歲男童，發燒 39-40 持續 5 天，雙眼結膜紅無分泌物、草莓舌、嘴唇皴裂、頸部 LN 1.5 cm、軀幹紅疹、手腳水腫。",
    history: [
      "母生 3A、吃喝拉動睡",
      "Kawasaki criteria：fever ≥ 5d + 4/5 of CRASH-MD",
      "C：conjunctivitis（non-exudative bilateral）",
      "R：rash、A：adenopathy、S：strawberry tongue、H：hand/foot",
      "排除其他發燒（測 strep、viral）"
    ],
    pe: [
      "Vital signs + 全身評估",
      "結膜、口腔、皮膚、肢端",
      "頸部 LN（unilateral > 1.5 cm）",
      "Echo（coronary aneurysm）+ CBC、ESR、CRP"
    ],
    ddx: [
      "Kawasaki disease（典型）",
      "Scarlet fever",
      "Adenovirus",
      "Stevens-Johnson / TEN",
      "Toxic shock"
    ],
    redFlags: ["未治療 → 25% coronary aneurysm，10 d 內給 IVIg + aspirin", "Echo follow at 2 wk + 6-8 wk"]
  },
  {
    id: "RM-23", source: "remnote", age: 2, sex: "F", department: "小",
    system: "小兒/感染", chiefComplaint: "2 歲女童發燒 + 左耳痛",
    vignette: "2 歲女童，URI 3 天後發燒 + 左耳痛 + 哭鬧。",
    history: [
      "母生 3A、吃喝拉動睡",
      "URI 前驅 + 耳痛 + 拉耳朵",
      "聽力、平衡",
      "前耳痛史 / TM perforation",
      "Allergy、daycare attendance"
    ],
    pe: [
      "Vital signs",
      "Otoscopy：TM bulging、紅、purulent、light reflex 消失",
      "Pneumatic otoscopy（mobility）",
      "Mastoid tenderness（mastoiditis）"
    ],
    ddx: [
      "Acute otitis media（最可能）",
      "Otitis media with effusion",
      "Otitis externa",
      "Mastoiditis（complication）",
      "Foreign body"
    ],
    redFlags: ["Mastoid tenderness + 紅腫 → mastoiditis 急 ENT", "TM perforation + 持續耳漏 → 持續 abx"]
  },
  {
    id: "RM-24", source: "remnote", age: 3, sex: "F", department: "小",
    system: "小兒/感染", chiefComplaint: "3 歲女童發燒 + 排尿哭鬧",
    vignette: "3 歲女童，3 天發燒 39 + 解尿時哭鬧 + 食慾差，無 URI 症狀。",
    history: [
      "母生 3A、吃喝拉動睡",
      "排尿症狀（小兒不容易主訴）",
      "VUR / 結構異常 / 之前 UTI 史",
      "Constipation、衛生",
      "Vaccine 史"
    ],
    pe: [
      "Vital signs + 全身",
      "腹部：suprapubic、CVA",
      "External genitalia（labial adhesion）",
      "Catheterized urine（< 2 yo）+ culture + RUS"
    ],
    ddx: [
      "Pediatric UTI（cystitis vs pyelonephritis）",
      "Vulvovaginitis",
      "Constipation",
      "Sexual abuse（排）",
      "Other source of fever"
    ],
    redFlags: ["< 2 yo + UTI → ultrasound + 後續 VCUG if recurrent", "Pyelonephritis → 7-14 d abx + admit if 重"]
  },
  {
    id: "RM-25", source: "remnote", age: 0, sex: "M", department: "小",
    system: "小兒/心血管", chiefComplaint: "新生兒心雜音 + 餵食差",
    vignette: "新生兒 5 d，產前 anomaly scan 正常。出生後聽到 systolic murmur，餵食差、發紺、呼吸快。",
    history: [
      "母生 3A、吃喝拉動睡（餵食 + 體重 + cyanosis）",
      "產前 anomaly scan、syndrome（Trisomy 21）",
      "餵食時 cyanosis、汗",
      "家族先天性心臟病",
      "Antenatal infection（rubella）"
    ],
    pe: [
      "Vital signs（4 limb BP + SpO2 differential）",
      "心音：S2 splitting、murmur location",
      "周邊脈搏（femoral 弱 → coarctation）",
      "Hyperoxia test → echo"
    ],
    ddx: [
      "VSD（最常見）/ ASD / PDA / TOF",
      "Coarctation of aorta（femoral 弱）",
      "TAPVR / TGA（cyanotic）",
      "PPHN",
      "Sepsis"
    ],
    redFlags: ["Ductal-dependent lesion → PGE1", "重度 cyanosis + shock → 急 echo + ICU"]
  },
  {
    id: "RM-26", source: "remnote", age: 0, sex: "M", department: "小",
    system: "小兒/血液", chiefComplaint: "新生兒黃疸 + 蠶豆症家族史",
    vignette: "出生第 3 天男嬰，全身黃疸 TB 18，餵食 OK。父為蠶豆症患者。",
    history: [
      "母生 3A、吃喝拉動睡",
      "Onset：< 24 hr 病理 / 2-3 d 生理 / > 1 wk prolonged",
      "餵食、大便顏色、體重",
      "家族 G6PD、地中海型、ABO/Rh 不合",
      "藥物 / 接觸（樟腦丸、磺胺）"
    ],
    pe: [
      "Vital signs + 體重",
      "Skin：cephalo-caudal jaundice progression",
      "肝脾、cephalohematoma",
      "TB total + direct + 血型 + Coombs + G6PD"
    ],
    ddx: [
      "G6PD deficiency-related hemolysis",
      "ABO incompatibility",
      "Physiologic / breast milk jaundice",
      "Sepsis",
      "Biliary atresia（< conjugated, prolonged）"
    ],
    redFlags: ["TB > 20 → 換血", "G6PD：避樟腦丸、shellfish、蠶豆、磺胺、primaquine"]
  },
  {
    id: "RM-27", source: "remnote", age: 1, sex: "M", department: "小",
    system: "小兒/感染", chiefComplaint: "1 歲幼兒發燒 + 咳嗽 + 流鼻涕",
    vignette: "1 歲男童，3 天發燒 38.5 + 流鼻涕 + 咳嗽。活力胃口尚可。",
    history: [
      "母生 3A、吃喝拉動睡",
      "URI typical：fever、cough、runny nose、sore throat",
      "Red flags：呼吸喘、SpO2、活力差、嗜睡、脫水",
      "幼兒園接觸",
      "Vaccine 史（特別流感、Hib、肺鏈）"
    ],
    pe: [
      "Vital signs + SpO2",
      "ENT：tympanic、pharynx、turbinate",
      "胸部聽診（pneumonia）",
      "Hydration + 活力"
    ],
    ddx: [
      "Viral URI（最可能）",
      "Acute otitis media",
      "Streptococcal pharyngitis",
      "Pneumonia",
      "Bronchiolitis"
    ],
    redFlags: ["呼吸喘 + retraction → 排 pneumonia / bronchiolitis", "高燒 > 5 d → 排 Kawasaki"]
  },
  {
    id: "RM-28", source: "remnote", age: 30, sex: "F", department: "婦",
    system: "婦產", chiefComplaint: "陰道分泌物異味 + 搔癢",
    vignette: "30 歲女性，1 週白色凝乳狀分泌物 + 搔癢。最近抗生素治 UTI。",
    history: [
      "性孕經分片",
      "分泌物：顏色、性質（cottage cheese、黃綠泡沫、灰白魚腥味）",
      "搔癢、灼熱、性交痛",
      "近期 abx、DM、孕婦、HRT、IUD",
      "性伴侶症狀"
    ],
    pe: [
      "Vital signs",
      "Speculum：分泌物、cervix、vaginal mucosa",
      "Bimanual",
      "Wet mount + KOH（pseudohyphae、clue cells、trichomonad）"
    ],
    ddx: [
      "Candida vulvovaginitis（cottage cheese + 搔癢）",
      "Bacterial vaginosis（fishy + 灰白）",
      "Trichomonas（黃綠泡沫 + strawberry cervix）",
      "Atrophic vaginitis（停經）",
      "STD（chlamydia / GC）"
    ],
    redFlags: ["孕婦 BV → preterm 風險", "PID 線索（CMT、骨盆痛）→ admit + IV abx"]
  },
  {
    id: "RM-29", source: "remnote", age: 25, sex: "F", department: "婦",
    system: "婦產", chiefComplaint: "停經 6 週 + 突發 LLQ 痛",
    vignette: "25 歲女，LMP 6 週前。今早突發 LLQ 痛 + 少量陰道出血 + 頭暈。Urine pregnancy (+)。",
    history: [
      "性孕經分片 + LMP / 月經週期",
      "懷孕症狀 + spotting timing",
      "腹痛 LQQOPERA",
      "PID 史、IUD、tubal surgery、ectopic 史、IVF",
      "肩膀痛 / 暈厥（內出血）"
    ],
    pe: [
      "Vital signs（unstable → ruptured）",
      "腹部：rebound、guarding、Cullen",
      "Pelvic：CMT、adnexal mass",
      "β-hCG（quantitative）+ TVS"
    ],
    ddx: [
      "Ectopic pregnancy（必排）",
      "Threatened / inevitable abortion",
      "Heterotopic pregnancy",
      "Ovarian cyst rupture",
      "Appendicitis"
    ],
    redFlags: ["β-hCG > 1500 + empty uterus → ectopic", "Hemodynamic 不穩 → 急開"]
  },
  {
    id: "RM-30", source: "remnote", age: 32, sex: "F", department: "婦",
    system: "婦產", chiefComplaint: "結婚 2 年未孕",
    vignette: "32 歲女性，結婚 2 年未避孕未孕。月經規則。先生 35 歲健康。",
    history: [
      "Infertility 定義（< 35 yo 1 年、≥ 35 yo 6 個月）",
      "性孕經分片 + 性行為頻率 / 排卵期",
      "婦科：PID、endometriosis、surgery、abortion",
      "男方：sperm analysis、varicocele、感染",
      "家族 / 全身：thyroid、prolactin、PCOS"
    ],
    pe: [
      "BMI、BP、hirsutism、acanthosis",
      "甲狀腺 + 乳房 + galactorrhea",
      "Pelvic exam",
      "Day 3 FSH、LH、E2、AMH、TSH、prolactin、HSG、semen analysis"
    ],
    ddx: [
      "Anovulation（PCOS、hypothalamic）",
      "Tubal factor（PID）",
      "Endometriosis",
      "Male factor（30%）",
      "Unexplained（10-15%）"
    ],
    redFlags: ["≥ 35 yo + 6 個月未孕 → 立即 workup", "AMH 過低 → 速送 ART"]
  },
  {
    id: "RM-31", source: "remnote", age: 28, sex: "F", department: "婦",
    system: "婦產/內分泌", chiefComplaint: "月經不規則 + 多毛 + 痘",
    vignette: "28 歲 BMI 30 女性，月經 2-3 個月一次、下巴/腹中線有粗毛、青春痘。",
    history: [
      "月經 pattern + LMP",
      "Hirsutism、acne、acanthosis nigricans",
      "BMI 變化、insulin resistance、家族 DM",
      "不孕、不孕 history",
      "排除其他高 androgen（CAH、tumor、Cushing）"
    ],
    pe: [
      "BMI、BP、腰臀圍、hirsutism score",
      "Acne、androgenic alopecia、acanthosis",
      "甲狀腺、galactorrhea",
      "TVS（polycystic ovary）+ androgen / TSH / prolactin"
    ],
    ddx: [
      "PCOS（Rotterdam 2/3）",
      "Adrenal hyperplasia",
      "Cushing syndrome",
      "Androgen-secreting tumor",
      "Hypothyroidism / hyperprolactinemia"
    ],
    redFlags: ["長期 unopposed estrogen → 內膜癌風險，週期性 progesterone", "Insulin resistance → metformin"]
  },
  {
    id: "RM-32", source: "remnote", age: 35, sex: "F", department: "婦",
    system: "婦產", chiefComplaint: "右下腹間歇隱痛 + 月經規則",
    vignette: "35 歲女性，例行健康檢查 TVS 發現右側 6 cm 卵巢囊腫。最近偶有 RLQ 隱痛。",
    history: [
      "性孕經分片",
      "腹痛特性、急性發作（torsion 線索）",
      "月經、不孕史",
      "家族 ovarian / 乳癌（BRCA）",
      "停經狀態 + 內分泌症狀"
    ],
    pe: [
      "Vital signs",
      "腹部 + Pelvic exam",
      "Adnexal mass：size、mobile、tender",
      "TVS + CA-125 + tumor markers（停經前）"
    ],
    ddx: [
      "Functional cyst（< 5 cm，月經期消退）",
      "Endometrioma",
      "Dermoid（mature teratoma）",
      "Cystadenoma（mucinous / serous）",
      "Ovarian malignancy（停經後 + 大）"
    ],
    redFlags: ["突發劇痛 + adnexal mass → 排 torsion（< 6 hr salvage）", "停經後 + 大 + CA-125 高 → 急轉婦癌"]
  },
  {
    id: "RM-33", source: "remnote", age: 26, sex: "F", department: "婦",
    system: "婦產", chiefComplaint: "懷孕 10 週 + 陰道出血",
    vignette: "26 歲懷孕 10 週初產婦，今晨陰道少量鮮紅出血 + 輕微下腹悶痛。Urine pregnancy (+)。",
    history: [
      "GPA + LMP + 預產期",
      "出血量、性質、blood clot、組織排出",
      "腹痛、cramping",
      "Trauma、性行為、vaginitis",
      "Risk：fibroid、IUD、DM、AMA"
    ],
    pe: [
      "Vital signs",
      "腹部 + Pelvic",
      "Speculum：os open / closed、組織",
      "TVS（fetal heartbeat）+ β-hCG serial"
    ],
    ddx: [
      "Threatened abortion（os closed + fetal HR (+)）",
      "Inevitable / incomplete abortion",
      "Missed abortion",
      "Ectopic pregnancy",
      "Molar pregnancy"
    ],
    redFlags: ["大量出血 + shock → 急 D&C + transfusion", "Rh(-) → RhoGAM"]
  },
  {
    id: "RM-34", source: "remnote", age: 30, sex: "F", department: "婦",
    system: "婦產", chiefComplaint: "懷孕 32 週產檢",
    vignette: "30 歲 G1P0，懷孕 32 週例行產檢。",
    history: [
      "孕史 + GPA、預產期",
      "本次孕程：產檢史、超音波、抽血（OGTT、GBS）",
      "症狀：fetal movement、出血、分泌物、子宮收縮",
      "用藥 + 葉酸 + 鐵",
      "Risk：HTN、DM、AMA、family"
    ],
    pe: [
      "Vital signs + 體重 + BP",
      "Fundal height（cm ≈ weeks）",
      "Leopold 4 maneuver + fetal HR（doppler）",
      "Pelvic exam if indicated + fetal monitor"
    ],
    ddx: [
      "正常孕程",
      "Gestational HTN / preeclampsia",
      "GDM",
      "FGR / 大為孕齡",
      "Preterm labor / PROM"
    ],
    redFlags: ["BP > 140/90 + 蛋白尿 → preeclampsia 評估", "Fetal movement 減少 → NST"]
  },
  {
    id: "RM-35", source: "remnote", age: 32, sex: "F", department: "婦",
    system: "婦產", chiefComplaint: "懷孕 34 週 + 高血壓 + 蛋白尿",
    vignette: "32 歲 G2P1，34 週。產檢 BP 160/100 + 尿蛋白 (+++) + 頭痛 + 視力模糊。",
    history: [
      "產前 BP 基線 + 產檢史",
      "症狀：頭痛、視覺、上腹痛（HELLP）、抽搐、水腫",
      "用藥",
      "Risk：AMA、初產、肥胖、家族、CKD",
      "胎動 + 子宮收縮"
    ],
    pe: [
      "Vital signs（BP × 2）+ 體重",
      "視野、Hyperreflexia + clonus",
      "腹部：epigastric tender（HELLP）、子宮、fetal HR",
      "尿蛋白 + CBC + LFT + 凝血"
    ],
    ddx: [
      "Severe preeclampsia",
      "HELLP syndrome（hemolysis + ↑LFT + ↓plt）",
      "Eclampsia（+ seizure）",
      "Chronic HTN with superimposed preeclampsia",
      "Acute fatty liver"
    ],
    redFlags: ["Severe → MgSO4 prophylaxis + BP 控制 + 立即終止妊娠（≥ 34 wk）", "Eclampsia / HELLP → ICU"]
  },
  {
    id: "RM-36", source: "remnote", age: 25, sex: "M", department: "急",
    system: "外傷", chiefComplaint: "車禍多發性外傷",
    vignette: "25 歲機車騎士被汽車撞，多處擦傷 + 右下肢變形 + 神智清楚但呼吸快。",
    history: [
      "AMPLE：Allergy / Medication / Past / Last meal / Event（受傷機轉）",
      "受傷 mechanism：速度、方向、安全帽、安全帶",
      "LOC、抽搐、嘔吐",
      "疼痛部位",
      "已給予 prehospital 處置"
    ],
    pe: [
      "ATLS primary：A 氣道 + C-spine、B 呼吸、C 循環、D 神經、E 暴露",
      "Secondary：head-to-toe + AMPLE",
      "FAST scan、骨盆穩定度",
      "CXR + pelvis X-ray + CT pan-scan"
    ],
    ddx: [
      "Tension pneumothorax（必排於 B）",
      "Hemorrhagic shock（C）",
      "Cardiac tamponade",
      "Massive hemothorax",
      "Open pelvic fracture"
    ],
    redFlags: ["GCS↓ → 插管", "shock + FAST (+) → 急開腹", "Pelvic fracture + shock → binder + angio"]
  },
  {
    id: "RM-37", source: "remnote", age: 70, sex: "M", department: "外",
    system: "腸胃", chiefComplaint: "腹脹 + 不解大便 3 天 + 嘔吐",
    vignette: "70 歲男性，腹部開過刀（5 年前 colon CA）。3 天腹脹、不解氣便 + 噁心嘔吐 + 絞痛。",
    history: [
      "腹痛 LQQOPERA + 嘔吐性質",
      "排氣排便 stop（complete obstruction）",
      "腹部手術、hernia、cancer、IBD 史",
      "口服固體 vs 液體",
      "減重、糞便變細"
    ],
    pe: [
      "Vital signs（dehydration、shock）",
      "腹部：脹、bowel sound（high-pitched、silent late）、scar、hernia、guarding",
      "DRE",
      "KUB（air-fluid levels）+ CT abdomen"
    ],
    ddx: [
      "Mechanical SBO（adhesion 最常見）",
      "Recurrent / metastatic colon CA causing obstruction",
      "Hernia incarceration",
      "Volvulus",
      "Paralytic ileus"
    ],
    redFlags: ["Strangulation 線索（fever、peritoneal sign、lactate↑）→ 急開", "Closed-loop obstruction → 急 surgery"]
  },
  {
    id: "RM-38", source: "remnote", age: 65, sex: "M", department: "急",
    system: "肝臟/腫瘤", chiefComplaint: "HCC 患者突發劇烈腹痛 + 血壓不穩",
    vignette: "65 歲男性，HCC 已知 8 cm 左葉。今晨突發劇烈腹痛 + 冷汗 + BP 80/50。",
    history: [
      "HCC 病史 + treatment history（TACE、surgery）",
      "突發腹痛性質",
      "出血線索：頭暈、冷汗",
      "Trauma（即使輕微）",
      "Anticoagulant"
    ],
    pe: [
      "Vital signs（hypovolemic shock）",
      "腹部：rebound、guarding、distension",
      "Hb、coag、type & cross",
      "Contrast CT abdomen（active bleeding）"
    ],
    ddx: [
      "Spontaneous HCC rupture（必排）",
      "Variceal bleeding",
      "Aortic aneurysm rupture",
      "Splenic / hepatic abscess rupture",
      "Acute pancreatitis"
    ],
    redFlags: ["Active bleeding → 急 TAE（transarterial embolization）", "Shock → 大量輸血 protocol"]
  },
  {
    id: "RM-39", source: "remnote", age: 50, sex: "M", department: "急",
    system: "腸胃", chiefComplaint: "上腹劇痛穿透至背 + 嘔吐",
    vignette: "50 歲男性，每天高粱半瓶。今天宿醉後上腹劇痛穿透至背、嘔吐、屈膝姿勢稍緩。",
    history: [
      "Pain LQQOPERA：穿透至背、屈膝緩解 = pancreatitis 典型",
      "誘發：酒、結石、高 TG、藥物（azathioprine）、ERCP 後",
      "嘔吐 + 食慾",
      "膽結石史",
      "出血線索"
    ],
    pe: [
      "Vital signs（severe → SIRS）",
      "腹部：上腹 tenderness、guarding、Cullen、Grey-Turner（severe）",
      "黃疸（gallstone）",
      "Amylase / lipase（> 3x ULN）+ 影像（CT、超音波）"
    ],
    ddx: [
      "Acute pancreatitis（alcohol / gallstone）",
      "Perforated peptic ulcer",
      "Acute cholangitis",
      "Mesenteric ischemia",
      "AAA rupture"
    ],
    redFlags: ["Ranson ≥ 3 / SIRS → ICU", "Necrotizing + 感染 → debridement"]
  },
  {
    id: "RM-40", source: "remnote", age: 65, sex: "M", department: "外",
    system: "外科/氣道", chiefComplaint: "氣切病人術後居家照護衛教",
    vignette: "65 歲男性，因 head & neck cancer 接受 tracheostomy 1 週，準備出院。",
    history: [
      "氣切原因 + 持續性 vs 暫時",
      "病人 / 家屬照顧能力",
      "Suction 設備、O2、加濕器、emergency 計畫",
      "口語 / 吞嚥訓練",
      "Follow-up 排程"
    ],
    pe: [
      "Stoma 觀察：紅腫、出血、分泌物",
      "Tube 位置 + 通暢度",
      "肺部聽診",
      "SpO2 + 呼吸"
    ],
    ddx: [
      "教學重點：suction、tube cleaning、stoma care、emergency（tube 脫落 → 重置）",
      "併發症：阻塞、感染、出血、tracheoesophageal fistula、stenosis",
      "緊急處置：dislodgement → cover with gauze + bag-valve-mask + 急 ENT",
      "Decannulation criteria",
      "Speech / swallow rehab 轉介"
    ],
    redFlags: ["Tube 脫落 < 7 d → 不要強行重置（false tract）→ bag mask + 急 ENT", "突發出血 + tube → tracheoinnominate fistula 急症"]
  },

  // ============================================================
  // 2025 OSCE 考古題（學長姐回憶版，2025-01 ~ 2025-30）
  // ============================================================
  {
    id: "2025-01", source: "2025", age: 55, sex: "M", department: "內",
    system: "Heme",
    chiefComplaint: "全身無力、疲勞、瘀斑",
    vignette: "中年男性，主訴全身無力、易倦怠數週，身上多處瘀斑（記不清何時開始）。桌上 lab：pancytopenia（WBC↓ Hb↓ Plt↓）、發燒、albumin↓、LDH↑、CRP 顯著上升。請做全身相關重點 PE（不需做鼠蹊部）。",
    history: [
      "症狀時程：無力、疲勞、瘀斑何時開始、有無進行性惡化",
      "出血傾向：牙齦/鼻血/血尿/血便/月經量",
      "感染症狀：發燒、咽痛、咳嗽、尿路症狀",
      "B symptoms：發燒、夜間盜汗、體重減輕",
      "藥物 / 化學暴露 / 放射暴露 / 家族血液病史",
      "近期感染、輸血、旅遊"
    ],
    pe: [
      "Vital signs（focus on fever、HR、BP）",
      "皮膚：petechiae、ecchymosis、pallor、jaundice",
      "口腔：mucosal bleeding、ulcer、gingival hypertrophy（AML M5）",
      "Lymphadenopathy：cervical、supraclavicular、axillary（鼠蹊跳過）",
      "Hepatosplenomegaly（腹部觸診）",
      "胸骨壓痛（sternal tenderness → leukemia）",
      "心肺：anemia → systolic flow murmur、tachycardia"
    ],
    ddx: [
      "Acute leukemia（AML / ALL）",
      "Aplastic anemia",
      "MDS（myelodysplastic syndrome）",
      "Lymphoma with marrow involvement",
      "Severe sepsis with DIC",
      "Vitamin B12 / folate deficiency（megaloblastic）"
    ],
    redFlags: ["Pancytopenia + fever → febrile neutropenia 急症，empirical broad-spectrum Abx", "活動性出血 + Plt < 20K → 緊急輸血小板"]
  },
  {
    id: "2025-02", source: "2025", age: 28, sex: "F", department: "內",
    system: "Rheum",
    chiefComplaint: "新診斷 SLE，準備結婚懷孕的衛教",
    vignette: "28 歲女性，最近被診斷 SLE，準備結婚並計畫懷孕。請給予飲食、工作生活、治療處置、懷孕用藥相關衛教，回答病人的疑問。",
    history: [
      "確認診斷時間、目前用藥（HCQ、prednisolone、其他 immunosuppressants）",
      "Disease activity：皮疹、關節痛、口腔潰瘍、雷諾氏現象",
      "腎臟侵犯：泡尿、水腫、高血壓、抽血看 Cr、UA proteinuria",
      "婚育規劃：何時想懷孕、目前避孕方式",
      "抗體：anti-Ro/La、anti-phospholipid Ab（影響胎兒/懷孕風險）",
      "家族病史、過去懷孕史"
    ],
    pe: [
      "Vital signs（BP）",
      "皮膚：malar rash、discoid rash、口腔潰瘍",
      "關節：壓痛、腫脹（手部）",
      "心肺：pericardial / pleural friction rub",
      "下肢水腫（腎炎）"
    ],
    ddx: [
      "懷孕前必須控制 disease ≥ 6 個月 stable、無 active nephritis",
      "用藥調整：MMF / cyclophosphamide / methotrexate 致畸 → 停藥；HCQ 可繼續、prednisolone 低劑量可、azathioprine 可",
      "抗體檢查：anti-Ro/La → 新生兒 lupus、congenital heart block；APS → 流產、血栓",
      "懷孕風險：preeclampsia、preterm、IUGR、SLE flare、APS-related thrombosis",
      "生活：避日曬、規律作息、低鹽（若 HTN）、戒菸、避免感染",
      "工作：避過勞、壓力管理；高風險懷孕 → 產科 + 風免共照"
    ],
    redFlags: ["Active lupus nephritis → 懷孕禁忌，需先控制", "APS + 反覆流產 → aspirin + LMWH 預防"]
  },
  {
    id: "2025-03", source: "2025", age: 50, sex: "F", department: "外",
    system: "GI",
    chiefComplaint: "膽囊炎手術前衛教（lap chole）",
    vignette: "50 歲女性，急性膽囊炎安排腹腔鏡膽囊切除術。請解釋手術方式、術前準備、術後照顧，回答病人關於氣腹、恢復時間等細節。",
    history: [
      "確認診斷與手術 indication（acute cholecystitis、symptomatic GS、polyp）",
      "麻醉相關：過敏、過去麻醉經驗、心肺疾病",
      "抗凝血藥使用、出血傾向",
      "禁食時間、最後一次飲食"
    ],
    pe: [
      "Vital signs（focus 發燒、BP）",
      "腹部：Murphy's sign、RUQ tenderness、有無 peritoneal sign",
      "黃疸（檢查 sclera、皮膚）",
      "心肺評估（手術風險）"
    ],
    ddx: [
      "手術方式：腹腔鏡 4 個小傷口、鏡頭 + 器械，切除膽囊",
      "氣腹：CO2 撐開腹腔讓視野清楚（10–15 mmHg），術後可能肩膀痠痛（diaphragm 刺激）",
      "術前準備：禁食 8 hr、停 aspirin 5–7 d、術前抗生素",
      "術後恢復：當天可下床、隔天進食、住院 2–3 d、傷口照護、避免提重物 2–4 wk",
      "風險：bleeding、bile leak、bile duct injury、conversion to open（< 5%）、感染",
      "替代方案：保守治療 IV Abx + drainage（PTGBD），但易復發，最終仍需手術"
    ],
    redFlags: ["術中發現 anatomy 不清 → 改 open（避免 BDI）", "術後黃疸 + 腹痛 + 發燒 → 懷疑 bile duct injury / leak"]
  },
  {
    id: "2025-04", source: "2025", age: 2, sex: "M", department: "小",
    system: "Neuro",
    chiefComplaint: "2 歲男童熱痙攣後家長衛教",
    vignette: "2 歲男童發燒後突發全身性抽搐約 2 分鐘自行緩解，意識恢復。家長焦慮詢問：下次怎麼處理？什麼情況要就醫？跟癲癇差別？以後會不會有慢性影響？",
    history: [
      "抽搐特徵：時間長度、全身/局部、眼睛上吊、發紺、意識狀態",
      "發燒：何時開始、最高溫、感染源",
      "過去類似發作、家族熱痙攣 / 癲癇史",
      "發展里程碑（neurodevelopment）",
      "疫苗接種史"
    ],
    pe: [
      "Vital signs（體溫）",
      "意識狀態、神經學檢查",
      "感染源檢查：耳鏡、咽喉、頸部僵硬（meningismus）",
      "皮膚：疹子（HFMD、roseola）"
    ],
    ddx: [
      "Simple febrile seizure：6 個月–5 歲、< 15 min、全身性、24 hr 內不再發作 → benign，不需 EEG / brain image",
      "下次處置：保持側躺、清呼吸道、勿放東西到口、計時、退燒（acetaminophen / ibuprofen）",
      "送醫時機：> 5 min、focal、24 hr 內反覆、意識不清、年齡 < 6 m 或 > 5 y、首次發作",
      "與癲癇差異：epilepsy = 無發燒誘因、反覆發作；febrile seizure 有發燒、長大會緩解",
      "預後：1/3 復發、< 5% 變 epilepsy、無慢性神經學後遺症",
      "預防：感染時積極退燒（但不能完全預防）"
    ],
    redFlags: ["Complex febrile seizure（> 15 min、focal、24 hr 內反覆）→ 須 work up", "意識持續不清 / postictal > 1 hr → meningitis / encephalitis"]
  },
  {
    id: "2025-05", source: "2025", age: 38, sex: "F", department: "婦",
    system: "OB",
    chiefComplaint: "38 歲第一次產檢（高危妊娠）",
    vignette: "38 歲產婦，懷孕 20 週，G3P1A1，之前都在外面門診，今天第一次來產檢。已知 thalassemia trait、hypothyroidism。前胎 39 歲足月 NSD。今天 BP 140/85（高），但 urine protein (-)。請完成問診。",
    history: [
      "本胎情形：胎動、宮縮、出血、破水、頭痛、視力模糊、上腹痛",
      "GPA：G3P1A1 → 流產次數、原因、前胎細節（孕期、生產方式、新生兒體重、併發症）",
      "Underlying disease：thalassemia type、hypothyroidism 控制、TSH 數值、levothyroxine 劑量",
      "BP 史：是否原本就高血壓、家族史、服藥",
      "家族史：地中海貧血基因型確認（配偶有無做過篩檢）",
      "藥物 / 過敏 / 抽菸 / 酒精"
    ],
    pe: [
      "Vital signs（BP 重複測、HR）",
      "下肢水腫、臉部浮腫",
      "Fundal height、胎心音（Doppler）",
      "甲狀腺觸診、皮膚",
      "Urine dipstick：protein、glucose"
    ],
    ddx: [
      "高危妊娠評估：advanced maternal age + 前次流產 + chronic disease",
      "高血壓分類：chronic HTN（< 20 wk）vs gestational HTN vs preeclampsia → 此例 20 wk + 沒蛋白尿傾向 chronic / gestational",
      "Thalassemia：配偶須 screening；若兩人皆 carrier → 產前診斷（CVS / amniocentesis）",
      "Hypothyroidism：孕期 TSH 目標 < 2.5（T1）、< 3.0（T2/T3），levothyroxine 通常需加量 30–50%",
      "後續追蹤：blood pressure home monitoring、anomaly scan（20 wk）、OGTT 24–28 wk、aspirin 100 mg 預防 preeclampsia"
    ],
    redFlags: ["BP > 160/110 + proteinuria → severe preeclampsia 急症", "頭痛 + 視力模糊 + 上腹痛 → impending eclampsia"]
  },
  {
    id: "2025-06", source: "2025", age: 70, sex: "F", department: "急",
    system: "Neuro",
    chiefComplaint: "車禍後 SDH 服用抗凝血藥的衛教",
    vignette: "70 歲女性車禍頭部外傷，CT 顯示 subdural hematoma（SDH）。平日服用抗凝血藥。請向家屬（女兒）解釋 GCS、CT 影像、住院觀察事項、後續處置與抗凝血藥停藥。",
    history: [
      "受傷機轉：車速、撞擊位置、安全帶、有無昏迷",
      "症狀：頭痛、嘔吐、意識變化、抽搐、肢體無力",
      "抗凝血藥種類（warfarin / DOAC / antiplatelet）、indication、最後一次服用",
      "過去病史：AF、stroke、CAD、跌倒史",
      "藥物過敏、其他用藥"
    ],
    pe: [
      "Vital signs + GCS",
      "瞳孔大小、對光反射",
      "頭皮傷口、battle sign、raccoon eye",
      "肢體 motor power（lateralization）、Babinski",
      "其他外傷評估（ATLS secondary survey）"
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
    redFlags: ["GCS 急速下降、瞳孔不等大 → uncal herniation 急開刀", "INR > 3 + active bleed → 緊急 reversal"]
  },
  {
    id: "2025-07", source: "2025", age: 40, sex: "F", department: "內",
    system: "Endo",
    chiefComplaint: "心悸、體重減輕、容易出汗",
    vignette: "40 歲女性，主訴心悸、體重減輕、容易出汗來門診。請做相關 PE。桌上有血壓計（SP 結果正常）。",
    history: [
      "症狀時程：心悸、體重減輕（多少 kg / 多少時間）、出汗",
      "怕熱、手抖、易怒、失眠",
      "月經改變、腹瀉、肌肉無力",
      "眼部症狀：突眼、複視、流淚",
      "頸部腫脹、吞嚥困難",
      "家族甲狀腺病史"
    ],
    pe: [
      "Vital signs（focus on HR、BP、體溫）",
      "Skin：warm and moist、palmar erythema",
      "Hand：fine tremor（伸直手指、放紙）",
      "Eye：exophthalmos、lid lag、lid retraction、EOM",
      "Neck：thyroid 觸診（大小、硬度、結節、bruit）",
      "Cardiac：tachycardia、AF、systolic murmur",
      "下肢：pretibial myxedema、proximal muscle weakness（站立試驗）",
      "DTR：hyperreflexia"
    ],
    ddx: [
      "Graves' disease（hyperthyroidism + ophthalmopathy + diffuse goiter + bruit）",
      "Toxic multinodular goiter",
      "Toxic adenoma",
      "Subacute thyroiditis（painful、self-limited）",
      "Factitious thyrotoxicosis",
      "Pheochromocytoma（high BP, palpitation）"
    ],
    redFlags: ["Thyroid storm：高燒、心悸、意識改變 → ICU + PTU + propranolol + steroid", "AF + heart failure → rate control + anticoagulation"]
  },
  {
    id: "2025-08", source: "2025", age: 60, sex: "M", department: "外",
    system: "Resp",
    chiefComplaint: "劇烈咳嗽後右側胸痛、呼吸困難",
    vignette: "60 歲男性，遠洋漁船船員，172 cm 52 kg，HTN poor control（BP 160/80）、抽菸。劇烈咳嗽後突發右側胸痛、呼吸困難。PE：右側 JVD、右側無呼吸音、叩診 hyperresonance。CXR：大範圍氣胸。請病解 + 後續處置。",
    history: [
      "胸痛特徵：突發、刺痛、隨呼吸加劇",
      "呼吸困難程度、orthopnea",
      "咳嗽、咳血",
      "抽菸 pack-year、職業暴露（漁船、潛水？）",
      "過去 COPD / asthma / TB 史",
      "外傷、近期 procedure"
    ],
    pe: [
      "Vital signs（focus on BP、HR、SpO2、RR）",
      "頸部：tracheal deviation（向健側）、JVD",
      "胸壁：unilateral chest expansion 減少",
      "叩診：hyperresonance（患側）",
      "聽診：呼吸音消失（患側）",
      "Subcutaneous emphysema"
    ],
    ddx: [
      "Tension pneumothorax（hemodynamic 不穩 + 上述 PE）→ 急 needle decompression（2nd ICS MCL）",
      "處置順序：tension → needle → chest tube；non-tension large → chest tube；small + stable → 觀察 + O2",
      "手術：thoracoscopic bullectomy + pleurodesis（recurrent / persistent air leak）",
      "風險：bleeding、infection、re-expansion pulmonary edema",
      "戒菸、避免 high altitude / diving"
    ],
    redFlags: ["BP 下降 + tracheal deviation → tension pneumothorax 急救", "Hemoptysis + 大範圍氣胸 → catamenial / 肺癌 work up"]
  },
  {
    id: "2025-09", source: "2025", age: 50, sex: "M", department: "外",
    system: "GI",
    chiefComplaint: "上腹漲一週 + 黃疸",
    vignette: "50 歲男性，主訴上腹脹一週，看起來黃黃的，曾發生過灰白便（已好轉）。10 年前有膽結石未處理，每天喝 1/3 瓶威士忌，媽媽肝硬化病史。Echo：膽結石 + 疑似肝硬化。請做 PE 並給 DDx。",
    history: [
      "上腹脹特性、有無腹痛、餐後加劇",
      "黃疸時程、伴隨灰白便、茶色尿、皮膚癢",
      "體重減輕、食慾",
      "酒精（多少年、量）、B/C 肝、家族肝病、藥物 / 中草藥",
      "肝硬化症狀：腹水、嘔血、bleeding tendency、意識改變"
    ],
    pe: [
      "Vital signs",
      "皮膚：jaundice、spider angioma、palmar erythema、Dupuytren's contracture",
      "頭頸：scleral icterus、parotid enlargement、fetor hepaticus",
      "胸部：gynecomastia、loss of axillary hair",
      "腹部：caput medusae、distension、shifting dullness、fluid wave、肝脾觸診（肝硬化縮小、脾腫大）、Murphy's sign（GS）",
      "下肢：pitting edema、testicular atrophy",
      "Asterixis（hepatic encephalopathy）"
    ],
    ddx: [
      "Alcoholic liver cirrhosis with portal hypertension",
      "Choledocholithiasis（GS + obstructive jaundice）",
      "HCC（cirrhosis + 黃疸 + 體重減輕）",
      "Cholangitis（GS + 發燒 + 黃疸 + 腹痛）",
      "Pancreatic head cancer（無痛性黃疸 + 灰白便）"
    ],
    redFlags: ["Hematemesis / melena → variceal bleeding 急救", "意識改變 + asterixis → hepatic encephalopathy"]
  },
  {
    id: "2025-10", source: "2025", age: 4, sex: "M", department: "小",
    system: "ID",
    chiefComplaint: "腸病毒咽峽炎（herpangina）",
    vignette: "阿嬤帶 4 歲男童來門診，主訴發燒 2 天最高 39°C，診所診斷腸病毒咽峽炎（圖片顯示口腔後咽部潰瘍）。請病解、治療、衛教。阿嬤會問：有沒有藥、要不要住院、有沒有疫苗、會再感染嗎、如何避免傳染給妹妹（隔離？酒精消毒？）",
    history: [
      "發燒時程、最高溫、退燒效果",
      "口腔潰瘍位置（herpangina = 後咽 / HFMD = 前口腔 + 手腳）",
      "進食量、脫水徵象（尿量、活力、淚水）",
      "嘔吐、腹瀉、抽搐、嗜睡、肢體無力（重症前兆）",
      "接觸史：托兒所、家中其他兒童",
      "疫苗史"
    ],
    pe: [
      "Vital signs、體重、活力",
      "脫水評估：mucous membrane、capillary refill、皮膚彈性",
      "口腔：後咽部 vesicles / ulcers（herpangina）、tonsil",
      "皮膚：手掌、腳底、屁股皮疹（HFMD）",
      "神經學：意識、肢體無力、myoclonic jerk（重症神經侵犯）"
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
    redFlags: ["嗜睡、肌躍型抽搐、持續嘔吐、心跳呼吸快 → EV71 重症前兆，立即就醫", "脫水 + 無法進食 → 住院 IV fluid"]
  },
  {
    id: "2025-11", source: "2025", age: 45, sex: "F", department: "婦",
    system: "Gyn",
    chiefComplaint: "經血過多 2-3 個月加劇",
    vignette: "45 歲女性，G1P1A0，34 歲因胎位不正剖腹產。近 2-3 年經血過多，最近 2-3 個月特別嚴重。無痛經、無貧血症狀、有透明無味分泌物、定期抹片正常、性交疼痛。請做焦點問診 + DDx。",
    history: [
      "月經史：LMP、週期、天數、量（夜用幾片 / 多久換）、血塊大小",
      "夾經期出血、性交後出血、停經前後",
      "GPA：G1P1A0、上次剖腹產原因",
      "避孕方式（IUD？）",
      "貧血症狀：頭暈、心悸、易喘",
      "性交疼痛特徵、分泌物特性",
      "抹片史、HPV 疫苗",
      "家族婦科癌症"
    ],
    pe: [
      "Vital signs（蒼白？）",
      "腹部：mass、tenderness",
      "Speculum：cervix、polyp、出血源",
      "Pelvic exam：uterine size、shape、tenderness、adnexal mass",
      "皮膚：pallor、petechiae"
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
    redFlags: ["停經後出血 → 子宮內膜癌須排除", "急性大量出血 + Hb < 7 → 緊急輸血"]
  },
  {
    id: "2025-12", source: "2025", age: 30, sex: "F", department: "急",
    system: "GU",
    chiefComplaint: "右側腰痛 + 發燒 39°C",
    vignette: "30 歲女性，右側腰痛 + 發燒 39°C，已在診所開過口服抗生素無效。PE：right CV angle knocking pain。Lab：CRP↑、leukocytosis、尿液很髒。Sono：右腎皮質有 hypo-isogenic lesion、heterogenous。請給 DDx + 病解 + 後續處置。",
    history: [
      "腰痛特性：位置、放射、與排尿關係",
      "發燒、寒顫時程",
      "排尿症狀：頻尿、急尿、灼熱、血尿、混濁尿",
      "噁心、嘔吐、腹瀉",
      "性交史、避孕、最近 procedure",
      "DM、結石史、過去 UTI、外院抗生素種類與療程"
    ],
    pe: [
      "Vital signs（focus 體溫、BP、HR）",
      "腹部：CV angle tenderness（knocking pain）、suprapubic tenderness",
      "腎臟觸診",
      "脫水評估"
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
    redFlags: ["BP 下降 + tachycardia → urosepsis 急救", "Obstruction + infection（pyonephrosis）→ 緊急減壓"]
  },
  {
    id: "2025-13", source: "2025", age: 60, sex: "M", department: "內",
    system: "Endo",
    chiefComplaint: "雙下肢麻（DM neuropathy）",
    vignette: "60 歲男性，DM 多年血糖 poor control（300-500），HbA1C 9.0%。雙下肢麻。請解釋報告並做下肢 PE：light touch、vibration、pin prick、溫覺、Babinski、motor power、SI joint、SLRT、FABER、McMurray、Valgus/Varus。說明檢查與結果，不需診斷。",
    history: [
      "DM 病史、用藥、血糖控制、併發症（眼睛、腎臟、神經）",
      "麻木分布（stocking-glove vs dermatomal）",
      "疼痛性質：burning、shooting、夜間加劇",
      "肌肉無力、平衡感、跌倒史",
      "潰瘍、傷口癒合不良",
      "其他病因：B12、酒精、thyroid、HIV、化療"
    ],
    pe: [
      "Vital signs",
      "Sensory：light touch（棉花棒）、pin prick（牙籤）、vibration（128 Hz 音叉）、proprioception、溫覺",
      "Motor：muscle power、tone、atrophy",
      "Reflex：DTR（patellar、Achilles）、Babinski",
      "Joint：SI joint tenderness、SLRT、FABER（hip）、McMurray（meniscus）、Valgus/Varus（knee 韌帶）",
      "Foot inspection：ulcer、deformity、calluses、pulse（dorsalis pedis、posterior tibial）",
      "Monofilament 10 g（diabetic foot screening）"
    ],
    ddx: [
      "DM peripheral neuropathy（distal symmetric polyneuropathy，stocking-glove）",
      "Lumbar radiculopathy（dermatomal、SLRT+）",
      "B12 deficiency（subacute combined degeneration）",
      "Alcoholic neuropathy",
      "PAOD（pulse 消失 + claudication）",
      "處置：HbA1C 控制 < 7、神經痛藥物（gabapentin、pregabalin、duloxetine）、足部照護"
    ],
    redFlags: ["糖尿病足潰瘍 + 感染 → 緊急 debridement + Abx", "急性下肢無力 + 大小便失禁 → cauda equina"]
  },
  {
    id: "2025-14", source: "2025", age: 55, sex: "M", department: "外",
    system: "MS",
    chiefComplaint: "L4-L5 HIVD 手術衛教",
    vignette: "55 歲男性，L4-L5 HIVD，藥物治療 + 復健療效差。病人帶 MRI 來詢問手術。請解釋手術方式 + 同意書，回答病人疑問（可不可以不做、會不會復發、要不要再決定、風險、替代方案）。",
    history: [
      "症狀時程、保守治療多久、復健項目、效果",
      "疼痛分布（dermatome）、麻木、無力",
      "Red flag：大小便失禁、saddle anesthesia、進行性肌力下降",
      "工作、運動、生活影響",
      "Underlying disease、藥物、過敏",
      "心理準備、家庭支持"
    ],
    pe: [
      "Vital signs",
      "腰椎：palpation、ROM、paraspinal spasm",
      "SLRT、crossed SLRT、Lasègue's sign",
      "Motor：dorsiflexion（L4-L5）、great toe extension（L5）、plantar flexion（S1）",
      "Sensory：dermatome",
      "DTR：patellar（L4）、Achilles（S1）",
      "Anal tone（cauda equina screen）"
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
    redFlags: ["大小便失禁 + saddle anesthesia → cauda equina 24 hr 內急開", "進行性 motor weakness → 不可繼續觀察"]
  },
  {
    id: "2025-15", source: "2025", age: 28, sex: "F", department: "婦",
    system: "OB",
    chiefComplaint: "懷孕 33 週開始規則陣痛",
    vignette: "30 歲女性，懷孕 33 週，中午開始規則陣痛。請解釋 NST（胎心監測）並說明後續處置（需不需要住院、是否算早產）。",
    history: [
      "陣痛時程、頻率、強度、規律性",
      "破水、出血、分泌物增加",
      "胎動",
      "GPA、本胎產檢、超音波（胎位、胎盤位置、羊水）",
      "前胎早產史、cervical incompetence",
      "感染症狀、UTI、發燒",
      "工作、勞累、心理壓力"
    ],
    pe: [
      "Vital signs（focus 體溫、BP）",
      "腹部：fundal height、Leopold 觸診、宮縮頻率與強度",
      "胎心音（Doppler）",
      "Speculum：cervix、出血、羊水（fern test、nitrazine）",
      "Vaginal exam：cervical dilation、effacement、station（除非 PROM 排除後）",
      "下肢水腫、DTR"
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
    redFlags: ["破水 + 發燒 → chorioamnionitis 急生", "Persistent late deceleration → fetal distress 急生"]
  },
  {
    id: "2025-16", source: "2025", age: 2, sex: "F", department: "小",
    system: "GI",
    chiefComplaint: "2 歲 5 個月女童腹瀉",
    vignette: "2 歲 5 個月女童，腹瀉、發燒、嘔吐、血便、黏液便。請病史詢問 + 診斷。問到脫水症狀時考官會有反應。",
    history: [
      "腹瀉時程、次數、性狀（水樣、血絲、黏液）",
      "發燒最高溫、嘔吐次數",
      "進食量、尿布次數（脫水評估）",
      "近期飲食：生食、未煮熟、餐廳",
      "接觸史：托兒所、家人類似症狀",
      "旅遊史、寵物接觸",
      "疫苗：rotavirus",
      "活力、意識"
    ],
    pe: [
      "Vital signs（focus 體溫、HR、BP、體重）",
      "脫水：mucous membrane、皮膚彈性、capillary refill、囟門凹陷、淚水、活力（mild < 5%、moderate 5-10%、severe > 10%）",
      "腹部：bowel sound、tenderness、guarding、rebound、肝脾",
      "Anal area：perianal rash"
    ],
    ddx: [
      "細菌性腸炎（Salmonella、Shigella、Campylobacter、EHEC）→ 血便 + 發燒 + 黏液便",
      "Viral gastroenteritis（rotavirus、norovirus）→ 通常水樣便，少血",
      "Amebic colitis（旅遊史）",
      "IBD（持續性、體重減輕）",
      "Intussusception（陣發性哭鬧 + currant jelly stool）",
      "處置：糞便培養、CBC、electrolyte、stool occult blood、ORS（口服補液）、IV fluid（中重度脫水）、Abx 視菌種（EHEC 不給 Abx 避免 HUS）"
    ],
    redFlags: ["重度脫水 + 嗜睡 + 低血壓 → 急救 IV fluid", "EHEC + 急性腎損傷 + 溶血 + 血小板低 → HUS"]
  },
  {
    id: "2025-17", source: "2025", age: 45, sex: "F", department: "外",
    system: "MS",
    chiefComplaint: "右手腕、大拇指痛",
    vignette: "45 歲女性，右手腕、大拇指痛。桌上病史：RA。請做純 PE：Tinel test、Phalen test、Finkelstein test，以及指關節、腕關節相關 PE（不需病史、衛教）。",
    history: [
      "（題目要求純 PE，不問病史，但確認過去 RA 病史 + 用藥）"
    ],
    pe: [
      "Inspection：手部變形（ulnar deviation、swan neck、boutonnière）、結節、肌肉萎縮（thenar）",
      "Palpation：指關節（MCP、PIP、DIP）逐一摸 + 壓（synovitis、warmth、tenderness）、腕關節",
      "ROM：手指、手腕屈伸",
      "Tinel test：腕橫韌帶上 percussion → 中指、食指 tingling = CTS+",
      "Phalen test：手腕屈曲 60 秒 → tingling = CTS+",
      "Reverse Phalen / Prayer test",
      "Finkelstein test：拇指握拳 + 腕尺偏 → 橈側痛 = de Quervain tenosynovitis+",
      "Grip strength、pinch strength",
      "感覺：median、ulnar、radial 分布"
    ],
    ddx: [
      "Carpal tunnel syndrome（CTS，median nerve compression）",
      "De Quervain tenosynovitis（媽媽手，APL/EPB）",
      "RA flare with synovitis",
      "OA of CMC joint（拇指基部）",
      "Trigger finger",
      "處置：CTS → splint、NSAID、steroid injection、surgery；de Quervain → splint、NSAID、steroid injection；RA → DMARD 調整 + 風免追蹤"
    ],
    redFlags: ["RA + 持續 synovitis → 永久 joint destruction，需強化 DMARD", "Thenar atrophy → severe CTS 需手術 release"]
  },
  {
    id: "2025-18", source: "2025", age: 50, sex: "F", department: "內",
    system: "Endo",
    chiefComplaint: "雙下肢水腫、甲狀腺切除史",
    vignette: "50 歲女性，雙下肢水腫，甲狀腺切除史，最近體重增加 5 kg。請病史詢問。",
    history: [
      "甲狀腺手術原因（cancer / hyperthyroid / goiter）、何時開刀、術後病理",
      "Levothyroxine 用藥史、劑量、是否規律服用、最近 TSH",
      "水腫特徵：pitting / non-pitting、時程、是否對稱、晨起或晚間加劇",
      "體重增加：時間、是否同時食慾下降、伴隨怕冷、便秘、嗜睡、皮膚乾",
      "心臟症狀：喘、orthopnea、PND、運動耐受",
      "腎臟症狀：泡尿、尿量、過去腎病史",
      "腹脹、黃疸、酗酒（肝硬化）",
      "藥物：CCB（amlodipine 致水腫）、NSAID、steroid"
    ],
    pe: [
      "Vital signs（HR 慢？BP？）",
      "甲狀腺：手術疤痕、有無殘留結節",
      "皮膚：cool dry、myxedema",
      "下肢：pitting vs non-pitting edema、對稱性、皮膚變化",
      "心：bradycardia、murmur、JVP",
      "肺：crackles",
      "腹：肝脾、shifting dullness",
      "DTR：delayed relaxation（hypothyroid）"
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
    redFlags: ["Myxedema coma：意識不清 + hypothermia + bradycardia → IV thyroxine 急救", "Pleural effusion + ascites + 嚴重水腫 → uremia / cirrhosis 須排除"]
  },
  {
    id: "2025-19", source: "2025", age: 35, sex: "F", department: "急",
    system: "Resp",
    chiefComplaint: "胸痛、喘、左下肢腫痛",
    vignette: "35 歲女性，胸痛、喘、左下肢腫痛。需問出有吃避孕藥。桌上 EKG（T 波倒置）、生命徵象。病人戴鼻導管。請問診 + 診斷。",
    history: [
      "胸痛特性：突發、刺痛、隨呼吸加劇、咳血",
      "呼吸困難程度、orthopnea、syncope、palpitation",
      "下肢腫痛：時程、單側 vs 雙側、發紅、Homan's sign",
      "口服避孕藥：種類、多久、有無 estrogen",
      "Virchow's triad：久站久坐、長途旅行、最近手術 / 制動、惡性腫瘤、懷孕",
      "家族 thrombophilia、過去 DVT/PE",
      "流產史（APS）、SLE",
      "抽菸"
    ],
    pe: [
      "Vital signs（focus on HR、BP、SpO2、RR、體溫）",
      "頸部：JVD",
      "心：tachycardia、loud P2、right ventricular heave、新出現 murmur",
      "肺：clear（典型）、有時 wheeze / crackle",
      "下肢：unilateral edema、calf tenderness、Homan's sign、palpable cord、皮膚溫度與顏色"
    ],
    ddx: [
      "Pulmonary embolism + DVT（最可能；OCP + Virchow + EKG T inv → S1Q3T3）",
      "Acute coronary syndrome（cardiac risk factor 較少）",
      "Aortic dissection（撕裂痛、後背放射）",
      "Pneumothorax（單側無呼吸音）",
      "Pneumonia（發燒、咳痰）",
      "處置：D-dimer、CTPA、下肢 venous duplex、ECHO（RV strain）、anticoagulation（LMWH → DOAC / warfarin），massive PE 考慮 thrombolysis"
    ],
    redFlags: ["Hemodynamic 不穩 → massive PE，考慮 tPA / 取栓", "OCP + 反覆流產 → APS work up（anticardiolipin、β2GP1、LA）"]
  },
  {
    id: "2025-20", source: "2025", age: 65, sex: "M", department: "外",
    system: "CV",
    chiefComplaint: "右下肢麻腫、心悸",
    vignette: "65 歲男性，右下肢麻腫，伴心悸。請做純 PE 評估 PAOD。",
    history: [
      "（題目要求純 PE）"
    ],
    pe: [
      "Vital signs（HR rhythm、BP 雙手）",
      "Inspection：皮膚顏色（pallor / cyanosis）、毛髮分布、肌肉萎縮、潰瘍位置（toe / lateral malleolus）、壞疽",
      "Palpation：皮膚溫度、capillary refill",
      "Pulse：femoral、popliteal、posterior tibial、dorsalis pedis（雙側比較）",
      "Auscultation：femoral / abdominal bruit",
      "Buerger's test：肢體抬高 60 度 1 分鐘 → pallor，再下垂 → 顏色恢復時間（> 40 秒 = 嚴重缺血）",
      "ABI（ankle-brachial index）：< 0.9 = PAOD、< 0.4 = critical",
      "心：irregular（AF → embolic limb ischemia）",
      "感覺、運動 power（acute limb ischemia 6P：pain、pallor、pulseless、paresthesia、paralysis、poikilothermia）"
    ],
    ddx: [
      "Chronic PAOD（claudication、慢性缺血）",
      "Acute limb ischemia（embolic from AF、in-situ thrombosis）→ 6P 急症",
      "DVT（腫脹 + 痛，但 pulse 通常 +）",
      "Cellulitis",
      "Lumbar radiculopathy",
      "處置：ABI、CTA、duplex；保守（戒菸、cilostazol、antiplatelet、statin、運動）vs revascularization（angioplasty、stent、bypass）；急性 → embolectomy / thrombolysis"
    ],
    redFlags: ["6P + 6 hr 內 → 緊急 revascularization 否則截肢", "AF + acute limb ischemia → cardiac embolism work up"]
  },
  {
    id: "2025-21", source: "2025", age: 50, sex: "F", department: "內",
    system: "GI",
    chiefComplaint: "上腹痛兩個月（已切膽囊）",
    vignette: "中年女性，上腹悶痛兩個月，已切除膽囊。沒有發燒，吃東西完更痛。請純問診 + DDx。",
    history: [
      "腹痛位置、輻射、與進食關係（早飯後 vs 半夜 vs 飯後 30 分）",
      "性質：burning、cramping、boring",
      "緩解因素：制酸劑、進食、姿勢",
      "伴隨：噁心、嘔吐、反酸、燒灼、體重減輕、黑便",
      "膽囊切除時間、術後是否曾類似症狀（post-cholecystectomy syndrome）",
      "藥物：NSAID、aspirin、steroid",
      "酒精、抽菸、咖啡",
      "壓力、家族潰瘍 / 胰臟病史"
    ],
    pe: [
      "Vital signs",
      "腹部：epigastric tenderness、Murphy's-like、肝脾、bowel sound",
      "皮膚：jaundice",
      "Per rectal：tarry stool"
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
    redFlags: ["黑便 + 暈眩 → UGI bleeding 急救", "Severe radiating pain → pancreatitis"]
  },
  {
    id: "2025-22", source: "2025", age: 50, sex: "F", department: "內",
    system: "GU",
    chiefComplaint: "雙下肢水腫、體重減輕（nephrotic syndrome）",
    vignette: "50 歲女性，雙下肢水腫，體重減輕。Lab、urine、sono 結果已給。請病解 + 診斷 + 處置。",
    history: [
      "水腫時程、是否伴隨眼瞼浮腫（晨起明顯）、腹脹（ascites）",
      "尿液：泡多、量、顏色、血尿",
      "體重變化：實際減輕（食慾差）vs 體液增加",
      "全身症狀：疲倦、易倦、低熱、皮疹（SLE、HSP）",
      "Underlying：DM、HTN、HBV/HCV、SLE、惡性腫瘤、用藥（NSAID、gold、penicillamine）",
      "感染症狀、近期 URI（IgA / post-strep）",
      "家族腎病"
    ],
    pe: [
      "Vital signs（BP 重要）",
      "眼瞼水腫、皮疹、紫斑（HSP）",
      "頸：JVD",
      "心肺：crackle、effusion",
      "腹：ascites（shifting dullness、fluid wave）",
      "下肢：pitting edema 程度",
      "皮膚：xanthelasma（hyperlipidemia）"
    ],
    ddx: [
      "Nephrotic syndrome：proteinuria > 3.5 g/day + hypoalbuminemia + edema + hyperlipidemia",
      "病因：minimal change（小孩多）、FSGS、MN、DM nephropathy、amyloidosis、lupus nephritis、HBV/HCV-related",
      "處置：24 hr urine protein / spot UPCR、albumin、lipid、Cr、HBV/HCV、ANA、complement、SPEP、kidney biopsy",
      "治療：limit salt + fluid、loop diuretic、ACEi/ARB（reduce proteinuria）、statin、anticoagulation（若 albumin < 2.5 + RVT 風險）、steroid +/- immunosuppressant 視 biopsy",
      "併發症：thromboembolism（renal vein thrombosis、PE）、感染（IgG 流失）、AKI"
    ],
    redFlags: ["突發 flank pain + 血尿 → renal vein thrombosis", "Albumin < 2 + 血栓 → 緊急 anticoagulation"]
  },
  {
    id: "2025-23", source: "2025", age: 2, sex: "M", department: "小",
    system: "Resp",
    chiefComplaint: "哮吼（croup）病解 + 衛教",
    vignette: "2 歲男童哮吼（croup），請病解 + 衛教。",
    history: [
      "症狀時程：上呼吸道症狀 → barking cough → stridor",
      "呼吸困難程度：吸氣性 stridor、retraction、紫紺、活力",
      "發燒、流鼻水、聲音沙啞",
      "進食量、脫水",
      "疫苗：Hib、流感",
      "接觸史"
    ],
    pe: [
      "Vital signs（focus on RR、SpO2、體溫）",
      "Westley croup score：stridor、retraction、air entry、cyanosis、consciousness",
      "聽診：inspiratory stridor、無 wheeze（區別 asthma）",
      "口腔：避免壓 tongue depressor（避免 epiglottitis 誘發）",
      "皮膚：紫紺、皮膚溫度"
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
    redFlags: ["Stridor at rest + retraction → 緊急處置", "Drooling + 拒食 + 高燒 → epiglottitis 不要碰口腔，急 ENT"]
  },
  {
    id: "2025-24", source: "2025", age: 28, sex: "F", department: "婦",
    system: "OB",
    chiefComplaint: "羊膜穿刺衛教（amniocentesis）",
    vignette: "28 歲女性，懷孕 17 週，安排羊膜穿刺。請病解 + 衛教。",
    history: [
      "G/P/A、本胎產檢結果（NT、母血篩檢、NIPT）",
      "高風險指標：advanced maternal age（≥ 34）、染色體異常家族史、超音波 anomaly、母血篩檢高風險、前胎異常",
      "藥物、過敏、Rh 血型",
      "感染史、出血史",
      "心理準備"
    ],
    pe: [
      "Vital signs",
      "腹部：fundal height、Leopold",
      "胎心音"
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
    redFlags: ["術後持續腹痛 + 發燒 → chorioamnionitis", "羊水滲漏 + 出血 → PPROM"]
  },
  {
    id: "2025-25", source: "2025", age: 65, sex: "M", department: "內",
    system: "GI",
    chiefComplaint: "黃疸 + 灰白便 + 茶色尿",
    vignette: "65 歲男性，黃疸，伴上腹痛轉移背部、灰白便、茶色尿。HbA1C 9.0%。請問診 + DDx。",
    history: [
      "黃疸時程、進行性 vs 波動性",
      "上腹痛特性、輻射至背（pancreatic）、體位緩解",
      "體重減輕（多少 kg / 多久）、食慾、early satiety",
      "灰白便、茶色尿、皮膚癢",
      "DM 病史、HbA1C 9.0% 是否新發（new-onset DM 是 pancreatic ca 警訊）",
      "酒精、HBV/HCV、肝硬化",
      "膽結石、過去手術",
      "Trousseau sign（migratory thrombophlebitis）"
    ],
    pe: [
      "Vital signs",
      "皮膚：jaundice、scratch mark、xanthelasma",
      "鞏膜：icterus",
      "腹部：epigastric mass、Courvoisier sign（無痛性 palpable gallbladder）、肝脾、ascites、淋巴結（Virchow's node）",
      "下肢：edema、phlebitis"
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
    redFlags: ["Charcot triad + 意識改變 + 低血壓 = Reynolds pentad → cholangitis 急救", "Painless jaundice + new DM → 高度懷疑 pancreatic cancer"]
  },
  {
    id: "2025-26", source: "2025", age: 60, sex: "F", department: "內",
    system: "GU",
    chiefComplaint: "腎功能異常 + 雙下肢水腫（中藥 AKI）",
    vignette: "60 歲女性，雙下肢水腫，腎功能異常。病人有吃中藥。請病解 + 致病原因 + 處置 + 飲食衛教。",
    history: [
      "水腫時程、進行性",
      "中藥：種類、來源（民間 vs 中醫師）、何時開始、用了多久、其他成藥",
      "Underlying：DM、HTN、痛風、過去 UTI、腎結石",
      "其他藥物：NSAID、ACEi、aminoglycoside、顯影劑暴露",
      "尿量、泡尿、血尿",
      "全身症狀：疲倦、噁心嘔吐、食慾差、皮膚癢",
      "心臟症狀（區別 HF）"
    ],
    pe: [
      "Vital signs（BP）",
      "Volume status：JVD、crackle、edema、ascites",
      "皮膚：uremic frost、pallor",
      "心：S3、murmur",
      "腹：palpable kidney（hydronephrosis）"
    ],
    ddx: [
      "AKI 病因：pre-renal（脫水、HF、cirrhosis）、intrinsic（ATN、AIN、glomerulonephritis、中藥 herbal nephropathy / aristolochic acid）、post-renal（obstruction）",
      "中藥常見傷腎：aristolochic acid（馬兜鈴酸）、Chinese herb nephropathy",
      "處置：CBC、BUN/Cr、electrolyte、UA + sediment、urine Na/Cr、腎臟超音波、停藥所有可能腎毒性物質",
      "治療：dehydration → IV fluid 補水；overload → diuretic；electrolyte 矯正（K、Ca、PO4、HCO3）；若 AEIOU（acidosis、electrolyte K、ingestion、overload、uremia）→ dialysis",
      "飲食：限水（體重 × 30 + 700 - 點滴 = 飲水量；或前一日尿量 + 700）、低蛋白（0.6-0.8 g/kg/day）、低鹽、低磷、低鉀（視血鉀調整）"
    ],
    redFlags: ["K > 6 + EKG 變化 → 急救（calcium、insulin/glucose、bicarbonate、dialysis）", "Anuria + uremia + 意識改變 → 緊急 dialysis"]
  },
  {
    id: "2025-27", source: "2025", age: 60, sex: "F", department: "內",
    system: "Neuro",
    chiefComplaint: "視力模糊（從外圍開始黑）",
    vignette: "60 歲女性，視力模糊，從外圍開始黑。Vital signs：高血壓。請問診。",
    history: [
      "視力模糊：時程（突發 vs 漸進）、單眼 vs 雙眼、外圍 vs 中央、是否完全失明",
      "伴隨：頭痛、噁心嘔吐、看燈有光暈（halo）、眼紅、眼痛",
      "閃光、飛蚊（retinal detachment）",
      "頭痛特性、blood pressure 控制、噁心",
      "神經學：肢體無力、麻、複視、失語、意識改變",
      "Underlying：DM、HTN、青光眼家族史、stroke、AF、anticoagulation、外傷",
      "藥物：anticholinergic（誘發 acute angle closure glaucoma）"
    ],
    pe: [
      "Vital signs（BP 雙手）",
      "視力（Snellen）、視野（confrontation）",
      "瞳孔：大小、對光反射、RAPD（relative afferent pupillary defect）",
      "眼壓（觸診硬度，正規需 tonometry）",
      "眼前部：紅、角膜、AC（cell / flare）",
      "眼底鏡：optic disc、cup-disc ratio（青光眼）、RD、bleeding",
      "神經學完整檢查"
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
    redFlags: ["BP 嚴重升 + 頭痛 + 神經學症狀 → hypertensive emergency / ICH", "突發單眼失明 → CRAO 須 90 min 內處理"]
  },
  {
    id: "2025-28", source: "2025", age: 32, sex: "F", department: "婦",
    system: "OB",
    chiefComplaint: "不孕症 + 輸卵管阻塞病解",
    vignette: "32 歲女性，不孕症。男生女生檢查都正常，主要看子宮輸卵管攝影報告（HSG 顯示輸卵管阻塞，雙側卵巢腫腫的）。沒有青春痘、禿頭（不像 PCOS）。請病解 + 治療選項（IVF）。",
    history: [
      "不孕時程（≥ 12 個月未避孕未受孕）、過去懷孕史",
      "月經史：規則、痛經、經血量、性交疼痛、性交後出血",
      "PID 史、骨盆腔手術、子宮內膜異位症（dysmenorrhea、deep dyspareunia、dyschezia）",
      "性交頻率、避孕史",
      "男方檢查：精液分析",
      "Underlying：thyroid、PCOS（hirsutism、痘痘）、prolactinoma",
      "感染史：chlamydia、gonorrhea"
    ],
    pe: [
      "Vital signs、BMI",
      "皮膚：hirsutism、acne、acanthosis nigricans（PCOS）",
      "甲狀腺",
      "腹部、pelvic exam",
      "Speculum / bimanual：cervical motion tenderness、adnexal mass / tenderness（endometriosis）"
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
    redFlags: ["Endometrioma + 急性下腹痛 → ovarian torsion / rupture", "OHSS（OHSS）：腹脹、嘔吐、少尿 → 急回診"]
  },
  {
    id: "2025-29", source: "2025", age: 0.25, sex: "M", department: "小",
    system: "CV",
    chiefComplaint: "3 個月大新生兒膜性 VSD（5 mm）+ 左心衰",
    vignette: "3 個月大男嬰，新生兒外院檢查發現 membranous VSD（5 mm），左心衰、喘，已給 diuretic + digoxin。家長詢問第二意見、後續處置、寶寶照顧，並自責覺得是自己的問題。請病解 + 衛教。",
    history: [
      "孕期、生產過程、出生體重",
      "餵奶量、餵奶時喘 / 流汗、體重增加（failure to thrive）",
      "呼吸：tachypnea、retraction、cyanosis（VSD 通常 acyanotic）",
      "感染史、URI 頻率",
      "目前用藥：diuretic、digoxin",
      "家族 CHD",
      "心理：父母焦慮、自責"
    ],
    pe: [
      "Vital signs（HR、RR、SpO2、體重 percentile）",
      "皮膚：cyanosis、perfusion",
      "胸：retraction、tachypnea",
      "心：S1S2、loud P2、harsh holosystolic murmur（LLSB）+/- thrill；diastolic rumble（large shunt）",
      "肝：肝腫大（CHF）",
      "下肢：edema 罕見於嬰兒"
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
    redFlags: ["新生兒哭時 cyanosis 加劇 + reverse shunt → Eisenmenger 不可逆 → 已錯過手術時機", "急性 CHF 失代償 → ICU"]
  },
  {
    id: "2025-30", source: "2025", age: 28, sex: "F", department: "婦",
    system: "Gyn",
    chiefComplaint: "PCOS + 不孕症衛教",
    vignette: "38 歲女性，跟老公結婚半年定期行房，多囊性卵巢與不孕症。桌上超音波（多囊性卵巢）、抽血（testosterone↑）。請藥物治療與非藥物治療建議 + 併發症衛教。",
    history: [
      "確認診斷：Rotterdam criteria（3 取 2：oligo/anovulation、hyperandrogenism、PCO morphology）",
      "月經史：oligomenorrhea、amenorrhea",
      "Hyperandrogen：hirsutism、acne、androgenic alopecia",
      "BMI、體重變化、insulin resistance（acanthosis nigricans）",
      "不孕時程、避孕史、性交頻率、男方精液分析",
      "Underlying：DM、dyslipidemia、HTN、metabolic syndrome",
      "家族 PCOS、DM、CV disease"
    ],
    pe: [
      "Vital signs、BMI、waist circumference",
      "皮膚：hirsutism（Ferriman-Gallwey score）、acne、acanthosis nigricans、androgenic alopecia",
      "甲狀腺",
      "腹部、pelvic exam"
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
    redFlags: ["長期未避孕 + amenorrhea > 3 個月 → 子宮內膜增生 / 癌症 work up", "OHSS：使用 gonadotropin / IVF 後腹脹、少尿 → 急回診"]
  }
];
