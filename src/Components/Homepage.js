import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/CartSlice";
import { STATUSES, fetchProducts } from "../Store/ProductSlice";

const Homepage = () => {
  const { data, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  } , []);

  const addHandler = (product) => {
    dispatch(add(product));
  };

  return (
    <div>
      <div>List Of Items</div>
      {status === STATUSES.LOADING && (
        <div>
          <h2>Page is Loading</h2>
        </div>
      )}
      {status === STATUSES.ERROR && (
        <div>
          <h2>An Error Occured</h2>
        </div>
      )}
      {status === STATUSES.SUCCESS && (
        <div className="flex flex-wrap">

          {data?.map((elem) => {
            const truncatdTitle = elem?.title.slice(0, 30);
            const displaytitle =
              truncatdTitle.length < 30 ? elem.title : truncatdTitle + "...";
            return (
              <div
                key={elem?.id}
                className="border w-[12rem] h-[18rem] m-4 flex flex-col justify-center items-center p-2 gap-2 flex-wrap"
              >
                <img className="w-[4rem] h-[6rem]" src={elem?.image} alt="" />
                <h2>{displaytitle}</h2>
                <button
                  className="border border-black p-1 bg-blue-200"
                  onClick={() => {
                    addHandler(elem);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Homepage;
