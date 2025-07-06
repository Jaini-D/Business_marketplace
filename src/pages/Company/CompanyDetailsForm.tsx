import { doc, setDoc } from 'firebase/firestore';
import { useState, type FormEvent } from 'react'
import { auth, db } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompanyDetailsForm = () => {

  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [brc, setBRC] = useState('');
  // const [companyName, setCompanyName] = useState('');

  const navigate = useNavigate();

  const user = auth.currentUser;

  const handleSubmit = async (e: FormEvent) => {

    e.preventDefault();

    const docref = localStorage.getItem('companyDocRef');
    try {

      const toastId = toast.loading("Updating Profile...");

      if (docref && user) {
        const docRef = doc(db, 'users', docref);
        await setDoc(docRef, {
          companyName,
          brc,
          address,
          accessEmails: [],
          items: []
        }, { merge: true});

        await updateProfile(user, {
          displayName: name
        });

        console.log("Updated Details");
        console.log(user);
        toast.update(toastId, {
          render: "Updated Profile!",
          type: 'success',
          isLoading: false,
          autoClose: 1000
        });
        navigate('/home');

      } else {
        throw new Error("Company ID not set to local storage");
      } 
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        CompanyDetailsForm

        <form onSubmit={handleSubmit} className='flex flex-col gap-2 border border-black p-5 rounded-xl'>
            <label>Company Name</label>
            <input className='border border-black px-2' value={companyName} type='text' required onChange={(e) => setCompanyName(e.target.value)} />

            <label>Full Name</label>
            <input className='border border-black px-2' value={name} type='text' required onChange={(e) => setName(e.target.value)} />

            <label>Address</label>
            <input className='border border-black px-2' value={address} type='text' required onChange={(e) => setAddress(e.target.value)} />

            <label>Business Registration Number(BRC)</label>
            <input className='border border-black px-2' value={brc} type='text' required onChange={(e) => setBRC(e.target.value)} />

            <button className='border border-black bg-green-200 w-24 self-end' type='submit'>Next</button>    
        </form>  
    </div>
  )
}

export default CompanyDetailsForm