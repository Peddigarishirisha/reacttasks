import { useState } from "react"



const Timerupdate=()=>{


    const [currenttime,timerrunning]=useState(0)

    const handletime=()=>{
        // timerrunning(currenttime=>currenttime+1)

setInterval(()=>{

    // timerrunning(currenttime=>currenttime+1)
    timerrunning((time)=>time+1)},1000);
    }


    

    return(

<>
<h2>{currenttime}</h2>

<button onClick={handletime}>timer</button>



</>



    )
}
export default  Timerupdate;