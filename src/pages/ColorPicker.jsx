import React from 'react';

import Header from '../components/Header';

import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';


function change(args){
  document.getElementById('preview').style = `background-color:${args.currentValue.hex}`
}

const ColorPicker = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Color Picker" />
    <div className="text-center">
      <div id="preview" />
      <div className="flex justify-center items-center gap-20 flex-wrap">
        <div>
          <p className='mt-2 mb-4 text-2xl font-semibold'>Inline Palette</p>
          <ColorPickerComponent 
          id='inline-palette'
          mode='Palette'
          modeSwitcher={false}
          showButtons={false}
          inline
          change={change}
          />
        </div>
        <div>
          <p className='mt-2 mb-4 text-2xl font-semibold'>Inline Picker</p>
          <ColorPickerComponent 
          id='inline-picker'
          mode='Picker'
          modeSwitcher={false}
          showButtons={false}
          inline
          change={change}
          />
        </div>
      </div>
    </div>
  </div>
);

export default ColorPicker;
