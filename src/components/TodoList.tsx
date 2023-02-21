import React from "react";
import TodoListItem from "./TodoListItem";

interface ITodoList {
  todos: TodoType[];
}

const TodoList: React.FC<ITodoList> = () => {
  return (
    <ul>
      <TodoListItem />
    </ul>
  );
};

export default TodoList;
