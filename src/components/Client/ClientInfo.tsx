import Box from "@mui/material/Box";
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

function ClientInfo({ client }: { client: Client }) {
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
        <h1>{client.firstname + " " + client.lastname}</h1>
        <h1>{client.city + ", " + client.country}</h1>
        <h1>{client.email}</h1>
      </Box>
    </div>
  );
}
export default ClientInfo;
