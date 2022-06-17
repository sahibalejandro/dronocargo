import React from 'react';
import { useParams } from 'react-router-dom';

export default function ShipmentDetails() {
  const params = useParams();

  return (
    <h1 className="pt-6">Shipment {params.id}</h1>
  );
}
