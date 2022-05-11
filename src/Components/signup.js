import { useNavigate } from "react-router-dom";

function Signup() {

  let navigate = useNavigate();
  function registerUser() {
      let obj = {
        name: "",
        rollno: "",
        emailId: "",
        branch: "",
        programName: "",
        password: "",
        role:0
      };
      let fullN = document.getElementById("fullName").value;
      if (fullN == "" || fullN == " ") {
        alert("Invalid Name!!!");
        return;
      }
      let roll = document.getElementById("rollNo").value;
      if (roll == "" || roll == " ") {
        alert("Invalid Name!!!");
        return;
      }
      let email = document.getElementById("email").value;
      if (email == "" || email == " ") {
        alert("Invalid Email!!!");
        return;
      }
      let branch = document.getElementById("branch").value;
      if (branch == 0) {
        alert("Please Select Valid Branch!!!");
        return;
      }
      let pName = document.getElementById("programName").value;
      if (pName == 0) {
        alert("Please Select Valid Program Name!!!");
        return;
      }
      let pswd = document.getElementById("password").value;
      if (pswd == "" || pswd == " ") {
        alert("Invalid Password!!!");
        return;
      }
      obj.name = fullN;
      obj.emailId = email;
      obj.rollno = roll;
      obj.branch = branch == 1 ? "CSE" : "ECE";
      obj.programName = pName == 1 ? "MTech" : "iMTech";
      obj.password = pswd;
      console.log("pName:" + obj.programName);
      console.log("Branch:" + obj.branch);

      fetch("http://localhost:5050/student/register", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          window.location.href = "/login";
        });
  }
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
              <span style={{ float: "left" }}>STUDENT TRAVEL CONNECT</span>
              <span>
                <button
                  id-type="button"
                  className="btn btn-success"
                  style={{ backgroundColor: "white", color: "black" }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
              </span>
            </div>
          </nav>
        </div>
        <div
          className="card p-3 shadow mb-5 bg-white rounded"
          style={{
            marginLeft: "20vw",
            marginTop: "4vw",
            backgroundColor: "white",
            width: "60vw",
          }}
        >
          <div className="card-body">
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&usqp=CAU"
                  alt="Avatar"
                  style={{ borderRadius: "50%" }}
                ></img>
              </div>
              <div style={{ marginTop: "10px", textAlign: "left" }}>
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  required={true}
                ></input>
              </div>
              <div style={{ marginTop: "10px", textAlign: "left" }}>
                <label>Roll No</label>
                <input
                  type="text"
                  className="form-control"
                  id="rollNo"
                  required={true}
                ></input>
              </div>
              <div style={{ marginTop: "10px", textAlign: "left" }}>
                <label>Email Id</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  required={true}
                ></input>
              </div>
              <div style={{ marginTop: "10px", textAlign: "left" }}>
                <label>Program Name</label>
                <select className="form-control" id="programName">
                  <option value="0">--Select--</option>
                  <option value="1">MTech</option>
                  <option value="2">iMTech</option>
                </select>
              </div>
              <div style={{ marginTop: "10px", textAlign: "left" }}>
                <label>Branch Name</label>
                <select className="form-control" id="branch">
                  <option value="0">--Select--</option>
                  <option value="1">CSE</option>
                  <option value="2">ECE</option>
                </select>
              </div>
              <div style={{ marginTop: "10px", textAlign: "left" }}>
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required={true}
                ></input>
              </div>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <button
                  id="saveBtn"
                  onClick={registerUser}
                  className="btn"
                  style={{
                    marginTop: "10px",
                    backgroundColor: "#A2F7BF",
                    color: "black",
                  }}
                >
                  Register
                </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
