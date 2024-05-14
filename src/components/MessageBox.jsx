import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { useSelector } from "react-redux";

const MessageBox = () => {
  const { selectedUser, user } = useSelector((state) => state?.user);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const scroll = useRef();

  const fetchMessages = async () => {
    try {
      setMessages([]);
      const { data } = await axios.get(
        `/api/message/${
          selectedUser == null ? "111111111111111111111111" : selectedUser?._id
        }`,
        {
          headers: {
            Authorization: user?.token,
          },
        }
      );

      if (data?.success == true) {
        setMessages(data?.conversation?.messages);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `/api/message/send/${selectedUser?._id}`,
        { message },
        {
          headers: {
            Authorization: user?.token,
          },
        }
      );
      console.log(data);
      setMessages([...messages, data?.newMessage]);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [selectedUser]);
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
    // timeZoneName: "short",
  };

  return (
    <div className="">
      {messages.length > 0 ? (
        messages.map((message) => (
          <div
            className={`chat chat-start ${
              user?._id === message?.senderId ? "chat-end" : "chat-start"
            }`}
            key={message._id}
            ref={scroll}
          >
            <div className="chat-header text-black">
              {user?._id != message?.senderId ? selectedUser?.userName : "you"}{" "}
              <time className="text-xs opacity-50">
                {new Date(message?.createdAt).toLocaleString("en-US", options)}
              </time>
            </div>
            <div className="chat-bubble">{message?.message}</div>
          </div>
        ))
      ) : (
        <div className="flex items-center h-[50vh] justify-center text-black font-bold text-2xl ">
          <p>Start A Chat</p>
        </div>
      )}
      {selectedUser && (
        <div className="absolute bottom-0 my-3 w-full">
          <form
            className="flex items-center w-full pr-2 bg-white rounded-md"
            onSubmit={sendMessageHandler}
          >
            <input
              type="text"
              required={true}
              placeholder="Send Message"
              className="p-2 rounded-md w-full outline-none text-black bg-white"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button>
              <IoSend className="text-2xl" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MessageBox;
