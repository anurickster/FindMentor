import React, { useEffect } from 'react';
import './module.Navigationbar.css';
import RenderList from './NavList';
import decode from './../../addons/tokenDecoder';

const Navigationbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light '>
        <a className='navbar-brand mx-5' href='/homepage'>
          FindMentor
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className='collapse navbar-collapse justify-content-end mx-5'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav ml-auto '>
            <RenderList />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigationbar;
