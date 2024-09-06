

export type NewsType = {
    title: string;
    date: string;
    description: string;
    link?: {
        label: string;
        href: string;
    };
};

export const NewsContent: NewsType[] = [
    {
        title: '🎉🎉 Personal Website',
        date: 'Sept 2024',
        description: 'My new personal Website@yuqiweb.com!',
        link: {
            label: 'https://yuqiweb.com',
            href: 'https://yuqiweb.com'
        },
    },
    {
        title: '🧐🧐 Turning Complete',
        date: 'Sept 2024',
        description: 'A fantastic game to build computer!',
        link: {
            label: 'notes/TuringComplete',
            href: 'notes/TuringComplete'
        },
    },
    {
        title: '🎓🎓 New PhD Student!',
        date: 'Feb 2024',
        description: 'I was admitted to PhD@Yale Applied Physics Dept. for Fall 2024',
        link: {
            label: 'https://www.yale.edu/',
            href: 'https://www.yale.edu/'
        },
    },
] as const;