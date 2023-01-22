import "flowbite/dist/flowbite.css";
import "flowbite/dist/flowbite.js";
import LoginT from "./Components/LogIn/login";
import LoginS from "./Components/LogIn/LoginStud";
import SignUp from "./Components/SignUp/signup";
import TeachStu from "./Components/TeachStu/TeachStu";
import Slogin from "./Components/Slogin/Slogin";
import Tlogin from "./Components/Tlogin/Tlogin";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TakeAttend from "./Components/TakeAttend/TakeAttend";
import CreateAttend from "./Components/CreateAttend/CreateAttend";
import UpdateStud from "./Components/UpdateStud/UpdateStud";
import SelectStud from "./Components/UpdateStud/SelectStud";
import MarkAttend from "./Components/MarkAttend/MarkAttend";
import EditStud from "./Components/EditModal/EditModal";
import TeacherEdit from "./Components/Tlogin/TeacherEdit";

function App() {
  const [Subject, setSubject] = useState("");
  const [Branch, setBranch] = useState("");
  const [SelectedDate, setSelectedDate] = useState(new Date());

  // Array for the update Student
  const [Upstud, setUpstud] = useState({});

  const handleChange = (e) => {
    setSubject(e.target.value);
  };
  const handleChangeBranch = (e) => {
    setBranch(e.target.value);
  };

  // State Containing the logged user's details
  const [userData, setUserData] = useState({});
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/loginteach" element={<LoginT />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/loginstud" element={<LoginS />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/signup" element={<SignUp />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/" element={<TeachStu />}></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path="/tlogin"
            element={<Tlogin userData={userData} setUserData={setUserData} />}
          ></Route>
        </Routes>
        <Routes>
          <Route exact path="/slogin" element={<Slogin />}></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path="/editstud"
            element={
              <EditStud
                Upstud={Upstud}
                setUpstud={setUpstud}
                Subject={Subject}
              />
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path="/takeattend"
            element={
              <TakeAttend
                Subject={Subject}
                Branch={Branch}
                handleChangeBranch={handleChangeBranch}
                handleChange={handleChange}
                SelectedDate={SelectedDate}
                setSelectedDate={setSelectedDate}
              />
            }
          ></Route>
        </Routes>
        <Routes>
          <Route exact path="/createattend" element={<CreateAttend />}></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path="/updatestud"
            element={
              <UpdateStud
                Subject={Subject}
                Branch={Branch}
                Upstud={Upstud}
                setUpstud={setUpstud}
              />
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path="/selectstud"
            element={
              <SelectStud
                Subject={Subject}
                Branch={Branch}
                handleChangeBranch={handleChangeBranch}
                handleChange={handleChange}
              />
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path="/makeattend"
            element={
              <MarkAttend
                Subject={Subject}
                handleChange={handleChange}
                Branch={Branch}
                SelectedDate={SelectedDate}
              />
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path="/editteacher"
            element={<TeacherEdit userData={userData} setUserData />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
