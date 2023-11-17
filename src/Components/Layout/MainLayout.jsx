import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Box } from "@mui/material";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <div
        style={{
          maxWidth: "1760px",
          margin: "auto",
          marginTop: "100px",
          padding: "0 10px",
        }}
      >
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
