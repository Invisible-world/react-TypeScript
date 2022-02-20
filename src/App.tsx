import React, { useState } from "react";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

type TodoType = {
  data: {
    title: string;
    isCompleted: boolean;
  }[];
};

function App() {
  const initialState = {
    data: [
      {
        title: "xyz",
        isCompleted: false,
      },
    ],
  };

  const [newTitle, setNewTitle] = useState<string | null>(null);
  const [todo, setTodo] = useState<TodoType>(initialState);
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };
  return (
    <div style={{ marginTop: "1.5rem" }}>
      <div>
        <h2 style={style.centerHeader}>Goals Setter App</h2>
        <AddTodo handleChange={handleClick} styles={style.centerHeader} />
      </div>
      <TodoList data={todo} />
    </div>
  );
}
const style = {
  centerHeader: {
    display: " block",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "28px",
  },
};
export default App;
