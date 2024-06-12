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
import AddJobs from "./pages/AddJobs";
import NotFound from "./pages/NotFound";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobs />} />
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
