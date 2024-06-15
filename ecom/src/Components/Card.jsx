import React from "react";

const Card = ({ item }) => {
  console.log({ item });

  return (
    <div className="h-[420px] w-64 cursor-pointer   p-3 border-2 rounded-2xl shadow-xl hover:shadow-xl hover:shadow-violet-500 hover:delay-100 hover:transition-all hover:ease-in-out">
      <img src={item.image} className="h-52 w-full "></img>
      <div className="flex flex-col flex-grow overflow-hidden  space-y-1">
        <h1 className="h-12 align-middle text-pretty  font-semibold line-clamp-2">{item.title}</h1>
        <h1 className="text-2xl font-medium">${item.price}</h1>
        <h1 className="font-bold">Rating : {item.rating?.rate}</h1>
      </div>
      <button className="h-8 w-full rounded-lg font-bold text-white lg:mt-8 bg-violet-500 align-middle hover:scale-105 hover:transition-all ease-in-out">
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
