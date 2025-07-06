import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {

    // const user = auth.currentUser;

    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();
    console.log(user);

    if (!user)
        navigate('/');
    return (
    <div className='h-screen flex flex-col items-center'>
        Home
        <h3>Welcome to Business Marketplace, {user && user.displayName}!</h3>
    </div>
    )
}

export default Home