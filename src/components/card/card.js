import React from 'react';

const Card = ({ name, price}) => {
  return (
    <div className='tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5'>
      <h1>{name}</h1>
      <div>
        <h4>Price : Rs{price}</h4>
      </div>
    </div>
  );
}

export default Card;