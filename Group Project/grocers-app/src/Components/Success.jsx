import React from 'react'


import { Link } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import { AddProduct } from './Admin'
function Success() {
  return (
   

       
          <div>
        <div>
          <Link to='/add'>Add products</Link>
          <Link to='/del'>del products</Link>
          <Link to='/update'>Add products</Link>
          <Link to='/adminlogout'>logout</Link>
          </div>
         
        
        
          <Routes>
                <Route path='/' element={<div>Choose an action</div>} />
                
                <Route path='/del' element={<div>Delete Products component content</div>} />
                <Route path='/update' element={<div>Update Products component content</div>} />
              </Routes>
          </div>
         
        
        
  )
}

export default Success