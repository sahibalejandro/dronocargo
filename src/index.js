import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './css/main.css';
import App from './App';
import Shipments from './routes/shipments.jsx'
import ShipmentDetails from './routes/shipmentDetails.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="shipments" element={<Shipments />}></Route>
          <Route path="shipments/:id" element={<ShipmentDetails />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
