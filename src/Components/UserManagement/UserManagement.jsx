import React from "react";
import Table from "../Table/Table";
import { Panel } from "primereact/panel";

const UserManagement = () => {
  return (
    <div className="flex flex-col w-full min-h-full overflow-y-auto">
      <Panel header="User Management" className="w-full text-2xl">
        <Table />
      </Panel>
    </div>
  );
};

export default UserManagement;
