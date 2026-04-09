// 新闻数据存储
// 格式: { "YYYY-MM-DD": [ { title, summary, source, url }, ... ] }
// 最后更新: 2026/4/9 23:15:00

const allNewsData = {
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
    ]
};
