import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import DashBoardPage from "@/templates/DashBoardPage/DashBoardPage";

const Dashboard = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session.user.email });
  console.log(user);
  return <DashBoardPage createdAt={user.createdAt} />;
};

export default Dashboard;
