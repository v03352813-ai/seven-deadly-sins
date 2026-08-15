var CUSTOMER_SERVICE_WECHAT = "你的客服微信"; // 可替换为您的微信号，方便没有小红书买家直接添加购买
var STORE_SHOP_LINK = "https://m.xianyu.com"; // 可替换为您的小红书/闲鱼店铺或商品链接
/**
 * Assessment Platform Core Engine - Standalone Single Test Architecture
 * High-Density Comprehensive Result Engine & Instant Bulletproof Runner
 */

var MINI_PROGRAM_LINK = "#小程序://一子一木/0JPDrt84ecI5Gwd";

// ==========================================================================
// 1. Comprehensive Result Profiles Database
// ==========================================================================

var MBTI_DESCRIPTIONS = {
  INTJ: {
    title: "INTJ - 建筑师 / 独立战略家",
    summary: "具有极深洞察力和远大抱负的思想家。你擅长逻辑分析、长远战略规划，对现有系统与规则拥有独特的重构能力。",
    traits: "INTJ 是 16 型人格中最独立、逻辑最严密的类型之一。你习惯用宏观、理性的视角审视世界，不盲从权威与经验，总是试图寻找事物背后的第一性原理。在面对复杂难题时，你能迅速剥离表面干扰，建立高效的系统或解决模型。",
    strengths: ["卓越的战略思维与长远布局能力", "极强的独立思考力，不受偏见左右", "追求极致的效率与知识深度", "意志坚定，能够排除干扰实现既定目标"],
    pitfalls: ["容易显得过于严苛，忽视他人情绪感受", "对低效或缺乏逻辑的人缺乏耐心", "过于依赖理性，偶尔会陷入分析瘫痪", "不擅长表露情感，社交边界感极强"],
    careers: ["系统架构师", "战略咨询顾问", "数据科学家", "风险投资分析师", "高级研发专家", "量化交易员"],
    relationship: "在亲密关系中，你非常看重智力上的对等与相互尊重。你不喜欢虚浮的讨好与表面社交，更倾向于与伴侣建立深层次的精神共鸣与长远的人生规划。",
    famous: ["埃隆·马斯克 (Elon Musk)", "艾萨克·牛顿 (Isaac Newton)", "马克·扎克伯格 (Mark Zuckerberg)"]
  },
  INTP: {
    title: "INTP - 逻辑学家 / 理论探求者",
    summary: "积极进取的发明家，对知识有着止不住的好奇心。你热衷于剖析复杂理论，寻找世界背后的终极逻辑规律。",
    traits: "INTP 是理智与好奇心的化身。你生活在思想的天地里，总是试图理解宇宙的运作机制。比起直接动手执行，你更享受在脑海中重构逻辑模型、推演各种可能性。你拥有极高的包容度与思维灵活性，乐于接受非传统的全新观点。",
    strengths: ["极其敏捷且严谨的逻辑分析能力", "思维开放灵动，富于独创性构想", "客观公正，不受情绪偏见干扰", "能够发现他人忽略的深层矛盾与漏洞"],
    pitfalls: ["容易陷入纯理论思考，缺乏实际执行力", "对常规日常事务（如报销、填表）感到厌烦", "表达过于抽象，他人难以跟上你的节奏", "情绪觉察较弱，可能在不知不觉中伤害他人"],
    careers: ["软件研发工程师", "理论物理学者", "AI算法专家", "哲学/心理学研究员", "系统分析师"],
    relationship: "你追求自由而平等的恋爱关系。你不需要窒息的黏人陪伴，而是希望伴侣能理解你的独立思考空间，并能与你探讨有趣的思想话题。",
    famous: ["阿尔伯特·爱因斯坦 (Albert Einstein)", "比尔·盖茨 (Bill Gates)", "勒内·笛卡尔 (René Descartes)"]
  },
  ENTJ: {
    title: "ENTJ - 指挥官 / 战略统帅",
    summary: "大胆、富有远见且意志强大的领导者。你天生善于发现组织与流程中的低效，并重新制定战略与高效执行体系。",
    traits: "ENTJ 是天生的领袖与变革推动者。你拥有宏大的视野与极强的目标感，善于将长远愿景拆解为具体的行动步骤。在团队中，你自带气场，能够迅速整合资源、调动团队潜能，迎难而上完成挑战。",
    strengths: ["卓越的领导号召力与组织调度能力", "果断高效，敢于在关键时刻做出艰难决策", "战略眼光长远，不被眼前得失束缚", "意志极其坚定，抗压能力极强"],
    pitfalls: ["容易表现出强烈的控制欲与专断倾向", "对效率低下或跟不上节奏的人缺乏包容", "偶尔过于看重成果，忽视了团队的人情关怀", "难于展示脆弱，习惯扛下所有压力"],
    careers: ["企业CEO/高级管理层", "管理咨询总监", "创业者/创始人", "风险投资合伙人", "项目总负责人"],
    relationship: "在爱情中，你寻找的是能够与你并肩作战的理想伙伴。你欣赏有抱负、独立的伴侣，愿意为共同的生活目标全力以赴，但需要注意给对方留出情绪空间。",
    famous: ["史蒂夫·乔布斯 (Steve Jobs)", "玛格丽特·撒切尔 (Margaret Thatcher)", "富兰克林·罗斯福"]
  },
  ENTP: {
    title: "ENTP - 辩论家 / 颠覆创新者",
    summary: "聪明好奇的思想者，绝不放过任何智力挑战。你善于打破常规框框，提出充满颠覆性的创新想法与商业构想。",
    traits: "ENTP 是思想界的破局者。你拥有极快的反应速度和跳跃的创造力，喜欢通过辩论与思想碰撞检验概念的真伪。你抗拒僵化、陈旧的制度，总是热衷于寻找全新的替代方案。",
    strengths: ["极具爆发力的创意与创新脑洞", "思维极其敏捷，头脑风暴能力无出其右", "知识面广博，善于跨领域连接概念", "适应力极强，能迅速掌握新领域"],
    pitfalls: ["容易“始乱终弃”，兴趣转移快而忽视落地实施", "为了辩论而辩论，可能让人觉得挑衅", "讨厌守规则和重复性细节工作", "情绪耐受度较低，缺乏长期沉淀"],
    careers: ["产品创新总监", "品牌战略顾问", "连续创业者", "公关/营销策划专家", "商业分析师"],
    relationship: "你喜欢充满新鲜感与智力刺激的恋爱关系。你希望伴侣能跟上你的思维跳跃，陪你一起探索未知世界，而不是试图用传统规则约束你。",
    famous: ["托马斯·爱迪生 (Thomas Edison)", "本杰明·富兰克林", "华特·迪士尼 (Walt Disney)"]
  },
  INFJ: {
    title: "INFJ - 提倡者 / 灵魂预言家",
    summary: "安静而神秘，同时鼓舞人心且不知疲倦的理想主义者。你拥有极强的直觉与对人类福祉、深层心灵的深刻关怀。",
    traits: "INFJ 是最有灵性与深刻洞察力的类型。你习惯看透语言背后的本质情绪与动机，对世界抱有强烈的使命感。你既拥有深邃的思想，又具备温和坚定的共情力。",
    strengths: ["深刻的洞察力与超强的同理心", "坚持原则与信念，富有深厚文采与感染力", "善于看透他人潜能并引导其成长", "远见卓识，追求心灵深处的价值"],
    pitfalls: ["极其容易陷入情绪内耗与完美主义陷阱", "习惯过度消耗自己去照顾他人", "难以向外打开心扉，经常感到被孤立", "面对冲突时容易选择退缩冷处理"],
    careers: ["心理咨询师", "作家/独立编剧", "社会学学者", "用户体验(UX)研究员", "公益组织负责人"],
    relationship: "你渴望灵魂契合的深度爱恋。对你而言，肤浅的交往毫无意义。你愿意为爱付出极高的忠诚与关怀，但也需要对方给予极大的情绪安全感。",
    famous: ["圣雄甘地 (Mahatma Gandhi)", "柏拉图 (Plato)", "卡尔·荣格 (Carl Jung)"]
  },
  INFP: {
    title: "INFP - 调停者 / 心灵梦想家",
    summary: "诗意、善良而富有同情心的利他主义者。你珍视个人核心价值观与内心真实性，追求灵魂深处的和谐与美感。",
    traits: "INFP 是理想主义的守护者。你的内心情感极其丰富敏感，对真善美有着近乎执着的追求。你不随波逐流，重视内心的独立与真实体验。",
    strengths: ["极高的同理心与艺术创造力", "思想开放包容，对世界抱有善意", "对自己的理想与价值观坚定不移", "善于用文字、艺术传递深刻情感"],
    pitfalls: ["容易陷入理想化，对残酷现实感到挫败", "极度害怕冲突与批评，倾向于自我怀疑", "做事容易拖延，缺乏条理性与计划执行", "过于敏感，容易沉溺于消极情绪"],
    careers: ["独立插画家/艺术家", "心理辅导员", "自由撰稿人", "品牌故事专家", "教育咨询师"],
    relationship: "在爱情中，你是极其浪漫且忠诚的伴侣。你渴望无条件的接纳与真挚的理解，会全心全意为伴侣营造温暖、有诗意的亲密关系。",
    famous: ["威廉·莎士比亚 (William Shakespeare)", "J.K.罗琳 (J.K. Rowling)", "文森特·梵高"]
  },
  ENFJ: {
    title: "ENFJ - 主人公 / 灵魂教育家",
    summary: "富有魅力且鼓舞人心的领导者。你善于发现他人的闪光点与潜在天赋，并倾尽全力引导团队共同成长。",
    traits: "ENFJ 是极具同理心与感染力的社交领袖。你能迅速察觉团队中的情绪气氛，善于沟通并鼓励每个人达成共同的目标。你富有天然的利他精神与公信力。",
    strengths: ["极具号召力与情绪感染力", "极高的情商与同理心，善于凝聚团队", "无私奉献，天然具备利他主义精神", "沟通表达能力极佳"],
    pitfalls: ["容易过度卷入他人的问题，忽略自身需求", "过于在意他人评价与认可", "偶尔会因为过于积极而给他人带来压迫感", "难以做出可能伤害他人的决策"],
    careers: ["组织发展(OD)专家", "企业高级培训师", "公关/品牌总监", "教育家", "社区运营专家"],
    relationship: "你是充满热情与关怀的爱人。你乐于为伴侣付出，渴望帮助伴侣实现理想，但也希望对方能给予等价的情感回应与肯定。",
    famous: ["贝拉克·奥巴马 (Barack Obama)", "马丁·路德·金", "奥普拉·温弗瑞"]
  },
  ENFP: {
    title: "ENFP - 竞选者 / 灵感追梦人",
    summary: "热情、富有创造性且自由洒脱的社交家。你总能从生活和人际关系中发现无限乐趣与可能性，感染身边的每一个人。",
    traits: "ENFP 是充满生命能量的追梦人。你拥有无穷无尽的奇思妙想，善于在初次见面时打动人心。你抗拒平庸与束缚，总是积极地追求自由与灵感。",
    strengths: ["充满源源不断的热情与生命活力", "极佳的交际沟通与破冰能力", "灵感迸发，善于给团队带来新视角", "包容乐观，善于激励鼓舞他人"],
    pitfalls: ["容易三分钟热度，缺乏长期坚持的毅力", "过于感性，容易被情绪冲昏头脑", "讨厌繁琐、重复的标准流程(SOP)", "难以拒绝他人，容易让自己不堪重负"],
    careers: ["创意总监", "活动营销策划师", "节目主持人", "独立自媒体博主", "体验设计师"],
    relationship: "你追求充满激情、新鲜感与探索乐趣的恋爱。你希望伴侣是你的灵感伙伴，能陪你体验世界的多姿多彩，共同成长。",
    famous: ["罗宾·威廉姆斯 (Robin Williams)", "马克·吐温 (Mark Twain)", "华特·迪士尼"]
  },
  ISTJ: {
    title: "ISTJ - 检查员 / 严谨实干家",
    summary: "注重事实、传统与纪律的稳健实干家。你脚踏实地、恪尽职守，是团队与家庭中最值得信赖的坚固基石。",
    traits: "ISTJ 是秩序与规则的守护者。你做事极其严谨有条理，讲求证据与事实依据。只要是你接下的承诺，无论多艰难，你都会一丝不苟地按时高质量交付。",
    strengths: ["极其严谨可靠，恪守承诺与标准", "注重细节与事实数据，办事有条不紊", "客观公正，具有高度的职业道德", "执行力强，善于建立稳定规范"],
    pitfalls: ["过于固执保守，抗拒未经验证的变革", "显得缺乏灵活性与人情味", "习惯埋头干，不善于表达情绪", "容易对不合规的事情产生过度焦虑"],
    careers: ["高级会计师/审计师", "合规风控官", "数据运营总监", "项目质量监理", "司法/行政专家"],
    relationship: "在亲密关系中，你用实际行动而非甜言蜜语表达爱意。你忠诚、专一、靠谱，能给伴侣提供极其充沛的物质与生活安全感。",
    famous: ["华伦·巴菲特 (Warren Buffett)", "乔治·华盛顿", "亨利·福特 (Henry Ford)"]
  },
  ISFJ: {
    title: "ISFJ - 守卫者 / 温暖护卫",
    summary: "非常专注、温和且富有责任感的保护者。你总是默默守护你关爱的人，用细致入微的关怀维持家庭与团队的和谐。",
    traits: "ISFJ 是温暖的幕后守护者。你心思极其细腻，善于记住身边的每一个人的小偏好与情绪起伏。你默默奉献，脚踏实地，在不张扬中维系着团体的运转。",
    strengths: ["细致入微的照顾与深层同理心", "忠诚可靠，责任感与奉献精神极强", "实际动手与后勤保障能力卓越", "做事脚踏实地，极富耐心"],
    pitfalls: ["习惯过度压抑自己的需求，委曲求全", "极度害怕冲突，习惯默默承受伤害", "抗拒剧烈的环境改变与不确定性", "容易被不感恩的人利用"],
    careers: ["高级护理/医疗专家", "行政运营总监", "客户成功经理", "基础教育教师", "人力资源专员"],
    relationship: "你是最贴心、最可靠的伴侣。你会用心记住伴侣的每一个喜好与习惯，默默为家庭付出，追求长久、稳定的温馨幸福。",
    famous: ["特蕾莎修女 (Mother Teresa)", "英女皇伊丽莎白二世", "凯特·米德尔顿"]
  },
  ESTJ: {
    title: "ESTJ - 总管 / 高效执行官",
    summary: "出色的管理者，在管理事物与组织秩序方面无与伦比。你讲求效率、清晰的规则、事实标准与高效的执行。",
    traits: "ESTJ 是高效组织的指挥官。你善于梳理纷繁复杂的业务流程，制定标准化的规范(SOP)。你崇尚务实、结果导向，拥有出色的领导调度能力。",
    strengths: ["卓越的组织、规划与流程梳理能力", "意志坚定，直截了当，守信重诺", "执行力极强，能确保项目按时达标", "讲求事实与客观逻辑"],
    pitfalls: ["容易显得过于强硬、专断与固执", "难以理解或包容敏感脆弱的情绪", "习惯用单一标准衡量所有人", "过于看重规则，偶尔缺乏灵活性"],
    careers: ["企业运营总监(COO)", "资深项目管理专家(PMP)", "工厂/生产管理者", "合规监管官"],
    relationship: "你对待感情极其认真且讲求责任。你希望建立有秩序、稳定的家庭，愿意担当家庭的保护者与支柱，但需要学习多倾听伴侣的情感需求。",
    famous: ["亨利·福特 (Henry Ford)", "约翰·D·洛克菲勒", "胡佛"]
  },
  ESFJ: {
    title: "ESFJ - 执政官 / 热情社交家",
    summary: "极具同情心、受欢迎且乐于助人的社交枢纽。你关注社区与和谐，总是积极参与并细心照顾周围的每一个人。",
    traits: "ESFJ 是人群中的暖流。你极善于社交互动与人际维系，能迅速调动聚会与团队的气氛。你重视道德与传统，乐于为朋友和家庭排忧解难。",
    strengths: ["出色的社交人际交往与破冰能力", "责任感强，极善于营造温馨和谐氛围", "务实且善于处理日常琐事与组织活动", "忠诚度高，重视家庭与朋友关系"],
    pitfalls: ["过于在意他人的社会评价与认可", "容易为了维持和谐而回避核心矛盾", "难以接受批评，容易感到受伤害", "偶尔操心过多，让人觉得有些爱包办"],
    careers: ["HRBP (人力资源合作伙伴)", "大客户关系总监", "社区运营总监", "高级公关/活动主持人"],
    relationship: "你是充满热情与关怀的陪伴者。你乐于照顾伴侣的生活起居，喜欢一起参加社交聚会，希望得到伴侣明确的认可与爱意回应。",
    famous: ["泰勒·斯威夫特 (Taylor Swift)", "比尔·克林顿", "詹妮弗·加纳"]
  },
  ISTP: {
    title: "ISTP - 鉴赏家 / 冷静工匠",
    summary: "大胆而实际的物理实验家，擅长使用各种工具与技术。你冷静沉着、喜欢用实践行动去拆解和解决复杂的眼前难题。",
    traits: "ISTP 是实践领域的解题大师。你拥有冷静的头脑与出色的动手天赋，善于理清机械、代码或系统的底层运作模式。你在危机时刻极度镇定，能瞬间找出突破口。",
    strengths: ["理性高效的解题者，实践能力极其突出", "危机应变能力强，在紧急关头冷静沉着", "思维灵活，不被无用规则束缚", "动手操作与技术拆解天赋异禀"],
    pitfalls: ["难以长时间专注于纯理论或抽象概念", "情感表达冷淡，容易显得难以接近", "讨厌长期约束与繁琐的承诺", "容易追求刺激而忽略潜在风险"],
    careers: ["高级系统工程师", "赛车手/机械专家", "安全测试工程师", "法医/技术专家", "硬件研发员"],
    relationship: "你追求自由、随性、低内耗的恋爱。你喜欢用行动代替说教，希望伴侣尊重你的个人兴趣与空间，共同体验当下的乐趣。",
    famous: ["克林特·伊斯特物 (Clint Eastwood)", "迈克尔·乔丹 (Michael Jordan)", "布鲁斯·威利斯"]
  },
  ISFP: {
    title: "ISFP - 探险家 / 灵动艺术家",
    summary: "灵活迷人的艺术家，随时准备探索和体验新事物。你对美感有敏锐直觉，温和包容，享受当下的真实生活。",
    traits: "ISFP 是生活美的发现者。你性情温和，对人包容无偏见。你喜欢用视觉、音乐或手工艺品表达内心情感，讨厌僵化的规则，崇尚随性自然的体验。",
    strengths: ["极高的审美敏锐度与生活品味", "热情而温和，极富同理心与包容度", "思想开放灵动，不喜欢评判他人", "善于在细节中创造美与惊奇"],
    pitfalls: ["极度抗拒长远规划与沉重压迫感", "容易自我怀疑，害怕正面冲突", "做事缺乏长期计划与纪律性", "过度压抑内心情感"],
    careers: ["服装/UI/视觉设计师", "摄影师/独立音乐人", "室内设计师", "造型师/体验师"],
    relationship: "你是温和、浪漫且体贴的爱人。你喜欢通过小惊喜与美感表达爱意，希望与伴侣建立没有压力的舒适关系，一起享受美好的当下。",
    famous: ["迈克尔·杰克逊 (Michael Jackson)", "弗里达·卡罗 (Frida Kahlo)", "蕾哈娜 (Rihanna)"]
  },
  ESTP: {
    title: "ESTP - 企业家 / 敏捷挑战者",
    summary: "聪明、活力充沛且极具洞察力的冒险家。你喜欢生活在边缘与现场，敢于承担风险并快速见效。",
    traits: "ESTP 是实战前线的破局者。你拥有极其敏锐的现场观察力，能快速抓住商机与他人弱点。你充满活力，敢于在不确定性中迅速下注，享受赢的感觉。",
    strengths: ["极其敏锐的现场观察力与说服力", "危机应变敏捷，敢于承担风险突破瓶颈", "行动敏捷直截了当，不拖泥带水", "善于调动眼前的一切资源"],
    pitfalls: ["容易缺乏耐心，厌恶理论推演", "偶尔表现得过于冲动或冒失", "容易忽视行为对长远未来的影响", "对情感深层需求缺乏耐心"],
    careers: ["大客户销售总监", "风险投资交易员", "危机公关专家", "现场项目经理", "特技/极限运动者"],
    relationship: "你追求充满激情、刺激与新鲜感的恋爱。你喜欢带伴侣体验各种新鲜事物，用幽默与行动征服对方，讨厌沉闷与猜忌。",
    famous: ["唐纳德·特朗普 (Donald Trump)", "欧内斯特·海明威 (Ernest Hemingway)"]
  },
  ESFP: {
    title: "ESFP - 表演者 / 现场明星",
    summary: "自发的、精力充沛和热情洋溢的人。生活在你周围永不枯燥，你乐于成为焦点并给他人带来欢笑与能量。",
    traits: "ESFP 是现场氛围的灵魂。你开朗幽默，拥有极强的表演与沟通天赋。你活在当下，善于将沉闷的环境变得妙趣横生，给周围人注入无限正能量。",
    strengths: ["极具舞台与社交感染力，幽默风趣", "出色的社交沟通与氛围带动技巧", "观察敏锐，能迅速察觉他人情绪变化", "乐观开朗，生活体验感极强"],
    pitfalls: ["难以专注于长远的计划与复杂逻辑", "容易受当下情绪驱动冲动消费或决策", "害怕寂寞与被忽视", "回避严肃或沉重的深刻话题"],
    careers: ["演艺公关经理", "体验/活动设计师", "旅游时尚博主/主播", "时尚采购总监"],
    relationship: "你是关系中的开心果与热烈伴侣。你愿意把最好的快乐分享给对方，希望恋爱充满惊喜与笑声，一起享受热烈的生活。",
    famous: ["埃尔维斯·普雷斯利 (猫王)", "阿黛尔 (Adele)", "玛丽莲·梦露"]
  }
};

