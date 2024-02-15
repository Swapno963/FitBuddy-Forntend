/* eslint-disable no-unused-vars */

import { Link, Route, Routes } from "react-router-dom";
import Apponments from "../Dashbord/Apponments";
import ClassSheduleDashBord from "../Dashbord/ClassSheduleDashBord";
import DashBordProgams from "../Dashbord/DashBordProgams";
import Home from "../Dashbord/Home";
import Membership from "../Dashbord/Membership";
import NewsLetter from "../Dashbord/NewsLetterDashBord";
import Navbar from "../Navbar";
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen  bg-gray-100 ">
        {/* Sidebar */}
        <div className="pl-12 pt-12 bg-gray-800 text-white w-64 p-4 flex-shrink-0 ">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <ul className="mt-4 space-y-2">
            <Link to={""} className="hover:bg-gray-700 p-2 rounded block">
              Home
            </Link>
            <Link
              to={"programs"}
              className="hover:bg-gray-700 p-2 rounded block"
            >
              Programs
            </Link>
            <Link
              to={"appoinments"}
              className="hover:bg-gray-700 p-2 rounded block"
            >
              Appoinments
            </Link>
            <Link
              to={"membership"}
              className="hover:bg-gray-700 p-2 rounded block"
            >
              Membership
            </Link>
            <Link
              to={"classShedule"}
              className="hover:bg-gray-700 p-2 rounded block"
            >
              Class Shedule
            </Link>
            <Link
              to={"newsLetter"}
              className="hover:bg-gray-700 p-2 rounded block"
            >
              News Letter
            </Link>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-scroll">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to the Dashboard
          </h2>

          {/* Your main content goes here */}
          <div className="bg-blue-200 p-4 rounded shadow-md">
            {/* Content goes here */}
            <div className="flex-1 p-8">
              <Routes>
                <Route path="" element={<Home />} />
                <Route path="programs" element={<DashBordProgams />} />
                <Route path="appoinments" element={<Apponments />} />
                <Route path="membership" element={<Membership />} />
                <Route path="classShedule" element={<ClassSheduleDashBord />} />
                <Route path="newsLetter" element={<NewsLetter />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
