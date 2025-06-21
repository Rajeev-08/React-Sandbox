import React ,{useState} from 'react';
import style from './Todo.module.css';
function Todo(){

    const [task ,setTask]=useState([]);
    const [newtask,setNewtask]=useState("")

    const handler=(event)=>{
        setNewtask(event.target.value);
    }

    const Addtask=()=>{

        if (newtask.trim()!=""){
         setTask(t=>[...t,newtask]);
         setNewtask("");
        }
    }
    const Del=(index)=>{
        setTask(task.filter((_,i)=>index!=i));
    }

    const Up=(index)=>{
        if (index>0){
        const updatedTask=[...task];
            [updatedTask[index-1],updatedTask[index]]=[updatedTask[index],updatedTask[index-1]]
            setTask(updatedTask);
        }
        
    }
    const Down=(index)=>{
        if (index<task.length-1){
        const updatedTask=[...task];
            [updatedTask[index+1],updatedTask[index]]=[updatedTask[index],updatedTask[index+1]]
            setTask(updatedTask);
        }
        
    }

    return <>
    <div className={style.container1}>

        <h1 className={style.h}>Todo</h1>
        <div className={style.container2}>
            <input type="text" className={style.inputText} value={newtask} onChange={(e)=>handler(e)} placeholder="Enter task..."></input>
            <button className={style.Add} onClick={Addtask}>Add</button>
              </div>
           
            <ol>
              
                { 
                    task.map((val,index)=><li  className={style.item}key={index}>
                    {val}
                   
                    <button className={style.Delete}  onClick={()=>Del(index)}>Delete</button>
                    <button className={style.move} onClick={()=>Up(index)}>Up</button>
                    <button  className={style.move}onClick={()=>Down(index)}>Down</button>
                      
                    </li>
                    )
                  
                }
                  
            </ol>
         
      
    </div>

    
    </>
}

export default Todo;