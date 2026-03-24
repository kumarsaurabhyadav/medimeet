import Link from "next/link";
import { Mail, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact Support - MediMeet",
  description: "Get help from MediMeet support",
};

export default function ContactSupportPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-xl rounded-lg border bg-card p-6 space-y-4">
        <div className="flex items-center gap-2">
          <LifeBuoy className="h-5 w-5 text-emerald-500" />
          <h1 className="text-lg font-semibold">Need help?</h1>
        </div>
        <p className="text-muted-foreground">
          Reach out to support and include your registered email plus issue details.
        </p>
        <div className="flex items-center gap-2 text-sm">
          <Mail className="h-4 w-4 text-emerald-500" />
          <a className="underline" href="mailto:support@medimeet.com">
            support@medimeet.com
          </a>
        </div>
        <Button asChild>
          <Link href="/">Go to Home</Link>
        </Button>
      </div>
    </div>
  );
}
