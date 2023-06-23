import React, { useEffect } from "react";
import useState from "react-usestateref";
import { Link, useNavigate } from "react-router-dom";
import Globe from "../../svgs/globe.jsx";

const Tlogin = (props) => {
  const [size, setsize, sizeRef] = useState(600);
  const navigate = useNavigate();
  const currUser = props.userData;

  // ... rest of the code ...

  return (
    <div className="bg-gray-900 h-screen">
      <h3 className="text-3xl font-extrabold text-gray-300 mb-6 ml-10 text-center ">
        Welcome Prof. {currUser.name}
      </h3>
      <div className="flex flex-wrap justify-center">
        <div className="ml-5 flex flex-col">
          <div className="">
            {/* Card 1 */}
            <div className="w-3/4 h-48 md:w-full md:max-w-md md:h-auto mb-4 md:mb-10">
              {/* ... */}
            </div>
          </div>
          <div className="">
            {/* Card 2 */}
            <div className="w-3/4 h-48 md:w-full md:max-w-md md:h-auto mb-4 md:mb-10">
              {/* ... */}
            </div>
          </div>
          <div className="">
            {/* Card 3 */}
            <div className="w-3/4 h-48 sm:mt-3 md:w-full md:max-w-md md:h-auto mb-4 md:mb-10">
              {/* ... */}
            </div>
          </div>
        </div>
      </div>
      <Globe size={size} />
    </div>
  );
};

export default Tlogin;
