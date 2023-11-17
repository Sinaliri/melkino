"use client";
import CustomButton from "@/modules/Button";
import { Typography } from "@mui/material";
import { signOut } from "next-auth/react";
import React from "react";
import { FiLogOut } from "react-icons/fi";

const LogOutButton = () => {
  return (
    <CustomButton
      variant={"text"}
      color={"primary"}
      onClickHandler={signOut}
      width="20%"
    >
      <FiLogOut />
      خروج
    </CustomButton>
  );
};

export default LogOutButton;
