

import Navbar from "./Components/Navbar/navbar";
import Login from "./Components/LogIn/login";
import TeachStu from "./Components/TeachStu/teachstu";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
   
      <BrowserRouter>
       
      <Navbar />
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
        
      </BrowserRouter>
      <TeachStu />
    </>
  );
}

export default App;
