import { Link, Outlet, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../config/firebase';
import { toast } from 'react-toastify';

const Navbar = () => {
 
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    toast.info("Signed out!", {autoClose: 2000});
    navigate("/");
  }

  return (
    <div className='flex flex-col gap-3 justify-center items-center py-2 px-1'>
        <nav className='border border-black flex gap-2 py-2 px-4 justify-center items-center'>
            <Link to={'company/profile'}>Profile</Link>
            Navbar
            <button className='border border-black bg-slate-200 px-2 py-1 rounded' onClick={handleSignOut}>Sign Out</button>
        </nav>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Navbar