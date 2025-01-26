import React, { useState } from "react";

const TreeCheckbox = () => {
  const [tree, setTree] = useState({
    Phone: {
      checked: false,
      children: {
        Android: false,
        Apple: false,
        Windows: false,
      },
    },
    Computers: {
      checked: false,
      children: {
        Laptop: false,
        Desktop: false,
        Windows: false,
      },
    },
  });

  const handleParentChange = (parentKey) => {
    setTree((prevTree) => {
      const updatedChildren = Object.keys(prevTree[parentKey].children).reduce(
        (acc, childKey) => ({ ...acc, [childKey]: !prevTree[parentKey].checked }),
        {}
      );
      return {
        ...prevTree,
        [parentKey]: {
          ...prevTree[parentKey],
          checked: !prevTree[parentKey].checked,
          children: updatedChildren,
        },
      };
    });
  };

  const handleChildChange = (parentKey, childKey) => {
    setTree((prevTree) => {
      const updatedChildren = {
        ...prevTree[parentKey].children,
        [childKey]: !prevTree[parentKey].children[childKey],
      };

      const allChildrenChecked = Object.values(updatedChildren).every((checked) => checked);
      const anyChildChecked = Object.values(updatedChildren).some((checked) => checked);

      return {
        ...prevTree,
        [parentKey]: {
          ...prevTree[parentKey],
          checked: allChildrenChecked,
          indeterminate: anyChildChecked && !allChildrenChecked,
          children: updatedChildren,
        },
      };
    });
  };

  return (
    <div className="categories_list">
      {Object.keys(tree).map((parentKey) => (
        <div key={parentKey} className="categories_groups">
          <div className="main_category">
            <input
              type="checkbox"
              id={parentKey}
              checked={tree[parentKey].checked}
              onChange={() => handleParentChange(parentKey)}
            />
            <label htmlFor={parentKey} className="ms-2 font-bold">
              {parentKey}
            </label>
          </div>
          <div className="sub_categories_list">
            {Object.keys(tree[parentKey].children).map((childKey) => (
              <div key={childKey} className="sub_categories_item">
                <input
                  type="checkbox"
                  id={childKey}
                  checked={tree[parentKey].children[childKey]}
                  onChange={() => handleChildChange(parentKey, childKey)}
                />
                <label htmlFor={childKey} className="ms-2">
                  {childKey}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TreeCheckbox;
