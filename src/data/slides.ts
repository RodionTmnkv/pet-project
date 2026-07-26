export type TSlide = {
    id: string;
    image: string;
    imageAlt: string;
    title: string;
    subtitle?: string;
};

export const SLIDES: TSlide[] = [
    {
        id: 'slide-1',
        image: '/images/home/slides/slide-1.jpg',
        imageAlt: 'Первый слайд',
        title: 'Мы создаём цифровые продукты',
        subtitle: 'Разработка сайтов и приложений любой сложности',
    },
    {
        id: 'slide-2',
        image: '/images/home/slides/slide-2.jpg',
        imageAlt: 'Второй слайд',
        title: 'Современные технологии',
        subtitle: 'React, Next.js, TypeScript и не только',
    },
    {
        id: 'slide-3',
        image: '/images/home/slides/slide-3.jpg',
        imageAlt: 'Третий слайд',
        title: 'Команда профессионалов',
        subtitle: 'Опыт, который помогает достигать целей',
    },
];
