// 配置
window.Config = {

  // 站点名
  SiteName: '网站监控',

  // 站点链接
  SiteUrl: 'https://status.pknote.top',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur2483685-d299b091f746cae85d222f68',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '胖氪笔记',
      url: 'https://pknote.top/'
    },
    {
      text: '数据统计',
      url: 'https://v6.51.la/'
    }
  ]
};
