import React, { useState } from 'react'
import './style.css';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import routerConstants from '../../constants/routerConstants';
import CryptoJS from "crypto-js";
import { useFormik } from 'formik';
import { loginSchema } from '../../services/yup-validation-schemas';
import { postRequest } from '../../services/axios-api-request/axios_api_Request';
import { apiurl } from '../../constants/apiURLsConstants';
import toaster from '../../utility/toaster/toaster';

const initialValues = {
  email: '',
  password: '',
  role: '',
  device_id: '',
  device_type: 'WEB',
  ip_address: '',
  fcm_token: '',
}

function SellerSignin() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { values, handleChange, handleBlur, handleSubmit, setFieldValue, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        handleLogin(values);
      },
    });

  const handleLogin = async (values) => {
    const { email, password, device_id, device_type, ip_address, fcm_token, role } = values;

    if (!role) {
      toaster('error', 'Please select role first');
      return;
    }

    if (!isLoading) {
      setIsLoading(true);
      const payload = {
        email_or_phone: email,
        password,
        device_id,
        role,
        device_type,
        ip_address,
        fcm_token,
      }
      const res = await postRequest(apiurl?.LOGIN_URL, payload);
      if (res?.data?.status) {
        setIsLoading(false);
        const token = res?.data?.data?.token;
        const secretKey = process.env.REACT_APP_SECRET_KEY;
        const encryptedToken = CryptoJS.AES.encrypt(token, secretKey).toString();
        const encryptedUserType = CryptoJS.AES.encrypt(role, secretKey).toString();
        localStorage.setItem('ACCESS_TOKEN', encryptedToken)
        localStorage.setItem('USER_TYPE', encryptedUserType)
        navigate(routerConstants?.bussinessInfoRoute);
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
            <div className='auth_heading mt-3'>Sign In</div>

            <form onSubmit={handleSubmit} className='auth_form'>
              <div className='select-seller-type'>
                <p>Select Seller Type</p>
                <div className='seller-type'>
                  <div className='seller-type-item'>
                    <input type='radio' id='seller-type-1' name='seller-type' value={'INDIVIDUAL_SELLER'} onChange={(e) => setFieldValue('role', e.target.value)} />
                    <label htmlFor='seller-type-1'>
                      <div className='seller-icon'>
                        <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 41.1111C2 32.7109 9.16345 25.9012 18 25.9012C26.8366 25.9012 34 32.7109 34 41.1111M27.1429 10.6914C27.1429 15.4915 23.0494 19.3827 18 19.3827C12.9505 19.3827 8.85714 15.4915 8.85714 10.6914C8.85714 5.89125 12.9505 2 18 2C23.0494 2 27.1429 5.89125 27.1429 10.6914Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <span className='check_icon'>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0833 11.5001C21.0833 16.7928 16.7927 21.0834 11.5 21.0834C6.20727 21.0834 1.91667 16.7928 1.91667 11.5001C1.91667 6.20735 6.20727 1.91675 11.5 1.91675C16.7927 1.91675 21.0833 6.20735 21.0833 11.5001ZM15.3624 8.59602C15.6431 8.8767 15.6431 9.3318 15.3624 9.61245L10.5707 14.4041C10.29 14.6848 9.83499 14.6848 9.55427 14.4041L7.6376 12.4875C7.35692 12.2068 7.35692 11.7517 7.6376 11.471C7.91829 11.1903 8.37338 11.1903 8.65407 11.471L10.0625 12.8794L12.2042 10.7377L14.346 8.59602C14.6267 8.31533 15.0817 8.31533 15.3624 8.59602Z" fill="#4285F4" />
                        </svg>

                      </span>
                      Individual seller
                    </label>
                  </div>
                  <div className='seller-type-item'>
                    <input type='radio' id='seller-type-2' name='seller-type' value={'ORG_SELLER'} onChange={(e) => setFieldValue('role', e.target.value)} />
                    <label htmlFor='seller-type-2'>
                      <div className='seller-icon'>
                        <svg width="53" height="45" viewBox="0 0 53 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.3437 23.6482C24.5716 23.6482 27.4952 22.3488 29.6213 20.2451L29.6195 20.2468C31.3228 21.8796 33.6397 22.8868 36.192 22.8868C41.4394 22.8868 45.6933 18.6329 45.6933 13.3855C45.6933 8.1382 41.4394 3.8843 36.192 3.8843C34.3409 3.8843 32.6136 4.41367 31.1527 5.32977L31.1922 5.30742C29.0455 2.09852 25.4344 0.0136719 21.3369 0.0136719C14.8091 0.0136719 9.51875 5.3057 9.51875 11.8318C9.51875 18.3579 14.8108 23.6499 21.3369 23.6499C21.3386 23.6499 21.3403 23.6499 21.3437 23.6499V23.6482ZM36.1611 8.17945C36.1766 8.17945 36.1955 8.17945 36.2127 8.17945C39.0967 8.17945 41.4342 10.517 41.4342 13.401C41.4342 16.2851 39.0967 18.6226 36.2127 18.6226C34.5575 18.6226 33.0811 17.8526 32.1255 16.6512L32.1169 16.6409C32.7803 15.2298 33.167 13.5746 33.167 11.8301C33.167 10.9535 33.0691 10.0993 32.8834 9.27774L32.8989 9.35508C33.7789 8.62805 34.9184 8.18633 36.1611 8.17945ZM21.3437 4.2968C25.4997 4.2968 28.8702 7.66727 28.8702 11.8232C28.8702 15.9791 25.4997 19.3496 21.3437 19.3496C17.1878 19.3496 13.8173 15.9791 13.8173 11.8232C13.8173 11.8232 13.8173 11.8232 13.8173 11.8215C13.8225 7.66727 17.1895 4.30023 21.3455 4.29508L21.3437 4.2968ZM52.6611 37.778C50.9716 30.1382 44.2547 24.5076 36.2247 24.5076C33.2238 24.5076 30.4084 25.2931 27.9695 26.6698L28.0537 26.6268C26.0548 25.9238 23.75 25.5113 21.3523 25.4976H21.3455C11.1172 25.5423 2.56984 32.682 0.368123 42.2468L0.340623 42.3929C0.309685 42.5304 0.290779 42.6902 0.290779 42.8535C0.290779 44.0412 1.25328 45.0037 2.44094 45.0037C3.46531 45.0037 4.32125 44.287 4.53781 43.3279L4.54125 43.3141C6.29437 35.5265 13.1522 29.7962 21.3489 29.7962C29.5456 29.7962 36.4034 35.5265 38.1342 43.199L38.1566 43.3141C38.3748 44.287 39.2308 45.002 40.2552 45.002C41.4411 45.002 42.4036 44.0412 42.4036 42.8535C42.4036 42.6902 42.3847 42.5321 42.3503 42.3791L42.3538 42.3929C41.0716 36.8379 37.7698 32.2127 33.2805 29.2341L33.2014 29.1843C34.1192 28.942 35.1728 28.8045 36.2591 28.8045C42.2369 28.8045 47.2316 33.0051 48.4553 38.6151L48.4708 38.6976C48.6891 39.6687 49.5433 40.3854 50.5659 40.3854C50.7309 40.3854 50.8908 40.3665 51.0438 40.3321L51.03 40.3356C52.0028 40.119 52.7178 39.2631 52.7178 38.2404C52.7178 38.0771 52.6989 37.9173 52.6645 37.7643L52.668 37.778H52.6611Z" fill="black" />
                        </svg>
                      </div>

                      <span className='check_icon'>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0833 11.5001C21.0833 16.7928 16.7927 21.0834 11.5 21.0834C6.20727 21.0834 1.91667 16.7928 1.91667 11.5001C1.91667 6.20735 6.20727 1.91675 11.5 1.91675C16.7927 1.91675 21.0833 6.20735 21.0833 11.5001ZM15.3624 8.59602C15.6431 8.8767 15.6431 9.3318 15.3624 9.61245L10.5707 14.4041C10.29 14.6848 9.83499 14.6848 9.55427 14.4041L7.6376 12.4875C7.35692 12.2068 7.35692 11.7517 7.6376 11.471C7.91829 11.1903 8.37338 11.1903 8.65407 11.471L10.0625 12.8794L12.2042 10.7377L14.346 8.59602C14.6267 8.31533 15.0817 8.31533 15.3624 8.59602Z" fill="#4285F4" />
                        </svg>

                      </span>
                      Organization seller
                    </label>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-lg-12'>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
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
                  </Form.Group>
                </div>
                <div className='col-lg-12'>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
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
                  </Form.Group>
                </div>

                <div className='input_wrap text-right'>
                  <Link to="/">Forgot your password?</Link>
                </div>

                <div className='col-lg-12 mb-3'>
                  <Button
                    variant="primary"
                    className="w-100"
                    type='submit'
                  >Sign In</Button>
                </div>
                <div className='col-lg-12 mb-3'>
                  <p style={{ fontSize: "14px" }}>Don't have any account? <Link to={routerConstants?.signupRoute}>Sign up</Link></p>
                </div>
              </div>


            </form>

          </div>
        </div>

      </div>

      {/*  */}

    </>
  )
}

export default SellerSignin