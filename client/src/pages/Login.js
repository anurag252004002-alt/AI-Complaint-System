import React, { useState } from "react";
import axios from "axios";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "https://ai-complaint-system-8rbj.onrender.com/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      window.location.href = "/complaints";

    } catch (error) {

      console.log(error);

      alert("Login Failed");

    }

  };

  return (

    <div className="container mt-5">

      <div className="card p-4 shadow">

        <h2 className="text-center mb-4">
          Login
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="form-control mb-3"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="form-control mb-3"
            onChange={handleChange}
            required
          />

          <button className="btn btn-success w-100">
            Login
          </button>

        </form>

      </div>

    </div>

  );

}

export default Login;