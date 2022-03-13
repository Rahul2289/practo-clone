import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const pages = [
  "Find Doctors",
  "Video Consult",
  "Medicines",
  "Lab Tests",
  "Surgeries",
];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        sx={{ width: "500px" }}
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography sx={{ margin: "1rem auto" }} className="practo-logo">
            practo
          </Typography>
        </Link>
        <List sx={{ width: "15rem" }}>
          {pages.map((page, i) => {
            return (
              <ListItemButton
                key={i}
                onClick={() => {
                  setOpenDrawer(false);
                }}
              >
                <ListItemIcon>
                  <ListItemText>{page}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <IconButton
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
