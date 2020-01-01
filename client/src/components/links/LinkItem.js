import React, { useContext } from 'react';
import LinkContext from '../../context/link/LinkContext';

const LinkItem = props => {
  const {
    title,
    url,
    desc,
    icon_url,
    type,
    style,
    category,
    date,
    _id
  } = props.link;

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
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>
            <a href={url} target='_blank'>
              {title}
            </a>
          </h5>
          <p className='lead'>{desc}</p>
          <p>{date}</p>
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

export default LinkItem;
