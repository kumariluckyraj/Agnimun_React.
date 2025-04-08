import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Signup from './Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import About from './About'
import Committees from './Committees'
import Schedule from './Schedule'


function App() {
  

  return (
   <BrowserRouter>
   <Routes>
  <Route path="/" element={<Signup />} /> {/* Default route */}
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/home" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/committees" element={<Committees/>}/>
  <Route path="/schedule" element={<Schedule/>}/>
  <Route path="/home" element={<Home/>}/>
 

 

</Routes>

   </BrowserRouter>
     
        
     
         
   
  )
}

export default App
