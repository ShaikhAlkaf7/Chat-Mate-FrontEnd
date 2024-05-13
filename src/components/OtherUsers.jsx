import React from "react";

const OtherUsers = () => {
  return (
    <div className="flex items-center gap-2 border hover:border-black p-2 cursor-pointer rounded-md my-1">
      <div className=" relative text-2xl bg-sky-500 rounded-full h-10 w-10 flex items-center justify-center">
        A
        <span className="h-2 w-2 bg-green-400 rounded-full absolute right-1 bottom-1"></span>
      </div>
      <div>
        <p className="text-black font-semibold">Shaikh Alkaf</p>
      </div>
    </div>
  );
};

export default OtherUsers;
