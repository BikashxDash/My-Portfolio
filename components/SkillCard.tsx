interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="border border-primary/30 dark:border-primary/40 rounded-lg p-5">
      <h3 className="text-lg font-semibold mb-4">
        {title}
      </h3>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span className="text-sm text-textMuted">
                {skill.level}%
              </span>
            </div>

            <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded">
              <div
                className="h-2 bg-primary rounded"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
