import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

type Stock = {
  id: number;
  symbol: string;
  name: string;
  amount: number;
  price: number;
  value: number;
};
function PortDetails({ port }: { port: Stock[] }) {
  const [rows, setRows] = useState<Stock[]>([] as Stock[]);

  const columns = [
    { field: "symbol", headerName: "Symbol", width: 70 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "price", headerName: "Current price", width: 200 },
    { field: "value", headerName: "Total value", width: 200 },
  ];

  useEffect(() => {
    console.log(port);
    Object.keys(port).map(function (index) {
      let i: number = +index;
      let p = port[i];

      setRows((prev) => [...prev, p]);
    });
  }, [port.length]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
export default PortDetails;
