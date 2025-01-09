import React from 'react'

const Calender = () => {
    const Months = new Date().getMonth()
    const todaysDate = new Date().getDate()
    function getDaysInMonth(year, month) {
      const days = [];
      
      // `month` is 0-indexed (0 = January, 1 = February, ..., 11 = December)
      const date = new Date(year, month, 1);
      
      while (date.getMonth() === month) {
        days.push(new Date(date).getDate()); // Add a copy of the date
        date.setDate(date.getDate() + 1); // Move to the next day
      }
      
      return days;
    }
    
    // Example usage:
    const year = 2025;
    const month = 0; // January
    const daysInJanuary = getDaysInMonth(year, 0);
    const daysInFebruary = getDaysInMonth(year, 1);
    const daysInMarch = getDaysInMonth(year, 2);
    const daysInApril = getDaysInMonth(year, 3);
    const daysInMay = getDaysInMonth(year, 4);
    const daysInJune = getDaysInMonth(year, 5);
    const daysInJuly = getDaysInMonth(year, 6);
    const daysInAugust = getDaysInMonth(year, 7);
    const daysInSeptember = getDaysInMonth(year, 8);
    const daysInOctober = getDaysInMonth(year, 9);
    const daysInNovember= getDaysInMonth(year, 10);
    const daysInDecember = getDaysInMonth(year, 11);
    const Year = [daysInJanuary ,daysInFebruary , daysInMarch ,daysInApril,daysInMay,daysInJune,daysInJuly,daysInAugust,daysInSeptember,daysInOctober,daysInNovember,daysInDecember]

    function selectMonth(month){
      return Year[month]
    }

    const calender = selectMonth(Months)

    console.log(calender);
    // Output: Array of Date objects for each day in January 2025
    
  return (
    <div className="border-solid border-green-600 w-1/4 flex flex-col h-full">
        <div className="border border-red-500 h-1/2 flex flex-col">
            <div className="border border-green-400 h-1/5"></div>
            <div className="border border-blue-400 h-3/5 flex flex-wrap"><ul className='border w-full flex flex-wrap'>{calender.map((days , index) => days !== todaysDate ? <li className="text-red-500">{days}</li>:<li className="border border-red-500">{days}</li> )}</ul></div>
        </div>
    </div>
  )
}

export default Calender