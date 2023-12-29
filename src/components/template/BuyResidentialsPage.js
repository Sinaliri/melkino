import { Grid } from "@mui/material";
import Sidebar from "@/module/Sidebar";
import Card from "@/module/Card";
import styles from "@/template/BuyResidentialsPage.module.css";

function BuyResidentialsPage({ data }) {
  return (
    <Grid container spacing={2} className={styles.container} margin={1}>
      <Grid item xs={12} sm={2} md={3} container className={styles.sidebar}>
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={12}
        sm={10}
        md={9}
        padding={"0 4rem !important"}
        container
        spacing={2}
        className={styles.main}
      >
        {data.length ? null : (
          <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
        )}
        {data.map((profile) => (
          <Card key={profile._id} data={profile} />
        ))}
      </Grid>
    </Grid>
  );
}

export default BuyResidentialsPage;
