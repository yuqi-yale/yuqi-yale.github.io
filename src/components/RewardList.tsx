import { Reward } from 'src/data/lifeApi';

export const RewardList = () => {
    return (
        <ol className="mt-6 space-y-4">
            {Reward.map((reward, rewardIndex) => (
                <li key={rewardIndex} className="flex gap-4">
                    <dl className="flex flex-auto flex-wrap gap-x-2">
                        <dt className="sr-only">Organization</dt>
                        <dd className="flex-none text-base font-medium text-zinc-900 dark:text-zinc-100">
                            {reward.content}
                        </dd>
                        <dt className="sr-only">Date</dt>
                        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                            <time dateTime={reward.date}>{reward.date}</time>
                        </dd>
                        <dt className="sr-only">reward</dt>
                        <dd className="w-full text-xs text-zinc-500 dark:text-zinc-400">{reward.organization}{reward.description?` · ${reward.description}`:``}</dd>
                    </dl>
                </li>
            ))}
        </ol>
    );
};
