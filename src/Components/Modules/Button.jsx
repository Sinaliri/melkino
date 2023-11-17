"use client";
import Button from "@mui/material/Button";

const CustomButton = ({
  variant,
  onClickHandler,
  disabled,
  width = "100%",
  padding,
  margin = "auto",
  children,
  height = "58px",
  color = "primary",
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClickHandler}
      color={color}
      disabled={disabled}
      fullWidth
      sx={{
        width: { width },
        borderRadius: "18px",
        margin: { margin },
        height: { height },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
