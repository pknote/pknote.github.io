# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

胖氪导航是一个静态导航网站，部署在 GitHub Pages（https://gotoo.asia）。

## 常用命令

```bash
# 本地预览
npx http-server -p 3000
# 或
python -m http.server 8080

# 提交并推送
git add <file> && git commit -m "message" && git push
```

## 架构说明

### 页面结构
- `index.html` - 主导航页
- `v2.html` - 重装系统
- `v3.html` - 虚拟黑裙
- `v4.html` - 软件工具
- `v5.html` - 收藏分享
- `v6.html` - 优秀博客
- `admin.html` - 管理后台（生成 HTML 代码）
- `chrome.html` - Chrome 相关

### 技术栈
- Bootstrap 3.4.1 (CDN)
- jQuery 3.7.1 (CDN)
- 霞鹜文楷字体 (LXGW WenKai)
- 不蒜子统计 + 百度统计

### 管理方式
所有页面是纯静态 HTML，通过 `admin.html` 管理链接数据：
1. 打开 admin.html 添加/修改链接
2. 点击「复制」获取 HTML 代码
3. 粘贴到对应页面文件中
4. 提交推送

### Git 配置
- 使用 HTTPS 方式连接 GitHub（已配置 remote: `https://github.com/pknote/pknote.github.io.git`）
- 如遇 SSH 连接问题，检查 `git remote -v`

## 部署
推送到 main 分支后，GitHub Pages 自动部署。
