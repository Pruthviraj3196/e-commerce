import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../redux/slices/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [userDetails, setUserDetails] = useState({ firstName: "", lastName: "", address: "" });
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (!userDetails.firstName || !userDetails.lastName || !userDetails.address) {
      alert("Please fill in all required fields.");
      return;
    }

    setOrderSuccess(true);
    dispatch(clearCart()); // Clear cart after successful order
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      {cartItems.map((item) => (
        <div key={item.id} className="border p-4 mb-2">
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <input
            type="number" min="1" value={item.quantity}
            onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
            className="border p-1 w-16"
          />
          <button onClick={() => dispatch(removeFromCart(item.id))}
            className="bg-red-500 text-white px-2 ml-2">
            Remove
          </button>
        </div>
      ))}
      <p className="font-bold text-lg mt-4">Total: ${total}</p>

      <div className="mt-6">
        <h3 className="text-lg font-bold">Enter Your Details</h3>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />

        <button
          onClick={handleOrder}
          className="w-full bg-red-500 text-white p-2 rounded mt-3"
        >
          Place Order
        </button>
      </div>

      {orderSuccess && (
        <p className="text-green-600 font-bold text-lg mt-4">
          🎉 Order placed successfully!
        </p>
      )}
    </div>
  );
}

export default Cart;
