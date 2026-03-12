import React from "react";
import "./BlogHero.css";

const BlogHero = () => {
  return (
    <div className="blogListHeaderContainer">
      <div className="blog-container">
        <div className="blog-banner">
          <div className="blog-hero-content">
            <h1>The Blog</h1>
            <div className="blog-category-btns">
              <button>All</button>
              <button>company</button>
              <button>fashine</button>
              <button>style</button>
              <button>trends</button>
              <button>beauty</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
