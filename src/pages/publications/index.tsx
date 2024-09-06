import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { Badge } from '../../components/Badge';
import { PageLayout } from '../../components/PageLayout';
import { PublicationPreview } from '../../components/publication/PublicationPreview';
import { Publication, publicationApi } from 'src/lib/publicationApi';

const seoTitle = 'Publications';
const seoDescription = "My publications";

interface Props {
    notes: Publication[];
    tagsPub: Array<string>;
  }

export default function Publications({ notes, tagsPub }: Props) {
    return (
        <>
            <NextSeo
                title={seoTitle}
                description={seoDescription}
                canonical={`${process.env.NEXT_PUBLIC_URL}/creating`}
                openGraph={{
                    images: [
                        {
                            url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
                        },
                    ],
                }}
            />
            <PageLayout
                title="Publications"
                intro="The fantastic research I & my friends have been made."
            >
                <h3 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Tags</h3>

                <div className="mt-4 flex max-w-xl flex-wrap gap-1 font-mono">
                    {tagsPub.map((tag) => (
                        <Badge key={tag} href={`/tagsPub/${tag}`}>
                            #{tag}
                        </Badge>
                    ))}
                </div>

                <div className="mt-24 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                    <div className="flex max-w-4xl flex-col space-y-16">
                        {notes.map((note) => (
                            <PublicationPreview key={note.slug} note={note} />
                        ))}
                    </div>
                </div>
            </PageLayout>
        </>
    );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const notes = await publicationApi.getNotes('desc');
  
    return {
      props: {
        notes,
        tagsPub: Array.from(new Set(notes.map((post) => post.tagsPub).flat())),
      },
      revalidate: 10,
    };
  };
  