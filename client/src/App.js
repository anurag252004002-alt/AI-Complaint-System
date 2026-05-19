import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import AddComplaint from "./pages/AddComplaint";
import ComplaintList from "./pages/ComplaintList";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<AddComplaint />} />

        <Route
          path="/complaints"
          element={<ComplaintList />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;