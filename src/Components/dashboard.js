import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {

  function sendMail() {
    alert(1);
  }

  const navigate = useNavigate();

  fetch("http://20.219.111.158:5050/travel/getDetails", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      document.getElementById("travelList").innerHTML = "";
      let sz = responseData.length;
      console.log(sz);
      let html = "";
      for (let i = 0; i < sz; i++) {
        let row = "";
        let journeyType = responseData[i].journeyType;
        let stat = '';
        if(journeyType == 1)
        {
          stat = '<button type="button" class="btn btn-primary" style="color:white">Arriving</button>';
        }
        else {
          stat = '<button type="button" class="btn btn-warning" style="color:black">Departing</button>';
        }
        if (i % 2 === 0) {
          row =
            '<tr style="background-color:lavender;">' +
            "<td>" +
            responseData[i].name +
            "</td>" +
            "<td>" +
            responseData[i].rollno +
            "</td>" +
            "<td>" +
            responseData[i].programName +
            "</td>" +
            "<td>" +
            responseData[i].branch +
            "</td>" +
            "<td>" +
            responseData[i].travelDate +
            "</td>" +
            "<td>" +
            stat +
            "</td>" +
            "<td>" +
            '<a href="/connectBuddy?rollno='+ responseData[i].rollno +'" class="btn" style="background-color:#52595D;color:white">Ping</a>' +
            "</td>" +
            "</tr>";
        } else {
          row =
            '<tr style="background-color:azure;">' +
            "<td>" +
            responseData[i].name +
            "</td>" +
            "<td>" +
            responseData[i].rollno +
            "</td>" +
            "<td>" +
            responseData[i].programName +
            "</td>" +
            "<td>" +
            responseData[i].branch +
            "</td>" +
            "<td>" +
            responseData[i].travelDate+
            "</td>" +
            "<td>" +
            stat +
            "</td>" +
            "<td>" +
            '<a href="/connectBuddy?rollno='+ responseData[i].rollno +'" class="btn" style="background-color:#52595D;color:white">Ping</a>' +
            "</td>" +
            "</tr>";
        }
        html = html + row;
      }
      document.getElementById("travelList").innerHTML = html;
    });

  return (
    <>
      <div>
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
              <span>STUDENT TRAVEL CONNECT</span>
              <span>
                <button
                  id-type="button"
                  className="btn btn-success"
                  style={{ backgroundColor: "white", color: "black" }}
                  onClick={() => {
                    localStorage.removeItem("username");
                    navigate("/login");
                  }}
                >
                  Logout
                </button>
              </span>
            </div>
          </nav>
        </div>
        <div
          className="card p-3 shadow mb-5 bg-white rounded"
          style={{ margin: "20px", backgroundColor: "white" }}
        >
          <div className="card-body">
            <div className="row" style={{ textAlign: "center" }}>
              <Link to="/addTravelDetail">
                <button
                  className="btn btn-success"
                  style={{ width: "25%", margin: "20px auto 0" }}
                >
                  Add Travel
                </button>
              </Link>
            </div>
            {/*<h3 style={{textAlign:"left"}}>*/}
            {/*	Students Latest Travels*/}
            {/*</h3>*/}
            <br></br>
            <br></br>
            <hr></hr>
            <hr></hr>
            <br></br>
            <h4>Latest upcoming travels of students</h4>
            <div
              className="table-responsive"
              id="patientsList"
              style={{ marginTop: "40px" }}
            >
              <table className="table table-bordered border border-dark border-1 align-middle">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Roll No</th>
                    <th>Program Type</th>
                    <th>Branch</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>#</th>
                  </tr>
                </thead>
                <tbody id="travelList"></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
