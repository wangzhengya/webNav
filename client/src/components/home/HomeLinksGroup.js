import React, { Fragment, useState, useContext, useEffect } from 'react';
import HomeLinkItem from './HomeLinkItem';

const HomeLinksGroup = props => {
  const { links, category } = props.linkgroup;
  return (
    <Fragment>
      {links !== [] && (
        <Fragment>
          <h1>{category.name}</h1>
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
