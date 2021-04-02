import React, { useState } from "react";
import { ToDo } from "../apiservices/types";

interface Props {
  submit: (data: ToDo) => void;
}

const ToDoCreator: React.FC<Props> = (props) => {
  const { submit } = props;
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(description);
    submit({ description, status: false });
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <input
            type="text"
            className="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit" disabled={!description}>
            Add ToDo
          </button>
        </div>
      </div>
    </form>
  );
};

export default ToDoCreator;
