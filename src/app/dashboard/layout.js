import DashboardSideBar from "@/layout/DashboardSidebar/DashboardSideBar";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

const DashBoardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  return <DashboardSideBar>{children}</DashboardSideBar>;
};

export default DashBoardLayout;
