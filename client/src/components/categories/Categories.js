import React, { useState, Fragment } from 'react';
import CategoryItem from './CategoryItem';

const Categories = () => {
  const [categories, setCategories] = useState({
    categories: [
      { id: 1, name: '常用', weight: 10 },
      { id: 2, name: '前端', weight: 20 },
      { id: 3, name: 'Python', weight: 11 }
    ]
  });

  return (
    <Fragment>
      <h1>种类</h1>
      {categories.categories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Fragment>
  );
};

export default Categories;
