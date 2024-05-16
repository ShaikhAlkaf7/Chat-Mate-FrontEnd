import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_ROUTE}/api/user/login`,
        {
          userName,
          password,
        }
      );
      if (data?.success == true) {
        toast.success(data?.message, { position: "top-center" });
        localStorage.setItem("user", JSON.stringify(data?.user));
        dispatch(addUser(data?.user));
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.response.data.message, { position: "top-center" });
    }
  };
  return (
    <div className=" flex justify-center items-center h-screen w-screen ">
      <div className="backdrop-blur-[2px]  p-8 rounded-md border-black border text-black">
        <h1 className="text-3xl font-bold text-center my-2">Login </h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="userName" className="text-xl font-semibold">
              {" "}
              username <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="userName"
              value={userName}
              required
              placeholder="User Name"
              onChange={(e) => setUserName(e.target.value)}
              className="p-2 rounded-md sm:w-72 w-60 bg-white"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="password" className="text-xl font-semibold">
              {" "}
              Password <span className="text-red-700">*</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 rounded-md sm:w-72 w-60 bg-white"
            />
          </div>

          <button
            className="w-full p-2 text-xl font-bold bg-sky-800 rounded-md hover:bg-sky-500"
            onClick={handleSubmit}
          >
            {loading ? "Please Wait" : "Submit"}
          </button>
        </form>
        <Link to={"/sign-up"}>
          New to CHAT-MATE ?{" "}
          <span className="text-red-700 font-semibold ">Sign-Up</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
