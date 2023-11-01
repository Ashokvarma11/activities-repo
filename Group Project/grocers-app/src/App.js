import logo from './logo.svg';
import './App.css';

import { Link ,Routes,Route} from 'react-router-dom';
import User, { UserCart, UserDetails, UserFunds, UserHome, UserLogin } from './Components/User';
import Employee, { EmployeeHome, EmployeePage, SendRequest, UpdateOrder, UserUnlock } from './Components/Employee';

import Nav from './Components/Nav';
import { useState } from 'react';
import { Globalcontext } from './Components/Globalcontext';
import Success from './Components/Success';
import Admin, { AddEmployee, AddProduct, AdminNav, DelEmployee, DelProducts, UpdateProducts } from './Components/Admin';
function App() {

let [status,setStatus]=useState(true)
let [cart,setCart]=useState([])
  
  
  return (
    <>
    <Globalcontext.Provider value={{status,setStatus,cart,setCart}}>

    <div className='container-fluid alert alert-secondary' style={{height:"100vh"}}>
    <div style={{textAlign:"center"}}>

  <h1 style={{textAlign:"center"}}>Welcome to Grocers App</h1>
  </div>
   {status?<Nav />:""}




   <Routes>
      <Route path='' element={<User/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path='/login' element={<UserLogin/>}></Route>
      <Route path='/employee' element={<Employee />}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/adminlogin' element={<AdminNav/>}></Route>
      <Route path='/add' element={<AddProduct/>} />
      <Route path='/del' element={<DelProducts/>} />
      <Route path='/update' element={<UpdateProducts/>} />
      <Route path='/send-request' element={<SendRequest/>}/>
     <Route path='/update-order-status' element={<UpdateOrder/>}></Route>
     <Route path='/Employeepage' element={<EmployeePage/>}> </Route>
      <Route path='/adminlogout' element={<Nav/>} />
      <Route path='/home' element={<UserHome/>}/>
      <Route path='/userlogin' element={<UserDetails/>}></Route>
      <Route path='/user-unlock' element={<UserUnlock/>}></Route>
      <Route path='/cart' element={<UserCart/>}></Route>
      <Route path='/employeehome' element={<EmployeeHome/>}/>
      <Route path='/userlogout' element={<Nav/>}/>
      <Route path='/funds'element={<UserFunds/>}/>

      <Route path='/addemployee' element={<AddEmployee/>}/>
      <Route path='/delemployee' element={<DelEmployee/>}/>
      <Route path='/employeelogout' element={<Nav/>}/>
      
    
      
    </Routes>
    

    </div>
    

    </Globalcontext.Provider>
    

    
    </>  
    
  );
}


export default App;
