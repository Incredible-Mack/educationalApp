import React, { useContext, useEffect, useState } from "react";
import { openContext } from "../App";
import Heading from "./utitlity/Heading";
import { domain } from "./utitlity/apidomain";
import DataTable from "react-data-table-component";
import { FaSearch } from "react-icons/fa";
import { TextInput, Label } from "flowbite-react";

const Attendance = () => {
  const [open] = useContext(openContext);
  const [attendance, setAttendance] = useState([]);
  const [sortRecord, setSortRecord] = useState(attendance);
  const [error, setError] = useState(null);

  const columns = [
    {
      name: "Date",
      selector: (row) => row.eventDate,
      sortable: true,
    },

    {
      name: "Course",
      selector: (row) => row.course,
      sortable: true,
    },

    {
      name: "Check In",
      selector: (row) => row.check_in,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
  ];

  useEffect(() => {
    const apiUrl = domain + "config/api/get_attendance.php";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          return setError("Something went wrong. Please try again.");
        }
        return response.json();
      })
      .then((data) => {
        setAttendance(data);
        setSortRecord(data);
      })
      .catch((error) => {
        console.error(error);
        return setError("Error! Please try again."); // Capture and display the error
      });
  }, []);

  const filterRecord = (e) => {
    const searchValue = e.target.value.toLowerCase();

    const newData = attendance.filter((row) => {
      const courseMatches = row.course.toLowerCase().includes(searchValue);
      const statusMatches = row.status.toLowerCase().includes(searchValue);
      const dateMatches = row.eventDate.toLowerCase().includes(searchValue);

      return courseMatches || statusMatches || dateMatches;
    });

    setSortRecord(newData);
  };

  return (
    <div className={`h-screen   w-full ${open ? "w-full" : "lg:w-[90vw]"}`}>
      <Heading
        title="Attendance"
        info="Welcome Mack, get ready and continue your lesson today"
      />

      <div className="grid grid-cols-3 gap-4 grid-flow-col mt-4 m-auto">
        <div className="col-span-full ">
          <div className="w-full  p-3 rounded-xl overflow-hidden bg-purple-700">
            <p className="font-bold text-white ">Attendance Summary</p>
          </div>
        </div>
        <div className="col-span-full mt-1 overflow-scroll">
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <>
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="search" value="Search" />
                </div>
                <TextInput
                  id="search"
                  placeholder="Search"
                  required
                  className="m-2"
                  rightIcon={FaSearch}
                  type="email"
                  onChange={filterRecord}
                />
              </div>
              <DataTable
                columns={columns}
                data={sortRecord}
                fixedHeader
                pagination
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
