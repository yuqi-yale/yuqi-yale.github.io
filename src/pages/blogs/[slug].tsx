import { GetStaticPaths, GetStaticProps } from 'next';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import Prism from 'prismjs';
import { useEffect } from 'react';

import { NoteLayout } from '../../components/notes/NoteLayout';
import { NotionBlockRenderer } from '../../components/notion/NotionBlockRenderer';
import { Note as NoteType, notesApi } from '../../lib/notesApi';
import { LinkedInIcon } from 'src/components/icons/LinkedInIcon';

type Props = {
    note: NoteType;
    noteContent: any[];
};

export default function Note({
    note: { title, description, createdAt, slug, lastEditedAt},
    noteContent,
    previousPathname,
}: Props & { previousPathname: string }) {
    const url = `${process.env.NEXT_PUBLIC_URL}/blogs/${slug}`;
    const openGraphImageUrl = `${process.env.NEXT_PUBLIC_URL}/api/og?title=${title}&description=${description}`;

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    images: [{ url: openGraphImageUrl }],
                }}
            />
            <ArticleJsonLd
                url={url}
                images={[openGraphImageUrl]}
                title={title}
                datePublished={lastEditedAt}
                authorName="Yuqi Zhao"
                description={description}
            />
            <NoteLayout
                meta={{ title, description, date: createdAt }}
                previousPathname={previousPathname}
            >
                <div className="pb-32">
                    {noteContent.map((block) => (
                        <NotionBlockRenderer key={block.id} block={block} />
                    ))}

                    <hr />

                    <a
                        className="group block text-xl font-semibold md:text-3xl no-underline"
                        // href={`http://x.com/share?text=${title}&url=${url}`}
                        href='https://www.linkedin.com/in/yuq1/' target='_blank'
                    >
                        <h4 className="max-w-lg flex cursor-pointer flex-col duration-200 ease-in-out group-hover:text-purple-600 group-hover:fill-primary fill-white text-wrap">
                            <LinkedInIcon className="my-6 h-10 w-10 transform transition-transform group-hover:-rotate-12 text-black dark:text-white group-hover:text-purple-600" />
                            Click here to connect me at Linkedin~
                        </h4>
                    </a>
                </div>
            </NoteLayout>
        </>
    );
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (context) => {
    const slug = context.params?.slug;
    const allNotes = await notesApi.getNotes();
    const note = allNotes.find((note) => note.slug === slug);

    if (!note) {
        return {
            notFound: true,
        };
    }

    const noteContent = await notesApi.getNote(note.id);

    return {
        props: {
            note,
            noteContent,
        },
        revalidate: 10,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await notesApi.getNotes();

    return {
        paths: posts.map((post) => ({ params: { slug: post.slug } })),
        fallback: 'blocking',
    };
};
