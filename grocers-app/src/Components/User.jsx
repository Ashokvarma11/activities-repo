import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Globalcontext } from './Globalcontext'
import { useContext } from 'react'
import axios from 'axios'

function User() {
    let[email,setEmailId]=useState('')
 let [firstname,setFirstName]=useState('')
 let [lastname,setLastName]=useState('')
 let [password,setPassword]=useState('')
 let [phone,setPhone]=useState('')
 let[DOB,setDob]=useState('')
 let[erorr,setError]=useState('')
 let[lasterror,setLasterror]=useState('')
 let[pswderror,setPswderror]=useState('')
let[emailerror,setEmailIderror]=useState('')
 let [phnerror,setPhnerorr]=useState('')
let[doberror,setDoberror]=useState("")
let[register,setRegister]=useState('')
let[address,setAddress]=useState('')
let [addresserror,setAddresserror]=useState('')
 let navigate=useNavigate()
 let handleSubmit=(e)=>{
    e.preventDefault();
    if(firstname.length>=3){
        setError("")

    }
    else{
        setError("Enter atleast 3 characters")
    }
    if(lastname.length>=3){
        setLasterror("")

    }
    else{

        setLasterror("Enter atleast 3 characters")
    }
    // if(!email.includes("@.")){
    //     setEmailIderror("Enter valid mailid")
    // }
    // else{
    //     setEmailIderror("")
    // }

    if(password.length>=8){
        setPswderror("")
    }
    else{
        setPswderror("Your password should contain atleast 8 characters")
    }

    if(phone.length==10){
        setPhnerorr("")
    }
    else{
        setPhnerorr("Enter valid 10 digit number")
    }
    if(DOB.length!=0){
        setDoberror("")
    }
    else{

        setDoberror("Enter valid DOB")

    }
    if(address.length!=0){
      setAddresserror("")
    }
    else{
      setAddresserror("Enter valid Address")
    }

    if(firstname.length>=3 && lastname.length>=3 &&password.length>=8 &&  phone.length==10 && DOB!="" && address.length!=0){

      let url='http://localhost:9090/api/user/save'
      let data={firstname:firstname,lastname:lastname,email:email,password:password,phone:phone,dob:DOB,address:address}
      axios.post(url,data).then(response=> navigate('/login')).catch(err=>console.log(err))

    }
    else{
     navigate('/user')


    }
    
    
 }
  return (
  <div className="container">
    <div style={{display:"flex",justifyContent:"center" ,marginTop:"10px"}}>

    
    <div style={{display:"flex", flexDirection:"column" }}>

  
        <h3>Sign Up</h3><hr/>
        <form onSubmit={handleSubmit}>

        <div>
        <label>Enter your firstName</label>
        <input type='text' placeholder="Enter your firstName"  className="form-control" onChange={(e)=>setFirstName(e.target.value)}/>
        <p style={{color:"red"}}>{erorr}</p>
        </div>
        <div >
        <label>Enter your lastName</label>
        <input type='text' placeholder="Enter your LastName"  className="form-control" onChange={(e)=>setLastName(e.target.value)}/>
        <p style={{color:"red"}}>{lasterror}</p>
        </div>
        <div >
        <label>Enter your Email</label>
        <input type='email' placeholder="Enter your emailId"  className="form-control" onChange={(e)=>setEmailId(e.target.value)}/>
        
        </div>
        
        <div>
        <label>Enter your Password</label>
        <input type='password' placeholder="Enter your Password"  className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
        <p style={{color:"red"}}>{pswderror}</p>
        </div>
        <div >
        <label>Enter your Phone</label>
        <input type='number' placeholder="Enter your Phone"  className="form-control" onChange={(e)=>setPhone(e.target.value)}/>
        <p style={{color:"red"}}>{phnerror}</p>
        </div>
        <div >
        <label>Enter your DOB</label>
        <input type='date' placeholder="Enter your DOB"  className="form-control" onChange={(e)=>setDob(e.target.value)}/>
        <p style={{color:"red"}}>{doberror}</p>
        </div>
        <div>
        <label>Enter your Address:</label>
        <input type='text' placeholder="Enter your ADDRESS"  className="form-control" onChange={(e)=>setAddress(e.target.value)}/>
     
        </div>
        <div>
            <input type="submit" value='register'></input>
        </div>
        
        </form>
        <p style={{color:"green"}}>{register}</p>
        <Link to='/login'>Sign In</Link>
    </div>
    </div> 
    </div>
   
    





  )
}


export function UserLogin(){
    const { status,setStatus } = useContext(Globalcontext)



let [email,setEmail]=useState('')
let [pswd,setPswd]=useState('')
let navigate=useNavigate();

let handleSignIn=(e)=>{
    e.preventDefault();
    setStatus(false)
    
let url=`http://localhost:9090/api/user/login/${email}/${pswd}`
    axios.get(url).then(response=> navigate('/userlogin')).catch(err=>console.log(err))
    
}

    return(

        <div className="container">
    <div style={{display:"flex",justifyContent:"center"}}>

    
    <div style={{display:"flex", flexDirection:"column" }}>

  
        <h3>Sign In</h3><hr/>
        <form onSubmit={handleSignIn}>

       
        
        <div >
        <label>Enter your Email</label>
        <input type='email' placeholder="Enter your emailId"  className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        
        <div>
        <label>Enter your Password</label>
        <input type='password' placeholder="Enter your Password"  className="form-control" onChange={(e)=>setPswd(e.target.value)}/>
        </div>
        
       
        <div>
            <input  className='btn btn-primary' type="submit" value="Login" />
        </div>
        </form>
          
        
    </div>
    </div> 
    </div>


    )



}



