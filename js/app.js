// ============================================
// 导航站渲染逻辑 —— 一般不用改这个文件
// 更新资源请编辑 data.js
// ============================================
(function () {
  "use strict";

  // ---- 主题 ----
  const THEME_KEY = "nav-theme";
  const themeBtn = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  document.documentElement.dataset.theme = savedTheme;
  updateThemeBtn(savedTheme);

  themeBtn.addEventListener("click", function () {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem(THEME_KEY, next);
    updateThemeBtn(next);
  });
  function updateThemeBtn(theme) {
    themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  // ---- 校验 URL（防伪协议注入） ----
  function safeUrl(url) {
    try {
      const u = new URL(url);
      if (u.protocol === "http:" || u.protocol === "https:") return u.href;
    } catch (e) {}
    return null;
  }

  // ---- 渲染 ----
  const content = document.getElementById("content");

  // 站点名 / 标语 / 公告 / 页脚
  if (NAV_DATA.siteName) document.getElementById("siteName").textContent = NAV_DATA.siteName;
  if (NAV_DATA.siteName) document.title = NAV_DATA.siteName + " - 资源导航";
  const notice = document.getElementById("wechatNotice");
  if (NAV_DATA.wechatNotice) {
    notice.textContent = "💬 " + NAV_DATA.wechatNotice;
    notice.hidden = false;
  }
  document.getElementById("footer").innerHTML =
    (NAV_DATA.footer || "") + '<span class="reward-link" id="rewardBtn">☕ 赞赏支持</span>';

  // 打赏弹层
  const rewardModal = document.getElementById("rewardModal");
  document.getElementById("rewardBtn").addEventListener("click", function () {
    rewardModal.hidden = false;
  });
  document.getElementById("rewardClose").addEventListener("click", function () {
    rewardModal.hidden = true;
  });
  rewardModal.addEventListener("click", function (e) {
    if (e.target === rewardModal) rewardModal.hidden = true;
  });

  // 构建 DOM（用 createElement + textContent，防 XSS）
  function buildItem(item) {
    const url = safeUrl(item.url);
    if (!url) return null;

    const a = document.createElement("a");
    a.className = "item";
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const nameRow = document.createElement("div");
    nameRow.className = "name";
    const name = document.createElement("span");
    name.textContent = item.name;
    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.textContent = "↗";
    nameRow.appendChild(name);
    nameRow.appendChild(arrow);
    a.appendChild(nameRow);

    if (item.desc) {
      const desc = document.createElement("div");
      desc.className = "desc";
      desc.textContent = item.desc;
      a.appendChild(desc);
    }

    const meta = document.createElement("div");
    meta.className = "meta";
    if (item.added) {
      const added = document.createElement("span");
      added.textContent = "🕐 " + item.added;
      meta.appendChild(added);
    } else {
      const spacer = document.createElement("span");
      meta.appendChild(spacer);
    }
    if (item.tags && item.tags.length) {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = "#" + item.tags[0];
      meta.appendChild(tag);
    }
    a.appendChild(meta);
    return a;
  }

  function render(groups) {
    content.innerHTML = "";
    const emptyTip = document.getElementById("emptyTip");
    emptyTip.hidden = true;

    let total = 0;
    groups.forEach(function (g) {
      const valid = g.items
        .map(buildItem)
        .filter(function (x) { return x !== null; });
      if (!valid.length) return;
      total += valid.length;

      const group = document.createElement("section");
      group.className = "group";

      const head = document.createElement("div");
      head.className = "group-head";
      const icon = document.createElement("span");
      icon.textContent = g.icon || "📁";
      const name = document.createElement("span");
      name.textContent = g.name;
      const count = document.createElement("span");
      count.className = "count";
      count.textContent = valid.length + " 条";
      head.appendChild(icon);
      head.appendChild(name);
      head.appendChild(count);
      group.appendChild(head);

      const grid = document.createElement("div");
      grid.className = "grid";
      valid.forEach(function (el) { grid.appendChild(el); });
      group.appendChild(grid);

      content.appendChild(group);
    });

    if (!total) emptyTip.hidden = false;
  }

  render(NAV_DATA.groups);

  // ---- 搜索过滤 ----
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", function () {
    const kw = searchInput.value.trim().toLowerCase();
    if (!kw) {
      render(NAV_DATA.groups);
      return;
    }
    const filtered = NAV_DATA.groups
      .map(function (g) {
        return {
          name: g.name,
          icon: g.icon,
          items: g.items.filter(function (item) {
            return (item.name || "").toLowerCase().indexOf(kw) !== -1 ||
                   (item.desc || "").toLowerCase().indexOf(kw) !== -1 ||
                   (item.tags || []).join(" ").toLowerCase().indexOf(kw) !== -1;
          })
        };
      })
      .filter(function (g) { return g.items.length > 0; });
    render(filtered);
  });

  // 键盘快捷键：/ 聚焦搜索
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });
})();
