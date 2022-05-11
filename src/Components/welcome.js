function Welcome(){

    function login()
    {
        window.location.href = "/login";
    }

    return <>
            <div>
                <div className="card p-3 shadow mb-5 rounded"
                     style={{
                         marginLeft: "30vw",
                         marginTop: "15vw",
                         backgroundColor: "azure",
                         width: "40vw",
                     }}
                >
                    <div className="card-body">
                        <h3>Welcome to Student Travel Connect</h3>
                        <hr></hr>
                        <hr></hr>
                        <br></br>
                        <div style={{ marginTop: "20px", textAlign: "center" }}>
                            <h5>
                                Lets Connect with other travelling friends to have a memorable journey!!!
                            </h5>
                            <br></br>
                            <button
                                type="button"
                                id="loginBtn"
                                onClick={login}
                                className="btn"
                                style={{
                                    backgroundColor: "lightgreen",
                                    color: "black",
                                    width:"25vw"
                                }}
                            >
                                Login->
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </>
}

export default Welcome;