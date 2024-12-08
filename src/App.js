import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Offers from './Pages/Offers';
import './Styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Plans from './Pages/Plans';
import UserDashboard from './Pages/UserDashboard';
import Admin from './Pages/Admin';
import PaymentMethod from './Pages/PaymentMethod';
import { RegistrationProvider } from './Context/RegistrationContext';
function App() {
  return (
    <BrowserRouter>
      <RegistrationProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/plans' element={<Plans />} />
          <Route path='/payment-method' element={<PaymentMethod />} />
          <Route path='/dashboard' element={<UserDashboard />} />
          <Route path='/admin-123-456-789' element={<Admin />} />
        </Routes>
      </RegistrationProvider>
    </BrowserRouter>
  );
}

export default App;
