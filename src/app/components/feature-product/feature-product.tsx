import Image from "next/image"
import { BsCartDash } from "react-icons/bs";
export default function FeatureProduct(){
    return(
        <div className="overflow-x-hidden">



{/* feature product */}

         <div className="m-auto w-[200px]   sm:m-auto sm:w-[250px] lg:m-auto lg:w-[50rem]">
            <h1 className="font-bold sm:text-[22px] md:relative md:right-[235px] md:mb-[22px] lg:relative lg:left-[-10px] lg:text-[25px] ">Featured Products</h1>

            <div className="md:flex md:gap-8 md:relative md:right-[235px] lg:relative lg:left-[-11px]">
            <div className="md:relative md:bottom-[33px]">
            <Image className="  transition-transform transform hover:scale-110 duration-500 md:w-[150px] md:h-[150px] sm:w-[250px] sm:h-[250px]    lg:w-[300px] lg:h-[200px] mb-[10px] mt-[33px]" src="/image/Image.png" alt="logo" width={200} height={200}/>
            <div className="flex gap-6">
            <h1 className="text-nowrap text-[#007580] sm:text-[22px] md:text-[12px] md:mb-[18px] lg:text-[16px] ">Library Stool Chair</h1>
            <BsCartDash className="w-[33px] h-[33px] bg-[#029FAE] rounded-[5px] text-white"/>
            </div>
            <p className=" md:relative md:top-[-18px] relative bottom-[13px] font-bold sm:text-[22px] md:text-[12px] lg:text-[15px]  sm:relative sm:top-[-5px]">$20</p>
            <h1  className="lg:relative lg:top-[-265px] bg-[#01AD5A] md:w-[33px] md:h-[20px] md:relative md:top-[-205px] md:text-[11px]  sm:relative sm:bottom-[315px] text-white w-[49px] h-[26px] text-center rounded-[4px] relative bottom-[255px] left-[15px]">New</h1>
            </div>

            <div>
            <Image  className=" transition-transform transform hover:scale-110 duration-500 md:w-[150px] md:h-[150px] sm:w-[250px] sm:h-[250px] mb-[10px] lg:w-[300px] lg:h-[200px] " src="/image/Image (15).png" alt="logo" width={200} height={200}/>
            <div className="flex gap-6">
            <h1 className="text-nowrap sm:text-[22px] md:text-[12px]  md:mb-[18px] lg:text-[16px]">Library Stool Chair</h1>
            <BsCartDash className="w-[33px] h-[33px] bg-[#F0F2F3] rounded-[5px]"/>
            </div>
            <div className="flex gap-2">
            <p className=" md:relative md:top-[-18px] relative bottom-[13px] font-bold sm:text-[22px]  md:text-[12px] lg:text-[15px]  sm:relative sm:top-[-5px] ">$20</p>
            <p className=" md:relative md:top-[-18px] relative bottom-[13px] text-[#9A9CAA]  sm:text-[22px]  md:text-[12px] lg:text-[15px]  sm:relative sm:top-[-5px]">$39</p>
            </div>
            <h1 className="lg:relative lg:top-[-265px]  bg-[#F5813F] md:w-[33px] md:h-[20px]  md:text-[11px] md:relative md:top-[-205px]   sm:relative sm:bottom-[315px] text-white w-[49px] h-[26px] text-center rounded-[4px] relative bottom-[235px] left-[15px]">Sales</h1>
            </div>

            <div>
            <Image className=" transition-transform transform hover:scale-110 duration-500 md:w-[150px] md:h-[150px] sm:w-[250px] sm:h-[250px] mb-[10px] lg:w-[300px] lg:h-[200px] "src="/image/item-category 1.png" alt="logo" width={200} height={200}/>
            <div className="flex gap-6 ">
            <h1 className="text-nowrap  sm:text-[22px] md:text-[12px] md:mb-[18px] lg:text-[16px]">Library Stool Chair</h1>
            <BsCartDash className="w-[33px] h-[33px] bg-[#F0F2F3] rounded-[5px]"/>
            </div>
            <p className="  md:relative md:top-[-18px] sm:relative sm:top-[-5px] relative bottom-[13px] font-bold mb-[22px]  sm:text-[22px]  md:text-[12px] lg:text-[15px]">$20</p>
              </div>

              <div>
            <Image  className=" transition-transform transform hover:scale-110 duration-500  md:w-[150px] md:h-[150px] sm:w-[250px] sm:h-[250px] mb-[10px] lg:w-[300px] lg:h-[200px] " src="/image/Image (9).png" alt="logo" width={200} height={200}/>
            <div className="flex gap-6">
            <h1 className="text-nowrap sm:text-[22px] md:text-[12px] md:mb-[18px] lg:text-[16px] ">Library Stool Chair</h1>
            <BsCartDash className="w-[33px] h-[33px] bg-[#F0F2F3] rounded-[5px]"/>
            </div>
            <p className="md:relative md:top-[-18px] relative bottom-[13px] font-bold  sm:text-[22px]  sm:relative sm:top-[-5px] md:text-[12px] lg:text-[15px]">$20</p>
            </div>
            </div>
         </div>
        </div>
    )
}