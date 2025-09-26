import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    usernaem: "",
    password: "",
  });
  const handleInputChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // console.log(loginData);
  };
  return (
    <div className="flex justify-center items-center p-6 min-h-screen">
      <div className="max-w-[40rem] w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-center">Please Login..!!</h2>
        <div className="flex justify-center">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaUser />
            <input
              className="grow"
              type="text"
              placeholder="username"
              name="username"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="flex justify-center">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaKey />
            <input
              className="grow"
              type="password"
              placeholder="Password"
              name="password"
               onChange={handleInputChange}
            />
          </label>
        </div>
        <button className="btn btn-primary">Login</button>
        <p className="text-center">
          Don't have an account? &nbsp;
          <Link to="/signup" className="text-blue-400 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
