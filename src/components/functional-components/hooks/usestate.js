import { useState } from "react"




const Usestate=()=>{




    const [currentstate,setcurrentcount]=useState(0)

  

    const Increment =(value)=>{
        console.log(currentstate,"currentstate")
        setcurrentcount(currentstate+value)
        // setcurrentcount(siri=>siri+value)//if we want multiple multipletimes
        // setcurrentcount(siri=>siri+value)

    }

    const Decrement=(value)=>{
        setcurrentcount(currentstate - value)
    }


    const Reset=()=>{
        setcurrentcount(0)
    }
    return(

<>
<h2>{currentstate}</h2>          
<button onClick={()=>Increment(1)}>Increment</button>
<button onClick={()=>Decrement(1)}>Decrement</button>
<button onClick={Reset}>Reset</button>

</>


    )


}
export default Usestate;