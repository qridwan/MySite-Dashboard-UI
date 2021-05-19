import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import eye from "../../assets/img/icons/eye.png";

const columns = [
  {id: 1,
       field: "dept", headerName: "Department/Role name", width: 250 },
  { field: "access", headerName: "Access Level", width: 160 , height:'34px'},
  {id: 2,
    field: "memberNumber",
    type: "number",
    headerName: "No of Members",
    width: 180,
  },
  {id: 3,
    field: "update",
    headerName: "Last Updated",
    width: 180,
  },
];

const rows = [
  {
    id: 1,
    dept: "Management Team",
    access: "All Access",
    firstName: "Jon",
    memberNumber: 4,
    update: '1 min ago',
    img: {eye}
  },
  {id: 2,
    dept: "Procurement Team",
    access: "Restricted Access",
    firstName: "Cersei",
    memberNumber: 12,
    update: "1 min ago",
    img: { eye },
  },
  {
    id:3,
    dept: "Project Team",
    access: "Restricted Access",
    firstName: "Jaime",
    memberNumber: 8,
    update: "1 min ago",
    type: "img",
    img: { eye },
  },
  {id: 4,
    dept: "IT Team",
    access: "Restricted Access",
    firstName: "Arya",
    memberNumber: 16,
    type: "image",
    update: "1 min ago",
    img: {eye},
  },
  {id: 5,
    dept: "Super Admin",
    access: "All Access",
    firstName: "Daenerys",
    memberNumber: 4,
    update: "1 min ago",
    img: { eye },
  },
];
const TableView = () => {
    
  return (
    <div style={{ height: 400, width: "80%", margin: "25px auto", textAlign: "center" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default TableView;
