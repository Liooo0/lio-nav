#!/usr/bin/env python3
# ============================================
# 交互式删除导航链接
# 用法: ./rm-link.sh
# 列出所有链接 → 输入编号（多个用空格）→ 自动删除+推送
# ============================================
import re, subprocess, sys, os
from datetime import datetime

BASE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(BASE, 'data.js')
INDEX = os.path.join(BASE, 'index.html')

src = open(DATA, encoding='utf-8').read()
lines = src.split('\n')

# ---- 收集所有链接块（8空格缩进的 {} 块）----
blocks = []  # (start_idx, end_idx, text)
i = 0
while i < len(lines):
    if lines[i].startswith('        {') and i + 1 < len(lines) and 'name:' in lines[i + 1]:
        j = i
        while j < len(lines) and not (lines[j].strip().startswith('},') or lines[j].strip() == '}'):
            j += 1
        blocks.append((i, j, '\n'.join(lines[i:j + 1])))
        i = j + 1
    else:
        i += 1

if not blocks:
    print('没有找到任何链接')
    sys.exit(1)

# ---- 展示列表 ----
print(f'共 {len(blocks)} 条链接：')
for idx, (_, _, text) in enumerate(blocks, 1):
    m = re.search(r'name: "([^"]+)"', text)
    name = m.group(1) if m else '?'
    print(f'  [{idx:>2}] {name}')

# ---- 输入选择 ----
choice = input('\n输入要删除的编号（多个用空格分隔），直接回车取消: ').strip()
if not choice:
    print('已取消，没有改动')
    sys.exit(0)

nums = []
for part in choice.split():
    try:
        n = int(part)
    except ValueError:
        print(f'无效编号: {part}')
        sys.exit(1)
    if n < 1 or n > len(blocks):
        print(f'编号 {n} 超出范围')
        sys.exit(1)
    nums.append(n)

# ---- 确认 ----
names = []
for n in nums:
    m = re.search(r'name: "([^"]+)"', blocks[n - 1][2])
    names.append(m.group(1) if m else str(n))
print('将删除:', '、'.join(names))
confirm = input('确认？(y/N): ').strip().lower()
if confirm != 'y':
    print('已取消')
    sys.exit(0)

# ---- 删除（从后往前，索引不失效）----
for n in sorted(set(nums), reverse=True):
    s, e, _ = blocks[n - 1]
    del lines[s:e + 1]

# ---- 写回 ----
new_src = '\n'.join(lines)
# 语法自检（用 node 检查）
with open(DATA, 'w', encoding='utf-8') as f:
    f.write(new_src)
check = subprocess.run(['node', '--check', DATA], capture_output=True, text=True)
if check.returncode != 0:
    print('!!! 删除后语法检查失败，已回滚，请截图发给助手:')
    print(check.stderr[:500])
    open(DATA, 'w', encoding='utf-8').write(src)  # 回滚
    sys.exit(1)

# ---- 版本号 + 推送 ----
v = datetime.now().strftime('%Y%m%d%H%M')
idx_src = open(INDEX, encoding='utf-8').read()
idx_src = re.sub(r'data\.js\?v=[0-9a-zA-Z]*', f'data.js?v={v}', idx_src)
open(INDEX, 'w', encoding='utf-8').write(idx_src)

os.chdir(BASE)
subprocess.run(['git', 'add', '-A'], check=True)
subprocess.run(['git', 'commit', '-q', '-m', f'删除链接: {"、".join(names)}'], check=True)
r = subprocess.run(['git', '-c', 'http.proxy=http://127.0.0.1:7890', 'push', '-q', 'origin', 'main'])
if r.returncode == 0:
    print(f'✓ 已删除 {len(nums)} 条并推送上线，1~2 分钟后线上生效')
else:
    print('推送失败（网络/代理问题），可稍后手动: cd ~/lio-nav && git push')
