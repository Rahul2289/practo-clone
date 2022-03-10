import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
        <List>
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
