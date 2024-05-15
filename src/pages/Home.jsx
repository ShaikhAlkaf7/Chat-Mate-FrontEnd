import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Messagecontenor from "../components/Messagecontenor";
import SideBar from "../components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { setSocket } from "../redux/socketSlice";
import { setOnlineUsers } from "../redux/userSlice";
import { io } from "socket.io-client";

const Home = () => {
  const [sideBar, setSideBar] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.user);

  useEffect(() => {
    if (user) {
      const socket = io("http://localhost:8000", {
        query: { userId: user?._id },
      });
      dispatch(setSocket(socket));

      socket.on("getOnlineUsers", (onlineUser) => {
        dispatch(setOnlineUsers(onlineUser));
      });
      return () => socket.close();
    }
  }, [user]);

  return (
    <>
      {sideBar ? (
        <GiHamburgerMenu
          className="text-3xl fixed top-2 left-2 text-black sm:hidden z-50 "
          onClick={() => setSideBar(!sideBar)}
        />
      ) : (
        <button
          className="text-3xl text-black fixed top-2 left-2 sm:hidden z-50 "
          onClick={() => setSideBar(!sideBar)}
        >
          X
        </button>
      )}

      <div className="rounded-md flex flex-col sm:flex-row overflow-hidden backdrop-blur-[4px] border border-black h-[90vh]  sm:h-[80vh]">
        <div
          className={` ${
            sideBar ? "-translate-x-full " : "translate-x-0"
          } transition-all z-50 delay-200 bg-white sm:bg-transparent h-screen absolute sm:static sm:h-full `}
        >
          <SideBar />
        </div>
        <Messagecontenor />
      </div>
    </>
  );
};

export default Home;
