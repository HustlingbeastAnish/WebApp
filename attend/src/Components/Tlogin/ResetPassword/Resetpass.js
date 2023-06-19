import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Resetpass(props) {
  const navigate = useNavigate();
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 4000);

    return () => clearTimeout(timer); // Clear the timer when the component is unmounted or updated
  }, []);

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
        // navigate("/tlogin");
        throw error;
      }
    } catch (err) {
      console.log(err);
      // navigate("/loginteach");
    }
  };

  useEffect(() => {
    callTlogin();
  }, []);

  return (
    <div>
      {!showComponent && (
        <div className="flex justify-center items-center h-screen">
          <div role="status" className="flex flex-col items-center">
            <svg
              aria-hidden="true"
              className="w-16 h-16 mb-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <div className="text-black font-semibold text-2xl">
              Please wait, we are verifying your email...
            </div>
          </div>
        </div>
      )}
      {showComponent ? (
        <div className="flex items-center justify-center min-h-screen p-5 bg-gray-600 min-w-screen">
          <div className="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
            <div className="flex justify-center">
              <svg
                className="w-32 h-32"
                viewBox="0 0 50 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.2285 0C40.3812 4.92e-05 38.7061 0.741775 37.4785 1.94141H18.4102C18.3787 1.94141 18.3493 1.94909 18.3184 1.95117C18.1298 1.94236 17.9327 1.91521 17.6641 1.97656C17.5086 2.01156 17.3074 2.10876 17.1797 2.28516C17.052 2.46106 17.0156 2.66417 17.0156 2.85547V3.20898C17.0101 3.25944 17 3.30955 17 3.36133V4.11719L17.0156 4.12695V19.9551C17.0156 20.1414 17.0477 20.3306 17.1484 20.502C17.2492 20.6734 17.4182 20.7996 17.5723 20.8613C17.8803 20.9847 18.1304 20.9551 18.3789 20.9551H45.6523C46.0097 20.9551 46.3585 20.8387 46.6152 20.5977C46.872 20.3565 47.0156 19.9997 47.0156 19.6387V0.318359C47.0149 0.141925 46.9901 -0.0322923 46.9121 -0.199219C46.8341 -0.366146 46.7036 -0.512263 46.5371 -0.572266C46.3681 -0.634314 46.1764 -0.613051 45.9922 -0.541016L42.2285 0ZM45.9922 17.1543H42.2285V6.77148H45.9922V17.1543ZM38.126 8.66602H26.8242V11.7305H38.126V8.66602ZM26.8242 13.167H38.126V16.2324H26.8242V13.167ZM20.9961 6.77148H24.7598V17.1543H20.9961V6.77148ZM21.8828 2.13477L35.792 5.04883L35.9824 5.10352C36.1383 5.14446 36.2771 5.22456 36.3848 5.33594C36.4915 5.44732 36.5625 5.58606 36.5625 5.73242V16.1172C36.5625 16.3085 36.4972 16.494 36.3848 16.6367C36.2724 16.7793 36.1139 16.8688 35.9453 16.8945L35.8105 16.9238L35.5762 16.9785L21.8828 19.8926V2.13477ZM18.4102 2.32422H20.9961V19.8555H18.4102V2.32422Z"
                  fill="#10B981"
                />
              </svg>
            </div>
            <p>
              We're happy you're here. Your email address {props.userData.email}{" "}
              is verified:
            </p>
            <div className="mt-4">
              <Link to="changepass">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Click Here to Change Password
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Resetpass;
