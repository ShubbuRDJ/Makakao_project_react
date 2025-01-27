/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './style.css';
import { Button, Form } from 'react-bootstrap';
import Footer from '../../../componetns/Footer/Footer';
import { useQuery, useQueryClient } from 'react-query';
import { apiurl } from '../../../../constants/apiURLsConstants';
import { getRequest, postRequest } from '../../../../services/axios-api-request/axios_api_Request';
import toaster from '../../../../utility/toaster/toaster';
import { useFormik } from 'formik';
import { addSellerBussinessSchema } from '../../../../services/yup-validation-schemas';
import { handleChangeOnlyNumbersInput } from '../../../../utility/common';

function AddBusiness() {
  // ********* for fetch the product list and transform data according to requirement *********
  const [abortController, setAbortController] = useState(null);
  const [isLoadingAdd, setIsLoadingAdd] = useState(false);

  const fetchProductList = () => {
    if (abortController) {
      abortController.abort(); // Cancel the previous request
    }

    const newAbortController = new AbortController();
    setAbortController(newAbortController);

    return getRequest(apiurl?.GET_BUSSINESS_DATA_URL, {},
      newAbortController.signal
    )
  }

  const { isLoading, data: selfBussinessData, isError, error } = useQuery(
    ['seller-bussiness-data'],
    fetchProductList,
    {
      select: (data) => {
        return data?.data?.data
      },

    }
  )

  // ********** for error message when we fetch the list ********** 
  useEffect(() => {
    if (isError) {
      toaster('error', error?.message)
    }
    // eslint-disable-next-line
  }, [isError])

  // ************* handle refetch after action perform ************
  const queryClient = useQueryClient();
  const handleRefetch = () => {
    queryClient.invalidateQueries('seller-bussiness-data');
  };

  // *********************** form handling using formik *********************
  const initialValues = {
    business_name: '',
    business_type: '',
    business_address: '',
    tin_number: '',
    iban_number: '',
    bank_account_number: '',
  }

  const { values, setValues, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: addSellerBussinessSchema,
      onSubmit: (values, action) => {
        handleSave(values);
      },
    });

  useEffect(() => {
    if (selfBussinessData) {
      setValues(
        {
          business_name: selfBussinessData?.business_name ?? '',
          business_type: selfBussinessData?.business_type ?? '',
          business_address: selfBussinessData?.business_address ?? '',
          tin_number: selfBussinessData?.tin ?? '',
          iban_number: selfBussinessData?.iban ?? '',
          bank_account_number: selfBussinessData?.bank_account_number ?? '',
        }
      )
    }
  }, [selfBussinessData])

  const handleSave = async (values) => {
    if (!isLoadingAdd) {
      setIsLoadingAdd(true);
      const payload = {
        business_name: values?.business_name,
        business_type: values?.business_type,
        business_address: values?.business_address,
        tin: values?.tin_number,
        iban: values?.iban_number,
        bank_account_number: values?.bank_account_number,
        identity_proof_id: 'IPID423229d2929322',
        is_identity_verified: false,
        address_proof_id: 'APID326543564534',
        is_address_verified: false,
      }
      const res = await postRequest(apiurl?.ADD_BUSSINESS_DATA_URL, payload);
      if (res?.data?.status) {
        setIsLoadingAdd(false);
        toaster('success', res?.data?.message);
        handleRefetch();
      }
      else {
        setIsLoadingAdd(false);
        toaster('error', res?.data?.detail);
      }
    }
  }

  return (
    <>
      <div className='admin_wrapper'>
        <div className='admin_heading_wrapper'>
          <div className='page_heading'>
            <h2>Add Business</h2>
          </div>
        </div>

        <div className='addBusiness mt-3'>
          <div className='row'>
            <div className='col-lg-7 pb-3'>
              <div className='card h-100'>
                <form onSubmit={handleSubmit} className='row'>
                  <div className='col-lg-12'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Business name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Business name"
                        name='business_name'
                        value={values?.business_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.business_name && touched.business_name ? (
                        <p className="custom-makakao-form-error">{errors.business_name}</p>
                      ) : null}
                    </Form.Group>
                  </div>
                  <div className='col-lg-12'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Business type</Form.Label>
                      <select
                        id="Select status"
                        name='business_type'
                        value={values?.business_type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="" selected>Select business type</option>
                        <option value="bt-1">BT 1</option>
                        <option value="bt-2">BT 2</option>
                      </select>
                      {errors.business_type && touched.business_type ? (
                        <p className="custom-makakao-form-error">{errors.business_type}</p>
                      ) : null}
                    </Form.Group>
                  </div>
                  <div className='col-lg-12'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Business address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Business address"
                        name='business_address'
                        value={values?.business_address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.business_address && touched.business_address ? (
                        <p className="custom-makakao-form-error">{errors.business_address}</p>
                      ) : null}
                    </Form.Group>
                  </div>
                  <div className='col-lg-12'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Tin number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Tin Number"
                        name='tin_number'
                        value={values?.tin_number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.tin_number && touched.tin_number ? (
                        <p className="custom-makakao-form-error">{errors.tin_number}</p>
                      ) : null}
                    </Form.Group>
                  </div>
                  <div className='col-lg-12'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Iban number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Iban Number"
                        name='iban_number'
                        value={values?.iban_number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.iban_number && touched.iban_number ? (
                        <p className="custom-makakao-form-error">{errors.iban_number}</p>
                      ) : null}
                    </Form.Group>
                  </div>
                  <div className='col-lg-12'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Bank account number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Bank account number"
                        name='bank_account_number'
                        value={values?.bank_account_number}
                        onChange={(e) => handleChangeOnlyNumbersInput(e, handleChange)}
                        onBlur={handleBlur}
                        maxLength={16}
                      />
                      {errors.bank_account_number && touched.bank_account_number ? (
                        <p className="custom-makakao-form-error">{errors.bank_account_number}</p>
                      ) : null}
                    </Form.Group>
                  </div>
                  <div className='col-lg-12 mb-3'>
                    <Button variant="secondary" className="w-auto">Cancel</Button>
                    <Button type='submit' variant="primary" className="w-auto ms-3">Add Business</Button>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-lg-5 pb-3'>
              <div className='card h-100'>
                <div className='add_business_graphic'>
                  <img src='/images/add_business_image.svg' alt='category' />
                  <h5>Easily register your business on our platform and showcase your products or services to a wider audience.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>


        <Footer />

      </div>


    </>

  )
}

export default AddBusiness