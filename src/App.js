import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./screens/login";
import ApplicationForm from "./screens/applicationForm";

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
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
