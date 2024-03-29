import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import TrackLogo from "../images/cclogo.png";
import Navbarlogin from "../Navbar/navbarlogin";
const EditModal = (props) => {
  const navigate = useNavigate();
  const [updatedStud, setupdatedStud] = useState({
    _id: props.Upstud._id,
    name: props.Upstud.name,
    email: props.Upstud.email,
    subject: props.Subject,
    phone: props.Upstud.phone,
    roll: props.Upstud.roll,
  });


 
  let name, value;
  const handleEdit = (e) => {
    name = e.target.name;
    value = e.target.value;
    setupdatedStud({ ...updatedStud, [name]: value });
  };

  const PostEdit = async (e) => {
  
    e.preventDefault();
    const { _id, name, email, subject, phone, roll } = updatedStud;
  
    const res = await fetch(`http://localhost:8080/api/studdata/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      // content: "application/json",
      body: JSON.stringify({
        _id: _id,
        name: name,
        email: email,
        phone: phone,
        roll: roll,
      }),
    });
    const data = await res.json();
  
    if (
      data.status === 422 ||
      data.status === 400 ||
      data.status === 404 ||
      data.status === 500
    ) {
      Swal.fire({
        title: "Bad Credentials",
        text: "Please fill in all details",
        icon: "error",
        confirmButtonText: "Retry",
      });
    }
    if (!data || data.error) {
  
      Swal.fire({
        title: "Bad Credentials",
        text: "User Already Exists with required fields",
        icon: "error",
        confirmButtonText: "Retry",
      });
    } else {
      Swal.fire({
        title: "Updation Successful",
        icon: "success",
        timer: 1000,
      });
      navigate("/updatestud");
    }
  };

  return (
    <>
    <Navbarlogin/>
      <section className="bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          
          <div className="w-full p-6 bg-gray-700 rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-black">
             Edit Student's Details
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Update  Name
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  value={updatedStud.name}
                  onChange={handleEdit}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Update  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={updatedStud.email}
                  onChange={handleEdit}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Update  Phone Number
                </label>
                <input
                  name="phone"
                  value={updatedStud.phone}
                  id="floating_phone"
                  onChange={handleEdit}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Update Roll Number
                </label>
                <input
                  type="text"
                  name="roll"
                  value={updatedStud.roll}
                  onChange={handleEdit}
                  id="floating_company"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="flex items-start justify-between"></div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={PostEdit}
                >
                  Update Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default EditModal;
