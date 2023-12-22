import { Box, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import { categories } from "@/constants/strings";
import styles from "@/module/Sidebar.module.css";
import SearchBar from "./SearchBar";

function Sidebar() {
  return (
    <Grid
      item
      xs={12}
      container
      flexDirection={"column"}
      className={styles.container}
      spacing={2}
    >
      <Grid item xs={12} flexDirection={"column"} className={styles.container}>
        <Box display={"flex"}>
          {" "}
          <Typography color="primary.main">
            <HiFilter color="inherit" />
          </Typography>
          دسته بندی
        </Box>

        <Link href="/buy-residential">همه</Link>
        {Object.keys(categories).map((i) => (
          <Link
            key={i}
            href={{
              pathname: "/buy-residential",
              query: { category: i },
            }}
          >
            {categories[i]}
          </Link>
        ))}
      </Grid>
      <Grid item xs={12} flexDirection={"column"} className={styles.container}>
        <Box display={"flex"}>
          <Typography color="primary.main">
            <HiFilter color="inherit" />
          </Typography>{" "}
          مکان
        </Box>
        <SearchBar />
      </Grid>
    </Grid>
  );
}

export default Sidebar;
