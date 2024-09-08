import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';

import AvatarImage from '../../public/assets/blog/authors/yuqi.png';
import { Container } from '../components/Container';
import { PageTitle } from '../components/PageTitle';
import { Quote } from '../components/Quote';
import { Section } from '../components/Section';
import { SocialLink } from '../components/SocialLink';
import { ExperienceList } from '../components/ExperienceList';
import { EducationList } from '../components/EducationList';
import { SkillList } from 'src/components/SkillList';
import { RewardList } from 'src/components/RewardList';
import Script from 'next/script'
import {
    About,
    SocialMedia,
    Skills,
} from '../data/lifeApi';

const seoTitle = `About`;
const seoDescription = `A few words about me.`;

export default function AboutMe() {
    return (
        <>
            <NextSeo
                title={seoTitle}
                description={seoDescription}
                canonical={`${process.env.NEXT_PUBLIC_URL}/about`}
                openGraph={{
                    images: [
                        {
                            url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
                        },
                    ],
                }}
            />
            <Container className="mt-16 sm:mt-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20 space-y-40">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={AvatarImage}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <PageTitle>Hi, I&apos;m Yuqi Zhao (赵宇骐)!</PageTitle>
                        <div className="mt-6 text-base">{About}</div>
                        <div className="mt-6 flex gap-6">
                            {SocialMedia.map((socialProfile) => (
                                <SocialLink
                                    key={socialProfile.name}
                                    aria-label={`Follow on ${socialProfile.name}`}
                                    href={socialProfile.link}
                                    icon={socialProfile.icon}
                                />
                            ))}
                        </div>

                        <Section>
                            <Section.Title as="h1">Education</Section.Title>
                            <EducationList />
                        </Section>

                        <Section>
                            <Section.Title as="h1">Research Experience</Section.Title>
                            <ExperienceList />
                        </Section>

                        <Section>
                            <Section.Title as="h1">Rewards</Section.Title>
                            <RewardList />
                        </Section>

                        <Section>
                            <Section.Title as="h1">Skills</Section.Title>
                            <SkillList />
                        </Section>
                        
                    </div>
                </div>
                <div className='mt-8 flex justify-center'>
                    <div className="w-[450px] h-64 overflow-hidden rounded-lg">
                        <img className="object-cover w-full h-full" alt="" src="https://mapmyvisitors.com/map.png?cl=6639a6&w=1000&t=n&d=HyyCemLzcS2Mj6CdjrIqBuosnn6PyGMtOLb8rCIbDdw&co=ffffff&ct=7a7a7a"/>
                    </div>
                </div>
            </Container >
        </>
    );
}
