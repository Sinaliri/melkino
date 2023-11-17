import { Grid, Typography } from "@mui/material";
import React from "react";

const DashBoardPage = ({ createdAt }) => {
  console.log(createdAt);
  return (
    <Grid item xs={12} container>
      <Typography variant="p">سلام </Typography>
      <Typography variant="p">
        . آگهی خود را ثبت کنیو تا هزاران نفر آن رت مشاهده کنند{" "}
      </Typography>
      <Grid item xs={12}>
        <Typography variant="p">تاریخ عضویت: </Typography>
        <Typography variant="span">
          {new Date(createdAt).toLocaleDateString("fa-IR")}{" "}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DashBoardPage;
