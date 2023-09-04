import React, { useContext } from "react";
import { openContext } from "../App";
import Heading from "./utitlity/Heading";

const Courses = () => {
    const [open] = useContext(openContext);
    return (
        <div className={`h-screen   w-full ${open ? "w-full" : "lg:w-[90vw]"} `}>
            <Heading
                title="Courses"
                info="Welcome Mack, Get ready and continue your lesson today"
            />

            <div className="grid grid-cols-3 gap-4 grid-flow-col mt-4 ">
                <div className="col-span-full md:col-span-1  ">
                    <div className="w-3/4 border  p-3 rounded-xl overflow-hidden bg-purple-700">
                        <img  src='https://placehold.co/250x150' alt='icon' className="w-full rounded-xl overflow-hidden" />
                        <div>
                            <p className="font-bold text-sm mt-3 text-white">Product Management</p>

                            <p className="font-semibold text-sm text-white ">12 Lectures</p>

                            <p className="font-semibold text-sm text-white ">3 hrs</p>

                           <button className="bg-purple-100 text-center uppercase w-full rounded-md font-bold"> View Course</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
