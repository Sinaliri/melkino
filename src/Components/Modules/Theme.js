"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#7210FF",
    },
    secondary: {
      main: "#F2EDED",
    },
    gray: {
      main: "#707070",
    },
    text: {
      primary: "#07030C",
    },
    header: {
      main: "#100101",
    },
  },
  typography: {
    fontFamily: [
      "Tahoma",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: "12px",
    fontWeight: 400,
    SeeAll: {
      fontSize: "12px",
      fontWeight: 700,
      color: "#7210FF",
    },
    sectionHeader: {
      fontSize: "16px",
      fontWeight: 700,
      color: "#07030C",
      lineHeight: "19.31px",
    },
    span: {
      fontSize: "17px",
      fontWeight: 400,
    },
    callsAndChat: {
      fontSize: 12,
      fontWeight: 700,
      color: "#06010D",
    },
    boldText: {
      fontSize: "14px",
      fontWeight: 700,
    },
    h1: {
      fontSize: "33px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "18px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "16px",
      fontWeight: 700,
    },
    h4: {
      fontSize: "14px",
      fontWeight: 400,
    },
    h5: {
      fontSize: "13px",
      fontWeight: 400,
    },
    serviceTitle: {
      fontSize: "15px",
      fontWeight: 400,
      lineHeight: "18.11px",
    },
    smallText: {
      fontSize: "10px",
      fontWeight: 400,
      color: "#BBAAAA",
      lineHeight: "12.7px",
    },
    navbarItem: {
      fontSize: "9px",
      fontWeight: 400,
      lineHeight: "10.86px",
    },
  },
});
