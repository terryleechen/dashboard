import Box from "@mui/material/Box";

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

function companyFinanical({ company }: { company: Company }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          width: 300,
          height: 300,
          flexDirection: "column",
          alignItems: "right",
          backgroundColor: "grey.100",
        }}
      >
        COMPANY FINANCIAL
        <h1>{company.financials.assets[0]}</h1>
        <h1>{company.financials.liabilities[0]}</h1>
      </Box>
    </div>
  );
}
export default companyFinanical;
