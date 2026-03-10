import React from 'react'
import {Formik ,Form ,Field } from "formik"
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
const backend_url=import.meta.env.VITE_Backend_URL

const Register = () => {
const nav=useNavigate()

  return (
     <div className='h-[90vh] w-full flex justify-center py-20 '>
      <div className='bg-gray-200 w-1/2 flex rounded-2xl overflow-hidden '>
         <div className='bg-pink-300 w-1/2'><img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1529419412599-7bb870e11810?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
         <div className=' flex-1'>
           <Formik initialValues={{name:"",email:"",password:"",cpassword:"",role:"user"}}
      onSubmit={async(value,{resetForm})=>{
        try {
          
          if(value.password===value.cpassword){
            console.log(value)
            const req=await axios.post(`${backend_url}/api/user/create`,value)
            toast(req.data.message)
            resetForm()
            setInterval(()=>{
               nav("/login")
            },1000)
          }
          else{
            toast("password doesnot match ")
          }
        } catch (error) {
          toast(error.response.data.message)
        }
        
      }}
      >
     
          <Form className='p-10  relative  flex flex-col top-10 gap-4' >
          <div className='flex flex-col'>
          <label htmlFor='name' className='pl-3'>Full Name</label>
          <Field name="name" id="name" type="text" required className="outline h-10 text-lg rounded-md pl-3 " />
          </div>
           <div className='flex flex-col'>
          <label htmlFor='email' className='pl-3'>Email</label>
          <Field name="email" id="email" required type="email" className="outline h-10 text-lg rounded-md pl-3" />
          </div>
          <div className='flex flex-col'>
          <label htmlFor='password' className='pl-3'>Password</label>
          <Field name="password" id="password" required type="password" className="outline h-10 text-lg rounded-md pl-3" />
          </div>
          <div className='flex flex-col'>
          <label htmlFor='cpassword' className='pl-3'>Confirm password</label>
          <Field name="cpassword" id="cpassword" required type="password" className="outline h-10 text-lg rounded-md pl-3" />
          </div>
          <button type="submit" className='bg-green-300 h-10 rounded-full mt-5 active:scale-90' >Sing Up</button>
           <NavLink to='/login'>Already have account ? <span className='text-blue-400'>Sing In</span></NavLink>
        </Form>
      </Formik>
         </div>
      </div>
      
      <ToastContainer />
    </div>
  )
}

export default Register