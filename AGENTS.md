# AGENTS.md

## Стек

- **Next.js** 16 (App Router)
- **React** 19
- **TypeScript** 5 (строгий режим)
- **SCSS Modules** — стили изолированы, импорт через `@import` (не `@use`)
- **Husky** + **lint-staged** + **Commitlint**

## Правила

### Компоненты

- `export default function` для страниц
- `export const` + именованный экспорт для компонентов
- `forwardRef` только если ref реаально используется
- `'use client'` в первой строке, если нужен клиентский рендер
- Типы пропсов — отдельный файл `Component.types.ts` рядом с компонентом

### Типизация

- Все пропсы типизированы
- Каждый компонент имеет `displayName`
- Общие типы в `src/types/`, локальные — `Component.types.ts`
- `as` для кастов типов — только когда TypeScript не выводит сам

### Стили

- SCSS Modules (`.module.scss`) для всех компонентов
- Глобальные стили — `src/styles/globals.scss`, переменные — `_variables.scss`, миксины — `_mixins.scss`
- Адаптивная вёрстка: `clamp()`, `vw`, `vh`, `%`, медиа-запросы
- `px` для мелких значений, `rem` — редко
- Брейкпоинты: `$tablet: 768px`, `$desktop: 1440px`
- Пустые классы (`//`) не оставляем — удаляем или заполняем стилями

### Хуки

- Кастомные хуки в `src/hooks/`
- Хук должен начинаться с `use`
- Типы возврата — отдельный type в начале файла

### Данные

- Моковые данные в `src/data/`
- Плоские объекты, типы экспортируются
- При интеграции с API замена только в этом слое

### ESLint / Prettier

- `console.log` только для отладки, перед коммитом — удалять
- Неиспользуемые импорты — удалять (правило `unused-imports/no-unused-imports`)
- Табуляция: 4 пробела для TS/TSX, 2 пробела для SCSS/JSON

## Структура

```text
src/
├── app/ # Страницы (App Router)
│ ├── (routes)/ # Маршруты (/about, /services, ...)
│ ├── layout.tsx # Корневой layout (Header + Footer)
│ ├── page.tsx # Главная
│ └── not-found.tsx # 404
├── components/
│ ├── ui/ # Атомарные (Container, Section, Icon, Logo, Preloader)
│ ├── layout/ # Шапка/подвал (Header, Footer)
│ └── sections/ # Секции страниц (SliderSection, StatsSection, MapSection)
├── hooks/ # useLockedBody, useFocusTrap, useActiveSlide, useCountUp, useInView, useMediaQuery
├── data/ # slides, stats, mapPoints, navigation, footer
├── types/ # common.types.ts
├── constants/ # breakpoints.ts
├── utils/ # cn.ts (clsx-обёртка)
└── styles/ # globals, variables, mixins
```

## Цвета

```scss
$color-primary: #b1e02d; // Основной (кнопки, ссылки, акценты)
$color-primary-light: #c5e85a;
$color-primary-dark: #8fb824;
$color-secondary: #167d28fe; // Заголовки секций
$color-white: #ffffff;
$color-black: #1a1a2e; // Текст, фон футера
$color-gray-100: #f5f3ff; // Фон секций
$color-gray-500: #5c5775; // Второстепенный текст
```

## Соглашения по коммитам

```text
Conventional commits:

feat: — новая фича

fix: — исправление

refactor: — рефакторинг

style: — стили

chore: — конфиги, зависимости
```
