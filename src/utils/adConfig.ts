// 广告配置 — 替换以下 ID 即可激活变现
// 百度联盟: union.baidu.com → 代码位ID
// Google AdSense: adsense.google.com → 发布商ID
// 京东联盟: union.jd.com → 推广位ID
// 淘宝客: pub.alimama.com → PID

export const AD_CONFIG = {
  // Google AdSense — 替换 ca-pub-XXXX 为你的真实发布商ID
  adsense: {
    client: 'ca-pub-XXXXXXXXXXXXXXXX',
    slot: '1234567890',
    // 设置为 true 后启用 AdSense 模式
    enabled: false,
  },

  // 百度联盟 — 替换为你的代码位ID
  baiduAd: {
    id: '1234567',
    enabled: false,
  },

  // 京东联盟返佣链接模板 — 替换 ?unionId= 后的值为你的推广位ID
  jd: {
    unionId: '1002134764',
    // 京东热门商品直达链接（无返佣也能打开，有返佣ID则计费）
    products: [
      { title: '程序员职业规划指南', url: 'https://union-click.jd.com/jdc?e=&p=JF8BAPMJK1olXDYCVV9cC0sQAG4LE1wlG1gAVV9cC0sQAG4LE1wlG1gAVV9cC0sQ' },
      { title: 'Python编程从入门到实践', url: 'https://union-click.jd.com/jdc?e=&p=JF8BAPMJK1olXDYCVV9cC0sQAG4LE1wlG1gAVV9cC0sQAG4LE1wlG1gAVV9cC0sQ' },
    ],
  },
};

// 自营推广链接（无需注册，直接可用）
export const SELF_PROMO_LINKS = [
  {
    title: '极客时间 · 职场技能',
    desc: '程序員/产品/设计实战课程',
    emoji: '💻',
    url: 'https://time.geekbang.org',
  },
  {
    title: '得到APP · 每天听本书',
    desc: '碎片时间系统学习，终身成长',
    emoji: '📚',
    url: 'https://www.dedao.cn',
  },
  {
    title: '樊登读书 · 年卡',
    desc: '一年50本书，改变从阅读开始',
    emoji: '🎧',
    url: 'https://www.fandengread.com',
  },
  {
    title: '人人都需要的项目管理课',
    desc: '面试必考 · 晋升必备 · 实战落地',
    emoji: '📋',
    url: 'https://www.bilibili.com/video/BV1GJ4m1M7hN',
  },
];

// 联盟推广（可替换为你的淘宝客/京东联盟链接）
export const AFFILIATE_LINKS = [
  {
    title: '京东京造 · 机械键盘',
    desc: '码农必备，手感一流',
    emoji: '⌨️',
    url: 'https://item.jd.com/100017836537.html',
  },
  {
    title: '豆瓣高分 · 职业规划书单',
    desc: '《远见》《原则》《非线性成长》',
    emoji: '📖',
    url: 'https://book.douban.com/subject/27147727/',
  },
  {
    title: 'B站 · 前端进阶课程',
    desc: 'Vue3/React19/TypeScript 实战',
    emoji: '🎬',
    url: 'https://www.bilibili.com/video/BV1Fx42117nK',
  },
];
