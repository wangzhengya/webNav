import React, { Fragment } from 'react';
import SideBar from '../../components/layout/SideBar';
import HomeLinks from '../home/HomeLinks';

const Home = () => {
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <HomeLinks />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
