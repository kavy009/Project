import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HODApproval from "./HODApproval";
import About from "./About";
import Help from "./Help"; // 👈 import Help page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HODApproval />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} /> {/* 👈 new Help route */}
      </Routes>
    </Router>
  );
}

export default App;
