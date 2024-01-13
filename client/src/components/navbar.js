import React from "react";
import { Link } from "react-router-dom";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 // We import NavLink to utilize the react router.
 import { FaDumbbell } from "react-icons/fa";
 // Here, we display our Navbar
export default function Navbar() {
  return (
    <div style={{display: "flex", justifyContent: "center", background: "#f1f1f1"}}>
      <Link to="/" style={{textDecoration: "None"}} >
        <div style={{fontSize: "5vh", fontWeight: "bold", display: "flex", alignItems: "center", color: "black",}}>
          <FaDumbbell /> 
          <div style={{padding: "0 8px"}}>
            Exercise Tracker
          </div>
          <FaDumbbell />
        </div>
      </Link>
    </div>
  );
}