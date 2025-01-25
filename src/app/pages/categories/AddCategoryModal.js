import React, { useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import { postRequest } from '../../../services/axios-api-request/axios_api_Request';
import { apiurl } from '../../../constants/apiURLsConstants';
import toaster from '../../../utility/toaster/toaster';
import { addCategorySchema } from '../../../services/yup-validation-schemas';
import { Cancel } from '@mui/icons-material';
import DropdownCustom from '../../componetns/Dropdown-custom/DropdownCustom';

const AddCategoryModal = ({ open, handleClose, handleRefetch, categoryDropdownData }) => {
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);

    const initialValues = {
        docType: 'category',
        name: '',
        description: '',
        category_icon: '',
        category_id: '',
    }

    const { values, handleChange, handleBlur, handleSubmit, setFieldValue, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: addCategorySchema,
            onSubmit: (values, action) => {
                handleSave(values);
            },
        });

    const openFileInput = () => {
        document.getElementById('add-category-icon-file-id').click();
    };

    const removeSelectedFile = () => {
        setFieldValue('category_icon', '');
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleFileInput = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFieldValue('category_icon', file);
        }
    };

    const handleSave = async () => {
        if (!isLoading) {
            setIsLoading(true);
            let url = '';
            const formData = new FormData();
            if (values?.docType === 'category') {
                formData.append('category_name', values?.name);
                formData.append('category_description', values?.description);
                formData.append('category_icon', values?.category_icon);
                url = apiurl?.ADD_ADMIN_CATEGORIES_URL;
            }
            else if (values?.docType === 'sub-category') {
                formData.append('sub_category_name', values?.name);
                formData.append('sub_category_description', values?.description);
                formData.append('sub_category_icon', values?.category_icon);
                if (values?.category_id) {
                    url = `${apiurl?.ADD_ADMIN_CATEGORIES_URL}/${values?.category_id}/sub-categories`;
                }
                else {
                    toaster('error', 'Please select Category first');
                }
            }

            const res = await postRequest(url, formData);
            if (res?.data?.status) {
                setIsLoading(false);
                toaster('success', res?.data?.message);
                handleClose();
                handleRefetch();
            }
            else {
                setIsLoading(false);
                toaster('error', res?.data?.detail);
            }
        }
    }
    return (
        <Modal centered show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                {/* <Modal.Title>Add Category</Modal.Title> */}
                <Modal.Title>{values?.docType === 'category' ? 'Add Category' : 'Add Sub Category'}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='py-4'>
                <h5 className='select-icon-h'>{values?.docType === 'category' ? 'Select category icon' : 'Select sub category icon'}</h5>
                {!(values?.category_icon) ?
                    <div className='category-icon' onClick={openFileInput}>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="9" width="3" height="21" rx="1.5" fill="#263238" />
                            <rect y="12" width="3" height="21" rx="1.5" transform="rotate(-90 0 12)" fill="#263238" />
                        </svg>
                    </div>
                    :
                    <p className='d-flex gap-2 align-items-center flex-wrap'>
                        <span style={{ fontSize: '14px', lineHeight: '16px', color: '#212529' }}>{values?.category_icon?.name}</span>
                        <Cancel onClick={removeSelectedFile} style={{ cursor: 'pointer' }} />
                    </p>
                }

                {errors.category_icon && touched.category_icon ? (
                    <p className="custom-makakao-form-error">{errors.category_icon}</p>
                ) : null}


                <input
                    type='file'
                    id={'add-category-icon-file-id'}
                    accept=".jpg, .jpeg, .png, .gif"
                    style={{ display: 'none' }}
                    onInput={handleFileInput}
                    ref={fileInputRef}
                />

                <Form>
                    <span style={{ color: '#8C9AB1', fontSize: '15px' }}>Select Type</span>
                    <select
                        value={values?.docType}
                        onChange={handleChange}
                        name='docType'
                        id="Selectstatus"
                        className="mb-3 mt-1"
                    >
                        <option value="category">Category</option>
                        <option value="sub-category">Sub-Category</option>
                    </select>

                    {(values?.docType !== 'category') &&
                        <DropdownCustom
                            id={'add-admin-category-id'}
                            name={'category_id'}
                            value={values?.category_id}
                            placeholder={'Select Category'}
                            handleChange={handleChange}
                            dropdownDataObject={categoryDropdownData}
                        />
                    }

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type='text'
                            placeholder={values?.docType === 'category' ? "Enter category name" : "Enter sub-category name"}
                            name='name'
                            value={values?.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.name && touched.name ? (
                            <p className="custom-makakao-form-error">{errors.name}</p>
                        ) : null}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            as="textarea"
                            placeholder="Enter descriptions"
                            name='description'
                            value={values?.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.description && touched.description ? (
                            <p className="custom-makakao-form-error">{errors.description}</p>
                        ) : null}
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit} >
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddCategoryModal
