import React from "react";
import { ToDo } from "../apiservices/types";
import ToDoItem from "./ToDoItem";

interface Props {
  list: ToDo[];
  toggle: (id: string) => void;
  deleteToDo: (id: string) => void;
}

const ToDoList = (props: Props) => {
  const { list, toggle, deleteToDo } = props;

  const items = list.map((item) => (
    <ToDoItem
      key={item._id}
      data={item}
      toggle={toggle}
      deleteToDo={deleteToDo}
    />
  ));
  return <div>{list.length ? items : "Nothing to do"}</div>;
};

export default ToDoList;
