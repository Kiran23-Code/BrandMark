import React from 'react';
import WeatherWidget from './WeatherWidget';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="brand-name">Brand Mark</div>
      <WeatherWidget />
    </header>
  );
}

export default Header;
