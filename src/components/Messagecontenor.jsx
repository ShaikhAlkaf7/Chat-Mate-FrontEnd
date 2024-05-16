import React from "react";
import { useSelector } from "react-redux";
import MessageBox from "./MessageBox";

const Messagecontenor = () => {
  const { selectedUser, user, onlineUser } = useSelector(
    (state) => state?.user
  );
  const isOnline = onlineUser?.includes(selectedUser?._id);

  return (
    <div className="sm:w-[400px] min-w-72  relative">
      {selectedUser && (
        <div className="flex items-center mt-9 sm:mt-0 gap-2 border bg-black  p-2 cursor-pointer rounded-md my-1">
          <div className=" relative text-2xl  text-black bg-sky-500 rounded-full h-10 w-10 flex items-center justify-center">
            {selectedUser?.fullName[0]?.toUpperCase()}
            <span
              className={`h-2 w-2 ${
                isOnline ? "bg-green-400" : ""
              } rounded-full absolute right-1 bottom-1`}
            ></span>
          </div>
          <div>
            <p className="text-white font-semibold">{selectedUser?.fullName}</p>
          </div>
        </div>
      )}

      <div className=" h-[80vh] sm:h-[60vh] pb-16 sm:pb-0 overflow-auto">
        <MessageBox />
      </div>
    </div>
  );
};

export default Messagecontenor;
