
// import axios from 'axios';

import { Component } from "react";



const Productaxios=()=>{

 const Fetchdata=()=>{
//hit the server using response
    // axios.get("https://fakestoreapi.com/products")
    // .then(responce=>console.log(responce))
    // .catch(err=>console.log(err))

    //hit the server usin fetch
fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(response=>console.log(response))
.catch(err=>console.log(err))

//hit the server using asynch

  // const result=await axios.get("https://fakestoreapi.com/products")
  // console.log(result)

// let response1= await fetch("https://fakestoreapi.com/products")
//  let finalresponse=response1.json()
//  console.log(finalresponse)

}
    return(

<>

<button onClick={Fetchdata}>fetch data</button>

</>
 

    )
}
export default Productaxios;


//dheraj code 
// class Axios12 extends Component{

// //const async fetchdata=()=>{
//      const result= await asxios.get("https://fakestoreapi.com/products")
//      console.log(result)
// }


//     render(){
//         return(

// <>
// <button onClick={fetchdata}>fetchdata</button>
// </>

//         )
//     }

    
// }

// exports default Axios12;


// import { Component } from 'react';

// class UsersList1 extends Component {
//   state = {
//     users: []
//   };

//   componentDidMount() {
//     fetch("https://fakestoreapi.com/users")
//   .then(response => response.json())
//   .then(data => {
//     console.log("data",data)
//     this.setState({
//         users:data
//     })
//   })
//   .catch(error => {
//     alert("something went wrong")
//     console.error('Error fetching products:', error);
//   });

//   }

//   render() {
//     console.log(this.state.users)
//     return (
//       <div>
//         <h2>users List</h2>
//         <ol>
//           { this.state.users.length>0 && this.state.users.map(users => 
//             <li key={users.id}>{users.id}, {users.email}</li>)}
//         </ol>
//       </div>
//     );
//   }
// }

// export default UsersList1;