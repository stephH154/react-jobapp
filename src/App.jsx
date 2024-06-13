import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import AddJobs from "./pages/AddJobPage";
import NotFound from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/JobPage";

const App = () => {
  // Add new job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete exist job
  const deleteJob = async (i) => {
    const res = await fetch(`/api/jobs/${i}`, {
      method: "DELETE",
    });
    console.log("DELETE" + i);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobs addJobSubmit={addJob} />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
    // <>
    //   <Navbar />
    //   {/* <Hero title="Test Title" subtitle="This is the subtitle " /> */}
    //   <Hero />
    //   <HomeCards />
    //   <Joblistings />
    //   <ViewAllJobs />
    // </>
  );
};

export default App;
