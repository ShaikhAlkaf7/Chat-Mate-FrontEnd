import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const OtherUsers = ({ user }) => {
  const { selectedUser, onlineUser } = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const isOnline = onlineUser?.includes(user?._id);

  const handleSelectChat = () => {
    dispatch(setSelectedUser(user));
  };

  return (
    <div
      className={` ${
        selectedUser?._id == user?._id ? "bg-teal-700" : ""
      } flex items-center gap-2 border hover:border-black  p-2 cursor-pointer rounded-md my-1`}
      onClick={handleSelectChat}
    >
      <div className=" relative text-2xl bg-sky-500 rounded-full text-black h-10 w-10 flex items-center justify-center">
        {user?.fullName[0]?.toUpperCase()}
        <span
          className={`h-2 w-2 ${
            isOnline ? "bg-green-400" : ""
          } rounded-full absolute right-1 bottom-1`}
        ></span>
      </div>
      <div>
        <p className="text-black font-semibold">{user?.fullName}</p>
        <p className="text-black text-xs font-semibold opacity-70">
          @{user?.userName}
        </p>
      </div>
    </div>
  );
};

export default OtherUsers;
