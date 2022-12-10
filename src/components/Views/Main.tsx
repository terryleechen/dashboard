import React, { FC } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

function Main() {
  //   const [open, setOpen] = React.useState(false);
  //   const handleClose = () => {
  //     //setOpen(false);
  //   };
  //   const handleOpen = () => {
  //     //setOpen(true);
  //   };
  //   return (
  //     <div>
  //       <FormControl sx={{ m: 1, minWidth: 120 }}>
  //         <InputLabel id="demo-controlled-open-select-label">
  //           Client Name
  //         </InputLabel>
  //         <Select
  //           labelId="demo-controlled-open-select-label"
  //           id="demo-controlled-open-select"
  //           open={open}
  //           onClose={handleClose}
  //           onOpen={handleOpen}
  //           label="id"
  //         >
  //           <MenuItem value="">
  //             <em>None</em>
  //           </MenuItem>
  //         </Select>
  //       </FormControl>
  //     </div>
  //   );
  return <h1>MAIN VIEW</h1>;
}
export default Main;

//   <div>
//       <Grid container style={{ width: "200%", margin: "0 auto" }}>
//         <Grid item xs={12}>
//           <NavBar />
//         </Grid>
//         {/**side bar */}
//         <Grid item xs={0.25} style={{ margin: 10 }}>
//           <SideBar />
//         </Grid>
//         {/** views */}
//         <Grid item xs={11.5} style={{ margin: 10 }}></Grid>
//       </Grid>
//     </div>
