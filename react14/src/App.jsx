import React, { useState } from "react";

const App = () => {
  const [val, setval] = useState({ name: "Adarsh", isBanned: false });

  return (
    <div className="px-4">
      <div>Name : {val.name}</div>
      <p>isBanned : {val.isBanned.toString()}</p>
      <button
        onClick={() => setval({ ...val, isBanned: !val.isBanned })}
        className={`px-2 py-1 ${val.isBanned ? "bg-red-500" : "bg-blue-500"} text-white active:scale-95 mt-2 rounded-md`}
      >
        chnage value
      </button>
    </div>
  );
};

export default App;
