import React, { Fragment, useContext, useEffect } from 'react';
import Search from '../../components/layout/Search';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import CatetoryContext from '../../context/category/CategoryContext';
import LinkContext from '../../context/link/LinkContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const categoryContext = useContext(CatetoryContext);
  const linkContext = useContext(LinkContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;
  const { clearCategories } = categoryContext;
  const { clearLinks } = linkContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    clearCategories();
    clearLinks();
  };

  const authLinks = (
    <Fragment>
      <li className='nav-item dropdown'>
        <a
          className='nav-link dropdown-toggle'
          id='navbarDropdown'
          role='button'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
          href='/'
        >
          {user && user.name}
        </a>
        <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
          <a onClick={onLogout} className='nav-link' href='#!'>
            <i className='fas fa-sign-out-alt' />{' '}
            <span className='hide-sm'>注销</span>
          </a>
        </div>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className='nav-item'>
        <Link className='nav-link' to='/register'>
          注册
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/login'>
          登陆
        </Link>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
        <a className='navbar-brand' href='./'>
          网站导航
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
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
