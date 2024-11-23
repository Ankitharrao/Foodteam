import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Custom.css";

const Custom = () => {
  const location = useLocation();
  const item = location.state?.item; // Retrieve item data from navigation state

  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [size, setSize] = useState("Medium");

  const availableAddOns = [
    { name: "Extra Cheese", price: "₹30" },
    { name: "Olives", price: "₹20" },
    { name: "Jalapenos", price: "₹25" },
  ];

  const handleQuantityChange = (action) => {
    if (action === "increment") setQuantity(quantity + 1);
    if (action === "decrement" && quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddOnToggle = (addOnName) => {
    setSelectedAddOns((prev) =>
      prev.includes(addOnName)
        ? prev.filter((item) => item !== addOnName)
        : [...prev, addOnName]
    );
  };

  const handleAddToCart = () => {
    alert(`Item added to cart with quantity: ${quantity}, size: ${size}, add-ons: ${selectedAddOns.join(", ")}`);
  };

  return (
    <div className="order-customization-container">
      <header className="customization-header">
        <h1>Customize Your Order</h1>
        <p>Personalize your meal exactly the way you like it!</p>
      </header>

      {/* Item Details Section */}
      {item && (
        <section className="item-details">
          <img src={item.image} alt={item.name} className="item-image" />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p className="base-price">Base Price: {item.price}</p>
        </section>
      )}

      {/* Add other customization sections */}
      {/* Size Selection, Add-Ons, Quantity Selection, and Add to Cart Button */}
      <section className="quantity-selection">
        <h3>Quantity</h3>
        <div className="quantity-controls">
          <button onClick={() => handleQuantityChange("decrement")}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange("increment")}>+</button>
        </div>
      </section>

      <section className="add-to-cart">
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </section>
    </div>
  );
};

export default Custom;
