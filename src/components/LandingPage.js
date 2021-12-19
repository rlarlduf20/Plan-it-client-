import React from 'react';
import './LandingPage.css';
import Image from '../image.png';
const LandingPage = () => {
  return (
    <div className="Landing">
      <span className="main_text">Plan-It!</span>
      <img className = "main_image" src={Image} alt = "이미지" />
    </div>
  )
}

export default LandingPage;