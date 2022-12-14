import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import ErrorPage from "./Error";
import Home from "./components/pages/Home";
import Games from "./components/pages/Games";
import Game from "./components/pages/Game";
import News from "./components/pages/News";
import Giveaways from "./components/pages/Giveaways";
import "./css/main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/games",
    element: <Games />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/games/:id",
    element: <Game />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/news",
    element: <News />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/giveaways",
    element: <Giveaways />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
