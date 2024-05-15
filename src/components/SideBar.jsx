import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoLogOutSharp, IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import OtherUsers from "./OtherUsers";
import { addUser, setOnlineUsers, setSelectedUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SideBar = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);
  const { user, selectedUser } = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchOtherUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/user/", {
        headers: {
          Authorization: user?.token,
        },
      });
      setUsers(data?.otherUsers);
    } catch (error) {}
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(addUser(null));
    dispatch(setSelectedUser(null));
    dispatch(setOnlineUsers(null));
    toast.success("logout successfully", { position: "top-center" });
    navigate("/login");
  };

  const fetchSearchUser = (e) => {
    e.preventDefault();
    const searchUser = users.find((user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (searchUser) {
      setUsers([searchUser]);
      search("");
    }
  };

  useEffect(() => {
    fetchOtherUsers();
  }, []);

  return (
    <div className="p-2 flex flex-col gap-2 h-[90vh] sm:h-[80vh] z-50 ">
      <form
        className="flex items-center w-72 bg-white rounded-md"
        onSubmit={fetchSearchUser}
      >
        <input
          type="text"
          id="password"
          required
          placeholder="Search"
          className="p-2 rounded-md sm:w-72 w-60 bg-white "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <IoSearchSharp className="text-2xl" />
        </button>
      </form>
      <div className="  overflow-auto scroll-smooth">
        {users.map((user) => (
          <OtherUsers user={user} key={user?._id} />
        ))}
      </div>
      <div className="absolute bottom-0 text-xl text-black font-bold  ">
        {user && <p>Hi! {user?.fullName}</p>}
        <button
          className=" bg-white m-1 p-1 rounded-md"
          title="logout"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
