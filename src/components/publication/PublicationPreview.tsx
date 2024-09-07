import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import { formatDateMY } from '../../lib/date';
import { Publication } from '../../lib/publicationApi';
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
    note: Publication;
    dense?: boolean;
}

export const PublicationPreview = ({ note, dense }: Props) => {
    return (
        <motion.div
            initial={ANIMATION_FROM_PROPS}
            whileInView={ANIMATION_TO_PROPS}
            viewport={{ once: true }}
        >
            <article className="grid grid-cols-6 items-center">
                <div className="col-span-3">
                    <Card className="md:col-span-3">
                        <Card.Title>{note.title}</Card.Title>
                        <Card.Eyebrow
                            as="time"
                            dateTime={note.year}
                            className={clsx(!dense && 'md:hidden')}
                            decorate
                        >
                            {formatDateMY(note.year)}
                            {note.isPublished && <StaticBadge className="ml-4">{note.express}</StaticBadge>}
                        </Card.Eyebrow>
                        <Card.Description>
                            <HighlightedDescription description={note.description} />
                        </Card.Description>
                        <Card.CtaLink href={`/publications/${note.slug}`}>Open Post</Card.CtaLink>
                        <Card.CtaLink href={note.url}>Open URL</Card.CtaLink>
                    </Card>
                </div>
                <Card className="md:col-span-2 relative">
                    {note.coverImage
                        ? <a href={`/publications/${note.slug}`}>
                            <img className='scale-100 hover:scale-125' alt="" src={note.coverImage} />
                        </a>
                        : null}
                </Card>
                {!dense && (
                    <Card.Eyebrow as="time" dateTime={note.year} className="mt-1 hidden md:block">
                        {formatDateMY(note.year)}
                        <br />
                        {note.isPublished && <StaticBadge className="mt-2">{note.express}</StaticBadge>}
                    </Card.Eyebrow>
                )}
            </article>
        </motion.div>
    );
};

interface DescriptionProps {
    description: string;
}
const HighlightedDescription: React.FC<DescriptionProps> = ({ description }) => {
    // 将字符串拆分为包含 "Yuqi Zhao" 和其他部分的数组
    const parts = description.split(/(Yuqi Zhao)/g);

    return (
        <span>
            {parts.map((part, index) =>
                part === 'Yuqi Zhao' ? <strong key={index}>{part}</strong> : part
            )}
        </span>
    );
};
