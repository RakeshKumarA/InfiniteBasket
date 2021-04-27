import React from 'react';
import HealthIntro from './HealthIntro';
import HealthService from './HealthService';
import TopBar5 from './TopBar5';

const Health = () => {
  return (
    <div>
      <TopBar5 />
      <HealthIntro />
      <HealthService />
    </div>
  );
};

export default Health;
