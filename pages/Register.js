import { useState } from 'react'
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
const RegistrationForm = () => {
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // handle form submission logic here
  }
  const [schoolName, setSchoolName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 ">
            <div className="flex items-top justify-top">
            <h2 className="text-xl font-bold mb-4 ml-4">Register to SkillFusion</h2>
          <button
              className="bg-[#3eb29d8b] hover:bg-[#2B7C6D] text-white font-bold px-2 rounded ml-10 mb-3"
              onClick={() => setShowPopup(false)}
            >
              <CloseIcon/>
            </button>
        </div>
      <form className="bg-white shadow-md rounded px-10 pt-6 pb-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="flex text-gray-700 font-bold mb-2" htmlFor="schoolName">
            School Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="schoolName"
            type="text"
            placeholder="Enter your school name"
            value={schoolName}
            onChange={(event) => setSchoolName(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="flex text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="flex text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className='grid grid-cols-2'>
        <div className="flex items-center justify-between">
          <Link
            className="bg-[#3eb29d8b] shadow-lg  transition duration-1000 hover:bg-[#2B7C6D] hover:shadow-cyan-800/50 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" href='/Sidebar'
          >
            Register
          </Link>
        </div>
        </div>
      </form>
   
       
          </div>
        </div>
      )}
      <a href="#" className=' focus:outline-none text-blue-700 bg-blue-100 px-10 py-4 shadow-md rounded-full pointer-cursor font-bold  hover:shadow-x1 active:scale-90 translation duration-150 mt-0' onClick={() => setShowPopup(true)}>Register to SkillFusion</a>
    </>
  )
}

export default RegistrationForm
