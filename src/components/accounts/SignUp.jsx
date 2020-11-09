import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { signup } from '../../redux/user/user.actions';
import Layout from '../Layout';

const SignUp = ({ signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    re_password: '',
  });

  const [accountCreated, setAccountCreated] = useState(false);

  const { name, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup({ name, email, password, re_password });
      setAccountCreated(true);
    }
  };

  if (isAuthenticated) return <Redirect to='/' />;
  if (accountCreated) return <Redirect to='login' />;

  return (
    <Layout>
      <div className='container mt-5'>
        <h1>Sign Up</h1>
        <p>Create your Account</p>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              className='form-control'
              type='text'
              placeholder='Name*'
              name='name'
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='email'
              placeholder='Email*'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='password'
              placeholder='Password*'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
              minLength='6'
              required
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='password'
              placeholder='Confirm Password*'
              name='re_password'
              value={re_password}
              onChange={(e) => onChange(e)}
              minLength='6'
              required
            />
          </div>
          <button className='btn btn-primary' type='submit'>
            Register
          </button>
        </form>
        <p className='mt-3'>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(SignUp);
