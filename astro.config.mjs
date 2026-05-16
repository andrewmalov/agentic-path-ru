// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";
import sitemap from "@astrojs/sitemap";

const sidebar = [
  {
    label: "Introduction",
    translations: { ru: "Введение" },
    items: [
      {
        label: "What is Agentic Engineering?",
        translations: { ru: "Что такое агентная инженерия?" },
        slug: "introduction/what-is-agentic-engineering",
      },
      {
        label: "How Agents Work",
        translations: { ru: "Как работают агенты" },
        slug: "introduction/how-agents-work",
      },
      {
        label: "Working with Agents",
        translations: { ru: "Работа с агентами" },
        slug: "introduction/working-with-agents",
      },
      {
        label: "Trends & Patterns",
        translations: { ru: "Тенденции и закономерности" },
        slug: "introduction/trends-patterns",
      },
    ],
  },
  {
    label: "For Engineers",
    translations: { ru: "Для инженеров" },
    items: [
      { label: "Getting Started", translations: { ru: "Начало работы" }, slug: "engineers/getting-started" },
      {
        label: "Task Decomposition",
        translations: { ru: "Декомпозиция задач" },
        slug: "engineers/task-decomposition",
      },
      { label: "Best Practices", translations: { ru: "Лучшие практики" }, slug: "engineers/best-practices" },
    ],
  },
  {
    label: "For Team Leads",
    translations: { ru: "Для тимлидов" },
    items: [
      {
        label: "Adopting Agentic Tools",
        translations: { ru: "Внедрение агентных инструментов" },
        slug: "team-leads/adopting-agentic-tools",
      },
      {
        label: "Measuring Impact",
        translations: { ru: "Измерение влияния" },
        slug: "team-leads/measuring-impact",
      },
      {
        label: "Quality Assurance",
        translations: { ru: "Обеспечение качества" },
        slug: "team-leads/quality-assurance",
      },
      {
        label: "The 1-Pizza Team",
        translations: { ru: "Команда из одной пиццы" },
        slug: "team-leads/1-pizza-teams",
      },
    ],
  },
  {
    label: "For Executives",
    translations: { ru: "Для руководителей" },
    items: [
      {
        label: "Strategic Vision",
        translations: { ru: "Стратегическое видение" },
        slug: "executives/strategic-vision",
      },
      { label: "ROI Frameworks", translations: { ru: "Фреймворки ROI" }, slug: "executives/roi-frameworks" },
      {
        label: "Adoption Playbook",
        translations: { ru: "Плейбук внедрения" },
        slug: "executives/adoption-playbook",
      },
      {
        label: "Security & Compliance",
        translations: { ru: "Безопасность и соблюдение норм" },
        slug: "executives/security-compliance",
      },
      {
        label: "AI-Native Economics",
        translations: { ru: "Искусственный интеллект в нативной экономике" },
        slug: "executives/ai-native-economics",
      },
    ],
  },
  {
    label: "Use Cases by Phase",
    translations: { ru: "Прецеденты использования по этапам" },
    items: [
      {
        label: "Planning & Design",
        translations: { ru: "Планирование и дизайн" },
        slug: "use-cases/planning-design",
      },
      {
        label: "Implementation",
        translations: { ru: "Реализация" },
        slug: "use-cases/implementation",
      },
      {
        label: "Deployment & Operations",
        translations: { ru: "Развертывание и эксплуатация" },
        slug: "use-cases/deployment-operations",
      },
      {
        label: "Quality & Documentation",
        translations: { ru: "Качество и документация" },
        slug: "use-cases/quality-documentation",
      },
    ],
  },
  {
    label: "Governance & Risk",
    translations: { ru: "Управление и риски" },
    items: [
      {
        label: "Security Review",
        translations: { ru: "Проверка безопасности" },
        slug: "governance/security-review",
      },
      {
        label: "Accountability",
        translations: { ru: "Ответственность" },
        slug: "governance/accountability",
      },
      {
        label: "Quality Gates",
        translations: { ru: "Качество контрольных точек" },
        slug: "governance/quality-gates",
      },
    ],
  },
  {
    label: "Appendices",
    translations: { ru: "Приложения" },
    items: [
      { label: "Glossary", translations: { ru: "Глоссарий" }, slug: "appendices/glossary" },
      { label: "Recommended Reading", translations: { ru: "Рекомендуемая литература" }, slug: "appendices/reading-list" },
      { label: "Prompt Templates", translations: { ru: "Шаблоны запросов" }, slug: "appendices/prompt-templates" },
    ],
  },
  {
    label: "Community",
    translations: { ru: "Сообщество" },
    items: [
      {
        label: "Join the Community",
        translations: { ru: "Присоединиться к сообществу" },
        slug: "community",
      },
      {
        label: "Contributing",
        translations: { ru: "Вклад в проект" },
        slug: "community/contributing",
      },
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
      sidebar,
      editLink: {
        baseUrl: "https://github.com/Kilo-Org/agentic-path/edit/main/src/content/docs/",
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        ru: {
          label: "Русский",
          lang: "ru",
        },
      },
    }),
    sitemap(),
  ],
});