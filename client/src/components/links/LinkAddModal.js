import React from 'react';
import LinkForm from './LinkForm';

const LinkAddModal = () => {
  return (
    <div
      className='modal fade'
      id='exampleModal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              添加新的链接
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <LinkForm />
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >
              关闭
            </button>
            <button type='button' className='btn btn-primary'>
              新增
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkAddModal;
