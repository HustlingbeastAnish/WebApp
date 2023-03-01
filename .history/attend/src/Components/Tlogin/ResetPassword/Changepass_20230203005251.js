import React from "react";
import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
const Changepass = (props) => {
  const [updatedTeacher, setupdatedTeacher] = useState({
    _id: props.userData._id,
    email: props.userData.email,
    password: "",
    confirmpassword: "",
  });

  const [isSame, setisSame] = useState(false);
  console.log(updatedTeacher._id);
  let name, value;
  const handleEdit = (e) => {
    name = e.target.name;
    value = e.target.value;
    setupdatedTeacher({ ...updatedTeacher, [name]: value });
    console.log({ [name]: value });
  };

  const CheckisSame = () => {
    if (updatedTeacher.password === updatedTeacher.confirmpassword) {
      setisSame(true);
    } else {
      setisSame(false);
    }
  };

  const PostEdit = async (e) => {
    console.log("Your is changing ...");
    e.preventDefault();
    const { _id, email } = updatedTeacher;
    const password = await bcrypt.hash(this.password, 12);
    console.log(_id);
    console.log(email);
    console.log(password);
    const res = await fetch(`/api/teacherdata/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      // content: "application/json",
      body: JSON.stringify({
        _id: _id,
        email: email,
        password: password,
      }),
    });
  };
  console.log(isSame);
  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
        <h2>{props.userData.name}</h2>
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Change Password
            </h2>
            <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={props.userData.email}
                  // onChange={handleEdit}
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={updatedTeacher.password}
                  onChange={handleEdit}
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  value={updatedTeacher.confirmpassword}
                  onChange={handleEdit}
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="newsletter"
                    aria-describedby="newsletter"
                    type="checkbox"
                    onClick={CheckisSame}
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
              </div>
              <button
                type="submit"
                onClick={PostEdit}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Changepass;
