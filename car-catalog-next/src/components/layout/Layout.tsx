import React, { FC, PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import("./Footer"), { ssr: false });

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <DynamicFooter />
    </div>
  );
};

export default Layout;
