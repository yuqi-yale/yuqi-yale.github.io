import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { GoogleScholarIcon } from '../components/icons/GoogleScholarIcon';
import ZJUlogo from '../images/logos/ZJU.svg'
import EPFLlogo from '../images/logos/EPFL.svg'
import Yalelogo from '../images/logos/Yale.svg'
import yuqilogo from 'public/favicon/icon-256x256.png'
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import { EmailIcon } from 'src/components/icons/EmailIcon';

export const Name = 'Yuqi Zhao (赵宇骐)';

export const About = (
    <>
        I&apos;m currently pursuing my <b>PhD degree</b> in the <b>Applied Physics Department</b> at <b>Yale
            University</b>, and I&apos;m interested in Photonics Integrated Design and Maker projects. I am
        now doing 2D waveguide design with <ExternalLink
            href="https://www.lgwrightlab.com/team"><i>𝐏𝐫𝐨𝐟. 𝐋𝐨𝐠𝐚𝐧 𝐖𝐫𝐢𝐠𝐡𝐭</i></ExternalLink> in <ExternalLink href="https://www.lgwrightlab.com/"><i>𝐋𝐖𝐀𝐏𝐋@𝐘𝐚𝐥𝐞</i></ExternalLink>.
        <br />
        <br />
        Previously, I obtained my Bachelor&apos;s degree in Opto-Electronics Info Science and
        Engineering from Chu Kochen Honors College, Zhejiang University. I have research
        experience in <ExternalLink
            href="https://person.zju.edu.cn/person/attachments/2022-04/01-1651153578-853956.pdf"
        ><i>𝐒𝐈𝐍𝐆@𝐙𝐉𝐔</i></ExternalLink> advised by <ExternalLink
            href="https://person.zju.edu.cn/dxdai/569878.html"
        ><i>𝐏𝐫𝐨𝐟. 𝐃𝐚𝐨𝐱𝐢𝐧 𝐃𝐚𝐢</i></ExternalLink> and also a full-time
        exchange researcher in <ExternalLink href="https://www.epfl.ch/labs/k-lab/"
        ><i>𝐋𝐏𝐐𝐌@𝐄𝐏𝐅𝐋</i></ExternalLink>,
        advised by <ExternalLink href="https://people.epfl.ch/tobias.kippenberg?lang=en"
        ><i>𝐏𝐫𝐨𝐟. 𝐓𝐨𝐛𝐢𝐚𝐬 𝐊𝐢𝐩𝐩𝐞𝐧𝐛𝐞𝐫𝐠</i></ExternalLink>.
    </>
);

export type Project = {
    title: string;
    techStack: string[];
    description: string;
    logo: any;
    link?: {
        label: string;
        href: string;
    };
};

export const MyCurrentProjects: Project[] = [
    {
        title: 'Personal Website',
        techStack: ['Side Project', 'TypeScript', 'Next.js'],
        description: 'My personal website!',
        logo: yuqilogo,
        link: {
            label: 'yuqiweb.com',
            href: 'https://yuqiweb.com',
        },
    },
    {
        title: '2D Waveguide Design',
        techStack: ['Research', 'Logan', 'Computational Physics', 'Nanofab'],
        description: 'Research Project',
        logo: yuqilogo,

    },
];

export const MyPastProjects: Project[] = [
    {
        title: 'Parabol',
        techStack: ['Full Stack Developer', 'TypeScript', 'React', 'Node.js', 'GraphQL'],
        description: 'The Agile meeting co-pilot that delivers better meetings with less effort.',
        logo: yuqilogo,
        link: {
            label: 'github.com',
            href: 'https://github.com/ParabolInc/parabol',
        },
    },
];

export const SocialMedia = [
    // { name: 'Twitter', link: '', icon: XIcon },
    { name: 'Google_Scholar', link: 'https://scholar.google.com/citations?user=au1qK1YAAAAJ&hl=zh-CN', icon: GoogleScholarIcon },
    { name: 'Github', link: 'https://github.com/yuqi-yale/', icon: GitHubIcon },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/yuq1', icon: LinkedInIcon },
    { name: 'Email', link: 'mailto:yuqi.zhao@yale.edu', icon: EmailIcon },
] as const;

export const Experience = [
    {
        organization: 'LWAPL, Yale',
        herf: '',
        position: 'PhD student',
        logo: Yalelogo,
        start: 'May, 2024',
        end: 'Present',
    },
    {
        organization: 'LPQM, EPFL',
        herf: '',
        position: 'Full-time Research Intern',
        logo: EPFLlogo,
        start: 'Jul 2023',
        end: 'Dec 2023',
    },
    {
        organization: 'SING, ZJU',
        herf: '',
        position: 'Research Intern',
        logo: ZJUlogo,
        start: 'Jul 2021',
        end: 'Jul 2024',
    },
] as const;

