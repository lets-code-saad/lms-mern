import { Box, Button, CardMedia, Divider, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import HeroSection from "../HeroSection/HeroSection";
import "./Navbar.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {

    // managin the dialog box of account menu
     const [anchorEl, setAnchorEl] = useState(null);
     const open = Boolean(anchorEl);
     const handleClick = (event) => {
       setAnchorEl(event.currentTarget);
     };
     const handleClose = () => {
       setAnchorEl(null);
     };

  return (
    <>
      <Box className="navBar_large">
        <Box className="container pt-3 d-flex align-items-center justify-content-between">
          <Box className="logo d-flex align-items-center gap-1">
            <img src="/imgs/logo-icon.svg" alt="" />
            <Typography className="fs-24" variant="span">
              Edemy
            </Typography>
          </Box>
          {/* nav-links */}
          <Box className="d-flex align-items-center gap-4">
            <Typography className="fs-15 text-pg">Add Courses</Typography>
            <Divider
              orientation="vertical"
              className="text-black"
              variant="middle"
              flexItem
            />
            <Typography className="fs-15 text-pg">Login</Typography>
            <button className="bg-blue text-white py-2 px-3 fs-15 border-0 rounded-pill">
              Create Account
            </button>
          </Box>
        </Box>
        <Divider
          sx={{ marginTop: "10px" }}
          orientation="horizontal"
          component="div"
        />
      </Box>

      {/* Mobile Screen Nav */}
      <Box className="navBar_small">
        <Box className="container pt-3 d-flex align-items-center justify-content-between">
          <Box className="logo d-flex align-items-center gap-1">
            <img src="/imgs/logo-icon.svg" alt="" />
            <Typography className="fs-24" variant="span">
              Edemy
            </Typography>
          </Box>
          {/* nav-links */}
          <Box className="d-flex align-items-center gap-2">
            <Typography className="fs-15 text-pg">Add Courses</Typography>
            <button
              onClick={handleClick}
              style={{ background: "none" }}
              className="bg-none border-0"
            >
              <AccountCircleOutlinedIcon
                sx={{ backgroundColor: "none" }}
                className="bg-none border-0"
              />
            </button>
            <Menu
              className="border border-white"
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              PaperProps={{
                sx: {
                      mt: 3.5,
                  ml:1    // Material UI spacing (1 = 8px, so this is 12px downward)
                },
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Box>
        <Divider
          sx={{ marginTop: "10px" }}
          orientation="horizontal"
          component="div"
        />
      </Box>
    </>
  );
};

export default Navbar;
