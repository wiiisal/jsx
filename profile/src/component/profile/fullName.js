import React, { useState } from 'react'

export default function FullName() {
    const[name,setName]=useState('')
const[lastName,setLatName]=useState('')

const handleChange=(e)=>{
    setName(e.target.value)
}
const handleInPut=(e)=>{
    setLatName(e.target.value)
}

  return (
    <div>
      <div class="row">
         <div class="col">
           <input type="text" class="form-control" placeholder="First name" aria-label="First name" onChange={(e)=>handleChange(e)}/>
           <h1>{name}</h1>
         </div>
         <div class="col">
           <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" onInput={(e)=>handleInPut(e)}/>
           <h2>{lastName}</h2>
        </div>
       </div>
       <div>


       </div>
    </div>
  )
}
