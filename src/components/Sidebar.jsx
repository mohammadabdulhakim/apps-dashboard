import React from 'react'
import { NavLink ,Link } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {MdOutlineCancel} from 'react-icons/md'
import {SiShopware} from 'react-icons/si'
import {links} from '../data/dummy'

import {useStateContext} from '../contexts/ContextProvider'

const Sidebar = () => {
  const {activeMenu,setActiveMenu,screenSize,currentColor} = useStateContext();
  const activeLink = 'pb-2.5 pt-3 pl-4 flex items-center gap-5 rounded-lg m-2 text-white text-md'
  const normalLink = 'pb-2.5 pt-3 pl-4 flex items-center gap-5 rounded-lg m-2 text-md text-gray-700 dark:text-gray-200 hover:bg-light-gray dark:hover:text-black'

  function handleCloseMenu(){
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false)
    }
  }
  
  return (
    <div className='h-screen overflow-auto md:overflow-hidden ml-3 pb-10 md:hover:overflow-auto'>
      {activeMenu && (<>
      <div className='flex justify-between items-center'>
        <Link to='/' onClick={handleCloseMenu} className='flex items-center ml-3 mt-4 text-xl gap-3 text-slate-900 font-extrabold dark:text-white'>
          <SiShopware/> <span>Dashboard</span>
        </Link>
        <TooltipComponent content="Close Menu" position='BottomCenter'>
          <button type='button' onClick={()=>setActiveMenu(prev=>!prev)} className='text-xl mr-3 mt-4 rounded-full p-3 block md:hidden hover:bg-light-gray dark:text-gray-200 dark:hover:bg-main-dark-bg' >
            <MdOutlineCancel/>
          </button>
        </TooltipComponent>
      </div>
      <div className="mt-10">
        {links.map(link=>(
          <div key={link.title}>
            <p className='text-gray-400 m-3 mt-4 uppercase'>
              {link.title}
            </p>
            {link.links.map(link=>(
              <NavLink to={`/${link.name}`} key={link.name} onClick={handleCloseMenu} className={({isActive})=> isActive ? activeLink:normalLink} style={({isActive}) => ({backgroundColor: isActive ? currentColor : ''})}>
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
      </>)}
    </div>
  )
}

export default Sidebar