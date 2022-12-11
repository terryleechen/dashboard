import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";

import ViewsHandler from "../Views/ViewsHandler";

import Main from "../Views/Main";
import Client from "../Views/Client";
import Company from "../Views/Company";

type Client = {
  id: number;
  guid: string;
  firstname: string;
  lastname: string;
  email: string;
  city: string;
  country: string;
};

function receivedClient(c: Client) {
  console.log(c);
}

function Router({ clients }: { clients: Client[] }) {
  const [homeChecker, setHomeChecker] = useState(true);
  const [clientChecker, setClientChecker] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<ViewsHandler />}>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Main clients={clients} />} />
        <Route path="/client" element={<Client />} />
        <Route path="/company" element={<Company />} />
      </Route>
    </Routes>
  );
}
export default Router;
