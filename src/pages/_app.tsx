import { Analytics } from '@vercel/analytics/react';
import 'focus-visible';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { GeistSans } from 'geist/font/sans';
import React, { useEffect, useRef } from 'react';
import Script from "next/script";

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import '../styles/index.css';
import '../styles/prism.css';

function usePrevious(value: string) {
    let ref = useRef<string>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

export default function App({ Component, pageProps, router }: AppProps) {
    let previousPathname = usePrevious(router.pathname);

    return (
        <>
            <Script
                id="my-scriptGA-1"
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script id="my-scriptGA-2" strategy="lazyOnload">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
                page_path: window.location.pathname,
                });
                `}
            </Script>
            <ThemeProvider attribute="class">
                <div className={`${GeistSans.className}`}>
                    <div className="fixed inset-0 flex justify-center sm:px-8">
                        <div className="flex w-full max-w-7xl lg:px-8">
                            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
                        </div>
                    </div>
                    <div className="relative">
                        <Header />
                        <main>
                            <Component previousPathname={previousPathname} {...pageProps} />
                        </main>
                        <Footer />
                    </div>
                    <Analytics />
                </div>
            </ThemeProvider>
        </>
    );
}