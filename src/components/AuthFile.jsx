import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const AuthFile = () => {
  const { user } = useSelector((state) => state?.user);

  return <>{user?.token ? <Outlet /> : null}</>;
};

export default AuthFile;
