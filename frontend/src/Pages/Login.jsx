import React from 'react'
import {Formik ,Form ,Field } from "formik"
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-[90vh] w-full flex justify-center py-20 '>
      <div className='bg-gray-200 w-1/2 flex rounded-2xl overflow-hidden '>
         <div className='bg-pink-300 w-1/2'><img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
         <div className=' flex-1'>
           <Formik initialValues={{email:"",password:""}}
      onSubmit={async(value,{resetForm})=>{
        console.log(value)
        resetForm()
      }}
      >
     
          <Form className='p-10  relative  flex flex-col top-30 gap-4' >
          <div className='flex flex-col'>
          <label htmlFor='email' className='pl-3'>Email</label>
          <Field name="email" id="email" type="email" className="outline h-10 text-lg rounded-2xl pl-3" />
          </div>
          <div className='flex flex-col'>
          <label htmlFor='password' className='pl-3'>Password</label>
          <Field name="password" id="password" type="password" className="outline h-10 text-lg rounded-2xl pl-3" />
          </div>
          <button type="submit" className='bg-green-300 h-10 rounded-full mt-5 active:scale-90' >Sing in</button>
           <NavLink to='/register'>Don't have account ? <span className='text-blue-400'>Sing Up</span></NavLink>
        </Form>
      </Formik>
         </div>
      </div>
      
      
    </div>
  )
}

export default Login