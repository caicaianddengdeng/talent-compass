import type { Question, ResultType } from './types';

export const talentQuiz = {
  questions: [
    {
      id: 1, text: '周末你有一整天自由时间，最想做什么？',
      options: [
        { label: '🎨 画画、写东西或做手工', value: 0, scores: { A: 3, C: 1, G: 1 } },
        { label: '🤝 约朋友聚会或参加社交活动', value: 1, scores: { B: 3, E: 1, H: 1 } },
        { label: '📚 看书学习新知识或研究某个课题', value: 2, scores: { D: 3, A: 1, F: 1 } },
        { label: '🏃 运动、户外探险或尝试新鲜事物', value: 3, scores: { E: 3, B: 1, G: 1 } },
      ],
    },
    {
      id: 2, text: '遇到一个难题时，你通常怎么做？',
      options: [
        { label: '🔍 冷静分析，列出所有可能的解决方案', value: 0, scores: { D: 3, F: 2 } },
        { label: '💬 找人讨论，听取不同人的意见', value: 1, scores: { B: 3, E: 2 } },
        { label: '🎯 凭直觉快速做决定，然后行动', value: 2, scores: { E: 3, G: 2 } },
        { label: '🧪 先小范围试验，根据结果再调整', value: 3, scores: { A: 3, F: 2 } },
      ],
    },
    {
      id: 3, text: '在团队中，你最自然扮演的角色是？',
      options: [
        { label: '👑 组织者和决策者，带领大家前进', value: 0, scores: { B: 3, G: 2, E: 1 } },
        { label: '💡 创意输出者，不断提出新点子', value: 1, scores: { A: 3, G: 2, C: 1 } },
        { label: '🔧 执行者和完成者，把事情做好', value: 2, scores: { F: 3, D: 2, H: 1 } },
        { label: '☮️ 调和者和支持者，维护团队和谐', value: 3, scores: { H: 3, B: 2, C: 1 } },
      ],
    },
    {
      id: 4, text: '以下哪种描述最符合你的工作方式？',
      options: [
        { label: '📋 喜欢有明确的流程和标准', value: 0, scores: { F: 3, D: 2, H: 1 } },
        { label: '🎨 喜欢自由发挥和创意空间', value: 1, scores: { A: 3, C: 2, G: 1 } },
        { label: '🤝 喜欢和人打交道的工作', value: 2, scores: { B: 3, E: 2, H: 1 } },
        { label: '🔬 喜欢研究和深度思考', value: 3, scores: { D: 3, F: 2, A: 1 } },
      ],
    },
    {
      id: 5, text: '别人经常用哪个词来形容你？',
      options: [
        { label: '🔥 热情有感染力', value: 0, scores: { E: 3, B: 2, G: 1 } },
        { label: '🧠 聪明有深度', value: 1, scores: { D: 3, A: 2, F: 1 } },
        { label: '💪 靠谱有担当', value: 2, scores: { F: 3, H: 2, B: 1 } },
        { label: '🌈 有趣有创意', value: 3, scores: { A: 3, C: 2, G: 1 } },
      ],
    },
    {
      id: 6, text: '面对一个完全陌生的领域，你的第一反应是？',
      options: [
        { label: '😍 兴奋！立刻开始探索和学习', value: 0, scores: { E: 3, D: 2, G: 1 } },
        { label: '🤔 先观察，了解大概再深入', value: 1, scores: { F: 3, D: 2, A: 1 } },
        { label: '🤝 找一个懂行的人请教', value: 2, scores: { B: 3, H: 2, C: 1 } },
        { label: '✍️ 制定学习计划，系统掌握', value: 3, scores: { D: 3, F: 2, H: 1 } },
      ],
    },
    {
      id: 7, text: '你最看重的职业回报是什么？',
      options: [
        { label: '💰 高收入和财务自由', value: 0, scores: { G: 3, E: 2, B: 1 } },
        { label: '🌟 实现自我价值和创造力', value: 1, scores: { A: 3, C: 2, G: 1 } },
        { label: '🏆 专业成就和行业影响力', value: 2, scores: { D: 3, F: 2, B: 1 } },
        { label: '💖 帮助他人和社会贡献', value: 3, scores: { H: 3, C: 2, B: 1 } },
      ],
    },
    {
      id: 8, text: '面对压力和deadline，你通常会？',
      options: [
        { label: '🏃 越压越强，爆发力max！', value: 0, scores: { E: 3, G: 2, B: 1 } },
        { label: '📊 理性规划，按部就班完成', value: 1, scores: { F: 3, D: 2, H: 1 } },
        { label: '🎨 换个思路，用创意绕过去', value: 2, scores: { A: 3, C: 2, G: 1 } },
        { label: '🤗 寻求支持，大家一起扛', value: 3, scores: { H: 3, B: 2, E: 1 } },
      ],
    },
    {
      id: 9, text: '空闲时刷手机，你最容易沉迷哪类内容？',
      options: [
        { label: '🎬 创意视频、设计、摄影、艺术', value: 0, scores: { A: 3, C: 2 } },
        { label: '📈 财经分析、科技资讯、行业趋势', value: 1, scores: { D: 3, G: 2, F: 1 } },
        { label: '👥 人物故事、访谈、情感话题', value: 2, scores: { B: 3, H: 2, C: 1 } },
        { label: '🎮 游戏攻略、极限运动、冒险vlog', value: 3, scores: { E: 3, G: 2, A: 1 } },
      ],
    },
    {
      id: 10, text: '如果创业，你更倾向于做哪种业务？',
      options: [
        { label: '🛠️ 做一款极致的产品或工具', value: 0, scores: { A: 3, D: 2, F: 1 } },
        { label: '🤝 搭建一个社群或平台', value: 1, scores: { B: 3, E: 2, G: 1 } },
        { label: '💡 做内容/IP，靠创意赚钱', value: 2, scores: { C: 3, A: 2, E: 1 } },
        { label: '🏪 务实的小而美生意', value: 3, scores: { H: 3, F: 2, G: 1 } },
      ],
    },
    {
      id: 11, text: '你理想的领导/导师是什么风格？',
      options: [
        { label: '🎯 目标明确、给你充分授权的', value: 0, scores: { G: 3, E: 2, B: 1 } },
        { label: '📚 知识渊博、能教你很多东西的', value: 1, scores: { D: 3, F: 2, A: 1 } },
        { label: '🤗 关心你成长、给予情感支持的', value: 2, scores: { H: 3, C: 2, B: 1 } },
        { label: '🚀 大胆创新、鼓励你冒险尝试的', value: 3, scores: { A: 3, G: 2, E: 1 } },
      ],
    },
    {
      id: 12, text: '5年后，你希望自己的生活状态是？',
      options: [
        { label: '🌍 自由职业或远程办公，环游世界', value: 0, scores: { C: 3, G: 2, A: 1 } },
        { label: '🏢 在行业中成为受人尊敬的专家', value: 1, scores: { D: 3, F: 2, B: 1 } },
        { label: '🚀 创业成功，带领团队改变行业', value: 2, scores: { E: 3, G: 2, B: 1 } },
        { label: '💖 工作生活平衡，做有意义的事', value: 3, scores: { H: 3, C: 2, F: 1 } },
      ],
    },
  ] as Question[],

  results: [
    { id: 'A', name: '创造者', emoji: '🎨', subtitle: '用想象力改变世界的艺术家', description: '你拥有丰富的内心世界和强烈的创造冲动。对你来说，最快乐的事是把脑海中的想法变成现实——无论是一行代码、一幅画还是一个产品。你不喜欢被规则束缚，需要自由的空间来表达自己。', strengths: ['创造力爆棚', '审美能力突出', '思维灵活不僵化', '善于发现新可能'], careers: ['产品设计师', 'UI/UX设计师', '内容创作者', '前端开发工程师', '游戏策划', '视频编导', '独立开发者'], color: '#7C3AED', gradient: 'linear-gradient(135deg, #7C3AED, #A855F7, #C084FC)', deepAnalysis: '创造者型的你，最适合走"创作者经济"路线。你的核心竞争力在于独特的审美和创造力——这是AI最难以替代的能力。建议深耕一个垂直领域（如B端产品设计、品牌视觉、3D动效），建立个人作品集和个人品牌。' },
    { id: 'B', name: '连接者', emoji: '🤝', subtitle: '把人聚在一起的社交枢纽', description: '你的超能力是与人建立连接。你天生懂得倾听、共情和说服，在人群中如鱼得水。优秀的沟通能力让你在任何团队中都不可或缺。', strengths: ['沟通表达能力', '共情和洞察人性', '团队协作领导', '资源整合能力'], careers: ['销售经理', '用户运营', 'HR/招聘', '公关/品牌经理', '商务拓展', '社区运营', '心理咨询师'], color: '#2563EB', gradient: 'linear-gradient(135deg, #2563EB, #3B82F6, #60A5FA)', deepAnalysis: '连接者型的你，核心竞争力在于"人"相关的价值创造。在AI时代，人与人之间的深度连接反而变得更加稀缺和有价值。建议你往"社群+IP"方向发展，在某个垂直领域建立个人影响力。' },
    { id: 'C', name: '表达者', emoji: '✍️', subtitle: '用文字和思想影响他人的传播者', description: '你有强烈的表达欲和独特的视角，总能找到打动人心的话语。你的文字或语言有一种魔力——能把复杂的事情讲得简单有趣，能让陌生人产生共鸣。', strengths: ['文字/语言表达力', '独特的个人视角', '感染力与说服力', '内容策划能力'], careers: ['自媒体博主', '文案策划', '市场营销', '短视频编导', '记者/编辑', '品牌策划', '知识付费讲师'], color: '#DC2626', gradient: 'linear-gradient(135deg, #DC2626, #EF4444, #F87171)', deepAnalysis: '表达者型的你，最适合利用自媒体杠杆放大你的影响力。选择一个你真正热爱的细分领域，持续输出有价值的内容。前3-6个月可能是积累期，但一旦建立起个人品牌，收入天花板极高。' },
    { id: 'D', name: '分析者', emoji: '🧠', subtitle: '用逻辑拆解世界的思想者', description: '你有一颗永不满足的好奇心和对真理的追求。对你来说，理解"为什么"比知道"是什么"更重要。深度思考和独立判断是你的核心能力。', strengths: ['逻辑分析能力', '深度思考能力', '数据敏感度', '独立判断力'], careers: ['数据分析师', '算法工程师', '后端开发', '金融分析师', '科研人员', '战略顾问', 'AI训练师'], color: '#059669', gradient: 'linear-gradient(135deg, #059669, #10B981, #34D399)', deepAnalysis: '分析者型的你，在AI时代拥有最稀缺的能力之一——把数据转化为决策。建议深耕"AI+行业"的交叉领域（如AI+金融、AI+医疗），成为行业稀缺的复合型人才。' },
    { id: 'E', name: '开拓者', emoji: '🚀', subtitle: '永远在路上的冒险家', description: '你骨子里有一股不服输的韧劲和对未知的渴望。你不怕失败——对你来说，最可怕的不是跌倒，而是一成不变。你行动力极强，想到就去做。', strengths: ['超强行动力', '拥抱不确定性', '感染他人的热情', '快速学习适应'], careers: ['创业者', '增长运营', '投资经理', '项目管理', '销售总监', '产品经理', '自由职业者'], color: '#D97706', gradient: 'linear-gradient(135deg, #D97706, #F59E0B, #FBBF24)', deepAnalysis: '开拓者型的你，天生适合创业和从0到1的搭建。建议利用AI工具快速验证多个方向，找到PMF后All in。你的执行力是最大的武器——别人还在想的时候你已经在做了。' },
    { id: 'F', name: '匠人', emoji: '⚙️', subtitle: '追求极致的完美主义者', description: '你相信"把一件事做到极致就是艺术"。你有超乎常人的专注力和耐心，能在细节中发现别人忽略的问题。在你的领域里，你就是品质的保证。', strengths: ['极致的专注力', '高标准高要求', '系统性思维', '可靠性和稳定性'], careers: ['全栈工程师', '架构师', '质量工程师', '网络安全专家', '精算师', '供应链管理', '技术写作'], color: '#4F46E5', gradient: 'linear-gradient(135deg, #4F46E5, #6366F1, #818CF8)', deepAnalysis: '匠人型的你，最适合走"专家路线"。在AI辅助下，你的深度可以进一步放大——用AI处理80%的常规工作，你的20%高价值判断是核心竞争力。找一个小众但刚需的领域深耕，成为不可替代的专家。' },
    { id: 'G', name: '策略家', emoji: '♟️', subtitle: '运筹帷幄的幕后操盘手', description: '你有一种天生的"全局视野"——能从纷繁复杂的局面中看到关键变量，制定最优方案。你的目标感极强，始终盯着远方的大目标。', strengths: ['战略规划能力', '资源整合能力', '商业嗅觉敏锐', '决策和风险评估'], careers: ['CEO/高管', '产品总监', '投资银行家', '企业管理咨询', '商业分析师', '增长黑客', '房地产投资'], color: '#7C2D12', gradient: 'linear-gradient(135deg, #7C2D12, #9A3412, #C2410C)', deepAnalysis: '策略家型的你，核心竞争力在于"做对的事"而不只是"把事做对"。建议从增长/策略岗切入，积累行业资源和人脉，3-5年后转型创业或独立顾问。' },
    { id: 'H', name: '守护者', emoji: '🛡️', subtitle: '默默撑起一片天的中坚力量', description: '你是那种"有你在就安心"的人。不张扬、不浮夸，但你做的每一件事都踏踏实实。你的力量不在于耀眼的光芒，而在于持久的温暖和可靠的支撑。', strengths: ['令人安心的可靠', '出色的执行力', '团队凝聚力', '务实和韧性'], careers: ['行政主管', '客服经理', '财务/审计', '护理/医疗', '教师/培训师', '公务员', 'NGO工作人员'], color: '#0D9488', gradient: 'linear-gradient(135deg, #0D9488, #14B8A6, #2DD4BF)', deepAnalysis: '守护者型的你，在浮躁的时代里是最珍贵的存在。你的可靠性和持久力让你在任何组织中都是不可或缺的中坚。建议选择稳定性高、有长期积累价值的行业，让你的优势随时间复利增长。' },
  ] as ResultType[],
};
