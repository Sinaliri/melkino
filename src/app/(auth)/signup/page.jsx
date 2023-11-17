import SignUpPageTemplate from "@/templates/SignUpPageTemplate/SignUpPageTemplate";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function Signup() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  console.log(session);

  return <SignUpPageTemplate />;
}

export default Signup;
