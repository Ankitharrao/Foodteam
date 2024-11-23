import React from 'react';
import './About.css'; // Import custom CSS for styling

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      {/* Header Section */}
      <header className="aboutus-header">
        <h1>About Us</h1>
        <p>Learn more about our story, our team, and what makes us unique</p>
      </header>

      {/* Our Story Section */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Food Haven was born from a simple idea: to provide high-quality, fresh, and delicious meals that bring joy to people. 
          Our journey started when a group of food enthusiasts decided to turn their passion for cooking into a business that could 
          serve everyone who loves food. From humble beginnings, we’ve grown into a beloved food destination with a diverse menu 
          that caters to every taste and dietary need.
        </p>
        <p>
          We believe in using only the freshest ingredients, locally sourced where possible, and providing meals that not only taste 
          great but are also nourishing. Our mission is to make every meal a celebration of flavor and creativity.
        </p>
      </section>

      {/* Meet The Team Section */}
      <section className="meet-the-team">
        <h2>Meet The Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://shrifiles.b-cdn.net/images/samplemd/chefs&head.jpg" alt="Chef John" />
            <h3>Chef John Doe</h3>
            <p>Founder & Head Chef</p>
            <p>
              With over 20 years of experience, Chef John has a deep passion for culinary art and a commitment to creating unique 
              dishes. His expertise lies in Indian and continental cuisines, making sure every dish tells a story of flavor.
            </p>
          </div>
          <div className="team-member">
            <img src="https://waterfdn.org/wp-content/uploads/2021/08/SL-1-scaled.jpg" alt="Sarah Smith" />
            <h3>Sarah Smith</h3>
            <p>Operations Manager</p>
            <p>
              Sarah ensures everything runs smoothly at Food Haven. From managing the kitchen to overseeing customer service, 
              her dedication to excellence ensures our customers always have a great experience.
            </p>
          </div>
          <div className="team-member">
            <img src="https://bernhart.com/wp-content/uploads/2017/11/pexels-photo-842567.jpeg" alt="Michael Brown" />
            <h3>Michael Brown</h3>
            <p>Marketing Lead</p>
            <p>
              Michael brings Food Haven to the world with creative marketing strategies. His deep understanding of branding and 
              online presence helps spread the word about our amazing food to a global audience.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="what-makes-us-unique">
        <h2>What Makes Us Unique</h2>
        <div className="unique-points">
          <div className="unique-point">
            <h3>Fresh & Local Ingredients</h3>
            <p>We prioritize locally sourced, organic ingredients that are both fresh and sustainable. Our dishes are always packed with flavor and nutrition.</p>
          </div>
          <div className="unique-point">
            <h3>Creative & Diverse Menu</h3>
            <p>Our menu blends tradition with innovation. Whether you’re craving authentic flavors or a modern twist, we’ve got something for everyone.</p>
          </div>
          <div className="unique-point">
            <h3>Customer-Centric Service</h3>
            <p>We go the extra mile to ensure that every customer feels like family. From special requests to ensuring your meal arrives perfect, we’re here to serve you.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="aboutus-footer">
        <div className="footer-links">
          <a href="/menu">Menu</a>
          <a href="/home">Home</a>
          <a href="/contact">Contact</a>
        </div>
        <p>&copy; 2024 Food Haven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
