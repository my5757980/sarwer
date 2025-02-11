import Image from "next/image"
import { BsCartDash } from "react-icons/bs";
export default function FeatureProduct() {
   return (
      <div className="overflow-x-hidden">



         {/* feature product */}




         <h1 className="text-center font-bold text-[22px] pb-[33px]  md:relative md:left-[-130px]  lg:relative lg:left-[-350px]">Featured Products</h1>


         <div className="m-auto w-[200px] md:m-auto md:w-[450px]  lg:m-auto  lg:w-[900px]">

            <div className="md:grid md:gap-5 md:grid-cols-2   lg:grid  lg:gap-5  lg:grid-cols-4    mb-[33px]      flex flex-col gap-16">

               <div className="shadow-xl h-[280px] hover:bg-blue-100  transition-transform transform hover:scale-110 duration-500 ">
                  <Image className="" src="/image/Image.png" alt="logo" width={200} height={200} />
                  <div className="flex gap-6 pt-[8px]">
                     <h1 className="text-nowrap text-[#007580]">Library Stool Chair</h1>
                     <BsCartDash className="w-[33px] h-[33px] bg-[#029FAE] rounded-[5px] text-white" />
                  </div>
                  <p className="relative bottom-[10px]">$20</p>
                  <h1 className="relative bottom-[250px] left-[11px] bg-[#01AD5A] text-white w-[49px] h-[26px] rounded-[4px]  flex items-center justify-center">New</h1>
               </div>



               <div className="shadow-xl h-[280px]   hover:bg-blue-100 transition-transform transform hover:scale-110 duration-500 ">
                  <Image className="  " src="/image/Image (15).png" alt="logo" width={200} height={200} />
                  <div className="flex gap-6 pt-[8px]">
                     <h1 className="">Library Stool Chair</h1>
                     <BsCartDash className="w-[33px] h-[33px] bg-[#F0F2F3] rounded-[5px]" />
                  </div>
                  <div className="flex gap-2">
                     <p className="relative bottom-[10px]">$20</p>
                     <p className=" relative bottom-[10px] line-through text-[#9A9CAA]">$39</p>
                  </div>
                  <h1 className="relative bottom-[230px] left-[11px] bg-[#F5813F] text-white w-[49px] h-[26px] rounded-[4px]  flex items-center justify-center">Sales</h1>
               </div>



               <div className="shadow-xl h-[280px]   hover:bg-blue-100 transition-transform transform hover:scale-110 duration-500 ">
                  <Image className="    " src="/image/item-category 1.png" alt="logo" width={200} height={200} />
                  <div className="flex gap-6  pt-[8px]">
                     <h1 className="">Library Stool Chair</h1>
                     <BsCartDash className="w-[33px] h-[33px] bg-[#F0F2F3] rounded-[5px]" />
                  </div>
                  <p className="relative bottom-[10px]">$20</p>
               </div>



               <div className="shadow-xl h-[280px]   hover:bg-blue-100 transition-transform transform hover:scale-110 duration-500 ">
                  <Image className="   " src="/image/Image (9).png" alt="logo" width={200} height={200} />
                  <div className="flex gap-6 pt-[8px]">
                     <h1 className=" ">Library Stool Chair</h1>
                     <BsCartDash className="w-[33px] h-[33px] bg-[#F0F2F3] rounded-[5px]" />
                  </div>
                  <p className="relative bottom-[10px]">$20</p>
               </div>
            </div>
         </div>
      </div>
   )
}