import React from 'react';

const AppointmentCard = ({ date, time, accepted, id, acceptAppointment,db}) => {
  
  return (
    <div className='tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5'>
      <h1>Kartik</h1>
      <div>
        <h4>Date : {date}</h4>
      </div>
      <div>
        <h4>time : {time}</h4>
      </div>
      <div>
        {
          accepted==='0'?
          <div>
            <button class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-blue" onClick={() => acceptAppointment(id,db)}>Accept</button>

          </div>
          :
          <div>
          </div>
        }
      </div>
    </div>
  );
}

export default AppointmentCard;