import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

// JSON data for features
export const features = [
  {
    icon: <User className="h-6 w-6 text-emerald-300 mb-2" />,
    title: "Create Your Profile",
    description:
      "• Sign up easily\n• Complete your profile\n• Receive personalized healthcare recommendations and services",
  },
  {
    icon: <Calendar className="h-6 w-6 text-emerald-300 mb-2" />,
    title: "Book Appointments",
    description:
      "• Browse detailed doctor profiles\n• Check real-time availability\n• Schedule appointments that suit your calendar",
  },
  {
    icon: <Video className="h-6 w-6 text-emerald-300 mb-2" />,
    title: "Video Consultation",
    description:
      "• Secure, high-quality video calls\n• Consult doctors from your home\n• Save time and avoid travel",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-emerald-300 mb-2" />,
    title: "Consultation Credits",
    description:
      "• Flexible credit packages\n• Affordable subscription plans\n• Manage your healthcare budget with ease",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-300 mb-2" />,
    title: "Verified Doctors",
    description:
      "• Thorough vetting process\n• Trusted healthcare providers\n• Quality care you can rely on",
  },
  {
    icon: <FileText className="h-6 w-6 text-emerald-300 mb-2" />,
    title: "Medical Documentation",
    description:
      "• Access appointment history\n• Review doctor's notes\n• Manage your medical recommendations securely",
  },
];

// JSON data for testimonials
export const testimonials = [
  {
    initials: "SP",
    name: "Sarah P.",
    role: "Patient",
    quote:
      "The video consultation saved me valuable time — I got expert advice without missing work or traveling.",
  },
  {
    initials: "DR",
    name: "Dr. Robert M.",
    role: "Cardiologist",
    quote:
      "This platform transformed my practice, enabling me to reach more patients and deliver timely care remotely.",
  },
  {
    initials: "JT",
    name: "James T.",
    role: "Patient",
    quote:
      "The credit system is incredibly convenient. I purchased a family package and easily consulted specialists whenever needed.",
  },
];

// JSON data for credit system benefits
export const creditBenefits = [
  "Each consultation requires <strong class=\"text-emerald-300 font-semibold\">2 credits</strong> regardless of duration",
  "Credits <strong class=\"text-emerald-300 font-semibold\">never expire</strong> - use them whenever you need",
  "Monthly subscriptions give you <strong class=\"text-emerald-300 font-semibold\">fresh credits every month</strong>",
  "Cancel or change your subscription <strong class=\"text-emerald-300 font-semibold\">anytime</strong> without penalties",
];