import React, { useEffect } from "react";
import useState from "react-usestateref";
import { Link, useNavigate } from "react-router-dom";
import "./Tlogin.css";
import Globe from "../../svgs/globe.jsx";
const Tlogin = (props) => {
  // To open and close the sidebar
  const [size, setsize, sizeRef] = useState(600);

  const navigate = useNavigate();
  const currUser = props.userData;

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
      console.log(data);
      props.setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        // navigate("/tlogin");
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/loginteach");
    }
  };

  //logout functionality
  const handlelogout = () => {
    fetch("/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        navigate("/loginteach");
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    callTlogin();
  }, []);

  return (
    <div className="bg-gray-900 h-screen">
      <h3 className="text-3xl font-extrabold text-gray-300 mb-6 ml-10 text-center">
        Welcome Prof. {currUser.name}
      </h3>
      <div className="flex flex-wrap justify-center">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
          <div className="card m-3 p-2" style={{ width: "18rem" }}>
            <motion.div className="card-img-top" whileHover={{ scale: 1.1 }}>
              <img src={s1} alt="" style={{ width: "100%", height: "auto" }} />
            </motion.div>
            <div className="card-body">
              <p className="card-text text-dark">HTML</p>
            </div>
          </div>
          <div className="card m-3 p-2" style={{ width: "18rem" }}>
            <motion.div className="card-img-top" whileHover={{ scale: 1.1 }}>
              <img src={s2} alt="" style={{ width: "100%", height: "auto" }} />
            </motion.div>
            <div className="card-body">
              <p className="card-text">CSS</p>
            </div>
          </div>
          <div className="card m-3 p-2" style={{ width: "18rem" }}>
            <motion.div className="card-img-top" whileHover={{ scale: 1.1 }}>
              <img src={s3} alt="" style={{ width: "100%", height: "auto" }} />
            </motion.div>
            <div className="card-body">
              <p className="card-text">Bootstrap</p>
            </div>
          </div>
          <div className="card m-3 p-2" style={{ width: "18rem" }}>
            <motion.div className="card-img-top" whileHover={{ scale: 1.1 }}>
              <img src={s4} alt="" style={{ width: "100%", height: "auto" }} />
            </motion.div>
            <div className="card-body">
              <p className="card-text">JS</p>
            </div>
          </div>
          <div className="card m-3 p-2" style={{ width: "18rem" }}>
            <motion.div
              className="card-img-top h-50"
              whileHover={{ scale: 1.1 }}
            >
              <img src={s5} alt="" style={{ width: "100%", height: "auto" }} />
            </motion.div>
            <div className="card-body">
              <p className="card-text text-white">React JS</p>
            </div>
          </div>
          <div className="card m-3 p-2" style={{ width: "18rem" }}>
            <motion.div className="card-img-top" whileHover={{ scale: 1.1 }}>
              <img src={s6} alt="" style={{ width: "100%", height: "auto" }} />
            </motion.div>
            <div className="card-body">
              <p className="card-text">Node JS</p>
            </div>
          </div>
          <div className="card m-3 p-2" style={{ width: "18rem" }}>
            <motion.div className="card-img-top" whileHover={{ scale: 1.1 }}>
              <img src={s7} alt="" style={{ width: "100%", height: "auto" }} />
            </motion.div>
            <div className="card-body">
              <p className="card-text">Express JS</p>
            </div>
          </div>
          <div className="card m-3 p-2" style={{ width: "18rem" }}>
            <motion.div className="card-img-top" whileHover={{ scale: 1.1 }}>
              <img src={s8} alt="" style={{ width: "100%", height: "auto" }} />
            </motion.div>
            <div className="card-body">
              <p className="card-text">MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tlogin;
