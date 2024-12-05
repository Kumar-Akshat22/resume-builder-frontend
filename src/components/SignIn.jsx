import React, { useState } from 'react'
import SignInImage from '../assets/SignInImage.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { TailSpin } from 'react-loader-spinner'
import toast, {Toaster} from 'react-hot-toast'

function SignIn() {
    const [signInData, setSignInData] = useState({usernameORemail:"", password:""})
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const signIn =async ()=>{
        setIsLoading(true)
        const res = await axios.post('/api/v1/users/signin', signInData)
        console.log(res.data);  
        if(res.data.statusCode === 202){
            localStorage.setItem('AccessToken', res.data.data.AccessToken)
            localStorage.setItem('RefreshToken', res.data.data.RefreshToken)
            setIsLoading(false)
            toast.success('Logged In Successfully')
            navigate('/')
        }
        setIsLoading(false)
    }
  return (
    <section className='w-full bg-[#f1f6fb]'>
        <div className="container max-w-[790px] min-h-screen mx-auto flex justify-center items-center p-4">
            {/* Sign In Form */}
            <div className='w-[65%] flex flex-col gap-6 items-center border bg-white shadow-md'>

                <div className='w-full flex flex-col items-center mt-5'>
                    <img src={SignInImage} height='190' width='160'></img>
                    <h2 className='mt-6 text-[24px] font-poppins'>Sign-in to Your Account</h2>
                </div>

                {/* Input Form  */}
                <div className='w-[60%] flex flex-col'>
                    
                        <label className=''>
                            <span className='text-sm'>Username or Email</span>
                            <input name='usernameORemail' onChange={e=>setSignInData(prev=>({...prev, [e.target.name]:e.target.value}))} className='appearance-none w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1' type='text'></input>
                        </label>

                        <label>
                            <span className='text-sm'>Password</span>
    
                            <input type='password'  onChange={e=>setSignInData(prev=>({...prev, [e.target.name]:e.target.value}))}  name='password'  className='appearance-none w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1'></input>
                        </label>
                </div>

                {/* Sign In Button */}
                <div className='w-[60%]'>
                    <button onClick={signIn} className={ `${isLoading?'bg-[#3983fa]':''} w-full flex items-center justify-center mt-[1rem] bg-[#f1f8fe] px-[3rem] py-[0.6rem] rounded-full text-lg uppercase font-poppins text-[#3983fa] font-semibold hover:bg-[#3983fa] hover:text-white transition-all duration-300  `}>
                        {
                            isLoading?
                            <TailSpin color='white' height={30} strokeWidth={8}/>:
                            "Sign In"
                        }
                    </button>
                </div>

                {/* Footer */}
                <div className='w-full mt-[1.5rem] border-t bg-[#f6f5f4] p-4 flex flex-col items-center justify-center gap-1'>
                    <Link><p className='text-[#3983fa]'>Forgot your Password?</p></Link>
                    <p>Don't have an account? <Link to='/signup' className='text-[#3983fa]'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SignIn