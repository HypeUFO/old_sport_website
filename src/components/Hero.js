import React, {Component} from 'react';
import {Parallax} from 'react-scroll-parallax';

const Hero = ({image, min, max, children}) => (
  <div className="hero-container">
    <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
      <div
        className="hero-image"
        style={{
        backgroundImage: `url(${image})`
      }}/>
    </Parallax>
    <div className="hero-children">{children}</div>
  </div>
);

export default Hero;
