import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Signup = () => {
  const [SignupData, setSignupData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setSignupData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  console.log(SignupData)
  };

  return (
    <div className="flex justify-center items-center p-6 min-h-screen">
      <div className="max-w-[40rem] w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-center">Please Signup.!</h2>
        <div className="flex justify-center">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaUser />
            <input
              className="grow"
              type="text"
              placeholder="Full Name "
              onChange={handleInputChange}
              name="fullName"
            />
          </label>
        </div>
        <div className="flex justify-center">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaUser />
            <input
              className="grow"
              type="text"
              placeholder="User Name"
              onChange={handleInputChange}
              name="usernaem"
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
        <div className="flex justify-center">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaKey />
            <input
              className="grow"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button className="btn btn-primary">Sign Up</button>
        <p className="text-center">
          Already have an account? &nbsp;
          <Link to="/Login" className="text-blue-400 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
