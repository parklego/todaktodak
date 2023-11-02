import React, { ReactNode } from "react";
import Header from "./Header";

const Layout = (props: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
