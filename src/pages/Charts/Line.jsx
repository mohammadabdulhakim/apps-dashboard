import React from 'react';

import { LineChart } from '../../components';
import { ChartsHeader } from '../../components';

const Line = () => (
  <div className="p-10 m-4 mt-24 md:m-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Inflation Rate" />
    <div className='w-full'>
      <LineChart />
    </div>
  </div>
);

export default Line;
