"use client";

import { NextPage } from "next";
import { useRouter } from "next/navigation";

const CarPage: NextPage = () => {
  const { push, replace } = useRouter();

  return (
    <div>
      <button onClick={() => push("/")}>go home</button>
      <button onClick={() => replace("/")}>go home</button>
    </div>
  );
};

export default CarPage;
