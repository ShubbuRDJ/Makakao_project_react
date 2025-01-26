import React, { useState } from 'react';
import './style.css';
import { Button, Form } from 'react-bootstrap';
import Footer from '../../../componetns/Footer/Footer';
import TreeCheckbox from '../../../componetns/checkbox_tree_view';

function AddNewProduct() {

  const [isBidBased, setIsBidBased] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsBidBased(event.target.checked);
  };


  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));
    setSelectedImages((prevImages) => [...prevImages, ...newImages]);
  };
  
  const removeImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };


  return (
    <>
      <div className='admin_wrapper'>
            <div className='admin_heading_wrapper'>
              <div className='page_heading'>
                <h2>Add New Products</h2>
              </div>
            </div>

            <div className='addBusiness mt-3'>
              <div className='row'>
                <div className='col-lg-8 pb-3'>
                  <div className='card h-100'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Product name</Form.Label>
                        <Form.Control type="text" placeholder="Product name" />
                      </Form.Group>
                    </div>
                    <div className='col-lg-12'>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Price" />
                      </Form.Group>
                    </div>
                    <div className='col-lg-12'>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Short description</Form.Label>
                        <Form.Control type="text" placeholder="Short description" />
                      </Form.Group>
                    </div>
                    <div className='col-lg-12'>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder='Description' />
                      </Form.Group>
                    </div>
                    <div className='col-lg-12'>                      
                      <Form.Check className="mb-3" label="Bid based" aria-label="option 1" name="group1" id="Bid based" checked={isBidBased} onChange={handleCheckboxChange}/>                      

                      {isBidBased && (
                        <Form.Group className="mb-3 expirydate" controlId="exampleForm.ControlInput1">
                          <Form.Label>Select bid expiry date</Form.Label>
                          <Form.Control type="date" placeholder="Short description" />
                        </Form.Group>
                      )}

                    </div>
                  </div>
                  </div>
                </div>
                <div className='col-lg-4 pb-3'>
                  <div className='card mb-3'>
                    <div className='public_card'>
                      <h4>Publish</h4>
                      <ul>
                        <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.2959 7.455L15.0459 2.205C14.9415 2.10039 14.8174 2.0174 14.6808 1.96078C14.5442 1.90416 14.3978 1.87501 14.25 1.875H5.25C4.75272 1.875 4.27581 2.07254 3.92417 2.42417C3.57254 2.77581 3.375 3.25272 3.375 3.75V20.25C3.375 20.7473 3.57254 21.2242 3.92417 21.5758C4.27581 21.9275 4.75272 22.125 5.25 22.125H18.75C19.2473 22.125 19.7242 21.9275 20.0758 21.5758C20.4275 21.2242 20.625 20.7473 20.625 20.25V8.25C20.625 7.95187 20.5066 7.66593 20.2959 7.455ZM15 5.34375L17.1562 7.5H15V5.34375ZM5.625 19.875V4.125H12.75V8.625C12.75 8.92337 12.8685 9.20952 13.0795 9.4205C13.2905 9.63147 13.5766 9.75 13.875 9.75H18.375V19.875H5.625Z" fill="#94A3B8"/></svg> Status: <span>Draft</span></li>
                        <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5314 11.5434C23.4967 11.4675 22.6754 9.64406 20.8614 7.83C18.4342 5.40656 15.3751 4.125 12.0001 4.125C8.62512 4.125 5.56606 5.40656 3.14169 7.83C1.32762 9.64406 0.506374 11.4675 0.468874 11.5434C0.405361 11.6874 0.372559 11.8431 0.372559 12.0005C0.372559 12.1579 0.405361 12.3135 0.468874 12.4575C0.503561 12.5344 1.32481 14.3569 3.13981 16.1709C5.56606 18.5944 8.62512 19.875 12.0001 19.875C15.3751 19.875 18.4342 18.5944 20.8576 16.1709C22.6726 14.3569 23.4939 12.5344 23.5286 12.4575C23.5925 12.3137 23.6258 12.1581 23.6263 12.0008C23.6268 11.8434 23.5944 11.6876 23.5314 11.5434ZM19.2132 14.6372C17.2004 16.6191 14.7742 17.625 12.0001 17.625C9.22606 17.625 6.79981 16.6191 4.78981 14.6362C3.99888 13.8537 3.31854 12.9667 2.76762 12C3.3187 11.0337 3.99903 10.1471 4.78981 9.36469C6.80075 7.38094 9.22606 6.375 12.0001 6.375C14.7742 6.375 17.1995 7.38094 19.2104 9.36469C20.0013 10.147 20.6816 11.0336 21.2326 12C20.6816 12.9666 20.0013 13.8536 19.2104 14.6362L19.2132 14.6372ZM12.0001 7.875C11.1843 7.875 10.3867 8.11693 9.7084 8.57019C9.03004 9.02345 8.50133 9.66769 8.18912 10.4214C7.87691 11.1752 7.79522 12.0046 7.95439 12.8047C8.11355 13.6049 8.50642 14.3399 9.08331 14.9168C9.6602 15.4937 10.3952 15.8866 11.1954 16.0457C11.9955 16.2049 12.8249 16.1232 13.5787 15.811C14.3324 15.4988 14.9767 14.9701 15.4299 14.2917C15.8832 13.6134 16.1251 12.8158 16.1251 12C16.1239 10.9064 15.6889 9.85787 14.9156 9.08455C14.1423 8.31124 13.0938 7.87624 12.0001 7.875ZM12.0001 13.875C11.6293 13.875 11.2668 13.765 10.9584 13.559C10.6501 13.353 10.4098 13.0601 10.2678 12.7175C10.1259 12.3749 10.0888 11.9979 10.1612 11.6342C10.2335 11.2705 10.4121 10.9364 10.6743 10.6742C10.9365 10.412 11.2706 10.2334 11.6343 10.161C11.998 10.0887 12.375 10.1258 12.7177 10.2677C13.0603 10.4096 13.3531 10.65 13.5591 10.9583C13.7652 11.2666 13.8751 11.6292 13.8751 12C13.8751 12.4973 13.6776 12.9742 13.3259 13.3258C12.9743 13.6775 12.4974 13.875 12.0001 13.875Z" fill="#94A3B8"/></svg> Visibility: <span>Public</span></li>
                      </ul>
                      <div className='action_btns'>
                        <Button variant="secondary" className="w-auto">Save Draft</Button>
                        <Button variant="primary" className="w-auto ms-3">Publish</Button>
                    </div>
                    </div>
                  </div>

                  <div className='card mb-3'>
                    <div className='public_card'>
                      <h4>Products category</h4>
                      <TreeCheckbox/>
                    </div>
                  </div>

                  <div className='card mb-3'>
                    <div className='public_card'>
                      <h4>Products category</h4>
                      <div className='upload_images'>                        
                        <div className='uploaded_images_list'>
                        {selectedImages.length > 0 ? (                         
                          <>
                          <p className='selected_images'>{`${selectedImages.length}`}</p>
                          {selectedImages.map((image, index) => (
                            <div className="uploaded_image" key={index}>
                              <img src={image.url} alt={`Uploaded ${index + 1}`} />
                              <button onClick={() => removeImage(index)}>
                                <svg
                                  width="8"
                                  height="8"
                                  viewBox="0 0 8 8"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.50002 1.50002L1.50002 6.5M1.5 1.5L6.50002 6.5"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </>
                        ) : (
                          <p className='no_image' title='select images'>No Images Selected <input type="file" multiple accept="image/*" onChange={handleImageChange} /></p>
                        )}
                        </div>

                        <Button variant="primary" className="add_image_button w-100">
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="6.5" y="0.5" width="2" height="14" rx="1" fill="white"/>
                            <rect x="0.5" y="8.5" width="2" height="14" rx="1" transform="rotate(-90 0.5 8.5)" fill="white"/>
                          </svg>
                          <input type="file" multiple accept="image/*" onChange={handleImageChange} />
                          Add Images
                        </Button>
                      </div>
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

export default AddNewProduct