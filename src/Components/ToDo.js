import { Link } from "react-router-dom";

function Todo({ toDo, index }) {
  return (
    <tr>
      <td>
        {toDo.finished ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={toDo.duration} target="_blank" rel="noreferrer">
          {toDo.task}
        </a>
      </td>
      <td>
        <Link to={`/toDos/${index}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Todo;