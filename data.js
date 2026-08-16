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
// 注：标注"需代理"的站点在国内需科学上网才能打开
// ============================================

const NAV_DATA = {
  siteName: "我的储物间",
  slogan: "做最好的互联网资源导航",
  // 公众号引导语（不需要就留空字符串）
  wechatNotice: "关注公众号「你的公众号名」，回复关键词获取更多资源",
  footer: "© 2026 我的储物间 · 本页面仅做资源索引",

  groups: [
    {
      name: "AI 对话",
      icon: "🤖",
      items: [
        {
          name: "ChatGPT",
          url: "https://chatgpt.com",
          desc: "OpenAI 官方对话（需代理）",
          tags: ["AI", "对话", "GPT", "代理"],
          added: "2026-08-16"
        },
        {
          name: "Claude",
          url: "https://claude.ai",
          desc: "Anthropic 出品，长文写作强（需代理）",
          tags: ["AI", "对话", "Anthropic", "代理"],
          added: "2026-08-16"
        },
        {
          name: "Gemini",
          url: "https://gemini.google.com",
          desc: "Google 多模态模型（需代理）",
          tags: ["AI", "对话", "Google", "代理"],
          added: "2026-08-16"
        },
        {
          name: "DeepSeek",
          url: "https://chat.deepseek.com",
          desc: "国产开源大模型，免费够用",
          tags: ["AI", "对话", "免费", "国产"],
          added: "2026-08-16"
        },
        {
          name: "Kimi",
          url: "https://kimi.moonshot.cn",
          desc: "月之暗面，长文本阅读强",
          tags: ["AI", "对话", "长文本"],
          added: "2026-08-16"
        },
        {
          name: "通义千问",
          url: "https://tongyi.aliyun.com",
          desc: "阿里 AI 助手",
          tags: ["AI", "对话", "阿里"],
          added: "2026-08-16"
        },
        {
          name: "豆包",
          url: "https://www.doubao.com",
          desc: "字节跳动 AI 助手",
          tags: ["AI", "对话", "字节"],
          added: "2026-08-16"
        },
        {
          name: "文心一言",
          url: "https://yiyan.baidu.com",
          desc: "百度 AI 助手",
          tags: ["AI", "对话", "百度"],
          added: "2026-08-16"
        },
        {
          name: "秘塔AI搜索",
          url: "https://metaso.cn",
          desc: "无广告 AI 搜索引擎，资料整理利器",
          tags: ["AI", "搜索", "无广告"],
          added: "2026-08-16"
        },
        {
          name: "纳米AI搜索",
          url: "https://www.n.cn",
          desc: "360 出品的 AI 搜索",
          tags: ["AI", "搜索"],
          added: "2026-08-16"
        }
      ]
    },
    {
      name: "AI 创作",
      icon: "🎨",
      items: [
        {
          name: "即梦AI",
          url: "https://jimeng.jianying.com",
          desc: "字节出品，文生图/视频",
          tags: ["AI", "绘画", "视频", "字节"],
          added: "2026-08-16"
        },
        {
          name: "可灵AI",
          url: "https://klingai.com",
          desc: "快手出品，视频生成标杆",
          tags: ["AI", "视频"],
          added: "2026-08-16"
        },
        {
          name: "海螺AI",
          url: "https://hailuoai.com",
          desc: "MiniMax，视频/语音生成",
          tags: ["AI", "视频", "语音"],
          added: "2026-08-16"
        },
        {
          name: "LiblibAI",
          url: "https://www.liblib.art",
          desc: "国内 AI 绘画模型分享站",
          tags: ["AI", "绘画", "模型"],
          added: "2026-08-16"
        },
        {
          name: "PixVerse",
          url: "https://pixverse.ai",
          desc: "AI 视频生成工具",
          tags: ["AI", "视频"],
          added: "2026-08-16"
        },
        {
          name: "Runway",
          url: "https://runwayml.com",
          desc: "专业 AI 视频工具（需代理）",
          tags: ["AI", "视频", "代理"],
          added: "2026-08-16"
        },
        {
          name: "Suno",
          url: "https://suno.com",
          desc: "AI 音乐生成，做 BGM 神器（需代理）",
          tags: ["AI", "音乐", "BGM", "代理"],
          added: "2026-08-16"
        },
        {
          name: "Midjourney",
          url: "https://www.midjourney.com",
          desc: "文生图标杆（需代理）",
          tags: ["AI", "绘画", "代理"],
          added: "2026-08-16"
        }
      ]
    },
    {
      name: "开发者资源",
      icon: "💻",
      items: [
        {
          name: "GitHub",
          url: "https://github.com",
          desc: "全球最大代码托管平台",
          tags: ["代码", "开源"],
          added: "2026-08-16"
        },
        {
          name: "MDN Web 文档",
          url: "https://developer.mozilla.org/zh-CN/",
          desc: "前端开发官方文档",
          tags: ["文档", "前端", "HTML", "JS"],
          added: "2026-08-16"
        },
        {
          name: "菜鸟教程",
          url: "https://www.runoob.com",
          desc: "中文编程入门教程",
          tags: ["教程", "入门"],
          added: "2026-08-16"
        },
        {
          name: "freeCodeCamp",
          url: "https://www.freecodecamp.org",
          desc: "免费学编程，含中文课程",
          tags: ["教程", "免费", "英文"],
          added: "2026-08-16"
        },
        {
          name: "Stack Overflow",
          url: "https://stackoverflow.com",
          desc: "程序员问答社区（需代理）",
          tags: ["问答", "代理"],
          added: "2026-08-16"
        },
        {
          name: "掘金",
          url: "https://juejin.cn",
          desc: "中文技术社区，文章质量高",
          tags: ["社区", "文章"],
          added: "2026-08-16"
        },
        {
          name: "LeetCode 力扣",
          url: "https://leetcode.cn",
          desc: "算法刷题，面试必备",
          tags: ["算法", "面试", "刷题"],
          added: "2026-08-16"
        },
        {
          name: "regex101",
          url: "https://regex101.com",
          desc: "正则表达式在线调试",
          tags: ["正则", "调试"],
          added: "2026-08-16"
        },
        {
          name: "在线工具",
          url: "https://tool.lu",
          desc: "程序员常用工具集合",
          tags: ["工具", "集合"],
          added: "2026-08-16"
        },
        {
          name: "CodePen",
          url: "https://codepen.io",
          desc: "前端代码在线演示分享",
          tags: ["前端", "演示"],
          added: "2026-08-16"
        }
      ]
    },
    {
      name: "学习提升",
      icon: "📚",
      items: [
        {
          name: "中国大学MOOC",
          url: "https://www.icourse163.org",
          desc: "网易与高校合办的公开课",
          tags: ["课程", "大学"],
          added: "2026-08-16"
        },
        {
          name: "国家智慧教育平台",
          url: "https://www.smartedu.cn",
          desc: "教育部官方免费课程平台",
          tags: ["课程", "免费", "官方"],
          added: "2026-08-16"
        },
        {
          name: "学堂在线",
          url: "https://www.xuetangx.com",
          desc: "清华出品的慕课平台",
          tags: ["课程", "清华"],
          added: "2026-08-16"
        },
        {
          name: "可汗学院",
          url: "https://zh.khanacademy.org",
          desc: "全球知名免费教育平台",
          tags: ["课程", "免费"],
          added: "2026-08-16"
        },
        {
          name: "Coursera",
          url: "https://www.coursera.org",
          desc: "国际名校课程（部分需代理）",
          tags: ["课程", "国际", "代理"],
          added: "2026-08-16"
        },
        {
          name: "网易公开课",
          url: "https://open.163.com",
          desc: "TED、名校讲座等中文字幕",
          tags: ["课程", "讲座"],
          added: "2026-08-16"
        },
        {
          name: "TED",
          url: "https://www.ted.com",
          desc: "全球思想演讲（有中文字幕）",
          tags: ["演讲", "英语"],
          added: "2026-08-16"
        },
        {
          name: "多邻国",
          url: "https://www.duolingo.com",
          desc: "免费学外语，游戏化打卡",
          tags: ["英语", "外语"],
          added: "2026-08-16"
        },
        {
          name: "阮一峰的网络日志",
          url: "https://www.ruanyifeng.com/blog/",
          desc: "科技随笔+每周周刊",
          tags: ["博客", "周刊"],
          added: "2026-08-16"
        },
        {
          name: "哔哩哔哩",
          url: "https://www.bilibili.com",
          desc: "学习教程聚集地（搜索教程）",
          tags: ["视频", "教程"],
          added: "2026-08-16"
        }
      ]
    },
    {
      name: "效率工具",
      icon: "🛠️",
      items: [
        {
          name: "Notion",
          url: "https://www.notion.so",
          desc: "全能笔记/知识库（建议挂代理更稳）",
          tags: ["笔记", "知识库"],
          added: "2026-08-16"
        },
        {
          name: "Obsidian",
          url: "https://obsidian.md",
          desc: "本地 Markdown 笔记，数据在自己手里",
          tags: ["笔记", "Markdown", "本地"],
          added: "2026-08-16"
        },
        {
          name: "uTools",
          url: "https://www.u.tools",
          desc: "效率工具箱，快捷键启动一切",
          tags: ["工具", "效率"],
          added: "2026-08-16"
        },
        {
          name: "Everything",
          url: "https://www.voidtools.com/zh-cn/",
          desc: "Windows 秒搜文件名",
          tags: ["搜索", "文件"],
          added: "2026-08-16"
        },
        {
          name: "滴答清单",
          url: "https://www.dida365.com",
          desc: "待办清单，跨平台同步",
          tags: ["待办", "效率"],
          added: "2026-08-16"
        },
        {
          name: "腾讯文档",
          url: "https://docs.qq.com",
          desc: "在线协作文档，免费用",
          tags: ["文档", "协作"],
          added: "2026-08-16"
        },
        {
          name: "Photopea",
          url: "https://www.photopea.com",
          desc: "网页版 Photoshop，免费",
          tags: ["图片", "PS", "免费"],
          added: "2026-08-16"
        },
        {
          name: "TinyPNG",
          url: "https://tinypng.com",
          desc: "图片压缩神器",
          tags: ["图片", "压缩"],
          added: "2026-08-16"
        },
        {
          name: "Convertio",
          url: "https://convertio.co/zh/",
          desc: "在线格式转换，支持各种文件",
          tags: ["转换"],
          added: "2026-08-16"
        },
        {
          name: "Smallpdf",
          url: "https://smallpdf.com",
          desc: "PDF 压缩/合并/转换",
          tags: ["PDF"],
          added: "2026-08-16"
        },
        {
          name: "DeepL",
          url: "https://www.deepl.com/translator",
          desc: "翻译质量最好之一",
          tags: ["翻译"],
          added: "2026-08-16"
        },
        {
          name: "剪映网页版",
          url: "https://www.capcut.cn/",
          desc: "在线视频剪辑，有字幕功能",
          tags: ["视频", "剪辑"],
          added: "2026-08-16"
        },
        {
          name: "Speedtest",
          url: "https://www.speedtest.cn",
          desc: "网速测试",
          tags: ["测速"],
          added: "2026-08-16"
        }
      ]
    },
    {
      name: "设计素材",
      icon: "🎨",
      items: [
        {
          name: "Pexels",
          url: "https://www.pexels.com/zh-cn/",
          desc: "免费高清图库，可商用",
          tags: ["图库", "免费", "商用"],
          added: "2026-08-16"
        },
        {
          name: "Pixabay",
          url: "https://pixabay.com/zh/",
          desc: "免费图片/视频/音效素材",
          tags: ["图库", "免费", "素材"],
          added: "2026-08-16"
        },
        {
          name: "花瓣网",
          url: "https://huaban.com",
          desc: "国内设计灵感采集",
          tags: ["灵感", "设计"],
          added: "2026-08-16"
        },
        {
          name: "iconfont",
          url: "https://www.iconfont.cn",
          desc: "阿里巴巴图标库，前端常用",
          tags: ["图标", "前端"],
          added: "2026-08-16"
        },
        {
          name: "Flaticon",
          url: "https://www.flaticon.com",
          desc: "海量图标素材",
          tags: ["图标"],
          added: "2026-08-16"
        },
        {
          name: "Color Hunt",
          url: "https://colorhunt.co",
          desc: "配色方案灵感",
          tags: ["配色", "设计"],
          added: "2026-08-16"
        },
        {
          name: "Coolors",
          url: "https://coolors.co",
          desc: "一键生成配色方案",
          tags: ["配色", "设计"],
          added: "2026-08-16"
        },
        {
          name: "Figma",
          url: "https://www.figma.com",
          desc: "在线设计协作工具（需代理）",
          tags: ["设计", "协作", "代理"],
          added: "2026-08-16"
        }
      ]
    },
    {
      name: "摄影天文",
      icon: "📷",
      items: [
        {
          name: "NASA 每日天文图",
          url: "https://apod.nasa.gov/",
          desc: "每天一张天文美图（英文）",
          tags: ["天文", "每日", "NASA"],
          added: "2026-08-16"
        },
        {
          name: "Stellarium",
          url: "https://stellarium.org/",
          desc: "开源星象仪，认星星必备",
          tags: ["天文", "星图"],
          added: "2026-08-16"
        },
        {
          name: "Stellarium Web",
          url: "https://stellarium-web.org/",
          desc: "网页版星图，免安装",
          tags: ["天文", "星图"],
          added: "2026-08-16"
        },
        {
          name: "500px",
          url: "https://500px.com",
          desc: "国际摄影社区",
          tags: ["摄影", "社区"],
          added: "2026-08-16"
        },
        {
          name: "图虫",
          url: "https://tuchong.com",
          desc: "国内摄影社区",
          tags: ["摄影", "社区"],
          added: "2026-08-16"
        },
        {
          name: "蜂鸟网",
          url: "https://www.fengniao.com",
          desc: "摄影器材评测与教程",
          tags: ["摄影", "器材"],
          added: "2026-08-16"
        },
        {
          name: "Lonely Speck",
          url: "https://www.lonelyspeck.com",
          desc: "星空摄影教程站（英文）",
          tags: ["星空", "摄影"],
          added: "2026-08-16"
        }
      ]
    },
    {
      name: "游戏开发",
      icon: "🎮",
      items: [
        {
          name: "Godot",
          url: "https://godotengine.org",
          desc: "开源免费游戏引擎，轻量好上手",
          tags: ["引擎", "开源", "免费"],
          added: "2026-08-16"
        },
        {
          name: "itch.io",
          url: "https://itch.io",
          desc: "独立游戏发布/素材（需代理）",
          tags: ["独立游戏", "发布", "代理"],
          added: "2026-08-16"
        },
        {
          name: "Steam",
          url: "https://store.steampowered.com",
          desc: "游戏商店，独立游戏聚集地",
          tags: ["游戏", "商店"],
          added: "2026-08-16"
        }
      ]
    },
    {
      name: "资讯周刊",
      icon: "📰",
      items: [
        {
          name: "少数派",
          url: "https://sspai.com",
          desc: "高效工作与数字生活",
          tags: ["效率", "数码"],
          added: "2026-08-16"
        },
        {
          name: "36氪",
          url: "https://36kr.com",
          desc: "科技创投新闻",
          tags: ["科技", "新闻"],
          added: "2026-08-16"
        },
        {
          name: "IT之家",
          url: "https://www.ithome.com",
          desc: "IT 科技资讯",
          tags: ["科技", "新闻"],
          added: "2026-08-16"
        },
        {
          name: "阮一峰周刊",
          url: "https://github.com/ruanyf/weekly",
          desc: "科技爱好者周刊，每周必读",
          tags: ["周刊", "科技"],
          added: "2026-08-16"
        },
        {
          name: "Hacker News",
          url: "https://news.ycombinator.com",
          desc: "硅谷程序员头条（需代理）",
          tags: ["科技", "程序员", "代理"],
          added: "2026-08-16"
        },
        {
          name: "小宇宙",
          url: "https://www.xiaoyuzhoufm.com",
          desc: "中文播客平台",
          tags: ["播客", "音频"],
          added: "2026-08-16"
        }
      ]
    }
  ]
};
