import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css'

import LandingPage from './pages/LandingPage';
import CompanyLogin from './pages/Company/CompanyLandingPage';
import CompanySignUp from './pages/Company/CompanySignUp';
import CompanyDetailsForm from './pages/Company/CompanyDetailsForm';
import EmployeeSignIn from './pages/Employee/EmployeeSignIn';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import EmployeeLandingPage from './pages/Employee/EmployeeLandingPage';
import Profile from './pages/Profile';

function App() {

  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          
          <Route path='/company' element={<CompanyLogin />} />
          <Route path='/company/signup' element={<CompanySignUp />} />
          <Route path='/company/signup/submitDetails' element={<CompanyDetailsForm />} />
          

          <Route path='/employee' element={<EmployeeLandingPage />} />
          <Route path='/employee/signIn' element={<EmployeeSignIn />} />
          <Route path='/home' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='company/profile' element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
