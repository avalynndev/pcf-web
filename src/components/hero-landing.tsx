import Link from "next/link";

import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";

export default async function HeroLanding() {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-24">
      <div className="container flex max-w-screen-md flex-col items-center gap-5 text-center">
        <h1 className="font-satoshi text-balance text-[40px] font-black leading-[1.15] tracking-tight sm:text-5xl md:text-6xl md:leading-[1.15]">
          Find Your{" "}
          <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Perfect{" "}
          </span>
          Extracurricular Now.
        </h1>
        <p className="max-w-2xl text-balance text-muted-foreground sm:text-lg">
          ProjectConnect is a forum where youth-led initiatives recruit members,
          and high school students find extracurriculars!
        </p>
        <div className="flex justify-center space-x-2">
          <Link
            href="/projects"
            prefetch={true}
            className={cn(
              buttonVariants({ size: "lg" }),
              "gap-2 rounded-xl px-5 text-[15px]",
            )}
          >
            <span>Explore Projects</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
