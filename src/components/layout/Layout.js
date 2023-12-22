import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { Grid } from "@mui/material";

function Layout({ children }) {
  const style = { minHeight: "700px" };

  return (
    <>
      <Header />
      <Grid container style={style}>
        {children}
      </Grid>
      <Footer />
    </>
  );
}

export default Layout;
