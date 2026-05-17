import { createHashRouter } from "react-router";
import Layout from "./layout/Layout";
import Home from "./views/Home";
import Qa from "./views/Qa";

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'qa',
        element: <Qa />,
      },
    ],
  },
])