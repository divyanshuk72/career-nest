import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col gap-4 justify-center items-center text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter">
          Get your Dream Job
          <span> @ CareerNest</span>
        </h1>
        <p className="text-gray-300 mt-2 sm:mt-4 text-xs sm:text-xl">
          Find Your Nest in the Job Market.
        </p>
      </section>

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
    </main>
  );
};

export default LandingPage;
