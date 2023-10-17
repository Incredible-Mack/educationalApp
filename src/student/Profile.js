"use client";
import React, { useContext, useState } from "react";
import { openContext } from "../App";
import Heading from "./utitlity/Heading";
import { useEffect } from "react";
import ProfileModal from "./utitlity/ProfileModal";
import { domain } from "./utitlity/apidomain";

const Profile = () => {
  const [open] = useContext(openContext);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  useEffect(() => {
    const apiUrl = domain + "config/api/get_profile.php";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`h-screen   w-full ${open ? "w-full" : "lg:w-[90vw]"} `}>
      <Heading
        title="Profile"
        info="Welcome Mack, Get ready and continue your lesson today"
      />

      <div className="grid grid-cols-3 gap-4 grid-flow-col mt-4 m-auto">
        <div className="col-span-full lg:mr-60 lg:ml-60">
          <div className="col-span-full mt-1  ">
            <div className="flex flex-col items-center pb-10">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  {userData.image ? (
                    <img
                      src={userData.image}
                      alt="profile icon"
                      className="w-28 h-28 text-gray-400 -left-0"
                    />
                  ) : (
                    <svg
                      className="w-28 h-28 text-gray-400 -left-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                    </svg>
                  )}

                  <div className="mt-3 card  border-0 p-md-5 shadow w-full p-4">
                    <p className="p-4 font-bold ">
                      {" "}
                      Name: &nbsp;&nbsp;{" "}
                      <span className="font-semibold">{userData.name}</span>
                    </p>

                    <p className="p-4 font-bold ">
                      {" "}
                      Email: &nbsp;&nbsp;{" "}
                      <span className="font-semibold">{userData.email}</span>
                    </p>

                    <p className="p-4 font-bold ">
                      {" "}
                      Gender: &nbsp;&nbsp;{" "}
                      <span className="font-semibold">{userData.gender}</span>
                    </p>

                    <p className="p-4 font-bold ">
                      {" "}
                      Phone Number : &nbsp;&nbsp;{" "}
                      <span className="font-semibold">
                        {userData.phone_number}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() => props.setOpenModal("dismissible")}
                    className="items-center p-4 mt-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Edit Profile
                  </button>

                  <ProfileModal props={props} userData={userData} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

export const profileAction = async ({ request }) => {
  const inputFiled = await request.formData();
  const fileInput = document.querySelector('input[type="file"]');
  const formData = new FormData();
  formData.append("file", fileInput.files[0]);
  formData.append("name", inputFiled.get("name"));
  formData.append("user_id", inputFiled.get("user_id"));
  formData.append("phone", inputFiled.get("phone"));
  formData.append("email", inputFiled.get("email"));

  async function upload(formData) {
    try {
      const apiUrl = domain + "config/api/update_profile.php";
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  upload(formData);
  return 1;
};
