import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import LandingPage from './pages/LandingPage';
import CompanyLogin from './pages/CompanyLogin';
import EmployeeLogin from './pages/EmployeeLogin';
import CompanySignUp from './pages/CompanySignUp';
import CompanyDetailsForm from './pages/CompanyDetailsForm';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/company' element={<CompanyLogin />} />
          <Route path='/company/signup' element={<CompanySignUp />} />
          <Route path='/company/signup/submitDetails' element={<CompanyDetailsForm />} />
          <Route path='/employee' element={<EmployeeLogin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
