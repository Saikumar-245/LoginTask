import React, { useContext } from 'react'
import { Taskcontext } from './Loginform'
const DisplayTask = () => {

let {task,form,handleCategory,settask,setstate,selective}=useContext(Taskcontext)

      let {selectedCategory}=selective  
    let handledelte=(id)=>
    {
        let filtered=task.filter(item=>item.id!=id)
        settask(filtered)
    }
    let handleUpdate=(id)=>{
        let filtered=task.filter(item=>item.id!=id)
        console.log(filtered);
        let editnote=task.find(item=>item.id==id)
         settask(filtered);
         setstate(editnote)
    }
  return (
    <main className="displaySection">
      <section className="selectedNotes">
        <div className="selectDisplayBlock" value={selectedCategory} onChange={handleCategory}>
          <label >Select the category</label>
          <input type="radio" name='selectedCategory' value='all'/><span>All</span>
          <input type="radio" name='selectedCategory' value='genaral'/><span>Genaral</span>
          <input type="radio" name='selectedCategory' value='technical'/><span>Technical</span>
          <input type="radio" name='selectedCategory' value='offical'/><span>Offical</span>
        </div>
        <main className="displayBlock">
          <div className="displayContent">
            { 
                 task.length==0 ? "Loading...":task.map((value)=>
            {
              return selectedCategory=="all" ?(
                <div className="output">
                  <h1>Title:{value.title}</h1>
                  <p>Description:{value.description}</p>
                  <p>Category:{value.category}</p>
                  <button onClick={()=>handledelte(value.id)}>Delete</button>
                  <button onClick={()=>handleUpdate(value.id)}>Update</button>
                </div>
              ):(
                selectedCategory==value.category &&
                (
                  <div className="output">
                  <h1>Title:{value.title}</h1>
                  <p>Description:{value.description}</p>
                  <p>Category:{value.category}</p>
                </div>
                )
              )
            })
            }
          </div>
        </main>
      </section>
    </main>
  )
}

export default DisplayTask