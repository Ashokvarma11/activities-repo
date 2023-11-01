import React, { useContext } from 'react'
import { Globalcontext } from './Globalcontext'
import { Link, useNavigate } from 'react-router-dom'


function Employee() {


  let {status,setStatus}=useContext(Globalcontext)
let navigate=useNavigate()
  
 let handleLogin=()=>{

  setStatus(false)
  navigate('/Employeepage')


 }
  return(
    <div>
 <div style={{display:"flex" ,justifyContent:"center"}}>
    
                <div className="w-25 mg-top nice-font">
                <form onSubmit={handleLogin}>
                <h1>Employee Login</h1>
                    <div class="mb-3">
                        <label for="productId" class="form-label">Enter the Employee Id : </label>
                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                      <label for="productDesc" class="form-label">Enter password : </label>
                      <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                  </form>     
                        </div>
                
               </div>
               </div>
        );
}





export function EmployeePage(){

  


  return(
    <>
    <NavigationBar/>
    
    </>
  );
}


export function SendRequest(){
  return(
      <div>
        <NavigationBar/>
        <div style={{display:"flex",justifyContent:"center"}}>
          <div className="w-25 mg-top nice-font">
          <form>
          <h1>Employee Request Form </h1>
              <div class="mb-3">
                  <label for="productId" class="form-label">Enter the product Id : </label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div class="mb-3">
                <label for="productDesc" class="form-label">Enter the description of the request : </label>
                <input type="text" class="form-control" id="exampleInputPassword1"/>
              </div>
              <div class="mb-3">
                <label for="productQuantity" class="form-label">Enter the quantity required :  </label>
                <input type="number" class="form-control" id="exampleInputPassword1"/>
              </div>
              <div class="mb-3">
      <label for="addOrDelete" class="form-label">Choose your option : </label>
           <select class="form-select" id="productType" name="productType">
            <option value="option1">Add Products</option>
               <option value="option2">Delete Products</option>
          </select>
</div>

             
              <button type="submit" class="btn btn-primary">Submit Request</button>
            </form>     
                  </div>
       </div>
         
          
      </div>
  );
}



export function NavigationBar(){
  return(
      <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
<strong>
<a class="navbar-brand" href="/">Employee Dashboard</a>
</strong>

<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarText">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
<li class="nav-item ">
<Link class="nav-link active" aria-current="page" to="/employeehome">Home</Link>
</li>
<li class="nav-item">
<Link class="nav-link" to="/send-request">Send Request</Link>
</li>
<li class="nav-item  ">
<Link class="nav-link" to="/update-order-status">Update order status</Link>
</li>
<li class="nav-item ">
<Link class="nav-link" to="/user-unlock">User unlock</Link>
</li>
<li class="nav-item">
<Link class="nav-link" to="edit-profile">Edit profile</Link>
</li>
<li class="nav-item">
<Link class="nav-link" to="/employeelogout">Log out</Link>
</li>

</ul>

</div>
</div>
</nav>
</div>
  );
}





export function UpdateOrder() {
    return (
       
      <div>
        <NavigationBar/>
        <div style={{display:"flex",justifyContent:"center"}}>
        <div className="w-25 mg-top">
          <form>
            <h1>Update Order</h1>
            <div className="mb-3">
              <label for="customerId" className="form-label">
                Enter the user Id:
              </label>
              <input
                type="text"
                className="form-control"
                id="customerId"
                name="customerId"
                aria-describedby="emailHelp"
              />
            </div>
  
            <div className="mb-3">
              <label for="orderStatus" className="form-label">
                Choose the order status:
              </label>
              <select className="form-select" id="orderStatus" name="orderStatus">
                <option value="Shipped">Shipped</option>
                <option value="OutForDelivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
  
            <button type="submit" className="btn btn-primary">
              Update Status
            </button>
          </form>
        </div>
        </div>
       
      </div>
    );
  }




  export function UserUnlock(){
    return(
        <div>
          <NavigationBar/>
            <div style={{display:"flex",justifyContent:"center"}}>
            <div className="w-25 mg-top">
                <form>
                <h1>User Unlock</h1>
                <div class="mb-3">
                  <label for="userId" class="form-label">Enter the UserID :  </label>
                  <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>

                
               <h5>Current Status : <span class="badge text-bg-danger">Locked</span></h5> 
               <label for="orderStatus" className="form-label">
                Change user status to :
              </label>
               <select className="form-select" id="userStatus" name="orderStatus">
                <option value="Shipped">Lock</option>
                <option value="OutForDelivery">Unlock</option>
              </select>
                </form>
            </div>
        
            </div>
            </div> 
    );
}



export function EmployeeHome(){
  return(
<div>

  <NavigationBar/>
  <center>
     <div style={{width: "18rem"}}>
     {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ndtv.com%2Fentertainment%2Franbir-kapoor-reacts-to-being-called-toxic-4511426&psig=AOvVaw1NuZE5FoAP3rAyynxShPP4&ust=1698818046754000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCrvN3Mn4IDFQAAAAAdAAAAABAE" class="card-img-top" alt="..."/> */}
     <div >
     <h5 class="card-title">Welcome</h5>
      <p class="card-text">Name : </p>
       <p class="card-text">Employee Id : </p>
     </div>
   </div>
   </center>
      </div>
      

  );
}

export default Employee