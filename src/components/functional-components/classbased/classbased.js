// import { Component } from "react";
// class ImageComponent extends Component{

// import { Component } from "react";



//     constructor(){
//         super()
//         this.state={
//                     name:"shirisha",
//                     age:"22"


//         }
        
//     }
// render(){
//     return(
//         <div>
//         <h2>hello siri{this.state.name}</h2>
//         </div>
//     )
// }
// }
// export default ImageComponent;





import React, { Component } from "react";

class Productinfo extends Component {
  constructor() {
    super();
    this.state = {
      product: [

      { id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
   price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
   category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL.AC_SL1500.jpg",
   rating: {
    rate: 3.9,
    count: 120
    }
    },
    {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
   price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
   category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL.AC_SY879._SX._UX._SY._UY.jpg",
   rating: {
    rate: 4.1,
    count: 259
    }
    },
    {
    id: 3,
    title: "Mens Cotton Jacket",
   price: 55.99,
    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
   category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL.AC_UX679.jpg",
   rating: {
    rate: 4.7,
    count: 500
    }
    },
    {
    id: 4,
    title: "Mens Casual Slim Fit",
   price: 15.99,
    description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
   category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL.AC_UY879.jpg",
   rating: {
    rate: 2.1,
    count: 430
    }
    },
    {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
   price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
   category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL.AC_UL640_QL65_ML3.jpg",
   rating: {
    rate: 4.6,
    count: 400
    }
    },
    {
    id: 6,
    title: "Solid Gold Petite Micropave ",
   price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
   category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL.AC_UL640_QL65_ML3.jpg",
   rating: {
    rate: 3.9,
    count: 70
    }
    },
    {
    id: 7,
    title: "White Gold Plated Princess",
   price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
   category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL.AC_UL640_QL65_ML3.jpg",
   rating: {
    rate: 3,
    count: 400
    }
    },
    {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
   price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
   category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL.AC_UL640_QL65_ML3.jpg",
   rating: {
    rate: 1.9,
    count: 100
    }
    },


        
      ]
    };
  }

  Sortbyprice=(data,parameter)=>{
    let result=this.state.product.sort((a,b)=>a["price"]-b["price"])
    console.log(result)
    this.setState({
        product:result
    })
    }

  render() {
    return (
      <table>
        <tbody>

            <button onClick={this.Sortbyprice}>sort by price</button>
          <tr>
            <td>title</td>
            <td>price</td>
          </tr>

          {this.state.product.map((eachobj) => (
            <tr key={eachobj.id}>
              <td>{eachobj.title}</td>
              <td>{eachobj.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Productinfo;
