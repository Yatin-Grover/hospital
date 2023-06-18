// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './Component/Header';
import Navbar from './Component/Header';
// import Bootstrapcarousel from './Component/Bootstrapcarousel';
import Home from './Component/Home';
import Aboutus from './Component/Aboutus';
import Department from './Component/Department';
import Specialist from './Component/Specialist';
import Signup from './Component/Signup';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Signin from './Component/Signin';
import Reports from './Component/Reports';
import Admin from './Component/Admin';
import Medicine from './Component/Medicine';
// import Payment from './Component/Payment';










function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    {/* <Bootstrapcarousel/> */}
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path ="/Aboutus" element={<Aboutus/>}/>
<Route path="/Department" element={<Department/>}/>
<Route path = "/Specialist" element={<Specialist/>}/>
<Route path = "/signup" element={<Signup/>}/>
<Route path = "/Contact" element={<Contact/>}/>
<Route path = "/Signin" element={<Signin/>}/>
<Route path = "/Reports" element={<Reports/>}/>
<Route path = "/Admin" element={<Admin/>}/>
<Route path = "/Medicine" element={<Medicine/>}/>
{/* <Route path = "/Payment" element={<Payment/>}/> */}







    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
