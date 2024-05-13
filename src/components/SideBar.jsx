import React from "react";
import { IoLogOut, IoLogOutSharp, IoSearchSharp } from "react-icons/io5";
import OtherUsers from "./OtherUsers";

const SideBar = () => {
  return (
    <div className="p-2 flex flex-col gap-2 h-[90vh] sm:h-[80vh] z-50 ">
      <form className="flex items-center w-72 bg-white rounded-md">
        <input
          type="password"
          id="password"
          required
          placeholder="Search"
          className="p-2 rounded-md sm:w-72 w-60 bg-white "
        />
        <button>
          <IoSearchSharp className="text-2xl" />
        </button>
      </form>
      <div className="  overflow-auto scroll-smooth">
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
      </div>
      <button className="text-3xl" title="logout">
        <IoLogOutSharp />
      </button>
    </div>
  );
};

export default SideBar;
