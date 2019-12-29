import React from 'react';

const CategoryItem = props => {
  const { name, weight } = props.category;
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {name}
      <span className='badge badge-primary badge-pill'>{weight}</span>
      <p className='card_text'>asdfasdfasdfasfasd</p>
    </li>
  );
};

export default CategoryItem;
