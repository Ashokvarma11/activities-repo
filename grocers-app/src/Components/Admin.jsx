import React, { useContext, useState } from 'react'
import { Link, Outlet, Routes, useNavigate } from 'react-router-dom'
import { Route } from 'react-router-dom'
import User, { UserDetails } from './User'
import { Globalcontext } from './Globalcontext'
import axios from "axios"


function Admin() {

    let[email,setEmail]=useState('')
    let[password,setPassword]=useState('')
    let{status,setStatus}=useContext(Globalcontext)
    let navigate=useNavigate();
    
    let handleSubmit=(e)=>{
      e.preventDefault();

let url=`http://localhost:9090/api/admin/login/${email}/${password}`
      axios.get(url).then(response=>{
        navigate('/adminlogin')
        setStatus(false)
        

      }).catch(err=>{
        console.log(err.response.data)
      })
        
       
    }
   return (


    // <div className="container">
    // <div style={{display:"flex",justifyContent:"center"}}>

    
    // <div style={{display:"flex", flexDirection:"column" }}>

  
       
    //     <form onSubmit={handleSubmit}>
 
    //     <div >
    //     <label>Enter your Admin</label>
    //     <input type='text' placeholder="Enter your Admin"  className="form-control" onChange={(e)=>setAdmin(e.target.value)}/>
    //     </div>
        
    //     <div>
    //     <label>Enter your Password</label>
    //     <input type='password' placeholder="Enter your Password"  className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
    //     </div>
        
       
    //     <div>
    //         <button className='btn btn-primary'>Sign In </button>
    //     </div>
    //     </form>
          
        
    // </div>
    // </div> 
    // </div>
<div>
 <div style={{display:"flex" ,justifyContent:"center"}}>
    
                <div className="w-25 mg-top nice-font">
                <form onSubmit={handleSubmit}>
                <h1>Admin login</h1>
                    <div class="mb-3">
                        <label for="productId" class="form-label">Enter the Admin Id : </label>
                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                      <label for="productDesc" class="form-label">Enter password : </label>
                      <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                  </form>     
                        </div>
                
               </div>
               </div>

    
  )
}







export function AddProduct() {
    let [productName, setProductName] = useState('');
    let [productPrice, setProductPrice] = useState('');
    let [productQuantity, setProductQuantity] = useState('');
    let [productId, setProductId]=useState(''); 
    let [category,setCategory]=useState('');
    let [productmsg,setProductmsg]=useState('')
  
    // Function to handle form submission
    let handleAddProduct = (e) => {
      
      e.preventDefault('')

      let url=`http://localhost:9090/api/admin/addproduct`
      let newProduct = {
        name: productName,
        status:"true",
        description:"",
        imageurl:"",
        category:category,
        amount: productPrice,
        quantity: productQuantity,
      };

      axios.post(url,newProduct).then(response=>setProductmsg("Product added Successfully")).catch(err=>setProductmsg("Product addding failed"))
     
      // Create a new product object with the entered details
      
  
      // You can send this product object to your backend or handle it as needed
    
  
      // Reset the form
      setProductName('');
      setProductPrice('');
      setProductQuantity('');
      setProductId('');
      setCategory('')



      
    };
  
    return (
      <div >



      <div>
      <AdminNav/>


         
          </div>
        
        <form style={{display:"flex", gap:"10px"}}>
          <div>
            <label>Product Name:</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div>
            <label>Product Price:</label>
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div>
            <label>Product Quantity:</label>
            <input
              type="number"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
            />
          </div>
          <div>
            <label>Category:</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleAddProduct}>
            Add Product
          </button>

        </form>
        
        <p>{productmsg}</p>
        </div>
      
    );
  }


export function DelProducts(){
  let [productId, setProductId] = useState(0);
  let [delmsg,setDelMsg]=useState('')
 

  let handleDelProduct=(e)=>{
    e.preventDefault();
    let url=`http://localhost:9090/api/admin/deleteproduct/${productId}`
    let data={productId:productId}
    axios.delete(url,data).then(response=>{
      console.log(response.data);
      if(response.data===true){
        setDelMsg("Employee deleted successfully")
      }
      else{
      
        setDelMsg(response.data.error)
      }}).catch(err=>console.log(err))

    


  }


return(
  <>
<div>



<div>
  <AdminNav/>
          </div>
<h2>Delete Products</h2>
        <form style={{display:"flex", gap:"20px"}}>
          <div>
            <label>Product id:</label>
            <input
              type="number"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>
         
           
          
          <button type="button" onClick={handleDelProduct}>
            Delete Product
          </button>
          <p>{delmsg}</p>
        </form>
        
      </div>
  
  
  </>
)
}

