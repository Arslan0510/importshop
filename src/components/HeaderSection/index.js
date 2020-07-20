import React from 'react';
import image from '../../assets/images/logo.png';

function index() {
  return (
    <header
      id='header_wrapper'
      style={{ zIndex: 'auto', position: 'static', top: 'auto' }}
    >
      <div class='container'>
        <div class='header_box'>
          <div class='logo'>
            <a href='/#'>
              <img src={image} alt='logo' />
            </a>
          </div>
          <nav class='navbar navbar-inverse' role='navigation'>
            <div class='navbar-header'>
              <button
                type='button'
                id='nav-toggle'
                class='navbar-toggle'
                data-toggle='collapse'
                data-target='#main-nav'
              >
                <span class='sr-only'>Toggle navigation</span>
                <span class='icon-bar'></span> <span class='icon-bar'></span>
                <span class='icon-bar'></span>
              </button>
            </div>
            <div id='main-nav' class='collapse navbar-collapse navStyle'>
              <ul class='nav navbar-nav' id='mainNav'>
                <li class='active'>
                  <a href='/' class='scroll-link'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='/about' class='scroll-link'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='/program' class='scroll-link'>
                    Program
                  </a>
                </li>
                <li>
                  <a href='/gallery' class='scroll-link'>
                    Photo Gallery
                  </a>
                </li>
                <li>
                  <a href='/family' class='scroll-link'>
                    Family
                  </a>
                </li>
                <li>
                  <a href='/contact' class='scroll-link'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default index;
