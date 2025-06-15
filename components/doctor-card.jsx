import { User, Star, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DoctorCard({ doctor }) {
  return (
    <Card className="border-emerald-900/20 hover:border-emerald-700/40 transition-all shadow-md rounded-lg">
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-emerald-900/20 flex items-center justify-center flex-shrink-0 shadow-inner">
            {doctor.imageUrl ? (
              <img
                src={doctor.imageUrl}
                alt={doctor.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <User className="h-6 w-6 text-emerald-400" />
            )}
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h3 className="font-semibold text-white text-xl">{doctor.name}</h3>
              <Badge
                variant="outline"
                className="bg-emerald-800 border-emerald-700 text-white self-start"
              >
                <Star className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground mb-1">
              {doctor.specialty} • {doctor.experience} years experience
            </p>

            <div className="mt-3 line-clamp-2 text-sm text-gray-300 mb-4">
              {doctor.description}
            </div>

            <Button
              asChild
              className="w-full bg-emerald-500 hover:bg-emerald-600 mt-2 rounded-md py-2"
            >
              <Link href={`/doctors/${doctor.specialty}/${doctor.id}`}>
                <Calendar className="h-4 w-4 mr-2" />
                View Profile & Book
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}