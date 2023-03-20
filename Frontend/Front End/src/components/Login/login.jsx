import './login.css';
import { auth, provider } from "../../firebase";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStates } from '../../States';
import { BsGoogle } from 'react-icons/bs'

function Login() {

  // UseStates
  const { setEmail, setPassword, mailerror, pwerror , logincheck} = useStates();
  
  const [user, setUser] = useState(null);

  // To enable google login
  const googleLogin = async () => {
    try {
      await auth.signInWithPopup(provider);
      setUser(await auth.currentUser);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(user);
  return (
    <>
      <div className='login-page'>
      <span className='App-name-1'><b>Watch</b></span>
        <div className='login-box'>
          
          <div className='login-div'>
            <span className='login-text'><b>   Sign in   </b></span>
          </div>

          <div className='mail-div'>
            <span className='mail-text'>Email</span>
            <input className='mail-in' type='mail' placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}></input>
              {mailerror && <span className='mailerror1-text'><b>{mailerror}</b></span>}
          </div>

          <div className='pw-div'>
            <span className='pw-text'>Password</span>
            <input className='pw-in' type='password' placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}></input>
              {pwerror && <span className='pwerror1-text'><b>{pwerror}</b></span>}
          </div>

          <div className='loginbtn-div'>
            <button className='login-btn' onClick={logincheck}>Sign In</button>
          </div>

          <div className='google-div'>
            <button onClick={googleLogin} className='google-btn'><BsGoogle/> - Sign In with Google</button>
          </div>

          <div className='signuplink-div'>
            <span className='signuplink-txt1'>Not a member ?</span>
            <Link to='/signup'>
              <span className='signuplink-txt2'><u>Sign up now</u></span>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default Login;