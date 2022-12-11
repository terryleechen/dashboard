import Box from "@mui/material/Box";
type Stock = {
  id: number;
  symbol: string;
  name: string;
  amount: number;
  price: number;
  value: number;
};

function PortInfo({
  numberOfShares,
  portItems,
  totalValue,
}: {
  numberOfShares: number;
  portItems: number;
  totalValue: number;
}) {
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
        <h1>Port Summary</h1>
        <>
          <h1>{numberOfShares}</h1>
          <h1>{totalValue}</h1>
          <h1>{portItems}</h1>
        </>
      </Box>
    </div>
  );
}
export default PortInfo;
