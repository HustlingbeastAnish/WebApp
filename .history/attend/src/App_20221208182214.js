import Navbar from "./Components/Navbar/navbar";
import Login from "./Components/LogIn/login";
import TeachStu from "./Components/TeachStu/TeachStu";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [flag, setflag] = useState(null);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <TeachStu />
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
