import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridEventListener } from "@mui/x-data-grid";

type Stock = {
  id: number;
  symbol: string;
  name: string;
  amount: number;
  price: number;
  value: number;
};
function PortList({ port }: { port: Stock[] }) {
  const [rows, setRows] = useState<Stock[]>([] as Stock[]);
  const navigate = useNavigate();

  const columns = [
    { field: "symbol", headerName: "Symbol", width: 70 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "price", headerName: "Current price", width: 200 },
    { field: "value", headerName: "Total value", width: 200 },
  ];

  useEffect(() => {
    Object.keys(port).map(function (index) {
      let i: number = +index;
      let p = port[i];

      // get data grid rows
      setRows((prev) => [...prev, p]);
    });
  }, [port.length]);

  const handleRowClick: GridEventListener<"rowClick"> = (company) => {
    navigate("/company", { state: { company: company.row } });
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onRowClick={handleRowClick}
      />
    </div>
  );
}
export default PortList;
