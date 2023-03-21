import React from "react";
import { useState } from "react";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const EditModal = (props) => {
  const navigate = useNavigate();
  const [updatedStud, setupdatedStud] = useState({
    _id: props.Upstud._id,
    name: props.Upstud.name,
    email: props.Upstud.email,
    subject: props.Subject,
    phone: props.Upstud.phone,
    roll: props.Upstud.roll,
  });

  console.log(updatedStud);

  // console.log(props.Upstud._id);
  let name, value;
  const handleEdit = (e) => {
    name = e.target.name;
    value = e.target.value;
    setupdatedStud({ ...updatedStud, [name]: value });
  };

  const PostEdit = async (e) => {
    console.log(updatedStud);
    e.preventDefault();
    const { _id, name, email, subject, phone, roll } = updatedStud;
    console.log(_id);
    const res = await fetch(`/api/studdata/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      // content: "application/json",
      body: JSON.stringify({
        _id: _id,
        name: name,
        email: email,
        phone: phone,
        roll: roll,
      }),
    });
    const data = await res.json();
    console.log(data.status)
    if(data.status === 422 || data.status===400|| data.status===404||data.status===500)
    {
      Swal.fire({
        title: 'Bad Credentials',
        text: 'Please fill in all details',
        icon: 'error',
        confirmButtonText: 'Retry'
      })
    }
    if (!data || data.error) {
      console.log("Invalid Registration");
      Swal.fire({
        title: 'Bad Credentials',
        text: 'User Already Exists with required fields',
        icon: 'error',
        confirmButtonText: 'Retry'
      })
    } else {
      Swal.fire({
        title: 'Updation Successful',
        icon: 'success',
        timer: 1000,
      })
      navigate("/updatestud");
    }
  };

  return (
    <>
      <div className="border-black">
        <div className="flex justify-center mt-20 p-20 m-20  bg-gray-200">
          <form method="PUT">
            <div class="relative z-0 mb-6 w-full group">
              <input
                name="name"
                type="text"
                value={updatedStud.name}
                onChange={handleEdit}
                id="floating_password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="email"
                name="email"
                id="floating_email"
                value={updatedStud.email}
                onChange={handleEdit}
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
        
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="phone"
                  value={updatedStud.phone}
                  onChange={handleEdit}
                  id="floating_phone"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  PhoneNumber
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="roll"
                  value={updatedStud.roll}
                  onChange={handleEdit}
                  id="floating_company"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_roll"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Roll Number
                </label>
              </div>
            </div>
            <button
              type="submit"
              onClick={PostEdit}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default EditModal;
