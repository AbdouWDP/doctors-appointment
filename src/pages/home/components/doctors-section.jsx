import { cn } from "@/lib/utils";
import { DoctorCard } from "@/features/doctor-card";

const DOCTORS = [
  {
    name: "Jhon",
    role: "Strategic & finance",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Martin",
    role: "Strategic & finance",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Kullok Dash",
    role: "Strategic & finance",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Shelly",
    role: "Strategic & finance",
    image:
      "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Andrew",
    role: "Strategic & finance",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80",
  },
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
        <h2
          id="doctors-heading"
          className="font-heading text-3xl font-bold text-foreground sm:text-4xl"
        >
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
