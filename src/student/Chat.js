import React, { useContext, useState, useEffect } from "react";
import { openContext } from "../App";
import Heading from "./utitlity/Heading";

const Chat = () => {
  const [open] = useContext(openContext);
  const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const grid = document.querySelector('.scroll-content'); 
        const handleScroll = () => {
        if (grid && grid.scrollTop > 0) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
        };

        grid.addEventListener('scroll', handleScroll);

        return () => {
        grid.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className={`h-screen   w-full ${open ? "w-full" : "lg:w-[90vw]"} `}>
      <Heading
        title="Course"
        info="Welcome Mack, Get ready and continue your lesson today"
      />

      <div className="grid grid-cols-3 gap-4 grid-flow-col mt-4 m-auto ">
        <div className="col-span-full md:col-span-2">
          <div className="col-span-full   flex justify-center items-center">
            <div className="w-full  p-3 pt-0 rounded-xl  bg-purple-700 h-[70vh] overflow-scroll scroll-content">
              <div className={`bg-purple-700  ${isFixed ? 'fixed w-[70%] md:w-[47%] lg:w-[58%]' : 'w-full'}`}>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-white ">Chat</p>
                  <div className="text-white pt-1">
                    General Group
                    <button className="bg-purple-500 ml-1 text-white font-bold shadow-sm rounded-md text-sm p-1">
                      {" "}
                      Switch
                    </button>
                  </div>
                </div>
              </div>
              <div>&nbsp;</div>
              <div className="w-full  p-3 pt-0 mt-3   border rounded-xl overflow-hidden bg-purple-200">
                <p className="text-xs text-gray-400 font-semibold">
                  {" "}
                  9:00 AM 12-July-2023{" "}
                </p>
                <div className=" text-sm  ">
                  <p className="font-bold">Mack</p>
                  <p>Hy</p>
                </div>
              </div>

              <div className="w-full  p-3 pt-0 mt-3   border rounded-xl overflow-hidden bg-purple-100">
                <p className="text-xs text-gray-400 font-semibold">
                  {" "}
                  9:00 AM 12-July-2023{" "}
                </p>
                <div className=" text-sm float-right clear-both">
                  <p className="text-end font-bold">Mack</p>
                  <p>
                    officia veniam dolor officia sint dolor ullamco cupidatat
                    officia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full mt-1 flex justify-center items-center">
            <div className="w-full flex p-3 rounded-xl overflow-hidden ">
              <input
                class="w-full h-10 px-3 py-2 text-base   focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your message..."
              />
              <button className="bg-purple-700 px-2 py-2 text-white hover:shadow-md hover:bg-purple-600 active:translate-y-1 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-full md:col-span-1">
          <div className="col-span-full   flex justify-center items-center">
            <div className="w-full  p-3">
              <div className=" rounded-xl overflow-hidden bg-purple-500 p-3">
                <div className="w-full  p-3 rounded-xl overflow-hidden bg-purple-100">
                  <p className="font-bold text-sm">Mack</p>
                  <p>
                    officia veniam dolor officia sint dolor ullamco cupidatat
                    laborum. Cillum in laboris est laboris duis culpa sit. Nulla
                  </p>
                </div>

                <p className="text-white font-bold text-sm">Take Notes</p>
                <textarea
                  class="w-full h-32 px-3 py-2 text-base border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your text here..."
                ></textarea>
                <button className="bg-purple-700 px-6 py-3 hover:bg-purple-600 w-full mt-1 text-white rounded-md ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
