import React from "react";
import { useState ,useEffect} from "react";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import TrackLogo from "../images/cclogo.png";
import Navbarlogin from "../Navbar/navbarlogin";
const Tprofile = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
   
  });

  


   //jwt authorisation
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
       setdata(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/loginteach");
    }
  };

  useEffect(() => {
    callTlogin();
  }, []);


  let name, value;
  const handleEdit = (e) => {
    name = e.target.name;
    value = e.target.value;
    setdata({ ...data, [name]: value });
  };

  const PostEdit = async (e) => {
   
    e.preventDefault();
    console.log(data);
    const {   email, pp,cp } = data;
   
    const res = await fetch("http://localhost:8080/api/changepassword", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    
      body: JSON.stringify({
        email: email,
        pp: pp,
        cp: cp,
      }),
    });
    const dataa = await res.json();
   
    if (
      dataa.status === 422 ||
      dataa.status === 400 ||
      dataa.status === 404 ||
      dataa.status === 500
    ) {
      Swal.fire({
        title: "Failure",
        text: "Password updation failed",
        icon: "error",
        confirmButtonText: "Retry",
      });
    }
    if (!dataa || dataa.error) {
    
      Swal.fire({
        title: "Failure",
        text: "Password updation failed",
        icon: "error",
        confirmButtonText: "Retry",
      });
    } else {
      Swal.fire({
        title: "Updation Successful",
        icon: "success",
        timer: 1000,
      });
      navigate("/tlogin")
     
    }
  };

  return (
    <>
    <Navbarlogin/>
      <section className="bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          
          <div className="w-full p-6 bg-gray-700 rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-black">
             Edit Your Details
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                    Name
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  value={data.name}
                  
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                    Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label
                  htmlFor="pp"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Enter Previous Password
                </label>
                <input
                  type="text"
                  name="pp"
                  value={data.pp}
                  onChange={handleEdit}
                  id="floating_company"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="cp"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Enter New Password
                </label>
                <input
                  type="text"
                  name="cp"
                  value={data.cp}
                  onChange={handleEdit}
                  id="floating_company"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="flex items-start justify-between"></div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={PostEdit}
                >
                  Update Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Tprofile;
