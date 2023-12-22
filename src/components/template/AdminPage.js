import AdminCard from "@/module/AdminCard";
import styles from "@/template/AdminPage.module.css";
import { Grid, Typography } from "@mui/material";

function AdminPage({ profiles }) {
  return (
    <Grid item xs={12} container spacing={2} pl={2}>
      {profiles.length ? null : (
        <Typography className={styles.text}>
          هیچ آگهی در انتظار تاییدی وجود ندارد
        </Typography>
      )}
      {profiles.map((i) => (
        <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </Grid>
  );
}

export default AdminPage;
