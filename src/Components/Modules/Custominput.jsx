"use client";
import {
  FilledInput,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import styles from "./Styles.module.scss";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import RTL from "@/utils/RtlPlugin/RtlPlugin";
import { p2e } from "@/utils/replaceNumber";
const Custominput = ({
  onChangeHandler,
  value,
  type = "text",
  helperText = "",
  name,
  icon,
  placeHolder,
  validationIsNeeded = false,
  onkeyPress,
  label,
  textarea = false,
}) => {
  const [showPassword, setShowPassword] = useState(
    type === "password" ? false : true
  );
  const [error, setError] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const Validation = () => {
    if (!value && validationIsNeeded) {
      setError(true, () => console.log(error));
    } else {
      setError(false, () => console.log(error));
    }
  };
  const handleKeyDown = (event) => {
    if (onkeyPress) {
      if (event.key === "Enter") {
        // Handle Enter key press, for example, submit the input value
        onkeyPress();
      }
    }
  };
  return (
    <RTL>
      <div>
        <p>{label}</p>
        {textarea ? (
          <textarea
            type={type}
            name={name}
            onChange={(e) => onChangeHandler(p2e(e.target.value), name)}
            value={value}
          />
        ) : (
          <input
            type={type}
            name={name}
            onChange={(e) => onChangeHandler(p2e(e.target.value), name)}
            value={value}
          />
        )}
      </div>
    </RTL>
  );
};

export default Custominput;
