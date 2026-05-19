import { createHashRouter } from "react-router";
import Layout from "./layout/Layout";
import Home from "./views/Home";
import Introduce from "./components/Introduce";
import Qa from "./components/Qa";
import CurrentProgres from "./components/CurrentProgres";
import Message from "./components/Message";

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            index: true,
            element: <Introduce />,
          },
          {
            path: 'qa',
            element: <Qa />,
          },
          {
            path: 'progres',
            element: <CurrentProgres />,
          },
          {
            path: 'message',
            element: <Message />,
          },
        ],
      },
    ],
  },
])