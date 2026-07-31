import { TNavItem, TSocialLink } from '@/types';

export const FOOTER_NAV_ITEMS: TNavItem[] = [
    { id: 'home', label: 'Главная', href: '/' },
    { id: 'about', label: 'О нас', href: '/about' },
    { id: 'services', label: 'Услуги', href: '/services' },
    { id: 'portfolio', label: 'Портфолио', href: '/portfolio' },
    { id: 'contacts', label: 'Контакты', href: '/contacts' },
];

export const FOOTER_SOCIAL_LINKS: TSocialLink[] = [
    { id: 'telegram', label: 'Telegram', href: 'https://t.me/username', icon: 'telegram' },
    { id: 'max', label: 'Max', href: 'https://max.ru/username', icon: 'max' },
    { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/1234567890', icon: 'whatsapp' },
    { id: 'email', label: 'Email', href: 'mailto:info@petproject.ru', icon: 'email' },
];
