import React from 'react';
import Header from '../components/Header'

import { ScheduleComponent , Day , Week , Month , WorkWeek , Resize , Inject , Agenda , DragAndDrop, Schedule } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';

const Calendar = () => {
  return (
    <div className="m-2 mt-24 p-2 md:m-10 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
      height="650px"
      eventSettings={{dataSource:scheduleData}}
      selectedDate={new Date(2021, 0 , 10)}
      >
        <Inject services={[Day,Week,WorkWeek,Agenda,Month,DragAndDrop,Resize]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar;
