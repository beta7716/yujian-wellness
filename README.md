# 渝见·康养 | Chongqing Medical Tourism

> 以山城雾色为幕，融合高端医疗与传统中医药疗愈的重庆康养旅游门户。

## 关于

本网站为「渝见康养」品牌站，聚焦重庆医疗旅游，整合：

- **康养线路** — 温泉 / 峡江 / 古镇 / 医美 6+ 主题线路
- **高端体检** — 4 档套餐，与重庆顶级三甲医院合作
- **中医药** — 针灸 / 推拿 / 艾灸 / 药浴 / 膏方 + 名医馆 + 24 节气养生
- **多语种** — 简体中文 / English / 日本語

## 技术栈

- React 18 + TypeScript
- Vite 6
- TailwindCSS 3
- React Router v7
- Zustand
- Lucide React

## 本地开发

```bash
npm install
npm run dev      # 开发服务器 http://localhost:5173
npm run build    # 生产构建
npm run preview  # 预览生产构建
npm run lint     # ESLint
npm run check    # TypeScript 类型检查
```

## 部署

项目使用 `gh-pages` 包部署到 GitHub Pages。

```bash
npm run deploy
```

部署后访问：[https://beta7716.github.io/yujian-wellness/](https://beta7716.github.io/yujian-wellness/)

## 目录结构

```
src/
├─ components/      # 复用组件 (Navbar, Footer, InquiryForm, LanguageSwitcher, ...)
├─ pages/           # 页面 (Home, Routes, RouteDetail, Checkup, TCM, About)
├─ data/            # 静态数据 (线路 / 体检 / 中医 / 证言)
├─ i18n/            # 多语种字典与 Context
├─ store/           # Zustand 状态
├─ utils/           # 工具函数
└─ App.tsx          # 路由根组件
```

## 设计语言

东方禅意 × 山城意境

- 主色：墨青 `#1f2a2e` · 烟白 `#f4efe6` · 朱砂 `#b5371f` · 竹青 `#5b8a72` · 金 `#c5a253`
- 字体：思源宋体 SC + Cormorant Garamond + 思源黑体 SC
- 视觉母题：「山 · 雾 · 汤 · 药 · 城」印章、墨色下划线、滚动进入动画
