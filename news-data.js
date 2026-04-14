// 新闻数据存储
// 格式: { "YYYY-MM-DD": [ { title, summary, source, url }, ... ] }
// 最后更新: 2026/4/15 00:00:00

const allNewsData = {
    "2026-04-15": [
        {
            title: "Evaluating real-world deployment of an HL7-CDA-aligned LLM for ICD-10-CM coding",
            summary: "评估HL7-CDA对齐的大语言模型用于ICD-10-CM编码的实际部署，AI医疗编码系统落地应用。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02541-5"
        },
        {
            title: "PsychiatryBench: a multi-task benchmark for LLMs in psychiatry",
            summary: "PsychiatryBench：精神病学大语言模型多任务基准测试，AI心理健康评估新标准。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02582-w"
        },
        {
            title: "Large language model-augmented offline reinforcement learning framework for sepsis management in critical care",
            summary: "大语言模型增强的离线强化学习框架用于重症监护脓毒症管理，AI临床决策支持新突破。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02611-8"
        },
        {
            title: "Mapping AI startup investment and innovation in healthcare using a five-tier AI systems complexity framework",
            summary: "使用五层AI系统复杂性框架绘制医疗AI创业投资和创新图谱，AI医疗投融资趋势分析。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02595-5"
        },
        {
            title: "J&J's cardiovascular unit stands out again in Q1",
            summary: "强生心血管部门Q1再次表现突出，战略转向高增长市场如心血管领域取得成效，是该季度唯一实现两位数增长的医疗器械部门。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/jjs-cardiovascular-unit-stands-out-again-in-q1/817443/"
        },
        {
            title: "Stryker to buy Amplitude Vascular Systems",
            summary: "史赛克收购Amplitude Vascular Systems，血管内碎石技术有望挑战Shockwave IVL。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/stryker-to-buy-amplitude-vascular-systems/817322/"
        },
        {
            title: "Medline recalls angiographic syringes, receives FDA warning letter",
            summary: "Medline召回血管造影注射器并收到FDA警告信，医疗器械质量控制问题持续。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/medline-recalls-angiographic-syringes-receives-fda-warning-letter/817433/"
        },
        {
            title: "GE HealthCare integrates ultrasound into Medtronic's Stealth AXiS surgical system",
            summary: "GE医疗将超声集成到美敦力Stealth AXiS手术系统，手术机器人技术整合新进展。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/ge-healthcare-integrates-ultrasound-into-medtronics-stealth-axis-surgical/817277/"
        },
        {
            title: "Pulse Biosciences hires Liane Teplitsky as COO",
            summary: "Pulse Biosciences聘请前雅培高管Liane Teplitsky为首席运营官，推动脉冲场消融设备上市。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/pulse-biosciences-hires-liane-teplitsky-as-coo/817166/"
        },
        {
            title: "FDA, medtech industry near MDUFA VI agreement",
            summary: "FDA与医疗器械行业即将达成MDUFA VI协议，计划大量招聘医疗器械审评人员。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/fda-medtech-industry-near-mdufa-vi-agreement/817131/"
        }
    ],
    "2026-04-14": [
        {
            title: "An exploratory study of headache pain intensity using facial expressions and APEX frames",
            summary: "使用面部表情和APEX帧研究头痛疼痛强度的探索性研究，AI技术用于疼痛评估新方法。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02617-2"
        },
        {
            title: "Automating the quality monitoring of a hospital discharge summary improvement project utilising large language models",
            summary: "利用大语言模型自动化监测医院出院小结质量改进项目，AI提升医疗文档质量。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02636-z"
        },
        {
            title: "A case study comparing anonymized and synthetic health insurance claims data for medication safety assessments",
            summary: "比较匿名化和合成健康保险索赔数据用于药物安全评估的案例研究，AI数据隐私保护新进展。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02622-5"
        },
        {
            title: "Wearable ECG and PPG for anxiety detection: a translational digital medicine perspective",
            summary: "可穿戴ECG和PPG用于焦虑检测：转化数字医学视角，AI心理健康监测新突破。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02620-7"
        },
        {
            title: "Unified multimodal learning for stroke triage: joint detection, scoring, and segmentation of acute ischemic stroke",
            summary: "统一多模态学习用于卒中分诊：急性缺血性卒中的联合检测、评分和分割，AI影像诊断新进展。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-025-02255-0"
        },
        {
            title: "Stryker to buy Amplitude Vascular Systems",
            summary: "史赛克收购Amplitude Vascular Systems，血管内碎石技术有望挑战Shockwave IVL。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/stryker-to-buy-amplitude-vascular-systems/817322/"
        },
        {
            title: "Stryker is fully operational after cyberattack",
            summary: "史赛克公司在遭受网络攻击一个月后全面恢复运营，医疗器械网络安全问题引发关注。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/stryker-is-fully-operational-one-month-after-cyberattack/817218/"
        },
        {
            title: "Pulse Biosciences hires Liane Teplitsky as COO",
            summary: "Pulse Biosciences聘请Liane Teplitsky为首席运营官，医疗器械公司高管变动。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/pulse-biosciences-hires-liane-teplitsky-as-coo/817166/"
        },
        {
            title: "FDA, medtech industry near MDUFA VI agreement",
            summary: "FDA与医疗器械行业即将达成MDUFA VI协议，影响未来5年医疗器械审批费用和流程。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/fda-medtech-industry-near-mdufa-vi-agreement/817131/"
        },
        {
            title: "E2 raises $80M to market thrombectomy platform",
            summary: "E2公司完成8000万美元融资，用于血栓切除平台市场化，AI辅助介入治疗设备获资本青睐。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/endovascular-engineering-e2-80M-funding-round-mechanical-thrombectomy/817138/"
        }
    ],
    "2026-04-13": [
        {
            title: "Application of machine learning in osteoporosis screening: a narrative review",
            summary: "机器学习在骨质疏松症筛查中的应用综述，AI算法提升骨密度检测准确性和早期诊断能力。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02516-6"
        },
        {
            title: "Graphicalized vision-language modeling for comprehensive lung nodule analysis and risk stratification",
            summary: "图形化视觉语言模型用于肺结节综合分析和风险分层，AI影像诊断技术新突破。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02602-9"
        },
        {
            title: "Cardiovascular digital twins using a Windkessel physics informed neural network",
            summary: "使用Windkessel物理信息神经网络构建心血管数字孪生，AI精准医疗新进展。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02610-9"
        },
        {
            title: "Evaluating AI in leukocyte classification: performance of the AI system against 15 morphology experts",
            summary: "AI白细胞分类系统与15位形态学专家对比评估，AI诊断准确率达到专家水平。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02601-w"
        },
        {
            title: "Predicting bilingual aphasia treatment outcomes using digital twins: a double-blind randomized controlled trial",
            summary: "使用数字孪生预测双语失语症治疗结果的双盲随机对照试验，AI个性化治疗新突破。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02583-9"
        },
        {
            title: "Stryker is fully operational after cyberattack",
            summary: "史赛克公司在遭受网络攻击一个月后全面恢复运营，医疗器械网络安全问题引发关注。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/stryker-is-fully-operational-one-month-after-cyberattack/817218/"
        },
        {
            title: "Pulse Biosciences hires Liane Teplitsky as COO",
            summary: "Pulse Biosciences聘请Liane Teplitsky为首席运营官，医疗器械公司高管变动。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/pulse-biosciences-hires-liane-teplitsky-as-coo/817166/"
        },
        {
            title: "FDA, medtech industry near MDUFA VI agreement",
            summary: "FDA与医疗器械行业即将达成MDUFA VI协议，影响未来5年医疗器械审批费用和流程。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/fda-medtech-industry-near-mdufa-vi-agreement/817131/"
        },
        {
            title: "E2 raises $80M to market thrombectomy platform",
            summary: "E2公司完成8000万美元融资，用于血栓切除平台市场化，AI辅助介入治疗设备获资本青睐。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/endovascular-engineering-e2-80M-funding-round-mechanical-thrombectomy/817138/"
        },
        {
            title: "How AI tools are transforming the medtech space",
            summary: "AI工具如何改变医疗器械行业，从检测到预防，探索AI医疗设备在多种疾病中的扩展能力。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/trendline/ai-diagnostics/578/"
        }
    ],
    "2026-04-12": [
        {
            title: "Application of machine learning in osteoporosis screening: a narrative review",
            summary: "机器学习在骨质疏松症筛查中的应用综述，AI算法提升骨密度检测准确性和早期诊断能力。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02516-6"
        },
        {
            title: "Graphicalized vision-language modeling for comprehensive lung nodule analysis and risk stratification",
            summary: "图形化视觉语言模型用于肺结节综合分析和风险分层，AI影像诊断技术新突破。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02602-9"
        },
        {
            title: "Cardiovascular digital twins using a Windkessel physics informed neural network",
            summary: "使用Windkessel物理信息神经网络构建心血管数字孪生，AI精准医疗新进展。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02610-9"
        },
        {
            title: "Evaluating AI in leukocyte classification: performance of the AI system against 15 morphology experts",
            summary: "AI白细胞分类系统与15位形态学专家对比评估，AI诊断准确率达到专家水平。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02601-w"
        },
        {
            title: "Predicting bilingual aphasia treatment outcomes using digital twins: a double-blind randomized controlled trial",
            summary: "使用数字孪生预测双语失语症治疗结果的双盲随机对照试验，AI个性化治疗新突破。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02583-9"
        },
        {
            title: "Stryker is fully operational after cyberattack",
            summary: "史赛克公司在遭受网络攻击一个月后全面恢复运营，医疗器械网络安全问题引发关注。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/stryker-is-fully-operational-one-month-after-cyberattack/817218/"
        },
        {
            title: "Pulse Biosciences hires Liane Teplitsky as COO",
            summary: "Pulse Biosciences聘请Liane Teplitsky为首席运营官，医疗器械公司高管变动。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/pulse-biosciences-hires-liane-teplitsky-as-coo/817166/"
        },
        {
            title: "How AI tools are transforming the medtech space",
            summary: "AI工具如何改变医疗器械行业，从检测到预防，探索AI医疗设备在多种疾病中的扩展能力。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/trendline/ai-diagnostics/578/"
        },
        {
            title: "CDRH targets hospital readmissions with home device innovation challenge",
            summary: "FDA医疗器械中心(CDRH)推出家庭设备创新挑战赛，计划挑选9款设备支持患者出院后护理。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/cdrh-targets-hospital-readmissions-with-home-device-innovation-challenge/817071/"
        },
        {
            title: "Hologic hires former Baxter leader José Almeida as CEO",
            summary: "Hologic聘请前百特领导者José Almeida为CEO，配合183亿美元私有化交易完成。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/hologic-hires-ex-baxter-leader-jose-almeida-as-ceo/816919/"
        }
    ],
    "2026-04-08": [
        {
            title: "北京发布32条新举措 AI融入医药研发全环节",
            summary: "北京发布创新药械加速转化措施，布局AI人工智能预测、类器官与器官芯片等领域，开发不少于15种模型，推动手术机器人入院使用，加速医药工业数智化转型。",
            source: "百家号",
            url: "https://baijiahao.baidu.com/s?id=1861892815399244710"
        },
        {
            title: "2026年AI医疗新政全面解读 800家三甲医院率先试点",
            summary: "自2026年4月起，全国800家三甲医院率先开展AI医疗试点，重点覆盖肺结节筛查、糖尿病视网膜病变识别等12个高频应用场景，相关服务纳入医保乙类报销目录。",
            source: "百度",
            url: "http://mbd.baidu.com/newspage/data/dtlandingsuper?nid=dt_4140568449442723356"
        },
        {
            title: "AI+医疗告别单点智能 2026年胜负手在于全流程协同",
            summary: "医疗智能体驱动协同网络，实现诊前精准导航、诊中决策支持、诊后连续性健康管理闭环，构建从院内到院外的连续性服务闭环，显著提升患者依从性。",
            source: "腾讯云",
            url: "https://cloud.tencent.com/developer/news/3777100"
        },
        {
            title: "斯坦福普林斯顿发布首个医学世界模型MedOS",
            summary: "全球首个通用医疗具身世界模型MedOS发布，从临床诊断到治疗、从外科手术到药物研发，AI真正读懂生老病死的物理现实，实现感知-模拟-干预的医疗闭环。",
            source: "BAAI",
            url: "https://hub.baai.ac.cn/view/52650"
        },
        {
            title: "京东健康持续开源医疗大模型京医千询",
            summary: "京东健康宣布京医千询8B、32B模型持续开源，在医疗视觉问答、影像报告生成等多个维度表现优于同参数级别主流模型，获MedBench双榜单冠军。",
            source: "百家号",
            url: "https://baijiahao.baidu.com/s?id=1861454870589148561"
        },
        {
            title: "深睿医疗大模型新品闪耀2026医学装备展",
            summary: "深睿医疗发布前列腺MR AI辅助诊断系统及胸片大模型报告中心两大新品，实现从单点效率提升到全流程系统赋能的战略跨越，AI-PACS平台显著提升影像调阅效率。",
            source: "中国日报",
            url: "http://tech.chinadaily.com.cn/a/202603/30/WS69c9ecdca310942cc49a57f6.html"
        },
        {
            title: "2026医生AI使用报告：超80%医生已在执业中使用AI",
            summary: "美国医学会调查显示，2026年超80%受访医生已在执业中使用AI，较2024年翻倍，平均使用场景从1.1个增至2.3个，文档类和摘要类应用增长最快。",
            source: "百家号",
            url: "https://baijiahao.baidu.com/s?id=1861624278740556608"
        },
        {
            title: "AI遇上医学 开启智慧医疗新时代",
            summary: "AI深度重构医疗体系，通过精准诊断、药物研发、个性化治疗及医疗普惠四大维度推动医疗行业向智慧医疗时代跃迁，实现效率提升与人文关怀的双重突破。",
            source: "百度",
            url: "http://mbd.baidu.com/newspage/data/dtlandingsuper?nid=dt_4659079273870858445"
        },
        {
            title: "中国AI医疗大模型八强 医诊大模型技术全景解析",
            summary: "医疗大模型在长文本处理、医学推理增强、小样本学习等方面取得突破，某模型引入滑动窗口注意力机制将推理速度提升40%，复杂病例诊断一致性达89%。",
            source: "百度云",
            url: "https://cloud.baidu.com/article/5573693"
        },
        {
            title: "AI医疗的下一个五年：从诊疗辅助迈向主动健康管理",
            summary: "AI覆盖范围将从疾病治疗前置到全生命周期健康维持，构建个人数字孪生体，实现疾病超早期风险预测和个性化健康干预，医疗服务模式从病发治疗转向实时监测、主动预警。",
            source: "科学网",
            url: "https://wap.sciencenet.cn/home.php?mod=space&blog=280034&do=blog&id=1528816"
        }
    ],
    "2026-04-09": [
        {
            title: "The regulation of artificial intelligence in intensive care units: from narrow tools to generalist systems",
            summary: "ICU中AI监管从窄工具到通用系统的演进，探讨AI医疗器械在重症监护中的监管框架、临床验证要求和安全性保障措施。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02535-3"
        },
        {
            title: "Digital physiological biomarkers predict within-person symptom changes in complex chronic illness",
            summary: "数字生理生物标志物可预测复杂慢性病患者症状变化，通过可穿戴设备和AI算法实现个性化健康监测和早期预警。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02543-3"
        },
        {
            title: "Overcoming Data Loss in Wearable Disease Detection with GAN-Based Imputation",
            summary: "使用GAN生成对抗网络解决可穿戴设备疾病检测中的数据丢失问题，提升AI诊断系统的准确性和可靠性。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02518-4"
        },
        {
            title: "The doctor is not in, but the Chatbot is: Utah's experience regulating mental health AI",
            summary: "犹他州监管心理健康AI的经验，探讨生成式AI心理健康代理的政策挑战、风险评估和监管框架。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02580-y"
        },
        {
            title: "An EEG-based digital biomarker for personalizing transcranial magnetic stimulation in major depressive disorder",
            summary: "基于EEG的数字生物标志物用于个性化经颅磁刺激治疗重度抑郁症，AI辅助精准医疗应用。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02603-8"
        },
        {
            title: "Towards noninvasive blood count using a deep learning pipeline from bulbar conjunctiva videos",
            summary: "深度学习从球结膜视频实现无创血液计数，AI医学影像诊断新突破，无需采血即可检测血液指标。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02598-2"
        },
        {
            title: "ClinicRealm: Re-evaluating large language models with conventional machine learning for non-generative clinical prediction tasks",
            summary: "重新评估大语言模型与传统机器学习在非生成性临床预测任务中的表现，AI临床决策支持系统研究。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02539-z"
        },
        {
            title: "EcoRxAgent: an AI agent for generating economically substitutable prescriptions",
            summary: "AI代理生成经济可替代处方，降低医疗成本同时保证治疗效果，AI药物经济学应用。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02612-7"
        },
        {
            title: "CDRH targets hospital readmissions with home device innovation challenge",
            summary: "FDA医疗器械中心(CDRH)推出家庭设备创新挑战赛，旨在降低医院再入院率，鼓励AI家庭医疗设备开发。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/cdrh-targets-hospital-readmissions-with-home-device-innovation-challenge/817071/"
        },
        {
            title: "Digital health funding concentrates in fewer startups: report",
            summary: "数字健康融资报告显示资金集中在更少初创公司，AI医疗投资趋势向头部企业集中，投融资市场分化明显。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/digital-health-funding-concentrates-fewer-startups-q1-2026-rock-health/816933/"
        }
    ],
    "2026-04-10": [
        {
            title: "Pursuit of biomarkers of brain diseases: beyond cohort comparisons",
            summary: "脑疾病生物标志物研究的新视角，超越传统队列比较方法，探索AI在神经疾病诊断和监测中的应用前景。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02614-5"
        },
        {
            title: "The landscape of artificial intelligence-enabled medical devices in the EU and the US intended for intensive care units",
            summary: "欧盟和美国ICU用AI医疗器械全景分析，对比两大市场的监管框架、审批流程和市场准入要求。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02609-2"
        },
        {
            title: "Multicenter validation and updating of the ELDER-ICU model for severity assessment in elderly critical illness",
            summary: "ELDER-ICU模型多中心验证与更新，AI模型用于老年重症患者严重程度评估，提升ICU诊疗精准度。",
            source: "npj Digital Medicine",
            url: "https://www.nature.com/articles/s41746-026-02472-1"
        },
        {
            title: "FDA, medtech industry near MDUFA VI agreement",
            summary: "FDA与医疗器械行业即将达成MDUFA VI协议，影响未来5年医疗器械审批费用和流程，AI医疗器械监管受关注。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/fda-medtech-industry-near-mdufa-vi-agreement/817131/"
        },
        {
            title: "E2 raises $80M to market thrombectomy platform",
            summary: "E2公司完成8000万美元融资，用于血栓切除平台市场化，AI辅助介入治疗设备获资本青睐。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/endovascular-engineering-e2-80M-funding-round-mechanical-thrombectomy/817138/"
        },
        {
            title: "Judge allows states' lawsuit over HHS restructuring to move forward",
            summary: "法院允许各州就HHS重组提起诉讼，FDA医疗器械审批流程可能受影响，AI医疗器械监管面临不确定性。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/judge-allows-states-lawsuit-hhs-restructuring-layoffs-move-forward/817117/"
        },
        {
            title: "Philips warns not to use certain nebulizers in Trilogy Evo ventilator recall",
            summary: "飞利浦警告不要在Trilogy Evo呼吸机召回中使用某些雾化器，医疗器械安全性问题持续发酵。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/philips-warns-not-to-use-certain-nebulizers-in-trilogy-evo-ventilator-recal/816981/"
        },
        {
            title: "UK steps up push to align medtech regulations with the US",
            summary: "英国加强与美国医疗器械监管协调，探索互认机制，AI医疗器械国际监管趋同化。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/uk-steps-up-push-to-align-medtech-regulations-with-the-us/816790/"
        },
        {
            title: "J&J launches enhanced PFA device in Europe",
            summary: "强生在欧洲推出增强型脉冲场消融设备，AI辅助心脏介入治疗设备获CE认证。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/Johnson-jnj-varipulse-pro-pfa-pulsed-field-ablation-ce-mark/816836/"
        },
        {
            title: "Whoop raises $575M, adds Abbott as strategic investor",
            summary: "可穿戴设备公司Whoop融资5.75亿美元，雅培成为战略投资者，AI健康监测市场持续升温。",
            source: "MedTech Dive",
            url: "https://www.medtechdive.com/news/whoop-raises-575m-adds-abbott-as-strategic-investor/816229/"
        }
    ]
};
