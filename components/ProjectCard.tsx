interface Project {
  title: string;
  description: string;
  github: string;
  live: string;
}

export default function ProjectCard({
  title,
  description,
  github,
  live,
}: Project) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-textMuted mb-4">
        {description}
      </p>

      <div className="flex gap-4 text-sm">
        <a href={github} target="_blank" className="px-4 py-2 rounded-md border border-primary/40 text-primary transition-all duration-300 hover:bg-primary hover:text-white dark:border-primary/60 dark:text-primary dark:hover:bg-primary dark:hover:text-white">GitHub</a>

        <a href={live} target="_blank" className="px-4 py-2 rounded-md border border-primary/40 text-primary transition-all duration-300 hover:bg-primary hover:text-white dark:border-primary/60 dark:text-primary dark:hover:bg-primary dark:hover:text-white">Live Demo</a>
      </div>
    </div>
  );
}
