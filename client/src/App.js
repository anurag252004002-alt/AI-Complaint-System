import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import AddComplaint from "./pages/AddComplaint";

import ComplaintList from "./pages/ComplaintList";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <div className="container mt-4">

        <h2 className="text-center mb-4">
          AI Complaint Management System
        </h2>

        <Routes>

          <Route
            path="/"
            element={<AddComplaint />}
          />

          <Route
            path="/complaints"
            element={<ComplaintList />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;