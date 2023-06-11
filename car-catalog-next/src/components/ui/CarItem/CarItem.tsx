import { IBlogDataSingle } from "@/services/types";
import Link from "next/link";
import React, { FC } from "react";

import styles from './CartItem.module.scss'

const CarItem: FC<IBlogDataSingle> = ({ blog }) => {
  return (
    <div className={styles.item}>
      <h2>{blog.title}</h2>
      <h4>{blog.body}</h4>
      <Link href={`/blog/${blog.id}`}>Read more</Link>
    </div>
  );
};

export default CarItem;
