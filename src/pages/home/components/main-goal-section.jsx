import { CheckCircleIcon, UserIcon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

const GOALS = [
  "Providing Accessible Information",
  "Building Trust",
  "Enhancing Patient Engagement",
  "Community Involvement",
  "Promoting Health Education",
  "Security and Privacy",
];

function MainGoalSection({ className, ...props }) {
  return (
    <section
      data-slot="main-goal-section"
      aria-labelledby="main-goal-heading"
      className={cn("mx-auto max-w-6xl px-4 py-12", className)}
      {...props}
    >
      <div className="grid items-center gap-8 rounded-3xl bg-muted p-8 lg:grid-cols-2 lg:p-12">
        <div className="flex flex-col gap-6">
          <h2 id="main-goal-heading" className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Let&apos;s know about our main goal
          </h2>
          <p className="max-w-md text-sm text-muted-foreground">
            We aim to offer clear and comprehensive information about our services,
            conditions treated, and treatment options. This ensures that patients can make
            informed decisions about their healthcare.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {GOALS.map((goal) => (
              <li key={goal} className="inline-flex items-center gap-2 text-sm text-foreground">
                <CheckCircleIcon weight="fill" className="size-5 shrink-0 text-violet-500" />
                {goal}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-end justify-center">
          <div
            aria-hidden="true"
            className="flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl bg-gradient-to-br from-violet-200 to-violet-100"
          >
            <UserIcon weight="fill" className="size-32 text-violet-400" />
          </div>
        </div>
      </div>
    </section>
  );
}

export { MainGoalSection };
