import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { LuBuilding2 } from "react-icons/lu";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { sp } from "@/utils/replaceNumber";
import { icons } from "@/constants/icons";
import styles from "@/module/Card.module.css";

function Card({
  data: { _id, category, title, location, price, pictures },
  children,
}) {
  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      flexDirection={"column"}
      container
      className={styles.container}
      // border={`1px solid`}
      // borderColor={"primary.main"}
      p={1}
      borderRadius={"10px"}
    >
      <div item xs={12} className={styles.profileImage}>
        {pictures?.length ? (
          <img src={pictures[0]} alt={category + title} />
        ) : (
          <LuBuilding2 />
        )}
      </div>
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        className={styles.icon}
        mb={1}
      >
        {icons[category]}
        <Typography ml={1} className={styles.title}>
          {title}
        </Typography>
      </Box>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price)} تومان</span>
      <Link href={`/buy-residential/${_id}`}>
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
      <>{children}</>
    </Grid>
  );
}

export default Card;
