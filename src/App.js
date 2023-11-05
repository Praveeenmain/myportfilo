import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles.css";
import LandingPage from "./components/HomePage";
import ResumePage from "./components/ResumePage";
import WorkPage from "./components/WorkPage";
import ContactPage from "./components/ContactPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
