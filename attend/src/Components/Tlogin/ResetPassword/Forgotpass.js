import React, { useState } from "react";
import { useEffect } from "react";
import TrackLogo from "../../images/cclogo.png";
import { useNavigate } from "react-router-dom";

const Forgotpass = (props) => {
  const navigate = useNavigate();
  const [Arr, setArr] = useState({
    email: "",
    password: "",
  });
  const callTlogin = async () => {
    try {
      const res = await fetch("/aftertlogin", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      props.setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [flag, setFlag] = useState(false);
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
      navigate("/resetpassword");
      props.SetLink(data.message);
      setFlag(true);
      console.log(props.link);
    }
  };
  useEffect(() => {
    callTlogin();
  }, []);
  console.log(props.userData.name);
  return (
    <div className="bg-gray-900 h-screen">
      <section class="bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/#"
            class="flex items-center mb-6 text-2xl font-semibold text-white-900 dark:text-white"
          >
            <img class="w-8 h-8 mr-2" src={TrackLogo} alt="logo" />
            TracKnAttend
          </a>
          <div class="w-full p-6 bg-gray-700 rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-black">
              Change Password
            </h2>
            <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
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
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
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
                  placeholder="Enter your Old Passsword"
                  required
                />
              </div>

              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="newsletter"
                    aria-describedby="newsletter"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="newsletter"
                    class="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="/#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={PostReq}
                >
                  Verify Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forgotpass;
