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

    fetch("http://52.140.50.10:5050/student/getInfo/"+body.username,{
      method:"GET"
    })
        .then((response)=>{
          if(response != null)
          {
            return response.json();
          }
          else
          {
            alert("Student with entered rollNo doesn't exist!!!");
            return -1;
          }
        })
        .then(function(data){
            console.log(data);
            let stuId = data.id;
            console.log(stuId);
            if(data!=-1)
            {
              let travelDetail = {
                name : data.name,
                rollno:data.rollno,
                branch:data.branch,
                programName:data.programName,
                travelDate:body.date,
                StudentId:stuId,
                journeyType:parseInt(body.status)
              }
              fetch("http://52.140.50.10:5050/travel/addDetails", {
                method: "POST",
                body: JSON.stringify(travelDetail),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              })
                  .then((response) => response.json())
                  .then((responseData) => {
                    console.log(responseData);
                    window.location.href = "/dashboard";
                  });
            }
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
              <option value="1">Arriving</option>
              <option value="2">Departing</option>
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
      </div>
    </div>
  );
}
