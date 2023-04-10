import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { useRouter } from "next/router";

const actions = [
  {
    icon: "P",
    name: "Products",
  },
  { icon: "H", name: "Home" },
  { icon: "L", name: "Login" },
];

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();

  const handleClick = (action) => {
    switch (action.name) {
      case "Products":
        router.push("/products");
        break;
      case "Home":
        router.push("/");
        break;
      case "Login":
        router.push("/login");
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        height: 330,
        transform: "translateZ(0px)",
        flexGrow: 1,
        // border: "1px solid #003429",
      }}
    >
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
        icon={<SpeedDialIcon sx={{ color: "#003429" }} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          style: {
            backgroundColor: "#f3eee1",
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleClick(action)}
            FabProps={{
              style: {
                backgroundColor: "#f3eee1",
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
