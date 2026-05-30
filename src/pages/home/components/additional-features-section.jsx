import {
  MapPinIcon,
  CheckCircleIcon,
  StarIcon,
  CalendarPlusIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FEATURES = [
  "Personalized Health Assessments",
  "Patient Education",
  "Integration with Pharmacy Services",
  "Virtual Health Assistant",
  "Emergency Contact Feature",
  "Health Tracking",
];

function AdditionalFeaturesSection({ className, ...props }) {
  return (
    <section
      data-slot="additional-features-section"
      aria-labelledby="additional-features-heading"
      className={cn("mx-auto max-w-6xl px-4 py-12", className)}
      {...props}
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="relative flex min-h-72 items-center justify-center overflow-hidden rounded-3xl bg-muted">
          <MapPinIcon weight="fill" className="size-16 text-muted-foreground/30" />
          <Card className="absolute bottom-6 left-6 w-60 rounded-2xl shadow-xl" size="sm">
            <div className="flex flex-col gap-3 px-4">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-flex size-8 items-center justify-center rounded-full bg-violet-200 font-heading text-xs font-bold text-violet-700"
                >
                  Dr
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-foreground">Dr. Bruce</span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground">
                    <StarIcon weight="fill" className="size-2.5 text-amber-500" /> 4.7
                  </span>
                </div>
              </div>
              <Button size="lg" className="h-9 rounded-full bg-violet-500 text-xs text-white hover:bg-violet-600">
                <CalendarPlusIcon />
                Make Appointment
              </Button>
            </div>
          </Card>
        </div>

        <div className="flex flex-col justify-center gap-6 rounded-3xl bg-muted p-8">
          <span
            aria-hidden="true"
            className="inline-flex size-9 items-center justify-center rounded-full bg-violet-200 text-violet-600"
          >
            <CheckCircleIcon weight="fill" className="size-5" />
          </span>
          <h2 id="additional-features-heading" className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Additional Medical Features
          </h2>
          <p className="max-w-md text-sm text-muted-foreground">
            Offer programs focused on preventive care, nutrition, exercise, and mental
            health, complete with tracking and progress reports.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <li key={feature} className="inline-flex items-center gap-2 text-sm text-foreground">
                <CheckCircleIcon weight="fill" className="size-4 shrink-0 text-violet-500" />
                {feature}
              </li>
            ))}
          </ul>
          <Button size="lg" className="w-fit rounded-full bg-violet-500 text-sm text-white hover:bg-violet-600">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
}

export { AdditionalFeaturesSection };
