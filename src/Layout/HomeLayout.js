import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Component/Header";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export { HomeLayout };
