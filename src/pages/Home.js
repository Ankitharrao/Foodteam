import React from 'react';
import './Home.css'; 
import {Link} from 'react-router-dom'

const Home = () => {

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home-header">
        <h1>Welcome to STARDUCKS🌟</h1>
        <p>Your one-stop destination for delicious and freshly prepared meals</p>
        <button className="order-now-btn" ><Link to="/menu">Order Now</Link></button>
      </header>

      {/* Featured Menu Section */}
      <section className="featured-menu">
        <h2>Featured Menu Items</h2>
        <div className="menu-items">
          <div className="menu-item">
            <img src="https://herbsandflour.com/wp-content/uploads/2023/10/Crispy-Vegetable-Spring-Rolls-Recipe.jpg" alt="Spring Rolls" />
            <h3>Spring Rolls</h3>
            <p>Crunchy, crispy, and filled with veggies</p>
            <p className="price">₹150</p>
            <button className="order-btn" >Order Now</button>
          </div>
          <div className="menu-item">
            <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg" alt="Paneer Butter Masala" />
            <h3>Paneer Butter Masala</h3>
            <p>Rich and creamy gravy with soft paneer cubes</p>
            <p className="price">₹250</p>
            <button className="order-btn">Order Now</button>
          </div>
          <div className="menu-item">
            <img src="https://images.getrecipekit.com/20211124220241-veg-20biryani.jpg?aspect_ratio=1:1&quality=90&auto_optimize=medium" alt="Veg Biryani" />
            <h3>Veg Biryani</h3>
            <p>Aromatic basmati rice with mixed vegetables and spices</p>
            <p className="price">₹220</p>
            <button className="order-btn">Order Now</button>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="promotions">
        <h2>Seasonal Promotions</h2>
        <div className="promo-items">
        <div className="promo-item">
          <img src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Traditional-Pumpkin-Pie_EXPS_FT23_9287_JR_0907_9.jpg" alt="Pumpkin Pie" />
          <h3>Try Our Pumpkin Pie!</h3>
          <p>Limited-time seasonal dessert now available. Don’t miss out!</p>
          <button className="order-btn">Order Now</button>
        </div>
        <div className="promo-item">
          <img src="https://img.pikbest.com/origin/10/11/30/36CpIkbEsT8jT.jpg!w700wp" alt="Deluxe Pizza" />
          <h3>Deluxe Pizza Combo</h3>
          <p>Get a 10% discount when you order a Deluxe Pizza with a drink!</p>
          <button className="order-btn">Order Now</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"The food here is absolutely amazing! The Paneer Butter Masala is to die for!"</p>
          <h4>- Radhika S.</h4>
        </div>
        <div className="testimonial">
          <p>"I love the Veg Biryani! Perfectly spiced and always fresh."</p>
          <h4>- Pranav M.</h4>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="home-footer">
        <div className="footer-links">
          <a href="/menu">Menu</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        <p>&copy; 2024 Food Haven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
