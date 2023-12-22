import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "@/module/TextList.module.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function TextList({ title, profileData, setProfileData, type }) {
  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...profileData[type]];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };

  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  const deleteHandler = (index) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };

  return (
    <Grid container item xs={12} className={styles.container}>
      <Grid item xs={12}>
        <Typography variant="h4" color={"primary.main"} mb={1}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} container spacing={2}>
        {profileData[type].map((i, index) => (
          <Grid
            item
            xs={12}
            mr={"10px"}
            container
            spacing={2}
            textAlign={"center"}
            key={index}
          >
            <Grid
              item
              xs={12}
              md={6}
              lg={9}
              display={"flex"}
              alignItems={"center"}
            >
              <TextField
                placeholder={title}
                fullWidth
                type="text"
                value={i}
                onChange={(e) => changeHandler(e, index)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              lg={3}
              display={"flex"}
              alignItems={"center"}
            >
              <Button
                fullWidth
                variant="outlined"
                sx={{ height: "56px !important" }}
                onClick={() => deleteHandler(index)}
              >
                حذف
                <AiOutlineDelete color="#7210FF" />
              </Button>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} mt={"16px"} mr={"10px"}>
        <Button
          fullWidth
          variant="outlined"
          sx={{ height: "56px !important" }}
          onClick={addHandler}
        >
          افزودن
          <MdOutlineLibraryAdd color="#7210FF" />
        </Button>
      </Grid>
    </Grid>
  );
}

export default TextList;
