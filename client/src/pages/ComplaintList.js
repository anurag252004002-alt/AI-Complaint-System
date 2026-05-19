import React, { useEffect, useState } from "react";
import axios from "axios";

function ComplaintList() {

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {

    fetchComplaints();

  }, []);

  const fetchComplaints = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        "https://ai-complaint-system-8rbj.onrender.com/api/complaints",
        {
          headers: {
            Authorization: token
          }
        }
      );

      setComplaints(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="container mt-4">

      <h2 className="mb-4 text-center">
        Complaint List
      </h2>

      <div className="row">

        {
          complaints.map((item) => (

            <div className="col-md-6 mb-4" key={item._id}>

              <div className="card shadow p-3">

                <h4>{item.title}</h4>

                <p>
                  <strong>Name:</strong> {item.name}
                </p>

                <p>
                  <strong>Email:</strong> {item.email}
                </p>

                <p>
                  <strong>Description:</strong> {item.description}
                </p>

                <p>
                  <strong>Category:</strong> {item.category}
                </p>

                <p>
                  <strong>Location:</strong> {item.location}
                </p>

                <p>
                  <strong>Status:</strong> {item.status}
                </p>

              </div>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default ComplaintList;