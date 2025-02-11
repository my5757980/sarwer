import Image from "next/image"
export default function About() {
  return (
    <div className="overflow-x-hidden">





      {/* box section */}
                   
              <div className="m-auto w-[200px]  md:m-auto md:w-[400px] lg:m-auto lg:w-[800px]  ">
              <div className="md:grid md:gap-20 md:grid-cols-2         mt-[44px]">
        
          
          <div className="   w-[200px] h-[150px]  bg-[#007580]  lg:w-[400px] lg:h-[250px]  mb-[44px] ">
            <h1 className="  ml-[9px] text-[12px] text-white font-normal pb-[8px] pt-[5px] lg:text-[33px]">About Us - Comforty</h1>
            <p className=" text-white text-[7px] ml-[9px] pb-[7px] pr-[30px] lg:text-[11px]  lg:pr-[11px]   ">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
            <button className=" lg:w-[110px] lg:relative lg:top-[22px] lg:h-[40px]   text-[8px] bg-[#F9F9F926] w-[70px] h-[18px] ml-[9px] mt-[33px] text-white ">View Collection</button>

          </div>
        
            <Image className=" md:h-[150px] lg:w-[800px] lg:h-[250px]" src="/image/card (1).png" alt="logo" width={200} height={150} />
          
        </div>
        </div>
      


        {/* paragraph section */}
       

          <p className="pt-[50px] text-center font-semibold pb-[22px] lg:text-[22px]">What makes our Brand Different</p>
      
          <div className="m-auto w-[200px] md:m-auto md:w-[400px] lg:m-auto lg:w-[850px]">
         
            <div className="md:grid md:gap-5 md:grid-cols-2 lg:grid lg:gap-5 lg:grid-cols-4     flex flex-col gap-5">
        


              <div className="bg-[#f9f9f9] transition-transform transform hover:scale-110  duration-500  w-[200px] h-[120px] ">
                <Image className="  pl-[10px] pt-[10px] " src="/image/Delivery.png" alt="logo" width={24} height={24} />
                <h1 className=" text-[#007580] text-[12px]  pl-[10px] pb-[5px] ">Next day as standard</h1>
                <p className=" text-[#007580] text-[9px] pr-10 pl-[10px] ">Order before 3pm and get your order the next day as standard</p>
              </div>


              <div className="bg-[#f9f9f9] transition-transform transform hover:scale-110  duration-500  w-[200px] h-[120px] ">
                <Image className=" pl-[10px] pt-[10px]" src="/image/Checkmark--outline.png" alt="logo" width={24} height={24} />
                <h1 className=" text-[#007580] text-[12px] pl-[10px] pb-[5px]">Made by true artisans</h1>
                <p className=" text-[#007580] text-[9px] pr-10 pl-[10px]">Handmade crafted goods made with real passion and craftmanship</p>
              </div>

            

      
              <div className="bg-[#f9f9f9] transition-transform transform hover:scale-110  duration-500  w-[200px] h-[120px] ">
                <Image className="pl-[10px] pt-[10px]" src="/image/Purchase.png" alt="logo" width={24} height={24} />
                <h1 className="text-[#007580] text-[12px] pl-[10px] pb-[5px]">Unbeatable prices</h1>
                <p className=" text-[#007580] text-[9px] pr-10 pl-[10px]">For our materials and quality you won’t find better prices anywhere</p>
              </div>


              <div className="bg-[#f9f9f9] transition-transform transform hover:scale-110  duration-500  w-[200px] h-[120px] ">
                <Image className=" pl-[10px] pt-[10px]" src="/image/Sprout.png" alt="logo" width={24} height={24} />
                <h1 className="  text-[#007580] text-[12px] pl-[10px] pb-[5px]">Recycled packaging</h1>
                <p className=" text-[#007580] text-[9px] pr-10 pl-[10px]">We use 100% recycled to ensure our footprint is more manageable</p>
              </div>
              </div>
              </div>

          

        
        




        {/* product section */}


        

          <p className="pt-[35px] pb-[30px] text-center  lg:text-[22px]">Our Popular Products </p>
          <div className="m-auto w-[200px] md:m-auto md:w-[700px] lg:m-auto lg:w-[1000px]  ">
           <div className="md:grid md:gap-5 md:grid-cols-3 "> 

  

            <div className=" shadow-xl mb-[33px]  hover:bg-blue-100 transition-transform transform hover:scale-95  duration-500">
              <Image className="md:h-[250px] lg:w-[500px] lg:h-[395px] " src="/image/Large.png" alt="logo" width={200} height={1} />
              <h1 className="text-[14px] lg:text-[20px] ">The Poplar suede sofa</h1>
              <p className="text-[12px] pb-[15px] lg:text-[15px] ">$99.00</p>
            </div>


            <div className=" shadow-xl mb-[33px]  hover:bg-blue-100 transition-transform transform hover:scale-95  duration-500">
              <Image className=" lg:w-[500px]" src="/image/Photo.png" alt="logo" width={200} height={1} />
              <h1 className="text-[14px]  lg:text-[20px] ">The Dandy chair</h1>
              <p className="text-[12px] pb-[15px] lg:text-[15px]">$99.00</p>
            </div>


            <div className=" shadow-xl mb-[33px]  hover:bg-blue-100 transition-transform transform hover:scale-95  duration-500">
              <Image className="lg:w-[500px]"  src="/image/Parent.png" alt="logo" width={200} height={1} />
              <h1 className="text-[14px] lg:text-[20px]  ">The Dandy chair</h1>
              <p className="text-[12px] lg:text-[15px]">$99.00</p>
            </div>
             </div> 
            </div>

    
        </div>



  )
}