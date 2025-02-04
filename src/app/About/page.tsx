import Image from "next/image"
export default function About(){
  return(
    <div className="overflow-x-hidden">

      
        


        {/* box section */}
      
        <div className=" flex flex-col items-center ">
        <div className="flex flex-col gap-5  md:flex md:flex-row   ">
          <div className="  md:w-[300px] md:h-[200px] w-[200px] h-[150px] md:mt-[33px] bg-[#007580] sm:w-[250px] sm:h-[180px] lg:w-[400px] lg:h-[250px]  ">
            <h1 className=" lg:text-[26px] ml-[9px] text-[12px] text-white font-normal mt-[10px] sm:ml-[15px] md:text-[24px] sm:text-[20px]">About Us - Comforty</h1>
            <p className="lg:text-[15px] text-white text-[7px] ml-[9px] pb-[7px] pr-[30px]  sm:ml-[15px] sm:text-[9px] sm:pr-[60px] md:text-[11px] md:pr-[40px]   ">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
           <button className="  lg:mt-[40px] lg:text-[13px] lg:w-[120px] lg:h-[40px] sm:relative sm:bottom-[9px] sm:h-[22px] sm:text-[9px] sm:ml-[15px] sm:w-[80px] md:w-[100px] md:h-[30px] md:text-[11px] md:mt-[22px] text-[8px] bg-[#F9F9F926] w-[70px] h-[18px] ml-[9px] mt-[33px] text-white ">View Collection</button>


          </div>
             <div className="">
              <Image className=" md:mt-[33px] sm:w-[250px] sm:h-[180px]  md:w-[300px] md:h-[200px] w-[200px] lg:w-[400px] lg:h-[250px]"src="/image/card (1).png" alt="logo" width={150} height={150} />
             </div>
             </div>


                {/* paragraph section */}
                <div className="  ">
               
             <p className="mt-[20px] font-semibold md:text-center md:mb-[22px] pb-[10px] sm:text-[22px] lg:text-[30px]">What makes our Brand Different</p>
             <div className="flex flex-col items-center gap-5 lg:flex lg:flex-row   ">
              <div className="md:flex gap-10">

             <div className="bg-[#f9f9f9] transition-transform transform hover:scale-110  duration-500  w-[200px] h-[120px] mb-[20px] sm:w-[240px] sm:h-[150px]">
              <Image className=" sm:w-[35px] sm:ml-[13px] sm:mb-[10px] pl-[10px] pt-[10px] "src="/image/Delivery.png" alt="logo" width={24} height={24}/>
              <h1 className=" text-[#007580] text-[12px]  pl-[10px] pb-[5px] sm:pl-[25px] sm:text-[15]">Next day as standard</h1>
              <p className=" text-[#007580] text-[9px] pr-10 pl-[10px] sm:text-[11px] sm:pl-[25px]">Order before 3pm and get your order the next day as standard</p>
             </div>
             <div className="bg-[#f9f9f9] transition-transform transform hover:scale-110  duration-500  w-[200px] h-[120px] sm:w-[240px] sm:h-[150px]">
             <Image className="sm:w-[35px] sm:ml-[13px] sm:mb-[10px] pl-[10px] pt-[10px]" src="/image/Checkmark--outline.png" alt="logo" width={24} height={24}/>
             <h1 className="sm:pl-[25px] sm:text-[15] text-[#007580] text-[12px] pl-[10px] pb-[5px]">Made by true artisans</h1>
             <p className="sm:text-[11px] sm:pl-[25px] text-[#007580] text-[9px] pr-10 pl-[10px]">Handmade crafted goods made with real passion and craftmanship</p>
             </div>

             </div>

             <div className="md:flex md:gap-10">
             <div className="bg-[#f9f9f9] transition-transform transform hover:scale-110  duration-500  w-[200px] h-[120px] mb-[20px] sm:w-[240px] sm:h-[150px]">
             <Image className="sm:w-[35px] sm:ml-[13px] sm:mb-[10px] pl-[10px] pt-[10px]"src="/image/Purchase.png" alt="logo" width={24} height={24}/>
             <h1 className="sm:pl-[25px] sm:text-[15] text-[#007580] text-[12px] pl-[10px] pb-[5px]">Unbeatable prices</h1>
             <p className="sm:text-[11px] sm:pl-[25px] text-[#007580] text-[9px] pr-10 pl-[10px]">For our materials and quality you won’t find better prices anywhere</p>
             </div>
             <div className="bg-[#f9f9f9] transition-transform transform hover:scale-110  duration-500  w-[200px] h-[120px] sm:w-[240px] sm:h-[150px]">
             <Image className="sm:w-[35px] sm:ml-[13px] sm:mb-[10px] pl-[10px] pt-[10px]"src="/image/Sprout.png" alt="logo" width={24} height={24}/>
             <h1 className=" sm:pl-[25px] sm:text-[15] text-[#007580] text-[12px] pl-[10px] pb-[5px]">Recycled packaging</h1>
             <p className="sm:text-[11px] sm:pl-[25px] text-[#007580] text-[9px] pr-10 pl-[10px]">We use 100% recycled to ensure our footprint is more manageable</p>
             </div>

             </div>
             
             </div>
             </div>




             {/* product section */}


             <div className="flex flex-col gap-5 ">

              <p className="mt-[15px] font-semibold  md:text-start sm:text-[25px] lg:text-[30px]">Our Popular Products </p>
              <div className="md:flex md:gap-16">
              <div>
                <Image className="md:w-[250px] sm:w-[300px] w-[200px] lg:w-[350px]"src="/image/Large.png" alt="logo" width={150} height={150}/>
                <h1 className="text-[14px] sm:text-[22px]">The Poplar suede sofa</h1>
                <p className="text-[12px] sm:text-[18px]">$99.00</p>
              </div>
              <div>
              <Image className="md:w-[130px] w-[200px] sm:w-[300px] lg:w-[170px]  "src="/image/Photo.png" alt="logo" width={120} height={120}/>
              <h1 className="text-[14px] sm:text-[22px]">The Dandy chair</h1>
              <p className="text-[12px] sm:text-[18px]">$99.00</p>
              </div>
              <div>
              <Image className="md:w-[130px] w-[200px] sm:w-[300px] lg:w-[170px] "src="/image/Parent.png" alt="logo" width={120} height={120}/>
              <h1 className="text-[14px] sm:text-[22px]">The Dandy chair</h1>
              <p className="text-[12px] sm:text-[18px]">$99.00</p>
              </div>
             </div>
             </div>


             




        </div>
          
        </div>

    
    
  )
}