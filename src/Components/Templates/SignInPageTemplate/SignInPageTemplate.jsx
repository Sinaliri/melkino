"use client";
import { Button, FormGroup, Grid, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { signIn } from "next-auth/react";
const SignInPageTemplate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const signUpHandler = async (e) => {
    e.preventDefault();
    if (!password && !email) {
      toast.error("ایمیل و پسورد را وارد نمایید.");
      return;
    }
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);
    // toast.error(`${res.status}`);
    console.log(res?.status);
    if (res && res.error) {
      toast.error(res?.error);
    } else {
      router.push("/");
    }
  };
  return (
    <Grid container mx={"auto"}>
      <Grid item xs={12} md={6}>
        <FormGroup>
          <TextField
            fullWidth
            value={email}
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
            label="ایمیل خود را وارد کنید."
            InputLabelProps={{ style: { textAlign: "end" } }}
            InputProps={{ style: { textAlign: "start" } }}
          />
          <TextField
            fullWidth
            value={password}
            variant="standard"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            label="رمز عبور خود را وارد کنید."
            InputLabelProps={{ style: { textAlign: "end" } }}
            InputProps={{ style: { textAlign: "start" } }}
          />

          {loading ? (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#0000ff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{ margin: "0 auto" }}
              visible={loading}
            />
          ) : (
            <Button variant="contained" type="submit" onClick={signUpHandler}>
              ورود
            </Button>
          )}
        </FormGroup>
        <Link href={"/signup"}>ثبت نام</Link>
      </Grid>
      <Toaster />
    </Grid>
  );
};

export default SignInPageTemplate;
