import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <div id="footer">
      <span class="copyright">
        © {new Date().getFullYear()} Benjamin Rutledge
      </span>
    </div>
  );
};

export default Footer;
