

const Profile=()=>{
    const Profileinformation={

        name:"10k coders",
        adrees:"kphb",
        url:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        dimensions:150
    }
    const {name,adrees,url,dimensions}=Profileinformation
    

return(

    <div>
    
    {/* <h2>{Profileinformation.name}</h2>
    <img src={Profileinformation.url} height={Profileinformation.dimensions} width={Profileinformation.dimensions}></img> */}
    
    <h2>{name}</h2>
    <img src={url} height={dimensions} width={dimensions}></img>

    
    </div>

)

}
export default Profile
