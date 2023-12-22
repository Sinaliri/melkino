import "swiper/css";

import { Box, Grid, Typography } from "@mui/material";
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { e2p, sp } from "@/utils/replaceNumber";
import ItemList from "@/module/ItemList";
import Title from "@/module/Title";
import ShareButton from "@/module/ShareButton";
import { icons } from "@/constants/icons";
import { categories } from "@/constants/strings";
import styles from "@/template/DetailsPage.module.css";
import SwiperComponent from "./Swiper";

function DetailsPage({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
    pictures,
  },
}) {
  return (
    <Grid container spacing={2} className={styles.container}>
      <Grid item container xs={12} md={9} spacing={2}>
        <Grid item xs={12} lg={6}>
          <SwiperComponent pictures={pictures} />
        </Grid>
        <Grid item xs={12} lg={6} className={styles.main}>
          <h1>{title}</h1>
          <span>
            <HiOutlineLocationMarker />
            {location}
          </span>
          <Title>توضیحات</Title>
          <p>{description}</p>
          <Title>امکانات رفاهی</Title>
          <ItemList data={amenities} />
          <Title>قوانین</Title>
          <ItemList data={rules} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={3} className={styles.sidebar}>
        <div className={`${styles.realState} ${styles.profileSubDetail}`}>
          <SiHomebridge color="#7210FF" />
          <p>املاک {realState}</p>
          <span>
            <AiOutlinePhone color="#7210FF" />
            {e2p(phone)}
          </span>
        </div>
        <ShareButton />
        <div className={`${styles.price} ${styles.profileSubDetail}`}>
          <Box display={"flex"}>
            <Typography color={"#7210FF "} mr={2}>
              {icons[category]}
            </Typography>
            <Typography>{categories[category]}</Typography>
          </Box>
          <p>{sp(price)} تومان</p>
          <Box display={"flex"}>
            <Typography color={"#7210FF !important"}>
              <BiCalendarCheck color="inherit" />
            </Typography>
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}

export default DetailsPage;
