import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../css/shipment-row.css'
import ShipmentActions from './ShipmentActions.jsx';
import DetailsIcon from '../assets/details-icon.svg';

function ShipmentRow(props) {
  const { shipment = {} } = props;

  return (
    <div className={`shipment-row ${shipment.recent ? 'recent' : '' }`}>
      <div>
        <div className="fs-sm lh-1 color-grey">Status</div>
        <div className="fw-500">{shipment.status === 'ready' ? 'Ready' : 'Pending'}</div>
      </div>
      <div>
        <div className="fs-sm lh-1 color-grey">Order ID</div>
        <div className="fw-500">{shipment.id}</div>
      </div>
      <div>
        <div className="fs-sm lh-1 color-grey">Technician</div>
        <div className="fw-500 truncate">{shipment.technician}</div>
      </div>
      <div>
        <div className="fs-sm lh-1 color-grey">Platform</div>
        <div className="fw-500">{shipment.platform}</div>
      </div>
      <div>
        <div className="fs-sm lh-1 color-grey">Drone</div>
        <div className="fw-500">{shipment.drone}</div>
      </div>
      <div>
        <div className="fs-sm lh-1 color-grey">Technical check</div>
        <div className="fw-500">{shipment.technicalCheck === 'passed' ? 'Passed' : 'Failed'}</div>
      </div>
      <div>
        <Link className="btn" to={`/shipments/${shipment.id}`}>
          Details
          <img className="icon ml-p5" src={DetailsIcon} alt="Details" />
        </Link>
        <span className="inline-block ml-1">
          <ShipmentActions shipment={shipment} />
        </span>
      </div>
    </div>
  );
}

ShipmentRow.propTypes = {
  shipment: PropTypes.object.isRequired,
};

export default ShipmentRow;
