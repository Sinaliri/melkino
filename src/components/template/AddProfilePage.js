"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import TextInput from "@/module/TextInput";
import RadioList from "@/module/RadioList";
import TextList from "@/module/TextList";
import CustomDatePicker from "@/module/CustomDatePicker";
import Loader from "@/module/Loader";
import styles from "@/template/AddProfilePage.module.css";
import { Button, Grid } from "@mui/material";
import Pictures from "@/module/Pictures";

function AddProfilePage({ data }) {
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
    amenities: [],
    pictures: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data) setProfileData(data);
  }, []);

  const router = useRouter();
  const handlePictureChange = (e) => {
    const files = e.target.files;

    // Convert selected files to an array of base64-encoded strings
    const newPictures = files
      ? Array.from(files)?.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => resolve(event.target.result);
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file);
          });
        })
      : [];

    // Update state when all promises are resolved
    Promise.all(newPictures)
      .then((base64Pictures) =>
        setProfileData((prevData) => ({
          ...prevData,
          pictures: [...prevData.pictures, ...base64Pictures],
        }))
      )
      .catch((error) => console.error("Error reading files:", error));
  };
  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };

  const editHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };

  return (
    <Grid
      item
      xs={12}
      container
      ml={2}
      className={styles.container}
      spacing={2}
    >
      <Grid item xs={12}>
        <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
      </Grid>
      <Grid
        item
        xs={12}
        md={9}
        container
        rowSpacing={2}
        border={"1px solid"}
        borderColor={"primary.main"}
        padding={"10px"}
        borderRadius={"30px"}
      >
        <TextInput
          title="عنوان آگهی"
          name="title"
          profileData={profileData}
          setProfileData={setProfileData}
        />
        <TextInput
          title="توضیحات"
          name="description"
          profileData={profileData}
          setProfileData={setProfileData}
          textarea={true}
        />
        <TextInput
          title="آدرس"
          name="location"
          profileData={profileData}
          setProfileData={setProfileData}
        />

        <TextInput
          title="شماره تماس"
          name="phone"
          profileData={profileData}
          setProfileData={setProfileData}
        />

        <TextInput
          title="قیمت(تومان)"
          name="price"
          profileData={profileData}
          setProfileData={setProfileData}
        />

        <TextInput
          title="بنگاه"
          name="realState"
          profileData={profileData}
          setProfileData={setProfileData}
        />
        <Grid item xs={12}>
          <RadioList
            profileData={profileData}
            setProfileData={setProfileData}
          />
        </Grid>
        <Grid item xs={12}>
          <TextList
            title="امکانات رفاهی"
            profileData={profileData}
            setProfileData={setProfileData}
            type="amenities"
          />
        </Grid>
        <Grid item xs={12}>
          <TextList
            title="قوانین"
            profileData={profileData}
            setProfileData={setProfileData}
            type="rules"
          />
        </Grid>
        <Grid item xs={12}>
          <Pictures
            pictures={profileData.pictures}
            changeHandler={handlePictureChange}
          />
        </Grid>

        <Grid item xs={12}>
          <CustomDatePicker
            profileData={profileData}
            setProfileData={setProfileData}
          />
        </Grid>

        <Toaster />
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {loading ? (
            <Loader />
          ) : data ? (
            <Button
              variant="contained"
              fullWidth
              className={styles.submit}
              onClick={editHandler}
            >
              ویرایش آگهی
            </Button>
          ) : (
            <Button
              variant="contained"
              fullWidth
              className={styles.submit}
              onClick={submitHandler}
            >
              ثبت آگهی
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddProfilePage;
