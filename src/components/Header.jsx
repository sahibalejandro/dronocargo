import React from 'react';

import UserIcon from '../assets/user-icon.svg';

export default function Header() {
  return (
    <div className="flex items-center mt-1p5">
      <div className="fw-600">Dronocargo</div>
      <div className="flex items-center ml-auto">
        <span>Regina Zepeda</span>
        <img className="icon ml-p5" src={UserIcon} alt="User Icon" />
      </div>
    </div>
  );
}
