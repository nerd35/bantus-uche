import React from 'react';

const WHileWait = () => {
  return (
    <div className="py-2 text-center" style={{background: "rgba(21, 80, 166, 0.05)"}}>
      <h1 className='while-wait'>While you wait, visit the approved exchanges to acquire XBN for staking</h1>
      <div>
          <span className='share_friends me-3'>Share with friends </span> <span style={{fontSize: '17px', color: '#5295CC;'}}><i className="bi bi-telegram me-2 " style={{fontSize: '17px', color: '#5295CC'}}></i>
              </span>
              <span style={{fontSize: '17px', color: '#5295CC'}}><i className="bi bi-facebook me-2" style={{fontSize: '17px', color: '#5295CC;'}}></i></span>
              <span style={{fontSize: '17px', color: '#5295CC'}}><i className="bi bi-linkedin me-2" style={{fontSize: '17px', color: '#5295CC;'}}></i></span>
      </div>
    </div>
  );
}

export default WHileWait;
