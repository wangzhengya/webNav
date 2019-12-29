import React, { Fragment } from 'react';
import Search from './Search';

const Navbar = () => {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='./'>
          Web Nav
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

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link'>
                主页 <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>种类</a>
            </li>
            <li>
              <a className='nav-link'>链接</a>
            </li>
          </ul>
          <Search />
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link'>登录</a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
