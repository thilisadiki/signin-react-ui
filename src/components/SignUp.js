import React from 'react'

export default function SignUp({className, setSwitchAuth}) {
  return (
    <div className={className}>

        <form className="flex flex-col gap-5 mb-10">
          <label>Email</label>
          <input placeholder="example@gmail.com" className="border-2 py-3 px-2 rounded-md foucus:outline-none"></input>

          <label>Password</label>
          <input 
          type="password"
          placeholder="" className="border-2 py-3 px-2 rounded-md foucus:outline-none"></input>

          <label>Confirm password</label>
          <input
           type="paswword"
           placeholder="" className="border-2 py-3 px-2 rounded-md foucus:outline-none"></input>
           <button className='w-full bg-green-500 py-5 rounded-md text-white mb-10' >Sign up</button>
        </form>
        <p className="text-center mb-10">Already have account?{" "} 
         <span className="text-blue-500 underline cursor-pointer" onClick={()=>setSwitchAuth(value=>!value)} >Sign in</span> </p>
    </div>
  )
}
