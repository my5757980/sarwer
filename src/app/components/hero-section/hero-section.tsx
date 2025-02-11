import Image from "next/image"
import Link from "next/link"
export default function HeroSection(){
  return(
    <div className="overflow-x-hidden">
      



      {/* hero section */}

      <div className="m-auto w-[240px]   sm:m-auto sm:w-[300px]    md:m-auto md:w-[400px] lg:m-auto lg:w-[700px]   ">


        <Image className="  md:mt-[33px] lg:w-[800px] sm:w-[400px] md:w-[500px]" src="/image/BG.png" alt="logo" width={300} height={850}/>
        <div className=" lg:pl-[22px] md:pl-[10] lg:relative lg:bottom-[390px] md:relative md:bottom-[230px] relative bottom-[150px] ml-[22px] sm:relative sm:bottom-[185px] ">
        <h1 className="text-[5px] mb-[5px]   sm:text-[6px] md:text-[7px] lg:text-[11px]  lg:pb-[5px]">WELCOME TO CHAIRY</h1>
        <p className=" sm:leading-4 md:mb-[30px]  leading-4 text-[12px] font-bold mb-[10px]  lg:text-[30px] lg:leading-6 md:text-[20px] sm:text-[14px] sm:mb-[15px]">Best Furniture <br />Collection for your<br /> interior.</p>
       
       <Link href="/Product">
        <div className="flex">
        <button className="  duration-1000 hover:w-[200px] hover:bg-slate-900      lg:w-[140px] lg:h-[50px] lg:text-[18px]  md:w-[120px]  md:text-[15px] md:h-[40px] bg-[#029FAE] sm:w-[100px] sm:h-[35px] w-[80px] rounded-[4px] sm:text-[12px] h-[33px] text-white pr-[20px] text-[10px] text-nowrap">Shop Now</button>
        <Image className=" lg:relative lg:top-[19px] md:relative md:top-[15px]  relative right-[22px] top-[11px] size-3"src="/image/Line.png" alt="logo" width={24} height={24}/>
        </div>
        </Link>
        </div>
        
        <div className="lg:relative lg:left-[-2px] lg:bottom-[170px] flex flex-row gap-1.5 relative bottom-[99px] md:relative md:left-[11px] md:bottom-[120px]">
        <Image className=" lg:w-[100px] lg:h-[100px] md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px]"src="/image/Logo.png" alt="logo" width={30} height={30}/>
        <Image className=" lg:w-[100px] lg:h-[100px] sm:w-[40px] md:w-[50px] md:h-[50px]  sm:h-[40px]"src="/image/Logo (2).png" alt="logo" width={30} height={30}/>
        <Image className="lg:w-[100px] lg:h-[100px] sm:w-[40px] md:w-[50px] md:h-[50px]  sm:h-[40px]"src="/image/Logo (4).png" alt="logo" width={30} height={30}/>
        <Image className="lg:w-[100px] lg:h-[100px] sm:w-[40px] md:w-[50px] md:h-[50px]  sm:h-[40px]"src="/image/Logo (5).png" alt="logo" width={30} height={30}/>
        <Image className="lg:w-[100px] lg:h-[100px] sm:w-[40px] md:w-[50px] md:h-[50px]  sm:h-[40px]"src="/image/Logo (6).png" alt="logo" width={30} height={30}/>
        <Image className="lg:w-[100px] lg:h-[100px] sm:w-[40px] md:w-[50px] md:h-[50px]  sm:h-[40px]"src="/image/Logo (7).png" alt="logo" width={30} height={30}/>
        <Image className="lg:w-[100px] lg:h-[100px] sm:w-[40px] md:w-[50px] md:h-[50px]  sm:h-[40px]"src="/image/Logo (8).png" alt="logo" width={30} height={30}/>
        </div>
      </div>

    </div>
  )
}