import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

import { PageLayout } from '../../components/PageLayout';
import { PublicationPreview } from 'src/components/publication/PublicationPreview';
import { Publication, publicationApi } from 'src/lib/publicationApi';

const seoTitle = 'TagsPub';
const seoDescription = 'All of my publications posts tagged with ';

interface Props {
    tag: string;
    relatedNotes: Publication[];
}

export default function TagsPub({ tag, relatedNotes }: Props) {
    return (
        <>
            <NextSeo
                title={seoTitle}
                description={`${seoDescription}#${tag}}`}
                canonical={`${process.env.NEXT_PUBLIC_URL}/tagsPub/${tag}`}
                openGraph={{
                    images: [
                        {
                            url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
                        },
                    ],
                }}
            />
            <PageLayout title="Tags for Publications" intro={`All the articles from #${tag}`}>
                <div className="mt-24 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                    <div className="flex max-w-3xl flex-col space-y-16">
                        {relatedNotes.map((note) => (
                            <PublicationPreview key={note.slug} note={note} />
                        ))}
                    </div>
                </div>
            </PageLayout>
        </>
    );
}

export const getStaticProps: GetStaticProps<Props, { tag: string }> = async (context) => {
    const tag = context.params?.tag;
    if (!tag) {
        return {
            notFound: true,
        };
    }

    const relatedNotes = await publicationApi.getNotesByTag(tag);

    return {
        props: {
            relatedNotes,
            tag,
        },
        revalidate: 10,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const tagsPub = await publicationApi.getAllTags();

    return {
        paths: tagsPub.map((tag) => ({
            params: { tag },
        })),
        fallback: 'blocking',
    };
};
