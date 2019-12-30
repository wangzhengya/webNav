import React, { useContext } from 'react';
import CategoryContext from '../../context/category/CategoryContext';

const CategoryItem = props => {
  const { name, weight, _id } = props.category;

  const categoryContext = useContext(CategoryContext);

  const { deleteCategory, setCurrent } = categoryContext;

  const onDelete = () => {
    deleteCategory(_id);
  };
  const onEdit = () => {
    setCurrent(props.category);
  };

  return (
    <div className='col mb-4'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>
            {name}
            <span className='badge badge-primary badge-pill'>{weight}</span>
          </h5>
          <button className='btn btn-danger' onClick={onDelete}>
            删除
          </button>
          <button className='btn btn-secondary' onClick={onEdit}>
            编辑
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
