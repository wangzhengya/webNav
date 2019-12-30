import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    console.log('Home load user');
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <div className='grid-2'>
      <div>Home</div>
    </div>
  );
};

export default Home;
