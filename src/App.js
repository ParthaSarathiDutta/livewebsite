import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing-root">
      <header className="landing-header">
        <div className="logo">Morning Hash</div>
        <nav className="nav">
          <a href="#blog" className="nav-link">
            Blog
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
        </nav>
      </header>
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Corned Beef Hash & Coffee:
            <br />
            The Perfect Morning 
          </h1>
          <p className="hero-subtitle">
            Discover why corned beef hash, paired with a fresh cup of coffee, is the ultimate way to start your day.
          </p>
          <a href="#blog" className="cta-button">
            Read the Blog
          </a>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
            alt="Corned beef hash breakfast"
          />
        </div>
      </main>
      <section id="blog" className="blog-highlight">
        <h2 className="blog-title">Why Corned Beef Hash is the Best Breakfast</h2>
        <p className="blog-meta">By Jane Doe · May 15, 2025</p>
        <div className="blog-content">
          <p>
            There’s something magical about the combination of crispy, savory corned beef hash and a steaming mug of coffee. The golden potatoes, tender beef, and perfectly caramelized onions create a comforting, hearty meal that energizes you for the day ahead.
          </p>
          <p>
            Pair it with freshly brewed coffee, and you have a breakfast that’s both satisfying and invigorating. The rich, bold flavors of coffee perfectly complement the saltiness of the hash, making each bite and sip a celebration of morning bliss.
          </p>
          <p>
            Whether you’re starting a busy workday or enjoying a slow weekend, corned beef hash and coffee is the breakfast you deserve.
          </p>
        </div>
      </section>
      <footer className="footer">
        &copy; 2025 Morning Hash. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
