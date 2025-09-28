import React from "react";
import "../home/style.css";
import { IoSearchSharp } from "react-icons/io5";
import User from "./User";

const UserSidebar = () => {
  return (
    <div className="max-w-[20em] w-full ] h-screen flex flex-col">
      <div className="pl-2">
        <h1 id="appname" className="mx-3 px-2 py-1 text-4xl">
          <span id="chat">CHAT</span>IFY
        </h1>
      </div>
      <div className="p-3">
        <label class="input ">
          <IoSearchSharp />
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="h-full overflow-y-auto px-5">
          <User/>
         
          
      </div>
      <div className="h-[3rem] bg-black">

      </div>
    </div>
  );
};

export default UserSidebar;
