import React from 'react';
import Vector from '../../assets/Vector.png'
import Trangle from '../../assets/Rectangle 192.png'
import Scan from '../../assets/scan.jpeg'

const Hero = () => {
  return (
    <div className='container'>
        <div className='py-3'>
            <img src={Vector} alt='' style={{width: 
"37.96px", position: 'absolute'}} /> <span className='xbn-text ms-5'>XBN Stakes</span>
        </div>
        <div className='row'>
                <div className="col-md-6 mb-5">
                    <h6 className="gir_up">
                    GET UP TO
                    </h6>
                    <h2 className='apr'>
                    200% APR
                    </h2>
                    <h2 className='when_u'>WHEN YOU STAKE BANTU (XBN)</h2>
                    <h3 className='offer_valid'>Offer valid from 8th March - 31st March, 2022</h3>
                    <h2 className='terms_cond'>Terms and conditions apply</h2>
                    <img  src={Scan} alt='' style={{width: "180px"}}/>
                    <br/>
                    <br/>
                    <span className='p-2 mt-3' style={{background: "#1550A6",
borderRadius: '4.96085px'}}>Scan to join waitlist</span>
                </div>
                <div className="col-md-6">
                    <img src={Trangle} alt='' />
                </div>
        </div>
    </div>
  );
}

export default Hero;
