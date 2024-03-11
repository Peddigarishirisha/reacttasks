import { useEffect, useState } from "react";
import Headers from "../navbar5/navbar5";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";



const Homescreen=()=>{


   const [data,setdata]=useState([])
useEffect(()=>{

axios.get("https://fakestoreapi.com/products")
.then(response=>{
   if(response.status===200){
      setdata(response.data)
   }
})
.catch(err=>console.log(err))

},[])


return(

<div>
   <Headers></Headers>
   {/* <h2> im from home screen</h2> */}
   {/* <img src="https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/a566a-restaurants-in-hyderabad.jpg?fit=1000%2C750&ssl=1" width={"100%"}/> */}

{
   data.map((eachobject)=>{
      return(
         <>
         <Bootstrapcards data12={eachobject}/>
         
         </>
      )
   })
}





</div>
)
}
export default Homescreen;





function Bootstrapcards(data1){
   const {data12:{title,category,description,id,price,image}}=data1
   
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{ width: 200, height: 200 }} />
      <Card.Body>
        <Card.Title>{title} </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <button><Link to={`/${category}/${id}`}>Navigate</Link></button>
      </Card.Body>
    </Card>
  );
}

