import React, { useState } from 'react';



import './ImageList.css';


const ImageList = ({ wordsAndImages }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [popupIndex, setPopupIndex] = useState(null);

  if (!wordsAndImages || !Array.isArray(wordsAndImages)) {
    return <div>No words or images found.</div>;
  }

  const handleMouseEnter = (index) => {
    console.log(`Popup index is: ${popupIndex}`);

    setHoveredIndex(index);
    setPopupIndex(index); 
    console.log(`Hovered on index: ${index}`);
    console.log(`Popup index set to: ${popupIndex}`);
 
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setPopupIndex(null);
  };

  const handleTouchOrClick = (index) => {
      setPopupIndex(index);
      console.log(`Touched or clicked on index: ${index}`);
  };

  return (
    <div className="image-grid">
      {wordsAndImages.map((item, index) => (
        <div
          key={index}
          className="image-card"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleTouchOrClick(index)}
          onTouchStart={() => handleTouchOrClick(index)}
        >
          <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt={item.fi} />
          <div className="caption">
            {hoveredIndex === index ? item.en : item.fi}
          </div>
         {item.popup && popupIndex === index && (
            <div
              className="popup-box"
              dangerouslySetInnerHTML={{ __html: item.popup }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageList;




/*

// ImageList.js
import React, { useState } from 'react';
import './ImageList.css';

const ImageList = ({ wordsAndImages }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // ✅ Fallback if data is missing
  if (!wordsAndImages || !Array.isArray(wordsAndImages)) {
    return <div>No words or images found.</div>;
  }

  return (
    <div className="image-grid">
      {wordsAndImages.map((item, index) => (
        <div
          key={index}
          className="image-card"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onTouchStart={() => setHoveredIndex(index)}
        >
          <img src={`/${item.img}`} alt={item.fi} />
          <div className="caption">
            {hoveredIndex === index ? item.en : item.fi}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
*/