import { useContext } from "react";
import { openContext } from "../App";
import Card from "./utitlity/Card";
import { Link } from "react-router-dom";
import Heading from "./utitlity/Heading";

const DashBoard = () => {
  const [open] = useContext(openContext);
  return (
    <div className={`h-screen   w-full ${open ? "w-full" : "lg:w-[90vw]"} `}>
      <Heading title="DashBoard" info="Welcome Mack, Get ready and continue your lesson today" />
      <div className="grid grid-cols-3 gap-4 grid-flow-col  ">
        <Card
          title={"Active Course"}
          count={"11"}
          description={
            "This displays the number of available courses in which you have yet to participate."
          }
        />
        <Card
          title={"Assessment"}
          count={"21"}
          description={"This displays the number of quiz yet to be carried out"}
        />
        <Card
          title={"Chat"}
          count={"21"}
          description={"Number of unread message"}
        />
      </div>

      <div className="grid grid-cols-3 gap-4 grid-flow-col  mt-10">
        <div className="col-span-full md:col-span-1  rounded-md p-4">
          <p className="font-bold text-lg "> Schedule: </p>
          <p className="text-sm font-text font-semibold">Sep 26, 2023</p>
          <div className="flex justify-start p-3">
            <div className="p-3 pt-0 pl-0 border-r-4 border-purple-900 ">
              <p>&nbsp;</p>
              <p className="font-bold">10:30 AM </p>
            </div>
            <div className="p-3 pt-0">
              <p className="font-text"> Lecture</p>
              <p className="font-bold">Princples of Success</p>
            </div>
          </div>
          <div className="flex justify-start p-3">
            <div className="p-3 pt-0 pl-0 border-r-4 border-purple-900 ">
              <p>&nbsp;</p>
              <p className="font-bold">10:30 AM </p>
            </div>
            <div className="p-3 pt-0">
              <p className="font-text"> Lecture</p>
              <p className="font-bold">Princples of Success</p>
            </div>
          </div>

          <button className="button butto text-center p-2 border-spacing-1 border hover:bg-purple-700 hover:text-white hover:shadow-md rounded-lg w-full border-purple-700">
            View All
          </button>
        </div>

        <div className="col-span-full md:col-span-2  rounded-md p-4">
          <p className="font-bold text-lg mb-3"> Courses: </p>

          <div className="rounded bg-purple-100 cursor-pointer  shadow-sm p-3">
            <p className="text-sm font-semibold">Product Management</p>
            <div className="flex">
              <div className="flex-shrink-0">
                <img src="https://placehold.co/50x50" alt="icon" />
              </div>
              <div className="pl-2">
                <p className="font-text">
                  These abilities enable individuals/teams accomplish tasks
                  faster.
                </p>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500">
                    Duration : 3hr &nbsp;| Lesson: 10 &nbsp;| Tutor: Mac
                  </p>
                  <Link className="text-purple-700 underline hover:text-purple-900  font-bold">
                    Take Course
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <button className="button butto text-center p-2 mt-4 border-spacing-1 border hover:bg-purple-700 hover:text-white hover:shadow-md rounded-lg w-full border-purple-700">
            All Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
