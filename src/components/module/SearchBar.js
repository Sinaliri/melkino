"use client";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const SearchBar = () => {
  const router = useRouter();

  const [searchedCity, setSearchedCity] = useState("");

  return (
    <>
      <TextField
        value={searchedCity}
        onChange={(e) => setSearchedCity(e.target.value)}
        placeholder="جست و جوی مکان"
      />
      <Button variant="outline">
        <Link
          href={{
            pathname: "/buy-residential",
            query: { city: searchedCity },
          }}
        >
          جست و جو
        </Link>
      </Button>
    </>
  );
};

export default SearchBar;
