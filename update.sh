#!/bin/bash
# ============================================
# 一键更新导航站：改完 data.js 后运行 ./update.sh
# 自动加版本号（破缓存）+ 提交 + 推送
# ============================================
cd "$(dirname "$0")"

# 1. 改 data.js 的版本号引用（破 CDN/浏览器缓存）
V=$(date +%Y%m%d%H%M)
sed -i '' "s/data\.js?v=[0-9a-z]*/data.js?v=$V/" index.html
echo "版本号已更新: v=$V"

# 2. 提交并推送
git add -A
git commit -q -m "update links $(date '+%m-%d %H:%M')"
git push -q origin main && echo "已推送 ✓ 约2分钟后线上生效（Pages自动部署）"
