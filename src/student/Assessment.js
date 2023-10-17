import React, { useContext } from "react";
import { openContext } from "../App";
import Heading from "./utitlity/Heading";

const Assessment = () => {
  const [open] = useContext(openContext);
  return (
    <div className={`h-screen   w-full ${open ? "w-full" : "lg:w-[90vw]"} `}>
      <Heading
        title="Assessment"
        info="Welcome Mack, Get ready and continue your lesson today"
      />

      <div className="grid grid-cols-3 gap-4 grid-flow-col mt-4 m-auto">
        <div className="col-span-full md:col-span-1">
          <div className="col-span-full   flex justify-center items-center">
            <div className="w-full  p-3">
              <div className="w-full  p-3 rounded-xl overflow-hidden mt-1 bg-purple-100">
                <p className="font-bold text-sm">Assessment</p>
                <p className="font-bold text-sm font-text">Quiz Question</p>
                <button className="bg-purple-600 px-6 py-3 hover:bg-purple-900 w-full mt-1 text-white rounded-md ">
                  Take Quiz Assessment
                </button>
                <p className="font-bold text-sm font-text">Theory Question</p>
                <button className="bg-purple-600 px-6 py-3 hover:bg-purple-900 w-full mt-1 text-white rounded-md ">
                  Take Theory Assessment
                </button>
                <p className="font-bold text-sm font-text">Assessment Scores</p>
                <button className="bg-purple-700 px-6 py-3 hover:bg-purple-900 w-full mt-1 text-white rounded-md ">
                  All Time Assessment Scores
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-full md:col-span-2">
          <div className="col-span-full ">
            <div className="w-full  p-3 rounded-xl overflow-hidden bg-purple-700">
              <p className="font-bold text-white ">
                Summary of your previous Assessment
              </p>
            </div>
          </div>

          <div className="col-span-full mt-1  overflow-scroll">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="table-header ">Course</th>
                  <th className="table-header ">Marks / 2.00</th>
                  <th className="table-header ">Status</th>
                  <th className="table-header ">Grade / 10.00</th>
                  <th className="table-header ">Review</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-cell">Row 1, Column 1</td>
                  <td className="table-cell">Row 1, Column 2</td>
                </tr>
                <tr>
                  <td className="table-cell">Row 2, Column 1</td>
                  <td className="table-cell">Row 2, Column 2</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-full md:col-span-2">
          <div className="col-span-full   flex justify-center items-center">
            <div className="w-full  p-3 rounded-xl overflow-hidden bg-purple-700">
              <p className="font-bold text-white ">Quiz Assessment</p>
            </div>
          </div>

          <div className="col-span-full mt-1 flex justify-center items-center rounded-md bg-purple-300 border p-3">
            <div className="w-full  p-3 rounded-xl overflow-hidden bg-purple-100">
              <p className="font-medium text-sm">
                <span className="text-lg font-bold">Question 1</span> <br />
                The Word for the Month is?
              </p>
              <ul className="list-none mt-3">
                <li>
                  <label className="container ml-2 text-base  ">
                    SuperNatural
                    <input type="radio" name="question1" data-question="" />
                    <span className="checkmark border border-purple-700"></span>
                  </label>
                </li>
                <li>
                  <label className="container ml-2 text-base  ">
                    Prolific Church
                    <input type="radio" name="question1" />
                    <span className="checkmark border border-purple-700"></span>
                  </label>
                </li>
                clear my choice
              </ul>
            </div>
          </div>

          <div className="col-span-full mt-1 flex justify-center items-center">
            <div className="w-full  p-3 rounded-xl overflow-hidden ">
              <button className="bg-purple-500 px-6 m-3 py-2 text-white rounded-md ">
                Previous
              </button>
              <button className="bg-purple-700 px-6 m-3 py-2 text-white rounded-md ">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
