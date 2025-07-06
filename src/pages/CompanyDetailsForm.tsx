import React from 'react'

const CompanyDetailsForm = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        CompanyDetailsForm

        <form className='flex flex-col gap-2'>
            <label>Company Name</label>
            <input type='text' required />

            <label>Address</label>
            <input type='text' required />

            <label>Business Registration Number (BRC)</label>
            <input type='text' required />    
        </form>  
    </div>
  )
}

export default CompanyDetailsForm