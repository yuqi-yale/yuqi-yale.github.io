import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import { formatDate } from '../../lib/date';
import { Note } from '../../lib/notesApi';
import { Card } from '../Card';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../../lib/animation';

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

export const NotePreviewHome = ({ note, dense }: Props) => {
    return (
        <motion.div
            initial={ANIMATION_FROM_PROPS}
            whileInView={ANIMATION_TO_PROPS}
            viewport={{ once: true }}
        >
            <article className="grid grid-cols-4 items-baseline">
                <div className="col-span-3">
                    <Card className="md:col-span-3">
                        <Card.Title href={`/publications/${note.slug}`}>{note.title}</Card.Title>
                        <Card.Eyebrow
                            as="time"
                            dateTime={note.publishedAt}
                            className={clsx(!dense && 'md:hidden')}
                            decorate
                        >
                            {formatDate(note.publishedAt)}
                            {note.inProgress && <StaticBadge className="ml-4">In progress</StaticBadge>}
                            {!note.inProgress && <StaticBadge className="ml-4">Published</StaticBadge>}
                        </Card.Eyebrow>
                        <Card.Description>{note.description}</Card.Description>
                        <Card.Cta>Read blog</Card.Cta>
                    </Card>
                </div>
                {!dense && (
                    <Card.Eyebrow as="time" dateTime={note.publishedAt} className="mt-1 hidden md:block">
                        {formatDate(note.publishedAt)}
                        {note.inProgress && <StaticBadge className="mt-2">In progress</StaticBadge>}
                        {!note.inProgress && <StaticBadge className="ml-4">Published</StaticBadge>}
                    </Card.Eyebrow>
                )}
            </article>
        </motion.div>
    );
};
