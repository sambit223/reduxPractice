import React, { useEffect, useState } from "react";
import axios from "axios";

const Pagination = () => {
  const [product, setProducts] = useState([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const fetchProds = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res?.data?.products);
    };
    fetchProds();
  }, []);

  const prevHandler = () => {
    if(page > 1) {
      setPage((prev)=>prev -1) ;
    } 
  }
  
  const nextHandler = () => {
    if(page < product.length / 10)
    setPage((prev)=>prev + 1) ;
  }

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {product.slice(page * 10 - 10, page * 10).map((prod) => {
          return (
            <div className="border border-black flex flex-col w-[12rem] h-[15rem] m-4">
              <img src={prod?.images[0]} alt=""/>
              <div>{prod?.title}</div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <button className="border border-black px-2 m-4" onClick={prevHandler}>Prev</button>
        <span>{page}</span>
        <button className="border border-black px-2 m-4" onClick={nextHandler}>next</button>
      </div>
    </>
  );
};

export default Pagination;
