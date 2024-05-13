import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Messagecontenor from "../components/Messagecontenor";
import SideBar from "../components/SideBar";

const Home = () => {
  const [sideBar, setSideBar] = useState(false);
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
