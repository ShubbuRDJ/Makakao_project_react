import React from 'react'

const DropdownCustom = ({ value, handleChange, id, name, dropdownDataObject, placeholder }) => {
  return (
    <select
      value={value}
      onChange={handleChange}
      name={name}
      id={id}
      className="mb-3"
    >
      <option
        value=''>
        {placeholder}
      </option>
      {
        dropdownDataObject?.map((item, index) => (
          <option
            key={`${id}-${index + 1}`}
            value={item?.value}>
            {item?.name}
          </option>
        ))
      }
    </select>
  )
}

export default DropdownCustom
