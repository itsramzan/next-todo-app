"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const [text, setText] = useState("");

  const { refresh } = useRouter();

  const createTodo = async (e) => {
    e.preventDefault();

    if (text) {
      const data = { text, completed: false };

      await fetch("http://localhost:9000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      await fetch("/api/revalidate");

      refresh();
      setText("");
    } else {
      alert("Todo can't be empty");
    }
  };

  return (
    <form className="w-full" onSubmit={createTodo}>
      <input
        type="text"
        placeholder="Write your todo..."
        required
        spellCheck="false"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 bg-white rounded-md outline-none focus:outline-none duration-500"
      />
    </form>
  );
};

export default Form;
