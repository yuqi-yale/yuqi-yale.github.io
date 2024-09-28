import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { formatDate } from '../../lib/date';
import { Note } from '../../lib/notesApi';
import { Card } from '../Card';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../../lib/animation';
import Image from 'next/image';

interface LazyLoadImageProps {
  src: string; // 图片路径
  alt: string; // 图片描述
  layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill'; // 可选的布局属性
  width?: number; // 可选的宽度属性
  height?: number; // 可选的高度属性
  className?: string; // 可选的 className 属性
}

const LazyLoadImage: React.FC<LazyLoadImageProps> = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
      <div className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className || ''}`}>
          <Image
              src={src}
              alt={alt}
              {...props}
              onLoadingComplete={() => setIsLoaded(true)} // 图片加载完成时调用
              style={{ width: '100%', height: 'auto' }} // 自适应宽高
          />
      </div>
  );
};


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
                            <LazyLoadImage width={250} height={120} className='scale-100 hover:scale-125' alt="ImageLoading, Please refresh" src={note.coverImage} />
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
