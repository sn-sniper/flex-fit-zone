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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/dashboard' element={<UserDashboard />}/>
        <Route path='/admin-123-456-789' element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
