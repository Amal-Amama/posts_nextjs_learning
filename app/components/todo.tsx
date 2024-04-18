"use client";
import { useEffect, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
        {
          next: {
            revalidate: 60,
          },
        }
      );
      const result = await response.json();

      setTodo(result);
    };

    fetchTodo();
  }, []);

  return <div>{todo.title}</div>;
};

export default Todo;
