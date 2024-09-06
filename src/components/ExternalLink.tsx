import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

type Props = {
  className?: string | null;
  href: string;
};

export const ExternalLink = ({
  className = 'underline hover:text-purple-600',
  href,
  children,
  ...otherProps
}: PropsWithChildren<Props>) => {
  return (
    <a
      className={clsx(className)}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...otherProps}
    >
      {children}
    </a>
  );
};
