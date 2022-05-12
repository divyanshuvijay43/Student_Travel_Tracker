import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  function saveInfo() {
    let obj = {
      email: "",
      password: "",
    };
    let usrname = document.getElementById("username").value;
    if (usrname === "" || usrname === " ") {
      alert("Invalid username!!!");
      return;
    }
    let psswd = document.getElementById("password").value;
    if (psswd === "" || psswd === " ") {
      alert("Invalid password.Try again!!!");
      return;
    }
    obj.email = usrname;
    obj.password = psswd;
  fetch("http://20.219.111.158:5050/student/login",{
      method:"POST",
      body: JSON.stringify(obj),
      headers: {
          "Content-type": "application/json; charset=UTF-8",
      }
  })
      .then((response)=>{
          if(response.status == 200)
          {
              return response.json();
          }
          else
          {
              console.clear();
              alert("Invalid Credentials!!!");
              return -1;
          }
      })
      .then(function(data){
          if(data!=-1)
          {
              localStorage.setItem("username", obj.email);
              fetch("http://20.219.111.158:5050/student/getRole/"+data,{
                  method:"GET"
              })
                  .then((response) => response.json())
                  .then((responseData) => {
                      if(responseData == 1)
                      {
                          fetch("http://20.219.111.158:5050/travel/hasTravelled/"+obj.email,{
                              method:"GET"
                          })
                          .then((data) => data.json())
                          .then((resData) => {
                              console.log(resData);
                              if(resData == true)
                              {
                                window.location.href = "/dashboard";
                              }
                              else
                              {
                                  window.location.href = "/addTravelDetail";
                              }
                          });
                      }
                      else
                      {
                          window.location.href = "/wardenDashboard";
                      }
                  });
          }
      })
  }
  function signUp() {
    navigate("/signup");
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
              <span>STUDENT TRAVEL CONNECT</span>
              <span>
                <button
                  id-type="button"
                  className="btn btn-success"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  Logout
                </button>
              </span>
            </div>
          </nav>
        </div>
        <div
          className="card p-3 shadow mb-5 rounded"
          style={{
            marginLeft: "28vw",
            marginTop: "5vw",
            backgroundColor: "white",
            width: "40vw",
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
              <div style={{ marginTop: "20px", textAlign: "left" }}>
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  required={true}
                ></input>
              </div>
              <div style={{ marginTop: "20px", textAlign: "left" }}>
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
                  type="button"
                  id="loginBtn"
                  onClick={saveInfo}
                  className="btn"
                  style={{
                    marginTop: "10px",
                    backgroundColor: "coral",
                    color: "black",
                  }}
                >
                  Login
                </button>
              </div>
            <hr></hr>
            <div>
              <span style={{ display: "block" }}>New User?</span>
              <button
                type="button"
                id="signupBtn"
                onClick={signUp}
                className="btn"
                style={{
                  marginTop: "10px",
                  backgroundColor: "Lightsteelblue",
                  color: "black",
                }}
              >
                Register Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
