import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Forgotpass = (props) => {
  const navigate = useNavigate();
  const [Arr, setArr] = useState({
    email: "",
    password: "",
  });

  const [flag, setflag] = useState(false);
  let name, value;
  const handleChanges = (e) => {
    name = e.target.name;
    value = e.target.value;
    setArr({ ...Arr, [name]: value });
  };

  const PostReq = async (e) => {
    console.log("Changing your password");
    e.preventDefault();

    const { email } = Arr;
    const res = await fetch("/forgotpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await res.json();
    if (!data || data.error) {
      window.alert("No Such Email Exists");
      console.log("No Such Email Exists");
    } else {
      console.log("Verification in process");
      props.SetLink(data.message);
      setflag(true);
      // console.log("Heyyy");
      console.log(props.link);
    }
  };
  return (
    <div>
      <div className="flex justify-center content-center">
        <form className="mt-20">
          <h2>{props.userData.email}</h2>
          <h2>{props.userData.name}</h2>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={Arr.email}
              onChange={handleChanges}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Your Old Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={Arr.password}
              onChange={handleChanges}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="terms"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I confirm that the above email is valid
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={PostReq}
          >
            Verify Email
          </button>
        </form>
      </div>
      {flag && (
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Click on the below button to verify your email
          </p>
          <Link to="/resetpassword">
            <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Click Here to verfiy
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Forgotpass;
