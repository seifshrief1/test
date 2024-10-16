import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import productsData from "../../Components/ProductsArray";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const [productQuantity, setProductQuantity] = useState(
    productsData.map((product) => ({
      ...product,
      quantity: 1,
    }))
  );

  const incrementQuantity = (id) => {
    const newQuantity = productQuantity.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });

    setProductQuantity(newQuantity);
  };

  const decrementQuantity = (id) => {
    const newQuantity = productQuantity.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });

    setProductQuantity(newQuantity);
  };

  return (
    <div className="flex flex-col justify-center items-center h-auto">
      <Navbar />
      <div className="w-[100vw] justify-between flex flex-col md:flex-row">
        <div className="md:w-1/3 lg:w-[30vw] lg:h-[100vh] h-fit bg-gray-200">
          <h1 className="text-3xl mr-10 items-center font-bold mt-28 text-right">
            تفاصيل السلة
          </h1>
          <div className="flex flex-col gap-5 items-start p-10">
            <div className="flex justify-between items-center w-full">
              <h2 className="text-2xl font-bold text-gray-700">الشحن</h2>
              <p className="text-xl">$2.00</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <h2 className="text-2xl font-bold text-gray-700">الاجمالي</h2>
              <p className="text-xl">
                ${productQuantity.reduce((a, b) => a + b.price * b.quantity, 0)}
              </p>
            </div>
          </div>
          <div className="p-10">
            <button className="w-full bg-lime-500 text-white p-2">الدفع</button>
          </div>
        </div>
        <div className="md:w-2/3 lg:w-[70vw]">
          <div className="flex justify-between p-5 items-center">
            <h1 className="text-4xl font-bold mt-20 text-right">السلة</h1>
            <p className="items-center text-gray-500 mt-20 text-right">
              {productQuantity.length} عناصر
            </p>
          </div>
          <hr className="mt-1" />
          <div>
            {productQuantity.map((product) => (
              <div key={product?.id}>
                <div className="flex justify-between p-5 items-center flex-col md:flex-row">
                  <div className="flex items-center gap-5 mb-4 md:mb-0">
                    <img
                      src={product?.image}
                      alt={product?.name}
                      className="w-[100px] h-[100px] bg-gray-100"
                    />
                    <div>
                      <h1 className="lg:text-2xl text-xl font-bold text-right">
                        {product?.name}
                      </h1>
                      <p className="text-gray-500 text-right max-w-[300px] text-sm">
                        {product?.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mb-4 md:mb-0">
                    <button
                      onClick={() => incrementQuantity(product?.id)}
                      className="bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center text-center"
                    >
                      +
                    </button>
                    <p>{product?.quantity}</p>
                    <button
                      onClick={() => decrementQuantity(product?.id)}
                      className="bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center text-center"
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <h1 className="lg:text-2xl text-xl font-bold">
                      $
                      {product.quantity > 1
                        ? product?.price * product.quantity
                        : product?.price}
                    </h1>
                  </div>
                  <button className="bg-red-500 text-white w-8 h-8 rounded-full flex justify-center items-center text-center">
                    <FaTrash />
                  </button>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
