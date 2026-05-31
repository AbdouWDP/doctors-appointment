import {
  DeviceMobileIcon,
  ChatCircleDotsIcon,
  PrescriptionIcon,
  GlobeIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function BenefitsSection({ className, ...props }) {
  return (
    <section
      data-slot="benefits-section"
      aria-labelledby="benefits-heading"
      className={cn("mx-auto max-w-6xl px-4 py-12", className)}
      {...props}
    >
      <h2
        id="benefits-heading"
        className="text-center font-heading text-3xl font-bold text-foreground sm:text-4xl"
      >
        Discover Our Benefits &amp; Features
      </h2>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <FeatureCard
          icon={DeviceMobileIcon}
          title="Mobile Health Apps: Tools for patients to track symptoms, medications"
          description="Tools for patients to track symptoms, medications, and appointments, promoting self-management and engagement."
        />
        <FeatureCard
          icon={ChatCircleDotsIcon}
          title="Secure Messaging Systems: HIPAA-compliant platforms"
          description="HIPAA-compliant platforms that allow patients and providers to communicate securely."
        />
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        <FeatureCard
          icon={PrescriptionIcon}
          title="Online Prescription Services: Facilitate easy ordering"
          compact
        />
        <FeatureCard
          icon={GlobeIcon}
          title="Online global service we provide form any country"
          compact
        />
        <Card className="justify-between rounded-3xl bg-linear-to-br from-violet-300 to-violet-200 ring-0">
          <div className="flex h-full flex-col justify-between gap-6 px-5">
            <p className="font-heading text-lg font-semibold text-violet-950">
              Explore our more amazing services
            </p>
            <Button
              size="lg"
              className="w-fit rounded-full bg-card text-sm text-foreground hover:bg-card/80"
            >
              Explore more
              <ArrowRightIcon />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description, compact = false }) {
  return (
    <Card className="rounded-3xl bg-muted ring-0">
      <div className={cn("flex flex-col gap-4 px-5", compact && "gap-3")}>
        <span
          aria-hidden="true"
          className="inline-flex size-9 items-center justify-center rounded-full bg-violet-200 text-violet-600"
        >
          <Icon weight="bold" className="size-5" />
        </span>
        <h3
          className={cn(
            "font-heading font-semibold text-foreground",
            compact ? "text-base" : "text-lg",
          )}
        >
          {title}
        </h3>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
        {compact ? (
          <span className="mt-2 inline-flex size-8 items-center justify-center self-start rounded-full bg-card text-foreground">
            <ArrowUpRightIcon />
          </span>
        ) : null}
      </div>
    </Card>
  );
}

export { BenefitsSection };
