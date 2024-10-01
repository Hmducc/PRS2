// App.tsx
import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import CoHome from "./scenes/Corporations/Co-Home";
import CoIntro from "./scenes/Corporations/Co-Intro";
import CoLogin from "./scenes/Corporations/Co-Login";
import CoSignUp from "./scenes/Corporations/Co-SignUp";
import Company from "./scenes/navbar/Company";
import Home from "./scenes/navbar/Home";
import Login from "./scenes/navbar/Login";
import Navigation from "./scenes/navbar/Navigation";
import SignUp from "./scenes/navbar/SignUp";
import ScrollToTop from "./ScrollToTop";
import RecruitmentNews from "./scenes/navbar/RecruitmentNews";

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
    location.pathname === "/cologin" ||
    location.pathname === "/cosignup" ||
    location.pathname === "/cohome" ||
    location.pathname === "/cointro";

  return (
    <div>
      {!hideNavAndFooter && <Navigation />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/recruitmentnews" element={<RecruitmentNews />} />
        <Route path="/company" element={<Company />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cosignup" element={<CoSignUp />} />
        <Route path="/cologin" element={<CoLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Home />} /> {/* Default route */}
        <Route path="/cointro" element={<CoIntro />} />
        <Route path="/cohome" element={<CoHome />} />
      </Routes>
    </div>
  );
};

export default App;
