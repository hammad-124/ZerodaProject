import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './landing_page/home/Homepage.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignupPage from './landing_page/signup/Signup.jsx'
import AboutPage from './landing_page/about/Aboutpage.jsx'
import Pricingpage from './landing_page/pricing/Pricingpage.jsx'
import Supportpage from './landing_page/support/Supportpage.jsx'
import Productpage from './landing_page/product/product.jsx'
import Notfound from './landing_page/Notfound.jsx'
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Navbar/>
  <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/signup' element={<SignupPage/>}></Route>
    <Route path='/about' element={<AboutPage/>}></Route>
    <Route path='/pricing' element={<Pricingpage/>}></Route>
    <Route path='/product' element={<Productpage/>}></Route>
    <Route path='/support' element={<Supportpage/>}></Route>
    <Route path='*' element={<Notfound/>}></Route>

 </Routes>
 <Footer/>
</BrowserRouter>
)
