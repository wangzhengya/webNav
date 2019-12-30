import React from 'react';

const CategoryItem = props => {
  const { name, weight } = props.category;
  return (
    <div className='col mb-4'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>
            {name}
            <span className='badge badge-primary badge-pill'>{weight}</span>
          </h5>
          <button className='btn btn-danger'>删除</button>
          <button className='btn btn-light'>编辑</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
