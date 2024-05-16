import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const AuthFile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state?.user);

  return <>{user?.token ? <Outlet /> : navigate("/login")}</>;
};

export default AuthFile;
