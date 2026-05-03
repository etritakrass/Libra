import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Tariffs from "./pages/Tariffs";
import Notaries from "./pages/Notaries";
import Login from "./pages/Login";
import Register from "./pages/Register";

// DASHBOARDS
import UserDashboard from "./pages/user/Dashboard";
import NotaryDashboard from "./pages/notary/DashboardN";

// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tariffs" element={<Tariffs />} />
        <Route path="/notaries" element={<Notaries />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* USER */}
        <Route path="/user/dashboard" element={<UserDashboard />} />

        {/* NOTARY */}
        <Route path="/notary/dashboard" element={<NotaryDashboard />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;