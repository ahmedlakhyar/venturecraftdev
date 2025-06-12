
// import React from "react";
// import Footer from "./Footer";
import Navbar from "../header/Navbar";
// import Footer from "./Footer";

export default function Layout(p: any) {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div>{p.children}</div>

      {/* <Footer /> */}
    </div>
  );
}