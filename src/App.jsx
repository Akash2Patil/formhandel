import React, { useRef, useState } from 'react'
import Fromhook from './Fromhook'

const App = () => {
  const [val,setval] = useState({name : "", email : ""})
  
  const name = useRef(null)
  const email = useRef(null)
  const handelSubmit = (e)=>{
    e.preventDefault();
    // console.log(name.current.value);
    // console.log(email.current.value);
    // console.log(val);
    
  }
    
  return (
    <div className='p-4'>
      <form action="" onSubmit={handelSubmit} className='flex flex-col w-[20%] gap-3 mb-50'>
        <input ref={name} onChange={(e)=> setval({...val, name: e.target.value})} className='border-2' type="text" placeholder='name'/>
        <input ref={email} onChange={(e)=> setval({...val, email: e.target.value})} className='border-2' type="email" placeholder='email'/>
        <input type="submit" />
      </form>
      <h1>Form By react form hook</h1>
      <Fromhook/>
    </div>

  )
}

export default App