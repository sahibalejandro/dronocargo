import React, { useCallback, useEffect, useState } from 'react';

import Search from '../components/Search.jsx';
import ShipmentsList from '../components/ShipmentsList.jsx';
import DeliveryModal from '../components/DeliveryModal.jsx';

const LOCAL_STORAGE_KEY = 'dronocargo-shipments';

export default function Shipments() {
  const [shipments, setShipments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const addNewShipment = useCallback((shipment) => {
    // Make sure to remove the "recent" property from current shipments
    // to avoid saving it into the local storage, as this property is
    // just a visual cue of which shipment row was recently added.
    const updatedShipments = [shipment, ...shipments.map(s => {
      delete s.recent;
      return s;
    })];

    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedShipments));

    shipment.recent = true;
    setShipments(updatedShipments);
  }, [shipments]);

  function handleNewDeliveryOnClick() {
    setModalOpen(true);
  }

  function handleModalOnClose() {
    setModalOpen(false);
  }

  function handleModalOnCreate(newShipment) {
    setModalOpen(false);
    addNewShipment(newShipment);
  }

  useEffect(() => {
    const localStoredShipments = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));

    // Add some default values if no local stored shipments found.
    setShipments(localStoredShipments || [
      { status: 'ready', id: '009-300FCT', technician: 'Ben Santana', platform: 'Gamma', drone: 'DJI-004Q', technicalCheck: 'passed' },
      { status: 'ready', id: '009-301FCT', technician: 'Juan Reynosa', platform: 'Gamma', drone: 'DJI-004Q', technicalCheck: 'passed' },
      { status: 'ready', id: '009-302FCT', technician: 'Shan Smith', platform: 'Gamma', drone: 'DJI-004Q', technicalCheck: 'passed' },
    ]);
  }, []);

  return (
    <>
      <div className="flex items-center mt-3">
        <h1>Delivery <small className="color-grey">History</small></h1>
        <div className="ml-auto flex">
          <Search />
          <div className="ml-1">
            <button className="btn bgc-green color-white" type="button" onClick={handleNewDeliveryOnClick}>New delivery</button>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <ShipmentsList shipments={shipments} />
      </div>

      {modalOpen && <DeliveryModal onClose={handleModalOnClose} onCreate={handleModalOnCreate} />}
    </>
  );
}
