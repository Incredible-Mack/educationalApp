import React, { useContext } from "react";
import { Menus } from "./Menu";
import { Outlet } from "react-router-dom";
import { openContext } from "../App";

const Layout = () => {
  const [open, setOpen] = useContext(openContext);
  // const [open, setOpen] = useState(false);

  return (
    <div className="bg-purple-50 ">
      <div className="flex  relative">
        {/* Fixed First Div */}
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-purple-600 fixed scroll-m-1 overflow-scroll h-screen transition-all z-50 duration-300`}
        >
          {/* icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-10 h-10 ${
              !open && "rotate-180"
            } rounded-sm shadow-xl absolute top-0 right-0  text-purple-700 bg-white p-2`}
            onClick={() => setOpen(!open)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
          <div className="flex gap-x-4 items-center">
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              } `}
            >
              ISLT
            </h1>
          </div>
          <div className="mt-10  ">&nbsp;</div>
          <img
            src="https://placehold.co/200x200"
            alt="icon"
            className="rounded-full p-3"
          />

          <ul className="pt-6 mt-1">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"}  `}
                title={Menu.title}
              >
                {Menu.svgData}
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`duration-200 w-3/4 ml-24 ${open && "w-3/4 md:ml-80"}  `}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
