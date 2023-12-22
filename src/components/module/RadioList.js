import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import styles from "@/module/RadioList.module.css";

function RadioList({ profileData, setProfileData }) {
  const { category } = profileData;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, ["category"]: value });
  };

  return (
    <FormControl>
      <Typography variant="h4" color={"primary.main"} mb={1}>
        دسته بندی{" "}
      </Typography>{" "}
      <RadioGroup
        row
        aria-labelledby="category-radio-buttons-group-label"
        value={category}
        onChange={changeHandler}
        name="radio-buttons-group"
      >
        <FormControlLabel value="villa" control={<Radio />} label="ویلا" />
        <FormControlLabel
          value="apartment"
          control={<Radio />}
          label="آپارتمان"
        />
        <FormControlLabel value="store" control={<Radio />} label="مغازه" />
        <FormControlLabel value="office" control={<Radio />} label="دفتر" />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioList;
