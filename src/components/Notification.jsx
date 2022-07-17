import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Notification = () => {
  const { currentColor , setIsClicked , initialState } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex items-center" style={{gap:'11rem'}}>
          <p className="font-semibold text-lg dark:text-gray-200">Notifications</p>
          <TooltipComponent content="Close" position='BottomCenter'>
            <button type='button' onClick={()=>setIsClicked({...initialState})} className='text-xl mr-3 rounded-full p-3 block hover:bg-light-gray dark:text-gray-200 dark:hover:bg-secondary-dark-bg' >
              <MdOutlineCancel/>
            </button>
          </TooltipComponent>
        </div>
      </div>
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div key={index} className="flex items-center leading-8 gap-5 border-b-1 border-color p-3">
            <img className="rounded-full h-10 w-10" src={item.image} alt={item.message} />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button color="white" bgColor={currentColor} text="See all notifications" borderRadius="10px" width="full" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
