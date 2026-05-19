import React, { useState } from "react";
import axios from "axios";

function AddComplaint() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
    category: "",
    location: ""
  });

  const [analysis, setAnalysis] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      // Save Complaint

      await axios.post(
        "https://ai-complaint-system-8rbj.onrender.com/api/complaints",
        formData
      );

      // AI Analysis

      const aiRes = await axios.post(
        "https://ai-complaint-system-8rbj.onrender.com/api/ai/analyze",
        {
          complaint: formData.description
        }
      );

      setAnalysis(`
Priority: ${aiRes.data.priority}

Department: ${aiRes.data.department}

Summary: ${aiRes.data.summary}

Auto Response: ${aiRes.data.autoResponse}
`);

      alert("Complaint Submitted Successfully");

      setFormData({
        name: "",
        email: "",
        title: "",
        description: "",
        category: "",
        location: ""
      });

    } catch (error) {

      console.log(error);

      alert("Error submitting complaint");

    }

  };

  return (

    <div className="container mt-4">

      <div className="card shadow p-4">

        <h2 className="mb-4 text-center">
          AI Complaint Management System
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="form-control mb-3"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="form-control mb-3"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="title"
            placeholder="Complaint Title"
            className="form-control mb-3"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Complaint Description"
            className="form-control mb-3"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>

          <input
            type="text"
            name="category"
            placeholder="Category"
            className="form-control mb-3"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            className="form-control mb-3"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Submit Complaint
          </button>

        </form>

        {
          analysis && (

            <div className="alert alert-info mt-4">

              <h4>AI Analysis</h4>

              <pre>{analysis}</pre>

            </div>

          )
        }

      </div>

    </div>

  );

}

export default AddComplaint;