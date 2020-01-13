import React, { Fragment } from 'react';
import HomeLinkItem from './HomeLinkItem';

const HomeLinksGroup = ({ links, category }) => {
  return (
    <Fragment>
      {links !== [] && (
        <Fragment>
          <h2 id={category.name}>{category.name}</h2>
          <hr />
          <div className='row'>
            {links
              .sort((a, b) => b.views - a.views)
              .map(link => (
                <HomeLinkItem key={link._id} link={link} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default HomeLinksGroup;
