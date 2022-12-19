"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Filter from "./Filter";
import Item from "./Item";

const Items = ({ todos }) => {
  const [filter, setFilter] = useState("");

  const filteredTodos = todos.filter((todo) => {
    if (filter) {
      const bool = filter === "completed" ? true : false;
      return todo.completed === bool;
    } else {
      return todo;
    }
  });

  return (
    <>
      <Filter {...{ todos: filteredTodos, filter, setFilter }} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {filteredTodos
            .sort((a, b) => b.id - a.id)
            .map((todo) => (
              <Item key={todo.id} {...{ todo }} />
            ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Items;
