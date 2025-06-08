import React, { useState } from 'react'

const Addtask = () => {
    let [task,settask]=useState(
        {
            title:"",
            description:"",
            category:""

        })
    let {title,description,category}=task

    let handleinput=(e)=>
    {
        let {name,value}=e.target
        settask({...task,[name]:value})
    }
    let handlesubmit=(e)=>
    {
         e.preventDefault()
         console.log(task);
         
    }
  return (
   <>
    <main className="mainFormBlock">
        <form   onSubmit={handlesubmit}>
            <div className="form-content">
                <label >Title:</label>
                <input type="text"  
                name='title' 
                placeholder='Enter Title' value={title} onChange={handleinput}
               />
            </div>

            <div className="form-content">
                <label >Description:</label>
               <textarea name="description" cols="30" rows="10" value={description} onChange={handleinput}></textarea>
            </div>
            <div className="form-content">
                <label >Category</label>
                <select name="category" value={category} onChange={handleinput} className="category">
                    <option value="" name='category'>Select</option>
                    <option value="genaral" name='category'>Genaral</option>
                    <option value="technical" name='category'>Technical</option>
                    <option value="offical" name='category'>Official</option>
                </select>
            </div>
            <div className="form-content ">
                <button className='buttons'><p>SUBMIT</p></button>
            </div>
        </form>
    </main>
    </>
  )
}

export default Addtask