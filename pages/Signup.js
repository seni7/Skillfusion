import { useState,useEffect} from 'react';
import Image from "next/image";
import slide1 from '../public/slide1.jpg'
import slide2 from '../public/slide2.jpg'
import slide3 from '../public/slide3.jpeg'
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // perform validation and submit form
    if (password === confirmPassword) {
      // submit form
      console.log('Form submitted successfully!');
    } else {
      // show error message
      alert('Passwords do not match');
    }
  };

  const [index,setIndex]=useState(0);

  const array= [slide1,slide2,slide3]

  function loop(count){
    if(count==array.length){
      return count=0;
    }
    if(count<0)
    {
      return count=array.length-1;
    }
    return count;
   }
   useEffect(()=>{
    const interval=setInterval(
      ()=> setIndex(count=>loop(count+1))
      ,7000);
      return ()=>clearInterval(interval)
   })

  return (
    <div className={`min-h-screen bg-[#2B7C6D] flex flex-col md:align-middle py-12  sm:px-6 lg:px-40`}>
    
      <div className="sm:mx-20 sm:w-full sm:max-w-4xl ml-3 mr-3 md:ml-32  md:flex grid-row-2">
        <div className="bg-white rounded-t-2xl rounded-b-2xl  py-0 px-0 shadow sm:rounded-lg sm:px-0 ">
          <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Sign up</h2>
          <form onSubmit={handleSubmit} className="space-y-6 rounded-b-2xl  bg-blue-50 shadow-md md:px-16">
            <div className='pl-5 pr-5 pt-8 pb-2'>
              <label className="block text-gray-700 text-lg font-bold mb-2 " htmlFor="email">
                Email 
              </label>
              <input
                className=" appearance-none focus:border border-blue-300 rounded w-full py-2 px-3 md:px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='pl-5 pr-5'>
              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="appearance-none focus:border border-blue-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='pl-5 pr-5'>
              <label className="block text-gray-700 text-lg font-bold  mb-2" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                className=" appearance-none focus:border border-blue-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm-password"
                type="password"
                placeholder="********"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className=' flex items-center justify-center pb-5'>
              <button
                className="bg-[#3eb29d8b] shadow-lg  transition duration-1000 hover:bg-[#2B7C6D] hover:shadow-cyan-800/50 text-white font-bold py-2 px-20 rounded  focus:outline-none focus:shadow-outline "
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          </div>
        </div>
        <div className='h-116 w-96 relative hidden lg:block  md:-ml-4'>
        <Image
        src={array[index]}
        alt="Picture"
        layout="fill" 
        objectFit="cover" 
        className="rounded-r-lg" 
        />
      </div>
      </div>
    </div>
  );
};

export default Signup;
