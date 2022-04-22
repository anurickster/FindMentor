import React from 'react';
import './module.Login.css';
import { useNavigate } from 'react-router';
import { login } from '../../store/auth-reducer';
import { useDispatch, useSelector } from 'react-redux';
import loginpic from '../Signuppage/Images/login2.webp';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import dToken from './../../addons/tokenDecoder';
import Navigationbar from '../Navigationbar/Navigationbar';

export default function Loginpage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      await dispatch(login(values));

      // let authstatus = localStorage.getItem('auth');
      const { role } = dToken();

      if (role === 'Student') {
        navigate('/homepage');
      } else if (role === 'Mentor') {
        navigate('/welcomepage');
      } else if (role === 'Admin') {
        navigate('/homepage');
      } else if (user.auth.error === 'Invalid password') {
        alert('Invalid password');
      } else {
        alert('Invalid Credentials');
      }
    },
  });

  return (
    <div>
      <Navigationbar />
      <section className='sign-in'>
        <div className='container mt-5'>
          <div className='signin-content'>
            <div className='signin-image'>
              <figure>
                <img src={loginpic} alt='login pic' />
              </figure>
              <NavLink to='/register' className='signup-image-link'>
                Create an Account!
              </NavLink>
            </div>
            <div className='signin-form'>
              <h2 className='form-title'>Log-In</h2>
              <form onSubmit={formik.handleSubmit} className='auth-form'>
                <div className='form-group'>
                  <input
                    type='email1'
                    name='email'
                    id='email'
                    autoComplete='off'
                    placeholder='Please Enter Your Email..'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className='form-control'
                  />
                  <span className='required'>{formik.errors.email}</span>
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    placeholder='Enter your password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    name='password'
                    id='password'
                    className='form-control'
                  />
                  <span className='required'>{formik.errors.password}</span>
                  <div className='form-group form-button'>
                    <input
                      type='submit'
                      name='signin'
                      id='signin'
                      className='form-submit'
                      value='Log In'
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
