import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import Chart from './filledlinechart'
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-[#2b7c6d1e] h-screen flex grid-row-2'>
    <div className="fixed top-18 left-0 h-screen  md:w-80 bg-[#2B7C6D] text-white z-50">
      <button
        className="p-4 focus:outline-none md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMdMenu size={24} />
      </button>
      <nav className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        <ul className="py-4">
          <li className="px-6 py-3 mx-3 mb-3 text-lg font-medium bg-[#10312b21] hover:bg-[#10312b] rounded-lg shadow-x1 active:scale-90 translation duration-1500">
            <a href="/Sidebar">Home</a>
          </li>
          <li className="group relative dropdown  px-6 py-3 mx-3  mb-3 text-lg font-medium bg-[#10312b21]   hover:bg-[#10312b] shadow-x1 active:scale-90 translation duration-150" >
            <a href="#">Add Resource</a>

            <div className="group-hover:block dropdown-menu absolute hidden h-auto left-72 -mt-3">
          <ul className="top-0  w-52 bg-[#10312bf4] shadow px-2 py-4">
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-1 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-2 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-3 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-4 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-5 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-6 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-7 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-8 </a></li>
            </ul>
      </div>
          </li>
          <li className="group relative dropdown px-6 py-3 mx-3  mb-3 text-lg font-medium bg-[#10312b21]   hover:bg-[#10312b] shadow-x1 active:scale-90 translation duration-150" >
            <a href="#">Add Exercise</a>

            <div className="group-hover:block dropdown-menu absolute hidden h-auto left-72  -mt-8 ">
         
          <ul className="top-0  w-52 bg-[#10312bf4] shadow px-2 py-4">
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-300">Grade-1 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-300">Grade-2 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-300">Grade-3 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-300">Grade-4 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-300">Grade-5 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-300">Grade-6 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-300">Grade-7 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-300">Grade-8 </a></li>
            </ul>
      </div>
          </li>
          <li className="group relative dropdown  px-6 py-3 mx-3  mb-3 text-lg font-medium bg-[#10312b21]   hover:bg-[#10312b] shadow-x1 active:scale-90 translation duration-150" >
            <a href="#">Add Exam</a>

            <div className="group-hover:block dropdown-menu absolute hidden h-auto left-72 -mt-24">
          <ul className="top-0  w-52 bg-[#10312bf4] shadow px-2 py-4">
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-1 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-2 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-3 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-4 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-5 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-6 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-7 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-8 </a></li>
            </ul>
      </div>
          </li>
          <li className="group relative dropdown  px-6 py-3 mx-3  mb-3 text-lg font-medium bg-[#10312b21]  hover:bg-[#10312b] shadow-x1 active:scale-90 translation duration-150" >
            <a href="#">Download Resource</a>

            <div className="group-hover:block dropdown-menu absolute hidden h-auto left-72 -mt-40">
          <ul className="top-0  w-52 bg-[#10312bf4] shadow px-2 py-4">
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-1 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-2 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-3 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-4 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-5 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-6 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-7 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-8 </a></li>
            </ul>
      </div>
          </li>
          <li className="group relative dropdown  px-6 py-3 mx-3  mb-3 text-lg font-medium bg-[#10312b21]   hover:bg-[#10312b] shadow-x1 active:scale-90 translation duration-150" >
            <a href="#">Download Exam</a>

            <div className="group-hover:block dropdown-menu absolute hidden h-auto left-72 -mt-56">
          <ul className="top-0  w-52 bg-[#10312bf4] shadow px-2 py-4">
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-1 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-2 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-3 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-4 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-5 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-6 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-7 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-8 </a></li>
            </ul>
      </div>
          </li>
          <li className="group relative dropdown  px-6 py-3 mx-3  mb-3 text-lg font-medium bg-[#10312b21]  hover:bg-[#10312b] shadow-x1 active:scale-90 translation duration-150" >
            <a href="#">Upload Result</a>

            <div className="group-hover:block dropdown-menu absolute hidden h-auto left-72 -mt-72">
          <ul className="top-0  w-52 bg-[#10312bf4] shadow px-2 py-4">
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-1 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-2 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-3 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-4 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-5 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-6 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-7 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-8 </a></li>
            </ul>
      </div>
          </li>
          <li className="group relative dropdown  px-6 py-3 mx-3  mb-3 text-lg font-medium bg-[#10312b21]  hover:bg-[#10312b] shadow-x1 active:scale-90 translation duration-150" >
            <a href="#">See Result</a>

            <div className="group-hover:block dropdown-menu absolute hidden h-auto left-72 -mt-80">
          <ul className="top-0  w-52 bg-[#10312bf4] shadow px-2 py-4">
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-1 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-2 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-3 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-4 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-5 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-6 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-7 </a></li>
              <li class="py-1"><a className="block rounded-sm text-center py-2 w-48 ml-0 text-white-500 font-bold text-base uppercase hover:cursor-pointer hover:bg-[#c6dedaf6] shadow-xl  active:scale-90 translation duration-1000">Grade-8 </a></li>
            </ul>
      </div>
          </li>
          <li className="px-6 py-3 mx-3  mb-3  text-lg font-medium bg-[#10312b21]  hover:bg-[#10312b] shadow-x1 active:scale-90 translation duration-150">
            <a href="#">Books</a>
          </li>
        </ul>
      </nav>
      </div>
      <div>
              <Chart/>
              {/* <h1 className='text-white ml-96 py-56 px-24'>HELLO</h1> */}
      </div>
  
    </div>
  );
}

export default Sidebar;
