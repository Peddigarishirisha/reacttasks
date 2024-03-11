import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner1 from "../spinner/spinner";




const Productdetail=()=>{

     const Routeinformation=useParams()
     console.log(Routeinformation,"routeinformation")
     const[product, setProduct]= useState([])

     useEffect(()=>{
     Fetchdata()

     },[Routeinformation.id])

     const Fetchdata=()=>{
        axios.get(`https://fakestoreapi.com/products/${Routeinformation.id}`)
.then(response=>{
    if(response.status===200){
        setProduct(response.data)
    }
})
.catch(err=>console.log(err))

     }


    return (


        <>
            {/* <h2>im product detail</h2> */}
            {
            
            Object.keys(product).length>0
            ?
            <h3>product success</h3>
            :
            <Spinner1></Spinner1>
            }

        </>
    )
}
export default Productdetail;