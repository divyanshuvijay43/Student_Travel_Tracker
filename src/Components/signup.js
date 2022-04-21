function Signup(){
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
    function registerUser(){
        let first = document.getElementById("firstName").value
        let last = document.getElementById("lastName").value
        let addr = document.getElementById("address").value
        let contact = document.getElementById("contactNo").value
        let age = document.getElementById("age").value
        let person = {
            firstName:first,
            lastName:last,
            address:addr,
            contactNo:contact,
            age:age
        }
        alert(person.firstName);
        alert(person.lastName);
        alert(person.age);
        alert(person.address);
        alert(person.contactNo);
        document.getElementById("firstName").disabled=true;
        document.getElementById("lastName").disabled=true;
        document.getElementById("address").disabled=true;
        document.getElementById("contactNo").disabled=true;
        document.getElementById("age").disabled=true;
        document.getElementById("editBtn").style.display="block";
        document.getElementById("saveBtn").style.display="none";
    }
    return <>
        <div>
            <div>
                <nav className="navbar" style={{backgroundColor:"lightblue"}}>
                    <div className="container-fluid">
                        <span className="navbar-text" style={{backgroundColor:"white",display:"block",padding:"5px"}}>
                        Logo
                        </span>
                        <span style={{float:"left"}}>
                            STUDENT TRAVEL CONNECT
                        </span>
                        <span>
                        <button id-type="button" className="btn btn-success" style={{backgroundColor:"white",color:"black"}}>Logout</button>
                        </span>
                    </div>
                </nav>
            </div>
            <div className="card p-3 shadow mb-5 bg-white rounded" style={{marginLeft:"20vw",marginTop:"4vw",backgroundColor:"white",width:"60vw"}}>
                <div className="card-body">
                    <form className="row" style={{padding:"20px"}}>
                        <div style={{textAlign:"center"}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&usqp=CAU" alt="Avatar" style={{borderRadius:"50%"}}></img>
                        </div>
                        <div style={{marginTop:"10px",textAlign:"left"}}>
                            <label>Name</label>
                            <input type="text" className="form-control" id="fullName">
                            </input>
                        </div>
                        <div style={{marginTop:"10px",textAlign:"left"}}>
                            <label>Roll No</label>
                            <input type="text" className="form-control" id="rollNo"></input>
                        </div>
                        <div style={{marginTop:"10px",textAlign:"left"}}>
                            <label>Email Id</label>
                            <input type="text" className="form-control" id="email"></input>
                        </div>
                        <div style={{marginTop:"10px",textAlign:"left"}}>
                            <label>Program Name</label>
                            <select className="form-control">
                                <option>--Select--</option>
                                <option>MTECH</option>
                                <option>IMTECH</option>
                            </select>
                        </div>
                        <div style={{marginTop:"10px",textAlign:"left"}}>
                            <label>Branch Name</label>
                            <select className="form-control">
                                <option>--Select--</option>
                                <option>CSE</option>
                                <option>ECE</option>
                            </select>
                        </div>
                        <div style={{marginTop:"20px",textAlign:"center"}}>
                            <button type="button" id="saveBtn" onClick={registerUser} className="btn" style={{marginTop:"10px",backgroundColor:"#A2F7BF",color:"black"}}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </>
}

export default Signup;