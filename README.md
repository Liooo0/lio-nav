# 我的储物间 —— 静态资源导航站

同款架构复刻自阿虚同学(axutongxue.com)：纯静态单页 + 零依赖 + 任意静态托管。

## 文件结构

```
lio-nav/
├── index.html        # 页面骨架（一般不用改）
├── data.js           # ★ 资源数据 —— 加链接只改这个文件
├── css/style.css     # 样式（可调主题色）
├── js/app.js         # 渲染/搜索/主题逻辑（一般不用改）
├── manifest.json     # PWA 配置
├── favicon.svg       # 站点图标
└── img/reward.png    # ★ 打赏二维码（自己放一张收款码图）
```

## 加一个新链接（只需 3 步）

1. 打开 `data.js`
2. 找到对应分类的 `items` 数组，仿照现有条目加一个对象：

```js
{
  name: "网站名字",
  url: "https://example.com",
  desc: "一句话描述",
  tags: ["标签", "关键词"],   // 用于搜索，可省略
  added: "2026-08-16"         // 添加日期，可省略
}
```

3. 保存，刷新页面即可生效。没有构建、没有编译。

想加新分类？在 `groups` 数组末尾加：

```js
{ name: "新分类名", icon: "🎮", items: [ ... ] }
```

## 本地预览

```bash
cd lio-nav && python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## 部署到 GitHub Pages（免费，约 2 分钟）

前提：GitHub 账号。页面已在仓库根目录。

```bash
cd lio-nav
git init
git add -A
git commit -m "init nav site"
git branch -M main
# 换成你的用户名，下面两条选一条执行
# 新建仓库：gh repo create <你的用户名>/<仓库名> --public --source=. --push
# 已有仓库：git remote add origin https://github.com/<你的用户名>/<仓库名>.git && git push -u origin main
```

然后在 GitHub 仓库 → Settings → Pages → Source 选 `Deploy from a branch` → `main` / root，保存。
等 1~2 分钟，访问 `https://<你的用户名>.github.io/<仓库名>/` 即上线。

## 进阶（可选）

- **挂自己的域名**：买个域名（~60元/年），GitHub Pages 支持自定义域名，加一条 CNAME 即可
- **套 Cloudflare**：域名 NS 转到 Cloudflare 免费版，白嫖 CDN + 防护（阿虚同款玩法）
- **备案**：用 GitHub Pages + Cloudflare 不需要备案；只有源站放国内机房才需要

## 版权提示

导航站收录的链接本身不侵权，但引流影视/破解类资源有封号和法律风险，收录前想清楚。
