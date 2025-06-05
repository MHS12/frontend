import { Route, Routes } from "react-router-dom";
import Login from "./Components/login";
import Navbar from "./Components/navbar";
import Register from "./Components/Register";
import Dashbord from "./Components/Dashbord";
import { ToastContainer, toast } from "react-toastify";
import ProtuctedRouts from "./assets/ProtuctedRouts";
import AuthProtuctRouter from "./assets/AuthProtuctRouter";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public routes only accessible if NOT logged in */}
        <Route element={<AuthProtuctRouter />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected routes accessible only if logged in */}
        <Route element={<ProtuctedRouts />}>
          <Route path="/dashbord" element={<Dashbord />} />
        </Route>
      </Routes>
      <ToastContainer className="top-11" />
    </>
  );
}

export default App;
