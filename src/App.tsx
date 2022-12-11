import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

import Title from "./components/Layouts/Title";
import SideBar from "./components/Layouts/SideBar";
import ViewsHandler from "./components/Views/ViewsHandler";
import Router from "./components/Router/Router";

type Client = {
  id: number;
  guid: string;
  firstname: string;
  lastname: string;
  email: string;
  city: string;
  country: string;
};

function App() {
  const [clients, setClients] = useState<Client[]>([] as Client[]);

  useEffect(() => {
    axios
      .get("https://www.randyconnolly.com/funwebdev/3rd/api/stocks/client.php")
      .then((res) => {
        setClients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Title />
        </Grid>
        {/**side bar */}
        <Grid
          item
          xs={0.5}
          style={{ margin: 10 }}
          className="bg-indigo-500 h-screen"
        >
          <SideBar />
        </Grid>
        {/** views */}
        <Grid item xs={11} style={{ margin: 10 }}>
          {/* View handler */}
          <Router clients={clients} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
