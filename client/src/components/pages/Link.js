import React, { Fragment } from 'react';
import LinkForm from '../links/LinkForm';
import Links from '../links/Links';

const Link = () => {
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-8'>
            <Links />
          </div>
          <div className='col-sm'>
            <LinkForm />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Link;
