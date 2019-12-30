import React, { Fragment } from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';

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
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                主页
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/category'>
                种类
              </Link>
            </li>
            <li>
              <Link className='nav-link' to='/link'>
                连接
              </Link>
            </li>
          </ul>
          <Search />
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>
                登陆
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/register'>
                注册
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
