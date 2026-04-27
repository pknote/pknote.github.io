# 胖氪导航 (GoToo)

> 专注互联网精选资源收藏与分享

一个简洁的静态导航网站，采用经典 Bootstrap 设计风格。

## 技术栈

| 类型 | 技术 |
|------|------|
| 前端框架 | Bootstrap 3.4.1 (CDN) |
| JS库 | jQuery 3.7.1 (CDN) |
| 字体 | 霞鹜文楷 (LXGW WenKai) |
| 统计 | 不蒜子 + 百度统计 |

## 文件结构

```
D:\pknav\
├── index.html      # 主页面
├── navi.js         # 交互脚本
├── navi.css        # 样式文件
├── links.json      # 链接数据（核心配置）
├── mainbg.svg      # 背景图片
├── favicon.ico     # 网站图标
├── CNAME           # 域名配置 (gotoo.asia)
├── README.md       # 项目文档
└── ico/            # 链接图标目录
    ├── navilogo.png
    ├── bilibili.png
    ├── doubao.png
    └── ... (共24个)
```

## 功能特性

- **分类导航**：常用链接、朋友圈、优质博客
- **快速导航按钮**：6个彩色入口按钮
- **神秘代码**：一键复制功能
- **访问统计**：浏览量、访客数展示
- **动态标题**：离开页面时显示趣味提示
- **点击特效**：社会主义核心价值观飘字
- **欢迎消息**：根据来源和时间智能提示
- **一言API**：定时显示随机语句

## 数据配置

链接数据存储于 `links.json`，修改此文件即可更新导航内容：

```json
{
  "常用": [
    { "name": "名称", "url": "链接", "icon": "/ico/图标.png" }
  ],
  "导航": [
    { "name": "名称", "url": "链接", "class": "bg1" }
  ],
  "神秘代码": {
    "title": "[标签]",
    "code": "代码内容"
  },
  "朋友圈": [
    { "name": "名称", "url": "链接", "desc": "描述" }
  ],
  "优质博客": [
    { "name": "名称", "url": "链接", "desc": "描述", "border": "b1" }
  ]
}
```

### 字段说明

| 字段 | 说明 |
|------|------|
| `name` | 显示名称 |
| `url` | 链接地址 |
| `icon` | 图标路径（常用链接） |
| `desc` | 描述文字（朋友圈/博客） |
| `class` | 按钮样式类（导航按钮：bg1-bg6） |
| `border` | 边框样式类（优质博客：b1/b6） |
| `rel` | 可选，链接rel属性 |

## 部署信息

- **域名**：https://gotoo.asia/
- **仓库**：GitHub Pages 静态托管
- **分支**：main

## 本地开发

```bash
# 启动本地预览
npx http-server -p 3000

# 或使用 Python
python -m http.server 8080
```

访问 http://localhost:3000 查看效果。

## 更新日志

### 2026-04-27
- 恢复使用经典版设计（Bootstrap版）
- 精简多余文件（移除新版Tailwind相关文件）
- 禁用开发者工具限制代码，便于调试

---

Copyright © 2026 [GoToo](https://github.com/pknote)