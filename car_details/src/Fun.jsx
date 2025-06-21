import React ,{useState} from 'react';
function Fun(){

  const [car,setCar]=useState([]);
  const [carYear,setCarYear]=useState(new Date().getFullYear());
  const [carMake ,setCarMake]=useState("");
  const [carModel, setCarModel]=useState("");

  const handleAdd=()=>{
     const newCar={
      year:carYear,
      make:carMake,
      model:carModel
    }
    setCar(c=>[...c,newCar]);
    setCarYear(new Date().getFullYear());
    setCarModel("");
    setCarMake("");

  }
  const handleMake=(event)=>{
    setCarMake(event.target.value);
  }
  const handleModel=(event)=>{
    setCarModel(event.target.value);
  }
  const handleYear=(event)=>{
    setCarYear(event.target.value);
  }

  const handleRemove=(index)=>{

    setCar(c=>c.filter((_,i)=> i!=index));
  }

  return <>
  <h1>List of cars</h1>
   
 
  <input type="number" value={carYear} onChange={(e)=>handleYear(e)}></input>

  <input type="text" value={carMake} onChange={(e)=>{handleMake(e)}}></input>

  <input type="text" value={carModel} onChange={(e)=>{handleModel(e)}}></input>
  <button onClick={handleAdd}>AddCar</button>

    <ul>
      {car.map((item,index)=><li key={index}>{item.year} {item.make} {item.model} <button onClick={()=>handleRemove(index)}>Remove</button> </li> )}

  </ul>
  </>
}
export default Fun;