import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function WardenDashboard() {

    function updateList() {
        let obj = {
            status:"",
            branch:""
        }
        let status = document.getElementById("status").value;
        let branch = document.getElementById("branch").value;
        obj.status = parseInt(status);
        if(branch == 1)
        {
            obj.branch = "CSE";
        }
        else if(branch == 2){
            obj.branch = "ECE";
        }
        fetch("http://20.219.111.158:5050/travel/getFilteredDetails", {
            method: "POST",
            body:JSON.stringify(obj),
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
                            "</tr>";
                    }
                    html = html + row;
                }
                document.getElementById("travelList").innerHTML = html;
            });
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
                            <div className="col-6">
                                <label>Status</label>
                                <select className="form-control" id="status">
                                    <option value="0">--Select--</option>
                                    <option value="1">Arriving</option>
                                    <option value="2">Departing</option>
                                </select>
                            </div>
                            <div className="col-6">
                                <label>Branch</label>
                                <select className="form-control" id="branch">
                                    <option value="0">--Select--</option>
                                    <option value="1">CSE</option>
                                    <option value="2">ECE</option>
                                </select>
                            </div>
                            <button
                                className="btn btn-primary"
                                style={{ width: "25%", margin: "20px auto 0" }}
                                // onClick={updateList}
                            >
                                Search
                            </button>
                        </div>
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

export default WardenDashboard;
