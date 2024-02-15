import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// for router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/DashBoard.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Register from "./Components/Register.jsx";
import LogIn from "./Components/SingnIn.jsx";
import Apponments from "./Dashbord/Apponments.jsx";
import ClassSheduleDashBord from "./Dashbord/ClassSheduleDashBord.jsx";
import DashBordProgams from "./Dashbord/DashBordProgams.jsx";
import Membership from "./Dashbord/Membership.jsx";
import NewsLetter from "./Dashbord/NewsLetterDashBord.jsx";
import DetailPricing from "./Components/DetailPricing.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LogIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/detailPrice",
    element: <DetailPricing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard/*",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "programs",
        element: <DashBordProgams />,
        errorElement: <ErrorPage />,
      },
      {
        path: "appoinments",
        element: <Apponments />,
        errorElement: <ErrorPage />,
      },
      {
        path: "membership",
        element: <Membership />,
        errorElement: <ErrorPage />,
      },
      {
        path: "classShedule",
        element: <ClassSheduleDashBord />,
        errorElement: <ErrorPage />,
      },
      {
        path: "newsLetter",
        element: <NewsLetter />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
