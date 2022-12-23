import Navbar from "./Components/Navbar/navbar";
import Login from "./Components/LogIn/login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/login" element={Login}></Route>
        </Routes>
      </BrowserRouter>
      <Login />
    </>
  );
}

export default App;
