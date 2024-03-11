import {useState} from "react"
const List=()=>{

    const [fruits,setfruits]=useState(["apple","banana","mango"])

const addfruit=()=>{
    let newstate=[...fruits,"new fruit"]
    setfruits(newstate)
}

const deletefruit=(index)=>{
    let newstate=[...fruits];
    newstate.splice(index,2);
    setfruits(newstate)

}
    return(
<>
<h2>fruits</h2>

<button onClick={addfruit}>add fruit</button><ol>
    {

fruits.map((eachelement,index)=>

<>

<li key={index}>{eachelement}</li>
<button onClick={()=>deletefruit(index)}>delete</button>

{/* <li key={eachelement}>{eachelement}</li> */}
</>
    )

}

</ol>


</>


    )
}
export default List;


