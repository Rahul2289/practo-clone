import React, { useState } from "react";
import "./Styles/HeaderStyle.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import { Link } from "react-router-dom";
const pages = [
  "Find Doctors",
  "Video Consult",
  "Medicines",
  "Lab Tests",
  "Surgeries",
];
const Header = () => {
  const [value, setValue] = useState();

  const theam = useTheme();

  const isMatch = useMediaQuery(theam.breakpoints.down("md"));
  return (
    <>
      <AppBar sx={{ background: "#f6f6f6", color: "black" }} position="static">
        <Toolbar>
          {isMatch ? (
            <>
              <DrawerComp />
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography sx={{ fontSize: "1.4rem" }} className="practo-logo">
                  Practo
                </Typography>
              </Link>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Signup
              </Button>
            </>
          ) : (
            <>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography sx={{ fontSize: "1.4rem" }} className="practo-logo">
                  Practo
                </Typography>
              </Link>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => {
                  setValue(value);
                }}
                indicatorColor="secoundary"
              >
                {pages.map((page, index) => {
                  return <Tab key={index} label={page} />;
                })}
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                login
              </Button>
              <Button sx={{ marginLeft: "10px " }} variant="contained">
                Signup
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
