import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';


import { themeColors } from '../data/dummy';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';

const ThemeSettings = () => {

  const {currentMode,setMode,currentColor,setColor,setThemeSettings} = useStateContext()
  
  return (
    <div className="bg-half-transparent w-screen nav-item fixed top-0 right-0">
      <div className="float-right h-screen w-400 bg-white dark:text-gray-200 dark:[#484B52] dark:bg-main-dark-bg">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className='text-xl font-semibold'>Setting</p>
          <button
          type='button'
          onClick={()=> setThemeSettings(false) }
          className="dark:text-gray-200 rounded-full dark:hover:bg-[#555] text-[#666] p-3 text-2xl hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='text-lg font-semibold'>Theme Options</p>
          
          <div className="mt-4">
            <input 
            type="radio"
            id="light"
            value="Light"
            name="theme"
            onChange={setMode}
            checked={currentMode === 'Light' ? true:false}
            className="cursor-pointer"
            />
            <label htmlFor="light" className='cursor-pointer ml-2'>
              Light
            </label>
          </div>
          
          <div className="mt-4">
            <input 
            type="radio"
            id="dark"
            value="Dark"
            name="theme"
            onChange={setMode}
            checked={currentMode === 'Dark' ? true:false}
            className="cursor-pointer"
            />
            <label htmlFor="dark" className='cursor-pointer ml-2'>
              Dark
            </label>
          </div>
        </div>
        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='text-lg font-semibold'>Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item,index)=>(
              <TooltipComponent key={index} content={item.name} position="BottomCenter">
                <div className='relative flex gap-5 mt-2 cursor-pointer items-center'>
                  <button
                  type='button'
                  style={{backgroundColor:item.color}}
                  className='w-10 h-10 rounded-full cursor-pointer'
                  onClick={()=>setColor(item.color)}
                  >
                    <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;



// {/* <div className="float-right h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-400">
//         <div className="flex justify-between items-center p-4 ml-4">
//           <p className="font-semibold text-lg">Settings</p>
//           <button
//             type="button"
//             onClick={() => setThemeSettings(false)}
//             style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
//             className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
//           >
//             <MdOutlineCancel />
//           </button>

//         </div>
//         <div className="flex-col border-t-1 border-color p-4 ml-4">
//           <p className="font-semibold text-xl ">Theme Option</p>

//           <div className="mt-4">
//             <input
//               type="radio"
//               id="light"
//               name="theme"
//               value="Light"
//               className="cursor-pointer"
//               onChange={setMode}
//               checked={currentMode === 'Light'}
//             />
//             {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
//             <label htmlFor="light" className="ml-2 text-md cursor-pointer">
//               Light
//             </label>
//           </div>
//           <div className="mt-2">
//             <input
//               type="radio"
//               id="dark"
//               name="theme"
//               value="Dark"
//               onChange={setMode}
//               className="cursor-pointer"
//               checked={currentMode === 'Dark'}
//             />
//             {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
//             <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
//               Dark
//             </label>
//           </div>
//         </div>
//         <div className="p-4 border-t-1 border-color ml-4">
//           <p className="font-semibold text-xl ">Theme Colors</p>
//           <div className="flex gap-3">
//             {themeColors.map((item, index) => (
//               <TooltipComponent key={index} content={item.name} position="TopCenter">
//                 <div
//                   className="relative mt-2 cursor-pointer flex gap-5 items-center"
//                   key={item.name}
//                 >
//                   <button
//                     type="button"
//                     className="h-10 w-10 rounded-full cursor-pointer"
//                     style={{ backgroundColor: item.color }}
//                     onClick={() => setColor(item.color)}
//                   >
//                     <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
//                   </button>
//                 </div>
//               </TooltipComponent>
//             ))}
//           </div>
//         </div>
//       </div>