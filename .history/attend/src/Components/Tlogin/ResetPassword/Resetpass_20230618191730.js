<<<<<<< HEAD
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
=======
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Resetpass(props) {
  const navigate = useNavigate();
  const callTlogin = async (props) => {
>>>>>>> f506ea1b3caae3daf793fd2b1a4017c0a078c3f8
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
<<<<<<< HEAD

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
=======
  useEffect(() => {
    callTlogin();
  }, []);
  return (
    <div class="flex items-center justify-center min-h-screen p-5 bg-gray-600 min-w-screen">
      <div class="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
        <div class="flex justify-center">
          <svg
            class="w-32 h-32"
            viewBox="0 0 50 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.2285 0C40.3812 4.92e-05 38.7061 0.741775 37.4785 1.94141H18.4102C18.3787 1.94141 18.3493 1.94909 18.3184 1.95117C18.1298 1.94236 17.9327 1.91521 17.6641 1.97656C17.5086 2.01156 17.3074 2.10876 17.1797 2.28516C17.052 2.46106 17.0156 2.66417 17.0156 2.85547V3.20898C17.0101 3.25944 17 3.30955 17 3.36133V4.11719L17.0156 4.12695V19.9551C17.0156 20.1414 17.0477 20.3306 17.1484 20.502C17.2492 20.6734 17.4182 20.7996 17.5723 20.8613C17.8803 20.9847 18.1304 20.9551 18.3789 20.9551H45.6523C46.0097 20.9551 46.3585 20.8387 46.6152 20.5977C46.872 20.3565 47.0156 19.9997 47.0156 19.627V11.6309C48.2595 10.3975 49.0312 8.69075 49.0312 6.80469C49.0313 3.05339 45.9798 0 42.2285 0ZM42.2285 1C45.4394 1 48.0313 3.59389 48.0312 6.80469C48.0312 10.0156 45.4394 12.6074 42.2285 12.6074C39.0177 12.6074 36.4238 10.0156 36.4238 6.80469C36.4238 3.59389 39.0176 1.0001 42.2285 1ZM42.2285 1.91992C39.5376 1.91992 37.3457 4.11389 37.3457 6.80469C37.3457 9.49559 39.5377 11.6874 42.2285 11.6875C44.9194 11.6875 47.1113 9.49559 47.1113 6.80469C47.1114 4.11389 44.9194 1.91992 42.2285 1.91992ZM42.2285 2.91992C44.379 2.91992 46.1113 4.65429 46.1113 6.80469C46.1113 8.95509 44.3789 10.6875 42.2285 10.6875C40.0781 10.6874 38.3457 8.95509 38.3457 6.80469C38.3457 4.65429 40.0781 2.91992 42.2285 2.91992ZM18.3496 2.95312C18.3775 2.9531 18.3771 2.95312 18.4102 2.95312H36.625C35.8693 4.04923 35.4238 5.37598 35.4238 6.80469C35.4238 8.17802 35.8362 9.45503 36.5391 10.5254L32.2715 13.6211L32.2539 13.6387C32.1417 13.7387 32.0985 13.7439 32.0605 13.7441C32.0226 13.7443 31.9342 13.7282 31.7715 13.6094L18.043 3.61328L18.0156 3.5957V3.27734C18.0495 3.10235 18.1792 2.97857 18.3496 2.95312ZM44.6426 4.63672C44.513 4.63827 44.389 4.69009 44.2969 4.78125L41.1934 7.77148L40.1602 6.77539C40.1131 6.72883 40.0574 6.69206 39.996 6.66721C39.9347 6.64236 39.8691 6.62993 39.8029 6.63064C39.7368 6.63134 39.6714 6.64517 39.6106 6.67132C39.5498 6.69747 39.4949 6.73542 39.4489 6.78298C39.4028 6.83053 39.3667 6.88674 39.3426 6.94835C39.3185 7.00996 39.3068 7.07575 39.3083 7.1419C39.3098 7.20805 39.3244 7.27324 39.3513 7.33371C39.3782 7.39417 39.4167 7.4487 39.4648 7.49414L40.8457 8.82617C40.9389 8.91579 41.0631 8.96586 41.1924 8.96586C41.3217 8.96586 41.4459 8.91579 41.5391 8.82617L44.9902 5.5C45.0632 5.43099 45.1137 5.34161 45.1351 5.2435C45.1565 5.14539 45.1479 5.04311 45.1104 4.94995C45.0729 4.8568 45.0082 4.7771 44.9248 4.72124C44.8413 4.66537 44.743 4.63592 44.6426 4.63672V4.63672ZM18.0156 4.83203L31.1836 14.418C31.4501 14.6121 31.7434 14.7459 32.0664 14.7441C32.3894 14.7441 32.6876 14.5913 32.918 14.3867L37.1523 11.3164C38.3998 12.7173 40.2098 13.6074 42.2285 13.6074C43.6296 13.6074 44.9323 13.18 46.0156 12.4512V19.627C46.0156 19.7646 45.9788 19.8212 45.9297 19.8672C45.8806 19.9132 45.7986 19.9551 45.6523 19.9551H18.3789C18.1652 19.9551 18.0614 19.9415 18.0156 19.9375V4.83203Z"
              fill="url(#paint0_linear)"
            />
            <rect y="5" width="15" height="2" rx="1" fill="#3BB54A" />
            <rect y="11" width="15" height="2" rx="1" fill="#3BB54A" />
            <rect y="8" width="6" height="2" rx="1" fill="#3BB54A" />
            <rect y="15" width="6" height="2" rx="1" fill="#3BB54A" />
            <rect x="8" y="8" width="6" height="2" rx="1" fill="#3BB54A" />
            <rect x="8" y="15" width="6" height="2" rx="1" fill="#3BB54A" />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="16.9996"
                y1="10.4791"
                x2="47.0156"
                y2="10.4791"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#009217" />
                <stop offset="1" stop-color="#00FF29" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <p>
          We're happy you're here. Your email address {props.userData.email} is
          verified:
        </p>
        <div class="mt-4">
          <Link to="changepass">
            <button
              type="button"
              class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Click Here to Change Password
            </button>
          </Link>
        </div>
      </div>
>>>>>>> f506ea1b3caae3daf793fd2b1a4017c0a078c3f8
    </div>
  );
}

export default Resetpass;
