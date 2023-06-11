import { FC } from "react";

import Layout from "@/components/layout";
import CarItem from "@/components/ui/CarItem";
import { IBlog, IBlogData } from "@/services/types";

import styles from './Home.module.scss'

const Home: FC<IBlogData> = ({ blogs }) => {
  return (
    <Layout>
      <div>Home</div>
      <div className={styles.container}>
        {blogs.length &&
          blogs.map((blog) => <CarItem key={blog.id} blog={blog} />)}
      </div>
    </Layout>
  );
};

export default Home;
