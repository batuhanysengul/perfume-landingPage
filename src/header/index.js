import React from "react";
import "./style.css";
import { useState, useEffect } from 'react';

export default function Header() {
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    
    <div className={`nav`}>
        <ul>
            <li>about us</li>
            <li>work</li>
            <li>perfumes</li>
            <li>colognes</li>
        </ul>
    </div>
    
  );
}
