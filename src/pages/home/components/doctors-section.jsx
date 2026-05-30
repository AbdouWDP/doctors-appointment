import { cn } from "@/lib/utils";
import { DoctorCard } from "@/features/doctor-card";

const DOCTORS = [
  { name: "Jhon", role: "Strategic & finance" },
  { name: "Martin", role: "Strategic & finance" },
  { name: "Kullok Dash", role: "Strategic & finance", featured: true },
  { name: "Shelly", role: "Strategic & finance" },
  { name: "Andrew", role: "Strategic & finance" },
];

function DoctorsSection({ className, ...props }) {
  return (
    <section
      data-slot="doctors-section"
      aria-labelledby="doctors-heading"
      className={cn("mx-auto max-w-6xl px-4 py-12", className)}
      {...props}
    >
      <div className="text-center">
        <h2 id="doctors-heading" className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Let&apos;s meet with expert doctors
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We aim to share information about our team
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {DOCTORS.map((doctor) => (
          <li key={doctor.name}>
            <DoctorCard {...doctor} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export { DoctorsSection };
