import React from "react";
import { IoSend } from "react-icons/io5";
import MessageBox from "./MessageBox";

const Messagecontenor = () => {
  return (
    <div className="sm:w-[400px] min-w-72  relative">
      <div className="flex items-center gap-2 border bg-black  p-2 cursor-pointer rounded-md my-1">
        <div className=" relative text-2xl bg-sky-500 rounded-full h-10 w-10 flex items-center justify-center">
          A
          <span className="h-2 w-2 bg-green-400 rounded-full absolute right-1 bottom-1"></span>
        </div>
        <div>
          <p className="text-white font-semibold">Shaikh Alkaf</p>
        </div>
      </div>

      <div className=" h-[80vh] sm:h-[60vh] pb-16 sm:pb-0 overflow-auto">
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
      </div>
      <div className="absolute bottom-0 my-3 w-full">
        <form className="flex items-center w-full pr-2 bg-white rounded-md">
          <input
            type="text"
            required
            placeholder="Send Message"
            className="p-2 rounded-md w-full outline-none bg-white"
          />
          <button>
            <IoSend className="text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Messagecontenor;
