import React from 'react'
import { useNavigate } from 'react-router-dom';
import instance from '../lib/axios-config';

type LoginPayload = {
  email: string;
  password: string;
}

const LoginPage = () => {
  // Form states
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  // Router
  const navigate = useNavigate();

  const handleLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
    // prevent the screen from refreshing when you submit
    e.preventDefault();

    const payload: LoginPayload = {
      email,
      password
    }

    try {
      // make the req to the server
      const { data } = await instance.post("/auth/login", payload);

      // Redirect user to dashboard Dashboard 
      navigate("/dashboard");
    } catch (error: any) {
      console.error("error");
      if (error.response && error.response.status === 401) {
        console.error("Invalid email or password");
      } else if (error.response && error.response.status === 400) {
        console.error("Email or password cannot be empty");
      }
    }
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center py-20 max-w-screen-lg mx-auto w-11/12'>
        <form onSubmit={(e) => handleLoginForm(e)} className="flex flex-col items-center justify-center gap-5 w-[300px]">
          <h1 className='font-bold text-xl'>Welcome back</h1>
          <div className='flex flex-col items-center justify-center gap-3 w-full'>
            <input type="email" placeholder="name@example.com" className='px-5 py-2 rounded-md bg-slate-200 shadow-xl w-full' />
            <input type="password" placeholder="Password" className='px-5 py-2 rounded-md bg-slate-200 shadow-xl w-full' />
            <button type='submit' className='px-5 py-2 bg-slate-900 rounded-md text-white w-full'>login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginPage
