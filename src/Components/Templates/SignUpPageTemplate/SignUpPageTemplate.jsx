"use client";
import { Button, FormGroup, Grid, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
const SignUpPageTemplate = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const signUpHandler = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      toast.error("رمز و تکرار آن برابر نیست ");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json;
    setLoading(false);
    // toast.error(`${res.status}`);
    console.log(res.status);
    if (res.status === 201) {
      router.push("/signin");
    }
    toast.error(data?.error);
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
          <TextField
            fullWidth
            value={rePassword}
            variant="standard"
            type="password"
            onChange={(e) => setRePassword(e.target.value)}
            label="تکرار رمز عبور را وارد کنید."
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
              ثبت نام
            </Button>
          )}
        </FormGroup>
        <Link href={"signin"}>حساب کاربری دارید؟</Link>
      </Grid>
      <Toaster />
    </Grid>
  );
};

export default SignUpPageTemplate;
