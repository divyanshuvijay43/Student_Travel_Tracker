function Connectbuddy()
{
    let urlpth = window.location.href;
    let x = urlpth.indexOf("=");
    let y = urlpth.length;
    let k = x+1;
    let str = "";
    while(k<y)
    {
        str = str + urlpth[k];
        k++;
    }
    console.log(str);
    function sendMail()
    {
        let rollno = document.getElementById("username").value;
        fetch("http://52.140.50.10:5050/travel/sendMail/"+rollno+"/"+localStorage.getItem("username"),{
            method:"POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => response.json())
        .then((responseData) => {
            alert("Mail Sent Successfully");
            window.location.href = "/dashboard";
        });
    }

    function changePage()
    {
        window.location.href="/dashboard";
    }
    return (
        <>
            <div>
                <div>
                    <nav className="navbar" style={{ backgroundColor: "lightblue"}}>
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
                                onClick={changePage}
                                id-type="button"
                                className="btn btn-success"
                                style={{ backgroundColor: "white", color: "black" }}
                            >
                              Back
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
                                value={str}
                            ></input>
                        </div>
                        <div style={{ marginTop: "20px", textAlign: "center" }}>
                            <button
                                type="button"
                                id="loginBtn"
                                onClick={sendMail}
                                className="btn"
                                style={{
                                    marginTop: "10px",
                                    backgroundColor: "coral",
                                    color: "black",
                                }}
                            >
                                Notify
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Connectbuddy;