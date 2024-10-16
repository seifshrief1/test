import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import products from "../../Components/ProductsArray";
import { CiShoppingCart } from "react-icons/ci";

const ProductDetails = () => {
  const { id } = useParams();

  const productDetails = products.find((product) => product.id == id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  return (
    <div className="flex flex-col justify-center items-center h-auto">
      <Navbar />
      <div className="w-full flex justify-center mt-10">
        {productDetails && (
          <div className="lg:flex-row flex flex-col-reverse justify-around items-center w-[100%]">
            <div>
              <div>
                <h1
                  className="lg:text-5xl text-2xl font-bold text-right"
                  style={{ lineHeight: 1.2 }}
                >
                  {productDetails.name}
                </h1>
                <p className="text-lg font-semibold mt-5 text-right">
                  ${productDetails.price}
                </p>
              </div>
              <hr />
              <div className="flex gap-2 mt-5">
                <div className="w-5 h-5 bg-black/80 rounded-full border border-gray-500"></div>
                <div className="w-5 h-5 bg-black/70 rounded-full border border-gray-500"></div>
                <div className="w-5 h-5 bg-black/60 rounded-full border border-gray-500"></div>
                <div className="w-5 h-5 bg-black/50 rounded-full border border-gray-500"></div>
                <div className="w-5 h-5 bg-black/40 rounded-full border border-gray-500"></div>
                <div className="w-5 h-5 bg-black/30 rounded-full border border-gray-500"></div>
                <div className="w-5 h-5 bg-gray-500 rounded-full border border-gray-500"></div>
                <div className="w-5 h-5 bg-gray-300 rounded-full border border-gray-500"></div>
                <div className="w-5 h-5 bg-gray-200 rounded-full border border-gray-500"></div>
                <div className="w-5 h-5 bg-gray-100 rounded-full border border-gray-500"></div>
              </div>
              <div className="flex gap-2 mt-5">
                <div className="bg-transparent text-black border border-black w-8 h-8 text-center cursor-pointer flex items-center justify-center">
                  SM
                </div>
                <div className="bg-black text-white w-8 h-8 text-center cursor-pointer flex items-center justify-center">
                  MD
                </div>
                <div className="bg-black text-white w-8 h-8 text-center cursor-pointer flex items-center justify-center">
                  LG
                </div>
              </div>
              <div className="flex items-center gap-5">
                <button className="bg-lime-500 text-white px-3 py-2 flex items-center gap-2 mt-5 w-full text-center justify-center">
                  اضف الى السلة
                  <CiShoppingCart />
                </button>
                <button className="bg-transparent border border-lime-500 text-lime-500 w-[100px] px-3 py-2 flex items-center gap-2 mt-5 text-center justify-center">
                  شراء
                </button>
              </div>
              <p className="mt-5 max-w-[400px] text-right">
                {productDetails.description}
              </p>
            </div>
            <img
              src={productDetails.image}
              alt={productDetails.name}
              className="lg:w-[500px] md:w-[400px] bg-gray-100/30 p-5"
            />
          </div>
        )}
      </div>
      <h1 className="text-2xl font-bold mt-10">منتجات مشابهة</h1>
      <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {products.map((product) => (
          <div className="flex flex-col items-center gap-5 p-2 bg-white">
            <Link to={`/ProductDetails/${product.id}`} key={product.id}>
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
                <button className="bg-lime-500 text-white px-3 py-2 text-sm flex items-center gap-2">
                  اضف الي السلة <CiShoppingCart />
                </button>

                <p className="flex items-center flex-col">
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

export default ProductDetails;
