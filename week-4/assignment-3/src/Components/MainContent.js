import React from 'react';

const MainContent = ({ handleCTAClick, boxDisplay }) =>{
  const generateContentBox = (boxes) => {
    return boxes.map((content, index) => (
      <div key={index} className="box">
        {content}
      </div>
    ));
  };

  const contentBox = [
    "Content Box 1",
    "Content Box 2",
    "Content Box 3",
    "Content Box 4",
  ];

  const hiddenBoxes = [
    "Content Box 5",
    "Content Box 6",
    "Content Box 7",
    "Content Box 8",
  ];

  return (
    <main className='main-content'>
      <section className="section">Section Title</section>
      <div className='grid-container'>
        {generateContentBox(contentBox)}
      </div>
      <div className='btn' onClick={handleCTAClick}>
        Call to Action
      </div>
      <div className='hidden-box' style={ {display: boxDisplay} }>
        {generateContentBox(hiddenBoxes)}
      </div>
    </main>
  );
};

export default MainContent;