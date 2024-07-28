import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Error from "../Error/Error";
import Root from "../Root/Root";
import JobDetails from "../../pages/JobDetails/JobDetails";
import AppliedJobs from "../../AppliedJobs/AppliedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <JobDetails />,
        loader: () => fetch("../allJobs.json"),
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: () => fetch("/allJobs.json"), // we will not load 
        // all the data we will load only data we need
      },
    ],
  },
]);

export default router;
