import HeroLanding from "~/components/hero-landing";
import InfoCard from "~/components/info-card";
import Image from "next/image"
import { HeaderSection } from "~/components/header-section";
import { ArrowRight } from "lucide-react";

export default async function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroLanding />

      <div className="container flex max-w-screen-md flex-col gap-5 text-center md:flex-none md:gap-0">
        <div className="grid grid-cols-2 gap-4 pt-4">
          <InfoCard />
        </div>
      </div>
      <div className="container mx-auto max-w-screen-lg px-6 py-16 pt-32">
        <HeaderSection
          title="Resources to Help You Succeed:"
          subtitle="Explore some of the best highlights from the olympic games"
        />
        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-3">
          {[
            {
              title:
                "Get our Passion Project Guide & Start Your Organization Now!",
              img: "/item1.png",
              link: "https://ko-fi.com/s/17bd54cbf0",
            },
            {
              title:
                "Be Permanently Featured on our Instagram & Recruit Members!",
              img: "/item2.png",
              link: "https://ko-fi.com/s/398540068e",
            },
            {
              title: "Get a Story Shoutout & Recruit Members!",
              img: "/item3.png",
              link: "https://ko-fi.com/s/17bd54cbf0",
            },
          ].map((item, index) => (
            <a key={index} href={item.link} className="group flex flex-col justify-between">
              <div className="flex aspect-video text-clip rounded-xl">
                <div className="flex-1">
                  <div className="relative size-full origin-bottom transition">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="rounded-xl object-cover"
                      sizes="100%"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2 line-clamp-1 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                {item.title}
              </div>
              <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                {item.title}
              </div>
              <div className="flex items-center text-sm">
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-12 py-12">
        <div className="container mx-auto max-w-screen-lg px-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <img
              src="/founder.png"
              alt="Andra Daniela Campos"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-6 md:mt-0 md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-bold">Founder</h2>
            <p className="mt-4 leading-relaxed text-gray-700">
              This website was founded by{" "}
              <span className="font-semibold">Andra Daniela Campos</span>. As a
              high school student, I found it hard to connect with like-minded
              peers for initiatives I was passionate about. Thus, I created{" "}
              <span className="font-semibold">ProjectConnect</span>
              to empower students to develop themselves and pursue their dreams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
