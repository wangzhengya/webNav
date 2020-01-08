import React, { Fragment } from 'react';

const SideBar = props => {
  const linkgroups = props.linkgroups;
  return (
    <Fragment>
      <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
        <div className='sidebar-sticky' id='list-sidebar'>
          {linkgroups !== null ? (
            <Fragment>
              {linkgroups
                .sort((a, b) => b.category.weight - a.category.weight)
                .map(linkgroup => (
                  <a
                    key={linkgroup.category.name}
                    className='list-group-item list-group-item-action'
                    href={`#${linkgroup.category.name}`}
                  >
                    {linkgroup.category.name}
                  </a>
                ))}
            </Fragment>
          ) : (
            <div className='spinner-border' role='status'>
              <span className='sr-only'>加载中。。。</span>
            </div>
          )}
        </div>
      </nav>
    </Fragment>
  );
};

export default SideBar;
