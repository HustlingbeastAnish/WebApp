import React, { useState } from "react";

const Forgotpass = () => {
  const [Arr, setArr] = useState({
    email: "",
    password: "",
  });

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

    const res = await fetch("/api/forgotpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    console.log(res);

    const data = await res.json();
    console.log(data.link);
  };
  return (
    <div className="flex justify-center content-center">
      <form className="mt-20">
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
  );
};

export default Forgotpass;