var HOLLAND_DESCRIPTIONS = {
  R: { code: "R 实用型 (Realistic)", trait: "动手能力强、注重实践与机械操作，喜欢具体明确的技术性工作。", careers: ["机械工程师", "硬件研发", "赛车与设备专家", "户外勘探"] },
  I: { code: "I 研究型 (Investigative)", trait: "理性严谨、好奇心强、善于抽象思考与科学推导解题。", careers: ["数据科学家", "理论物理学者", "算法研发", "医学研究员"] },
  A: { code: "A 艺术型 (Artistic)", trait: "富于想象力与审美敏锐度，喜欢自由创作与突破常规。", careers: ["视觉/UI设计师", "独立撰稿人", "创意总监", "音乐人"] },
  S: { code: "S 社会型 (Social)", trait: "热情友善、有同理心，乐于教育培训、关怀与辅导他人。", careers: ["心理咨询师", "高级HR/培训师", "社区运营官", "教育家"] },
  E: { code: "E 企业型 (Enterprise)", trait: "富有野心、领导力与说服力，善于商务谈判与组织资源。", careers: ["项目创始人", "商务总监", "风投分析师", "市场营销总监"] },
  C: { code: "C 常规型 (Conventional)", trait: "细致严谨、守时守信，擅长流程梳理、数据核算与合规管理。", careers: ["高级审计师", "风控官", "数据运营专家", "行政管理总监"] }
};

