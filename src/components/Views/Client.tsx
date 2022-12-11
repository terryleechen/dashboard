import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";

import ClientInfo from "../Client/ClientInfo";
import PortInfo from "../Client/PortInfo";
import TopStock from "../Client/TopStock";
import Calculate from "../Others/Calculate";
import PortList from "../Client/PortList";

type Stock = {
  id: number;
  symbol: string;
  name: string;
  amount: number;
  price: number;
  value: number;
};

function Client() {
  const [port, setPort] = useState<Stock[]>([] as Stock[]);
  const [portItems, setPortItems] = useState(0);
  const [top1, setTop1] = useState<Stock>();
  const [top2, setTop2] = useState<Stock>();
  const [top3, setTop3] = useState<Stock>();
  const [numberOfShares, setNumberOfShares] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  let location = useLocation();

  useEffect(() => {
    axios
      .get(
        "https://www.randyconnolly.com/funwebdev/3rd/api/stocks/portfolio.php?id=" +
          location.state.client.id
      )
      .then((res) => {
        setPort(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    Object.keys(port).map(function (index) {
      let i: number = +index;
      let price = port[i].value / port[i].amount;
      port[i].price = price;
    });

    const calculate = Calculate(port);

    setNumberOfShares(calculate.numberOfShares);
    setTotalValue(calculate.totalValue);
    setPortItems(calculate.portItems);
    setTop1(calculate.top3[0]);
    setTop2(calculate.top3[1]);
    setTop3(calculate.top3[2]);
  }, [port.length]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Stack spacing={1}>
          {/** client details*/}
          <ClientInfo client={location.state.client} />
          {/** port summary*/}
          <PortInfo
            numberOfShares={numberOfShares}
            portItems={portItems}
            totalValue={totalValue}
          />
        </Stack>
      </Grid>
      <Grid item xs={8} spacing={1}>
        <Stack spacing={2}>
          <Grid container spacing={1}>
            {/** top 3 stocks*/}
            <Grid item xs={4}>
              {top1 && <TopStock stock={top1} />}
            </Grid>
            <Grid item xs={4}>
              {top2 && <TopStock stock={top2} />}
            </Grid>
            <Grid item xs={4}>
              {top3 && <TopStock stock={top3} />}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {/** Port details */}
            {port && <PortList port={port} />}
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}
export default Client;