export function UpdateProducts(){

  const [productId, setProductId] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [discount, setDiscount] = useState(0);
  let  handleUpdateProduct = () => {
    if (!productId || !newPrice || !newQuantity) {
      alert('Please fill in all fields.');
      return;
    }
  }

  return(  <div>


<div>
  <AdminNav/>
          </div>
      <h2>Update Product</h2>
      <form style={{display:"flex", gap:"10px"}}>
        <div>
          <label>Product ID:</label>
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </div>
        <div>
          <label>New Price:</label>
          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
        </div>
        <div>
          <label>New Quantity:</label>
          <input
            type="number"
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
          />
        </div>
        <div>
          <label>Discount:</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleUpdateProduct}>
          Update Product
        </button>
      </form>
    </div>
  );
}




export function AdminNav(){
  const {status,setStatus}=useContext(Globalcontext)


  return(

<div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
<strong>
<a class="navbar-brand" href="/">Admin Dashboard</a>
</strong>

<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarText">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">

<li class="nav-item">
<Link class="nav-link" to="/add">Add Products</Link>
</li>
<li class="nav-item  ">
<Link class="nav-link" to="/del">Delete Products</Link>
</li>
<li class="nav-item ">
<Link class="nav-link" to="/update">Update Products</Link>
</li>
<li class="nav-item ">
<Link class="nav-link" to="/view">View Requests</Link>
</li>
<li class="nav-item ">
<Link class="nav-link" to="/addemployee">Add Employee</Link>
</li>
<li class="nav-item ">
<Link class="nav-link" to="/delemployee">Delete Employee</Link>
</li>
<li class="nav-item ">
<Link class="nav-link" to="/generatereports">Generate Reports</Link>
</li>
<li class="nav-item ">
<Link class="nav-link" to="/adminlogout">Logout</Link>
</li>

</ul>


</div>
</div>
</nav>

</div>
  )
}
  

export function AddEmployee(){
  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3003');
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'OPTIONS');



  let[empId,setEmpId]=useState('')
  let[emppass,setEmpPass]=useState('')
  let[name,setName]=useState('')
  let [msg,setMsg]=useState('')

  let handleAdd=async (e)=>{
    e.preventDefault()
    
    let url='http://localhost:9090/api/admin/addemployee'
    let data={email:empId,name:name,password:emppass}

    axios.post(url,data).then(response=>setMsg("Employee added successfully")).catch(err=>setMsg("Adding employee failed"))


  }
    


  
return(



  <div>

    <AdminNav/>
 <div style={{display:"flex" ,justifyContent:"center"}}>
    
                <div className="w-25 mg-top nice-font">
                <form >
                <h1>Add Employee</h1>
                    <div class="mb-3">
                        <label for="productId" class="form-label">Enter Email: </label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmpId(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                      <label for="productDesc" class="form-label">Create password : </label>
                      <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>setEmpPass(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                      <label for="productDesc" class="form-label">Enter Name: </label>
                      <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={handleAdd} >Add</button>
                    <p>{msg}</p>
                  </form>     
                        </div>
                        
                
               </div>
               </div>

)
}


export function DelEmployee(){

let [msg,setMsg]=useState('')
let [id,setId]=useState('')
let handleDelete=(e)=>{
  e.preventDefault();

  let url=`http://localhost:9090/api/admin/deleteemployee/${id}`

  let data={employee_id:id}

  axios.delete(url,data).then(response=>{
    console.log(response.data);
    if(response.data===true){
      setMsg("Employee deleted successfully")
    }
    else{
      console.log(response.data);
      setMsg(response.data.error)
    }}).catch(err=>console.log(err))
  
}
return(
  <div>

    <AdminNav/>
                <div style={{display:"flex" ,justifyContent:"center"}}>
                <div className="w-25 mg-top nice-font">
                <form onSubmit={handleDelete}>
                <h1>Delete  Employee</h1>
                    <div class="mb-3">
                        <label for="productId" class="form-label">Enter the Employee Id : </label>
                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setId(e.target.value)}/>
                    </div>
                   
                    <button type="submit" class="btn btn-primary">Delete</button>
                    <p>{msg}</p> 
                  </form> 
                     
                        </div>
                        
                
               </div>
              
               </div>
              




)

}

export default Admin