import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Update Profile - MediMeet",
  description: "Doctor profile update page",
};

export default function DoctorUpdateProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-xl rounded-lg border bg-card p-6 space-y-4">
        <div className="flex items-center gap-2 text-amber-500">
          <AlertTriangle className="h-5 w-5" />
          <h1 className="text-lg font-semibold">Profile update is coming soon</h1>
        </div>
        <p className="text-muted-foreground">
          We are working on a dedicated doctor profile update flow. For now, please
          contact support if your details need to be changed urgently.
        </p>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/doctor">Back to Dashboard</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact-support">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
