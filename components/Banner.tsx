import Image from "next/image"
import Link from "next/link"
import Register from '../pages/Register'
function Banner() {
  return (
    <>
       <div className="relative  h-[250px] sm:h-[300px] 
    lg:h-[350px] xl:h-[400px] 2xl:h-[450px]">
        <Image
        alt=""
        src="/banner.jpg"
        layout="fill"
        objectFit="cover"
        />
        
        <div className="absolute top-1/2 w-full mt-0  text-center  items-center  ">
        
        {/* <Link  className="focus:outline-none text-blue-700 bg-blue-100 px-10 py-4 shadow-md rounded-full pointer-cursor font-bold  hover:shadow-x1 active:scale-90 translation duration-150 mt-10" href="/Register">Register Now</Link> */}
            <Register/>
            <p className="mt-5 text-sm-b sm:text-lg text-black-400 ">Skillfusion...For the bright future</p>
        
        </div>
      
      </div>

    </>
  
   
  )
}

export default Banner