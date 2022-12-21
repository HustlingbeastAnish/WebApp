import Navbar from "./Components/Navbar/navbar";
import Login from "./Components/LogIn/login";
import SignUp from "./Components/SignUp/signup";
import TeachStu from "./Components/TeachStu/TeachStu";
import Footer from "./Components/Footer/footer";
import Tlogin from "./Components/Tlogin/Tlogin";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TakeAttend from "./Components/TakeAttend/TakeAttend";
import CreateAttend from "./Components/CreateAttend/CreateAttend";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
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
          <Route exact path="/takeattend" element={<TakeAttend />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/createattend" element={<CreateAttend />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
