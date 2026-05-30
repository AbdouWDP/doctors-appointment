import {
  CalendarCheckIcon,
  DownloadSimpleIcon,
  StarIcon,
  EyeIcon,
  HeartIcon,
  ToothIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";

function HeroSection({ className, ...props }) {
  return (
    <section
      data-slot="hero-section"
      aria-labelledby="hero-heading"
      className={cn("mx-auto max-w-6xl px-4 py-8", className)}
      {...props}
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="relative flex flex-col justify-between gap-10 overflow-hidden rounded-3xl bg-linear-to-br from-violet-300 via-violet-200 to-violet-100 p-8">
          <Badge className="w-fit rounded-full bg-card/70 text-violet-700">
            <StarIcon weight="fill" className="text-violet-500" />
            24/7 Service Available
          </Badge>

          <h1
            id="hero-heading"
            className="font-heading text-4xl font-bold leading-tight text-violet-950 sm:text-5xl"
          >
            Daily Dental Care for a Healthy Smile
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="h-11 rounded-full bg-foreground text-sm text-background"
            >
              <CalendarCheckIcon />
              Schedule an appointment
            </Button>
            <Button
              size="lg"
              className="h-11 rounded-full bg-foreground text-sm text-background"
            >
              <DownloadSimpleIcon />
              Download App
            </Button>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-2xl bg-card/70 p-2 pr-4">
            <AvatarGroup data-size="sm">
              <Avatar data-size="sm">
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <Avatar data-size="sm">
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
              <Avatar data-size="sm">
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>2k+</AvatarGroupCount>
            </AvatarGroup>
            <p className="text-xs text-muted-foreground">
              More than 2k+ Doctors in your door
            </p>
          </div>
        </div>

        <div className="relative flex min-h-80 flex-col justify-between overflow-hidden rounded-3xl bg-muted p-6">
          <div className="flex items-start justify-between">
            <Badge className="rounded-full bg-card/80 text-foreground">
              <span aria-hidden="true">↗</span> 20%
            </Badge>
            <div className="flex gap-1">
              <span
                aria-hidden="true"
                className="size-7 rounded-full bg-card/80"
              />
              <span
                aria-hidden="true"
                className="size-7 rounded-full bg-card/80"
              />
              <span
                aria-hidden="true"
                className="size-7 rounded-full bg-foreground"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-3">
            <span className="font-heading text-3xl font-bold text-foreground">
              90 mg/dL
            </span>
            <div className="flex flex-wrap gap-2">
              <Badge className="rounded-full bg-card/80 text-foreground">
                <EyeIcon /> Eye Consultation
              </Badge>
              <Badge className="rounded-full bg-card/80 text-foreground">
                <HeartIcon /> Psycology
              </Badge>
              <Badge className="rounded-full bg-card/80 text-foreground">
                <ToothIcon /> Dental Treatment
              </Badge>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <Badge className="rounded-full bg-card/80 text-foreground">
              <StarIcon weight="fill" className="text-amber-500" />
              4k+ Happy clients with top reviews
            </Badge>
            <p className="max-w-56 text-xs text-muted-foreground">
              We are ready to serve you with pleasure and fast response
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
