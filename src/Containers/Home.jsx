import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Topbar from "../Components/Topbar/Topbar";
import UserManagement from "../Components/UserManagement/UserManagement";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import Analysis from "../Components/Analysis/Analysis";
const Home = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Topbar />
      <div className="h-full w-full flex-1 flex overflow-hidden">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="analysis" element={<Analysis />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
