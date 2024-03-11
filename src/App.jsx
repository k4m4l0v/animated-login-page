import { useState } from 'react';
import './styles/global.css';

function App() {
  const [form, setForm] = useState('login');

  return (
    <div className='main'>
      <div className={`form__container sign-in ${form === 'login' ? 'active1' : 'hidden'}`}>
        <form className='form'>
          <h2 className='form__title'>Sign In</h2>
          <input 
            className='form__input'
            type='text'
            placeholder='Email'
          />
          <input 
            className='form__input'
            type='password'
            placeholder='Password'
          />
          <button 
            className='form__button'
          >
            Sign In
          </button>
        </form>
      </div>
      <div className={`form__container sign-up ${form === 'registration' ? 'active2' : 'hidden'}`}>
        <form className='form'>
          <h2 className='form__title'>Sign Up</h2>
          <input 
            className='form__input'
            type='text'
            placeholder='Email'
          />
          <input 
            className='form__input'
            type='password'
            placeholder='Password'
          />
          <input 
            className='form__input'
            type='password'
            placeholder='Password'
          />
          <input 
            className='form__input'
            type='password'
            placeholder='Confirm your password'
          />
          <button 
            className='form__button'
          >
            Sign Up
          </button>
        </form>
      </div>  
      <div className={`aside__container ${form === 'login' ? 'right' : 'left'}`}>
        <div className={`aside__wrapper aside__sign-in ${form === 'login' ? '' : 'aside__right'}`}>
          <h2 className='aside__title'>
              Welcome back!
          </h2>
          <span className='aside__text'>
              Enter your personal details to use all site features
          </span>
          <button 
            className='aside__button'
            onClick={() => setForm('login')}
          >
              Sign In
          </button>
        </div>
        <div className={`aside__wrapper aside__sign-up ${form === 'registration' ? '' : 'aside__left'}`}>
          <h2 className='aside__title'>
              Hello, Friend!
          </h2>
          <span className='aside__text'>
              Register with your personal details to use all site features
          </span>
          <button 
            className='aside__button'
            onClick={() => setForm('registration')}
          >
              Sign Up
          </button>
        </div>
      </div>  
    </div>
  );
}

export default App;
