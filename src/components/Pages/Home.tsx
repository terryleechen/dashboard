import React, { FC, useEffect, useState } from "react";
import axios from "axios";

import { Grid } from "@mui/material";

import NavBar from "../Layouts/NavBar";
import SideBar from "../Layouts/SideBar";
import Main from "../Views/Main";
import { createClientSideURL } from "@remix-run/router/dist/history";

interface client {
  id: number;
  guid: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  country: string;
}

function Home() {
  const [clients, setClients] = useState<client>();
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
      <Grid container style={{ width: "200%", margin: "0 auto" }}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        {/**side bar */}
        <Grid item xs={0.25} style={{ margin: 10 }}>
          <SideBar />
        </Grid>
        {/** views */}
        <Grid item xs={11.5} style={{ margin: 10 }}></Grid>
      </Grid>
    </div>
  );
}
export default Home;

function test(clients: client) {
  for (let i = 0; i < clients.length; i++) {
    console.log(clients[i].firstName);
  }
}
