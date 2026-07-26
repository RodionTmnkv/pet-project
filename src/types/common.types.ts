export type TBreakpoint = 'mobile' | 'tablet' | 'laptop' | 'desktop';

export type TNavItem = {
    id: string;
    label: string;
    href: string;
    isExternal?: boolean;
};

export type TSocialLink = {
    id: string;
    label: string;
    href: string;
    icon: 'telegram' | 'whatsapp' | 'email';
};

export type TContactInfo = {
    phone?: string;
    email?: string;
    address?: string;
};
