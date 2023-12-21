"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import Loader from "@/module/Loader";
import styles from "@/template/SignupPage.module.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import SignUpImage from "../../../public/images/signInImage.png";
function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      toast.error("رمز و تکرار آن برابر نیست");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (res.status === 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
  };

  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"center"}
      height={1}
      spacing={2}
      pt="100px"
    >
      <Grid
        item
        xs={12}
        spacing={2}
        md={6}
        container
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        pl={"48px !important"}
      >
        <Grid
          item
          xs={12}
          container
          spacing={2}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          className={styles.formWrapper}
        >
          <Grid item xs={12} mb={"10px"}>
            <Typography variant="h2" color={"primary.main"}>
              فرم ثبت نام
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            container
            alignItems={"center"}
            justifyContent={"center"}
            spacing={2}
          >
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                sx={{ textAlign: "end", direction: "ltr" }}
                label={"ایمیل"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                sx={{ textAlign: "end", direction: "ltr" }}
                label={"رمز عبور"}
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                sx={{ textAlign: "end", direction: "ltr" }}
                type="password"
                label={"تکرار رمز عبور"}
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              {loading ? (
                <Loader />
              ) : (
                <Button
                  sx={{ marginTop: "20px" }}
                  variant="contained"
                  fullWidth
                  type="submit"
                  onClick={signupHandler}
                >
                  ثبت نام
                </Button>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <p>
              حساب کاربری دارید؟
              <Link href="/signin">ورود</Link>
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} className={styles.ImageWrapper}>
        <Image src={SignUpImage} alt="signUpImage" />
      </Grid>
      <Toaster />
    </Grid>
  );
}

export default SignupPage;
