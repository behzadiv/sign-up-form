import { useState } from "react";
import "../App.css"
const SignUpForm = () => {
    const[user,setUser]=useState({name:"",email:"",password:""})
    const changeHandler = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const submitHandler =(e)=>{
        e.preventDefault()
        console.log("ok");
    }
    return (  
        <form onSubmit={submitHandler}>
            <div>
                <label>Name</label>
                <input type="text" name="name" onChange={changeHandler} value={user.name}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" onChange={changeHandler} value={user.email}/>
            </div>
            <div>
                <label>Password</label>
                <input type="text" name="password" onChange={changeHandler} value={user.password}/>
            </div>
            <button type="submit">submit</button>
        </form>
    );
}
 
export default SignUpForm;