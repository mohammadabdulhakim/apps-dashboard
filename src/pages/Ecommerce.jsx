import React from 'react'
import {BsCurrencyDollar} from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'
import {Stacked,Pie,Button,SparkLine} from '../components'
import { SparklineAreaData,earningData,ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Ecommerce = () => {
  const {currentColor} = useStateContext()
  return (
    <div className='mt-12'>
      <div className="flex justify-center flex-wrap lg:flex-nowrap">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 w-full lg:w-80 rounded-xl p-8 m-3 pt-9 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className='text-gray-400 font-bold'>
                Earnings
              </p>
              <p className='text-2xl'>$62,488.43</p>
            </div>
          </div>
            <div className='mt-6'>
              <Button 
              color="white"
              size="md"
              bgColor={currentColor}
              text="download"
              borderRadius="10px"
              />
            </div>
        </div>

        <div className="flex items-center justify-center m-3 gap-1 flex-wrap">
          {earningData.map(item=>(
            <div key={item.title} className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 p-4 pt-9 rounded-2xl md:w-56">
              <button type='button' style={{color:item.iconColor, backgroundColor: item.iconBg }} className="text-2xl opacoty-0.9 p-4 rounded-full hover:drop-shadow-xl">
                {item.icon}
              </button>
                <p className="mt-3">
                  <span className='text-lg font-semibold'>
                    {item.amount}
                  </span>
                  <span className={`ml-2 text-sm text-${item.pcColor}`}>
                    {item.percentage}
                  </span>
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {item.title}
                </p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-10 justify-center flex-wrap'>
        <div className="m-3 p-4 rouded-2xl md:w-780 bg-white dark:bg-secondary-dark-bg dark:text-gray-200">
            <div className="flex justify-between">
              <p className='text-xl font-semibold'>Review Updates</p>
              <div className="flex items-center gap-4">
                <p className='flex gap-2 items-center text-gray-600 hover:drop-shadow-xl'>
                  <span><GoPrimitiveDot/></span>
                  <span>Expense</span>
                </p>
                <p className='flex gap-2 items-center text-green-400 hover:drop-shadow-xl'>
                  <span><GoPrimitiveDot/></span>
                  <span>Budget</span>
                </p>
              </div>
            </div>

            <div className='flex gap-10 justify-center flex-wrap mt-10'>
              <div className='border-r-1 border-color m-4 pr-10'>
              <div className='mt-4'>
                  <p>
                    <span className='text-3xl font-semibold'>$74,495.34</span>
                    <span className='p-1.5 hover:drop-shadow-xl rounded-full cursor-pointer text-white bg-green-400 ml-3 text-xs'>26%</span>
                  </p>
                  <p className='text-gray-500 mt-1'>Budget</p>
                </div>
                <div className='mt-8'>
                  <p>
                    <span className='text-3xl font-semibold'>$43,495.34</span>
                  </p>
                  <p className='text-gray-500 mt-1'>Expense</p>
                </div>
                <div className="mt-5">
                  <SparkLine
                  currentColor="blue"
                  type="Line"
                  height="80px"
                  width="250px"
                  id="line-sparkline"
                  data={SparklineAreaData}
                  color="blue"
                  />
                </div>
                <div className="mt-10">
                  <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                  />
                </div>
              </div>
              <div>
                <Stacked 
                width="320px"
                height="360px"
                />
              </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Ecommerce