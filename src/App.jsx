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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
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
