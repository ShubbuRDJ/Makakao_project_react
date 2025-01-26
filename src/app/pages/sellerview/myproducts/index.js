import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';
import Footer from '../../../componetns/Footer/Footer';
import { Link } from 'react-router-dom';
import routerConstants from '../../../../constants/routerConstants';

function MyProducts() {



  return (
    <>
      <div className='admin_wrapper'>
            <div className='admin_heading_wrapper'>
              <div className='page_heading'>
                <h2>My Products</h2>
                <Link to={routerConstants?.addProductRoute} className='text-decoration-none'>
                  <Button variant="success" className='d-flex align-items-center gap-2 px-3 fs-6' style={{height: "43px"}}>
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="0.5" width="2" height="14" rx="1" fill="white"/>
                        <rect y="8.5" width="2" height="14" rx="1" transform="rotate(-90 0 8.5)" fill="white"/>
                  </svg>Add New</Button>
                  </Link>
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
                  <option value="Accept">Approved</option>
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
                      <th>STATUS</th>
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
                        <span className='product_action pending_product'>Pending</span>
                      </td>
                      <td>   
                        <span className='product_action view_product'>View</span>
                        <span className='product_action view_product'>Edit</span>                        
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
                        <span className='product_action reject_product'>Reject</span>
                      </td>
                      <td>   
                        <span className='product_action view_product'>View</span>
                        <span className='product_action view_product'>Edit</span>                        
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
                      <span className='product_action accept_product'>Accept</span>
                      </td>
                      <td>   
                        <span className='product_action view_product'>View</span>
                        <span className='product_action view_product'>Edit</span>                        
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
                      <span className='product_action accept_product'>Accept</span>
                      </td>
                      <td>   
                        <span className='product_action view_product'>View</span>
                        <span className='product_action view_product'>Edit</span>                        
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
                        <span className='product_action accept_product'>Accept</span>
                      </td>
                      <td>   
                        <span className='product_action view_product'>View</span>
                        <span className='product_action view_product'>Edit</span>                        
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
                        <span className='product_action reject_product'>Reject</span>
                      </td>
                      <td>   
                        <span className='product_action view_product'>View</span>
                        <span className='product_action view_product'>Edit</span>                        
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
                        <span className='product_action accept_product'>Accept</span>
                      </td>
                      <td>   
                        <span className='product_action view_product'>View</span>
                        <span className='product_action view_product'>Edit</span>                        
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

        </div>
    </>
  )
}

export default MyProducts