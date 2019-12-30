import React, { Fragment, useContext, useEffect } from 'react';
import CategoryItem from './CategoryItem';
import CategoryContext from '../../context/category/CategoryContext';

const Categories = () => {
  const categoryContext = useContext(CategoryContext);
  const { categories, getCategories, loading } = categoryContext;

  useEffect(() => {
    getCategories();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {categories !== null && !loading ? (
        <Fragment>
          <h1>种类列表</h1>
          <div className='row row-cols-1 row-cols-md-2'>
            {categories.map(category => (
              <CategoryItem key={category._id} category={category} />
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

export default Categories;
