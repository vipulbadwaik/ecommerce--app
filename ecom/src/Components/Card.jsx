import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const Card = ({ item }) => {
   
  const dispatch = useDispatch();

  const handleAddItem = (itemfromcart) =>{
      console.log("Item Added");
      dispatch(addItem(itemfromcart));
  }


  //console.log({ item });

  return (
    <div className="h-[386px] w-60 cursor-pointer    border-2 rounded-lg shadow-xl hover:shadow-lg hover:shadow-violet-500 hover:delay-100 hover:transition-all hover:ease-in-out">
      <img src={item.image} className="h-52 w-full p-6 "></img>
      <div className="flex flex-col flex-grow overflow-hidden px-3 space-y-1">
        <h1 className="h-12 align-middle text-pretty  font-semibold line-clamp-2">{item.title}</h1>
        <h1 className="text-2xl font-medium">${item.price}</h1>
        <h1 className="font-bold">Rating : {item.rating?.rate}</h1>
      </div>
      <button className="h-8 w-full  bottom-0 rounded-b-lg font-bold text-white lg:mt-8 bg-violet-500 align-middle  " onClick={()=>handleAddItem(item)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
