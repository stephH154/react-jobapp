import React from "react";

import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import Joblistings from "../components/Joblistings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      {/* <Hero title="Test Title" subtitle="This is the subtitle " /> */}
      <Hero />
      <HomeCards />
      <Joblistings />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
