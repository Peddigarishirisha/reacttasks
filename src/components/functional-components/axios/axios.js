
import axios from 'axios';



const Productaxios=()=>{

 const Fetchdata= async ()=>{
//hit the server using response
    // axios.get("https://fakestoreapi.com/products")
    // .then(responce=>console.log(responce))
    // .catch(err=>console.log(err))

    //hit the server usin fetch
// fetch("https://fakestoreapi.com/products")
// .then(response=>response.json())
// .then(response=>console.log(response))
// .catch(err=>console.log(err))

//hit the server using asynch

//   const result=await axios.get("https://fakestoreapi.com/products")
//   console.log(result)

let response1= await fetch("https://fakestoreapi.com/products")
 let finalresponse=response1.json()
 console.log(finalresponse)

}
    return(

<>

<button onClick={Fetchdata}>fetch data</button>

</>
 

    )
}
export default Productaxios;