import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./screens/login";
import ApplicationForm from "./screens/applicationForm";
import CustomerDashboard from "./screens/customerDashboard";
import AdminLogin from "./screens/adminLogin";
import DepoManagerDashboard from "./screens/depoManagerDashboard";
import ApplicationDetails from "./screens/depoManagerDashboard/components/applicationDetails";

function App() {
  return (
    <>
    <div style={{background:"#f0f2f7"}}>
        <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Login />} 
        />
        <Route 
          path="/application" 
          element={<ApplicationForm />} 
        />
      <Route 
          path="/customerDashboard" 
          element={<CustomerDashboard />} 
        />
        <Route 
          path="/adminLogin" 
          element={<AdminLogin />} 
        />
        <Route 
          path="/depoManagerDashboard" 
          element={<DepoManagerDashboard />} 
        />
        <Route 
          path="/applicationDetails" 
          element={<ApplicationDetails />} 
        />
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
