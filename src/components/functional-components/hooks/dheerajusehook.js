import { useReducer } from "react";
function reducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return[...state, action.item];
        case 'DELETE_ITEM':
            return  state.filter((val, index) => index !== action.index);
        case 'UPDATE_ITEM':
          return
        default:  
            return state; 
    }
}
const initialState = [
  {
    id: 1,
    name: "apple",
    price: 200,
  },
  {
    id: 2,
    name: "banana",
    price: 70,
  },{
    id:3,
    name:"Grapes",
    price:120,
  }
];
const UseReducerTask = () => {
  const [currentState, dispatchFunction] = useReducer(reducer, initialState);
  const handleSubmit = (event) => {
    event.preventDefault();
    let name=event.target[0].value;
    let price=event.target[1].value;
    dispatchFunction({
        type:'ADD_ITEM',
        item:{'id':currentState.length+1,'name':name,"price":Number(price)}
    })
    event.target.reset();
  };
  const handleDelete=(id)=>{
      dispatchFunction({
          type:"DELETE_ITEM",
          index:id-1
      });
  }
  const handleUpdate=(item)=> {
    document.forms[0].target[0].value=item.name;
    document.forms[0].target[1].value=item.price;
  }

  return (
    <>
      <div>
        <h1>CRUD Operations</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentState.map((item) => (
              <Item item={item} key={item.id} id={item.id} deleteItem={handleDelete} updateItem={handleUpdate}/>
            ))}
          </tbody>
        </table>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Add fruit name" />
          <br />
          <input type="number" placeholder="add  fruit price" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
export default UseReducerTask;


export const Item = ({ item,deleteItem,id,updateItem}) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td><button onClick={()=>deleteItem(id)} className="btn btn-danger">delete</button></td>
      <td><button onClick={()=>updateItem(item)} className="btn btn-danger">Update</button></td>

    </tr>
  );
};