import React, { useContext, useEffect, useState } from "react";
import { openContext } from "../App";
import Heading from "./utitlity/Heading";
import { domain } from "./utitlity/apidomain";
import { FaClock, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

const Courses = () => {
  const [open] = useContext(openContext);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = domain + "config/api/get_courses.php";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          return setError("Error getting Videos");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCourses(data);
      })
      .catch((error) => {
        console.error(error);
        return setError("Error! Please try again.");
      });
  }, []);

  return (
    <div className={`h-screen   w-full ${open ? "w-full" : "lg:w-[90vw]"} `}>
      <Heading
        title="Courses"
        info="Welcome Mack, Get ready and continue your lesson today"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            {courses &&
              courses.map((course) => (
                <Link to={`./${course.id}`}>
                <div className="col-span-full md:col-span-1" key={course.id}  >
                  <div className="shadow p- rounded-xl overflow-hidden ">
                    <img src={course.image} alt="icon" className="w-full " />
                    <div>
                      <p className="font-bold text-md text-blue-600 pl-2">
                        {course.course}
                      </p>
                      <div className="flex flex-row ">
                        <p className="font-semibold text-blue-600 text-sm flex items-center pl-2  ">
                              <FaVideo /> &nbsp; {   course.totalLesson} Lecture{" "}
                        </p>
                        <p className="font-semibold   text-blue-600 flex items-center   text-sm flex-shrink-0   pl-2">
                          | &nbsp;&nbsp; <FaClock/>  &nbsp; {  course.duration}
                        </p>
                      </div>

                      <button className="bg-blue-500 text-white text-center p-2 uppercase w-full hover:bg-blue-700 transition-all  font-bold">
                        View Course
                      </button>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Courses;
