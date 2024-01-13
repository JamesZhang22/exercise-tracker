import React from "react";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 // We import NavLink to utilize the react router.
 import { FaDumbbell } from "react-icons/fa";
 // Here, we display our Navbar
export default function Navbar() {
  return (
    <div style={{display: "flex", justifyContent: "center", background: "#f1f1f1"}}>
      <div style={{fontSize: "5vh", fontWeight: "bold", display: "flex", alignItems: "center"}}>
        <FaDumbbell /> 
        <div style={{padding: "0 8px"}}>
          Exercise Tracker
        </div>
        <FaDumbbell /></div>
    </div>
  );
}