import React, { useCallback, useEffect, useState } from 'react';

import ArrowDownIcon from '../assets/arrow-down-icon.svg';

function ShipmentActions() {
  const [open, setOpen] = useState(false);

  const documentOnClickListener = useCallback(() => setOpen(false), []);
  const addDocumentEventListener = useCallback(() => document.addEventListener('click', documentOnClickListener), [documentOnClickListener]);
  const removeDocumentEventListener = useCallback(() => document.removeEventListener('click', documentOnClickListener), [documentOnClickListener]);

  function handleOnClick(e) {
    e.stopPropagation();
    setOpen(!open);

    if (open) {
      // Dropdown is going to close, remove document event listener.
      removeDocumentEventListener();
    } else {
      // Dropdown is going to open, add document event listener.
      addDocumentEventListener();
    }
  }

  // Remove the document event listener when this component is unmounted.
  useEffect(() => removeDocumentEventListener, [removeDocumentEventListener]);

  return (
    <div className="relative">
      <button type="button" className="btn" onClick={handleOnClick}>
        Actions
        <img className="icon ml-p5" src={ArrowDownIcon} alt="Arrow Down" />
      </button>
      {open && (
        <div className="absolute right round border bgc-white z-index-1 shadow w-small">
          <button className="dropdown-option" type="button">Edit</button>
          <button className="dropdown-option" type="button">Delete</button>
        </div>
      )}
    </div>
  )
}

export default ShipmentActions;
