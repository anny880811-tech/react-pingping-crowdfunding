import { createHashRouter } from "react-router";
import Layout from "./layout/Layout";
import Home from "./views/Home";
import Introduce from "./components/Introduce";
import Qa from "./components/Qa";

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        // children: [
        //   {
        //     index: true,
        //     element: <Introduce />,
        //   },
        //   {
        //     path: '/:qa',
        //     element: <Qa />,
        //   },
        // ],
      },
    ],
  },
])