import React from 'react';

import Header from '../components/Header';

import { GridComponent, ColumnsDirective , ColumnDirective, Page , Search , Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';

const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
      id="gridcomp"
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Search','Delete']}
      editSettings={{allowDeleting:true,allowEditing:true}}
      width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map(( item , index ) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Sort , Search , Toolbar , Edit , Filter , Selection ]} />
      </GridComponent> 
    </div>
  );
};

export default Customers;
