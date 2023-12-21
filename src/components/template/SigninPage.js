"use client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import SigninImage from "../../../public/images/signIn.png";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Toaster, toast } from "react-hot-toast";
import Loader from "@/module/Loader";
import styles from "@/template/SignupPage.module.css";
import Image from "next/image";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signinHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
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
      className="registerPage"
    >
      <Grid item xs={12} md={6} className={styles.ImageWrapper}>
        <Image src={SigninImage} alt="signUpImage" />
      </Grid>
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
              فرم ورود{" "}
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
              {loading ? (
                <Loader />
              ) : (
                <Button
                  sx={{ marginTop: "20px" }}
                  variant="contained"
                  fullWidth
                  type="submit"
                  onClick={signinHandler}
                >
                  ورود{" "}
                </Button>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <p>
              حساب کاربری ندارید؟
              <Link href="/signup">ثبت نام</Link>
            </p>
          </Grid>
        </Grid>
      </Grid>

      <Toaster />
    </Grid>
  );
}

export default SigninPage;
