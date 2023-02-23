import React from 'react';
import { BsArrowDownUp } from 'react-icons/bs';
import "./ScrollButton.css"

const ScrollButton = ({ direction, visible }) => {
  const handleClick = () => {
    if (direction === 'up') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <button
      className={`scroll-${direction}-button ${visible ? 'visible' : ''}`}
      onClick={handleClick}
    >
      {/* {direction === 'up' ? 'BsArrowDownUp' : 'down'} */}
      <BsArrowDownUp/>
    </button>
  );
};

export default ScrollButton;