// ==========================================================================
// 2. Comprehensive 8 Tests Full Database Definition
// ==========================================================================

var TEST_DATABASE = {
  gad7: {
    id: "gad7",
    title: "GAD-7 焦虑指数与精神内耗测评",
    subtitle: "评估近两周的情绪负荷与精神疲劳等级",
    questions: [
      {
        id: 1,
        text: "在过去两周内，你感到紧张、焦虑或急躁的频率是？",
        options: [
          { label: "A. 完全没有", value: 0 },
          { label: "B. 有几天", value: 1 },
          { label: "C. 超过一半的日子", value: 2 },
          { label: "D. 几乎每天", value: 3 }
        ]
      },
      {
        id: 2,
        text: "在过去两周内，你无法停止或控制担忧的频率是？",
        options: [
          { label: "A. 完全没有", value: 0 },
          { label: "B. 有几天", value: 1 },
          { label: "C. 超过一半的日子", value: 2 },
          { label: "D. 几乎每天", value: 3 }
        ]
      },
      {
        id: 3,
        text: "在过去两周内，你对各种各样的事情担忧过多的频率是？",
        options: [
          { label: "A. 完全没有", value: 0 },
          { label: "B. 有几天", value: 1 },
          { label: "C. 超过一半的日子", value: 2 },
          { label: "D. 几乎每天", value: 3 }
        ]
      },
      {
        id: 4,
        text: "在过去两周内，你感觉很难放松下来的频率是？",
        options: [
          { label: "A. 完全没有", value: 0 },
          { label: "B. 有几天", value: 1 },
          { label: "C. 超过一半的日子", value: 2 },
          { label: "D. 几乎每天", value: 3 }
        ]
      },
      {
        id: 5,
        text: "在过去两周内，由于不安而坐立不安、难以静坐的频率是？",
        options: [
          { label: "A. 完全没有", value: 0 },
          { label: "B. 有几天", value: 1 },
          { label: "C. 超过一半的日子", value: 2 },
          { label: "D. 几乎每天", value: 3 }
        ]
      },
      {
        id: 6,
        text: "在过去两周内，你变得容易烦躁或急躁的频率是？",
        options: [
          { label: "A. 完全没有", value: 0 },
          { label: "B. 有几天", value: 1 },
          { label: "C. 超过一半的日子", value: 2 },
          { label: "D. 几乎每天", value: 3 }
        ]
      },
      {
        id: 7,
        text: "在过去两周内，你感觉似乎将有可怕的事情发生而害怕的频率是？",
        options: [
          { label: "A. 完全没有", value: 0 },
          { label: "B. 有几天", value: 1 },
          { label: "C. 超过一半的日子", value: 2 },
          { label: "D. 几乎每天", value: 3 }
        ]
      }
    ]
  },

  bigfive: {
    id: "bigfive",
    title: "大五人格专业测评 (OCEAN)",
    subtitle: "剖析决定行为、社交与决策的五大性格杠杆",
    questions: [
      {
        id: 1,
        text: "面对全新的概念、未知的领域或艺术作品时，你通常？",
        options: [
          { label: "A. 充满强烈的探索欲望，喜欢脑洞大开地琢磨背后逻辑", value: { O: 2 } },
          { label: "B. 保持理性好奇，但更看重该领域是否有实际应用价值", value: { O: 1 } },
          { label: "C. 更习惯传统熟悉的事物，对过于抽象的概念不太感兴趣", value: { O: 0 } }
        ]
      },
      {
        id: 2,
        text: "在制定工作或学习计划时，你的日常习惯更接近？",
        options: [
          { label: "A. 极其自律严谨，会列出明确的清单(SOP)并按时交付", value: { C: 2 } },
          { label: "B. 有大致方向，但喜欢保留随性调整的弹性空间", value: { C: 1 } },
          { label: "C. 随性而为，容易拖延或凭当下的兴致做事", value: { C: 0 } }
        ]
      },
      {
        id: 3,
        text: "在参加多人聚会或社交场合时，你的精力充能方式是？",
        options: [
          { label: "A. 极其兴奋开朗，在互动中能迅速拉满精神能量", value: { E: 2 } },
          { label: "B. 视氛围而定，能正常破冰社交但也需要独处充电", value: { E: 1 } },
          { label: "C. 感到精力消耗很快，更喜欢安静地独处或1对1交流", value: { E: 0 } }
        ]
      },
      {
        id: 4,
        text: "当与他人发生意见分歧或利益冲突时，你倾向于？",
        options: [
          { label: "A. 极具同理心与体谅，优先妥协或寻找双赢局面", value: { A: 2 } },
          { label: "B. 客观对事不对人，合理维护个人边界", value: { A: 1 } },
          { label: "C. 坚持原则与自我立场，直截了当进行据理力争", value: { A: 0 } }
        ]
      },
      {
        id: 5,
        text: "遇到突发意外事件、被批评或压力陡增时，你的情绪反应通常是？",
        options: [
          { label: "A. 非常敏感焦虑，脑海里容易反复琢磨并内耗", value: { N: 2 } },
          { label: "B. 偶尔会有轻微波澜，但能很快通过自我暗示恢复平静", value: { N: 1 } },
          { label: "C. 极度沉着冷静，皮质醇稳定，不会被情绪牵着走", value: { N: 0 } }
        ]
      },
      {
        id: 6,
        text: "你是否经常沉溺于白日梦、奇思妙想或探索事物背后的原理？",
        options: [
          { label: "A. 经常如此，头脑里充满了跨界的想象与灵感", value: { O: 2 } },
          { label: "B. 偶尔在闲暇时会产生一些新奇念头", value: { O: 1 } },
          { label: "C. 很少，更关注当下的现实生活与眼前的务实工作", value: { O: 0 } }
        ]
      },
      {
        id: 7,
        text: "你的房间、桌面或个人工作空间的整理习惯是？",
        options: [
          { label: "A. 井井有条，所有物品都有固定摆放的位置与分类", value: { C: 2 } },
          { label: "B. 大体整洁，但在高强度忙碌时会显得有些凌乱", value: { C: 1 } },
          { label: "C. 相当随性，认为“混乱中自由独特的秩序”更舒适", value: { C: 0 } }
        ]
      },
      {
        id: 8,
        text: "在团队决策中，你更看重？",
        options: [
          { label: "A. 团队的和谐氛围与每个人的情绪体验", value: { A: 2 } },
          { label: "B. 兼顾客观事实与人情关怀", value: { A: 1 } },
          { label: "C. 效率与事实结果，即使可能刺伤少数人的情绪", value: { A: 0 } }
        ]
      },
      {
        id: 9,
        text: "你是否容易感到孤独、内耗或对微小的冷淡过分敏感？",
        options: [
          { label: "A. 是的，心思极其细腻敏感，容易受外界情绪牵动", value: { N: 2 } },
          { label: "B. 偶尔会有，但不会持续太久", value: { N: 1 } },
          { label: "C. 几乎不会，心态极其阳光稳定，不搞精神内耗", value: { N: 0 } }
        ]
      },
      {
        id: 10,
        text: "面对未经验证的创新方案或新生活体验，你的态度通常是？",
        options: [
          { label: "A. 跃跃欲试，非常享受尝试未知事物带来的刺激与新鲜感", value: { O: 2 } },
          { label: "B. 观望评估风险，确认无大碍后再做尝试", value: { O: 1 } },
          { label: "C. 谨慎抗拒，更倾向于使用久经考验的传统方案", value: { O: 0 } }
        ]
      }
    ]
  },

  dating_signal: {
    id: "dating_signal",
    title: "他到底喜不喜欢你？关系信号深度拆解",
    subtitle: "8道题拆解他没说出口的关系信号",
    questions: [
      {
        id: 1,
        text: "你们平时聊天时，他主动发起话题与回复的节奏通常是？",
        options: [
          { label: "A. 经常主动发起话题，分享他的生活细节或问你在做什么，回复速度极快", value: { initiation: 3, responsiveness: 3 } },
          { label: "B. 你发消息他基本都会认真回，但很少主动发起新话题", value: { responsiveness: 2 } },
          { label: "C. 回复时快时慢，有时秒回，有时消失几个小时没有任何解释", value: { consistency: 0 } },
          { label: "D. 敷衍居多，多为单字答复或隔天回复", value: { intent: 0 } }
        ]
      },
      {
        id: 2,
        text: "当你提到自己某个小偏好（如不吃香菜、生病、喜爱的电影）时，他会？",
        options: [
          { label: "A. 默默记住并在下次约会或聊天中主动照顾到，给你带来惊喜", value: { memory: 3, care: 3 } },
          { label: "B. 当时表示关心，但过后可能就忘了", value: { care: 1 } },
          { label: "C. 只在顺路或方便时顺便提及", value: { effort: 1 } },
          { label: "D. 基本没印象或避开不谈", value: { care: 0 } }
        ]
      },
      {
        id: 3,
        text: "你们约会安排的频率与主动程度？",
        options: [
          { label: "A. 他会提前1-3天主动规划具体地点与行程，重视你们的见面时间", value: { effort: 3, intent: 3 } },
          { label: "B. 绝大部分是你提出约会，他基本配合参加", value: { reciprocity: 1 } },
          { label: "C. 经常临时（如深夜或当天半小时前）约你见面", value: { proximity: 1 } },
          { label: "D. 经常以忙碌为由推迟或取消见面，且很少改期补偿", value: { commitment: 0 } }
        ]
      },
      {
        id: 4,
        text: "在面对朋友、同事或公众场合时，他对你们关系的呈现态度是？",
        options: [
          { label: "A. 主动将你介绍给他的核心朋友圈，并在社交媒体或公开场合大方互动", value: { integration: 3, exclusivity: 3 } },
          { label: "B. 私下互动甜蜜，但在人前或社交平台刻意保持安全距离", value: { exclusivity: 1 } },
          { label: "C. 避谈你们的关系定义，对外宣称“只是好朋友”", value: { commitment: 0 } },
          { label: "D. 极力掩饰关系，甚至要求你不能告诉别人", value: { exclusivity: 0 } }
        ]
      },
      {
        id: 5,
        text: "面对未来（如假期安排、换工作、长远生活），他的态度是？",
        options: [
          { label: "A. 规划中明确包含你，会用“我们”来讨论长远计划", value: { commitment: 3, trajectory: 3 } },
          { label: "B. 偶尔提及短期计划（如过几天去哪玩），但避谈长远未来", value: { commitment: 1 } },
          { label: "C. 认为“走一步看一步，谈未来太累”，回避任何承诺", value: { trajectory: 0 } },
          { label: "D. 他的规划里完全只有他自己，甚至不考虑对你的影响", value: { commitment: 0 } }
        ]
      },
      {
        id: 6,
        type: "multi",
        text: "【多选题】在过去一个月中，他是否有过以下【主动投入行为】？（可多选）",
        options: [
          { label: "A. 在你情绪低落或遇到困难时，第一时间赶来陪伴或帮你想办法解决", value: { care: 2 } },
          { label: "B. 送过你精心准备或符合你喜好的礼物/小惊喜", value: { effort: 2 } },
          { label: "C. 为你做出了某些习惯或行程上的妥协调整", value: { effort: 2 } },
          { label: "D. 允许你接触他的手机、家庭或核心私人空间", value: { exclusivity: 2 } },
          { label: "E. 以上均没有发生过", value: { none: true } }
        ]
      },
      {
        id: 7,
        text: "当你主动退缩或回复变慢时，他的第一反应通常是？",
        options: [
          { label: "A. 察觉到你的异常，主动问你是不是心情不好或自己做错了什么", value: { attention: 3, responsiveness: 3 } },
          { label: "B. 也跟着放慢回复，开始玩拉扯游戏", value: { consistency: 1 } },
          { label: "C. 完全没察觉到你的退缩，依然按他的节奏回复", value: { attention: 0 } },
          { label: "D. 顺水推舟，直接冷处理消失", value: { intent: 0 } }
        ]
      },
      {
        id: 8,
        text: "你内心对这段关系的真实直觉感受更接近？",
        options: [
          { label: "A. 踏实且被珍视，不用猜忌，有明确的安全感", value: { attraction: 3, commitment: 3 } },
          { label: "B. 甜蜜但偶尔焦虑，总觉得他还没完全对我敞开心扉", value: { attraction: 2, commitment: 1 } },
          { label: "C. 像坐过山车，忽冷忽热，绝大部分时间在内耗猜测", value: { consistency: 0 } },
          { label: "D. 卑微疲惫，感觉自己随时会被替代", value: { attraction: 0 } }
        ]
      }
    ]
  },

  attachment: {
    id: "attachment",
    title: "恋爱依恋类型测评：你是安全型还是回避型？",
    subtitle: "剖析你的亲密关系底色与心理避风港",
    questions: [
      {
        id: 1,
        text: "当伴侣没有秒回消息或显得有些冷淡时，你的第一反应是？",
        options: [
          { label: "A. 理解对方可能有事要忙，安心做自己的事情", value: "Secure" },
          { label: "B. 开始焦虑胡思乱想，怀疑他是不是不爱我了", value: "Anxious" },
          { label: "C. 觉得烦躁，我也立刻冷淡下来，甚至想直接关掉手机", value: "Avoidant" },
          { label: "D. 内心恐慌想要抓紧对方，但又强迫自己冷漠疏远", value: "Fearful" }
        ]
      },
      {
        id: 2,
        text: "在关系逐渐深入、需要展示真实脆弱与依赖对方时，你感觉？",
        options: [
          { label: "A. 非常自然舒适，相信伴侣会接纳我的脆弱", value: "Secure" },
          { label: "B. 极度渴望依赖对方，甚至希望24小时黏在一起", value: "Anxious" },
          { label: "C. 感到别扭与恐慌，认为‘只有靠自己才是最安全的’", value: "Avoidant" },
          { label: "D. 渴望被接纳，但又极其害怕展示脆弱后会被伤害抛弃", value: "Fearful" }
        ]
      },
      {
        id: 3,
        text: "面对关系中的争吵与正面冲突，你习惯的解决方式是？",
        options: [
          { label: "A. 坦诚沟通，说出真实想法与需求，共同解决矛盾", value: "Secure" },
          { label: "B. 情绪容易激动发脾气，试图通过争吵吸引对方关注", value: "Anxious" },
          { label: "C. 开启防风林防线，关门、冷处理或直接逃跑回避", value: "Avoidant" },
          { label: "D. 忽冷忽热，一边放狠话推开对方，一边内心期盼对方挽留", value: "Fearful" }
        ]
      },
      {
        id: 4,
        text: "你内心深处对“被抛弃 / 被伤害”的恐惧程度是？",
        options: [
          { label: "A. 心态平稳自洽，明白即使分手自己也有独立生活能力", value: "Secure" },
          { label: "B. 非常高，经常担心伴侣随时会离开我", value: "Anxious" },
          { label: "C. 不担心，因为我从不给任何人伤害我的深度机会", value: "Avoidant" },
          { label: "D. 极度恐惧，因此总是先手推开对方来保护自己", value: "Fearful" }
        ]
      },
      {
        id: 5,
        text: "你对伴侣独立个人空间的态度是？",
        options: [
          { label: "A. 互相尊重，既有亲密陪伴也有各自独立的生活圈", value: "Secure" },
          { label: "B. 很难接受他有太多没有我的社交，容易患得患失", value: "Anxious" },
          { label: "C. 极度看重绝对的个人自由，厌恶被管束与查岗", value: "Avoidant" },
          { label: "D. 在‘渴望无限黏人’与‘渴望彻底独处’之间剧烈摇摆", value: "Fearful" }
        ]
      }
    ]
  },

  battery: {
    id: "battery",
    title: "社畜精神续航与发疯指数测评",
    subtitle: "测测你现在的心理‘剩余电量’与抗压极限",
    questions: [
      {
        id: 1,
        text: "早上闹钟响起的那一刻，你的心理状态更接近？",
        options: [
          { label: "A. 精力充沛，对今天的工作/生活抱有期待", value: 95 },
          { label: "B. 叹一口气，按掉闹钟挣扎着起床", value: 65 },
          { label: "C. 感到深深的厌倦，想直接请假假装消失", value: 35 },
          { label: "D. 灵魂出窍，甚至想大叫一声“毁灭吧”", value: 10 }
        ]
      },
      {
        id: 2,
        text: "下班/放学后，如果朋友叫你参加多人社交聚会，你的第一反应是？",
        options: [
          { label: "A. 欣然前往，非常享受热闹破冰充能", value: 90 },
          { label: "B. 视关系而定，如果是熟人聚会可以去去", value: 70 },
          { label: "C. 社交能量已抽干，委婉找借口推掉直奔回家", value: 40 },
          { label: "D. 连看消息都觉得累，开启静音模式不理任何人", value: 15 }
        ]
      },

      {
        id: 3,
        text: "遇到工作/生活中的突发变故（如临时加塞繁重任务），你的情绪是？",
        options: [
          { label: "A. 沉着冷静，理清优先级并高效推进", value: 90 },
          { label: "B. 内心有点烦躁，但能按部就班默默做完", value: 60 },
          { label: "C. 情绪瞬间低落，极度沮丧并开始自我怀疑", value: 30 },
          { label: "D. 瞬间被点燃爆棚，处于临界点发疯边缘", value: 10 }
        ]
      },
      {
        id: 4,
        text: "过去一周里，你的睡眠与报复性熬夜情况是？",
        options: [
          { label: "A. 作息极其规律，睡得香甜，一觉到天亮", value: 95 },
          { label: "B. 入睡稍慢，但整体睡眠质量还算尚可", value: 70 },
          { label: "C. 报复性刷手机熬夜到凌晨1-2点才舍得睡", value: 40 },
          { label: "D. 长期失眠多梦，半夜惊醒，白天昏昏沉沉", value: 20 }
        ]
      },
      {
        id: 5,
        text: "你现在的心理“发疯”指数更接近？",
        options: [
          { label: "A. 发疯指数 0%：温和自洽，情绪极为稳定", value: 95 },
          { label: "B. 发疯指数 30%：偶尔碎碎念发牢骚，整体可控", value: 75 },
          { label: "C. 发疯指数 70%：表情麻木，内心万马奔腾发疯抗议", value: 35 },
          { label: "D. 发疯指数 99%：只差一颗火星就能当场炸裂", value: 10 }
        ]
      }
    ]
  },

  eq: {
    id: "eq",
    title: "高情商测评：测测你的情绪洞察与防PUA能力",
    subtitle: "评估同理心深度与社交边界感",
    questions: [
      {
        id: 1,
        text: "当同事/朋友对你进行暗含讽刺或道德绑架的评价时，你会？",
        options: [
          { label: "A. 温和坚决地反客为主破局，不被对方带偏节奏", value: 95 },
          { label: "B. 表面礼貌回应，内心清醒看透对方的把戏", value: 80 },
          { label: "C. 感到尴尬不适，选择默默忍受不正面反驳", value: 50 },
          { label: "D. 陷入自我怀疑，真的以为是自己不够好", value: 20 }
        ]
      },
      {
        id: 2,
        text: "在社交场合察觉到气氛冷场或有人尴尬时，你通常？",
        options: [
          { label: "A. 巧妙顺畅地接话解围，照顾到每个人的感受", value: 90 },
          { label: "B. 会试着帮忙转移话题，缓解尴尬", value: 75 },
          { label: "C. 虽然察觉到了，但不知道怎么说，选择保持沉默", value: 55 },
          { label: "D. 完全没察觉到场面氛围的变化", value: 35 }
        ]
      },
      {
        id: 3,
        text: "面对伴侣或朋友的情绪宣泄（抱怨倾诉），你的第一反应是？",
        options: [
          { label: "A. 先充分倾听同理对方的情绪，再适时提供可行建议", value: 95 },
          { label: "B. 陪伴倾听，充当合格的情绪容器", value: 80 },
          { label: "C. 立刻指责对方的错误，强行开启讲大道理模式", value: 45 },
          { label: "D. 觉得烦躁，不愿承担他人的负能量", value: 25 }
        ]
      },
      {
        id: 4,
        text: "遇到别人提出你不情愿的不合理请求时，你会？",
        options: [
          { label: "A. 明确、体面地果断拒绝，不给暧昧拉扯空间", value: 90 },
          { label: "B. 找一个合理的客观理由婉言拒绝", value: 75 },
          { label: "C. 犹豫不决，最后硬着头皮答应下来并心里委屈", value: 40 },
          { label: "D. 不敢拒绝，习惯性讨好顺从他人", value: 20 }
        ]
      },
      {
        id: 5,
        text: "你能否精准识别自己当下的情绪状态（如“我这不是生气，而是失望”）？",
        options: [
          { label: "A. 完全可以，能迅速厘清内心情感并理性调控", value: 95 },
          { label: "B. 绝大部分时候能做到精准自我察觉", value: 80 },
          { label: "C. 偶尔糊涂，容易被无名火或焦虑牵着走", value: 50 },
          { label: "D. 很难，经常感到莫名压抑或突然失控爆怒", value: 25 }
        ]
      },
      {
        id: 6,
        text: "面对他人的精神操控(PUA)倾向（如“我这都是为了你好”），你通常？",
        options: [
          { label: "A. 警觉性极高，瞬间建立心理界限不受道德绑架", value: 95 },
          { label: "B. 能分辨出对方的用心，保持距离", value: 75 },
          { label: "C. 偶尔会感到困惑与内疚", value: 45 },
          { label: "D. 极易被说服，甚至按照对方的控制意图改变自己", value: 20 }
        ]
      }
    ]
  },

  mbti: {
    id: "mbti",
    title: "MBTI 16型人格专业测评",
    subtitle: "探索你的核心认知模式与职业优势",
    questions: [
      {
        id: 1,
        text: "经历了高压累人的一周后，你更倾向于如何恢复能量？",
        options: [
          { label: "A. 参加热闹的社交聚会，与朋友聊天狂欢中充电 (E)", value: "E" },
          { label: "B. 独自静处，看书、打游戏或泡澡享受私人空间 (I)", value: "I" }
        ]
      },
      {
        id: 2,
        text: "在接收新信息或理解问题时，你更关注？",
        options: [
          { label: "A. 眼前的具体事实、细节与实践经验 (S)", value: "S" },
          { label: "B. 事物背后的深层规律、可能性与宏观愿景 (N)", value: "N" }
        ]
      },
      {
        id: 3,
        text: "做出关键决策时，你最依赖的判断标准是？",
        options: [
          { label: "A. 客观的逻辑推理、事实依据与效率 (T)", value: "T" },
          { label: "B. 个人核心价值观、他人的感受与团队和谐 (F)", value: "F" }
        ]
      },
      {
        id: 4,
        text: "处理日常工作与生活时，你更喜欢的节奏是？",
        options: [
          { label: "A. 制定明确的计划清单，有条不紊按时完成 (J)", value: "J" },
          { label: "B. 保持开放随性，根据当下的灵感与最新变化调整 (P)", value: "P" }
        ]
      },
      {
        id: 5,
        text: "在社交聚会中，你通常是？",
        options: [
          { label: "A. 主动破冰破话题、认识新朋友的氛围带动者 (E)", value: "E" },
          { label: "B. 倾向于与熟悉的少数朋友深聊，等待他人主动 (I)", value: "I" }
        ]
      },
      {
        id: 6,
        text: "你更欣赏哪种类型的对话或文章？",
        options: [
          { label: "A. 务实清晰、有明确步骤与落地指引的内容 (S)", value: "S" },
          { label: "B. 富于想象力、哲学思辨与创新隐喻的内容 (N)", value: "N" }
        ]
      },
      {
        id: 7,
        text: "当朋友向你倾诉困境时，你的第一反应是？",
        options: [
          { label: "A. 理性分析原因，帮他制定解题方案 (T)", value: "T" },
          { label: "B. 先同理他的情绪，给予温暖的拥抱与情感支持 (F)", value: "F" }
        ]
      },
      {
        id: 8,
        text: "面对周末或假期的行程，你的习惯是？",
        options: [
          { label: "A. 提前预订好酒店机票，做详细的攻略路线 (J)", value: "J" },
          { label: "B. 说走就走，到了目的地再随心探索 (P)", value: "P" }
        ]
      },
      {
        id: 9,
        text: "在团队头脑风暴中，你更倾向于？",
        options: [
          { label: "A. 脱口而出各种灵感脑洞，边说边理清思路 (E)", value: "E" },
          { label: "B. 在脑海里彻底深思熟虑后，再发表成熟见解 (I)", value: "I" }
        ]
      },
      {
        id: 10,
        text: "学习一项新技术或新知识时，你喜欢？",
        options: [
          { label: "A. 从具体的案例、样本和实际操作入手 (S)", value: "S" },
          { label: "B. 先厘清底层框架概念与整体发展全貌 (N)", value: "N" }
        ]
      },
      {
        id: 11,
        text: "被他人评价时，你更希望听到哪种称赞？",
        options: [
          { label: "A. “你非常理性、睿智且办事讲求效率” (T)", value: "T" },
          { label: "B. “你非常善良、体贴且有深厚同理心” (F)", value: "F" }
        ]
      },
      {
        id: 12,
        text: "面对生活中的突发变化与不确定性，你的心态是？",
        options: [
          { label: "A. 稍显焦虑，希望能尽快重回明确有掌控感的轨道 (J)", value: "J" },
          { label: "B. 感到兴奋，非常享受变化带来的新体验 (P)", value: "P" }
        ]
      }
    ]
  },

  holland: {
    id: "holland",
    title: "霍兰德职业兴趣测评 (RIASEC)",
    subtitle: "定位你的职业基因与理想工作赛道",
    questions: [
      {
        id: 1,
        text: "在以下日常动手与实践任务中，你最感兴趣的是？",
        options: [
          { label: "A. 组装机械、维修设备或户外体力拆解", value: "R" },
          { label: "B. 编写代码、推演算法或研究数据现象", value: "I" },
          { label: "C. 绘画设计、撰写诗歌或音乐创作", value: "A" },
          { label: "D. 组织公益活动、辅导他人或心理咨询", value: "S" }
        ]
      },
      {
        id: 2,
        text: "在面对未解难题或复杂现象时，你最享受？",
        options: [
          { label: "A. 用工具直接动手试验出物理解决办法 (R)", value: "R" },
          { label: "B. 深入查阅文献与底层原理进行逻辑解构 (I)", value: "I" },
          { label: "C. 跳出常规框框，提出极具艺术感的脑洞方案 (A)", value: "A" },
          { label: "D. 发挥号召力，带领团队攻坚克难 (E)", value: "E" }
        ]
      },
      {
        id: 3,
        text: "在艺术、设计或表达方面，你更倾向于？",
        options: [
          { label: "A. 追求极致的视觉美感、个性与原创灵魂 (A)", value: "A" },
          { label: "B. 将表达作为感染鼓舞他人的教育工具 (S)", value: "S" },
          { label: "C. 将设计作为包装品牌与商业变现的杠杆 (E)", value: "E" },
          { label: "D. 建立规范、标准化的产品审美与交付流程 (C)", value: "C" }
        ]
      },
      {
        id: 4,
        text: "在人际互动与帮助他人方面，你最希望？",
        options: [
          { label: "A. 倾听陪伴，辅导他人走出心灵困境 (S)", value: "S" },
          { label: "B. 担任领袖，分配任务并带领团队赢得胜利 (E)", value: "E" },
          { label: "C. 提供严谨精确的数据核算与后勤保障 (C)", value: "C" },
          { label: "D. 研发具体的实用技术帮他人提升效率 (R)", value: "R" }
        ]
      },
      {
        id: 5,
        text: "在商业、管理或竞争场合，你更看重？",
        options: [
          { label: "A. 商业说服力、谈判回款与市场占有率 (E)", value: "E" },
          { label: "B. 合规风控、精准核算与制度流程秩序 (C)", value: "C" },
          { label: "C. 产品的技术底层硬核壁垒 (I)", value: "I" },
          { label: "D. 品牌的文化传播与社会价值 (S)", value: "S" }
        ]
      },
      {
        id: 6,
        text: "在处理数据、文档与流程管理时，你更追求？",
        options: [
          { label: "A. 极其严谨、零差错、按标准SOP归档交付 (C)", value: "C" },
          { label: "B. 挖掘数据背后的深层科研逻辑与因果性 (I)", value: "I" },
          { label: "C. 将繁琐流程自动化、机械化落地 (R)", value: "R" },
          { label: "D. 自由无拘束，不喜欢被固定的表单束缚 (A)", value: "A" }
        ]
      }
    ]
  }
};

