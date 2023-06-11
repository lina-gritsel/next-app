import Layout from "@/components/layout/Layout";
import { NextPage } from "next";
import React from "react";

import Image from "next/image";

import styles from "./Page404.module.scss";

const Page404: NextPage = () => {
  return (
    <Layout>
      <div className={styles.error}>
        <Image priority src="/error.png" alt="" width={450} height={433} />
      </div>
    </Layout>
  );
};

export default Page404;
