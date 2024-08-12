import React from 'react';
import placeholderImg from './img1.jpg'
import './MainSection.css';

function MainSection() {
  return (
    <section className="main-section">
      <div className="text-content">
        <h2>Bran Mark</h2>
        <p>
        Create a unique, professional <br>
        </br>logo for your business <br />
        Kickstart your brand with business card designs, social <br />media graphics, app icons, letter heads and more
        </p>
        <button>Create my logo</button>
      </div>
      <div className="image-content">
        <img src={placeholderImg} alt="Placeholder" />
      </div>
    </section>
  );
}

export default MainSection;
