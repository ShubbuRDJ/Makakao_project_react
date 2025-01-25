import { useState } from 'react';
import Footer from '../../componetns/Footer/Footer'
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './style.css';
import Counter from '../../componetns/CounterValue/countervalue';

function SellersDetails() {
  const [key, setKey] = useState('home');
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);


  return (
    <>
      <div className='admin_wrapper'>
            <div className='admin_heading_wrapper'>
              <div className='page_heading'>
                <h2>Seller Details</h2>                
              </div>
            </div>


            <div className="row mt-3">
                <div className="col-lg-4 col-sm-6 mb-3">
                  <div className="seller_details_card admin_data_tile">
                    <div className="data_icon"><img src='/images/total_customers.svg' alt='total_customers'/></div>
                    <div className="data_value_wrap">
                      <h5>Elite Goods Company</h5>
                      <h3>info@elitegoodsco.com</h3>
                      <h3>+1 555-101-2020</h3>
                      <span className='status_tag Verified'>
                        Verified
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.8337 6.00008C11.8337 9.22171 9.22196 11.8334 6.00032 11.8334C2.77866 11.8334 0.166992 9.22171 0.166992 6.00008C0.166992 2.77842 2.77866 0.166748 6.00032 0.166748C9.22196 0.166748 11.8337 2.77842 11.8337 6.00008ZM8.35133 4.23239C8.52219 4.40324 8.52219 4.68025 8.35133 4.85109L5.43467 7.76776C5.26381 7.93861 4.98684 7.93861 4.81597 7.76776L3.6493 6.60109C3.47845 6.43023 3.47845 6.15326 3.6493 5.98241C3.82015 5.81155 4.09716 5.81155 4.26802 5.98241L5.12532 6.83967L6.42896 5.53604L7.73265 4.23239C7.90351 4.06154 8.18047 4.06154 8.35133 4.23239Z" fill="#34A853"/>
                        </svg>
                      </span>
                      {/* 
                      --Display when seller is not verified--
                      <span className='status_tag Not-verified'>
                        Not verified
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.165039" width="11.67" height="11.67" rx="5.835" fill="#F04C4C"/>
                          <path d="M7.67 4.16505L4.00001 7.83503M4 4.16504L7.67 7.83503" stroke="white" stroke-linecap="round"/>
                        </svg>
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-3">
                  <div className="seller_details_card admin_data_tile">
                      <div className="data_icon"><img src='/images/total_customers_active.svg' alt='total_customers_active'/></div>
                      <div className="data_value_wrap">
                        <h3>Total Products</h3>
                        <h2><Counter value={120} duration={2000} /></h2>
                      </div>
                  </div>
                </div>
              </div>


            <div className='product_filter'>
              <div className='search_and_create_categories'>
                <div className='searc_categories'>
                  <input type='text' placeholder='Search Category' className='input_text_box' />
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7955 13.8111L19 19M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z" stroke="#989795" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className='select_status'>
                <select id="Selectstatus">
                  <option value="Status" selected>Status</option>
                  <option value="All">All</option>
                  <option value="Accept">Accept</option>
                  <option value="Reject">Reject</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
            
              <div className='list_table_wrapper'>
                <Table>
                  <thead>
                    <tr>
                      <th width="30">
                        <Form.Check aria-label="option 1" />
                      </th>
                      <th>PRODUCT DETAILS</th>
                      <th>CATEGORY/SUB-CATEGORY</th>
                      <th>BIDING/PRICE BASED</th>
                      <th>PRICE</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Form.Check aria-label="option 1" /></td>
                      <td>
                        <div className='product_list_details'>
                          <div className='p_img'>
                            <img src='/images/product-img.jpg' alt='produc image' />
                          </div>
                          <div className='p_details'>
                            <h4 className='p_title'>SAMSUNG Galaxy A33 (Awesome Blue, 128 GB)  (6 GB RAM)</h4>
                            <p className='p_dec'>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                            <p className='p_date'>24 Apr 2021</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='cat_sub_cat'>Phones</span>
                      </td>
                      <td><span className='bid_or_price'>Price</span></td>
                      <td><span className='p_price'>₹ 24,999</span></td>
                      <td>
                        <span className='product_action view_product' onClick={() => setSmShow(true)}>View</span>
                        <span className='product_action reject_product' onClick={() => {setLgShow(true);}}>Reject</span>
                        <span className='product_action accept_product' onClick={() => {setLgShow(true);}}>Accept</span>
                      </td>
                    </tr>
                    <tr>
                      <td><Form.Check aria-label="option 1" /></td>
                      <td>
                        <div className='product_list_details'>
                          <div className='p_img'>
                            <img src='/images/product-img.jpg' alt='produc image' />
                          </div>
                          <div className='p_details'>
                            <h4 className='p_title'>SAMSUNG Galaxy A33 (Awesome Blue, 128 GB)  (6 GB RAM)</h4>
                            <p className='p_dec'>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                            <p className='p_date'>24 Apr 2021</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='cat_sub_cat'>Phones</span>
                      </td>
                      <td><span className='bid_or_price'>Price</span></td>
                      <td><span className='p_price'>₹ 24,999</span></td>
                      <td>
                        <span className='product_action view_product' onClick={() => setSmShow(true)}>View</span>
                        <span className='product_action reject_product' onClick={() => {setLgShow(true);}}>Reject</span>
                        <span className='product_action accept_product' onClick={() => {setLgShow(true);}}>Accept</span>
                      </td>
                    </tr>
                    <tr>
                      <td><Form.Check aria-label="option 1" /></td>
                      <td>
                        <div className='product_list_details'>
                          <div className='p_img'>
                            <img src='/images/product-img.jpg' alt='produc image' />
                          </div>
                          <div className='p_details'>
                            <h4 className='p_title'>SAMSUNG Galaxy A33 (Awesome Blue, 128 GB)  (6 GB RAM)</h4>
                            <p className='p_dec'>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                            <p className='p_date'>24 Apr 2021</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='cat_sub_cat'>Phones</span>
                      </td>
                      <td><span className='bid_or_price'>Price</span></td>
                      <td><span className='p_price'>₹ 24,999</span></td>
                      <td>
                        <span className='product_action view_product' onClick={() => setSmShow(true)}>View</span>
                        <span className='product_action reject_product' onClick={() => {setLgShow(true);}}>Reject</span>
                        <span className='product_action accept_product' onClick={() => {setLgShow(true);}}>Accept</span>
                      </td>
                    </tr>
                    <tr>
                      <td><Form.Check aria-label="option 1" /></td>
                      <td>
                        <div className='product_list_details'>
                          <div className='p_img'>
                            <img src='/images/product-img.jpg' alt='produc image' />
                          </div>
                          <div className='p_details'>
                            <h4 className='p_title'>SAMSUNG Galaxy A33 (Awesome Blue, 128 GB)  (6 GB RAM)</h4>
                            <p className='p_dec'>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                            <p className='p_date'>24 Apr 2021</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='cat_sub_cat'>Phones</span>
                      </td>
                      <td><span className='bid_or_price'>Price</span></td>
                      <td><span className='p_price'>₹ 24,999</span></td>
                      <td>
                        <span className='product_action view_product' onClick={() => setSmShow(true)}>View</span>
                        <span className='product_action reject_product' onClick={() => {setLgShow(true);}}>Reject</span>
                        <span className='product_action accept_product' onClick={() => {setLgShow(true);}}>Accept</span>
                      </td>
                    </tr>
                    <tr>
                      <td><Form.Check aria-label="option 1" /></td>
                      <td>
                        <div className='product_list_details'>
                          <div className='p_img'>
                            <img src='/images/product-img.jpg' alt='produc image' />
                          </div>
                          <div className='p_details'>
                            <h4 className='p_title'>SAMSUNG Galaxy A33 (Awesome Blue, 128 GB)  (6 GB RAM)</h4>
                            <p className='p_dec'>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                            <p className='p_date'>24 Apr 2021</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='cat_sub_cat'>Phones</span>
                      </td>
                      <td><span className='bid_or_price'>Price</span></td>
                      <td><span className='p_price'>₹ 24,999</span></td>
                      <td>
                        <span className='product_action view_product' onClick={() => setSmShow(true)}>View</span>
                        <span className='product_action reject_product' onClick={() => {setLgShow(true);}}>Reject</span>
                        <span className='product_action accept_product' onClick={() => {setLgShow(true);}}>Accept</span>
                      </td>
                    </tr>
                    <tr>
                      <td><Form.Check aria-label="option 1" /></td>
                      <td>
                        <div className='product_list_details'>
                          <div className='p_img'>
                            <img src='/images/product-img.jpg' alt='produc image' />
                          </div>
                          <div className='p_details'>
                            <h4 className='p_title'>SAMSUNG Galaxy A33 (Awesome Blue, 128 GB)  (6 GB RAM)</h4>
                            <p className='p_dec'>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                            <p className='p_date'>24 Apr 2021</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='cat_sub_cat'>Phones</span>
                      </td>
                      <td><span className='bid_or_price'>Price</span></td>
                      <td><span className='p_price'>₹ 24,999</span></td>
                      <td>
                        <span className='product_action view_product' onClick={() => setSmShow(true)}>View</span>
                        <span className='product_action reject_product' onClick={() => {setLgShow(true);}}>Reject</span>
                        <span className='product_action accept_product' onClick={() => {setLgShow(true);}}>Accept</span>
                      </td>
                    </tr>
                    <tr>
                      <td><Form.Check aria-label="option 1" /></td>
                      <td>
                        <div className='product_list_details'>
                          <div className='p_img'>
                            <img src='/images/product-img.jpg' alt='produc image' />
                          </div>
                          <div className='p_details'>
                            <h4 className='p_title'>SAMSUNG Galaxy A33 (Awesome Blue, 128 GB)  (6 GB RAM)</h4>
                            <p className='p_dec'>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                            <p className='p_date'>24 Apr 2021</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='cat_sub_cat'>Phones</span>
                      </td>
                      <td><span className='bid_or_price'>Price</span></td>
                      <td><span className='p_price'>₹ 24,999</span></td>
                      <td>
                        <span className='product_action view_product' onClick={() => setSmShow(true)}>View</span>
                        <span className='product_action reject_product' onClick={() => {setLgShow(true);}}>Reject</span>
                        <span className='product_action accept_product' onClick={() => {setLgShow(true);}}>Accept</span>
                      </td>
                    </tr>
                      
                  </tbody>
                </Table>
              </div>

            

            <Pagination className='mt-3 justify-content-end'>
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Next />
            </Pagination>

            <Footer/>


            <Modal size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={smShow}
              onHide={() => setSmShow(false)}
              >
              <Modal.Header closeButton>
                <Modal.Title>Products</Modal.Title>
              </Modal.Header>
              <Modal.Body className='py-4'>
                
                <div className='product_detais_modal'>
                  <div className='title_and_price'>
                    <h6>Product images</h6>
                    <h4 className='product_price'>₹25,999</h4>
                  </div>
                  <div className='poduct_images_list'>
                    <ul>
                      <li><img src='/images/p-img-1.jpg' alt='produc image' /></li>
                      <li><img src='/images/p-img-2.jpg' alt='produc image' /></li>
                      <li><img src='/images/p-img-3.jpg' alt='produc image' /></li>
                    </ul>
                  </div>
                  <div className='product_title'>SAMSUNG Galaxy A33 (Awesome Blue, 128 GB)  (6 GB RAM)</div>
                  <p className='small_dec'><span className='date'>24 Apr 2021</span> - 6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                  <div className='selected_category'>
                    Category : <span>Mobiles</span>
                  </div>
                  <div className='descriptions'>
                    <h5>Descriptions</h5>
                    <p>Turn your dull weekends into exciting ones with a range of smart features on the Samsung Galaxy A33 mobile phone. This smartphone is equipped with a 48 MP OIS Camera so that you can take stunning photos. Moreover, it comes with a powerful 5000 mAh battery so that you can stay glued to your phone without</p>
                  </div>
                </div>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={() => { setLgShow(true); setSmShow(false); }}>
                  Reject
                </Button>
                <Button variant="success" onClick={() => { setLgShow(true); setSmShow(false); }}>
                  Accept
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal
              centered
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Confirm
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Would you like to approve this product for listing on the platform?</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={() => { setLgShow(false); }}>
                  Reject
                </Button>
                <Button variant="success" onClick={() => { setLgShow(false); }}>
                  Accept
                </Button>
              </Modal.Footer>
          </Modal>


        </div>
    </>
  )
}

export default SellersDetails