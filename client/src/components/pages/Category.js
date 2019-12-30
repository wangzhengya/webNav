import React, { Fragment } from 'react';
import CategoryForm from '../categories/CategoryForm';
import Categories from '../categories/Categories';

const Category = () => {
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
