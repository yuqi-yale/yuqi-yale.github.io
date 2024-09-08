import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { Container } from '../components/Container';
import { PageTitle } from '../components/PageTitle';
import { Photos } from '../components/Photos';
import { ExperienceBox } from '../components/ExperienceList';
import { SocialLink } from '../components/SocialLink';
import { NotePreviewHome } from '../components/notes/NotePreviewHome';
import { About, Name, SocialMedia } from '../data/lifeApi';
import { Note, notesApi } from '../lib/notesApi';
import { News } from '../components/News';

const seoTitle = 'Yuqi Zhao';
const seoDescription =
    'A passionate software engineer with an eye for details based in Wrocław, Poland.';

type Props = {
    latestNotes: Note[];
};

export default function Home({ latestNotes }: Props) {
    return (
        <>
            <NextSeo
                title={seoTitle}
                description={seoDescription}
                canonical={`${process.env.NEXT_PUBLIC_URL}`}
                openGraph={{
                    images: [
                        {
                            url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
                        },
                    ],
                }}
            />
            <Container className="mt-12">
                <PageTitle>{Name}</PageTitle>
                <div className="mx-auto grid max-w-xl gap-y-20 lg:max-w-none lg:grid-cols-3">
                    <div className='col-span-2'>
                        <p className="mt-6 max-w-2xl text-base text-balance">
                            {About}
                        </p>
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
                    </div>
                    <div className='lg:ml-auto space-y-10'>
                        <News news={{
                            title: '',
                            date: '',
                            description: '',
                            link: undefined
                        }}></News>
                    </div>
                </div>
            </Container>
            <Photos />
            <Container className="mt-12">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col gap-16">
                        {latestNotes.map((blogPost) => (
                            <NotePreviewHome key={blogPost.slug} note={blogPost} dense />
                        ))}
                    </div>
                    <div className="lg:ml-auto space-y-10 lg:pl-16 xl:pl-24">
                        <ExperienceBox />
                    </div>
                </div>
            </Container>
        </>
    );
}

const NEWEST_POSTS_TO_DISPLAY = 5;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const latestNotes = await notesApi.getNotes('desc', NEWEST_POSTS_TO_DISPLAY);

    return {
        props: { latestNotes },
        revalidate: 5,
    };
};