export const CompaniesLinks = [
    {
        name: 'VisionMedia',
        link: 'https://www.visionmedia.com/',
    },
    {
        name: 'DKMS',
        link: 'https://www.dkms.org/en',
    },
    {
        name: 'AAA',
        link: 'https://www.aaa.com/',
    },
    {
        name: 'PolskaPress',
        link: 'https://polskapress.pl/pl',
    },
    {
        name: 'Canal Digital',
        link: 'https://www.canaldigital.no/',
    },
] as const;

export const Books = [
    {
        name: 'Shoe Dog: A Memoir by the Creator of Nike by Phil Knight',
        link: 'https://www.amazon.com/Shoe-Dog-Memoir-Creator-Nike-ebook/dp/B0176M1A44',
    },
    {
        name: 'The Black Swan: The Impact of the Highly Improbable by Nassim Nicholas Taleb',
        link: 'https://amzn.to/2NwihaS',
    },
    {
        name: 'Antifragile: Things That Gain from Disorder by Nassim Nicholas Taleb',
        link: 'https://amzn.to/3aIG805',
    },
    {
        name: 'Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets by Nassim Nicholas Taleb',
        link: 'https://amzn.to/3kbvaD9',
    },
    {
        name: 'Daily stoic by Ryan Holiday',
        link: 'https://amzn.to/3n8ATuC',
    },
    {
        name: 'A Guide to the Good Life: The Ancient Art of Stoic Joy by William B. Irvine',
        link: 'https://amzn.to/3iuL1ud',
    },
    {
        name: 'Atomic Habits by James Clear',
        link: 'https://amzn.to/3iqimpZ',
    },
] as const;

export const VideosWorthWatching = [
    {
        name: 'Steve Jobs 2005 Stanford Commencement Address',
        link: 'https://www.youtube.com/watch?v=UF8uR6Z6KLc',
    },
    {
        name: 'Falcon Heavy & Starman',
        link: 'https://www.youtube.com/watch?v=A0FZIwabctw',
    },
] as const;

export const Podcasts = [
    {
        name: 'Lex Fridman Podcast',
        link: 'https://www.youtube.com/@lexfridman',
    },
    {
        name: 'Huberman Lab',
        link: 'https://www.youtube.com/@hubermanlab',
    },
    {
        name: 'Joe Rogan',
        link: 'https://www.youtube.com/@joerogan',
    },
    {
        name: 'The Tim Ferriss Show',
        link: 'https://www.youtube.com/channel/UCznv7Vf9nBdJYvBagFdAHWw',
    },
    {
        name: 'Build your SaaS',
        link: 'https://saas.transistor.fm/',
    },
] as const;

export const PeopleWorthFollowingOnTwitter = [
    {
        name: 'Andrew Wilkinson',
        link: 'https://twitter.com/awilkinson',
    },
    {
        name: 'Oliur',
        link: 'https://twitter.com/UltraLinx',
    },
    {
        name: 'Jack Butcher',
        link: 'https://twitter.com/jackbutcher',
    },
    {
        name: 'Sahil Lavingia',
        link: 'https://twitter.com/shl',
    },
    {
        name: 'James Clear',
        link: 'https://twitter.com/JamesClear',
    },
    {
        name: 'Naval',
        link: 'https://twitter.com/naval',
    },
    {
        name: 'Paul Graham',
        link: 'https://twitter.com/paulg',
    },
    {
        name: "John O'Nolan",
        link: 'https://twitter.com/JohnONolan',
    },
    {
        name: 'Jon Yongfook',
        link: 'https://twitter.com/yongfook',
    },
    {
        name: 'Joel Gascoigne',
        link: 'https://twitter.com/joelgascoigne',
    },
    {
        name: 'Pieter Levels',
        link: 'https://twitter.com/levelsio',
    },
] as const;

export const Blogs = [
    {
        name: 'Wait but why',
        link: 'https://waitbutwhy.com/',
    },
    {
        name: 'Paul Graham',
        link: 'http://www.paulgraham.com/',
    },
    {
        name: 'Joel Hooks',
        link: 'https://joelhooks.com',
    },
    {
        name: 'David Perell',
        link: 'https://www.perell.com/',
    },
    {
        name: 'Dan Abramov',
        link: 'https://overreacted.io',
    },
    {
        name: 'Lee Robinson',
        link: 'https://leerob.io',
    },
    {
        name: 'Naval Ravikant',
        link: 'https://nav.al/',
    },
] as const;

