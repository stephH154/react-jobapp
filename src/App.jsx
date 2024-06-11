import React from "react";
import Navbar from "./components/Navbaro";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Joblistings from "./components/Joblistings";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero title="Test Title" subtitle="This is the subtitle " />
      <HomeCards />
      <Joblistings />

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default App;
