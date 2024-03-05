import { Link } from "react-router-dom";



const Headers =()=>{
    const Linkstyle={textDecoration:"none",margin:20 ,color:"white"}

return(


    // <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    {/* <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"> */}
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">

        <Link style={Linkstyle} to={"/"}>Home</Link>
        {/* <a className="nav-link active" href="#">
          Active
        </a> */}
      </li>
      <li className="nav-item">
        <Link style={Linkstyle} to={"/about"}>About</Link>
      </li>
      <li className="nav-item">
      <Link style={Linkstyle} to={"/profile"}>Profile</Link>
      </li>
      <li className="nav-item">
      <Link style={Linkstyle} to={"/settings"}>Settings</Link>
      </li>
    </ul>
  </div>
</nav>

)

}

export default Headers;