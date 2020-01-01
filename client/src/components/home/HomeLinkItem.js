import React, { useContext } from 'react';
import LinkContext from '../../context/link/LinkContext';

const HomeLinkItem = props => {
  const linkContext = useContext(LinkContext);
  const { linkClicked } = linkContext;

  const {
    title,
    url,
    desc,
    icon_url,
    type,
    style,
    category,
    date,
    views,
    _id
  } = props.link;
  const clickLink = () => {
    const w = window.open('about:blank');
    w.location.href = `${url}`;
    linkClicked(_id, category);
  };
  return (
    <div className='col-2'>
      <button
        href={url}
        target='_blank'
        onClick={clickLink}
        className='btn btn-outline-dark'
      >
        {title}
        <span className='badge badge-pill badge-light'> {views}</span>
      </button>
      <p>{style}</p>
    </div>
  );
};

export default HomeLinkItem;
