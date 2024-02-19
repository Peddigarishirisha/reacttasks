import logo from './logo.svg';
import './App.css';

import Buttoncomponent from './components/functional-components/button/button-component';
import Orderlist from './components/functional-components/list/order-list/order-list';
import Unorderlist from './components/functional-components/list/unorder-list/unorder-list';

import Table from './components/functional-components/images/images';

function App() {
  return (
    <div> <h1>shirisha</h1>

<Buttoncomponent></Buttoncomponent>
{/* <Buttoncomponent></Buttoncomponent> */}
    <Orderlist></Orderlist>
<Unorderlist></Unorderlist>
<Table></Table>


    </div>
      
    
  )
}

export default App;
