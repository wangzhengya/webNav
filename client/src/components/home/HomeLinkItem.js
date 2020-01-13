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
    style,

    views
  } = props.link;
  const clickLink = () => {
    const w = window.open('about:blank');
    w.location.href = `${url}`;
    linkClicked(props.link);
  };
  return (
    <div className='col-lg-2 col-md-3 col-sm-6'>
      <button
        href={url}
        target='_blank'
        title={desc}
        onClick={clickLink}
        className={`btn btn-block btn-${style}`}
        style={{ marginTop: '2px' }}
      >
        {icon_url && <img src={icon_url} alt='' width='18px' />}
        <span> </span>
        {title}
        <span> </span>
        <span className='badge badge-pill badge-light'> {views}</span>
      </button>
    </div>
  );
};

export default HomeLinkItem;
