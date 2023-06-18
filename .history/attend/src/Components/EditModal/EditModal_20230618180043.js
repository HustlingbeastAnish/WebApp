import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import TrackLogo from "../images/cclogo.png";
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

  console.log(updatedStud);

  // console.log(props.Upstud._id);
  let name, value;
  const handleEdit = (e) => {
    name = e.target.name;
    value = e.target.value;
    setupdatedStud({ ...updatedStud, [name]: value });
  };

  const PostEdit = async (e) => {
    console.log(updatedStud);
    e.preventDefault();
    const { _id, name, email, subject, phone, roll } = updatedStud;
    console.log(_id);
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
    console.log(data.status);
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
      console.log("Invalid Registration");
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
      <section className="bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/#"
            className="flex items-center mb-6 text-2xl font-semibold text-white-900 dark:text-white"
          >
            <img className="w-8 h-8 mr-2" src={TrackLogo} alt="logo" />
            TracKnAttend
          </a>
          <div className="w-full p-6 bg-gray-700 rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-black">
              LogIn as Teacher
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Update Your Name
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
                  Update Your Email
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
                  Update Your Phone Number
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
              <div className="flex items-start justify-between">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    aria-describedby="newsletter"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm flex flex-row">
                  <div>
                    <Link to="/forgotpassword">
                      <a
                        href="#!"
                        className="ml-4 text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                      >
                        Forgot password?
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={PostEdit}
                >
                  LogIn
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
