import React from "react";
import Items from "./Items";

const fetchTodos = async () => {
  const response = await fetch("http://localhost:9000/todos");

  // const sleep = (ms = 1500) => new Promise((r) => setTimeout(r, ms));
  // await sleep(3000);

  return await response.json();
};

const List = async () => {
  const todos = await fetchTodos();

  return (
    <div className="space-y-4">
      <Items {...{ todos }} />
    </div>
  );
};

export default List;
