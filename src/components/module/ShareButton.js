"use client";

import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { LuShare2 } from "react-icons/lu";
import styles from "@/module/ShareButton.module.css";
import { Button, Typography } from "@mui/material";

function ShareButton() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <CopyToClipboard text={url}>
      <div className={`${styles.container} ${styles.profileSubDetail}`}>
        <Typography color={"primary.main"}>
          <LuShare2 color="inherit" />
        </Typography>
        <Button variant="outlined">اشتراک گذاری</Button>
      </div>
    </CopyToClipboard>
  );
}

export default ShareButton;
