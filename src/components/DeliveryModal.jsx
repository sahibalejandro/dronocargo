import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Search from './Search.jsx';
import ArrowDownIcon from '../assets/arrow-down-icon.svg';
import CloseIcon from '../assets/close-icon.svg';

function DeliveryModal(props) {
  const idInputRef = useRef();
  const [id, setId] = useState('');
  const [error, setError] = useState(false);
  const [technician] = useState('Sahib'); // We don't need setTechnician for this demo.

  function handleIdOnChange(e) {
    if (error) setError(false);
    setId(e.target.value);
  }

  function handleCloseOnClick() {
    props.onClose();
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!id) {
      setError(true);
      return;
    }

    props.onCreate({
      status: 'ready',
      id,
      technician,
      platform: 'FPV',
      drone: 'Apex Mark 1',
      technicalCheck: 'passed',
    });
  }

  useEffect(() => {
    idInputRef.current.focus()
  }, [idInputRef]);

  return ReactDOM.createPortal(
    <form onSubmit={handleSubmit} className="absolute stretch pt-6">
      <div className="relative bgc-white round border p-2 pb-0 shadow w-medium mx-auto">
        <button className="absolute top-1p5 right-1p5 border-none bgc-transparent p-0 m-0 pointer" type="button" onClick={handleCloseOnClick}>
          <img src={CloseIcon} alt="Cross" />
        </button>

        <div className="fs-md">New delivery</div>
        <p>
          Please select the order ID and a technician to deploy the cargo. All elements are mandatory.
        </p>

        <div className="grid-4x4 mt-2">
          <div>
            <div className="fs-sm color-grey">Order ID</div>
            <input ref={idInputRef} className={`input round border w-full shadow ${error ? 'bc-red' : ''}`} type="text" value={id} onChange={handleIdOnChange}/>
          </div>
          <div>
            <div className="fs-sm color-grey">Technician</div>
            <Search defaultValue={technician} />
          </div>
          <div>
            <div className="fs-sm color-grey">Platform</div>
            <button className="btn text-left fw-normal w-full relative shadow" type="button">
              FPV
              <img className="absolute right-1" src={ArrowDownIcon} alt="Arrow Down" />
            </button>
          </div>
          <div>
            <div className="fs-sm color-grey">Drone</div>
            <button className="btn text-left fw-normal w-full relative shadow" type="button">
              Apex Mark 1
              <img className="absolute right-1" src={ArrowDownIcon} alt="Arrow Down" />
            </button>
          </div>
        </div>

        <div className="-mx-2 mt-2 bt-1 p-1p5 text-right">
          <button className="btn" type="button" onClick={handleCloseOnClick}>Cancel</button>
          <button className="btn bgc-green color-white ml-1" type="submit">Create new delivery</button>
        </div>
      </div>
    </form>
  , document.body);
}

DeliveryModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
};

export default DeliveryModal;
