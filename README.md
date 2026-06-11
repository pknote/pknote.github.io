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
├── index.html      # 主页面（胖氪导航）
├── index1.html     # 重装系统
├── index2.html     # 虚拟黑裙
├── index3.html     # 软件工具
├── index4.html     # 收藏分享
├── index5.html     # 优秀博客
├── admin.html      # 管理后台（生成 HTML 代码）
├── navi.js         # 交互脚本
├── navi.css        # 样式文件
├── mainbg.svg      # 背景图片
├── favicon.ico     # 网站图标
├── CNAME           # 域名配置 (gotoo.asia)
├── README.md       # 项目文档
├── ico/            # 链接图标目录
├── img/            # 图片资源
├── blog/           # 博客相关
└── theme/          # 主题相关
```

## 功能特性

- **多页面导航**：6个独立页面（主导航、装系统、虚拟黑裙、软件工具、收藏分享、优秀博客）
- **快速导航按钮**：6个彩色入口按钮，点击跳转对应页面
- **神秘代码**：代码块风格 + 一键复制功能
- **访问统计**：浏览量、访客数展示
- **动态标题**：离开页面时显示趣味提示
- **点击特效**：社会主义核心价值观飘字
- **欢迎消息**：根据来源和时间智能提示
- **一言API**：定时显示随机语句

## 管理方式

### 管理后台（推荐）

1. 打开 https://gotoo.asia/admin.html
2. 添加/修改分类和链接
3. 点击「复制」获取 HTML 代码
4. 粘贴到对应 index.html 文件中
5. 提交推送

### 手动编辑

直接编辑 index.html 中的 HTML 代码。

## 页面说明

| 页面 | 说明 |
|------|------|
| index.html | 胖氪导航 - 主页面 |
| index1.html | 重装系统 |
| index2.html | 虚拟黑裙 |
| index3.html | 软件工具 |
| index4.html | 收藏分享 |
| index5.html | 优秀博客 |

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

### 2026-06-11
- 简化为纯静态 HTML，不再使用 JSON
- 新增多页面支持（index1-5）
- 新增 admin.html 管理后台，支持导入/导出 HTML 代码

### 2026-04-27
- 恢复使用经典版设计（Bootstrap版）
- 精简多余文件（移除新版Tailwind相关文件）
- 神秘代码区域优化：代码块风格 + 复制按钮
- 禁用开发者工具限制代码，便于调试
- 移除页脚"新版导航"链接

---

Copyright © 2026 [GoToo](https://github.com/pknote)