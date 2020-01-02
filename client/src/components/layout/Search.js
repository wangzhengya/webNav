import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [search, setSearch] = useState({ text: '' });
  const { text } = search;

  const onChange = e => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const onSearch = e => {
    e.preventDefault();
    const w = window.open('about:blank');
    // 要打开的新页面的url
    w.location.href = `https://baidu.com/s?wd=${text}`;
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = axios.post('/api/searchs', { text }, config);
    } catch (err) {}
    setSearch({ ...search, text: '' });
  };

  return (
    <form className='form-inline my-2 my-lg-0'>
      <input
        className='form-control mr-sm-2'
        type='text'
        name='text'
        value={text}
        placeholder='百度一下'
        aria-label='Search'
        onChange={onChange}
      />
      <button
        className='btn btn-outline-success my-2 my-sm-0'
        onClick={onSearch}
      >
        搜索
      </button>
    </form>
  );
};

export default Search;
