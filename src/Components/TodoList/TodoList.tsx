import React from 'react';
import TodoItem from "../TodoItem/TodoItem";

interface Props {
  todos: {
    id: number;
    text: string;
    done: boolean
  }[];
  onRemove: (id:number) => void;
  onToggle: (id:number) => void;
}

const  TodoList = ({todos, onRemove, onToggle}: Props) => {
  return (
    <ul data-testid="TodoList">
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  )
};

export default TodoList