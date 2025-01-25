import React, { useEffect, useState } from 'react'
import Footer from '../../componetns/Footer/Footer'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Pagination from 'react-bootstrap/Pagination';
import './style.css';
import { useQuery, useQueryClient } from 'react-query';
import { getRequest } from '../../../services/axios-api-request/axios_api_Request';
import { apiurl } from '../../../constants/apiURLsConstants';
import toaster from '../../../utility/toaster/toaster';
import SearchCustom from '../../componetns/search-custom/SearchCustom';
import AddCategoryModal from './AddCategoryModal';

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [abortController, setAbortController] = useState(null);

  // *************** for add category modal ****************
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);


  // ******** state variable for pagination *********
  const [currentPage, setCurrentPage] = useState(1)
  const [totalRecords, setTotalRecords] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  // ********* for fetch the categories list and transform data according to requirement *********

  const fetchCategoriesList = () => {
    if (abortController) {
      abortController.abort(); // Cancel the previous request
    }

    const newAbortController = new AbortController();
    setAbortController(newAbortController);

    let queryParams = {
      page: currentPage,
      max_per_page: rowsPerPage,
    }
    if (searchTerm) {
      queryParams = { ...queryParams, search: searchTerm }
    }

    return getRequest(apiurl?.GET_ADMIN_CATEGORIES_URL, queryParams,
      newAbortController.signal
    )
  }

  const { isLoading, data: categoriesList, isError, error } = useQuery(
    ['admin-categories-list', searchTerm, currentPage, rowsPerPage],
    fetchCategoriesList,
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

  // ************** for set the total records for pagination ************

  useEffect(() => {
    setTotalRecords(categoriesList?.total ?? '')
  }, [categoriesList])

  // ************* handle refetch after delete ************
  const queryClient = useQueryClient();
  const handleRefetch = () => {
    queryClient.invalidateQueries('admin-categories-list');
  };

  const transformCategoryDataForDropdown = () => {
    if (categoriesList?.results) {
      return categoriesList?.results?.map((item) => {
        return {
          name: item?.category?.name,
          value: item?.category?.category_id,
        }
      })
    }
    else {
      return [];
    }
  }

  return (
    <>
      <div className='admin_wrapper'>
        <div className='admin_heading_wrapper'>
          <div className='page_heading'>
            <h2>Categories</h2>
            <div className='search_and_create_categories'>
              <SearchCustom
                placeholder={'Search Category'}
                setSearchKey={setSearchTerm}
                debounceDelay={800}
              />
              <Button onClick={handleShowModal} variant="success" className='d-flex align-items-center gap-2 px-3 fs-6' style={{ height: "43px" }}>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="0.5" width="2" height="14" rx="1" fill="white" />
                  <rect y="8.5" width="2" height="14" rx="1" transform="rotate(-90 0 8.5)" fill="white" />
                </svg>Add</Button>
            </div>
          </div>
        </div>

        <div className='category_list_wrapper'>
          <div className='category_list_head'>
            <ul>
              <li className='id'>Id</li>
              <li className='Icon'>Icon</li>
              <li className='CategoryName'>Category Name</li>
              <li className='Description'>Description</li>
              <li className='Actions'>Actions</li>
            </ul>
          </div>
          <Accordion>

            {(categoriesList?.results?.length)?
              categoriesList?.results?.map((category, index) => (
                <Accordion.Item key={`admin-category-${index + 1}`} eventKey={index}>
                  <Accordion.Header>
                    <ul>
                      <li className='id'>{category?.category?.category_id}</li>
                      <li className='Icon'>
                        <div className='cat_img'><img src={category?.category?.icon_url} alt='category' /></div>
                      </li>
                      <li className='CategoryName'>{category?.category?.name}</li>
                      <li className='Description'>{category?.category?.description}</li>
                      <li className='Actions'>
                        <img className='active' src='/images/active_minus_icon.svg' alt='active_minus_icon' />
                        <img className='inactive' src='/images/inactive_plus_icon.svg' alt='inactive_plus_icon' />
                      </li>
                    </ul>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className='sub_categories_wrapper'>
                      <div className='category_list_head'>
                        <ul>
                          <li className='id'>Id</li>
                          <li className='Icon'>Icon</li>
                          <li className='CategoryName'>Sub Category Name</li>
                          <li className='Description'>Description</li>
                          <li className='Actions'>Actions</li>
                        </ul>
                      </div>

                      {(category?.sub_categories?.length) ?
                        category?.sub_categories?.map((subCategory, index) => (
                          <ul key={`sub-category-${category?.category?.category_id}-${index + 1}`} className='sub_categories'>
                            <li className='id'>{subCategory?.sub_category_id}</li>
                            <li className='Icon'>
                              <div className='cat_img'><img src={subCategory?.icon_url} alt='sub-category' /></div>
                            </li>
                            <li className='CategoryName'>{subCategory?.name}</li>
                            <li className='Description'>{subCategory?.description}</li>
                            <li class="Actions">
                              <div className="edit_icon">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M2.4938 10.5337L1.67255 12.7237C1.64101 12.8079 1.6344 12.8995 1.65351 12.9875C1.67261 13.0754 1.71662 13.156 1.78029 13.2196C1.84395 13.2832 1.92457 13.3271 2.01253 13.3461C2.10048 13.3651 2.19205 13.3584 2.2763 13.3268L4.46567 12.5055C4.71626 12.4117 4.94386 12.2653 5.13317 12.0762L11.4751 5.73429C11.4751 5.73429 11.2538 5.07116 10.5913 4.40804C9.9288 3.74554 9.26505 3.52429 9.26505 3.52429L2.92317 9.86616C2.73406 10.0555 2.58765 10.2831 2.4938 10.5337ZM10.1494 2.63992L11.0138 1.77554C11.1688 1.62054 11.3757 1.52179 11.5919 1.55804C11.8963 1.60804 12.3619 1.75929 12.8007 2.19867C13.24 2.63804 13.3913 3.10304 13.4413 3.40742C13.4775 3.62367 13.3788 3.83054 13.2238 3.98554L12.3588 4.84991C12.3588 4.84991 12.1382 4.18741 11.4751 3.52491C10.8126 2.86116 10.1494 2.63992 10.1494 2.63992Z" fill="#656565" />
                                </svg>
                              </div>
                            </li>
                          </ul>
                        )) :
                        <ul className='sub_categories'>
                          <li>
                            No sub category found
                          </li>
                        </ul>
                      }

                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              )
              ):
                <span>No records found</span>
            }

          </Accordion>
        </div>

        <Pagination className='mt-3 justify-content-end'>
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next />
        </Pagination>

        <Footer />
      </div>

      {showModal &&
        <AddCategoryModal open={showModal} handleClose={handleCloseModal} handleRefetch={handleRefetch} categoryDropdownData={transformCategoryDataForDropdown()} />
      }
    </>
  )
}

export default Categories