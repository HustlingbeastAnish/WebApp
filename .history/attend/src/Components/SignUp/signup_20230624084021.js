import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = user;

    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      window.alert("Password and Confirmed Password need to be the same");
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
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        window.alert("Successful Registration");
        console.log("Successful Registration");
      }

      navigate("/loginteach");
    } catch (error) {
      console.log(error);
      window.alert("An error occurred");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-gray-600 shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <div className="flex justify-center"></div>
          <h3 className="text-2xl font-bold text-center text-white">Join us</h3>
          <form onSubmit={handleFormSubmit}>
            <div className="mt-4">
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
              <span className="text-xs text-white">Passwords must match!</span>
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
