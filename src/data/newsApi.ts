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
        title: '📝📝 Optical Waveguide Theory!',
        date: 'Sept 2024',
        description: 'New Blog for Waveguide Theory Introduction',
        link: {
            label: '/blogs/optWaveguide',
            href: '/blogs/optWaveguide'
        },
    },
    // {
    //     title: '🧐🧐 Turning Complete',
    //     date: 'Sept 2024',
    //     description: 'A fantastic game to build computer!',
    //     link: {
    //         label: '/blogs/turingComplete',
    //         href: '/blogs/turingComplete'
    //     },
    // },
    {
        title: '🎓🎓 New PhD Student!',
        date: 'Feb 2024',
        description: 'I was admitted to PhD@Yale Applied Physics Dept. for Fall 2024',
        link: {
            label: 'https://www.yale.edu/',
            href: 'https://www.yale.edu/'
        },
    },
];