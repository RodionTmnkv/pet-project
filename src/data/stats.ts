export type TStat = {
    id: string;
    value: number;
    suffix: string;
    label: string;
};

export const STATS: TStat[] = [
    {
        id: 'recycled',
        value: 12000,
        suffix: '+',
        label: 'тонн переработано',
    },
    {
        id: 'clients',
        value: 350,
        suffix: '+',
        label: 'постоянных клиентов',
    },
    {
        id: 'fleet',
        value: 50,
        suffix: '+',
        label: 'фур в автопарке',
    },
    {
        id: 'experience',
        value: 15,
        suffix: '',
        label: 'лет на рынке',
    },
];