// 确保在 window 全局挂载
if (typeof window !== 'undefined') {
  window.TEST_DATABASE = TEST_DATABASE;
  window.MBTI_DESCRIPTIONS = MBTI_DESCRIPTIONS;
  window.HOLLAND_DESCRIPTIONS = HOLLAND_DESCRIPTIONS;
}

// ==========================================================================
// 3. Comprehensive Test Engine Execution Logic
// ==========================================================================

var currentTest = null;
var currentQuestionIndex = 0;
var userAnswers = {};

function initStandaloneTest(testId) {
  if (testId && TEST_DATABASE[testId]) {
    currentTest = TEST_DATABASE[testId];
  }
  currentQuestionIndex = 0;
  userAnswers = {};

  var heroIntro = document.getElementById("heroIntro");
  var testFlow = document.getElementById("testFlow");

  if (heroIntro) heroIntro.style.display = "block";
  if (testFlow) testFlow.style.display = "none";
}

function startCurrentTest(targetTestId) {
  if (targetTestId && TEST_DATABASE[targetTestId]) {
    currentTest = TEST_DATABASE[targetTestId];
  } else if (!currentTest) {
    currentTest = TEST_DATABASE["dating_signal"];
  }

  var heroIntro = document.getElementById("heroIntro");
  var testFlow = document.getElementById("testFlow");
  var catalogGrid = document.querySelector(".catalog-grid");
  var resultView = document.getElementById("resultContainer") || document.getElementById("resultView");

  if (heroIntro) heroIntro.style.display = "none";
  if (catalogGrid) catalogGrid.style.display = "none";
  if (resultView) resultView.style.display = "none";
  if (testFlow) testFlow.style.display = "block";

  currentQuestionIndex = 0;
  userAnswers = {};
  renderQuestion();
}

