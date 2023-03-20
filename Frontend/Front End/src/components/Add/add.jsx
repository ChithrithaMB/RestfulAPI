import './add.css';
// import { auth } from '../../firebase'
// import { useState } from 'react';
import { useStates } from '../../States';
//import { bounce } from 'react-animations';
//import styled, { keyframes } from 'styled-components';
function AddWatch() {

  const { setBrand,setWatchcost,branderror,costerror,instockerror,setInstock,setSaled,salederror,addMatch} 
  = useStates();

  // const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`}`; 

  return (
    <>
      <div className='add-page'>
          <div className='add-box'>

            <div className='add-div'>
              <span className='add-text'><b>Add Your Watches</b></span>
            </div>

            <div className='brand-div'>
              <span className='brand-text'>Brand</span>
              <input className='brand-in' type='text' placeholder='Enter the watch brand' required
              onChange={(e) => setBrand(e.target.value)}></input>
              {branderror && <span className='branderror-text'><b>{branderror}</b></span>}
            </div>
            
            <div className='watchcost-div'>
              <span className='watchcost-text'>Cost</span>
              <input className='watchcost-in' type='text' placeholder='Enter the watch cost' required
              onChange={(e) => setWatchcost(e.target.value)}></input>
              {costerror && <span className='costerror-text'><b>{costerror}</b></span>}
            </div>

            <div className='Instock-div'>
              <span className='Instock-text'>Instock</span>
              <input className='Instock-in' type='text' placeholder='Enter the number of watches instock'
                onChange={(e) => setInstock(e.target.value)}></input>
              {instockerror && <span className='instockerror-text'><b>{instockerror}</b></span>}
            </div>

            <div className='Saled-div'>

              <span className='Saled-text1'>Saled</span>
              <input className='Saled-in1' type='text' placeholder='Enter the number of watches saled'
                onChange={(e) => setSaled(e.target.value)}></input>
              {salederror && <span className='salederror-text'><b>{salederror}</b></span>}
            </div>

            <div className='AddWatchbtn-div'>
              <button className='AddWatch-btn' onClick={addMatch}>Add Watches</button>
            </div>

          </div>
      </div>
    </>
  );
}

export default AddWatch;