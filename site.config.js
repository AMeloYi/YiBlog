const CONFIG = {
  // profile setting (required)
  profile: {
    name: "AmeloYi",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Indie Developer @MetaOrder",
    bio: "Harmony in diversity",
    email: "ameloyi@metaorder.ltd",
    linkedin: "",
    github: "AmeloYi",
    instagram: "amelo_yi",
    twitter: "AmeloYi_",
  },
  projects: [
    {
      name: `抽卡模拟器集合(IOS)`,
      href: "/wishsimulatorsIOS",
    },
    {
      name: `抽卡模拟器集合(小程序)`,
      href: "/wishsimulatorsWXMini",
    },
    {
      name: `空气铃铛`,
      href: "/airbell",
    }
  ],
  // blog setting (required)
  blog: {
    title: "YiBlog",
    description: "welcome to YiBlog!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://blog.ameloyi.top/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["抽卡模拟器", "原神", "Swift", "Blog", "Website"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
