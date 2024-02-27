const HeroSection = () => {
  return (
    <main className="parent_container container">
      <div className="main_content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p> Also Available on</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon.png" />
            <img src="/images/flipkart.png" alt="flipkart.png" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoe_image" />
      </div>
    </main>
  );
};

export default HeroSection;