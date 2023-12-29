import Link from "next/link";
import Image from "next/image";
import styles from "@/module/CategoryCard.module.css";
import { Button, Grid, Typography } from "@mui/material";
import { categoriesDesc } from "@/constants/strings";

function CategoryCard({ name, title, index }) {
  return (
    <Grid item xs={12} container spacing={5} className={styles.card}>
      <Grid
        className={styles.imageSection}
        item
        xs={12}
        md={6}
        order={index % 2 === 0 ? 1 : 2}
        position={"relative"}
      >
        <Image
          src={`/images/${name}.png`}
          alt={title}
          layout="responsive"
          width={1680} // Set the desired width
          height={500} // Set the desired height
          style={{ maxHeight: 500 }}
          priority={true}
          objectFit="cover"
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        flexDirection={"column"}
        order={index % 2 === 0 ? 2 : 1}
        className={styles.descSection}
      >
        <p className={styles.desc}>{categoriesDesc[name]}</p>
        <h4>{`برای مشاهده آگهی های مرتبط با ${title} کلیک کنید.`}</h4>
        <Button
          variant="text"
          sx={{ width: "200px", justifyContent: "center" }}
        >
          <Link href={`/buy-residential?category=${name}`}>
            <p>مشاهده کنید</p>
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}

export default CategoryCard;
