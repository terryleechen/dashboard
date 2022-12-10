import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

type Stock = {
  id: number;
  symbol: string;
  name: string;
  amount: number;
  price: number;
};

function Client() {
  const [stocks, setStocks] = useState<Stock[]>([] as Stock[]);
  let location = useLocation();
  useEffect(() => {
    axios
      .get(
        "https://www.randyconnolly.com/funwebdev/3rd/api/stocks/portfolio.php?id=" +
          location.state.client.id
      )
      .then((res) => {
        setStocks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>{location.state.client.firstname}</div>;
}
export default Client;
