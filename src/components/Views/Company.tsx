import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import CompanyInfo from "../Company/CompanyInfo";
import CompanyFinanical from "../Company/CompanyFinancial";
import HiLow from "../Company/HiLow";
import Volume from "../Company/Volume";

type Company = {
  // Info
  id: number;
  name: string;
  symbol: string;
  address: string;
  website: string;
  description: string;
  exchange: string;
  // Financial
  financials: {
    assets: number[];
    liabilities: number[];
    revenue: number[];
    earnings: number[];
    years: number[];
  };
};

type Day = {
  id: number;
  symbol: string;
  date: string;
  close: number;
  high: number;
  low: number;
  volume: number;
};

function Company() {
  const location = useLocation();
  const notLoaded = useRef(true);
  const notSelected = useRef(false);
  const [company, setCompany] = useState<Company>();
  const [history, setHistory] = useState<Day[]>([]);
  useEffect(() => {
    // get company details
    if (notLoaded.current) {
      notLoaded.current = false;

      axios
        .get(
          "https://www.randyconnolly.com/funwebdev/3rd/api/stocks/companies.php"
        )
        .then((res) => {
          res.data.map((company: any) => {
            if (location.state.company.symbol === company.symbol) {
              setCompany(company);
              notSelected.current = true;
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  useEffect(() => {
    // get company history
    if (notSelected.current) {
      axios
        .get(
          "https://www.randyconnolly.com/funwebdev/3rd/api/stocks/history.php?symbol=" +
            location.state.company.symbol
        )
        .then((res) => {
          setHistory(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [company]);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Stack spacing={2}>
            {/** company details*/}
            {company && <CompanyInfo company={company} />}
            {/** companyfinanical*/}
            {company && <CompanyFinanical company={company} />}
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Grid item xs={12}>
            <Stack spacing={2}>
              <Box sx={{ border: 1, height: 250 }}>
                {/** high/low details */}
                {history && <HiLow history={history} />}
              </Box>
              <Box sx={{ border: 1, height: 250 }}>
                {/** volume details */}
                {history && <Volume history={history} />}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default Company;
