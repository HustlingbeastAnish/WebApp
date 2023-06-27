import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar.js";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    secretkey: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (user.secretkey != "secret") {
      Swal.fire({
        title: "Bad Credentials",
        text: "Invlaid Secret Key",
        icon: "error",
        confirmButtonText: "Retry",
      });
    } else {
      const { name, email, password } = user;

      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        Swal.fire({
          title: "Error!!!",
          text: "Password and Confirmed Password need to be the same",
          icon: "error",
          confirmButtonText: "Retry",
        });
        return;
      }

      try {
        const response = await fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });

        const data = await response.json();

        if (response.status === 400 || !data || data.error) {
          Swal.fire({
            title: "Bad Credentials",
            text: "Please enter valid details",
            icon: "error",
            confirmButtonText: "Retry",
          });
        } else {
          Swal.fire({
            title: "Registration Successful",
            icon: "success",
            timer: 1000,
          });
          navigate("/loginteach");
        }
      } catch (error) {}
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-gray-600 shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <div className="flex justify-center"></div>
          <h3 className="text-2xl font-bold text-center text-white">Join us</h3>
          <form onSubmit={handleFormSubmit}>
            <div className="mt-4">
              <div>
                <label className="block text-white " htmlFor="secretkey">
                  SECRET KEY
                </label>
                <input
                  type="text"
                  name="secretkey"
                  value={user.secretkey}
                  onChange={handleInputChange}
                  placeholder="Enter the Secret Key"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <br></br>
              <div>
                <label className="block text-white " htmlFor="secretkey">
                  SECRET KEY
                </label>
                <input
                  type="text"
                  name="secretkey"
                  value={user.secretkey}
                  onChange={handleInputChange}
                  placeholder="Enter the Secret Key"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <br></br>
              <div>
                <label className="block text-white" htmlFor="Name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block text-white" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block text-white">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div className="flex">
                <button
                  type="submit"
                  className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                >
                  Create Account
                </button>
              </div>
              <div className="mt-6 text-grey-dark text-white">
                Already have an account?{" "}
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
