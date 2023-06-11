"use client";

import Link from "next/link";
import React, { FC } from "react";

import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

const Header: FC = () => {
    const pathname = usePathname()

  return (
    <div className={styles.header}>
      <Link href="/" className={pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
    </div>
  );
};

export default Header;
