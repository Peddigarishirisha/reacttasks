import { Route, Routes } from "react-router-dom";
import Homescreen from "../pages/home";
import About from "../pages/about";
import Settings from "../pages/settings";
import Invalid from "../pages/invalid";
import Profile from "../pages/profile";




const Postroute=()=>{

    return(


        <Routes>


        <Route path="/" Component={Homescreen}/>
        <Route path="/About" Component={About}/>   
        <Route path="/Settings" Component={Settings}/>
        <Route path="/Profile" Component={Profile}/>
        <Route path="*" Component={Invalid}/>



        {/* </Route> */}
    </Routes>
    )

}

export default Postroute;