import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Topbar from "../Components/Topbar/Topbar";
import UserManagement from "../Components/UserManagement/UserManagement";

const Home = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Topbar />
      <div className="h-full flex-1 flex">
        <Sidebar />
        <UserManagement />
      </div>
    </div>
  );
};

export default Home;
