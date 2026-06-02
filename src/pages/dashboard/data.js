// Static mock data for the doctors dashboard (presentational only — no logic).

export const APPOINTMENTS = [
  {
    patient: "Olivia Carter",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    reason: "Routine heart check-up",
    time: "09:00 AM",
    doctor: "Dr. Andrew Bennett",
    specialty: "Cardiology",
    mode: "In-person",
    status: "Confirmed",
    statusTone: "emerald",
  },
  {
    patient: "Liam Walker",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    reason: "Skin allergy follow-up",
    time: "09:45 AM",
    doctor: "Dr. Shelly Moore",
    specialty: "Dermatology",
    mode: "Video",
    status: "Pending",
    statusTone: "amber",
  },
  {
    patient: "Emma Thompson",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    reason: "Migraine consultation",
    time: "10:30 AM",
    doctor: "Dr. Martin Reed",
    specialty: "Neurology",
    mode: "In-person",
    status: "Confirmed",
    statusTone: "emerald",
  },
  {
    patient: "Noah Mitchell",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    reason: "Post-surgery review",
    time: "11:15 AM",
    doctor: "Dr. Jhon Davis",
    specialty: "Orthopedics",
    mode: "In-person",
    status: "Cancelled",
    statusTone: "rose",
  },
  {
    patient: "Ava Robinson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    reason: "Pediatric vaccination",
    time: "01:00 PM",
    doctor: "Dr. Kullok Dash",
    specialty: "Pediatrics",
    mode: "Video",
    status: "Confirmed",
    statusTone: "emerald",
  },
];

export const DOCTORS = [
  {
    id: "1",
    name: "Andrew Bennett",
    role: "Cardiology",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "2",
    name: "Shelly Moore",
    role: "Dermatology",
    image:
      "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "3",
    name: "Kullok Dash",
    role: "Pediatrics",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "4",
    name: "Martin Reed",
    role: "Neurology",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "5",
    name: "Jhon Davis",
    role: "Orthopedics",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80",
  },
];

export const PATIENTS = [
  {
    name: "Olivia Carter",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    patientId: "#PT-1042",
    email: "olivia.carter@mail.com",
    phone: "+1 (415) 555-0132",
    gender: "Female",
    age: 34,
    lastVisit: "May 12, 2026",
    status: "Active",
    statusTone: "emerald",
  },
  {
    name: "Liam Walker",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    patientId: "#PT-1043",
    email: "liam.walker@mail.com",
    phone: "+1 (415) 555-0188",
    gender: "Male",
    age: 28,
    lastVisit: "May 20, 2026",
    status: "Active",
    statusTone: "emerald",
  },
  {
    name: "Emma Thompson",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    patientId: "#PT-1044",
    email: "emma.thompson@mail.com",
    phone: "+1 (415) 555-0144",
    gender: "Female",
    age: 41,
    lastVisit: "Apr 30, 2026",
    status: "Follow-up",
    statusTone: "amber",
  },
  {
    name: "Noah Mitchell",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    patientId: "#PT-1045",
    email: "noah.mitchell@mail.com",
    phone: "+1 (415) 555-0176",
    gender: "Male",
    age: 52,
    lastVisit: "Mar 18, 2026",
    status: "Discharged",
    statusTone: "neutral",
  },
  {
    name: "Ava Robinson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    patientId: "#PT-1046",
    email: "ava.robinson@mail.com",
    phone: "+1 (415) 555-0109",
    gender: "Female",
    age: 7,
    lastVisit: "May 28, 2026",
    status: "Active",
    statusTone: "emerald",
  },
];

export const WEEKLY_APPOINTMENTS = [
  { label: "Mon", value: 18 },
  { label: "Tue", value: 24 },
  { label: "Wed", value: 16 },
  { label: "Thu", value: 30, highlight: true },
  { label: "Fri", value: 22 },
  { label: "Sat", value: 12 },
  { label: "Sun", value: 6 },
];

export const DEPARTMENTS = [
  { label: "Cardiology", value: 32, tone: "bg-emerald-500" },
  { label: "Neurology", value: 24, tone: "bg-blue-500" },
  { label: "Pediatrics", value: 21, tone: "bg-amber-500" },
  { label: "Orthopedics", value: 14, tone: "bg-rose-500" },
  { label: "Dermatology", value: 9, tone: "bg-violet-500" },
];

export const TODAY_SCHEDULE = [
  {
    time: "09:00",
    patient: "Olivia Carter",
    reason: "Heart check-up",
    tone: "emerald",
  },
  {
    time: "09:45",
    patient: "Liam Walker",
    reason: "Allergy follow-up",
    tone: "amber",
  },
  {
    time: "10:30",
    patient: "Emma Thompson",
    reason: "Migraine consult",
    tone: "emerald",
  },
  {
    time: "11:15",
    patient: "Noah Mitchell",
    reason: "Post-surgery review",
    tone: "rose",
  },
  {
    time: "01:00",
    patient: "Ava Robinson",
    reason: "Vaccination",
    tone: "emerald",
  },
];
