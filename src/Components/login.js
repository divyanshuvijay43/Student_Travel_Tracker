function Login(){
    let obj = {
        first: "",
        last:"",
        address:"",
        email:"",
        age:"",
    };
    // fetch("http://a6b5-103-156-19-229.ngrok.io/getDetails",{
    //     method:"GET",
    // })
    //     .then((response) => response.json())
    //     .then((responseData)=>{
    //         document.getElementById("firstName").value = responseData[0].username;
    //         document.getElementById("lastName").value = responseData[0].username;
    //         document.getElementById("address").value = responseData[0].id;
    //         document.getElementById("contactNo").value = responseData[0].role;
    //         document.getElementById("age").value = responseData[0].id;
    //     })
    function saveInfo(){
        let username = document.getElementById("username").value
        if(username == '' || username == ' ')
        {
            alert("Invalid username!!!");
            return;
        }
        let password = document.getElementById("password").value
        if(password == '' || password == ' ')
        {
            alert("Invalid password.Try again!!!");
            return;
        }
        console.log(username);
        console.log(password);
    }
    function signUp(){
        window.location.href="/signup";
    }
    return <>
        <div>
            <div>
                <nav className="navbar" style={{backgroundColor:"lightblue"}}>
                    <div className="container-fluid">
                <span className="navbar-text" style={{backgroundColor:"white",display:"block",padding:"5px"}}>
                Logo
                </span>
                        <span>
                            STUDENT TRAVEL CONNECT
                        </span>
                <span>
                    <button id-type="button" className="btn btn-success" style={{backgroundColor:"white",color:"black"}}>Logout</button>
                </span>
                    </div>
                </nav>
            </div>
            <div className="card p-3 shadow mb-5 rounded" style={{marginLeft:"28vw",marginTop:"5vw",backgroundColor:"white",width:"40vw"}}>
                <div className="card-body">
                    <form className="row" style={{padding:"20px"}}>
                        <div style={{textAlign:"center"}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&usqp=CAU" alt="Avatar" style={{borderRadius:"50%"}}></img>
                        </div>
                        <div style={{marginTop:"20px",textAlign:"left"}}>
                            <label>Email Id</label>
                                <input type="text" className="form-control" id="username" required={true}>
                                </input>
                        </div>
                        <div style={{marginTop:"20px",textAlign:"left"}}>
                            <label>Password</label>
                            <input type="password" className="form-control" id="password" required={true}></input>
                        </div>
                        <div style={{marginTop:"20px",textAlign:"center"}}>
                            <button type="submit" id="loginBtn" onClick={saveInfo} className="btn" style={{marginTop:"10px",backgroundColor:"#A2F7BF",color:"black"}}>Login</button>
                        </div>
                    </form>
                    <hr></hr>
                    <div>
                        <span style={{display:"block"}}>New User?</span>
                        <button type="button" id="signupBtn" onClick={signUp} className="btn" style={{marginTop:"10px",backgroundColor:"Lightsteelblue",color:"black"}}>Register Here</button>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Login;