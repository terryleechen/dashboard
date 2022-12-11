import ListItemIcon from "@mui/material/ListItemIcon";
import PersonIcon from "@mui/icons-material/Person";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import HomeIcon from "@mui/icons-material/Home";

type Data = {
  title: string;
  icon: JSX.Element;
  link: string;
};

const SideBarData: Data[] = [
  {
    title: "Home",
    icon: (
      <ListItemIcon>
        <HomeIcon fontSize="large" />
      </ListItemIcon>
    ),
    link: "/",
  },

  {
    title: "Client",
    icon: (
      <ListItemIcon>
        <PersonIcon fontSize="large" />
      </ListItemIcon>
    ),
    link: "/Client",
  },

  {
    title: "Company",
    icon: (
      <ListItemIcon>
        <EqualizerIcon fontSize="large" />
      </ListItemIcon>
    ),
    link: "/Company",
  },
];
export default SideBarData;
