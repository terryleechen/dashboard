import Box from "@mui/material/Box";

type Stock = {
  id: number;
  symbol: string;
  name: string;
  amount: number;
  price: number;
  value: number;
};

function TopStock({ stock }: { stock: Stock }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          width: 200,
          height: 100,
          flexDirection: "column",
          alignItems: "right",
          backgroundColor: "grey.100",
        }}
      >
        <h1>{stock.name + ", " + stock.symbol}</h1>
        <h1>{stock.value}</h1>
      </Box>
    </div>
  );
}
export default TopStock;
