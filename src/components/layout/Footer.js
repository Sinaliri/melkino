import styles from "@/layout/Footer.module.css";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Box className={styles.desc}>
        <Typography variant="h3">سامانه خرید و اجاره ملک</Typography>
        <Typography>
         ملک خود را به ما بسپارید
        </Typography>
      </Box>
      <Box>
        <ul>
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </Box>
    </footer>
  );
}

export default Footer;