function renderQuestion() {
  if (!currentTest || !currentTest.questions) return;
  var q = currentTest.questions[currentQuestionIndex];
  var total = currentTest.questions.length;

  var progressPercent = Math.round(((currentQuestionIndex + 1) / total) * 100);
  var progressBar = document.getElementById("progressBarFill");
  var progressText = document.getElementById("progressText");
  var qNumber = document.getElementById("questionNumber");
  var qText = document.getElementById("questionText");

  if (progressBar) progressBar.style.width = `${progressPercent}%`;
  if (progressText) progressText.innerText = `${currentQuestionIndex + 1} / ${total}`;
  if (qNumber) qNumber.innerText = `QUESTION ${currentQuestionIndex + 1} ${q.type === 'multi' ? '【多选题】' : ''}`;
  if (qText) qText.innerText = q.text;

  var optionsList = document.getElementById("optionsList");
  if (!optionsList) return;
  
  if (q.type === 'multi') {
    var currentSelected = userAnswers[q.id] || [];
    optionsList.innerHTML = q.options.map(function(opt, idx) {
      var isSelected = currentSelected.indexOf(idx) !== -1;
      return `
        <button class="option-btn ${isSelected ? 'selected' : ''}" onclick="toggleMultiOption(${q.id}, ${idx})">
          <span>${opt.label}</span>
          <span class="option-indicator" style="border-radius:4px;">${isSelected ? '✓' : ''}</span>
        </button>
      `;
    }).join('') + `
      <div style="margin-top:1.2rem; text-align:right;">
        <button class="btn btn-primary" onclick="nextQuestionAfterMulti()">确认选项并继续 →</button>
      </div>
    `;
  } else {
    optionsList.innerHTML = q.options.map(function(opt, idx) {
      var isSelected = userAnswers[q.id] === idx;
      return `
        <button class="option-btn ${isSelected ? 'selected' : ''}" onclick="selectSingleOption(${q.id}, ${idx})">
          <span>${opt.label}</span>
          <span class="option-indicator"></span>
        </button>
      `;
    }).join('');
  }

  var prevBtn = document.getElementById("prevBtn");
  if (prevBtn) {
    prevBtn.disabled = currentQuestionIndex === 0;
    prevBtn.style.opacity = currentQuestionIndex === 0 ? "0.4" : "1";
  }
}

