import Image from "next/image"
function Banner() {
  return (
    <div className="relative h-[200px] sm:h-[300px] 
    lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
        <Image
        src="/banner.jpg"
        layout="fill"
        objectFit="cover"
        />
        <div className="absolute top-1/2 w-full text-center">
            <p className="text-sm-b sm:text-lg text-black-400 ">Skillfusion...For the bright future</p>
        
            <button className="text-blue-500 bg-white px-10 py-4 shadow-md rounded-full pointer-cursor font-bold my-3 hover:shadow-x1 active:scale-90 translation duration-150">Register Now</button>
        </div>
    </div>
  )
}

export default Banner