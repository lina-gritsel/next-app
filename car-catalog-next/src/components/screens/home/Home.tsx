import React, { FC } from "react";
import { Inter } from "next/font/google";
import styles from "./Home.module.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

const Home: FC = () => {
  return (
    <Layout>
      <div>Home</div>
    </Layout>
  );
};

export default Home;
