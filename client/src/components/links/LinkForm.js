import React, { useState, useContext, useEffect } from 'react';
import LinkContext from '../../context/link/LinkContext';
import CategoryContext from '../../context/category/CategoryContext';
import Select from 'react-select';

const LinkForm = () => {
  const linkContext = useContext(LinkContext);
  const {
    addLink,
    current,
    clearCurrent,
    updateLink,
    checkUrl,
    url2link,
    clearUrl
  } = linkContext;

  const color_options = [
    { value: 'primary', label: '深蓝色' },
    { value: 'secondary', label: '灰色' },
    { value: 'success', label: '绿色' },
    { value: 'danger', label: '红色' },
    { value: 'warning', label: '黄色' },
    { value: 'info', label: '浅蓝色' },
    { value: 'light', label: '浅色' },
    { value: 'dark', label: '黑色' }
  ];

  const categoryContext = useContext(CategoryContext);
  const { categories, getCategories } = categoryContext;

  const [link, setLink] = useState({
    title: '',
    url: '',
    desc: '',
    icon_url: '',
    style: '',
    category: ''
  });
  const options =
    categories === null
      ? []
      : categories.map(category => {
          return { value: category.name, label: category.name };
        });

  useEffect(() => {
    if (categories === null) {
      console.log('执行了一次获取类型');
      getCategories();
    }

    if (current !== null) {
      setLink(current);
    } else if (url2link !== null) {
      setLink({
        url: url2link.url,
        title: url2link.title,
        icon_url: url2link.icon_url,
        desc: url2link.desc
      });
    } else {
      setLink({
        title: '',
        url: '',
        desc: '',
        icon_url: '',
        style: '',
        category: ''
      });
    }

    //eslint-disable-next-line
  }, [linkContext, current]);

  const { title, url, desc, icon_url, type, style, category, date } = link;

  const onChange = e => {
    setLink({ ...link, [e.target.name]: e.target.value });
  };
  const onCheckUrl = async e => {
    e.preventDefault();
    if (url !== '') {
      await checkUrl(url);
    }
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
    clearUrl();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>{current ? '编辑连接' : '新增连接'}</h2>
      <h5>URL:</h5>
      <input
        type='text'
        name='url'
        value={url || ''}
        className='form-control'
        onChange={onChange}
        placeholder='URL'
      />
      {!current && (
        <button className='btn btn-block btn-info' onClick={onCheckUrl}>
          自动填入
        </button>
      )}

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
      <select
        className='form-control'
        name='category'
        onChange={onChange}
        value={category || ''}
      >
        {options.length > 0 &&
          options.map((item, i) => {
            return (
              <option value={`${item.value}`} key={i}>
                {item.label}
              </option>
            );
          })}
      </select>

      <h5>样式:</h5>
      <select
        className='form-control'
        name='style'
        onChange={onChange}
        value={style || 'primary'}
      >
        {color_options.length > 0 &&
          color_options.map((item, i) => {
            return (
              <option value={`${item.value}`} key={i}>
                {item.label}
              </option>
            );
          })}
      </select>
      <input
        type='submit'
        className='form-control btn btn-success btn-block'
        onClick={onSubmit}
        value={current ? '编辑连接' : '新增连接'}
      />
      {(current || url2link) && (
        <button className='btn btn-light btn-block' onClick={clearAll}>
          清空
        </button>
      )}
    </form>
  );
};

export default LinkForm;
