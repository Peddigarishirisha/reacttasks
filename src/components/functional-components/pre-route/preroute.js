import { Route, Routes } from "react-router-dom";
import Loginscreen from "../pages/loginscreen";
import Invalid from "../pages/invalid";





const Preroute=()=>{


    return(


        <Routes>


        <Route path="/" Component={Loginscreen}/>
        <Route path="*" Component={Invalid}/>
        


        {/* </Route> */}
    </Routes>
    )
}
export default Preroute;