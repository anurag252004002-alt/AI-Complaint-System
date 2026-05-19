import React, { useEffect, useState } from "react";
import axios from "axios";

function ComplaintList() {

  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchComplaints();

  }, []);

  const fetchComplaints = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/complaints"
      );

      setComplaints(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  const updateStatus = async (id, status) => {

    try {

      await axios.put(
        `http://localhost:5000/api/complaints/${id}`,
        { status }
      );

      fetchComplaints();

    } catch (error) {

      console.log(error);

    }
  };

  const searchLocation = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/complaints/search/location?location=${search}`
      );

      setComplaints(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div>

      <h3 className="mb-4">
        All Complaints
      </h3>

      <div className="d-flex mb-3">

        <input
          type="text"
          placeholder="Search by Location"
          className="form-control me-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={searchLocation}
        >
          Search
        </button>

      </div>

      <table className="table table-bordered">

        <thead>

          <tr>

            <th>Name</th>
            <th>Title</th>
            <th>Category</th>
            <th>Location</th>
            <th>Status</th>
            <th>Update</th>

          </tr>

        </thead>

        <tbody>

          {
            complaints.map((item) => (

              <tr key={item._id}>

                <td>{item.name}</td>

                <td>{item.title}</td>

                <td>{item.category}</td>

                <td>{item.location}</td>

                <td>

                  <span className="badge bg-warning text-dark">
                    {item.status}
                  </span>

                </td>

                <td>

                  <select
                    className="form-select"
                    value={item.status}
                    onChange={(e) =>
                      updateStatus(item._id, e.target.value)
                    }
                  >

                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Resolved</option>

                  </select>

                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>
  );
}

export default ComplaintList;