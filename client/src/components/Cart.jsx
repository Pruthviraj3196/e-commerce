import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../redux/slices/cartSlice";
import axios from "axios";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [userDetails, setUserDetails] = useState({ firstName: "", lastName: "", address: "" });
  const [orderStatus, setOrderStatus] = useState({ success: false, message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleOrder = async () => {
    if (!userDetails.firstName || !userDetails.lastName || !userDetails.address) {
      setOrderStatus({ success: false, message: "⚠️ Please fill in all required fields." });
      return;
    }

    // const orderData = {
    //   user: userDetails,
    //   items: cartItems,
    //   total,
    // };

    const orderData = {
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      address: userDetails.address,
      items: cartItems,  // 🔥 Change 'products' to 'items'
    };
    
    
    

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8080/api/v1/orders", orderData);

      if (response.status === 201) {
        setOrderStatus({ success: true, message: "🎉 Order placed successfully!" });
        dispatch(clearCart()); // Clear the cart
      } else {
        setOrderStatus({ success: false, message: "❌ Order failed. Please try again." });
      }
    } catch (error) {
      setOrderStatus({ success: false, message: "❌ Server error. Try again later." });
    } finally {
      setLoading(false);
    }
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
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
            className="border p-1 w-16"
          />
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="bg-red-500 text-white px-2 ml-2"
          >
            Remove
          </button>
        </div>
      ))}

      <p className="font-bold text-lg mt-4">Total: ${total}</p>

      {/* User Details Form */}
      <div className="mt-6">
        <h3 className="text-lg font-bold">Enter Your Details</h3>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />

        <button
          onClick={handleOrder}
          className="w-full bg-red-500 text-white p-2 rounded mt-3"
          disabled={loading}
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </div>

      {/* Order Status Message */}
      {orderStatus.message && (
        <p className={`mt-4 text-lg font-bold ${orderStatus.success ? "text-green-600" : "text-red-600"}`}>
          {orderStatus.message}
        </p>
      )}
    </div>
  );
}

export default Cart;
