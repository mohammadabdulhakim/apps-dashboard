import React,{useEffect} from 'react'
import {BiMenu} from 'react-icons/bi'
import {useStateContext} from '../contexts/ContextProvider'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import UserProfile from './UserProfile'

import {userProfile,Cart,Chat,Notification} from '.'

const NavButton = ({color,func,dotColor,icon,title,count}) =>{
  return(
    <TooltipComponent content={title} position='BottomCenter'>
      <button type='button' onClick={func} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-secondary-dark-bg'>
        <span style={{background: dotColor}} className='w-4 h-4 right-1 top-0 absolute inline-flex rounded-full text-white text-14'><p className='right-1 absolute' style={{top:'-6px'}}>{count}</p></span>
        {icon}
      </button>
    </TooltipComponent>
  )
}

const Navbar = () => {
  const {activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize,currentColor} = useStateContext();
  
  useEffect(()=>{
    const handleResize = () => setScreenSize(window.innerWidth)
    
    window.addEventListener('resize',handleResize)
    handleResize();

    return () => {
      window.removeEventListener('resize',handleResize)
    }
  },[])

  useEffect(()=>{
    if(screenSize <= 900){
      setActiveMenu(false)
    }else{
      setActiveMenu(true)
    }
  },[screenSize])
  
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton title='Menu' icon={<BiMenu/>} func={()=>setActiveMenu(prev=>!prev)} color={currentColor}/>
      
      <div className="flex">
        <NavButton title='Cart' icon={<FiShoppingCart/>} func={()=>handleClick('cart')} color={currentColor}/>
        <NavButton title='Chat' icon={<BsChatLeft/>} func={()=>handleClick('chat')} dotColor='magenta' count="4" color={currentColor}/>
        <NavButton title='Notification' icon={<RiNotification3Line/>} func={()=>handleClick('notification')} dotColor='magenta' count="4" color={currentColor}/>
      
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer p-1 rounded-lg hover:bg-light-gray dark:hover:bg-secondary-dark-bg' onClick={()=>{handleClick('userProfile')}}>
            <img src={require('../data/avatar4.jpg')} alt="" className='w-8 h-8 rounded-full' />
            <p>
              <span className='text-gray-400 text-14'>Hi , </span>
              <span className='text-gray-400 text-14 ml-1 font-bold'>Ahmed</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>
        {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  )
}

export default Navbar