import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip
} from "recharts";
import "../admin/AdminDashboard.css";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  // Dummy data (më vonë API)
  const data = {
    users: 80,
    notaries: 20,
    requests: 70,
    pendingDocs: 30,
    completedDocs: 50
  };

  const chartData = [
    { name: "Users", value: data.users },
    { name: "Notaries", value: data.notaries }
  ];

  const COLORS = ["#c2b280", "#ffffff"];

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <div className={open ? "sidebar open" : "sidebar"}>
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className="menu-item">👤 Admin</div>
        <div className="menu-item">📊 Dashboard</div>
        <div className="menu-item">⚖️ Notaries</div>
        <div className="menu-item">✔️ Verify Users</div>
      </div>

   
      <div className="main">
        <h1>Admin Dashboard</h1>

        
        <div className="main-box">
          <PieChart width={250} height={250}>
            <Pie data={chartData} dataKey="value" outerRadius={100}>
              {chartData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>

          <div className="side-stats">
            <p>Users: {data.users}%</p>
            <p>Notaries: {data.notaries}%</p>
          </div>
        </div>

        {/* SMALL BOXES */}
        <div className="grid">
          <div className="small-box">
            <h3>Requests</h3>
            <p>{data.requests}%</p>
          </div>

          <div className="small-box">
            <h3>Pending Documents</h3>
            <p>{data.pendingDocs}%</p>
          </div>

          <div className="small-box">
            <h3>Completed Documents</h3>
            <p>{data.completedDocs}%</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;