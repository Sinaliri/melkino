"use client";
import RTL from "@/utils/RtlPlugin/RtlPlugin";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { MdStorage } from "react-icons/md";

const drawerWidth = 240;
const navItems = [
  { text: "صفحه اصلی", Link: "/" },
  { text: "آگهی", Link: "/buy-residential" },
];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data } = useSession();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {data ? (
        "dashed"
      ) : (
        <Typography variant="h6" sx={{ my: 2 }}>
          <Link href={"/signin"}>ورود</Link>
        </Typography>
      )}
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link href={item.Link}>
                <ListItemText primary={item.text} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <RTL>
      <header>
        <Box sx={{ display: "flex", direction: "rtl" }}>
          <CssBaseline />
          <AppBar component="nav">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MdStorage />
              </IconButton>
              {data ? (
                "dashed"
              ) : (
                <Typography variant="h6" sx={{ my: 2 }}>
                  <Link href={"/signin"}>ورود</Link>
                </Typography>
              )}
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems?.map((item) => (
                  <Button key={item.text} sx={{ color: "#fff" }}>
                    {item.text}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
      </header>
    </RTL>
  );
};

export default Header;
