import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({
  items,
  checkedState,
  handleCheckboxChange,
  removeItem,
  editItem,
}) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="grocery-item" key={id}>
            <input
              type="checkbox"
              checked={checkedState[id] || false} // Set checked state from checkedState
              onChange={() => handleCheckboxChange(id)} // Handle checkbox change
            />
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
