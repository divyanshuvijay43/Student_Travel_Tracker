import React from "react";
import { useNavigate } from "react-router-dom";

export default function Travel() {
  const body = {
    username: "",
    date: "",
    status: "",
  };

  let navigate = useNavigate();

  const onClickSave = () => {
    body.username = localStorage.getItem("username");
    body.date = document.getElementById("date").value;
    body.status = document.getElementById("status").value;

    fetch("http://localhost:8080/save", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    navigate("/addTravelDetail");
  };

  return (
    <div id="main-div">
      <div>
        <nav className="navbar" style={{ backgroundColor: "lightblue" }}>
          <div className="container-fluid">
            <span
              className="navbar-text"
              style={{
                backgroundColor: "white",
                display: "block",
                padding: "5px",
              }}
            >
              Logo
            </span>
            <span>Add Travel Details</span>
            <span>
              <button
                id-type="button"
                className="btn btn-outline-success"
                style={{ backgroundColor: "white", color: "black" }}
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </button>
            </span>
          </div>
        </nav>
      </div>
      <div style={{ width: "30%", margin: "10px auto" }}>
        <form>
          <div className="form-group" style={{ marginBottom: "30px" }}></div>
          <div className="form-group" style={{ marginBottom: "30px" }}>
            <label>Date of Travel: </label>
            <input
              className="form-control"
              placeholder="yyyy-mm-dd format"
              id="date"
              required={true}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "30px" }}>
            <label>Status: </label>
            <select className="form-control" id="status">
              <option>Arriving</option>
              <option>Departing</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-outline-primary"
            style={{ marginTop: "30px" }}
            onClick={onClickSave}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
