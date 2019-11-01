import React from 'react';

const AppointmentCard = ({ name, date, phone, testName}) => {
  return (
    <div className='tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5'>
      <h1>{name}</h1>
      <div>
        <h4>Date : {date}</h4>
      </div>
      <div>
        <h4>Phone : {phone}</h4>
      </div>
      <div>
        <h4>Test Name : {testName}</h4>
      </div>
    </div>
  );
}

export default AppointmentCard;