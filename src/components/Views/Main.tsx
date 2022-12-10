import React, { useState } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

type Client = {
  id: number;
  guid: string;
  firstname: string;
  lastname: string;
  email: string;
  city: string;
  country: string;
};

function Main({ clients }: { clients: Client[] }) {
  const [id, setId] = useState<number>(0);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event: any) => {
    setId(event.target.value);

    // Object.keys(clients).map(function (index) {
    //   let i: number = +index;
    //   let c = clients[i];
    //   if (c.id === event.target.value) {
    //     //send client info to parent - router

    //   }
    // });
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">
          Client Name
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          value={id}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={handleChange}
        >
          <MenuItem value="0">Select</MenuItem>
          {Object.keys(clients).map(function (index) {
            let i: number = +index;
            let client = clients[i];
            return (
              <Link
                to={{ pathname: "/client" }}
                key={client.id}
                state={{ client: client }}
              >
                <MenuItem key={client.id} value={client.id}>
                  {client.firstname + " " + client.lastname}
                </MenuItem>
              </Link>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
export default Main;
