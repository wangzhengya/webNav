import React, { Fragment } from 'react';

import HomeLinks from '../home/HomeLinks';

const Home = () => {
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <HomeLinks />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
