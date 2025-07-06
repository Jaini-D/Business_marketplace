import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'
import { auth, db } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

const EmployeeSignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUid, setCompanyId } = useAuth();

  const navigate = useNavigate();

  const employeeSignInClick = async () => {
    
    const toastId = toast.loading("Signing in...");

    try {

      const user = await signInWithEmailAndPassword(auth, email, password);

      if (user) {
        console.log(user);
        console.log(user.user);
        setUid(user.user.uid);
        
        const q = query(collection(db, 'employees'), where ("employeeEmail", "==", email));
        console.log(`Q: ${q}`);
        const employeeSnapshot = await getDocs(q);
        console.log(`SN: ${employeeSnapshot}`);
        if (!employeeSnapshot.empty){
          const employeeDoc = employeeSnapshot.docs[0];
          console.log(`Employee Snapshot: ${employeeDoc.data()}`);
          setCompanyId(employeeDoc.data().companyUID);
        } else {
          console.log("No snapshot");
          setCompanyId(null);
        }


        toast.update(toastId, {
          render: "Signed in successfully!",
          type: 'success',
          isLoading: false,
          autoClose: 2000
        });
        navigate('/home');
      }
    } catch (err: any) {
      console.error(err);

      if (err.code === 'auth/invalid-email') {
          toast.update(toastId, {
          render: "Email does not exist",
          type: 'error',
          isLoading: false,
          autoClose: 2000
        });
      } else if (err.code === 'auth/invalid-credential') {
          toast.update(toastId, {
          render: "Invalid Credentials",
          type: 'error',
          isLoading: false,
          autoClose: 2000
        });
      }

      
    }

  }

  return (
    <div className='h-screen flex flex-col gap-2 justify-center items-center'>
      EmployeeLogin

      <div className='border border-black rounded-xl p-5 flex flex-col gap-2'>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='border border-black px-2 rounded-sm' type='email' required />

        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} className='border border-black px-2 rounded-sm' type='password' required />

        <button onClick={employeeSignInClick} className='border border-black bg-blue-300 w-fit px-4 py-1 self-center rounded-sm'>Sign In</button>
      </div>
    </div>
  )
}

export default EmployeeSignIn