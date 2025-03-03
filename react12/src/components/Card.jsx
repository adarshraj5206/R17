import React from "react";

const Card = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1591270551371-3401a1a9382f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Name: "Gifts",
      desc: "Lorem ipsum dolor sit amet consectetur. ",
      instock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Name: "Amazon Basics",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      instock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1598327105740-820e04db502e?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Name: "Xaomi smartPhone",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      instock: true,
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10">
      {data.map((elem, idx) => (
        <div key={idx} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
          <div className="w-full h-32 ">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.Name}</h2>
            <p className="text-xs mt-3">{elem.desc}</p>
            <button className={`px-3 py-2 ${elem.instock ? 'bg-blue-400' : 'bg-red-500' } mt-3 rounded-md text-white active:scale-95 `}>{elem.instock ? "In Stock" : "Out of Stock"}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
