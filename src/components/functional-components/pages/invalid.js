import { useNavigate } from "react-router-dom";
import Headers from "../navbar5/navbar5";


const Invalid=()=>{



   const Navigate= useNavigate()
   const Handleroute=()=>{
Navigate("/")
   }
    return(
    
    <div>
        <h2>404 page not found</h2>
        {/* <Headers></Headers> */}
        <button onClick={Handleroute}>go to home</button>
    </div>
    
    
    
    )
    
    }

    export default Invalid;