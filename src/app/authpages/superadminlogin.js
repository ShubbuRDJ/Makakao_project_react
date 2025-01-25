import React, { useState } from 'react'
import './style.css';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from '../../services/yup-validation-schemas';
import Loader from '../componetns/loader/Loader';
import { postRequest } from '../../services/axios-api-request/axios_api_Request';
import { apiurl } from '../../constants/apiURLsConstants';
import toaster from '../../utility/toaster/toaster';
import CryptoJS from "crypto-js";
import routerConstants from '../../constants/routerConstants';

const initialValues = {
  email: '',
  password: ''
}

function SuperAdminLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        handleLogin(values);
      },
    });

  const handleLogin = async (values) => {
    if (!isLoading) {
      setIsLoading(true);
      const payload = {
        email_or_phone: values?.email,
        password: values?.password,
      }
      const res = await postRequest(apiurl?.LOGIN_URL, payload);
      if (res?.data?.status) {
        setIsLoading(false);

        const token = res?.data?.data?.token;
        const secretKey = process.env.REACT_APP_SECRET_KEY;
        const encryptedToken = CryptoJS.AES.encrypt(token, secretKey).toString();
        localStorage.setItem('ACCESS_TOKEN', encryptedToken)
        navigate(routerConstants?.dashboardRoute);
        toaster('success', res?.data?.message);
      }
      else {
        setIsLoading(false);
        toaster('error', res?.data?.detail);
      }
    }
  }

  return (
    <>
      <div className='authwrapper'>
        <div className='left_panel'>
          <div className='graph_and_title'>
            <img src='/images/login-graphic.svg' alt='Login Graphic' />
            <h3>Shop stylish, reliable, and <strong>affordable</strong> items for every aspect of life.</h3>
          </div>
        </div>

        <div className='right_form_wrapper'>
          <div className='form_wrap'>
            <div className='logo'><img src='/images/logo.png' alt='logo' /></div>
            <div className='auth_icon'><img src='/images/key-icon.svg' alt='key icon' /></div>
            <div className='auth_heading'>Login</div>
            <p>Enter your login details to access <br />your account! </p>

            <form className='auth_form' onSubmit={handleSubmit}>
              <div className='input_wrap'>
                <label>Email</label>
                <input
                  type='email'
                  name='email'
                  value={values?.email}
                  placeholder='info@gmail.com'
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="custom-makakao-form-error">{errors.email}</p>
                ) : null}
              </div>
              <div className='input_wrap'>
                <label>Password</label>
                <input
                  type='password'
                  name='password'
                  value={values?.password}
                  placeholder='***********'
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="custom-makakao-form-error">{errors.password}</p>
                ) : null}
              </div>
              <div className='input_wrap text-right'>
                <Link to="/">Forgot your password?</Link>
              </div>
              <div className='input_wrap text-right'>
                <Button variant="primary" type='submit' className="w-100">
                  {
                    isLoading ?
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Loader dotsColor={'#ffffff'} />
                      </div>
                      :
                      'Login'
                  }
                </Button>
              </div>
            </form>

          </div>
        </div>

      </div>

    </>
  )
}

export default SuperAdminLogin