import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Teambuilder } from "../pages/Teambuilder";
import { ErrorPage } from "../pages/ErrorPage";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/teambuilder",
        element: <Teambuilder />
      }
    ]
  }
])