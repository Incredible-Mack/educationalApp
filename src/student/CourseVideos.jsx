import React, { useContext, useEffect, useState } from "react";
import { openContext } from "../App";
import Heading from "./utitlity/Heading";
import { domain } from "./utitlity/apidomain";
import { FaClock, FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const CourseVideos = () => {
  const { id } = useParams();

  const [open] = useContext(openContext);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = domain + "config/api/get_singlecourse.php?id=" + id;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          return setError("Error getting Videos");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
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
      <div className="grid grid-cols-1  gap-2 mt-4">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            {courses &&
              courses.map((course) => (
                <Link to={`../video/${course.course}`} key={course.id}>
                  <div className="col-span-full ">
                    <div className="shadow rounded-md overflow-hidden bg-blue-100">
                      <div className="flex flex-col md:flex-row">
                        <img
                          src={course.image}
                          alt="icon"
                          className="w-full md:w-48 md:h-48"
                        />
                        <div className="flex-1 p-4">
                          <p>
                            Your description text goes here. It can be as long
                            as you need it to be, and the flexbox layout will
                            keep the image and description side by side on
                            larger screens and stack them on top of each other
                            on small screens.
                          </p>
                          <p className="font-semibold text-blue-900 text-sm flex items-center pl-2  ">
                            <FaUser /> &nbsp;  Facilitator
                          </p>
                          <p className="font-semibold   text-blue-900 flex items-center   text-sm flex-shrink-0   pl-2">
                            <FaClock /> &nbsp; {course.duration}
                          </p>
                          <button className="bg-blue-700 md:mt-2 text-white text-center p-2 uppercase w-full hover:bg-blue-600 transition-all  font-bold">
                                Take Course
                          </button>
                        </div>
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

export default CourseVideos;
