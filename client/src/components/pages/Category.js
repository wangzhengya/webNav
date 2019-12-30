import React, { useContext, useEffect, Fragment } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import CategoryForm from '../categories/CategoryForm';
import Categories from '../categories/Categories';

const Category = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    console.log('category load user');
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-8'>
            <Categories />
          </div>
          <div className='col-sm'>
            <CategoryForm />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Category;