export function UserDetails(){
    return(
        <>
         <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
<strong>
<a class="navbar-brand" href="/">User Dashboard</a>
</strong>

<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarText">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
<li class="nav-item ">
<Link class="nav-link active" aria-current="page" to="/home">Home</Link>
</li>
<li class="nav-item">
<Link class="nav-link" to="/viewitems">View items</Link>
</li>
<li class="nav-item  ">
<Link class="nav-link" to="/cart">Cart</Link>
</li>
<li class="nav-item ">
<Link class="nav-link" to="/editprofile">Edit Profile</Link>
</li>
<li class="nav-item">
<Link class="nav-link" to="/funds">Funds</Link>
</li>
<li class="nav-item">
<Link class="nav-link" to="/userlogout">Log out</Link>
</li>

</ul>

</div>
</div>
</nav>
</div>

     {/* <Link to='/home'>Home</Link>
     <Link to ='/cart'>Cart</Link> */}

        







        </>


    )
}




export function UserHome(){


    
    const{cart,setCart}=useContext(Globalcontext)
    let [totalquan,setTotalquan]=useState(0)

   




    let handleCart=(ele)=>{



        const existingItem = cart.find((item) => item.id === ele.id);

        if (existingItem) {
          // If the item is already in the cart, update its quantity
          const updatedCart = cart.map((item) => {
            if (item.id === ele.id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
        
      
          setCart(updatedCart);
        }
          else{
            setCart([...cart,{...ele,quantity:1}])
          }


        
        

    }
   

let arr=[{"id":1,"name":"apple","price":20},{"id":2,"name":"orange","price":30},{"id":3,"name":"banana","price":50}]


    return(
    <div >
        <UserDetails/>
        
        <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)",gap:"10px",padding:"10px"}}> 
        {arr.map((ele)=>{
            return(
            
            // <div style={{backgroundColor:"grey"}}>
            //     <p>{ele.name}</p>
            //     <p>{ele.price}</p>
            //     <button onClick={()=>handleCart(ele)}>add to cart</button>


            //     </div>


  <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Product:{ele.name}</h5>
    <p>Price:{ele.price}</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button onClick={()=>handleCart(ele)}>add to cart</button>
  </div>
</div>
                
                )
        })}
        </div>

</div>




    )







}



export function UserCart(){
   
    const{cart,setCart}=useContext(Globalcontext)
    const calculateTotalQuantityAndCount = () => {
        let totalQuantity = 0;
        let itemCount = 0;
        let price=0;
    
        for (const item of cart) {


          totalQuantity += item.quantity;
          itemCount++;
          price=price+(item.quantity*item.price);
        }
    
        return { totalQuantity, itemCount ,price};
      };
    
      const { totalQuantity, itemCount,price } = calculateTotalQuantityAndCount();
   
        
        
    const handleInc = (productId) => {
        setCart((prevCart) => {
          return prevCart.map((item) => {
            if (item.id === productId ) {
              return { ...item, quantity: item.quantity + 1 };
            }
            
            return item;
          });
        });
      };
    
      const handleDec = (productId) => {
        setCart((prevCart) => {
          return prevCart.map((item) => { 
            if (item.id === productId && item.quantity>0) {
              return { ...item, quantity:item.quantity- 1 };
            }
            return item;
          });
        });
      };

      const handleDel = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
      };

    return(
       <>
  <div>
       <UserDetails/>


        </div>
       <br/>
       <div style={{display:"flex",justifyContent:"center"}}>
        <div style={{display:"flex" , justifyContent:"center",flexDirection:"column"}}>
      <div>
       {cart.map((ele)=>{
        return(
          <div class="card" style={{width: "20rem",padding:"10px"}}>
            <div style={{display:"flex", flexDirection:"row",gap:"10px",backgroundColor:"white"}}>
                <span>{ele.name}</span>
                <span>Price:{ele.price}</span>
                <button onClick={()=>{handleDec(ele.id)}} className='btn btn-primary'>-</button>
                <span>{ele.quantity}</span>
                <button onClick={()=>{handleInc(ele.id)}} className='btn btn-primary'>+</button>
                <button onClick={()=>{handleDel(ele.id)}} className='btn btn-primary'>del</button>
               
               
            </div>
            </div>
        )
       })}
       </div>
      <div class="card" style={{width: "20rem",padding:"10px"}}>
       <p>Total Quantity:{totalQuantity}</p>
       <p>Total Items:{itemCount}</p>

       <p>Total Price:{price}</p>
       <button className='btn btn-primary'>Place oder</button>
       </div> 
       </div>
       </div>
       </>

    )
}



export function UserFunds(){

let [funds,setFunds]=useState('')

let handleFunds=(e)=>{
  e.preventDefault()
} 

  return(
    <div>
      <UserDetails/>
      <h2>Wallet balance:{}</h2>

      <form style={{padding:"10px"}}>
      <input type='number' onChange={(e)=>setFunds(e.target.value)}></input><br></br>
      <button className='btn btn-primary' onClick={handleFunds}>Add funds</button>
      </form>
           

    </div>


  )
}




export default User