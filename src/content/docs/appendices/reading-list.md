---
title: Рекомендуемое чтение
description: Книги, статьи и ресурсы для углублённого изучения
sidebar:
  order: 2
---

Отобранные ресурсы для углубления в темы агентной инженерии. Этот список будет обновляться по мере развития области.

## Книги

### Основы

_Фундаментальные книги по AI, ML-системам и архитектуре данных._

- [Artificial Intelligence: A Modern Approach (4th ed.)](https://aima.cs.berkeley.edu/) – Stuart Russell & Peter Norvig (2020). Авторитетный учебник по AI, охватывающий принципы интеллектуальных агентов, алгоритмы поиска, рассуждение и основы машинного обучения.
- [Software Engineering at Google](https://abseil.io/resources/swe-book) – Titus Winters, Tom Manshreck & Hyrum Wright (2020). Практические инженерные практики для поддержания больших кодовых баз — актуально для команд, внедряющих AI-ассистированные рабочие процессы.
- [The Pragmatic Programmer (20th Anniversary Edition)](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/) – Andrew Hunt & David Thomas (2019). Вечные советы по написанию чистого, гибкого кода, которые остаются актуальными даже с появлением AI-инструментов.
- [Designing Machine Learning Systems](https://huyenchip.com/books/) – Chip Huyen (2022). Холистический гид по построению надёжных ML-приложений — от обработки данных до развёртывания и мониторинга.
- [AI Engineering](https://huyenchip.com/books/) – Chip Huyen (2025). Практический фреймворк для построения приложений с базовыми моделями, связывающий традиционную инженерию и современную AI-разработку.
- [Designing Data-Intensive Applications](https://martin.kleppmann.com/2017/03/27/designing-data-intensive-applications.html) – Martin Kleppmann (2017). Глубокое погружение в надёжные, масштабируемые системы — критически важные архитектурные знания перед добавлением AI-функций.

### Манифесты и философия

_Фреймворки для мышления об AI-ассистированной разработке на более высоком уровне._

- [The o16g Manifesto](https://o16g.com/) – Cory Ondrejka (2025). "Инженерия результатов" — 16 принципов для переориентации разработки вокруг результатов, а не кода. Аргументирует управление стоимостью (токенами), а не мощностью (человеко-часами), измерение успеха проверенным влиянием и рассмотрение бэклога как пережитка человеческих ограничений. От CTO Onebrief, со-создателя Second Life и бывшего руководителя инженерии в Google и Meta.

### Контекстная инженерия

_Появляющаяся дисциплина предоставления агентам правильной информации в правильное время._

- [Context Engineering for AI Agents – Tobi Lutke](https://x.com/tolobi/status/1935533391175041359) - CEO Shopify о том, почему контекстная инженерия — новый навык
- [Context Engineering – Andrej Karpathy](https://x.com/karpathy/status/1937902205765607626) - "Промпт-инженерия мертва, контекстная инженерия — король"
- [AGENTS.md](https://agents.md/) - Открытый формат для постоянного контекста агентов, используется 60k+ open-source проектами

### Промпт-инженерия

_Гиды по эффективному промптингу и взаимодействию с AI._

- [Google Cloud Prompt Engineering Guide](https://cloud.google.com/discover/what-is-prompt-engineering) – Комплексный официальный гид, охватывающий формат промптов, примеры, мульти-turn взаимодействия и лучшие практики.
- [DAIR Prompt Engineering Guide](https://www.promptingguide.ai/) – Mostafa Samir et al. Обширный open-source гид, агрегирующий последние техники — от базового дизайна до продвинутых стратегий типа многошагового рассуждения и использования инструментов.
- [Learn Prompting](https://learnprompting.org/docs/introduction) – Sander Schulhoff et al. (2024). Бесплатный курс, охватывающий основы и продвинутые техники, используется 3M+ пользователями, включая команды Fortune 500.
- [The Ultimate Guide to Prompt Engineering](https://www.lakera.ai/blog/prompt-engineering-guide) – Lakera (2025). Современные лучшие практики с фокусом на реальное использование и безопасность, включая защиту от prompt injection.
- **Prompt Engineering for Generative AI** – James Phoenix & Mike Taylor (2023). Практическая книга о принципах и паттернах в разных доменах — NLP, генерация изображений и генерация кода.
- **Prompt Engineering for LLMs** – John Berryman & Albert Ziegler (2024). Продвинутые стратегии от разработчиков GitHub Copilot, охватывающие управление токенами, few-shot промптинг и рабочие паттерны.

### Программная инженерия

_Классические и современные тексты по software engineering, релевантные AI-ассистированной разработке._

- [Clean Code](https://gerlacdt.github.io/blog/posts/clean_code/) – Robert C. Martin (2008). Классический мануал по поддерживаемому коду — критичен для распознавания и рефакторинга AI-сгенерированного кода в хорошо структурированные дизайны.
- [Refactoring (2nd ed.)](https://martinfowler.com/tags/refactoring.html) – Martin Fowler (2018). Семейный гид по систематическому реструктурированию кода, незаменимый для постоянного улучшения AI-написанного кода.
- [Accelerate](https://itrevolution.com/product/accelerate/) – Nicole Forsgren, Jez Humble & Gene Kim (2018). Data-driven исследование высокопроизводительных команд, представляющее DORA-метрики — важная базовая линия при интеграции AI в рабочие процессы.
- [Agentic AI Engineering](https://mitpressbookstore.mit.edu/book/9798989357789) – Yi Zhou (2025). Футуристический гид, переосмысливающий software engineering для AI-агентов, охватывающий Agentic Stack и модели зрелости для масштабирования агентов до продакшена.
- **The LLM Engineering Handbook** – Paul Iusztin & Maxime Labonne (2024). Операционный гид, охватывающий промпт-инженерию, fine-tuning, RAG и паттерны для внедрения LLM в продакшен.
- [A Philosophy of Software Design (2nd ed.)](https://web.stanford.edu/~ouster/cgi-bin/book.php) – John Ousterhout (2021). Лаконичные эссе об управлении сложностью — уроки, которые дополняют AI-инструменты, помогая разработчикам формировать архитектуру и держать сложность под контролем.

## Исследовательские статьи

### Ключевые статьи об агентах

_Академические статьи, определяющие агентные системы и паттерны._

- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) – Yao et al. (2022). Представила парадигму чередования рассуждений с действиями, позволяя LLMs собирать информацию и корректировать планы на лету. Основа для многих агентных фреймворков.
- [HuggingGPT: Solving AI Tasks with ChatGPT and its Friends](https://arxiv.org/abs/2303.17580) – Shen et al. (2023). LLM-powered контроллер, оркестрирующий специализированные модели для сложных мультимодальных задач, используя естественный язык как связующее звено между инструментами.
- [Toolformer: Language Models Can Teach Themselves to Use Tools](https://arxiv.org/abs/2302.04761) – Schick et al. (2023). Метод Meta AI для LLMs самообучаться на использовании API, учась когда и как стратегически вызывать внешние инструменты.
- [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) – Park et al. (2023). Архитектура для правдоподобных симулированных агентов с долгосрочной памятью и планированием, демонстрирующая человеческое поведение в течение extended периодов.
- [Voyager: An Open-Ended Embodied Agent with Large Language Models](https://arxiv.org/abs/2305.16291) – Wang et al. (2023). Первый LLM-driven агент с непрерывным обучением в Minecraft, непрерывно исследующий и накапливающий навыки без человеческого вмешательства.
- [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) – Shinn et al. (2023). Фреймворк, позволяющий агентам учиться на ошибках через саморефлексию на естественном языке, без формального fine-tuning.

### Языковые модели для кода

_Исследования по генерации, пониманию и синтезу кода._

- [StarCoder: may the source be with you!](https://arxiv.org/abs/2305.06161) - Open-source Code LLM с 8K контекстом и возможностями infilling

### Человеко-AI коллаборация

_Исследования о том, как люди и AI-системы эффективно работают вместе._

- [Experimental Evidence on the Productivity Effects of Generative AI](https://www.science.org/doi/10.1126/science.adh2586) – Noy & Zhang (2023, Science). Переломное исследование, показывающее, что пользователи ChatGPT завершали задачи примерно на 40% быстрее с качеством на 18% выше — наименее квалифицированные участники получили больше всего пользы.
- [The Productivity Effects of Generative AI: Evidence from GitHub Copilot](https://mit-genai.pubpub.org/pub/v5iixksv/release/2) – Cui et al. (2024). Полевой эксперимент в Microsoft/Accenture, показывающий на 12–22% больше PR в неделю с доступом к Copilot.
- [When Humans and AI Work Best Together](https://mitsloan.mit.edu/ideas-made-to-matter/when-humans-and-ai-work-best-together-and-when-each-better-alone) – MIT Sloan (2025). Мета-анализ, находящий, что коллаборация сияет, когда люди превосходят AI по отдельности — успех требует калибровки, когда доверять AI.
- [Coding on Copilot: Data Suggests Downward Pressure on Code Quality](https://www.gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality) – GitClear (2023). Анализ 153M строк, показывающий, что code churn удвоился с использованием AI — командам нужны практики для поддержания качества.
- [GitHub Copilot: Asset or Liability?](https://www.sciencedirect.com/science/article/abs/pii/S0164121223001292) – Moradi Dakhel et al. (2023). Copilot ценен для экспертов, которые могут проверять вывод, но потенциальная ответственность для новичков, которые принимают неисправные предложения.

## Онлайн-ресурсы

### Блоги и рассылки

_Регулярные источники понимания AI и разработки._

- [2025: The year in LLMs – Simon Willison](https://simonwillison.net/2025/Dec/31/the-year-in-llms/) - Комплексный ежегодный обзор LLM-разработок

### Подкасты

_Аудиоконтент об агентной разработке._

- [The RPI workflow - Build Wiz AI Show (Podcast)](https://open.spotify.com/episode/1OdIYj0SZzhyzFGGoVuELP) - Аудиообсуждение продвинутого AI-кодинга

### Видеоконтент

_Туториалы, выступления и демонстрации._

- [The Complete AI Coding Course (2025)](https://www.udemy.com/course/the-complete-ai-coding-course-2025-cursor-ai-v0-vercel/) - Практический курс по Cursor и Claude Code

### Сообщества

_Места для связи с другими, работающими в этом пространстве._

- [Kilo Code Discord](https://kilo.love/discord) - Наше сообщество для обсуждения агентной инженерии
- [GitHub Discussions](https://github.com/Kilo-Org/agentic-path/discussions) - Более длинные разговоры об этом руководстве

---

## Добавление ресурсов

Знаете отличный ресурс, который мы должны включить? Этот список растёт через вклад сообщества.

**Как добавить ресурс:**

1. [Откройте PR](/community/contributing/) с вашим дополнением
2. Включите краткое описание, почему это ценно
3. Поместите его в соответствующую секцию

Мы особенно ищем:

- Книги и статьи, которые сформировали ваше понимание
- Туториалы, которые реально помогли вам начать
- Сообщества, где вы нашли хорошие обсуждения
- Примеры из практики реальных реализаций

[Присоединяйтесь к разговору в Discord](https://kilo.love/discord), если хотите обсудить, что должно быть включено.

---

_Этот список активно поддерживается сообществом. Ваши рекомендации помогают другим учиться быстрее._