function selectSingleOption(questionId, optionIndex) {
  userAnswers[questionId] = optionIndex;
  renderQuestion();

  setTimeout(function() {
    if (currentQuestionIndex < currentTest.questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      calculateAndShowResult();
    }
  }, 220);
}

function toggleMultiOption(questionId, optionIndex) {
  if (!userAnswers[questionId]) {
    userAnswers[questionId] = [];
  }
  var q = currentTest.questions[currentQuestionIndex];
  
  if (q.options[optionIndex].value.none) {
    userAnswers[questionId] = [optionIndex];
  } else {
    userAnswers[questionId] = userAnswers[questionId].filter(function(i) { return !q.options[i].value.none; });
    if (userAnswers[questionId].indexOf(optionIndex) !== -1) {
      userAnswers[questionId] = userAnswers[questionId].filter(function(i) { return i !== optionIndex; });
    } else {
      userAnswers[questionId].push(optionIndex);
    }
  }
  renderQuestion();
}

function nextQuestionAfterMulti() {
  if (currentQuestionIndex < currentTest.questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    calculateAndShowResult();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

// Mini Program Launch Function with Official QR Code Modal
function openMiniProgramAd() {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText("#小程序://一子一木/0JPDrt84ecI5Gwd");
  }

  var modalHtml = `
    <div id="qrModal" class="modal-overlay show" style="z-index:99999;">
      <div class="paywall-card" style="text-align:center; max-width:380px; padding:1.8rem 1.4rem;">
        <button class="modal-close-btn" onclick="closeQrModal()">×</button>
        <span class="paywall-badge" style="background:rgba(245,158,11,0.15); color:#fbbf24; border-color:rgba(245,158,11,0.4);">🎁 专属壁纸抽奖福利</span>
        <h3 style="font-size:1.15rem; font-weight:700; color:#fff; margin-top:0.8rem; margin-bottom:0.4rem;">一子一木壁纸屋</h3>
        <p style="font-size:0.84rem; color:var(--text-muted); line-height:1.4; margin-bottom:1rem;">
          在微信内<strong>长按下方小程序码</strong>，或截图扫码，即可免费兑换 4K 高清绝美壁纸与积分抽大奖！
        </p>

        <div style="background:#fff; padding:10px; border-radius:16px; display:inline-block; margin-bottom:1rem; box-shadow:0 6px 20px rgba(0,0,0,0.5);">
          <img src="qrcode.png" alt="一子一木壁纸屋小程序码" style="width:210px; height:210px; display:block; border-radius:8px;">
        </div>

        <div style="background:rgba(0,0,0,0.35); border:1px dashed rgba(245,158,11,0.45); border-radius:8px; padding:0.6rem; font-size:0.8rem; color:#fcd34d; word-break:break-all; margin-bottom:1rem;">
          #小程序://一子一木/0JPDrt84ecI5Gwd
        </div>

        <button class="btn btn-reward" style="width:100%; justify-content:center; padding:0.75rem;" onclick="copyQrText('#小程序://一子一木/0JPDrt84ecI5Gwd')">
          📋 复制小程序口令
        </button>
      </div>
    </div>
  `;

  var existing = document.getElementById("qrModal");
  if (existing) existing.remove();
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeQrModal() {
  var modal = document.getElementById("qrModal");
  if (modal) modal.remove();
}

function copyQrText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() {
      showToast("📋 口令已复制！在微信对话框中发送即可直接点击打开！");
      closeQrModal();
    });
  } else {
    showToast("📋 口令已复制！在微信对话框中发送即可直接点击打开！");
    closeQrModal();
  }
}

