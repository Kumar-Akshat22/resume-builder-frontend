import React, { useState } from 'react'
import SignInImage from '../assets/SignInImage.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'

function SignUp() {

    const [signUpFormData , setSignUpFormData] = useState({

        username:'',
        password:'',
        email:'',
    })

    const signIn = async ()=>{
        const res = await axios.post('/api/v1/users/signup', signUpFormData)
        console.log(res);
    }

  return (
    <section className='w-full bg-[#f1f6fb]'>
        <div className="container max-w-[790px] min-h-screen mx-auto flex justify-center items-center p-4">
            
            {/* Sign Up Form */}
            <div className='w-[65%] flex flex-col gap-6 items-center border bg-white shadow-md'>

                <div className='w-full flex flex-col items-center mt-5'>
                    <img src={SignInImage} height='190' width='160'></img>
                    <h2 className='mt-6 text-[24px] font-poppins'>Sign-up for Your Account</h2>
                </div>

                {/* Input Form  */}
                <div className='w-[60%] flex flex-col'>
                    
                        <label className=''>
                            <span className='text-sm'>Username </span>
                            <input name='username' onChange={e=>setSignUpFormData(prev=>({...prev, [e.target.name]:e.target.value}))} className='appearance-none w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1' type='text'></input>
                        </label>

                        <label className=''>
                            <span className='text-sm'>Email </span>
                            <input  name='email' onChange={e=>setSignUpFormData(prev=>({...prev, [e.target.name]:e.target.value}))} className='appearance-none w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1' type='text'></input>
                        </label>

                        <label>
                            <span className='text-sm'>Password</span>
                            <input  name='password' onChange={e=>setSignUpFormData(prev=>({...prev, [e.target.name]:e.target.value}))} type='password' className='appearance-none w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1'></input>
                        </label>
                    
                </div>

                {/* Sign In Button */}
                <div className='w-[70%]'>
                    <button onClick={signIn} className="w-full mt-[1rem] bg-[#f1f8fe] px-[3rem] py-[0.6rem] rounded-full text-lg uppercase font-poppins text-[#3983fa] font-semibold hover:bg-[#3983fa] hover:text-white transition-all duration-300">Sign Up</button>
                </div>

                {/* Footer */}
                <div className='w-full mt-[1.5rem] border-t bg-[#f6f5f4] p-4 flex flex-col items-center justify-center'>
                    
                    <p>Already have an account? <Link to='/signin' className='text-[#3983fa]'>Sign In</Link></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SignUp