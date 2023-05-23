import ToDoNewForm from "../Components/ToDoNewForm";
import React from "react";
import { useState } from "react";


function NewToDo() {
    const [val, setVal] = useState([]);
    const handleAdd=()=>{
        const abc=[...val,[]]
        setVal(abc)
    }
    // const handleDiff=(onChangeValue,i)=>{
    //     const inputData=[...val]
    //     inputData[i]=onChangeValue.target.value
    //     setVal(inputData)
    // }
    const handleDelete=(i)=>{
        const deleteVal=[...val]
        deleteVal.splice(i,1)
        setVal(deleteVal)
    }
    return (
      <div className="NewToDo">
        <h2>Write your tasks below...</h2>
        <ToDoNewForm />
        <div>
            <button onClick={()=>handleAdd()}>New Task</button>
            {val.map((data,i)=>{
                return(
                    <div>
                        <ToDoNewForm />
                        <button onClick={()=>handleDelete(i)}>X</button>
                    </div>
                )
            })}
        </div>
      </div>
    );
  }
  
  export default NewToDo;
  