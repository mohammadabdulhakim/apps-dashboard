import React from 'react';

import Header from '../components/Header';

import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
// import { EditorData } from '../data/dummy';

// onClick={()=>{console.log(document.querySelector('#editor_rte-edit-view').innerHTML)}}

const Editor = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Editor" />
    <RichTextEditorComponent id="editor">
      {/* <EditorData /> */}
      <Inject services={[HtmlEditor , Link , Image , QuickToolbar , Toolbar]} />
    </RichTextEditorComponent>
  </div>
);
export default Editor;
