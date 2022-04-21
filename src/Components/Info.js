function Info(){
    let obj = {
        first: "",
        last:"",
        address:"",
        email:"",
        age:"",
    };
    fetch("http://a6b5-103-156-19-229.ngrok.io/getDetails",{
        method:"GET",
    })
    .then((response) => response.json())
    .then((responseData)=>{
        document.getElementById("firstName").value = responseData[0].username;
        document.getElementById("lastName").value = responseData[0].username;
        document.getElementById("address").value = responseData[0].id;
        document.getElementById("contactNo").value = responseData[0].role;
        document.getElementById("age").value = responseData[0].id;
    })
    function saveInfo(){
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
    function editInfo(){
        document.getElementById("firstName").disabled=false;
        document.getElementById("lastName").disabled=false;
        document.getElementById("address").disabled=false;
        document.getElementById("contactNo").disabled=false;
        document.getElementById("age").disabled=false;
        document.getElementById("editBtn").style.display="none";
        document.getElementById("saveBtn").style.display="block";
    }
    return <>
    <div>
        <div>
            <nav className="navbar" style={{backgroundColor:"gainsboro"}}>
            <div className="container-fluid">
                <span className="navbar-text">
                Push-D Logo
                </span>
                <span>
                    <button id-type="button" className="btn btn-success" style={{marginTop:"10px",backgroundColor:"white",color:"black"}}>Logout</button>
                </span>
            </div>
            </nav>
        </div>
        <div className="card p-3 shadow mb-5 bg-white rounded" style={{margin:"20px",backgroundColor:"white"}}>
            <div className="card-body">
                <form className="row" style={{padding:"20px"}}>
                        <div style={{textAlign:"center"}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&usqp=CAU" alt="Avatar" style={{borderRadius:"50%"}}></img>
                        </div>
                    <div style={{marginTop:"4px"}}>
                        <label>First Name</label>
                        <input type="text" className="form-control" id="firstName" disabled={true}>
                            </input>
                    </div>
                    <div style={{marginTop:"4px"}}>
                        <label>Last Name</label>
                        <input type="text" className="form-control" id="lastName" disabled={true}></input>
                    </div>
                    <div style={{marginTop:"4px"}}>
                        <label>Address</label>
                        <input type="text" className="form-control" id="address" disabled={true}></input>
                    </div>
                    <div style={{marginTop:"4px"}}> 
                        <label>Contact No</label>
                        <input type="text" className="form-control" id="contactNo" disabled={true}></input>
                    </div>
                    <div style={{marginTop:"4px"}}>
                        <label>Age</label>
                        <input type="number" className="form-control" id="age" disabled={true}></input>
                    </div>
                    <div style={{marginTop:"4px",textAlign:"center"}}> 
                        <button type="button" id="editBtn" onClick={editInfo} className="btn" style={{marginTop:"10px",backgroundColor:"gainsboro",color:"black"}}>Edit</button>
                        <button type="button" id="saveBtn" onClick={saveInfo} className="btn" style={{marginTop:"10px",backgroundColor:"#A2F7BF",color:"black",display:"none"}}>Save</button>
                    </div>
                    </form>
            </div>
        </div>
    </div>
    
    </>
}

export default Info;