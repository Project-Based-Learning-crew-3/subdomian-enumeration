import React from "react";
import kctLogo from "../assets/kct.svg";
import pieChart from "../assets/pieChart.svg";
import { useNavigate } from "react-router-dom";

let subdomainsFound: number = 0;
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        color: "white",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "3rem",
        padding: "4rem",
      }}
    >
      <img src={kctLogo} alt="logo" width="300px" height="300px" />
      <h2 style={{ fontSize: "30px", marginLeft: "2rem" }}>
        Subdomains <br></br> found {subdomainsFound}{" "}
      </h2>

      <div>
        <img src={pieChart} alt="" />
      </div>
      <div className="StatusCode">
        <button
          type="submit"
          style={{
            width: "20%",
            border: "10% solid gray",
            borderRadius: "15px",
            padding: "8px",
            backgroundColor: "#ACC319",
            color: "#000000",
          }}
        >
          NEXT
        </button>
        <button onClick={() => navigate("/enumeration")}>click here</button>
      </div>
    </div>
  );
};

export default Dashboard;
