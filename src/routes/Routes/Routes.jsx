import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Error from "../Error/Error";
import Root from "../Root/Root";

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
    ],
  },
]);

export default router;
