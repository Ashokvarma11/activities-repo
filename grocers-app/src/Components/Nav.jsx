import React, { useContext } from 'react'

import { Route, Router, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import User, { UserDetails, UserLogin } from './User'
import Employee from './Employee'
import Admin, { AdminSuccess, Success } from './Admin'
import { Globalcontext } from './Globalcontext'

function Nav() {


  
  return (
   

    <>



    
     {/* <div style={{textAlign:"center"}}>
      
    <div style={{display:"flex",justifyContent:"center" ,backgroundColor:"black",display:"inline-block",borderRadius:"10px"}}>
  <div style={{display:"flex",gap:"10px",padding:"10px"}}>
  <Link to='/user' style={{textDecoration:"none", color:"white"}}>User</Link>
  <Link to='/employee' style={{textDecoration:"none",color:"white"}}>Employee</Link>
  <Link to='/admin' style={{textDecoration:"none",color:"white"}}>Admin</Link>
 
  </div>
      
      
      
     
    </div>
    </div>  */}




<div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
<strong>
<a class="navbar-brand" href="/">Welcome Dashboard</a>
</strong>

<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarText">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">

<li class="nav-item">
<Link class="nav-link" to="/user">User</Link>
</li>
<li class="nav-item  ">
<Link class="nav-link" to="/employee">Employee</Link>
</li>
<li class="nav-item ">
<Link class="nav-link" to="/admin">Admin</Link>
</li>

</ul>

</div>
</div>
</nav>
</div>


    
    </>  
      
      
  )
}

export default Nav