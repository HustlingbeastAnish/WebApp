import Navbar from "./Components/Navbar/navbar";
import Login from "./Components/LogIn/login";
import TeachStu from "./Components/TeachStu/TeachStu";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

const func = () => {
  const location = useLocation();
  const curpath = location.pathname;
  currpath === "/login" ? setflagLogin(true) : setflagLogin(false);
};

function App() {
  const [flagLogin, setflagLogin] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {flagLogin && <TeachStu />}
        <Routes>
          <Route exact path="/login" element={<func />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
