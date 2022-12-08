import Navbar from "./Components/Navbar/navbar";
import Login from "./Components/LogIn/login";
import TeachStu from "./Components/TeachStu/TeachStu";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
function App() {
  const [flagLogin, setflagLogin] = useState(false);
  const location = useLocation();
  const curpath = location.pathname;

  if (curpath === "/login") {
    setflagLogin(true);
  } else if (curpath !== "/login") {
    setflagLogin(false);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {flagLogin && <TeachStu />}
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
