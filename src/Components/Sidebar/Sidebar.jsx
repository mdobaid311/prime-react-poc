import React from "react";
import logo from "../../assets/DW-logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    {
      label: "Dashboard",
      icon: "pi pi-home text-xl",
      to: "/",
    },
    {
      label: "User Management",
      icon: "pi pi-user text-xl",
      to: "user-management",
    },
  ];

  return (
    <div className="h-screen flex">
      <aside className="flex-col items-center shadow h-full">
        <div className="h-16 flex items-center w-full">
          <Link className="h-6 w-6 mx-auto" to="/">
            <img className="h-6 w-6 mx-auto" src={logo} alt="svelte logo" />
          </Link>
        </div>

        <ul>
          {links.map((link) => (
            <li
              key={link.to}
              className="hover:brightness-125 hover:backdrop-blur-3xl"
            >
              <Link
                to={link.to}
                className="h-16 px-6 flex justify-center items-center w-full
            focus:text-blue-500"
              >
                <i className={link.icon}></i>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto h-16 flex items-center w-full">
          <button
            className="h-16 w-full flex justify-center items-center
			 focus:text-blue-500 hover:backdrop-blur-2xl hover:brightness-125 focus:outline-none"
          >
            <svg
              className="h-5 w-5 text-red-700"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
