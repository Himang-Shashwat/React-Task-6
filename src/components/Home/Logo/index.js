import React from 'react';
import LogoH from '../../../assets/images/My_Photo.png'
import './index.scss';

const Logo = () => {
  return (
    <div className="image-container">
      <img
        src={LogoH}
        alt="My Photo"
      />
    </div>
  );
}

export default Logo;
