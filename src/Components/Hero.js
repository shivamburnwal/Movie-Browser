import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Hero = ({ text, backgroundImage, children }) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const maxHeight = '88vh';
  const minHeight = 70;

  useEffect(() => {
    if (backgroundImage) {
      const image = new Image();
      image.src = backgroundImage;
      image.onload = () => {
        setContainerHeight(image.height > maxHeight ? maxHeight : image.height);
      };
    } else {
      setContainerHeight(minHeight);
    }
  }, [backgroundImage, minHeight, maxHeight]);

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  };

  const backgroundStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    height: containerHeight > maxHeight ? maxHeight : containerHeight,
    maxHeight: maxHeight,
    position: 'relative',
  };

  const contentStyle = {
    backgroundColor: backgroundImage ? '' : '#2F4F4F',
  };

  return (
    <div className="hero-container mt-3" style={backgroundStyle}>
      {backgroundImage && <div style={overlayStyle}></div>}
      <div className="hero-content" style={contentStyle}>
        {!backgroundImage && (
          <h1 className="hero-text">{text}</h1>
        )}
        {children}
      </div>
    </div>
  );
};

Hero.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  children: PropTypes.node
};

export default Hero;