import React, { Fragment, useContext, useEffect } from 'react';
import HomeLinksGroup from './HomeLinksGroup';
import LinkContext from '../../context/link/LinkContext';
import AuthContext from '../../context/auth/AuthContext';
import { Link } from 'react-router-dom';
import SideBar from '../../components/layout/SideBar';

const HomeLinks = () => {
  const linkContext = useContext(LinkContext);
  const authContext = useContext(AuthContext);
  const { linkgroups, getLinksSortByCategory, loading } = linkContext;
  const { isAuthenticated } = authContext;

  useEffect(() => {
    getLinksSortByCategory();

    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      {isAuthenticated ? (
        <Fragment>
          <SideBar linkgroups={linkgroups} />
          {linkgroups !== null && !loading ? (
            <div
              data-spy='scroll'
              data-target='#list-sidebar'
              data-offset='0'
              className='col-md-9 ml-sm-auto col-lg-10 px-4'
            >
              {linkgroups
                .sort((a, b) => b.category.weight - a.category.weight)
                .map(linkgroup => (
                  <HomeLinksGroup
                    key={linkgroup.category._id}
                    linkgroup={linkgroup}
                  />
                ))}
            </div>
          ) : (
            <div className='spinner-border' role='status'>
              <span className='sr-only'>加载中。。。</span>
            </div>
          )}
        </Fragment>
      ) : (
        <div className='col-12'>
          <h3 className='text-center'>
            您未登陆，请先<Link to='/login'>登陆</Link>您的账号
          </h3>
          <h5 className='text-center'>
            如果没有账号，请先<Link to='/register'>注册</Link>。
          </h5>
        </div>
      )}
    </Fragment>
  );
};

export default HomeLinks;
