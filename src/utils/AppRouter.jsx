import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Teambuilder } from "../pages/Teambuilder";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: ,
    children: [
      {
        path: "/teambuilder",
        element: <Teambuilder />
      }
    ]
  }
])