import React, { useContext, useEffect, useRef, useState } from "react";
import { openContext } from "../App";
import Heading from "./utitlity/Heading";
import { domain } from "./utitlity/apidomain";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const [open] = useContext(openContext);
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);
  const [notes, setNotes] = useState([]);

  const { id } = useParams();
  const noteRef = useRef();

  useEffect(() => {
    const apiUrl = domain + "config/api/get_singlecourse.php?id=" + id;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          return setError(
            "Error, something went wrong while retrieving the video"
          );
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        setError("Error! something went wrong while retrieving the video");
      });
  }, []);

  useEffect(() => {
    const apiUrl = domain + "config/api/get_notes.php?id=" + id;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          return setError("Error, something went wrong while retrieving notes");
        }
        return response.json();
      })
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => {
        setError("Error! something went wrong while retrieving the video");
      });
  }, []);

  const handleNote = (noteRef) => {
    alert(noteRef.current.value);
  };
  return (
    <div className={`h-screen   w-full ${open ? "w-full" : "lg:w-[90vw]"} `}>
      <Heading
        title="Course"
        info="Welcome Mack, Get ready and continue your lesson today"
      />
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-3 gap-4 grid-flow-col mt-4 m-auto">
          <div className="col-span-full md:col-span-2">
            <div className="col-span-full   flex justify-center items-center">
              {courses &&
                courses.map((course) => (
                  <div
                    key={course.id}
                    className="w-full  p-3 rounded-xl overflow-hidden bg-blue-200"
                  >
                    <p className="font-bold text-blue-900 ">{course.course}</p>
                    <video controls className="w-full" height="300">
                      <source src={course.links} type="video/mp4" />
                      {/* You can add more <source> elements for different video formats */}
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
            </div>
            <p className="text-blue-900 font-bold text-md p-3">Comment</p>
            <div className="col-span-full mt-1 flex justify-center items-center rounded-md bg-blue-300 border p-3">
              <div className="w-full  p-3 rounded-xl overflow-hidden bg-blue-100">
                <p className="font-bold text-sm">Mack</p>
                <p>
                  officia veniam dolor officia sint dolor ullamco cupidatat
                  laborum. Cillum in laboris est laboris duis culpa sit. Nulla
                  eiusmod et mollit amet velit voluptate do eiusmod Lorem
                  nostrud deserunt dolor. Deserunt cupidatat do nisi labore
                  incididunt.
                </p>
              </div>
            </div>

            <div className="col-span-full mt-1 flex justify-center items-center">
              <div className="w-full  p-3 rounded-xl overflow-hidden ">
                <textarea
                  class="w-full h-32 px-3 py-2 text-base border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Make your comment"
                ></textarea>
                <button className="bg-blue-700 px-6 py-3 text-white rounded-md ">
                  Send
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-full md:col-span-1">
            <div className="col-span-full   flex justify-center items-center">
              <div className="w-full  p-3">
                <div className=" rounded-xl overflow-hidden bg-blue-500 p-3">
                  {notes &&
                    notes.map((note) => (
                      <div className="w-full mt-2 p-3 rounded-xl overflow-hidden bg-blue-100">
                        <p className="font-bold text-sm">{note.belongto}</p>
                        <p>
                          {note.note}
                        </p>
                      </div>
                    ))}

                  <p className="text-white font-bold text-sm">Take Notes</p>
                  <textarea
                    ref={noteRef}
                    class="w-full h-32 px-3 py-2 text-base border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter your text here..."
                  ></textarea>
                  <button
                    onClick={() => handleNote(noteRef)}
                    className="bg-blue-700 px-6 py-3 hover:bg-purple-600 w-full mt-1 text-white rounded-md "
                  >
                    Submit
                  </button>
                </div>
                <div className="w-full  p-3 rounded-xl overflow-hidden mt-1 bg-purple-100">
                  <p className="font-bold text-sm">Attendance Status</p>
                  <p className="font-bold text-sm font-text">Null</p>
                  <button className="bg-blue-900 px-6 py-3 hover:bg-blue-600 w-full mt-1 text-white rounded-md ">
                    Mark Attendance
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
