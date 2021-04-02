import React, { useEffect, useState } from "react";
import apiService from "./apiservices/apiService";
import { ToDo } from "./apiservices/types";
import ToDoCreator from "./components/ToDoCreator";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  useEffect(() => {
    apiService.getTodos().then((data) => {
      setToDoList(data.data);
    });
  }, []);

  const reloadList = () => {
    apiService.getTodos().then((data) => {
      setToDoList(data.data);
    });
  };

  console.log(toDoList);

  const submit = (todo: ToDo) => {
    console.log(todo);
    apiService.createToDo(todo).then((data) => {
      if (data.success) {
        reloadList();
      }
    });
  };

  const toggle = (id: string) => {
    console.log(id);
    apiService.updateToDo(id).then((data) => {
      if (data.success) {
        reloadList();
      }
    });
  };
  const deleteToDo = (id: string) => {
    console.log(id);
    apiService.deleteToDo(id).then((data) => {
      if (data.success) {
        reloadList();
      }
    });
  };

  return (
    <>
      <ToDoCreator submit={submit} />
      <ToDoList list={toDoList} toggle={toggle} deleteToDo={deleteToDo} />
    </>
  );
};

export default App;
