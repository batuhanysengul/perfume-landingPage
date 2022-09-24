import React from "react";
import "./style.css";
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div class="footer">
      <p><FaInstagram/></p>
      <p><FaTwitter/></p>
      <p><FaLinkedin/></p>
    </div>
  );
};

export default Footer;
