import React from 'react';

const Header = ({title , category}) => (
  <div className='mb-10'>
    <p className="text-gray-400">
      {category}
    </p>
    <p className='text-slate-900 font-extrabold text-3xl tracking-tight'>
      {title}
    </p>
  </div>
);

export default Header;
