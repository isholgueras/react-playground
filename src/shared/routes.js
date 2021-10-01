import React from 'react';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Home from './pages/Home';

const routes = (
  [
    {
      path: '/',
      exact: true,
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/pricing',
      component: Pricing,
    }
  ]
);

export default routes;