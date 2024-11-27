import React from 'react';
import Catalog from './component/Catalog';
import Header from './component/Header';
import Slider from './component/Slider/Slider';

function MyAppComponent() {
  return (
    <div>
      <Header />
      <Slider />
      <Catalog />
    </div>
  );
}

export default MyAppComponent;