import { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setpassword('')
  }

  return (
    <div className='flex min-h-screen w-full items-center justify-center px-4'>
      <div className='w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-emerald-900/20 backdrop-blur-xl'>
        <div className='mb-8 text-center'>
          <p className='text-xs font-medium uppercase tracking-[0.32em] text-emerald-300'>Employee portal</p>
          <h1 className='mt-3 text-3xl font-semibold text-white'>Welcome back</h1>
        </div>

        <form onSubmit={submitHandler} className='space-y-4'>
          <div>
            <label className='mb-2 block text-sm text-slate-300'>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full rounded-2xl border border-slate-700 bg-slate-950/50 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30 placeholder:text-slate-500'
              type='email'
              placeholder='Enter your email'
            />
          </div>

          <div>
            <label className='mb-2 block text-sm text-slate-300'>Password</label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              className='w-full rounded-2xl border border-slate-700 bg-slate-950/50 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30 placeholder:text-slate-500'
              type='password'
              placeholder='Enter your password'
            />
          </div>

          <button
            type='submit'
            className='mt-2 w-full cursor-pointer rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-4 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:scale-[1.01] hover:shadow-xl hover:shadow-emerald-500/25'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
