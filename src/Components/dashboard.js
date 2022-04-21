function Dashboard(){
	// fetch("http://localhost:8083/patientDetails/1",{
	// 	method:"GET",
	// })
	// 	.then((response) => response.json())
	// 	.then((responseData)=>{
	// 		console.log(responseData);
	// 		document.getElementById("patientsList").innerHTML='';
	// 		let sz = responseData.length;
	// 		console.log(sz);
	// 		let html = '';
	// 		for(let i=0;i<sz;i++)
	// 		{
	// 			let row = '';
	// 			if(i%2==0)
	// 			{
	// 				row = '<a type="button" href="/patientTracker?id='+responseData[i].pid+'" class="list-group-item list-group-item-action" style="background-color:lightgreen;">'+responseData[i].username+
	// 					'</a>';
	// 			}
	// 			else
	// 			{
	// 				row = '<a type="button" href="/patientTracker?id='+responseData[i].pid+'" class="list-group-item list-group-item-action" style="background-color:white;">'+responseData[i].username+
	// 					'</a>';
	// 			}
	// 			html=html+row;
	// 		}
	// 		document.getElementById("patientsList").innerHTML = html;
	// 	})


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
			<div className="card p-3 shadow mb-5 bg-white rounded" style={{margin:"20px",backgroundColor:"white"}}>
				<div className="card-body">
					<div className="row" style={{textAlign:"left"}}>
						<div className="col-3">
							<label>Name</label>
							<input type="text" className="form-control" id="username">
							</input>
						</div>
						<div className="col-3">
							<label>Program Type</label>
							<select className="form-control">
								<option>--Select--</option>
								<option>MTECH</option>
								<option>IMTECH</option>
							</select>
						</div>
						<div className="col-3">
							<label>Branch</label>
							<select className="form-control">
								<option>--Select--</option>
								<option>CSE</option>
								<option>ECE</option>
							</select>
						</div>
						<div className="col-3">
							<label>Date</label>
							<input type="text" className="form-control" id="username">
							</input>
						</div>
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
					<div className="table-responsive" id="patientsList" style={{marginTop:"40px"}}>
						<table className="table table-bordered border border-dark border-1 align-middle">
							<thead>
								<tr>
									<th>
										Name
									</th>
									<th>
										Roll No
									</th>
									<th>
										Program Type
									</th>
									<th>
										Branch
									</th>
									<th>
										Date
									</th>
									<th>
										#
									</th>
								</tr>
							</thead>
							<tbody>
								<tr style={{backgroundColor:"lavender"}}>
									<td>
										Divyanshu Vijay
									</td>
									<td>
										MT2021043
									</td>
									<td>
										MTECH
									</td>
									<td>
										CSE
									</td>
									<td>
										28/4/2021
									</td>
									<td>
										<button type="button" className="btn" style={{backgroundColor:"#52595D",color:"white"}}>Ping</button>
									</td>
								</tr>
								<tr style={{backgroundColor:"azure"}}>
									<td>
										Divyanshu Vijay
									</td>
									<td>
										MT2021043
									</td>
									<td>
										MTECH
									</td>
									<td>
										CSE
									</td>
									<td>
										28/4/2021
									</td>
									<td>
										<button type="button" className="btn" style={{backgroundColor:"#52595D",color:"white"}}>Ping</button>
									</td>
								</tr>
								<tr style={{backgroundColor:"lavender"}}>
									<td>
										Divyanshu Vijay
									</td>
									<td>
										MT2021043
									</td>
									<td>
										MTECH
									</td>
									<td>
										CSE
									</td>
									<td>
										28/4/2021
									</td>
									<td>
										<button type="button" className="btn border-dark" style={{backgroundColor:"#52595D",color:"white"}}>Ping</button>
									</td>
								</tr>
								<tr style={{backgroundColor:"azure"}}>
									<td>
										Divyanshu Vijay
									</td>
									<td>
										MT2021043
									</td>
									<td>
										MTECH
									</td>
									<td>
										CSE
									</td>
									<td>
										28/4/2021
									</td>
									<td>
										<button type="button" className="btn" style={{backgroundColor:"#52595D",color:"white"}}>Ping</button>
									</td>
								</tr>
								<tr style={{backgroundColor:"lavender"}}>
									<td>
										Divyanshu Vijay
									</td>
									<td>
										MT2021043
									</td>
									<td>
										MTECH
									</td>
									<td>
										CSE
									</td>
									<td>
										28/4/2021
									</td>
									<td>
										<button type="button" className="btn" style={{backgroundColor:"#52595D",color:"white"}}>Ping</button>
									</td>
								</tr>
								<tr style={{backgroundColor:"azure"}}>
									<td>
										Divyanshu Vijay
									</td>
									<td>
										MT2021043
									</td>
									<td>
										MTECH
									</td>
									<td>
										CSE
									</td>
									<td>
										28/4/2021
									</td>
									<td>
										<button type="button" className="btn" style={{backgroundColor:"#52595D",color:"white"}}>Ping</button>
									</td>
								</tr>
							</tbody>

						</table>
					</div>
				</div>
			</div>
		</div>
	</>
}

export default Dashboard;