"use client";

import Link from "next/link";
import React, { FC } from "react";

import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";

const Header: FC = () => {
    const pathname = usePathname()

  return (
    <div className={styles.header}>
      <Link href="/" className={pathname === "/" ? styles.active : ""}>
        Home
      </Link>
      <Link href="/about" className={pathname === "/about" ? styles.active : ""}>About</Link>
    </div>
  );
};

export default Header;
