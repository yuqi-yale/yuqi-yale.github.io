import Image from 'next/image';

import { Experience } from '../data/lifeApi';
import { ResearchIcon } from './icons/ResearchIcon';
import { InternalLink } from './InternalLink';
import { ExternalLink } from './ExternalLink';

export const ExperienceList = () => {
    return (
            <ol className="mt-6 space-y-4">
                {Experience.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image
                                src={role.logo}
                                alt="Logo"
                                className="h-7 w-7 rounded-full object-cover"
                                unoptimized
                            />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Organization</dt>
                            <dd className="flex-none text-base font-medium text-zinc-900 dark:text-zinc-100">
                                <ExternalLink href={role.herf}>{role.organization}</ExternalLink>
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label={`${role.start} until ${role.end}`}
                            >
                                <time dateTime={role.start}>{role.start}</time> <span aria-hidden="true">—</span>{' '}
                                <time dateTime={role.end}>{role.end}</time>
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="w-full text-xs text-zinc-500 dark:text-zinc-400">{role.position} · {role.advisor}</dd>
                        </dl>
                    </li>
                ))}
            </ol>
    );
};

export const ExperienceBox = () => {
    return (
        <div className="max-w-[420px] rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <ResearchIcon className="h-6 w-6 flex-none" />
                <span className="ml-3 text-lg">Experience - Details in <InternalLink href='/about'>About/CV</InternalLink></span>
            </h2>
            <ExperienceList />
        </div>
    );
};