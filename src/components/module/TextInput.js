import { Grid, TextField, Typography } from "@mui/material";
import { p2e } from "@/utils/replaceNumber";
import styles from "@/module/TextInput.module.css";

function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };

  return (
    <Grid item xs={12} mb={1}>
      <Typography variant="h4" color={"primary.main"} mb={1}>
        {title}
      </Typography>
      {textarea ? (
        <TextField
          placeholder={title}
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
          multiline={true}
          maxRows={4}
          minRows={2}
          style={{ width: "100%" }}
          InputProps={{
            inputProps: {
              style: {
                height: "80px",
              },
            },
          }}
        />
      ) : (
        <TextField
          placeholder={title}
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
          style={{ height: "40px", width: "100%" }}
        />
      )}
    </Grid>
  );
}

export default TextInput;
