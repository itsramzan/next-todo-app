"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Item = ({ todo }) => {
  const { id, text, completed } = todo;

  const { refresh } = useRouter();

  const updateTodo = async () => {
    await fetch(`http://localhost:9000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, completed: !completed }),
    });

    await fetch("/api/revalidate");

    refresh();
  };

  const deleteTodo = async () => {
    await fetch(`http://localhost:9000/todos/${id}`, {
      method: "DELETE",
    });

    await fetch("/api/revalidate");

    refresh();
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-white rounded-md space-y-2"
    >
      <p className="text-lg text-pink-700 font-semibold">{text}</p>
      <p className="text-xs text-gray-500 font-semibold">
        {completed ? "Completed" : "Uncompleted"}
      </p>
      <div className="flex justify-end gap-4">
        <button
          onClick={updateTodo}
          className="text-sm font-semibold bg-indigo-700 text-white px-2 py-1 rounded-md cursor-pointer"
        >
          Update
        </button>
        <button
          onClick={deleteTodo}
          className="text-sm font-semibold bg-pink-700 text-white px-2 py-1 rounded-md cursor-pointer"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default Item;
