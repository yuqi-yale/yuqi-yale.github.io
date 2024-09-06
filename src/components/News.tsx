import { NewsContent, NewsType } from '../data/newsApi';
import { NewsIcon } from './icons/NewsIcon';
import { InternalLink } from './InternalLink';

interface Props {
    news: NewsType;
  }

export const News = ({ news }: Props) => {
    return (
        <div className="max-w-[420px] rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-base font-semibold text-zinc-900 dark:text-zinc-100">
                <NewsIcon className="h-6 w-6 flex-none" />
                <span className="ml-3 text-lg">News {`=≡Σ(((つ•̀ω•́)つ))`}</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {NewsContent.map((news, newsIndex) => (
                    <li key={newsIndex} className="flex gap-4">
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">News</dt>
                            <dd className="flex-none text-base font-medium text-zinc-900 dark:text-zinc-100">
                                {news.link ? (
                                    <InternalLink href={news.link.href}>
                                        {news.title}
                                    </InternalLink>
                                ) : (
                                    <p>{news.title}</p>
                                )}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label={`${news.date}`}
                            >
                                <time dateTime={news.date}>{news.date}</time>
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="w-full text-xs text-zinc-500 dark:text-zinc-400">{news.description}</dd>
                        </dl>
                    </li>
                ))}
            </ol>
        </div>
    );
};