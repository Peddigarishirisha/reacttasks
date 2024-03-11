const { useState } = require("react")



const Usememo=()=>{

const [counter1,setcounter1]=useState(0)
const [counter2,setcounter2]=useState(0)

    return (
<>
<h1>{counter1}counter1</h1>
<h1>{counter2}counter2</h1>

</>


    )
}
export default Usememo;




