import Link from 'next/link'
import { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('email:', email, 'password:', password)
    // code for submitting the login form
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-6 ">Login to Skillfusion</h1>
      <form onSubmit={handleSubmit} className="bg-blue-100 shadow-lg rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline shadow-md"
        >
          Log in
        </button>
        <Link href="/Signup" className='no-underline hover:underline ... pt-5 text-center text-sm md:text-lg hover:decoration-blue-400'>Don't you have an account ? Signup </Link>
      </form>
    </div>
    </div>
    </div>
  )
}

export default LoginForm
