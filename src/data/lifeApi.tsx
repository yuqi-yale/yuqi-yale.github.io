import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { GoogleScholarIcon } from '../components/icons/GoogleScholarIcon';
import ZJUlogo from '../images/logos/ZJU.svg'
import EPFLlogo from '../images/logos/EPFL.svg'
import Yalelogo from '../images/logos/Yale.svg'
import yuqilogo from 'public/favicon/icon-256x256.png'
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import { EmailIcon } from 'src/components/icons/EmailIcon';
import { CVIcon } from 'src/components/icons/CVIcon';

export const Name = 'Yuqi Zhao (赵宇骐)';

export const About = (
    <>
        I&apos;m currently pursuing my <b>PhD degree</b> in the <b>Applied Physics Department</b> at <b>Yale
            University</b>, and I&apos;m interested in Photonics Integrated Design and Maker projects. I am
        now doing 2D waveguide design with <ExternalLink
            href="https://www.lgwrightlab.com/team">𝐏𝐫𝐨𝐟. 𝐋𝐨𝐠𝐚𝐧 𝐖𝐫𝐢𝐠𝐡𝐭</ExternalLink> in <ExternalLink href="https://www.lgwrightlab.com/">𝐋𝐖𝐀𝐏𝐋@𝐘𝐚𝐥𝐞</ExternalLink>.
        <br />
        <br />
        Previously, I obtained my Bachelor&apos;s degree in Opto-Electronics Info Science and
        Engineering from Chu Kochen Honors College, Zhejiang University. I have research
        experience in <ExternalLink
            href="https://person.zju.edu.cn/person/attachments/2022-04/01-1651153578-853956.pdf"
        >𝐒𝐈𝐍𝐆@𝐙𝐉𝐔</ExternalLink> advised by <ExternalLink
            href="https://person.zju.edu.cn/dxdai/569878.html"
        >𝐏𝐫𝐨𝐟. 𝐃𝐚𝐨𝐱𝐢𝐧 𝐃𝐚𝐢</ExternalLink> and also a full-time
        exchange researcher in <ExternalLink href="https://www.epfl.ch/labs/k-lab/"
        >𝐋𝐏𝐐𝐌@𝐄𝐏𝐅𝐋</ExternalLink>,
        advised by <ExternalLink href="https://people.epfl.ch/tobias.kippenberg?lang=en"
        >𝐏𝐫𝐨𝐟. 𝐓𝐨𝐛𝐢𝐚𝐬 𝐊𝐢𝐩𝐩𝐞𝐧𝐛𝐞𝐫𝐠</ExternalLink>.
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
    { name: 'Email', link: 'mailto:yuqi.zhao@yale.edu', icon: EmailIcon },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/yuq1', icon: LinkedInIcon },
    { name: 'Github', link: 'https://github.com/yuqi-yale/', icon: GitHubIcon },
    { name: 'CV', link: '', icon: CVIcon },
] as const;

export const Experience = [
    {
        organization: 'LgWrightLab, Yale',
        advisor: 'Logan Wright',
        herf: 'https://www.lgwrightlab.com/',
        position: 'PhD student',
        logo: Yalelogo,
        start: 'May, 2024',
        end: 'Present',
    },
    {
        organization: 'LPQM, EPFL',
        advisor: 'Tobias Kippenberg',
        herf: 'https://www.epfl.ch/labs/k-lab/',
        position: 'Full-time Research Intern',
        logo: EPFLlogo,
        start: 'Jul 2023',
        end: 'Dec 2023',
    },
    {
        organization: 'SING, ZJU',
        advisor: 'Daoxin Dai & Jingshu Guo',
        herf: '',
        position: 'Research Intern',
        logo: ZJUlogo,
        start: 'Jul 2021',
        end: 'Jul 2024',
    },
] as const;

export const Education = [
    {
        organization: 'Yale University',
        herf: 'https://www.yale.edu/',
        position: 'PhD student',
        logo: Yalelogo,
        start: 'May, 2024',
        end: 'Present',
    },
    {
        organization: 'EPFL',
        herf: 'https://www.epfl.ch/en/',
        position: 'Full-time Research Intern',
        logo: EPFLlogo,
        start: 'Jul 2023',
        end: 'Dec 2023',
    },
    {
        organization: 'Zhejiang University',
        herf: 'https://www.zju.edu.cn/english/',
        position: 'B.E.(Eng.) in Opto-Electronics Info S&E',
        logo: ZJUlogo,
        start: 'Sept 2020',
        end: 'Jul 2024',
    },
] as const;

export const Reward = [
    {
        organization: 'Zhejiang University',
        content: 'Chu Kochen Scholarship',
        description: 'Highest-Grade Scholarship, 12 among all undergrad students per year',
        date: 'Oct 2023',
    },
    {
        organization: 'Ministry of Education, PRC',
        content: 'National Scholarship',
        description: 'Highest honor for undergraduates in China, awarded to top 1%',
        date: 'Oct 2023 & Oct 2022',
    },
    {
        organization: 'Zhejiang University',
        content: 'College Star of Chu Kochen Honor College',
        description: '10 College Star per year',
        date: 'Oct 2023',
    },
    {
        organization: 'Zhejiang University',
        content: 'College Star of Optical Science and Engineering College',
        description: '10 College Star per year',
        date: 'Oct 2022',
    },
    {
        organization: 'Ministry of Education, PRC',
        content: 'Gold Medal in the 9th “Internet+” Inno & Entre Compet.',
        description: '',
        date: 'Aug 2022',
    },
    {
        organization: 'Zhejiang University',
        content: 'Fourth place in ZJU Paddleboard Racing Compet.',
        description: '',
        date: 'Jun 2023',
    },
] as const;

export const Skills = [
    {
        type: 'Programming',
        content: ["C/C++", "Python", "MYSQL", "MATLAB", "Mathematica"]
    },
    {
        type: 'Simulation Software',
        content: ["Lumerical FDTD", "COMSOL Multiphysics", "ZEMAX"]
    },
    {
        type: 'Web Design',
        content: ["JavaScript", "React", "Next.js", "Django"],
    },
    {
        type: 'Programming Frame',
        content: ["PyTorch for NN & RF"]
    },
    {
        type: 'Engineering Softwares',
        content: ["SolidWorks", "Altium Designer", "Klayout"]
    },
] as const;