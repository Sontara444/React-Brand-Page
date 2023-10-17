import React, { useState } from "react";

function HeroSection() {
  const [action, setAction] = useState("")
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          numquam amet, modi aspernatur ea doloribus perferendis laboriosam
          possimus. Deleniti, officia.
        </p>

        <div className="hero-btn">
          <button className="primary-btn">Shop Now</button>
          <button className="secondary-btn" >Category</button>
        </div>
        <div className="shopping">
          <p> Also Available On</p>
        </div>
        <div className="brand-icons">
          <img className="amazon" src="./images/amazon.png" alt="amazon-logo" />
          <img className="flipkart" src="./images/flipkart.png" alt="flipkart-logo" />
        </div>
      </div>
      <div className="hero-image">
        <img  className="shoes" src="./images/shoe-img.png" alt="hero-img" />
      </div>
    </main>
  );
}

export default HeroSection;
