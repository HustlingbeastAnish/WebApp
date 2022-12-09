import Navbar from "./Components/Navbar/navbar";
import Login from "./Components/LogIn/login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={Login}></Route>
        </Routes>
      </BrowserRouter>
      <Login />
    </>
  );
}

export default App;
