import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

type Props = {
  className?: string | null;
  href: string;
};

export const InternalLink = ({
  className = 'hover:underline hover:text-purple-600',
  href,
  children,
  ...otherProps
}: PropsWithChildren<Props>) => {
  return (
    <a
      className={clsx(className)}
      target="_self"
      rel="noopener noreferrer"
      href={href}
      {...otherProps}
    >
      {children}
    </a>
  );
};
