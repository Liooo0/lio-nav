// ============================================
// 导航站数据文件 —— 以后更新资源只改这个文件
// 格式：groups 数组，每组一个分类
//   name:  分类名
//   icon:  分类图标（emoji 或留空）
//   items: 链接列表
//     name:  显示名称（必填）
//     url:   链接地址（必填，http/https 开头）
//     desc:  一句话描述（可选）
//     tags:  标签数组（可选，用于搜索）
//     added: 添加日期（可选，格式 2026-08-16）
// ============================================

const NAV_DATA = {
  siteName: "我的储物间",
  slogan: "做最好的互联网资源导航",
  // 公众号引导语（不需要就留空字符串）
  wechatNotice: "关注公众号「你的公众号名」，回复关键词获取更多资源",
  footer: "© 2026 我的储物间 · 本页面仅做资源索引",

  groups: [
    {
      name: "AI 工具",
      icon: "🤖",
      items: [
        {
          name: "ChatGPT",
          url: "https://chat.openai.com",
          desc: "OpenAI 官方对话",
          tags: ["AI", "对话", "GPT"],
          added: "2026-08-16"
        },
        {
          name: "DeepSeek",
          url: "https://chat.deepseek.com",
          desc: "国产免费大模型",
          tags: ["AI", "对话", "免费"],
          added: "2026-08-16"
        },
        {
          name: "通义千问",
          url: "https://tongyi.aliyun.com",
          desc: "阿里 AI 助手",
          tags: ["AI", "对话"],
          added: "2026-08-16"
        }
      ]
    },
    {
      name: "影视动漫",
      icon: "🎬",
      items: [
        {
          name: "示例影视站",
          url: "https://example.com",
          desc: "换成你的影视资源站",
          tags: ["影视", "在线"],
          added: "2026-08-16"
        }
      ]
    },
    {
      name: "实用工具",
      icon: "🛠️",
      items: [
        {
          name: "示例工具站",
          url: "https://example.com",
          desc: "换成你的工具链接",
          tags: ["工具"],
          added: "2026-08-16"
        }
      ]
    }
  ]
};
