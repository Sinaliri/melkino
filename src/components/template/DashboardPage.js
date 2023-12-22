import { Grid } from "@mui/material";
import styles from "@/template/DashboardPage.module.css";

function DashboardPage({ createdAt }) {
  return (
    <Grid item xs={12} ml={2} className={styles.container}>
      <h3>سلام 👋</h3>
      <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت:</p>
        <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
      </div>
    </Grid>
  );
}

export default DashboardPage;
