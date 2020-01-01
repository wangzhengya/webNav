import React, { useState, useContext, useEffect } from 'react';
import CategoryContext from '../../context/category/CategoryContext';

const CategoryForm = () => {
  const categoryContext = useContext(CategoryContext);
  const {
    addCategory,
    current,
    clearCurrent,
    updateCategory
  } = categoryContext;

  const [category, setCategory] = useState({
    name: '',
    weight: 100
  });

  useEffect(() => {
    if (current !== null) {
      setCategory(current);
    } else {
      setCategory({
        name: '',
        weigh: 100
      });
    }
  }, [categoryContext, current]);
  const { name, weight } = category;

  const onChange = e => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (current == null) {
      addCategory(category);
    } else {
      updateCategory(category);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>{current ? '编辑类别' : '新增类别'}</h2>
      <h5>名称:</h5>
      <input
        type='text'
        name='name'
        value={name}
        className='form-control'
        onChange={onChange}
        placeholder='类别名称'
      />
      <h5>权重:</h5>
      <input
        type='number'
        name='weight'
        value={weight || ''}
        className='form-control'
        onChange={onChange}
        placeholder='权重'
      />
      <input
        type='submit'
        className='form-control btn btn-success btn-block'
        value={current ? '编辑类别' : '新增类别'}
      />
      {current && (
        <button className='btn btn-light btn-block' onClick={clearAll}>
          清空
        </button>
      )}
    </form>
  );
};

export default CategoryForm;
