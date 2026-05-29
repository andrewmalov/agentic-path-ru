// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";
import sitemap from "@astrojs/sitemap";

const ruSidebar = [
  {
    label: "Введение",
    items: [
      {
        label: "Что такое агентная инженерия?",
        slug: "introduction/what-is-agentic-engineering",
      },
      {
        label: "Как работают агенты",
        slug: "introduction/how-agents-work",
      },
      {
        label: "Работа с агентами",
        slug: "introduction/working-with-agents",
      },
      {
        label: "Тенденции и паттерны",
        slug: "introduction/trends-patterns",
      },
      {
        label: "Разработка на основе спецификаций",
        slug: "introduction/patterns/spec-driven-development",
      },
      {
        label: "Ralph Wiggum",
        slug: "introduction/patterns/ralph-wiggum",
      },
      {
        label: "Исследование, План, Реализация (RPI)",
        slug: "introduction/patterns/rpi",
      },
      {
        label: "Инжиниринг результатов (o16g)",
        slug: "introduction/patterns/outcome-engineering",
      },
      {
        label: "OpenClaw",
        slug: "introduction/patterns/openclaw",
      },
    ],
  },
  {
    label: "Для инженеров",
    items: [
      { label: "Начало работы", slug: "engineers/getting-started" },
      {
        label: "Декомпозиция задач",
        slug: "engineers/task-decomposition",
      },
      { label: "Лучшие практики", slug: "engineers/best-practices" },
    ],
  },
  {
    label: "Для тимлидов",
    items: [
      {
        label: "Внедрение агентных инструментов",
        slug: "team-leads/adopting-agentic-tools",
      },
      {
        label: "Измерение влияния",
        slug: "team-leads/measuring-impact",
      },
      {
        label: "Обеспечение качества",
        slug: "team-leads/quality-assurance",
      },
      {
        label: "Команда из одной пиццы",
        slug: "team-leads/1-pizza-teams",
      },
    ],
  },
  {
    label: "Для руководителей",
    items: [
      { label: "Стратегическое видение", slug: "executives/strategic-vision" },
      { label: "ROI фреймворки", slug: "executives/roi-frameworks" },
      {
        label: "Плейбук внедрения",
        slug: "executives/adoption-playbook",
      },
      {
        label: "Безопасность и соблюдение норм",
        slug: "executives/security-compliance",
      },
      {
        label: "AI-Native экономика",
        slug: "executives/ai-native-economics",
      },
    ],
  },
  {
    label: "Прецеденты использования",
    items: [
      {
        label: "Планирование и дизайн",
        slug: "use-cases/planning-design",
      },
      { label: "Реализация", slug: "use-cases/implementation" },
      {
        label: "Развёртывание и эксплуатация",
        slug: "use-cases/deployment-operations",
      },
      {
        label: "Качество и документация",
        slug: "use-cases/quality-documentation",
      },
    ],
  },
  {
    label: "Управление и риски",
    items: [
      { label: "Проверка безопасности", slug: "governance/security-review" },
      { label: "Ответственность", slug: "governance/accountability" },
      { label: "Контрольные точки качества", slug: "governance/quality-gates" },
    ],
  },
  {
    label: "Приложения",
    items: [
      { label: "Глоссарий", slug: "appendices/glossary" },
      { label: "Рекомендуемая литература", slug: "appendices/reading-list" },
      { label: "Шаблоны запросов", slug: "appendices/prompt-templates" },
    ],
  },
  {
    label: "Сообщество",
    items: [
      { label: "Присоединиться к сообществу", slug: "community" },
      { label: "Внесение вклада", slug: "community/contributing" },
    ],
  },
];

export default defineConfig({
  site: "https://path.kilo.ai",
  integrations: [
    starlight({
      title: "Agentic Engineering",
      head: [
        {
          tag: "script",
          attrs: {
            src: "/posthog.js",
            defer: true,
          },
        },
      ],
      components: {
        Footer: "./src/components/Footer.astro",
        Header: "./src/components/Header.astro",
      },
      social: [
        {
          icon: "discord",
          label: "Discord",
          href: "https://kilo.love/discord",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Kilo-Org/agentic-path",
        },
      ],
      customCss: ["./src/styles/custom.css"],
      plugins: [
        catppuccin({
          dark: { flavor: "mocha", accent: "yellow" },
          light: { flavor: "latte", accent: "peach" },
        }),
      ],
      editLink: {
        baseUrl: "https://github.com/Kilo-Org/agentic-path/edit/main/",
      },
      defaultLocale: "en",
      locales: {
        en: { label: "English", lang: "en" },
        ru: { label: "Русский", lang: "ru", sidebar: ruSidebar },
      },
    }),
    sitemap(),
  ],
});