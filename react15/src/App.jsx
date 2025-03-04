import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="p-4">
      {val.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
      <button
        onClick={() =>
          setVal((prev) => prev.slice(0, prev.length - 1))
        }
        className="px-3 py-1 bg-blue-400 text-white rounded-md mt-2 mr-1 active:scale-95"
      >
        Delete one step
      </button>
      <button
        onClick={() =>
          setVal((prev) => [...prev, prev.length ? prev[prev.length - 1] + 1 : 1])
        }
        className="px-3 py-1 bg-blue-400 text-white rounded-md mt-2 active:scale-95"
      >
        Add one step
      </button>
    </div>
  );
};

export default App;
