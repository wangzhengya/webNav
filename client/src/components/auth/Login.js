import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/AuthContext';

const Login = props => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === '密码错误') {
      setAlert(error, 'danger');
      clearErrors();
    }
    if (error === '用户不存在') {
      setAlert(error, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const { email, password } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else {
      login({
        email,
        password
      });
    }
  };
  return (
    <div className='form-container'>
      <div className='row justify-content-md-center'>
        <div className='col col-lg-4'>
          <h1 className='text-center'>
            账号<span className='text-primary'>登陆</span>
          </h1>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                className='form-control'
                value={email}
                onChange={onChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>密码</label>
              <input
                type='password'
                name='password'
                className='form-control'
                value={password}
                onChange={onChange}
              />
            </div>
            <input
              type='submit'
              value='登陆'
              className='btn btn-primary btn-block'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
