import React, { useEffect, useState } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import logo from "../../assets/DW-logo.png";
import { Dropdown } from "primereact/dropdown";

const Topbar = () => {
  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );
  const items = [
    // {
    //   label: "Home",
    //   icon: "pi pi-home",
    // },
    // {
    //   label: "Features",
    //   icon: "pi pi-star",
    // },
    // {
    //   label: "Projects",
    //   icon: "pi pi-search",
    //   items: [
    //     {
    //       label: "Core",
    //       icon: "pi pi-bolt",
    //       shortcut: "⌘+S",
    //       template: itemRenderer,
    //     },
    //     {
    //       label: "Blocks",
    //       icon: "pi pi-server",
    //       shortcut: "⌘+B",
    //       template: itemRenderer,
    //     },
    //     {
    //       label: "UI Kit",
    //       icon: "pi pi-pencil",
    //       shortcut: "⌘+U",
    //       template: itemRenderer,
    //     },
    //     {
    //       separator: true,
    //     },
    //     {
    //       label: "Templates",
    //       icon: "pi pi-palette",
    //       items: [
    //         {
    //           label: "Apollo",
    //           icon: "pi pi-palette",
    //           badge: 2,
    //           template: itemRenderer,
    //         },
    //         {
    //           label: "Ultima",
    //           icon: "pi pi-palette",
    //           badge: 3,
    //           template: itemRenderer,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   label: "Contact",
    //   icon: "pi pi-envelope",
    //   badge: 3,
    //   template: itemRenderer,
    // },
  ];

  const [theme, setTheme] = useState("");
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `../public/themes/${theme}/theme.css`;
    console.log(link);
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [theme]);


  const themes = [
    {
      name: "Lara Light Blue",
      value: "lara-light-blue",
    },
    {
      name: "Lara Dark Cyan",
      value: "lara-dark-cyan",
    },
    {
      name: "Lara Dark Teal",
      value: "lara-dark-teal",
    },
    {
      name: "Lara Dark Purple",
      value: "lara-dark-purple",
    },
    {
      name: "Lara Dark Blue",
      value: "lara-dark-blue",
    },
    {
      name: "Lara Light Purple",
      value: "lara-light-purple",
    },
    {
      name: "Lara Light Teal",
      value: "lara-light-teal",
    },
    {
      name: "Lara Light Indigo",
      value: "lara-light-indigo",
    },
    {
      name: "Lara Dark Indigo",
      value: "lara-dark-indigo",
    },
    {
      name: "Fluent Light",
      value: "fluent-light",
    },
    {
      name: "Tailwind Light",
      value: "tailwind-light",
    },
    {
      name: "MDC Light Deep Purple",
      value: "mdc-light-deeppurple",
    },
    {
      name: "MDC Light Indigo",
      value: "mdc-light-indigo",
    },
    {
      name: "MD Light Deep Purple",
      value: "md-light-deeppurple",
    },
    {
      name: "MD Light Indigo",
      value: "md-light-indigo",
    },
    {
      name: "Bootstrap4 Light Purple",
      value: "bootstrap4-light-purple",
    },
    {
      name: "Bootstrap4 Light Blue",
      value: "bootstrap4-light-blue",
    },
    {
      name: "Viva Dark",
      value: "viva-dark",
    },
    {
      name: "Viva Light",
      value: "viva-light",
    },
    {
      name: "Soho Dark",
      value: "soho-dark",
    },
    {
      name: "Soho Light",
      value: "soho-light",
    },
    {
      name: "Lara Light Purple",
      value: "lara-light-purple",
    },
    {
      name: "Lara Light Teal",
      value: "lara-light-teal",
    },
    {
      name: "Lara Dark Blue",
      value: "lara-dark-blue",
    },
    {
      name: "Lara Dark Indigo",
      value: "lara-dark-indigo",
    },
    {
      name: "Lara Dark Purple",
      value: "lara-dark-purple",
    },
    {
      name: "Lara Dark Teal",
      value: "lara-dark-teal",
    },
    {
      name: "Lara Light Blue",
      value: "lara-light-blue",
    },
  ];

  const start = (
    <div className="flex items-center ">
      <img alt="logo" src={logo} className="h-[30px] mr-2"></img>
      <span className="text-xl font-bold">Data Warehouse</span>
    </div>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <Dropdown
        options={themes}
        value={theme}
        onChange={(e) => setTheme(e.value)}
        optionLabel="name"
        placeholder="Select a Theme"
      />
      <InputText
        placeholder="Search"
        type="text"
        className="w-8rem sm:w-auto"
      />
      <Avatar
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        shape="circle"
      />
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
};

export default Topbar;
