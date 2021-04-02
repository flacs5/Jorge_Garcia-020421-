import React from "react";
import { ToDo } from "../apiservices/types";

interface Props {
  data: ToDo;
  toggle: (id: string) => void;
  deleteToDo: (id: string) => void;
}

const ToDoItem: React.FC<Props> = (props) => {
  const {
    data: { _id, description, status },
    toggle,
    deleteToDo,
  } = props;
  return (
    <label style={{ display: "flex" }}>
      <input
        className="todo__state"
        name={_id}
        type="checkbox"
        defaultChecked={status}
        onChange={() => _id && toggle(_id)}
      />
      <div className="todo__text">{description}</div>
      <button type="button" onClick={() => _id && deleteToDo(_id)}>
        Delete
      </button>
    </label>
  );
};

export default ToDoItem;
