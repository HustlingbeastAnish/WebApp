import Navbar from "./Components/Navbar/navbar";
import Login from "./Components/LogIn/login";
import TeachStu from "./Components/TeachStu/TeachStu";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
function App() {
  const [flag, setflag] = useState(false);
  const location.pathname = useLocation();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {flag && <TeachStu />}
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
