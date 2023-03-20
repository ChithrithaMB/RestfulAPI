import './signup.css';
// import { auth } from '../../firebase'
// import { useState } from 'react';
import { useStates } from '../../States';
//import { bounce } from 'react-animations';
//import styled, { keyframes } from 'styled-components';
function Signup() {

  const { setEmail,setPassword,pwerror,unerror,mailerror,setUsername,setMobile,moberror,passMatch } 
  = useStates();

  // const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`}`; 

  return (
    <>
      <div className='signup-page'>
          <div className='signup-box'>
          {/* <div>
          <span className='quote-1'> <b>Become the real you</b></span>
        </div> */}
            <div className='signup-div'>
              <span className='signup-text'><b>Sign up</b></span>
            </div>

            <div className='username-div'>
              <span className='username-text'>Username</span>
              <input className='username-in' type='text' placeholder='Username' required
              onChange={(e) => setUsername(e.target.value)}></input>
              {unerror && <span className='unerror-text'><b>{unerror}</b></span>}
            </div>
            
            <div className='mobile-div'>
              <span className='mobile-text'>Mobile Number</span>
              <input className='mobile-in' type='text' placeholder='Mobile number' required
              onChange={(e) => setMobile(e.target.value)}></input>
              {moberror && <span className='moberror-text'><b>{moberror}</b></span>}
            </div>

            <div className='mail2-div'>
              <span className='mail2-text'>Email</span>
              <input className='mail2-in' type='mail' placeholder='Email' required
                onChange={(e) => setEmail(e.target.value)}></input>
              {mailerror && <span className='mailerror-text'><b>{mailerror}</b></span>}
            </div>

            <div className='pw2-div'>

              <span className='pw2-text1'>Password</span>
              <input className='pw2-in1' type='password' placeholder='Password' required
                onChange={(e) => setPassword(e.target.value)}></input>
              {pwerror && <span className='pwerror-text'><b>{pwerror}</b></span>}
            </div>

            <div className='signupbtn-div'>
              <button className='signup-btn' onClick={passMatch}>Sign up</button>
            </div>

          </div>
      </div>
    </>
  );
}

export default Signup;