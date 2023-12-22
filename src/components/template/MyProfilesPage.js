import DashboardCard from "@/module/DashboardCard";
import styles from "@/template/MyProfilesPage.module.css";
import { Grid, Typography } from "@mui/material";

function MyProfilesPage({ profiles }) {
  return (
    <Grid item xs={12} container>
      {profiles.length ? null : (
        <Grid item xs={12} height={"fit-content"}>
          <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
        </Grid>
      )}
      <Grid item xs={12} container spacing={2}>
        {profiles.map((i) => (
          <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
        ))}
      </Grid>
    </Grid>
  );
}

export default MyProfilesPage;
