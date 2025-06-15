import Pricing from "@/components/pricing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { creditBenefits, features, testimonials } from "@/lib/data";
import { ArrowRight, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden pt-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium shadow-md">Simplifying Healthcare for You</Badge>
              <h1 className=" text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Your Health, Our Priority<br /><span className="gradient-title">Expert Care Anywhere</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-lg pb-4">
                Access top doctors, book video consultations, and manage prescriptions – all in one smart healthcare app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/onboarding">
                    Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border border-emerald-600 text-white hover:bg-emerald-600 hover:text-white px-6 py-3 rounded-lg shadow transition duration-300"
                >
                  <Link href="/doctors">Browse Doctors</Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-105">
              <Image
                src="/banner2.png"
                alt="Doctor consultation"
                width={800}
                height={500}
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30 backdrop-blur-sm bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform makes healthcare accessible with just a few clicks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-emerald-900/20 hover:border-emerald-500 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <CardHeader className="pb-2">
                  <div className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20  backdrop-blur-sm bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <Badge
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
              >
                Affordable Healthcare
              </Badge>

            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the perfect consultation package that fits your healthcare
              needs
            </p>
          </div>
          <div>
            {/* pricing table */}
            <Pricing/>

            <Card className="mt-12 bg-muted/20 border-emerald-900/30">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-emerald-400" />
                  How Our Credit System Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {creditBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 bg-emerald-900/20 p-1 rounded-full">
                        <svg
                          className="h-4 w-4 text-emerald-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <p
                        className="text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: benefit }}
                      />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
            >
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from patients and doctors who use our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card border-emerald-900/20 hover:border-emerald-500 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center mr-4 shadow-md">
                      <span className="text-emerald-400 font-bold">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 border-emerald-800/20">
            <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="max-w-2xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-300 to-white bg-clip-text text-transparent">
                  Empower Your Health Journey, One Click at a Time
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed tracking-wide">
                  Discover a smarter way to manage your health. From virtual consultations to digital prescriptions, we bring modern healthcare to your fingertips. Start today and take the first step toward a healthier tomorrow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-emerald-600 text-white hover:bg-emerald-700 transition-transform transform hover:scale-105 duration-300"
                  >
                    <Link href="/sign-up">Sign Up Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-emerald-700/30 hover:bg-muted/80 transition-transform transform hover:scale-105 duration-300"
                  >
                    <Link href="#pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>

              {/* Decorative healthcare elements */}
              <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-emerald-800/10 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse"></div>
              <div className="absolute left-0 bottom-0 w-[200px] h-[200px] bg-emerald-700/10 rounded-full blur-3xl -ml-10 -mb-10 animate-pulse"></div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
