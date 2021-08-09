import React from 'react';
import initialState from '../utils/initialState';

import { Products } from '../components/Products';

const HomeContainer = () => {
  return <Products products={initialState.products} />;
};

export { HomeContainer };
