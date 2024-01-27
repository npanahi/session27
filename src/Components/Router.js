import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviePage from "../pages/movie-page/MoviePage";
import InternalPage from "../pages/internal-page/InternalPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MoviePage />,
    },

    {
      path: "/movies/:id",
      element: <InternalPage />,
    },
    {
      path: "*",
      element: <div>Error404</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}
