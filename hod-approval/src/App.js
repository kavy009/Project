import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HODApproval from "./HODApproval";
import About from "./About";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default page */}
        <Route path="/" element={<HODApproval />} />

        {/* Other routes */}
        <Route path="/hod-approval" element={<HODApproval />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
