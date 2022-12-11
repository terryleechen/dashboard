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

function CompanyInfo({ company }: { company: Company }) {
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
        COMPANY INFO
        <h1>{company.name + ", " + company.symbol}</h1>
      </Box>
    </div>
  );
}
export default CompanyInfo;
