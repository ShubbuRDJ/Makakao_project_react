import React from 'react'
import './style.css';
import { Button, Form } from 'react-bootstrap';
import Footer from '../../../componetns/Footer/Footer';

function AddBusiness() {
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
                  <div className='row'>
                    <div className='col-lg-12'>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Business name</Form.Label>
                        <Form.Control type="text" placeholder="Business name" />
                      </Form.Group>
                    </div>
                    <div className='col-lg-12'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Business type</Form.Label>
                          <select id="Selectstatus">
                          <option value="Select Status" selected>Select business type</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 1</option>
                        </select>
                      </Form.Group>                    
                    </div>
                    <div className='col-lg-12'>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Business address</Form.Label>
                        <Form.Control type="text" placeholder="Business address" />
                      </Form.Group>
                    </div>
                    <div className='col-lg-12'>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Tin number</Form.Label>
                        <Form.Control type="text" placeholder="27XXXXC0001" />
                      </Form.Group>
                    </div>
                    <div className='col-lg-12'>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Iban number</Form.Label>
                        <Form.Control type="text" placeholder="LV30RIKO0000083232646" />
                      </Form.Group>
                    </div>
                    <div className='col-lg-12'>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Bank account number</Form.Label>
                        <Form.Control type="text" placeholder="Bank account number" />
                      </Form.Group>
                    </div>
                    <div className='col-lg-12 mb-3'>
                        <Button variant="secondary" className="w-auto">Cancel</Button>
                        <Button variant="primary" className="w-auto ms-3">Add Business</Button>
                    </div>
                  </div>
                  </div>
                </div>
                <div className='col-lg-5 pb-3'>
                  <div className='card h-100'>
                    <div className='add_business_graphic'>
                      <img src='/images/add_business_image.svg' alt='category'/>
                      <h5>Easily register your business on our platform and showcase your products or services to a wider audience.</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <Footer/>  

        </div>  

                
    </>

  )
}

export default AddBusiness