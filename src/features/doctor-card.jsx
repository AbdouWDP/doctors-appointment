import {
  UserIcon,
  LinkedinLogoIcon,
  InstagramLogoIcon,
  XLogoIcon,
  FacebookLogoIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

function DoctorCard({ className, name, role, featured = false, ...props }) {
  return (
    <Card
      data-slot="doctor-card"
      data-featured={featured}
      className={cn(
        "gap-0 rounded-3xl p-0 ring-0 data-[featured=true]:bg-violet-200",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="flex aspect-4/5 items-center justify-center bg-muted"
      >
        <UserIcon weight="fill" className="size-20 text-muted-foreground/40" />
      </div>
      <div className="flex flex-col items-center gap-2 p-4 text-center">
        <h3 className="font-heading text-base font-semibold text-foreground">
          {name}
        </h3>
        <p className="text-xs text-muted-foreground">{role}</p>
        <div className="mt-1 flex items-center gap-1.5 text-muted-foreground">
          <SocialDot icon={LinkedinLogoIcon} label="LinkedIn" />
          <SocialDot icon={InstagramLogoIcon} label="Instagram" />
          <SocialDot icon={XLogoIcon} label="X" />
          <SocialDot icon={FacebookLogoIcon} label="Facebook" />
        </div>
      </div>
    </Card>
  );
}

function SocialDot({ icon: Icon, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex size-6 items-center justify-center rounded-full bg-card text-foreground ring-1 ring-foreground/10"
    >
      <Icon className="size-3" />
    </a>
  );
}

export { DoctorCard };
