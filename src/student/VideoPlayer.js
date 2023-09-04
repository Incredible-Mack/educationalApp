import React, { useContext } from "react";
import { openContext } from "../App";
import Heading from "./utitlity/Heading";

const VideoPlayer = () => {
  const [open] = useContext(openContext);
  return (
    <div className={`h-screen   w-full ${open ? "w-full" : "lg:w-[90vw]"} `}>
      <Heading
        title="Course"
        info="Welcome Mack, Get ready and continue your lesson today"
      />

      <div className="grid grid-cols-3 gap-4 grid-flow-col mt-4 m-auto">
        <div className="col-span-full md:col-span-2">
          <div className="col-span-full   flex justify-center items-center">
            <div className="w-full  p-3 rounded-xl overflow-hidden bg-purple-700">
              <p className="font-bold text-white ">Product Management</p>
              <video controls className="w-full" height="300">
                <source
                  src="https://d1ent1.loveworldcloud.com/~kiddiesmedia/LOVETOONS_TV/yourloveworld/gdpjune.mp4"
                  type="video/mp4"
                />
                {/* You can add more <source> elements for different video formats */}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="col-span-full mt-1 flex justify-center items-center rounded-md bg-purple-300 border p-3">
            <div className="w-full  p-3 rounded-xl overflow-hidden bg-purple-100">
              <p className="font-bold text-sm">Mack</p>
              <p>
                officia veniam dolor officia sint dolor ullamco cupidatat
                laborum. Cillum in laboris est laboris duis culpa sit. Nulla
                eiusmod et mollit amet velit voluptate do eiusmod Lorem nostrud
                deserunt dolor. Deserunt cupidatat do nisi labore incididunt.
              </p>
            </div>
          </div>

          <div className="col-span-full mt-1 flex justify-center items-center">
            <div className="w-full  p-3 rounded-xl overflow-hidden ">
              <p className="text-purple-900 font-bold text-sm">Comment</p>
              <textarea
                class="w-full h-32 px-3 py-2 text-base border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your text here..."
              ></textarea>
              <button className="bg-purple-700 px-6 py-3 text-white rounded-md ">
                Send
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
              <div className="w-full  p-3 rounded-xl overflow-hidden mt-1 bg-purple-100">
                <p className="font-bold text-sm">Attendance Status</p>
                <p className="font-bold text-sm font-text">Null</p>
                <button className="bg-purple-700 px-6 py-3 hover:bg-purple-600 w-full mt-1 text-white rounded-md ">
                Mark Attendance
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
