import React, { useState, useEffect } from 'react';
import './navbar.css';

export default function HearderNav() {
  const [scrolled, setScrolled] = useState(false);
  const handleClick = () => {
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    navLinks.classList.toggle('open');
    if (navLinks.classList.contains('open')) {
      document.querySelector('.gone').classList.remove('fade-out');
      document.querySelector('.gone').classList.add('fade-in');
      console.log('yes');
    } else {
      document.querySelector('.gone').classList.remove('fade-in');
      document.querySelector('.gone').classList.add('fade-out');
      console.log('no');
    }
    links.forEach((link) => {
      link.classList.toggle('fade');
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      console.log(window.scrollY);
      if (isTop !== true) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);
  return (
    <>
      <nav className={scrolled ? 'fill scroll' : 'fill'}>
        <div className='hamburger' onClick={handleClick}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
        <ul className='nav-links'>
          <li>
            <a href='/dashboard'>Home</a>
          </li>
          <li>
            <a href='/stationery'>Stationery</a>
          </li>
          <li>
            <a href='/program'>Birthday & Party</a>
          </li>
          <li>
            <a href='/art'>Art & Craft</a>
          </li>
          <li>
            <a href='/electronics'>Electronics</a>
          </li>
          <li>
            <a href='/makeup'>Makeup</a>
          </li>
          <li>
            <a href='/bags'>Bags</a>
          </li>
          <li>
            <a href='/shampoo'>Shampoo & Conditioner</a>
          </li>
        </ul>
      </nav>

      {/* <section className='landing'>
        <h1>Dots</h1>
      </section> */}
    </>
  );
}