function copyQrText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() {
      showToast("📋 口令已复制！在微信对话框中发送即可直接点击打开！");
      closeQrModal();
    });
  } else {
    showToast("📋 口令已复制！在微信对话框中发送即可直接点击打开！");
    closeQrModal();
  }
}

function fallbackCopyText(text) {
  var input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  showToast("📱 正在跳转【一子一木】小程序！如未自动打开，口令已复制，发送至微信对话框点击即可直接打开！");
}

function showToast(msg) {
  var toast = document.getElementById("toastMsg");
  var toastText = document.getElementById("toastText");
  if (!toast || !toastText) return;
  toastText.innerText = msg;
  toast.classList.add("show");
  setTimeout(function() { toast.classList.remove("show"); }, 4000);
}

// ⚖️ 免责声明组件 (精准修改文案)
function getDisclaimerHtml() {
  return `
    <div class="disclaimer-banner" style="text-align:center; font-size:0.78rem; color:var(--text-sub); margin:1.2rem 0 0.8rem 0; line-height:1.5; background:rgba(255,255,255,0.02); border:1px solid var(--border-color); border-radius:10px; padding:0.6rem 1rem;">
      ⚖️ <strong>免责声明</strong>：本测评结果仅供自我探索、娱乐及个人参考使用，不构成任何专业医学诊断、心理治疗或重大人生/法律决策依据。
    </div>
  `;
}

// 🎨 居中单行引流广告组件 (调用真实大尺寸 4K 壁纸预告图，激发用户领取欲望)
function getAdRewardHtml(testName) {
  var titleText = testName ? `做${testName}测试领【一子一木】壁纸积分抽大奖` : "做测试领【一子一木】壁纸积分抽大奖";
  return `
    <div class="ad-reward-banner">
      <div class="ad-content-left">
        <div class="ad-icon-badge">
          <img src="wallpaper_thumb.jpg" alt="4K壁纸预览" class="ad-thumb-img">
        </div>
        <div class="ad-text-group">
          <h4>${titleText}</h4>
          <p>凭测试结果前往小程序即可免费兑换 4K 高清绝美壁纸并参与抽奖</p>
          <span class="ad-code-badge">#小程序://一子一木/0JPDrt84ecI5Gwd</span>
        </div>
      </div>
      <a href="${MINI_PROGRAM_LINK}" class="btn btn-reward" onclick="openMiniProgramAd();">
        🎁 免费下载壁纸/领积分/抽大奖 →
      </a>
    </div>
  `;
}

function getMatrixRecommendHtml(currentTestId) {
  var matrixList = [
    { id: "mbti", icon: "🧠", title: "MBTI 16型人格专业测评", desc: "四大维度定位你的核心认知模式与职业优势" },
    { id: "gad7", icon: "😟", title: "GAD-7 焦虑与内耗测评", desc: "评估近两周情绪负荷、压力与内耗等级" },
    { id: "dating_signal", icon: "💘", title: "关系信号深度拆解", desc: "拆解他没说出口的好感、投入度与关系承诺" },
    { id: "attachment", icon: "💕", title: "恋爱依恋类型测评", desc: "剖析你的亲密关系底色：安全型还是回避型" },
    { id: "bigfive", icon: "🌊", title: "大五人格专业测评", desc: "学术级 OCEAN 五大核心性格杠杆剖析" },
    { id: "battery", icon: "🔋", title: "社畜精神续航与发疯指数", desc: "测测心理剩余电量与抗压发疯极限" },
    { id: "eq", icon: "🎭", title: "高情商与防PUA测评", desc: "评估同理心深度、社交边界感与防操控能力" },
    { id: "holland", icon: "🧭", title: "霍兰德职业兴趣测评", desc: "RIASEC 六维代码定位你的理想职业赛道" }
  ];

  var filtered = matrixList.filter(function(item) { return item.id !== currentTestId; });

  var cardsHtml = filtered.map(function(item) {
    var unlocked = isTestUnlocked(item.id);
    var btnText = unlocked ? "✓ 已解锁 · 开始测试 →" : "🚀 加购测评 (特惠 ¥1.99) →";
    var btnStyle = unlocked ? "background:linear-gradient(90deg, #10b981 0%, #059669 100%);" : "";
    return `
      <div class="matrix-mini-card">
        <div>
          <div class="matrix-card-top">
            <span class="matrix-card-icon">${item.icon}</span>
            <span class="matrix-card-name">${item.title}</span>
          </div>
          <p class="matrix-card-desc">${item.desc}</p>
        </div>
        <button class="matrix-card-btn" style="${btnStyle}" onclick="checkAndStartTest('${item.id}')">
          ${btnText}
        </button>
      </div>
    `;
  }).join('');

  return `
    <div class="matrix-recommend-section">
      <div class="matrix-header">
        <div class="matrix-title-group">
          <h3 class="matrix-title">🌌 热门测评矩阵 · 探索多维自我</h3>
          <p class="matrix-subtitle">凭本次测试结果，加购矩阵其他核心测评均享 <strong>¥ 1.99 元</strong> 限时专享价</p>
        </div>
        <div class="matrix-swipe-hint">👇 上下滑动探索 👇</div>
      </div>
      <div class="matrix-grid">
        ${cardsHtml}
      </div>
    </div>
  `;
}

