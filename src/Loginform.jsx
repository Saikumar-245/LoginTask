import React, { Children, createContext, useEffect, useState } from 'react'
import Nav from './Nav'
import {v4 as uuidv4} from 'uuid'
export const Taskcontext=createContext()

let getLocalitems=()=>
   {
    let lists=localStorage.getItem("lists");
    if(lists)
    {
        return JSON.parse(lists)
    }
    else{
        return [];
    }
    }
    const data={name:"ReactJS",type:"Library"};
    localStorage.setItem('lists',JSON.stringify(data))
const Loginform = ({children}) => {

    let [form,SetForm]=useState({
        email:"",
        password:"",
    })
    let {email,password}=form;


    
        let [errors,setErrors]=useState({})
    let handleinput=(e)=>
    {
        let {name,value}=e.target
        SetForm({...form,[name]:value})
    }

    
        
    let [task,settask]=useState(getLocalitems());
    const addtask=(title,description,category)=>
    {
        settask([...task,{title,description,category ,id:uuidv4()}])
    }
    
    let [state,setstate]=useState({
        title:"",
        description:"",
        category:""
    })


    //to add task into localstorage
    useEffect(()=>
    {
        localStorage.setItem("lists",JSON.stringify(task))
    },[task])

    let [selective,setselective]=useState({
        selectedCategory:"all",

    })
    let handleCategory=(e)=>
    {
       let {name,value}=e.target;
       setselective({[name]:value})
       settask(task)
    }

    let handlesubmit = (e) => {
        e.preventDefault()

        let ValidationErrors={}
       
        //email
        if(email==""){
            ValidationErrors.email="This is mandatory"
    }
    else if(!/\S+@\S+\.\S+/.test(email)){
        ValidationErrors.email="THis should be a valid email address"
    }
    //  password
    if(password==""){
        ValidationErrors.password="This is a mandatory"
    }
    console.log(form);
    
    setErrors(ValidationErrors)
}
  return (
    <><Nav/>
    <center>
    <form action="" onSubmit={handlesubmit} className='form'> 
        <img src="../img/Person.png" alt="leaf"  className='leaf'/>
        <h2 className='loginf'>Login Form</h2>
    <section className="email">
        <label htmlFor="" className='label'>EMAIL</label> 
        <div> <input type="text"  placeholder='Enter email' value={email} onChange={handleinput}/></div>
        <div className='form-errors '>
            {errors.email && <span>{errors.email}</span>}
         </div>
    </section>
    <section className="password"><label htmlFor="">PASSWORD</label>
    <div> <input type="password"  placeholder='Enter password' value={password} onChange={handleinput}/>
    </div>
    <div className='form-errors '>
            {errors.password && <span>{errors.password}</span>}
         </div>
       </section>
       <section className='form-group'>
        
        <div className='inp mt-2 p-2 my-3'>
          <button className='submit' >SUBMIT </button>
        </div>
    </section>
   </form> </center>
   <Taskcontext.Provider value={{state,setstate,addtask,task,selective,handleinput,handleCategory,form,settask,SetForm,setselective}}>
    {children}
   </Taskcontext.Provider>
   </>
  )
}

export default Loginform