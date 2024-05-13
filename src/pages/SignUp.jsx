import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/user/register", {
        userName,
        password,
        fullName,
        email,
      });

      if (data?.successs == true) {
        toast.success(data?.message, { position: "top-center" });
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message, { position: "top-center" });
    }
  };

  return (
    <div>
      <div className="backdrop-blur-[2px]  p-8 rounded-md border-black border">
        <h1 className="text-3xl font-bold text-center my-2">Sign Up </h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="fullName" className="text-xl font-semibold">
              {" "}
              Full Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              required
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
              className="p-2 rounded-md sm:w-72 w-60"
            />
          </div>
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
              className="p-2 rounded-md sm:w-72 w-60"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email" className="text-xl font-semibold">
              {" "}
              Email <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded-md sm:w-72 w-60"
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
              className="p-2 rounded-md sm:w-72 w-60"
            />
          </div>

          <button
            className="w-full p-2 text-xl font-bold bg-sky-800 rounded-md hover:bg-sky-500"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        <Link to={"/login"}>
          Alreadt have a account ?{" "}
          <span className="text-red-700 font-semibold ">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
