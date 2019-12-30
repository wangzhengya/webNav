import React, { useState } from 'react';

const CategoryForm = () => {
  const [category, setCategory] = useState({
    name: '',
    weight: 100
  });

  const { name, weight } = category;

  const onChange = e => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {};

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>新增类别</h2>
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
        value={weight}
        className='form-control'
        onChange={onChange}
        placeholder='类别名称'
      />
      <input
        type='submit'
        className='form-control btn btn-success btn-block'
        value='新增'
      />
    </form>
  );
};

export default CategoryForm;
