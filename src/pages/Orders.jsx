import React from 'react';
import { GridComponent , ColumnsDirective , Page , ColumnDirective , Resize , Sort , ContextMenu , Filter , ExcelExport , PdfExport , Edit , Inject } from '@syncfusion/ej2-react-grids';

import { ordersData , ordersGrid , contextMenuItems} from '../data/dummy'
import Header from '../components/Header'

const Orders = () => {
  return (
    <div style={{marginLeft:"1rem"}} className="m-2 p-2 mt-20 md:m-10 md:p-10 bg-white rounded-3xl">
      <Header title="Orders" category="Page" />
      <GridComponent
      id="gridcomp"
      dataSource={ordersData}
      allowPaging
      allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map(( item , index ) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page , Sort , Resize , Filter , Edit , ContextMenu , PdfExport , ExcelExport ]} />
      </GridComponent>     
    </div>
  )
}
export default Orders;
