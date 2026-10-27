import Header_component from './components/Header_component'
import Footer_component from './components/Footer_component'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import UserHome from './pages/UserHome'
import Register from './pages/Register'

import HrHome from './pages/HrHome'
import AdminHome from './pages/AdminHome'
import EmpHome
 from './pages/EmpHome'


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header_component />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/register" element={<Register />} />
        <Route path='/HrHome'element={<HrHome/>}></Route>
        <Route path='/EmpHome'element={<EmpHome/>}></Route>
        <Route path='/AdminHome'element={<AdminHome/>}></Route>
      </Routes>

      <Footer_component />
    </BrowserRouter>
  );
}

export default App;
