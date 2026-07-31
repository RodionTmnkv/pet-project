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
    icon: 'telegram' | 'whatsapp' | 'email' | 'max';
};
