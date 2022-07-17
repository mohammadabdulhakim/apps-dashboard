import React from 'react';
import { ChartsHeader } from '../../components';

import { ChartComponent, SeriesCollectionDirective, SeriesDirective , Inject , DateTime, Legend, SplineAreaSeries } from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
  const {currentMode} = useStateContext()
  return (
    <div className="p-10 m-4 mt-24 md:m-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Inflation Rate in Percentage" />
      <ChartComponent
      id='area-chart'
      height='420px'
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      chartArea={{border:{width:0.1}}}
      tooltip={{enable:true}}
      background={currentMode === 'Dark' && '#33373E'}
      >
        <Inject services={[Legend , DateTime , SplineAreaSeries]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item,index)=> <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
