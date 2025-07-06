import React from 'react'
import { useNavigate } from 'react-router-dom'

const CompanyLogin = () => {

    const navigate = useNavigate();

    const handleCompanySignUpClick = () => {
        navigate('signup')
    }


  return (
    <div className='border border-black h-screen flex flex-col justify-center items-center gap-2'>
        <p>CompanyLogin</p>
        <button className='border border-white bg-black text-white px-4 py-2 rounded-xl w-24'>Sign In</button>
        <button className='border border-black px-4 py-2 rounded-xl w-24' onClick={handleCompanySignUpClick}>Sign Up</button>
    </div>
  )
}

export default CompanyLogin