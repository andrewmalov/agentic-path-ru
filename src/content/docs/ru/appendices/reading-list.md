---
title: Рекомендуемая литература
description: Книги, статьи и ресурсы для углублённого обучения
sidebar:
  order: 2
---

Отобранные ресурсы для дальнейшего погружения в тему агентной инженерии.

## Книги

### Основы

_Классические книги о ИИ, машинном обучении и архитектуре данных._

- [Artificial Intelligence: A Modern Approach (4th ed.)](https://aima.cs.berkeley.edu/) – Stuart Russell & Peter Norvig (2020). Авторитетный учебник по ИИ, охватывающий принципы интеллектуальных агентов, алгоритмы поиска, reasoning и машинное обучение.
- [Software Engineering at Google](https://abseil.io/resources/swe-book) – Titus Winters, Tom Manshreck & Hyrum Wright (2020). Практические инженерные практики для поддержки больших кодовых баз — особенно ценно для команд, адаптирующихся к ИИ-помощи.
- [The Pragmatic Programmer (20th Anniversary Edition)](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/) – Andrew Hunt & David Thomas (2019). Вечное руководство по написанию чистого, гибкого кода, которое остаётся актуальным даже при внедрении ИИ инструментов.
- [Designing Machine Learning Systems](https://huyenchip.com/books/) – Chip Huyen (2022). Комплексное руководство по созданию надёжных ML-powered приложений, от обработки данных до deployment и мониторинга.
- [AI Engineering](https://huyenchip.com/books/) – Chip Huyen (2025). Практический фреймворк для создания приложений на основе foundation моделей, соединяющий традиционную инженерию и современное ИИ разработку.
- [Designing Data-Intensive Applications](https://martin.kleppmann.com/2017/03/27/designing-data-intensive-applications.html) – Martin Klepmann (2017). Глубокое погружение в создание надёжных, масштабируемых систем — критически важно для архитектурного понимания перед добавлением ИИ функций.

### Манифесты и философия

_Фреймворки для мышления о ИИ-помощи в разработке._

- [The o16g Manifesto](https://o16g.com/) – Cory Ondrejka (2025). "Outcome Engineering" — 16 принципов для переориентации разработки на результаты вместо кода.

### Контекст инженерия

_Появляющаяся вид дисциплины предоставления агентам правильной информации вовремя._

- [Context Engineering for AI Agents – Tobi Lutke](https://x.com/tolobi/status/1935533391175041359) - CEO Shopify о том, почему контекст инженерия — новый необходимый навык
- [Context Engineering – Andrej Karpathy](https://x.com/karpathy/status/1937902205765607626) - "Prompt engineering is dead, context engineering is king"
- [AGENTS.md](https://agents.md/) - Открытый формат для постоянного контекста агентов, используемый 60k+ open-source проектами

### Prompt инженерия

_Руководства по эффективному промптингу и взаимодействию с ИИ._

- [Google Cloud Prompt Engineering Guide](https://cloud.google.com/discover/what-is-prompt-engineering) – Комплексное официальное руководство, охватывающее формат промптов, примеры, многоточечные взаимодействия и best practices.
- [DAIR Prompt Engineering Guide](https://www.promptingguide.ai/) – Mostafa Samir et al. Объёмное открытое руководство, агрегирующее самые новые техники.
- [Learn Prompting](https://learnprompting.org/docs/introduction) – Sander Schulhoff et al. (2024). Бесплатный курс с основ до продвинутых техник.
- [The Ultimate Guide to Prompt Engineering](https://www.lakera.ai/blog/prompt-engineering-guide) – Lakera (2025). Современные практики с focus на реальном использовании и security.

### Программная инженерия

_Классические и современные книги по программной инженерии, ценные для ИИ-помощи в разработке._

- [Clean Code](https://gerlacdt.github.io/blog/posts/clean_code/) – Robert C. Martin (2008). Классика по поддерживаемому коду.
- [Refactoring (2nd ed.)](https://martinfowler.com/tags/refactoring.html) – Martin Fowler (2018). Грамотное руководство по рефакторингу.
- [Accelerate](https://itrevolution.com/product/accelerate/) – Nicole Forsgren, Jez Humble & Gene Kim (2018). Исследования высокопроизводительных команд.
- [Agentic AI Engineering](https://mitpressbookstore.mit.edu/book/9798989357789) – Yi Zhou (2025). Руководство по масштабированию агентов до продакшена.

## Научные статьи

### Ключевые статьи об агентах

_Академические статьи, определяющие агентские системы._

- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) – Yao et al. (2022). Ввёл парадигму чередования reasoning traces с действиями.
- [HuggingGPT: Solving AI Tasks with ChatGPT and its Friends](https://arxiv.org/abs/2303.17580) – Shen et al. (2023). Контроллер ИИ, оркестрирующий специализированные модели.
- [Toolformer: Language Models Can Teach Themselves to Use Tools](https://arxiv.org/abs/2302.04761) – Schick et al. (2023). Метод самообучения на использовании API.
- [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) – Park et al. (2023). Архитектура для правдоподобных агентов.
- [Voyager: An Open-Ended Embodied Agent with Large Language Models](https://arxiv.org/abs/2305.16291) – Wang et al. (2023). Первый LLM-driven lifelong learning агент в Minecraft.
- [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) – Shinn et al. (2023). Фреймворк обучения на ошибках через self-reflection.

### Языковые модели для кода

_Исследования по генерации кода._

- [StarCoder: may the source be with you!](https://arxiv.org/abs/2305.06161) - Open-source Code LLM с 8K контекстом.

### Человек-ИИ collaboration

_Исследования о эффективном сотрудничестве._

- [Experimental Evidence on the Productivity Effects of Generative AI](https://www.science.org/doi/10.1126/science.adh2586) – Noy & Zhang (2023, Science). ChatGPT users completed tasks ~40% faster with 18% higher quality.
- [The Productivity Effects of Generative AI: Evidence from GitHub Copilot](https://mit-genai.pubpub.org/pub/v5iixksv/release/2) – Cui et al. (2024). Field experiment showing 12–22% more PRs completed per week.
- [When Humans and AI Work Best Together](https://mitsloan.mit.edu/ideas-made-to-matter/when-humans-and-ai-work-best-together-and-when-each-better-alone) – MIT Sloan (2025). Meta-analysis on human-AI collaboration.
- [Coding on Copilot: Data Suggests Downward Pressure on Code Quality](https://www.gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality) – GitClear (2023). Analysis of 153M lines showing code churn doubled.
- [GitHub Copilot: Asset or Liability?](https://www.sciencedirect.com/science/article/abs/pii/S0164121223001292) – Moradi Dakhel et al. (2023). Copilot valuable for experts who can vet output.

## Онлайн ресурсы

### Блоги и newsletter

_Регулярные источники инсайтов о ИИ и разработке._

- [2025: The year in LLMs – Simon Willison](https://simonwillison.net/2025/Dec/31/the-year-in-llms/) - Комплексный годовой обзор LLM развитий

### Подкасты

_Аудио контент о агентной разработке._

- [The RPI workflow - Build Wiz AI Show (Podcast)](https://open.spotify.com/episode/1OdIYj0SZzhyzFGGoVuELP) - Аудио обсуждение продвинутого ИИ кодинга

### Видео контент

_Туториалы, доклады и демонстрации._

- [The Complete AI Coding Course (2025)](https://www.udemy.com/course/the-complete-ai-coding-course-2025-cursor-ai-v0-vercel/) - Hands-on курс о Cursor и Claude Code

### Сообщества

_Места для контакта с другими в этой области._

- [Kilo Code Discord](https://kilo.love/discord) - Наше сообщество для обсуждения агентной инженерии
- [GitHub Discussions](https://github.com/Kilo-Org/agentic-path/discussions) - Длинные разговоры об этом руководстве

---

## Внесение ресурсов

Нашли отличный ресурс? Этот список растёт через community contributions.

**Как добавить ресурс:**

1. [Откройте PR](/community/contributing/) с вашим добавлением
2. Включите краткое описание того, почему это ценно
3. Поставьте в подходящий раздел

Мы ищем особенно:

- Книги и статьи, которые сформировали ваше понимание
- Туториалы, которые реально помогли стартовать
- Сообщества с хорошими обсуждениями
- Кейсы из реальных реализаций

[Join the conversation on Discord](https://kilo.love/discord) если хотите обсудить, что включить.