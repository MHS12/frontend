import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/navbar";
import Login from "./Components/login";
import Register from "./Components/Register";
import Dashbord from "./Components/Dashbord";
import Qr from "./Components/Qr";
import ScanQr from "./Components/ScanQr";
import { ToastContainer } from "react-toastify";

import ProtectedRoutes from "./assets/ProtectedRoutes";
import PublicRoutes from "./assets/PublicRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public routes for unauthenticated users */}
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected routes for authenticated users */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashbord />} />
          <Route path="/genqr" element={<Qr />} />
          <Route path="/scanqr" element={<ScanQr />} />
        </Route>

        {/* Optional fallback */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <ToastContainer className="top-11" />
    </>
  );
}

export default App;
