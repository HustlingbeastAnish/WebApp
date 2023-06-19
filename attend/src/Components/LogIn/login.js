import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/navbar.js";
import login1 from "../images/Login1.svg";
import Swal from 'sweetalert2'


function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const PostLogIn = async (e) => {
    e.preventDefault();
 

    try {
      const res = await fetch("/api/userf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const data = await res.json();
  

			
      if (data.status === 400 || !data || data.error) {
      
      
        Swal.fire({
          title: 'Bad Credentials',
          text: 'Please enter valid details',
          icon: 'error',
          confirmButtonText: 'Retry'
        })
        
      
      } else {
        Swal.fire({
          title: 'Login Successful',
          icon: 'success',
          timer: 1000,
        })
       
        console.log("Successfully Logged In");
        setTimeout(() => {
          navigate("/tlogin");
        }, 1500);
      }



		} 
    catch (error) {
			console.error('error', error);
		}

 
  };

  return (
    <div>
      <Navbar />
      <section className="h-screen bg-gray-400">
        <div className="container px-6 py-12 h-full w-full">
          <div className="flex items-center justify-center mt-7 h-full text-gray-800">
            <div className="border-black border-[2px] p-10 rounded-xl bg-gray-400">
              <h1 className="text-center text-3xl font-extrabold mb-5">
                LogIn as Teacher
              </h1>
              <label
                htmlFor="exampleInputPassword2"
                className="form-label text-black inline-block mb-3"
              >
                Enter Email Address
              </label>
              <form method="POST">
                <div className="mb-6 w-full" id="email">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="exampleInputPassword2"
                    className="form-label text-black inline-block mb-3"
                  >
                    Enter Password
                  </label>
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck3"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#!"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={PostLogIn}
                >
                  Log In
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Don't have an account?
                </p>
                <Link
                  to="/signup"
                  className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >
                  Register
                </Link>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-96 mx-28">
                  {/* <i className="fa-brands fa-google"></i> */}
                  Continue with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
