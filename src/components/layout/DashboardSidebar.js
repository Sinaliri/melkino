import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "@/module/LogoutButton";
import styles from "@/layout/DashboardSidebar.module.css";
import { Grid } from "@mui/material";

async function DashboardSidebar({ children, email, role }) {
  return (
    <Grid
      item
      xs={12}
      container
      pt="10px"
      spacing={2}
      px={"10px"}
      className={styles.container}
    >
      <Grid
        item
        xs={12}
        md={2}
        container
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        className={styles.sidebar}
      >
        <CgProfile />
        {role === "ADMIN" ? "ادمین" : null}
        <p>{email}</p>
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت آگهی</Link>
        {role === "ADMIN" ? <Link href="/admin">در انتظار تایید</Link> : null}
        <LogoutButton />
      </Grid>
      <Grid
        item
        xs={12}
        md={10}
        pr={2}
        container
        spacing={2}
        className={styles.main}
      >
        {children}
      </Grid>
    </Grid>
  );
}

export default DashboardSidebar;
