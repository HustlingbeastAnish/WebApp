import Navbar from "./Components/Navbar/navbar";
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
import MarkAttend from "./Components/MarkAttend/MarkAttend";

function App() {
  const [Subject, setSubject] = useState("");
  const [Branch, setBranch] = useState("");
  return (
    <>
      <BrowserRouter>
        <Navbar />
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
          <Route exact path="/tlogin" element={<Tlogin />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/slogin" element={<Slogin />}></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path="/takeattend"
            element={<TakeAttend Subject={Subject} Branch={Branch} />}
          ></Route>
        </Routes>
        <Routes>
          <Route exact path="/createattend" element={<CreateAttend />}></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path="/makeattend"
            element={<MarkAttend Subject={Subject} Branch={Branch} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
