import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import { Grid } from "@mui/material";

import NavBar from "../Layouts/Title";
import SideBar from "../Layouts/SideBar";

import ViewsHandler from "../Views/ViewsHandler";
import Main from "../Views/Main";
import Client from "../Views/Client";

type Client = {
  id: number;
  guid: string;
  firstname: string;
  lastname: string;
  email: string;
  city: string;
  country: string;
};

const Dashboard: FC = () => {
  const [clients, setClients] = useState<Client[]>([] as Client[]);
  const [checker, setChecker] = useState(false);

  useEffect(() => {
    axios
      .get("https://www.randyconnolly.com/funwebdev/3rd/api/stocks/client.php")
      .then((res) => {
        setClients(res.data);
        //setChecker(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>DASHBOARD NOT USED</h1>
    </div>
  );
};
export default Dashboard;
