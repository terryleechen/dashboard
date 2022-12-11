import Box from "@mui/material/Box";
import Client from "../Views/Client";
import PersonIcon from "@mui/icons-material/Person";

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
        <h1 className="text-4xl">Client Information</h1>
        <div className="text-center">
          <PersonIcon sx={{ fontSize: 100 }} />
          <h1 className="text-black font-bold text-2xl tracking-wide">
            {client.firstname + " " + client.lastname}
          </h1>
          <h1 className=" text-sm  font-medium">
            {client.city + ", " + client.country}
          </h1>
          <h1 className=" text-sm  font-medium"> {client.email}</h1>
        </div>
      </Box>
    </div>
  );
}
export default ClientInfo;
