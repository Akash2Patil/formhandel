import React from 'react'
import { useForm } from 'react-hook-form'

const Fromhook = () => {
    const{register,handleSubmit} = useForm();
   
  return (
    <div>
       <form action="" onSubmit={handleSubmit(data => console.log(data))} className='flex flex-col w-[20%] gap-3'>
        <input {...register('name')}  className='border-2' type="text" placeholder='name'/>
        <input {...register('email')}  className='border-2' type="email" placeholder='email'/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Fromhook