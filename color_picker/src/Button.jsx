
import React,{useState} from 'react';
function Button() {

  const [name,setName]=useState("");
  const [payment,setPayment]=useState("");
  const handler=(e)=>{
    setName(event.target.value);
  }
  const handler1=(e)=>{
    setPayment(event.target.value);
  }
  return <>
  <input type="text" onChange={(e)=>handler(e)}></input>
  <p>{name}</p>
  <select value={payment} onChange={handler1}>
  <option value="">select</option>
  <option value="visa">visa</option>
  <option value="master">master</option>
  </select>
   <p>{payment}</p>

  </>
}
export default Button;
