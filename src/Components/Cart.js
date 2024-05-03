import React from "react";
import { useSelector  , useDispatch} from "react-redux";
import {remove} from "../Store/CartSlice" ;

const Cart = () => {
    const dispatch = useDispatch() ;
  const items = useSelector((state) => state.cart);
  const deleteHandler = (product) => {
    dispatch(remove(product)) ;
  }
  return (
    <div>
      {items.map((elem) => {
        return (
          <div
            key={elem?.id}
            className="border w-[12rem] h-[18rem] m-4 flex flex-col justify-center items-center p-2 gap-2 flex-wrap"
          >
            <img className="w-[4rem] h-[6rem]" src={elem?.image} alt="" />
            <h2>{elem?.title.slice(0, 20)}</h2>
            <button className="border border-black p-1 bg-red-500 text-white"
            onClick={()=>{
                deleteHandler(elem?.id) ;
            }}
            >
              remove from cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