export const Quotes = [
    {
        content: 'We have two lives, and the second begins when we realize we only have one.',
        author: '― Confucius',
    },
    {
        content: 'The man who moves a mountain begins by carrying away small stones.',
        author: '― Confucius',
    },
    {
        content:
            'The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.',
        author: '― Confucius',
    },
    {
        content:
            "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did so. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
        author: '― Mark Twain',
    },
    {
        content:
            "You have no responsibility to live up to what other people think you ought to accomplish. I have no responsibility to be like they expect me to be. It's their mistake, not my failing.",
        author: '― Mark Twain',
    },
    {
        content:
            'Watch your thoughts, they become your words; watch your words, they become your actions; watch your actions, they become your habits; watch your habits, they become your character; watch your character, it becomes your destiny.',
        author: '― Laozi',
    },
    {
        content: 'If you are going through hell, keep going.',
        author: '― Winston S. Churchill',
    },
    {
        content: 'Attitude is a little thing that makes a big difference.',
        author: '― Winston S. Churchill',
    },
    {
        content:
            'To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking.',
        author: '― Johann Wolfgang von Goethe',
    },
    {
        content: 'It is not death that a man should fear, but he should fear never beginning to live.',
        author: '― Marcus Aurelius',
    },
    {
        content: 'If it is not right do not do it; if it is not true do not say it.',
        author: '― Marcus Aurelius',
    },
    {
        content:
            'You have power over your mind - not outside events. Realize this, and you will find strength.',
        author: '― Marcus Aurelius',
    },
    {
        content: 'The happiness of your life depends upon the quality of your thoughts.',
        author: '― Marcus Aurelius',
    },
    {
        content:
            'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.',
        author: '― Marcus Aurelius',
    },
    {
        content: 'There is no easy way from the earth to the stars',
        author: '― Seneca',
    },
    {
        content: 'We suffer more often in imagination than in reality',
        author: '― Seneca',
    },
] as const;

export const Tools = {
    Workstation: [
        {
            title: '14” MacBook Pro, M1 Max, 32GB RAM (2021)',
            description:
                'This laptop is a top-of-the-line machine that can handle virtually any task you throw at it, making it a worthwhile investment for anyone looking for a reliable and powerful laptop that can be used for years.',
            href: 'https://amzn.to/3XkWxhF',
        },
        {
            title: 'Apple Studio Display 5K (Standard Glass)',
            description:
                '5K resolution helps to reduce strain on the eyes and makes it more comfortable to work for long periods of time. Not to mention that it looks great.',
            href: 'https://amzn.to/3NnMlAu',
        },
        {
            title: 'Logitech MX Keys Mini',
            description:
                'Backlit keys, compact design, good battery life and a great typing experience. Matches the space gray color of the laptop almost perfectly.',
            href: 'https://amzn.to/3qSUNQS',
        },
        {
            title: 'Logitech MX Master 3',
            description: "Let's be honest, it just looks great with MX Keys Mini keyboard.",
            href: 'https://amzn.to/3qXIvXl',
        },
        {
            title: 'Apple Magic Trackpad',
            description:
                'Gestures, taps and swipes are something I miss when I work with my laptop closed.',
            href: 'https://amzn.to/3pgETza',
        },
        {
            title: 'Apple Magic Mouse',
            description:
                'Because it looks great and it allows me to post pictures with how badly the charging port is designed.',
            href: 'https://amzn.to/43UuA30',
        },
        {
            title: 'Autonomous ErgoChair Pro',
            description: `If I'm going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an expensive chair.`,
            href: 'https://www.autonomous.ai/office-chairs/ergonomic-chair',
        },
    ],
    Software: [
        {
            title: 'Visual Studio Code',
            description: `I still miss WebStorm but at least VS Code does not consume 1000% CPU when I open it. And to be fair, it's a great editor.`,
            href: 'https://code.visualstudio.com/',
        },
        {
            title: 'iTerm2',
            description: `I'm honestly not even sure what features I get with this that aren't just part of the macOS Terminal but it's what I use.`,
            href: 'https://iterm2.com/',
        },
        {
            title: 'TablePlus',
            description: `Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.`,
            href: 'https://tableplus.com/',
        },
        {
            title: 'Figma',
            description: `I'm not a designer but it allows me to quickly mock up interfaces and play with my ideas. One day I'll learn how to use it properly.`,
            href: 'https://www.figma.com/',
        },
        {
            title: 'Notion',
            description: `I use it for everything. I have a separate workspace for each of my projects and I use it to keep track of my tasks, notes, and ideas.`,
            href: 'https://www.notion.so/',
        },
        {
            title: 'Raycast',
            description: `Window management, quick access to my most used apps, and a bunch of other useful features. I use it every day.`,
            href: 'https://www.raycast.com/',
        },
        {
            title: '1Password',
            description: `Not much to say here. It's a great password manager.`,
            href: 'https://1password.com/',
        },
        {
            title: 'Cron',
            description: `Calendar application done right`,
            href: 'https://cron.com/',
        },
    ],
} as const;
