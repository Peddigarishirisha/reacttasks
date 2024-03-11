

// import { FidgetSpinner } from "react-loader-spinner";

// const Spinner=()=>{

// return(


//     <FidgetSpinner
//         visible={true}
//         height="80"
//         width="80"
//         ariaLabel="fidget-spinner-loading"
//         wrapperStyle={{}}
//         wrapperClass="fidget-spinner-wrapper"
//         />
      

    
// )


// }

// export default Spinner;


import Spinner from 'react-bootstrap/Spinner';

const Spinner1=()=> {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Spinner1;