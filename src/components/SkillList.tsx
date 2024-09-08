import { Skills } from 'src/data/lifeApi';
import { Badge } from './Badge';

export const SkillList = () => {
    return (
        <div className="mt-6 space-y-4">
            {Skills.map((skill, index) => (
                <div className="space-y-2" key={index}>
                    <div className="text-basic font-semibold text-gray-600">{skill.type}</div>
                    <div className='flex flex-wrap gap-3'>
                        {skill.content.map((item, idx) => (
                            <Badge className="cursor-text space-x-4 items-center rounded-md border px-2 py-0.5 text-xs font-semibold text-nowrap border-transparent print:text-[10px]" key={idx}>{item}</Badge>
                        ))}
                    </div>

                </div>
            ))}
        </div>
    );
};
