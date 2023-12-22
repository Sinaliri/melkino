import { Button, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { FaCamera } from "react-icons/fa";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const Pictures = ({ pictures, changeHandler }) => {
  return (
    <Grid item xs={12} container>
      <Grid item xs={12}>
        <Typography variant="h4" color={"primary.main"} mb={1}>
          دسته بندی{" "}
        </Typography>{" "}
      </Grid>
      <Grid item xs={12} container spacing={2}>
        {pictures?.map((item, index) => {
          return (
            <Grid
              key={index}
              item
              xs={12}
              md={6}
              height={"180px"}
              sx={{ borderRadius: "10px", objectFit: "cover" }}
            >
              <img
                src={item}
                alt={index}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  objectFit: "cover",
                  height: "100%",
                }}
              />
            </Grid>
          );
        })}
        <Grid
          item
          xs={12}
          md={6}
          height={"180px"}
          sx={{ borderRadius: "40px", objectFit: "cover" }}
        >
          <Button
            fullWidth
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              height: "100%",
            }}
            component="label"
            variant="contained"
            onClick={changeHandler}
            startIcon={<FaCamera />}
          >
            <VisuallyHiddenInput type="file" />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pictures;
