"use client";
import CustomButton from "@/modules/Button";
import Custominput from "@/modules/Custominput";
import { Grid } from "@mui/material";
import React, { useState } from "react";

const AddProfilePage = () => {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
  });
  const changeHandler = (value, name) => {
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Grid container flexDirection={"column"} spacing={2}>
      <Grid item xs={12}>
        <Custominput
          type="text"
          value={profileData.title}
          onChangeHandler={changeHandler}
          name={"title"}
          label={"عنوان"}
        />
      </Grid>
      <Grid item xs={12}>
        <Custominput
          type="text"
          value={profileData.description}
          onChangeHandler={changeHandler}
          name={"description"}
          label={"توضیحات"}
          textarea={true}
        />
      </Grid>{" "}
      <Grid item xs={12}>
        <Custominput
          type="text"
          value={profileData.location}
          onChangeHandler={changeHandler}
          name={"location"}
          label={"آدرس"}
        />
      </Grid>{" "}
      <Grid item xs={12}>
        <Custominput
          type="number"
          value={profileData.phone}
          onChangeHandler={changeHandler}
          name={"phone"}
          label={"شماره تماس"}
        />
      </Grid>{" "}
      <Grid item xs={12}>
        <Custominput
          type="number"
          value={profileData.price}
          onChangeHandler={changeHandler}
          name={"price"}
          label={"قیمت(تومان)"}
        />
      </Grid>{" "}
      <Grid item xs={12}>
        <Custominput
          type="text"
          value={profileData.realState}
          onChangeHandler={changeHandler}
          name={"realState"}
          label={"بنگاه"}
        />
      </Grid>
      <Grid item xs={12}>
        <Custominput
          type="text"
          value={profileData.title}
          onChangeHandler={changeHandler}
          name={"title"}
          label={"عنوان"}
        />
      </Grid>
      <CustomButton
        variant={"contained"}
        onClickHandler={() => console.log(profileData)}
      >
        ثبت
      </CustomButton>
    </Grid>
  );
};

export default AddProfilePage;
