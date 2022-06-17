import React from 'react';
import PropTypes from 'prop-types';

import ShipmentRow from './ShipmentRow.jsx';

function ShipmentsList(props) {
  const { shipments = [] } = props;
  return shipments.map(shipment => <ShipmentRow key={shipment.id} shipment={shipment} />);
}

ShipmentsList.propTypes = {
  shipments: PropTypes.array.isRequired,
};

export default ShipmentsList;
