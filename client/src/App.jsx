import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* Navbar */}
        <nav className="w-full fixed top-0 left-0 bg-gray-800 text-white shadow-md z-50">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            {/* Logo */}
            <NavLink to="/" className="text-2xl font-bold">
              E-Commerce
            </NavLink>

            {/* Nav Links */}
            <ul className="flex space-x-6">
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    `text-lg hover:text-gray-300 ${isActive ? "text-blue-400 font-semibold" : ""}`
                  }
                >
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `text-lg hover:text-gray-300 ${isActive ? "text-blue-400 font-semibold" : ""}`
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `text-lg hover:text-gray-300 ${isActive ? "text-blue-400 font-semibold" : ""}`
                  }
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* Page Content */}
        <div className="pt-16 container mx-auto p-4">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
