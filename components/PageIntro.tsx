type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

// Opening block for every page except home.
export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="pt-12 sm:pt-20">
      <p className="text-sm text-zinc-500">{eyebrow}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed sm:text-lg sm:leading-relaxed">{description}</p>
    </div>
  );
}
