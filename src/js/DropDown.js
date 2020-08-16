import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import '../css/DropDown.css';

/**
 * Imitates a <select> specially designed for React to select one or multiple choices given an array of items
 * Inspired in https://github.com/karlhadwen/react-dropdown-menu
 * @param {Any} props 
 */
function Dropdown(props) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  /* Sends the value of const selection to the Parent Component */
  React.useEffect(() => {
    props.onDropDown(selection);
  });

  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
      if (!props.multiSelect) {
        setSelection([item]);
      } else if (props.multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className="dd-wrapper">
        <div tabIndex={0} className="dd-header" role="button" onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}>
            <div className="dd-header__title">
                <p className="dd-header__title--bold">{props.title}</p>
                </div>
                <div className="dd-header__action">
                <p>{open ? 'Close' : 'Open'}</p>
            </div>
        </div>
        {open && (
            <ul className="dd-list">
            {props.items.map(item => (
                <li className="dd-list-item" key={item.id}>
                <button className="dropdown__btn" type="button" onClick={() => handleOnClick(item)}>
                    <span>{item.value}</span>
                    <span>{isItemInSelection(item) && 'Selected'}</span>
                </button>
                </li>
            ))}
            </ul>
        )}
    </div>
  );
}

const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);