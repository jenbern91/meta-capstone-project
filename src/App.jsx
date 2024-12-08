import { useState } from 'react'
import './App.css'
import './assets/layouts/Nav.css';
import './assets/layouts/Hero.css';
import './assets/layouts/Specials.css';
import './assets/layouts/CustomersSay.css';
import './assets/layouts/Chicago.css';
import './assets/layouts/Footer.css';

import Nav from './components/Nav'
import Hero from './components/Hero'
import Specials from './components/Specials'
import CustomersSay from './components/CustomersSay'
import Chicago from './components/Chicago'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>

   
<Nav />
<Hero />
<Specials />
<CustomersSay />
<Chicago />
<Footer /> 

 </>
  )
}

export default App
