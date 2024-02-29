// import Table from "../images/images";

const Cards1=()=>{

    return(

        <div className="card" style={{ width: 100 }}>
  {/* <img className="card-img-top" src="img_avatar1.png" alt="Card image" /> */}
  {/* <Table></Table> */}
  <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" height={50} width={100}/>
  <div className="card-body">
    <h4 className="card-title">John Doe</h4>
    <p className="card-text">Some example text.</p>
    <a href="#" className="btn btn-primary">
      See Profile
    </a>
  </div>
</div>
    )
}
export default Cards1;