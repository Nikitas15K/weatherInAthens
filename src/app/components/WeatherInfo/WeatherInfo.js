'use client';

import { createPortal } from 'react-dom';
import { useState } from 'react';
import './WeatherInfo.css';

const WeatherInfo = ({ children, activator }) => {
  const [showWeatherInfo, setShowWeatherInfo] = useState(false);

  const content = showWeatherInfo && (
    <div className="overlay">
      <div className="modal">
        <button
          className="modal-close"
          onClick={() => setShowWeatherInfo(false)}
        >
          X
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
  return (
    // React does *not* create a new div. It renders the children into parent component when sth is hidden.
    // activator brings it to life
    <>
      {activator({ setShowWeatherInfo })}
      {createPortal(content, document.body)}
    </>
  );
};

export default WeatherInfo;
