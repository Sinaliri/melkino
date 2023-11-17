"use client";

import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import styles from "./Styles.module.scss";
const CustomCheckBox = ({
  text,
  value,
  onChangleHandler,
  margin = "0 0 20px 0",
}) => {
  return (
    <FormControlLabel
      sx={{ margin: { margin } }}
      control={
        <Checkbox
          className={styles.CustomCheckBox}
          value={value}
          inputProps={{
            style: { width: "19px", height: "22px", border: "5px" },
          }}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
          onChange={(e) => onChangleHandler(e.target.checked)}
        />
      }
      label={text}
    />
  );
};

export default CustomCheckBox;
