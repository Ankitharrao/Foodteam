import React, { useState } from "react";
import "./Reviews.css";

const Review = () => {
  // State to store the list of reviews
  const [reviews, setReviews] = useState([
    {
      name: "John Doe",
      rating: 5,
      message: "Amazing food and great service! Will definitely come back.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      message: "Loved the dessert options. Slightly expensive, but worth it.",
    },
  ]);

  // State to store user input for the new review
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure required fields are filled
    if (!formData.name || !formData.rating || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Add the new review to the list
    setReviews([...reviews, formData]);

    // Reset the form
    setFormData({ name: "", email: "", message: "", rating: "" });

    alert("Thank you for your feedback!");
  };

  return (
    <div className="review-container">
      <h1>Customer Reviews</h1>

      {/* Review Form */}
      <div className="review-form">
        <h2>Leave a Review</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name <span>*</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email (Optional)
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Rating <span>*</span>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </label>
          <label>
            Message <span>*</span>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Display Reviews */}
      <div className="review-list">
        <h2>What Our Customers Say</h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review-card">
              <h3>{review.name}</h3>
              <p>Rating: {review.rating} ⭐</p>
              <p>{review.message}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to leave feedback!</p>
        )}
      </div>
    </div>
  );
};

export default Review;
