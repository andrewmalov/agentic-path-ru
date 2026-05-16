export const translations = {
  en: {
    contributeBanner: {
      heading: "Help us grow!",
      body: "Found a great resource? Share it with the community.",
      action: "Contribute on GitHub →",
      dismiss: "Dismiss banner",
    },
    shareButtons: {
      title: "Share this page",
      description: "Learn about agentic engineering",
    },
    footer: {
      communityText: "This guide is community-driven.",
      contributeLink: "Contribute",
      discordLink: "join the conversation",
      separator: "or",
      period: "",
    },
  },
  ru: {
    contributeBanner: {
      heading: "Помогите нам расти!",
      body: "Нашли отличный ресурс? Поделитесь им с сообществом.",
      action: "Внести вклад на GitHub →",
      dismiss: "Скрыть баннер",
    },
    shareButtons: {
      title: "Поделиться этой страницей",
      description: "Узнайте об агентной инженерии",
    },
    footer: {
      communityText: "Это руководство создано сообществом.",
      contributeLink: "Внести вклад",
      discordLink: "присоединиться к разговору",
      separator: "или",
      period: "",
    },
  },
} as const;

export type Locale = keyof typeof translations;

export function getTranslations(locale: Locale = "en") {
  return translations[locale];
}