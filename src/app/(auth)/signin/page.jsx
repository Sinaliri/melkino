import SignInPageTemplate from "@/templates/SignInPageTemplate/SignInPageTemplate";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function Signin() {
  const session = await getServerSession(authOptions);
  if (session) {
    console.log("happene");
    redirect("/");
  }

  return <SignInPageTemplate />;
}

export default Signin;
