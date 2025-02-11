import Image from "next/image"
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Footer(){
    return(
        <div className="overflow-x-hidden">




{/* footer */}

<div className="lg:grid lg:gap-5 lg:grid-cols-4 lg:w-[1000px] lg:m-auto">
   <div className="lg:col-span-2">

     <div className="m-auto w-[150px] sm:w-[200px] md:w-[600px] md:flex md:gap-40 lg:w-[550px]     ">

          <div className="mt-[44px] flex flex-col gap-2">
            <div className="flex gap-1">
         <Image className=" animate-bounce sm:w-[36px] sm:h-[36px]"src="/image/Logo Icon.png" alt="logo" width={26} height={26}/>
         <p className="text-[#272343] font-bold sm:text-[25px]">Comforty</p>
         </div>
         <p className="text-[#272343] sm:text-[20px] ">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.Cras egestas purus </p>
         <div className="flex items-center gap-2 mb-[22px]">
         <Image className=" animate-bounce sm:w-[32px] sm:h-[32px]"src="/image/Group 44.png" alt="logo" width={28} height={28}/>
         <FaTwitter className="text-[#636270] animate-bounce sm:size-6"/>
         <FaInstagram className="text-[#636270] animate-bounce sm:size-6"/>
         <FaPinterest className="text-[#636270] animate-bounce sm:size-6"/>
         <FaYoutube className="text-[#636270] animate-bounce sm:size-6"/>
         </div>
         </div>





         <div className="lg:relative lg:right-[100px]">
            <p className="text-[#9A9CAA]  mb-[11px] md:mt-[33px] sm:text-[20px]">Category</p>
            <p className="text-[#272343] sm:text-[18px]">Sofa</p>
            <p className="text-[#272343] sm:text-[18px]">Armchair</p>
            <p className="text-[#272343] sm:text-[18px] md:text-nowrap">Wing Chair</p>
            <p className="underline text-[#007580] sm:text-[18px]">Desk Chair</p>
            <p className="text-[#272343] sm:text-[18px] md:text-nowrap">wooden Chair</p>
            <p className="text-[#272343] sm:text-[18px] md:text-nowrap">Park Bench</p>
         </div>
           </div>

         </div>
      


      






             <div className="lg:col-span-2">
           <div className="md:flex md:gap-6 w-[150px] m-auto sm:w-[200px] lg:w-[600px] ">
         <div className="mt-[22px] md:relative md:right-[200px] lg:relative lg:left-[11px] ">

            <p className="text-[#9A9CAA] mb-[11px] sm:text-[20px]">Support</p>
            <p className="text-[#272343] sm:text-[18px] md:text-nowrap">Help & Support</p>
            <p className="text-[#272343] sm:text-[18px] md:text-nowrap">Tearms & Conditions</p>
            <p className="text-[#272343] sm:text-[18px] md:text-nowrap">Privacy Policy</p>
            <p className="text-[#272343] sm:text-[18px]">Help</p>
         </div>



         <div className="mt-[22px] flex flex-col gap-2 lg:relative lg:right-[-15px]">

            <p className="text-[#9A9CAA] sm:text-[20px]">Newsletter</p>
            <div className="flex gap-2">
            <input className="w-[150px] sm:w-[180px] h-[46px] placeholder-[#9A9CAA] border-[1px] border-[#E1E3E5]"placeholder="Your email"/>
            <button className="bg-[#029FAE] w-[100px] sm:text-[23px] h-[46px] text-white rounded-[10px] text-[20px]">Subscribe</button>
            </div>
            <p className="text-[#272343] sm:text-[20px]">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Nullam tincidunt erat enim.</p>
         </div>

     </div>
     </div>
     </div>


      <div className="flex m-auto w-[350px] gap-28 md:flex md:gap-[320px]   mt-[55px] sm:w-[500px] md:w-[800px] lg:relative lg:right-[115px]">
     <p className="text-[7px] sm:text-nowrap sm:text-[8px] sm:font-bold sm:pl-[40px] md:text-[10px] lg:text-[13px]   ">@ 2021 - Blogy - Designed & Develop by Zakirsoft</p>
     <Image  className=" md:w-[130px] sm:w-[99px] lg:w-[200px] lg:relative lg:left-[180px]"src="/image/Group 13.png" alt="logo" width={77} height={27}/>
          </div>
        
      
      
        </div>
    )
}