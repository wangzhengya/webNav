import React, { useContext } from 'react';
import LinkContext from '../../context/link/LinkContext';

const LinkItem = props => {
  const { title, url, icon_url, style, _id } = props.link;

  const linkContext = useContext(LinkContext);

  const { deleteLink, setCurrent } = linkContext;

  const onDelete = () => {
    deleteLink(_id);
  };
  const onEdit = () => {
    setCurrent(props.link);
  };

  return (
    <div className='col mb-4'>
      <div className={`card border-${style}`}>
        <div className='card-header'>
          {icon_url && <img src={icon_url} alt='' width='18px' />}
          <a href={url}>{title}</a>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col align-self-start'>
              <button
                className='btn btn-outline-danger btn-sm'
                onClick={onDelete}
              >
                删除
              </button>
            </div>
            <div className='col align-self-end'>
              <button
                className='btn btn-outline-secondary btn-sm align-self-end'
                onClick={onEdit}
              >
                编辑
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkItem;
