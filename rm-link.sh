#!/bin/bash
# 删除链接入口：列出链接 → 输编号 → 自动删+推送
cd "$(dirname "$0")"
python3 rm-link.py