// ==========================================================================
// 5. 咸鱼/小红书 自动发卡密钥 & 好友付费防护引擎
// ==========================================================================

// 判断当前是否具备有效付费凭证（带 ?key=... 参数、卡密或已验证）
function isTestUnlocked(testId) {
  if (!testId) return true;

  // 1. 校验 URL 发货 Key：仅自动解锁买家当前所购买的这项单品测评
  if (typeof window !== 'undefined' && window.location && window.location.search) {
    var search = window.location.search.toLowerCase();
    var path = window.location.pathname.toLowerCase();
    
    if (search.indexOf('key=') !== -1 || search.indexOf('token=') !== -1 || search.indexOf('paid=1') !== -1 || search.indexOf('code=') !== -1 || search.indexOf('pass=') !== -1) {
      // 若当前页面路径匹配该测评（如 mbti.html 解锁 mbti），则记录本地单品解锁状态
      var shortId = testId.replace('_signal', '');
      if (path.indexOf(testId) !== -1 || path.indexOf(shortId) !== -1 || path === '/' || path.indexOf('index') !== -1) {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('unlocked_' + testId, 'true');
        }
        return true;
      }
    }
  }

  // 2. 检查买家设备本地存储：买家已单独加购/解锁过的单项测评可重复测试
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('unlocked_' + testId) === 'true';
  }
  return false;
}

function unlockTest(testId) {
  if (typeof localStorage !== 'undefined' && testId) {
    // 标记买家成功解锁【当前这项测评】
    localStorage.setItem('unlocked_' + testId, 'true');
  }
}

function checkAndStartTest(targetTestId) {
  var testId = targetTestId || (currentTest ? currentTest.id : "dating_signal");
  
  if (isTestUnlocked(testId)) {
    startCurrentTest(testId);
  } else {
    showPaywallModal(testId);
  }
}

function showPaywallModal(testId) {
  var test = TEST_DATABASE[testId] || TEST_DATABASE['dating_signal'];
  var modalHtml = `
    <div id="paywallModal" class="modal-overlay show">
      <div class="paywall-card" style="max-width:400px; text-align:center; padding:1.8rem 1.4rem;">
        <button class="modal-close-btn" onclick="closePaywallModal()">×</button>
        <span class="paywall-badge" style="background:rgba(59,130,246,0.15); color:#60a5fa; border-color:rgba(59,130,246,0.35);">⚡ 极速解锁测评</span>
        <h2 class="paywall-title" style="font-size:1.2rem; margin-top:0.5rem; margin-bottom:0.3rem;">《${test.title}》</h2>
        
        <div style="font-size:1.35rem; font-weight:800; color:#fbbf24; margin-bottom:0.8rem;">
          ¥ 1.99 <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); text-decoration:line-through;">原价 ¥9.9</span>
        </div>

        <!-- 真实支付宝扫码收款区 -->
        <div style="background:#fff; padding:8px; border-radius:16px; display:inline-block; margin-bottom:0.8rem; box-shadow:0 6px 24px rgba(0,0,0,0.5);">
          <img src="alipay_qrcode.png" alt="支付宝扫码支付" style="width:210px; height:210px; display:block; border-radius:8px; object-fit:contain;">
        </div>

        <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1rem; line-height:1.4;">
          📱 手机<strong>截图或扫码</strong>直接支付 <strong>1.99 元</strong>
        </p>

        <!-- 一键放行与解锁大按钮 -->
        <button class="btn btn-primary" style="width:100%; justify-content:center; padding:0.8rem; font-size:0.95rem; margin-bottom:0.8rem; background:linear-gradient(90deg, #10b981 0%, #059669 100%); color:#fff; border:none; box-shadow:0 4px 16px rgba(16,185,129,0.35);" onclick="confirmPayAndUnlock('${testId}')">
          ✅ 我已完成支付 · 立即开始测试 →
        </button>

        <!-- 口令直接输入区（折叠/备用） -->
        <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:0.8rem; margin-top:0.4rem;">
          <a href="javascript:void(0)" onclick="togglePaywallCodeInput()" style="font-size:0.8rem; color:var(--text-sub); text-decoration:underline;">
            🔑 已有发货卡密/口令？点此输入
          </a>
          <div id="paywallCodeInputBox" style="display:none; margin-top:0.6rem;">
            <div style="display:flex; gap:0.4rem;">
              <input type="text" id="unlockCodeInput" placeholder="输入发货口令 (如 VIP888)" style="flex:1; padding:0.55rem 0.7rem; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.15); border-radius:6px; color:#fff; font-size:0.85rem; outline:none;">
              <button class="btn btn-outline" style="padding:0.55rem 0.9rem; font-size:0.82rem;" onclick="verifyUnlockCode('${testId}')">验证解锁</button>
            </div>
          </div>
        </div>

        <div style="margin-top:0.8rem; font-size:0.72rem; color:var(--text-sub); line-height:1.4;">
          ⚖️ 虚拟数字化内容，支付后自动解锁，感谢您的认可与支持！
        </div>
      </div>
    </div>
  `;

  var existing = document.getElementById("paywallModal");
  if (existing) existing.remove();
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closePaywallModal() {
  var modal = document.getElementById("paywallModal");
  if (modal) modal.remove();
}

function togglePaywallCodeInput() {
  var box = document.getElementById("paywallCodeInputBox");
  if (box) {
    box.style.display = box.style.display === "none" ? "block" : "none";
  }
}

function confirmPayAndUnlock(testId) {
  showToast("🎉 感谢您的赞赏支持！正在为您开启《" + (TEST_DATABASE[testId] ? TEST_DATABASE[testId].title : "测评") + "》...");
  unlockTest(testId);
  setTimeout(function() {
    closePaywallModal();
    startCurrentTest(testId);
  }, 700);
}

function verifyUnlockCode(testId) {
  var input = document.getElementById("unlockCodeInput");
  var val = input ? input.value.trim().toUpperCase() : "";
  if (val.length >= 3) {
    showToast("🔑 口令验证成功！正在为您解锁《" + (TEST_DATABASE[testId] ? TEST_DATABASE[testId].title : "测评") + "》...");
    unlockTest(testId);
    setTimeout(function() {
      closePaywallModal();
      startCurrentTest(testId);
    }, 700);
  } else {
    showToast("❌ 请输入正确的发货口令 (如 VIP888)");
  }
}

// 🔗 好友转发防护分享工具：只分享裸链接，不带凭证 Key，确保好友打开时必须付费！
function openShareModal() {
  var testName = currentTest ? currentTest.title : "热门心理测评";
  // 去除任何 key/token 参数，确保好友拿到的链接是【未解锁状态】
  var cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
  var shareText = "我在做【" + testName + "】，测出来的结果分析超级准！你也快来测测看吧：" + cleanUrl;

  var shareModalHtml = `
    <div id="shareModal" class="modal-overlay show">
      <div class="paywall-card">
        <button class="modal-close-btn" onclick="closeShareModal()">×</button>
        <span class="paywall-badge" style="background:rgba(236,72,153,0.15); color:#f472b6; border-color:rgba(236,72,153,0.3);">🔗 裂变分享给好友</span>
        <h2 class="paywall-title">邀请好友测算</h2>
        <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:1rem;">
          自动剔除您的已付费卡密。好友打开此链接后<strong>需要付费或凭卡密才能测试</strong>。
        </p>

        <div style="background:rgba(0,0,0,0.4); border:1px solid var(--border-color); border-radius:8px; padding:0.8rem; font-size:0.8rem; color:var(--text-muted); text-align:left; margin-bottom:1.2rem; word-break:break-all;">
          ${shareText}
        </div>

        <button class="btn btn-primary" style="width:100%; justify-content:center; margin-bottom:0.8rem;" onclick="copyShareText('${shareText.replace(/'/g, "\'")}')">
          📋 复制专属邀请链接
        </button>
      </div>
    </div>
  `;

  var existing = document.getElementById("shareModal");
  if (existing) existing.remove();
  document.body.insertAdjacentHTML('beforeend', shareModalHtml);
}

function closeShareModal() {
  var modal = document.getElementById("shareModal");
  if (modal) modal.remove();
}

function copyShareText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() {
      showToast("📋 链接已复制！发送给好友后，好友需付费即可开始测评！");
      closeShareModal();
    }).catch(function() { fallbackCopyShareText(text); });
  } else {
    fallbackCopyShareText(text);
  }
}

function fallbackCopyShareText(text) {
  var input = document.createElement("textarea");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  showToast("📋 链接已复制！发送给好友后，好友需付费即可开始测评！");
  closeShareModal();
}
