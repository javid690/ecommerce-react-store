import React from "react";
import company from "../../assets/images/about.jpg";
import "./Story.css";
const OurStory = () => {
  return (
    <div className="story-container">
      <h2>Our Story</h2>
      <b>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </b>
      <p>
        Saw wherein fruitful good days image them, midst, waters upon, saw. Seas
        lights seasons. Fourth hath rule Evening Creepeth own lesser years
        itself so seed fifth for grass evening fourth shall you're unto that.
        Had. Female replenish for yielding so saw all one to yielding grass
        you'll air sea it, open waters subdue, hath. Brought second Made. Be.
        Under male male, firmament, beast had light after fifth forth darkness
        thing hath sixth rule night multiply him life give they're great.
      </p>
      <div className="mission-container">
        <div className="our-mission">
          <h3>Our Mission</h3>
          <p>
            Saw wherein fruitful good days image them, midst, waters upon, saw.
            Seas lights seasons. Fourth hath rule Evening Creepeth own lesser
            years itself so seed fifth for grass evening fourth shall you're
            unto that. Had. Female replenish for yielding so saw all one to
            yielding grass you'll air sea it, open waters subdue, hath. Brought
            second Made. Be. Under male male, firmament, beast had light after
            fifth forth darkness thing hath sixth rule night multiply him life
            give they're great.
          </p>
        </div>
        <div className="our-vission">
          <h3>Our Vission</h3>
          <p>
            Saw wherein fruitful good days image them, midst, waters upon, saw.
            Seas lights seasons. Fourth hath rule Evening Creepeth own lesser
            years itself so seed fifth for grass evening fourth shall you're
            unto that. Had. Female replenish for yielding so saw all one to
            yielding grass you'll air sea it, open waters subdue, hath. Brought
            second Made. Be. Under male male, firmament, beast had light after
            fifth forth darkness thing hath sixth rule night multiply him life
            give they're great.
          </p>
        </div>
      </div>
      <div className="company-container">
        <div className="company-banner">
          <img src={company} alt="company-banner" />
        </div>
        <div className="company-content">
          <h3>Company History</h3>
          <p>
            Saw wherein fruitful good days image them, midst, waters upon, saw.
            Seas lights seasons. Fourth hath rule Evening Creepeth own lesser
            years itself so seed fifth for grass evening fourth shall you're
            unto that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
