import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import products from "../ProductsArray";

const Products = () => {
  return (
    <div className="mt-20 bg-gray-50 p-5">
      <input
        type="text"
        className="w-full px-4 py-2 border-none lg:text-5xl text-3xl outline-none focus:ring-0 focus:outline-none bg-gray-50 text-gray-500"
        placeholder="ابحث عن منتجك"
      />
      <hr />
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center gap-5 p-2 bg-white"
          >
            <Link to={`/ProductDetails/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="max-w-[250px]"
              />
            </Link>
            <div>
              <p className="font-bold text-right mb-3 text-2xl">
                {product.name}
              </p>
              <p className="max-w-[350px] text-right text-sm">
                {product.description}
              </p>
              <div className="flex items-center gap-5 justify-between mt-2">
                <button className="bg-lime-500 text-white font-bold px-3 py-2 text-sm flex items-center gap-2">
                  <CiShoppingCart size={20} /> اضف الي السلة
                </button>
                <p className="flex items-center flex-col">
                  {/* <span className="text-sm font-bold">السعر</span> */}
                  <p className="text-xl font-bold">${product.price}</p>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
