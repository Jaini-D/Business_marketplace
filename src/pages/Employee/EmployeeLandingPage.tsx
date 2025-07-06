import React from 'react'
import { useNavigate } from 'react-router-dom';

const EmployeeLandingPage = () => {
  const navigate = useNavigate();

    const handleEmployeeSignUpClick = () => {
        navigate('signup')
    }

    const handleEmployeeSignInClick = () => {
        navigate('signIn');
    }

  return (
    <div className='border border-black h-screen flex flex-col justify-center items-center gap-2'>
        <p>Employee Landing Page</p>
        <button className='border border-white bg-black text-white px-4 py-2 rounded-xl w-24' onClick={handleEmployeeSignInClick}>Sign In</button>
        <button className='border border-black px-4 py-2 rounded-xl w-24' onClick={handleEmployeeSignUpClick}>Sign Up</button>
    </div>
  )
}

export default EmployeeLandingPage