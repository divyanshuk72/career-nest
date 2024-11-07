import { getJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/use-fetch";
import { useEffect } from "react";

const JobListing = () => {
  const {
    fn: fnJobs,
    data: dataJobs,
    loading: loadingJobs,
  } = useFetch(getJobs);

  useEffect(() => {
    fnJobs();
  }, []);

  return <div>JobListing</div>;
};

export default JobListing;
