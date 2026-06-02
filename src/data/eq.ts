import type { QuizData } from './types';

export const eqQuiz: QuizData = {
  questions: [
    {
      id: 1, text: '同事当众批评你的方案，你第一时间？',
      options: [
        { label: '😤 反驳，维护自己的观点', value: 0, scores: { SE: 2, EM: 1 } },
        { label: '😶 沉默，但内心很不舒服', value: 1, scores: { SC: 2, SE: 1 } },
        { label: '🤔 先听完，再理性回应', value: 2, scores: { EM: 2, OP: 2 } },
        { label: '😰 感到尴尬，想快点结束', value: 3, scores: { SR: 2, SC: 1 } },
      ],
    },
    {
      id: 2, text: '面对高压截止日期时，你通常会？',
      options: [
        { label: '😬 焦虑不安，但咬牙硬撑', value: 0, scores: { SR: 2, SE: 1 } },
        { label: '🧘 深呼吸调整，保持冷静', value: 1, scores: { EM: 2, OP: 2 } },
        { label: '🏃 拼命赶工，先做完再说', value: 2, scores: { SR: 2, SE: 1 } },
        { label: '📋 制定计划，稳步推进', value: 3, scores: { OP: 2, EM: 1 } },
      ],
    },
    {
      id: 3, text: '同事情绪低落时，你更容易？',
      options: [
        { label: '💗 主动关心，陪ta聊心事', value: 0, scores: { EP: 3, SK: 1 } },
        { label: '🤔 察觉到，但不知该怎么做', value: 1, scores: { EP: 2, SC: 1 } },
        { label: '🙂 讲个笑话逗ta开心', value: 2, scores: { SK: 2, EM: 1 } },
        { label: '🤷 假装没注意到', value: 3, scores: { SC: 2 } },
      ],
    },
    {
      id: 4, text: '在团队讨论中，你更倾向于？',
      options: [
        { label: '🎤 主动发言，引领讨论方向', value: 0, scores: { SK: 2, SE: 1 } },
        { label: '👂 多听少说，汇总各方观点', value: 1, scores: { EP: 2, OP: 1 } },
        { label: '⚖️ 在分歧时做调解者', value: 2, scores: { SK: 2, EM: 1 } },
        { label: '💡 偶尔插入关键想法', value: 3, scores: { OP: 2 } },
      ],
    },
    {
      id: 5, text: '当计划被意外打乱时，你的反应是？',
      options: [
        { label: '😤 烦躁，抱怨运气不好', value: 0, scores: { SR: 2, SE: 1 } },
        { label: '🔄 快速调整，重新规划', value: 1, scores: { OP: 3, EM: 1 } },
        { label: '🤷 无所谓，顺其自然', value: 2, scores: { OP: 2 } },
        { label: '😟 隐隐不安，但勉强接受', value: 3, scores: { SR: 2, SC: 1 } },
      ],
    },
    {
      id: 6, text: '对陌生人的情绪状态，你能多快察觉？',
      options: [
        { label: '⚡ 几乎本能地感知到', value: 0, scores: { EP: 3, SC: 1 } },
        { label: '👀 稍加观察后能发现', value: 1, scores: { EP: 2, SC: 1 } },
        { label: '🤔 需要对方明确表达才知道', value: 2, scores: { SC: 2 } },
        { label: '🎯 对某些情绪敏感，某些不敏感', value: 3, scores: { EP: 1, SC: 1, EM: 1 } },
      ],
    },
    {
      id: 7, text: '当与同事产生矛盾时，你倾向于？',
      options: [
        { label: '🗣️ 直接沟通，把问题说清楚', value: 0, scores: { SK: 2, EM: 1, SE: 1 } },
        { label: '🤝 主动让步，维持关系为先', value: 1, scores: { EP: 2, SR: 1 } },
        { label: '⏸️ 冷处理，等大家都冷静再说', value: 2, scores: { EM: 2, OP: 1 } },
        { label: '📝 找第三方来调解', value: 3, scores: { SK: 1, EP: 1, SE: 1 } },
      ],
    },
    {
      id: 8, text: '对未来职业发展的态度？',
      options: [
        { label: '🚀 充满信心，目标明确', value: 0, scores: { OP: 3, SE: 1 } },
        { label: '📈 乐观但保持现实', value: 1, scores: { OP: 2, EM: 1 } },
        { label: '🤔 有些迷茫但愿意探索', value: 2, scores: { SC: 2 } },
        { label: '😟 时常焦虑，担心未来', value: 3, scores: { SR: 2, SC: 1 } },
      ],
    },
    {
      id: 9, text: '领导临时交给你一个自己不擅长的任务？',
      options: [
        { label: '💪 接受挑战，边学边做', value: 0, scores: { SE: 3, OP: 1 } },
        { label: '🤔 评估后再决定接不接', value: 1, scores: { SC: 2, EM: 1 } },
        { label: '🙋 主动说明困难，寻求支持', value: 2, scores: { SK: 2, SC: 1 } },
        { label: '😰 硬着头皮上但很不安', value: 3, scores: { SR: 2, SE: 1 } },
      ],
    },
    {
      id: 10, text: '最能描述你职场人际风格的是？',
      options: [
        { label: '🌟 受欢迎的中心人物', value: 0, scores: { SK: 3, SE: 1 } },
        { label: '🤗 大家信任的倾诉对象', value: 1, scores: { EP: 3, SK: 1 } },
        { label: '🧠 理性可靠的问题解决者', value: 2, scores: { OP: 2, EM: 1 } },
        { label: '🛡️ 默默付出的稳定力量', value: 3, scores: { SR: 2, SC: 1 } },
      ],
    },
  ],
  results: [
    {
      id: 'SE', name: '自我驱动者', emoji: '🚀',
      subtitle: '内在信念是最强引擎',
      description: '你拥有强大的内在驱动力和自我效能感。不需要外部监督就能全力以赴，面对挑战时展现出惊人的韧性和主动性。你的自信感染着周围的人。',
      strengths: ['自我驱动力强', '目标感清晰', '敢于承担挑战', '抗压恢复力好'],
      careers: ['创业者', '销售总监', '项目经理', '自由职业者'],
      color: '#F97316', gradient: 'linear-gradient(135deg, #EA580C, #F97316)',
      deepAnalysis: '你的核心竞争力是"自驱力"。不需要别人推着你走，你就是自己的发动机。建议设定清晰的阶段性目标来引导你的能量，避免激情燃尽。适合需要开拓精神和自主决策的岗位。警惕：过于自信可能导致忽略他人意见，学会在坚定和倾听之间平衡。',
    },
    {
      id: 'EM', name: '情绪管理者', emoji: '🧘',
      subtitle: '内心平静是最大的力量',
      description: '你拥有出色的情绪调节能力。在高压环境下能保持冷静理性，不易被情绪裹挟。你的沉稳给团队带来安全感，是危机中的定海神针。',
      strengths: ['情绪调节能力强', '压力下保持冷静', '理性决策', '稳重可靠'],
      careers: ['危机公关', '金融分析师', '外科医生', '法官', '企业高管'],
      color: '#3B82F6', gradient: 'linear-gradient(135deg, #2563EB, #3B82F6)',
      deepAnalysis: '你的核心优势是"情绪稳定性"。在混乱中保持清醒是你的天赋。建议在团队中承担危机处理和关键决策的角色。正念冥想和情绪日记可以进一步强化你的情绪管理能力。适合需要冷静判断的高压岗位。警惕：过度理性可能显得冷淡，适时表达情感也很重要。',
    },
    {
      id: 'EP', name: '同理心大师', emoji: '💗',
      subtitle: '感同身受是最深的连接',
      description: '你对他人情绪的感知力极强。能够敏锐地察觉微妙的情绪变化，是天然的倾听者和支持者。你的共情能力让你在人际互动中建立了深厚的信任。',
      strengths: ['共情能力卓越', '善于倾听', '人际洞察敏锐', '建立信任关系'],
      careers: ['心理咨询师', 'HR/招聘', '医护人员', '社工', '客户成功'],
      color: '#EC4899', gradient: 'linear-gradient(135deg, #DB2777, #EC4899)',
      deepAnalysis: '你的核心天赋是"共情力"。你能"读"懂别人的情绪状态，这在职场中是稀缺能力。建议在团队中发挥"人际润滑剂"的作用，负责需要深度沟通的工作。心理咨询、教练辅导、用户研究等方向非常适合你。警惕：过度共情可能导致情绪透支，学会设置边界。',
    },
    {
      id: 'SK', name: '社交达人', emoji: '🌟',
      subtitle: '人际关系是你最大的资产',
      description: '你拥有卓越的社交技能。知道什么时候该说什么话，如何让不同的人感到舒服。你在团队中是天然的凝聚者，人际关系网络广泛而深厚。',
      strengths: ['社交技巧娴熟', '沟通表达流畅', '人脉网络广泛', '团队凝聚力强'],
      careers: ['公关经理', '商务拓展', '培训师', '主持人', '客户经理'],
      color: '#8B5CF6', gradient: 'linear-gradient(135deg, #7C3AED, #8B5CF6)',
      deepAnalysis: '你的核心资产是"社交智能"。你知道如何在不同的人际场景中自如切换，这是天生的领导力潜质。建议充分利用你的社交网络获取信息和机会。商务拓展、团队管理、对外联络等方向能最大化你的优势。警惕：过于关注外部关系可能忽略自我反思的时间。',
    },
    {
      id: 'SR', name: '抗压战士', emoji: '🛡️',
      subtitle: '每次挫折都是升级的机会',
      description: '你拥有超乎常人的抗压能力。挫折只会让你变得更强大，困境激发你更强的斗志。你知道如何在最艰难的环境中保持战斗状态。',
      strengths: ['抗压能力强', '逆境中越挫越勇', '坚韧不拔', '危机应对力好'],
      careers: ['军人/警察', '急诊医生', '运维工程师', '对冲基金交易员'],
      color: '#EF4444', gradient: 'linear-gradient(135deg, #DC2626, #EF4444)',
      deepAnalysis: '你的核心力量是"韧性"。不是没有压力，而是能在压力中持续前进。你是团队在困难时期最可靠的支柱。建议在高压行业中寻找机会，你的抗压能力会转化为竞争优势。警惕：不要把所有压力都往自己肩上扛，学会识别何时需要寻求帮助。',
    },
    {
      id: 'SC', name: '深度自省者', emoji: '🧠',
      subtitle: '认识自己是认识世界的开始',
      description: '你拥有深刻的自我觉察能力。能清晰地认识到自己的情绪来源、行为模式和思维盲区。这种自知之明让你在成长道路上走得比别人更稳。',
      strengths: ['自我觉察深刻', '反思能力强', '成长意识强烈', '对内心世界好奇'],
      careers: ['研究员', '作家', '哲学家/学者', '咨询顾问', '教练'],
      color: '#06B6D4', gradient: 'linear-gradient(135deg, #0891B2, #06B6D4)',
      deepAnalysis: '你的核心天赋是"自知力"。知道自己是谁、想要什么、为什么会这样——这是许多人一生都无法达到的境界。建议利用你的反思能力持续迭代自己。教练、咨询、研究等需要深度思考的岗位非常适合你。警惕：过度内省可能导致行动力不足，记得"想清楚就去行动"。',
    },
    {
      id: 'OP', name: '乐观主义者', emoji: '☀️',
      subtitle: '积极心态是最强的生产力',
      description: '你对未来保持积极的预期，相信努力会有回报。在团队面临挫折时，你的乐观精神是最强效的能量补充剂，帮助团队看到黑暗中的光亮。',
      strengths: ['乐观积极', '感染力强', '看到问题的另一面', '激励他人'],
      careers: ['教育家', '团队领导', '市场营销', '创意总监', '公益组织'],
      color: '#F59E0B', gradient: 'linear-gradient(135deg, #D97706, #F59E0B)',
      deepAnalysis: '你的核心优势是"积极心态"。这不是盲目乐观，而是一种看到机会的认知习惯。你在团队中扮演着"士气引擎"的角色。建议在需要创意和突破的领域发挥你的乐观精神。适合创业团队、市场营销等需要能量感的方向。警惕：乐观也要结合现实评估，避免低估困难。',
    },
  ],
};
