import React, { Fragment } from 'react';

const SideBar = props => {
  const categories = props.categories;
  return (
    <Fragment>
      <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
        <div className='sidebar-sticky' id='list-sidebar'>
          {categories !== null ? (
            <Fragment>
              {categories
                .sort((a, b) => b.weight - a.weight)
                .map(category => (
                  <a
                    key={category.name}
                    className='list-group-item list-group-item-action'
                    href={`#${category.name}`}
                  >
                    {category.name}
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
