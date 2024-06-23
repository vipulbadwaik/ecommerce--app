import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex  mt-9">
      <div className=" p-11">
        {cartItems.map((items) => {
          return (
            <div className="h-48 w-72 border-2 bg-slate-400 flex justify-around">
              <img src={items.image} className="h-24 w-20"/>
              <div className="flex-col">
              <h1>{items.title}</h1>
              <button>
                Add
              </button>
                </div>
            </div>
          );
        })}
      </div>
      
      <div>

      </div>
    </div>
  );
};

export default Cart;
