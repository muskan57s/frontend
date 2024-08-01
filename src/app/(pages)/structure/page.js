'use client'

import Parent from '@/app/components/Parent';
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form'

function pages() {
  const {register,handleSubmit,reset ,formState:{errors}}=useForm();

  const onSubmit=(data)=>{
      console.log(data)
      reset();

  }
  
  return (
    <div className='max-w-sm mx-auto h-screen'>
         <h2 className='text-center text-violet-400 font-semibold'>Welcome back to login</h2>
      <div className='w-full shadow shadow-gray-600 p-10 my-10'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className='my-4 font-semibold'>
              <label>Email:</label>
              <input type='mail' {...register("email",{required:true})} className='outline-none w-full bg-slate-100 shadow shadow-gray-400 p-1 font-normal'></input>
             {
              errors.email?.type=="required" && <p className='text-red-400'>Email is required</p>
             }
            </fieldset>
            <fieldset className='font-semibold'>
              <label>Password:</label>
              <input type='password' {...register("password",{required:true})} className='outline-none bg-slate-100 shadow shadow-gray-400 w-full p-1'></input>
            {
              errors.password?.type=="required" && <p className='text-red-400'>Password must be required</p> 
            }
            </fieldset>
            {/* <button type='submit' className='bg-slate-600 text-white p-1 my-4'></button> */}
            <Link href='/files' type='submit' className='bg-slate-600 text-white p-1 my-4' >submit</Link>
          </form>
      </div>
         <Parent/>
    </div>
  )
}

export default pages