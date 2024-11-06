import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import Autoplay from "embla-carousel-autoplay";
import Banner from "/Banner.png";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      {/* Heading  */}
      <section className="text-center">
        <h1 className="flex flex-col gap-4 justify-center items-center text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter">
          Get your Dream Job
          <span> @ CareerNest</span>
        </h1>
        <p className="text-gray-300 mt-2 sm:mt-4 text-xs sm:text-xl">
          Find Your Nest in the Job Market.
        </p>
      </section>
      {/* Buttons  */}
      <div className="flex gap-6 justify-center">
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>
      {/* Carousel  */}
      <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full py-10">
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* Banner  */}
      <img src={Banner} alt="Banner" className="w-full" />
    </main>
  );
};

export default LandingPage;
