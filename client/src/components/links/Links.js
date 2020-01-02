import React, { Fragment, useContext, useEffect } from 'react';
import LinkItem from './LinkItem';
import LinkContext from '../../context/link/LinkContext';

const Links = () => {
  const linkContext = useContext(LinkContext);
  const { links, getLinks, loading } = linkContext;

  useEffect(() => {
    getLinks();
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      {links !== null && !loading ? (
        <Fragment>
          <h1>连接列表</h1>
          <div className='row row-cols-1 row-cols-md-2'>
            {links.map(link => (
              <LinkItem key={link._id} link={link} />
            ))}
          </div>
        </Fragment>
      ) : (
        <div className='spinner-border' role='status'>
          <span className='sr-only'>加载中。。。</span>
        </div>
      )}
    </Fragment>
  );
};

export default Links;
