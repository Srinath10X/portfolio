import React from "react";
import Header from "@/Components/Header";
import Main from "@/Components/Main";
import About from "@/Components/About";
import Work from "@/Components/Work";
import "./globals.css";

const page = () => {
  return (
    <>
      <Header />
      <Main />
      <Work />
      <About />
    </>
  );
};

export default page;
