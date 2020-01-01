import React, { useState, useContext, useEffect } from 'react';
import LinkContext from '../../context/link/LinkContext';

const LinkForm = () => {
  const linkContext = useContext(LinkContext);
  const { addLink, current, clearCurrent, updateLink } = linkContext;

  const [link, setLink] = useState({
    title: '',
    url: ''
  });

  useEffect(() => {
    if (current !== null) {
      setLink(current);
    } else {
      setLink({
        title: '',
        url: ''
      });
    }
  }, [linkContext, current]);
  const { title, url, desc, icon_url, type, style, category, date } = link;

  const onChange = e => {
    setLink({ ...link, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (current == null) {
      addLink(link);
    } else {
      updateLink(link);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>{current ? '编辑连接' : '新增连接'}</h2>
      <h5>名称:</h5>
      <input
        type='text'
        name='title'
        value={title}
        className='form-control'
        onChange={onChange}
        placeholder='类别名称'
      />
      <h5>描述:</h5>
      <input
        type='text'
        name='desc'
        value={desc || ''}
        className='form-control'
        onChange={onChange}
        placeholder='描述'
      />
      <h5>URL:</h5>
      <input
        type='text'
        name='url'
        value={url || ''}
        className='form-control'
        onChange={onChange}
        placeholder='URL'
      />
      <h5>图标:</h5>
      <input
        type='text'
        name='icon_url'
        value={icon_url || ''}
        className='form-control'
        onChange={onChange}
        placeholder='icon_url'
      />
      <h5>类型:</h5>
      <input
        type='text'
        name='type'
        value={type || ''}
        className='form-control'
        onChange={onChange}
        placeholder='类型'
      />
      <h5>分类:</h5>
      <input
        type='text'
        name='category'
        value={category || ''}
        className='form-control'
        onChange={onChange}
        placeholder='分类'
      />
      <h5>样式:</h5>
      <input
        type='text'
        name='style'
        value={style || ''}
        className='form-control'
        onChange={onChange}
        placeholder='样式'
      />
      <input
        type='submit'
        className='form-control btn btn-success btn-block'
        value={current ? '编辑连接' : '新增连接'}
      />
      {current && (
        <button className='btn btn-light btn-block' onClick={clearAll}>
          清空
        </button>
      )}
    </form>
  );
};

export default LinkForm;
