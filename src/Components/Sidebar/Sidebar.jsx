import React from "react";

const Sidebar = () => {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Features",
      icon: "pi pi-star",
    },
    {
      label: "Projects",
      icon: "pi pi-search",
      items: [
        {
          label: "Core",
          icon: "pi pi-bolt",
          shortcut: "⌘+S",
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
          shortcut: "⌘+B",
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
          shortcut: "⌘+U",
        },
        {
          separator: true,
        },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
              badge: 2,
            },
            {
              label: "Arora",
              icon: "pi pi-palette",
              badge: 5,
            },
          ],
        },
      ],
    },
    {
      label: "Documentation",
      icon: "pi pi-question",
      items: [
        {
          label: "Getting Started",
          icon: "pi pi-book",
        },
        {
          label: "Foundation",
          icon: "pi pi-info",
        },
        {
          label: "Components",
          icon: "pi pi-th-large",
        },
      ],
    },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-between px-2 py-4 border-r max-w-28">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center justify-center bg-primary text-white hover:text-blue-500 text-center cursor-pointer">
          <i className="pi pi-fw pi-home text-2xl"></i>
          <span className="text-sm">Dashboard</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-primary text-white hover:text-blue-500 text-center cursor-pointer">
          <i className="pi pi-fw pi-user text-2xl"></i>
          <span className="text-sm">User Management</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-primary text-white hover:text-blue-500 text-center cursor-pointer">
          <i className="pi pi-fw pi-briefcase text-2xl"></i>
          <span className="text-sm">Project Management</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-primary text-white hover:text-blue-500 text-center cursor-pointer">
          <i className="pi pi-fw pi-chart-bar text-2xl"></i>
          <span className="text-sm">Analytics</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
