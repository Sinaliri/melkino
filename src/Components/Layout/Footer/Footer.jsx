import { Grid, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

const Footer = () => {
  return (
    <Grid
      container
      bgcolor={"primary.main"}
      margin={0}
      padding={"15px 10px"}
      spacing={2}
      justifyContent={"space-between"}
      bottom={0}
      position={"fixed"}
    >
      <Grid item xs={12} md={10}>
        <Typography variant="h3">سامانه خرید و اجاره ملک</Typography>
        <Typography>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </Typography>
      </Grid>
      <Grid item xs={12} md={2} display={"flex"} justifyContent={"flex-end"}>
        <ul>
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default Footer;
