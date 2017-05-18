import React from 'react';
import '../styles/addDealer.css';

let AddDealerComponent = ({ dealerId, handleDealerInputChange, handleDealerSubmit }) => (
  <div className={'addDealer'} >
    <label>
      <span>ID:</span>
      <input value={dealerId} onChange={handleDealerInputChange} placeholder={"..."} />
      <input type={'button'} className={'primary'} value={'results'} onClick={handleDealerSubmit} />
    </label>
  </div>
)

export default AddDealerComponent;