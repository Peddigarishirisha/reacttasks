import { useState } from "react";
const Control=()=>{

const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const [usernameerror,setusernameerror]=useState(null)
const [userpassword,setuserpassword]=useState(null)
    
const submitbutton = (event) => {
  let username = event.target.value;
  setemail(username);

  if (username.length > 5) {
    showalert();
  } else {
    setusernameerror(null);
  }
};
const showalert=()=>{

  setusernameerror("please enter the below 5 charecters")
}



const handlepassword=(event)=>{
  let userpassworddata=event.target.value;
  setpassword(userpassworddata);
  if(userpassworddata.length<8){
    showalertpassword()
  }
  else{
   
    setuserpassword(null)
  }
}

const showalertpassword=()=>{
  setuserpassword("please must fill the 8 charecters only")
}
    return(
        <>     
        <title>Bootstrap Example</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <div className="container mt-3">
          <h2>Stacked form</h2>
          <form action="/action_page.php">
            <div className="mb-3 mt-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={submitbutton}

              />
              {
                usernameerror&&
                <span  style={{ color: 'red' }}>{usernameerror}</span>
              }
            </div>
            <div className="mb-3">
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pswd"
                value={password}
                onChange={handlepassword}
              />{
              userpassword&&
              <span style={{ color: 'red' }}>{userpassword}</span>
              }

            </div>
            <div className="form-check mb-3">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" name="remember" />{" "}
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </>
      
    )
    }

export default Control;