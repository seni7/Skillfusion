import Image from "next/image";
import Link from "next/link";
import Headerprofail from "../components/Headerprofail"
import {MenuIcon, SearchIcon, UserCircleIcon} from '@heroicons/react/solid'
function Header() {
  return (
    <>
       <header className="sticky top-0 z-50 grid grid-cols-3 bg-blue-50 shadow-md py-3 px-3 md:px-6">
        
        <div className="relative flex items-center h-10 cursor-pointer">
            
             <Link href="/">
             <Image
            
             src="/Logo0.png" 
            //  layout="fill"
             objectFit="contain"
             objectPosition="left"
             width={200}
             height={100}
             />
             </Link>
        </div>
 
        <div className="flex items-center md:border-0 rounded-full py-2 md:shadow-sm">
             {/* <input className="flex-grow pl-5 pr-5 bg-transparent outline-none text-sm text-gray-600" type="text" placeholder="start your search "/>
             <SearchIcon className=" hidden md:inline-flex h-8 bg-black text-white rounded-full p-2 cursor-pointer md:mx-2"/> */}
        </div>
 
        <div className="flex items-center space-x-4 justify-end text-gray-500">
         <p className="hidden md:inline">username</p>
         <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
           {/* <MenuIcon className="h-6"/>
           <UserCircleIcon className="h-6"/> */}
           <Headerprofail/>
         </div>
        </div>
     </header>
     
    </>
 
  )
}

export default Header