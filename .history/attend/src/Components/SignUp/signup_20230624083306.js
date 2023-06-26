import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar.js";

const Signup = () => {
  const navigate = useNavigate();
  // Creating and Initializing an empty array named user
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Variables for refrencing
  let name, value;

  const handle = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    console.log("postdata");
    e.preventDefault();

    const { name, email, password } = user;
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });

    const data = await res.json();

    if (data.status === 400 || !data || data.error) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Successfull Registration");
      console.log("Successfull Registration");
    }
    // Redirect to the login page once the user is registered
    navigate("/loginteach");
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-gray-600 shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <div className="flex justify-center"></div>
          <h3 className="text-2xl font-bold text-center">Join us</h3>
          <form action="">
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="Name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handle}
                  placeholder="Name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handle}
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handle}
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <span className="text-xs text-red-400">
                Password must be same!
              </span>
              <div className="flex">
                <button
                  className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                  onClick={PostData}
                >
                  Create Account
                </button>
              </div>
              <div className="mt-6 text-grey-dark">
                Already have an account?
                <a className="text-blue-600 hover:underline" href="/login">
                  Log in
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
