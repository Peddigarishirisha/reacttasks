

import { BrowserRouter} from "react-router-dom"
// import Homescreen from "../pages/home";
// import About from "../pages/about";
// import Settings from "../pages/settings";
// import Invalid from "../pages/invalid";
// import Profile from "../pages/profile";
import Postroute from "../postroute/post-rote";
import Preroute from "../pre-route/preroute";




const Navigationinfo=()=>{
    return (


        <BrowserRouter>

      {

     true
        ?<Postroute/>
        :<Preroute/>
      }
        
        </BrowserRouter>
    )
}

export default Navigationinfo;