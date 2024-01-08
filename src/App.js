
import React, {useState} from "react"; 
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

export default function App() {
  const [switchAuth, setSwitchAuth] = useState (false);
  
  return (
    <div className='bg-yellow-900 h-screen flex justify-center items-center'>
      <div className='bg-white p-5 m-2 w-full sm:w-96 flex justify-center flex-col'>
        <h1 className='text-center mt-10 mb-10 text-3x1 font-bold'>Welcome Back!</h1>
        <button className='w-full bg-blue-500 py-5 rounded-md text-white mb-10' >Continue with Google</button>
       <div className="grid grid-cols-3 gap-2 mb-10">
        <div className="flex items-center">
          <span className="w-full h-1 bg-gray-300 block"></span>
        </div>
        <p className="text-center text-lg">or with email</p>
        <div className="flex items-center">
          <span className="w-full h-1 bg-gray-300 block"></span>
        </div>
       </div>

       <div className='whitespace-nowrap overflow-hidden'> 
       <SignUp 
        className={`inline-block w-full transition-all align-top
        duration-1000 ${switchAuth ? "-translate-x-full" : "translate-x-0"}`} 
        setSwitchAuth={setSwitchAuth} />

        <SignIn 
          className={`inline-block w-full transition-all duration-1000 ${switchAuth ? "-translate-x-full" : "translate-x-0"}`}
           setSwitchAuth={setSwitchAuth} />
       </div>
      
       
    </div>
  </div>  
  );
}
