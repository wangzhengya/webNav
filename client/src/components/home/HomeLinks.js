import React, { Fragment, useState, useContext, useEffect } from 'react';
import HomeLinkItem from './HomeLinkItem';
import HomeLinksGroup from './HomeLinksGroup';
import LinkContext from '../../context/link/LinkContext';
import AuthContext from '../../context/auth/AuthContext';
import { Link } from 'react-router-dom';

const HomeLinks = () => {
  const linkContext = useContext(LinkContext);
  const authContext = useContext(AuthContext);
  const { linkgroups, getLinksSortByCategory, loading } = linkContext;
  const { isAuthenticated, logout, user, loadUser } = authContext;

  useEffect(() => {
    getLinksSortByCategory();

    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      {isAuthenticated ? (
        <Fragment>
          {linkgroups !== null && !loading ? (
            <Fragment>
              {linkgroups
                .sort((a, b) => b.category.weight - a.category.weight)
                .map(linkgroup => (
                  <HomeLinksGroup
                    key={linkgroup.category._id}
                    linkgroup={linkgroup}
                  />
                ))}
            </Fragment>
          ) : (
            <div className='spinner-border' role='status'>
              <span className='sr-only'>加载中。。。</span>
            </div>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <h3 className='text-center'>
            您未登陆，请先<Link to='/login'>登陆</Link>您的账号
          </h3>
          <h5 className='text-center'>
            如果没有账号，请先<Link to='/register'>注册</Link>。
          </h5>
        </Fragment>
      )}
    </Fragment>
  );
};

export default HomeLinks;
