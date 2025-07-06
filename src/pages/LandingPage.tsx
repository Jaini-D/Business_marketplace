import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    
    const navigate = useNavigate();

    const handleCompanyClick = () => {
        navigate('/company');
    }

    const handleEmployeeClick = () => {
        navigate('/employee');
    }
  
    return (
    <div className='border border-black flex flex-col items-center h-screen justify-center'>
        <p>Landing Page</p>
        <div className='flex justify-center gap-2'>
            <button className='border border-black rounded-xl px-4 py-2 hover:bg-black hover:text-white duration-300'
            onClick={handleCompanyClick}>Company</button>
            <button className='border border-black rounded-xl px-4 py-2 hover:bg-black hover:text-white duration-300'
            onClick={handleEmployeeClick}>Employee</button>
        </div>
    </div>
  )
}

export default LandingPage