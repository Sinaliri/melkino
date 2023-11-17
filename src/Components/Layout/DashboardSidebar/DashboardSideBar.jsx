import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Grid, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import React from "react";
import { CgProfile } from "react-icons/cg";
// import { FiLogout } from "react-icons/fi";
import Link from "next/link";

import LogOutButton from "@/modules/LogOutButton";

const DashboardSideBar = async ({ children }) => {
  const session = await getServerSession(authOptions);
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        md={2}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <CgProfile />
        <Typography variant="h2">{session?.user.email}</Typography>
        <Typography variant="p">{session?.user.email}</Typography>
        <Link href={"/dashboard"}>حساب کاربری</Link>
        <Link href={"/dashboard/my-profiles"}>آگهی های من</Link>
        <Link href={"/dashboard/add"}>ثبت آگهی</Link>
        <LogOutButton />
      </Grid>
      <Grid item xs={12} md={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export default DashboardSideBar;
