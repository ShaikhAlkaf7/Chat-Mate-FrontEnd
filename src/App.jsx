import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import { addUser } from "./redux/userSlice";
import AuthFile from "./components/AuthFile";

const App = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  dispatch(addUser(user));
  // console.log("first");

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={<AuthFile />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
