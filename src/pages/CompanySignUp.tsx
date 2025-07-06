import React, { use, useState, type FormEvent } from 'react'
import { auth, db } from '../config/firebase';
import { addDoc, collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const CompanySignUp = () => {
  
    const [companyEmail, setCompanyEmail] = useState('');
    const [primaryEmail, setPrimaryEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [passwordError, setPasswordError] = useState('');
    const [companyEmailError, setCompanyEmailError] = useState('');

    const navigate = useNavigate();

    const handleSignUp = async (e: FormEvent) => {
         try {
            e.preventDefault();
            
            if (password !== confirmPassword) {
                setPasswordError("Passwords dont match!")
            } else {
                setPasswordError('');

                const doc = query(collection(db, 'users'), where('companyEmail', '==', companyEmail));

                const snapShot = await getDocs(doc);

                if (snapShot.empty) {
                    setCompanyEmailError('');
                    console.log("Company doesnt exist");

                    addDoc(collection(db, 'users'), {
                        companyEmail,
                        primaryEmail,
                    });

                    createUserWithEmailAndPassword(auth, primaryEmail, password);

                    console.log("Created Account!")
                    alert("Created Account!")

                    navigate('/company/signup/submitDetails')
                    
                } else {
                    console.log("Company exists");
                    setCompanyEmailError("Company has already been registered!")
                } 
            }

            
        } catch(err) {
            console.error(err);
        }

    }

    return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <p>Company Sign Up</p>
        <p>Form</p>
        <form onSubmit={handleSignUp} className='border border-black flex flex-col justify-center items-center p-20'>
            
            <div className='flex flex-col justify-center items-center gap-2'>
                <div className='text-red-500'>{companyEmailError}</div>
                <label>Company Email</label>
                <input className='border' type='email' required onChange={(e) => setCompanyEmail(e.target.value)} value={companyEmail} />
            </div>

            <div className='flex flex-col justify-center items-center gap-2'>
                <label>Primary Email</label>
                <input className='border' type='email' required onChange={(e) => setPrimaryEmail(e.target.value)} value={primaryEmail} />
            </div>

            <div className='text-red-500 mt-4'>
                {passwordError}
            </div>
            <div className='flex flex-col justify-center items-center  gap-2'>
                <label>Password</label>
                <input className='border' type='password' required onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>

            <div className='flex flex-col justify-center items-center gap-2'>
                <label>Confirm Password</label>
                <input className='border' type='password' required onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
            </div>

            <button type='submit' className='mt-4 border bg-blue-500 px-4 py-2 rounded-xl'>Sign Up!</button>
        </form>
    </div>
  )
}

export default CompanySignUp