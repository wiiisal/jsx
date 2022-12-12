import React, { useState } from 'react'

export default function Adress() {
    const[adress,setAdress]=useState('')
    const handleClick=()=>{
       setAdress( <h3><form>inter your adress</form></h3>)
    }

  return (
    
    <div>
      <button onClick={handleClick}>adress</button>
{adress}
    </div>
  )
}
