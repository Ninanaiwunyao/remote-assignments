import React from "react";

const MainContent = ({ handleCTAClick, boxDisplay }) => {
  return (
    <main className="main-content">
      <section className="section">Section Title</section>
      <div className="grid-container">
        <div className="box">Content Box 1</div>
        <div className="box">Content Box 2</div>
        <div className="box">Content Box 3</div>
        <div className="box">Content Box 4</div>
      </div>
      <div className="btn" onClick={handleCTAClick}>
        Call to Action
      </div>
      <div className="hidden-box" style={{ display: boxDisplay }}>
        <div className="box">Content Box 5</div>
        <div className="box">Content Box 6</div>
        <div className="box">Content Box 7</div>
        <div className="box">Content Box 8</div>
      </div>
    </main>
  );
};

export default MainContent;
