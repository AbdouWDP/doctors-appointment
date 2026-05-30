import {
  FunnelSimpleIcon,
  ArrowsDownUpIcon,
  EyeSlashIcon,
  CaretDownIcon,
  DotsThreeIcon,
  PlusIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function TaskToolbar({ className, ...props }) {
  return (
    <div
      data-slot="task-toolbar"
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      <Button variant="outline" size="lg" className="rounded-lg text-sm">
        <FunnelSimpleIcon />
        Filter
        <CaretDownIcon />
      </Button>
      <Button variant="outline" size="lg" className="rounded-lg text-sm">
        <ArrowsDownUpIcon />
        Sort
      </Button>
      <Button variant="outline" size="lg" className="rounded-lg text-sm">
        <EyeSlashIcon />
        Hide
      </Button>
      <Button variant="outline" size="icon-lg" aria-label="More options" className="rounded-lg">
        <DotsThreeIcon weight="bold" />
      </Button>

      <Button size="lg" className="ml-auto rounded-lg text-sm">
        <PlusIcon />
        New Project
      </Button>
    </div>
  );
}

export { TaskToolbar };
