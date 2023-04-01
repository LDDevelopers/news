import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Component/Header";
import { Footer } from "../Component/Footer";

const HomeLayout = () => {
  return (
    <>
      <div className="grid grid-cols-1 min-h-full">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export { HomeLayout };
