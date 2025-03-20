import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {status === "loading" && <p className="text-center text-lg">Loading...</p>}
      {status === "succeeded" &&
        items.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md p-4 bg-white transition transform hover:scale-105 hover:shadow-lg"
          >
            <div className="relative w-full h-64 overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="font-semibold text-lg mt-3">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="text-xl font-bold text-gray-800 mt-2">${product.price}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="w-full bg-red-500 text-white py-2 px-4 mt-3 rounded-lg hover:bg-red-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  );
}

export default ProductList;
