import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const SearchCustom = ({ setSearchKey, placeholder, debounceDelay = 0 }) => {
  const [searchTerm, setSearchTerm] = useState('');


  // *********************** for debounce search ********************
  useEffect(() => {
    if (searchTerm.length >= 3) {
      // Set a timeout to trigger the debounced search
      // setSearchKey(searchTerm);

      const handler = setTimeout(() => {
        setSearchKey(searchTerm);
      }, debounceDelay);

      // Cleanup the timeout if the component unmounts or searchTerm changes before delay
      return () => {
        clearTimeout(handler);
      };
    } else {
      // Reset the searchKey if searchTerm length is less than 3
      setSearchKey('');
    }
  }, [searchTerm, debounceDelay, setSearchKey]);



  // ************************ handle change for search box *********************
  const handleSearchChange = (e) => {
    let { value } = e.target;
    if (value === '' || value[0] !== ' ') {
      setSearchTerm(e.target.value);
    }
  };

  return (
    <div className='searc_categories'>
      <input type='text' placeholder={placeholder} className='input_text_box' onChange={handleSearchChange} />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7955 13.8111L19 19M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z" stroke="#989795" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  );
}

SearchCustom.propTypes = {
  setSearchKey: PropTypes.func.isRequired,
  debounceDelay: PropTypes.number, // New prop for setting debounce delay
};

export default SearchCustom;
