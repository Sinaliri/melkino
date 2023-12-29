"use client";

import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import styles from "@/layout/Header.module.css";
import { useSession } from "next-auth/react";
import { Box, Typography } from "@mui/material";

function Header() {
  const { data } = useSession();

  return (
    <header className={styles.header}>
      <Box>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </Box>
      {data ? (
        <div className={styles.login}>
          <Link href="/dashboard">
            <FaUserAlt />
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href="/signin">
            <FiLogIn />
            <Typography variant="span">ورود</Typography>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
