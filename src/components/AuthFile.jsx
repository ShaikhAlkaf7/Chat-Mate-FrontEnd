import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const AuthFile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state?.user);

  useEffect(() => {
    if (!user?.token) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Render nothing or a loading state while checking authentication
  if (!user?.token) {
    return null; // or a loading spinner, or a message
  }

  return <Outlet />;
};

export default AuthFile;
