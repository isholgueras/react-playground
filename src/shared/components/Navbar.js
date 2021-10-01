import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/pricing">Pricing</Link>
      </li>
    </ul>
  )
};