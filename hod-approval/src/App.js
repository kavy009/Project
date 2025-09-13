import React, { useState } from "react";
import "./App.css";
import charusatLogo from "./charusat.png"; // Importing the logo

function App() {
  const [student] = useState({
    id: "24CE017",
    healthProblem: "Fever and Cold",
    counsellor: "Deep Kothadiya",
    date: "13/09/2025",
  });

  const handleApprove = () => {
    alert(`Request for Student ID ${student.id} approved ✅`);
  };

  return (
    <div className="page-container">
      {/* Header with logo and title */}
      <div className="page-title-container">
        <img src={charusatLogo} alt="CHARUSAT Logo" className="charusat-logo" />
        <h1 className="page-title">CHARUSAT Medical Approval</h1>
      </div>

      {/* Approval Card */}
      <div className="approval-card">
        <h2 className="title">HOD Approval</h2>

        <div className="info">
          <p><span>Student ID:</span> {student.id}</p>
          <p><span>Health Problem:</span> {student.healthProblem}</p>
          <p><span>Counsellor:</span> {student.counsellor}</p>
          <p><span>Date:</span> {student.date}</p>
        </div>

        <div className="button-container">
          <button className="approve-btn" onClick={handleApprove}>
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
