import { useState } from 'react';
import Footer from '../../componetns/Footer/Footer'
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css';
import { Link } from 'react-router-dom';

function Sellers() {
  const [key, setKey] = useState('home');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
      <div className='admin_wrapper'>
            <div className='admin_heading_wrapper'>
              <div className='page_heading'>
                <h2>Seller</h2>
                <div className='search_and_create_categories'>
                  <div className='searc_categories'>
                    <input type='text' placeholder='Search Category' className='input_text_box' />
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.7955 13.8111L19 19M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z" stroke="#989795" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <Tabs
              id="controlled-tab-example"
              defaultActiveKey="OrganizationalSeller"
              transition={false}
              className="mb-3 mt-2 seller_tabs"
            >
              <Tab eventKey="OrganizationalSeller" title="Organizational Seller">
                <div className='list_table_wrapper'>
                  <Table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Business Name</th>
                        <th>Verified</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Link  Link to="/dashboard/sellersdetails">Elite Goods Co. </Link>
                        </td>
                        <td>info@elitegoodsco.com</td>
                        <td>+1 555-101-2020</td>
                        <td>Elite Goods Co.</td>
                        <td><span style={{color: "#34A853"}}>Verified</span></td>
                        <td><span className='change_status' onClick={handleShow}>Change Status</span></td>
                      </tr>
                      <tr>
                        <td><Link  Link to="/dashboard/sellersdetails">Elite Goods Co. </Link></td>
                        <td>info@elitegoodsco.com</td>
                        <td>+1 555-101-2020</td>
                        <td>Elite Goods Co.</td>
                        <td><span style={{color: "#FBBC05"}}>Pending</span></td>
                        <td><span className='change_status' onClick={handleShow}>Change Status</span></td>
                      </tr>
                      <tr>
                        <td><Link  Link to="/dashboard/sellersdetails">Elite Goods Co. </Link></td>
                        <td>info@elitegoodsco.com</td>
                        <td>+1 555-101-2020</td>
                        <td>Elite Goods Co.</td>
                        <td><span style={{color: "#FBBC05"}}>Pending</span></td>
                        <td><span className='change_status' onClick={handleShow}>Change Status</span></td>
                      </tr>
                      <tr>
                        <td><Link  Link to="/dashboard/sellersdetails">Elite Goods Co. </Link></td>
                        <td>info@elitegoodsco.com</td>
                        <td>+1 555-101-2020</td>
                        <td>Elite Goods Co.</td>
                        <td><span style={{color: "#FBBC05"}}>Pending</span></td>
                        <td><span className='change_status' onClick={handleShow}>Change Status</span></td>
                      </tr>
                      <tr>
                        <td><Link  Link to="/dashboard/sellersdetails">Elite Goods Co. </Link></td>
                        <td>info@elitegoodsco.com</td>
                        <td>+1 555-101-2020</td>
                        <td>Elite Goods Co.</td>
                        <td><span style={{color: "#FBBC05"}}>Pending</span></td>
                        <td><span className='change_status' onClick={handleShow}>Change Status</span></td>
                      </tr>
                      <tr>
                        <td><Link  Link to="/dashboard/sellersdetails">Elite Goods Co. </Link></td>
                        <td>info@elitegoodsco.com</td>
                        <td>+1 555-101-2020</td>
                        <td>Elite Goods Co.</td>
                        <td><span style={{color: "#FBBC05"}}>Pending</span></td>
                        <td><span className='change_status' onClick={handleShow}>Change Status</span></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Tab>
              <Tab eventKey="IndividualSeller" title="Individual Seller">
                <div className='list_table_wrapper'>
                  <Table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Business Name</th>
                        <th>Verified</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                          <Link  Link to="/dashboard/sellersdetails">Elite Goods Co. </Link>
                        </td>
                        <td>info@elitegoodsco.com</td>
                        <td>+1 555-101-2020</td>
                        <td>Elite Goods Co.</td>
                        <td><span style={{color: "#34A853"}}>Verified</span></td>
                        <td><span className='change_status' onClick={handleShow}>Change Status</span></td>
                      </tr>
                      <tr>
                        <td><Link  Link to="/dashboard/sellersdetails">Elite Goods Co. </Link></td>
                        <td>info@elitegoodsco.com</td>
                        <td>+1 555-101-2020</td>
                        <td>Elite Goods Co.</td>
                        <td><span style={{color: "#FBBC05"}}>Pending</span></td>
                        <td><span className='change_status' onClick={handleShow}>Change Status</span></td>
                      </tr>
                      <tr>
                        <td><Link  Link to="/dashboard/sellersdetails">Elite Goods Co. </Link></td>
                        <td>info@elitegoodsco.com</td>
                        <td>+1 555-101-2020</td>
                        <td>Elite Goods Co.</td>
                        <td><span style={{color: "#FBBC05"}}>Pending</span></td>
                        <td><span className='change_status' onClick={handleShow}>Change Status</span></td>
                      </tr>
                      <tr>
                        <td><Link  Link to="/dashboard/sellersdetails">Elite Goods Co. </Link></td>
                        <td>info@elitegoodsco.com</td>
                        <td>+1 555-101-2020</td>
                        <td>Elite Goods Co.</td>
                        <td><span style={{color: "#F04C4C"}}>Not verified</span></td>
                        <td><span className='change_status' onClick={handleShow}>Change Status</span></td>
                      </tr>
                      <tr>
                        <td><Link  Link to="/dashboard/sellersdetails">Elite Goods Co. </Link></td>
                        <td>info@elitegoodsco.com</td>
                        <td>+1 555-101-2020</td>
                        <td>Elite Goods Co.</td>
                        <td><span style={{color: "#FBBC05"}}>Pending</span></td>
                        <td><span className='change_status' onClick={handleShow}>Change Status</span></td>
                      </tr>
                      <tr>
                        <td><Link  Link to="/dashboard/sellersdetails">Elite Goods Co. </Link></td>
                        <td>info@elitegoodsco.com</td>
                        <td>+1 555-101-2020</td>
                        <td>Elite Goods Co.</td>
                        <td><span style={{color: "#F04C4C"}}>Not verified</span></td>
                        <td><span className='change_status' onClick={handleShow}>Change Status</span></td>
                      </tr>
                      <tr>
                        <td><Link  Link to="/dashboard/sellersdetails">Elite Goods Co. </Link></td>
                        <td>info@elitegoodsco.com</td>
                        <td>+1 555-101-2020</td>
                        <td>Elite Goods Co.</td>
                        <td><span style={{color: "#F04C4C"}}>Not verified</span></td>
                        <td><span className='change_status' onClick={handleShow}>Change Status</span></td>
                      </tr>
                      <tr>
                        <td><Link  Link to="/dashboard/sellersdetails">Elite Goods Co. </Link></td>
                        <td>info@elitegoodsco.com</td>
                        <td>+1 555-101-2020</td>
                        <td>Elite Goods Co.</td>
                        <td><span style={{color: "#FBBC05"}}>Pending</span></td>
                        <td><span className='change_status' onClick={handleShow}>Change Status</span></td>
                      </tr>
                      <tr>
                        <td><Link  Link to="/dashboard/sellersdetails">Elite Goods Co. </Link></td>
                        <td>info@elitegoodsco.com</td>
                        <td>+1 555-101-2020</td>
                        <td>Elite Goods Co.</td>
                        <td><span style={{color: "#FBBC05"}}>Pending</span></td>
                        <td><span className='change_status' onClick={handleShow}>Change Status</span></td>
                      </tr>
                      <tr>
                        <td><Link  Link to="/dashboard/sellersdetails">Elite Goods Co. </Link></td>
                        <td>info@elitegoodsco.com</td>
                        <td>+1 555-101-2020</td>
                        <td>Elite Goods Co.</td>
                        <td><span style={{color: "#FBBC05"}}>Pending</span></td>
                        <td><span className='change_status' onClick={handleShow}>Change Status</span></td>
                      </tr>
                      <tr>
                        <td><Link  Link to="/dashboard/sellersdetails">Elite Goods Co. </Link></td>
                        <td>info@elitegoodsco.com</td>
                        <td>+1 555-101-2020</td>
                        <td>Elite Goods Co.</td>
                        <td><span style={{color: "#FBBC05"}}>Pending</span></td>
                        <td><span className='change_status' onClick={handleShow}>Change Status</span></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Tab>
            </Tabs>

            

            <Pagination className='mt-3 justify-content-end'>
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Next />
            </Pagination>

            <Footer/>


            <Modal centered show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Change Status</Modal.Title>
              </Modal.Header>
              <Modal.Body className='py-4'>
                <select id="Selectstatus">
                  <option value="Select Status" selected>Select Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Verified">Verified</option>
                  <option value="Not Verified">Not Verified</option>
                </select>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
        </div>
    </>
  )
}

export default Sellers