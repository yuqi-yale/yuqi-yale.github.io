import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import { formatDate } from '../../lib/date';
import { Note } from '../../lib/notesApi';
import { Card } from '../Card';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../../lib/animation';
import Image from 'next/image';

const StaticBadge = ({ className, children }: React.PropsWithChildren<{ className?: string }>) => (
    <span
        className={clsx(
            className,
            'inline-flex items-center rounded-md bg-purple-400 px-2 py-0 text-xs font-medium text-white',
        )}
    >
        {children}
    </span>
);

interface Props {
    note: Note;
    dense?: boolean;
}

export const NotePreview = ({ note, dense }: Props) => {
    return (
        <motion.div
            initial={ANIMATION_FROM_PROPS}
            whileInView={ANIMATION_TO_PROPS}
            viewport={{ once: true }}
        >
            <article className="grid grid-cols-6 items-center">
                <div className="col-span-3">
                    <Card className="md:col-span-3">
                        <Card.Title href={`/blogs/${note.slug}`}>{note.title}</Card.Title>
                        <Card.Eyebrow
                            as="time"
                            dateTime={note.publishedAt}
                            className={clsx(!dense && 'md:hidden')}
                            decorate
                        >
                            {formatDate(note.publishedAt)}
                            {note.inProgress && <StaticBadge className="ml-4">In progress</StaticBadge>}
                            {!note.inProgress && <StaticBadge className="ml-4">Finished</StaticBadge>}
                        </Card.Eyebrow>
                        <Card.Description>{note.description}</Card.Description>
                        <Card.Cta>Read blog</Card.Cta>
                    </Card>
                </div>
                <Card className="md:col-span-2 relative">
                    {note.coverImage
                        ? <a href={`/blogs/${note.slug}`}>
                            <Image width={250} height={120} className='scale-75 hover:scale-100' alt="" src={note.coverImage} />
                        </a>
                        : null}
                </Card>
                {!dense && (
                    <Card.Eyebrow as="time" dateTime={note.publishedAt} className="mt-1 hidden md:block">
                        {formatDate(note.publishedAt)}
                        <br />
                        {note.inProgress && <StaticBadge className="mt-2">In progress</StaticBadge>}
                        {!note.inProgress && <StaticBadge className="mt-2">Finishied</StaticBadge>}
                    </Card.Eyebrow>
                )}
            </article>
        </motion.div>
    );
};
