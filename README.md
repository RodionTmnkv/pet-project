# 🐼 Pet Project

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-Modules-CC6699?logo=sass)](https://sass-lang.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3-F7B93E?logo=prettier)](https://prettier.io/)

**Многостраничный сайт-визитка компании по переработке бумажных отходов и утилизации мукулатуры**

</div>

---

## 🚀 Быстрый старт

```bash
npm install          # Установка зависимостей
npm run dev          # Запуск dev-сервера → http://localhost:3000
npm run build        # Продакшн-сборка
npm start            # Запуск продакшн-версии
```

## 📋 Скрипты

```text
Команда	Описание
npm run dev	Dev-сервер с HMR
npm run build	Продакшн-сборка
npm start	Запуск собранного приложения
npm run lint	ESLint — проверка кода
npm run lint:fix	ESLint — автоисправление
npm run format	Prettier — форматирование
npm run check-types	TypeScript — проверка типов
npm run validate	Полный прогон: типы → линт → формат
```

## 🧱 Архитектура

```text
src/
├── app/                          # 📄 App Router
│   ├── (routes)/                 #    Группа маршрутов
│   │   ├── about/                #    /about
│   │   ├── services/             #    /services
│   │   ├── portfolio/            #    /portfolio
│   │   └── contacts/             #    /contacts
│   ├── layout.tsx                #    Корневой layout
│   ├── page.tsx                  #    Главная /
│   └── not-found.tsx             #    404
│
├── components/
│   ├── ui/                       # 🧩 Атомарные UI-компоненты
│   │   ├── Container/            #    Контейнер-центровщик
│   │   ├── Section/              #    Секция с отступами
│   │   ├── Icon/                 #    SVG-иконки
│   │   ├── Logo/                 #    Логотип
│   │   └── Preloader/            #    Прелоадер
│   │
│   ├── layout/                   # 🖼️  Шапка и подвал
│   │   ├── Header/               #    Шапка
│   │   │   ├── Nav/              #    Навигация + бургер-меню
│   │   │   └── BurgerButton/     #    Кнопка бургера
│   │   └── Footer/               #    Подвал
│   │       ├── FooterNav/        #    Навигация в футере
│   │       └── FooterSocials/    #    Соцсети
│   │
│   └── sections/                 # 📦 Секции страниц
│       ├── SliderSection/        #    Hero-слайдер
│       ├── StatsSection/         #    Анимированные счётчики
│       └── MapSection/           #    Карта поставок
│
├── hooks/                        # 🪝  Кастомные хуки
│   ├── useLockedBody.ts          #    Блокировка скролла + Escape
│   ├── useFocusTrap.ts           #    Ловушка фокуса
│   ├── useActiveSlide.ts         #    Активный слайд
│   ├── useCountUp.ts             #    Анимация чисел
│   ├── useInView.ts              #    Отслеживание вьюпорта
│   └── useDevice.ts              #    Медиа-запросы
│
├── data/                         # 🗃️  Моковые данные
├── types/                        # 🏷️  Общие типы
├── constants/                    # ⚙️  Константы (брейкпоинты)
├── utils/                        # 🛠️  Утилиты (cn)
└── styles/                       # 🎨  Глобальные стили
    ├── _variables.scss           #    Переменные
    ├── _mixins.scss              #    Миксины
    └── globals.scss              #    Сброс и базовые стили
```

## ✨ Особенности

```text
Фича	Реализация
🎯 Адаптивность	clamp(), vw, vh, медиа-запросы, резиновая сетка
🍔 Бургер-меню	Оверлей с затемнением, focus-trap, плавная анимация
🎠 Слайдер	Нативный CSS scroll-snap, автоплей 5с, точки-индикаторы
🔢 Счётчики	Анимация накрутки при попадании во вьюпорт (IntersectionObserver)
🐼 Прелоадер	SVG-кольцо с прогрессом, показывается раз за сессию
🚫 404	Кастомная страница с навигацией на главную
⌨️ Доступность	aria-label, aria-expanded, focus-visible, screen-reader
```

## 🐼 Git-хуки (Husky)

| Хук          | Действие                                                                              |
| :----------- | :------------------------------------------------------------------------------------ |
| `pre-commit` | `lint-staged` — ESLint + Prettier на изменённых файлах                                |
| `pre-push`   | `tsc --noEmit` — проверка типов                                                       |
| `commit-msg` | `commitlint` — валидация [conventional commits](https://www.conventionalcommits.org/) |

## 🗃️ Данные

```text
    Все данные моковые и хранятся в src/data/. При подключении бэкенда замена на API сводится к правке одного слоя.
```

<div align="center">
Сделано с ❤️ на Next.js

</div>
