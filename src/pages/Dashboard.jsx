// src/pages/Dashboard.jsx
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Farmer Dashboard</h1>

      <div className="mt-6 bg-white p-6 rounded shadow">
        <p>📊 Market Insight:</p>
        <h2 className="text-green-600 text-xl mt-2">
          Tomatoes demand is HIGH in Lagos
        </h2>
      </div>
    </div>
  );
};

export default Dashboard;