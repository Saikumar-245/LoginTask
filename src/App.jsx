import React from 'react'
import "./style.css"
import Loginform from './Loginform'
import "./design.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Addtask from './Addtask'

const App = () => {
  return (
  
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Loginform/>}></Route>
     <Route path='/addtask' element={<Addtask/>}></Route>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App