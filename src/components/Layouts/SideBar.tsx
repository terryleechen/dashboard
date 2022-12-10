import { FC } from "react";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

function SidBar() {
  return (
    <div className="bg-blue-100 h-screen">
      <HomeIcon />
      <PersonIcon />
    </div>
  );
}
export default SidBar;
