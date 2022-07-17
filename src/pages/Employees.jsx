import React from 'react';
import Header from '../components/Header';

import { GridComponent , Sort , ColumnsDirective , Toolbar , Page , ColumnDirective , Search , Inject } from '@syncfusion/ej2-react-grids';
import { employeesData , employeesGrid } from '../data/dummy'

const Employees = () => {
  return(
    <div style={{marginLeft:"1rem"}} className="m-2 p-2 mt-20 md:m-10 md:p-10 bg-white rounded-3xl" >
      <Header title="Employees" category="Page" />
      <GridComponent
      id="gridcomp"
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map(( item , index ) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Sort , Search , Toolbar ]} />
      </GridComponent>  
    </div>
  )
}
export default Employees;
