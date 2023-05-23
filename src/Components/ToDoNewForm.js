import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/main.css";

function ToDoNewForm() {
  const [toDo, setToDo] = useState({
    task: "",
    duration: "",
    finished: false,
  });
  const navigate = useNavigate();
  const handleTextChange = (event) => {
    setToDo({ ...toDo, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setToDo({ ...toDo, finished: !toDo.finished });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(process.env.REACT_APP_API_URL)
    axios
    .post(`${process.env.REACT_APP_API_URL}/toDos`, toDo) // localhost:3333/toDos
    .then(()=>{
      navigate("/toDos"); //index page
    })
    .catch((e)=>{
      console.log(e); 
    });
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task:</label>
        <input
          id="task"
          value={toDo.task}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter a task"
          required
        />
        <label htmlFor="duration">Time</label>
        <input
          id="duration"
          type="number"
          pattern="m:d:h:m"
          required
          value={toDo.duration}
          placeholder="m:d:h:m"
          onChange={handleTextChange}
        />
        <button htmlFor="finished"  id="finished"
          type="submit"
          onChange={handleCheckboxChange}
          checked={toDo.finished}>Done</button>
      </form>
    </div>
  );
}

export default ToDoNewForm;