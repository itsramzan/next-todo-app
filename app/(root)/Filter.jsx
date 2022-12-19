"use client";

import React from "react";

const filters = [
  { id: 1, text: "All", value: "" },
  { id: 2, text: "Completed", value: "completed" },
  { id: 3, text: "Uncompleted", value: "uncompleted" },
];

const Filter = ({ todos, filter, setFilter }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
      <p className="text-xl text-white font-semibold">
        Todo Lists ({todos?.length})
      </p>

      <div className="flex items-center gap-4">
        {filters.map((item) => (
          <FilterBtn key={item.id} {...{ data: item, filter, setFilter }} />
        ))}
      </div>
    </div>
  );
};

export default Filter;

const FilterBtn = ({ data, filter, setFilter }) => {
  const { text, value } = data;

  return (
    <button
      onClick={() => setFilter(value)}
      className={`text-sm bg-white px-2 py-1 rounded-md cursor-pointer ${
        filter === value && "bg-pink-700 text-white font-semibold"
      }`}
    >
      {text}
    </button>
  );
};
