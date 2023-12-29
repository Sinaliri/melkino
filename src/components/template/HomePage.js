import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import CategoryCard from "@/module/CategoryCard";
import { categories, cities, services } from "@/constants/strings";
import styles from "@/template/HomePage.module.css";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import bannerImage from "../../../public/images/banner.jpg";
import Link from "next/link";

function HomePage() {
  return (
    <Grid item xs={12} container>
      <Grid item xs={12} className={styles.banner}>
        <Grid item xs={12} position={"relative"}>
          <Image
            src={bannerImage}
            alt="Banner Image"
            layout="responsive"
            width={1680} // Set the desired width
            height={500} // Set the desired height
            objectFit="cover"
          />

          <Box position={"absolute"} item xs={12} className={styles.desc}>
            <Typography variant="h1">سامانه خرید و اجاره ملک</Typography>
            <ul>
              {services.map((i) => (
                <li key={i}>
                  <FiCircle />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={2} className={styles.categories}>
        <Typography variant="h1">دسته بندی ها</Typography>

        {Object.keys(categories).map((i, index) => (
          <CategoryCard
            key={index}
            index={index}
            title={categories[i]}
            name={i}
          />
        ))}
      </Grid>
      <Grid item xs={12} spacing={2} container className={styles.city}>
        <Grid item xs={12}>
          <h3>شهر های پر بازدید</h3>
        </Grid>
        <Grid className={styles.cityWrapper} item xs={12} container spacing={2}>
          {cities.map((i) => (
            <Grid className={styles.cityName} item xs={6} md={3} key={i}>
              <div>
                <Link
                  href={{
                    pathname: "/buy-residential",
                    query: { city: i },
                  }}
                >
                  <FaCity />
                  <span>{i}</span>
                </Link>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
