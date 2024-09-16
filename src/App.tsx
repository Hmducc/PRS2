// App.tsx
import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import CoHome from "./scenes/Corporations/Co-Home";
import Company from "./scenes/navbar/Company";
import Home from "./scenes/navbar/Home";
import Login from "./scenes/navbar/Login";
import Marketplace from "./scenes/navbar/Markerplace";
import Navigation from "./scenes/navbar/Navigation";
import SignUp from "./scenes/navbar/SignUp";
import ScrollToTop from "./ScrollToTop";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <MainContent />
      </ScrollToTop>
    </Router>
  );
};
const MainContent: React.FC = () => {
  const location = useLocation();
  const hideNavAndFooter =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/cohome";

  return (
    <div>
      {!hideNavAndFooter && <Navigation />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/company" element={<Company />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Home />} /> {/* Default route */}
        <Route path="/cohome" element={<CoHome />} />
      </Routes>
    </div>
  );
};

export default App;
