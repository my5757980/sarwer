'use client'
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaPlus } from "react-icons/fa6";


export default function Faq (){
 useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

    return(
        <div className="overflow-x-hidden">





               {/* section1 */}


               <div>

                <h1 data-aos="fade-right"className="text-center font-bold mt-[25px] pb-[11px] sm:text-[22px]">Questions Looks Here</h1>
                <p data-aos="fade-right"className="text-center text-nowrap text-[7px] sm:text-[9px] pb-[33px] md:text-[12px] text-[#4F4F4F] font-bold" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                  

                  
                  
                    
                   
                   
                  <div className="md:grid md:gap-5 md:grid-cols-2">
                <div data-aos="flip-right" className="bg-[#F7F7F7] h-[170px] m-auto w-[340px] mb-[30px] transition-transform transform hover:scale-110 duration-500 ">
                    <div className="flex">
                    <h1 className="pt-[11px] pl-[11px] pb-[11px]  font-bold">What types of chairs do you offer?</h1>
                    <FaPlus className="relative left-[33px] top-[14px]"/>
                    </div>
                    <p className="pl-[11px] text-[15px] text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                </div>

                <div data-aos="flip-right"className="bg-[#F7F7F7] h-[170px] m-auto w-[340px] mb-[30px] transition-transform transform hover:scale-110  duration-500">
                    <div className="flex">
                    <h1 className="pt-[11px] pl-[11px] pb-[11px]  font-bold">How can we get in touch with you?</h1>
                    <FaPlus className="relative left-[33px] top-[14px]"/>
                    </div>
                    <p className="pl-[11px] text-[15px] text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                </div>
                

                  
                <div data-aos="flip-right"className="bg-[#F7F7F7] h-[170px] m-auto w-[340px] mb-[30px] transition-transform transform hover:scale-110  duration-500">
                    <div className="flex">
                    <h1 className="pt-[11px] pl-[11px] pb-[11px]  font-bold">Do your chairs come with a warranty?</h1>
                    <FaPlus className="relative left-[11px] top-[14px]"/>
                    </div>
                    <p className="pl-[11px] text-[15px] text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                </div>

                <div data-aos="flip-right"className="bg-[#F7F7F7] h-[170px] m-auto w-[340px] mb-[30px] transition-transform transform hover:scale-110  duration-500">
                    <div className="flex">
                    <h1 className="pt-[11px] pl-[11px] pb-[11px]  font-bold">What will be delivered? And When?</h1>
                    <FaPlus className="relative left-[31px] top-[14px]"/>
                    </div>
                    <p className="pl-[11px] text-[15px] text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                </div>
                


                 
                <div data-aos="flip-right"className="bg-[#F7F7F7] h-[170px] m-auto w-[340px] mb-[30px] transition-transform transform hover:scale-110  duration-500">
                    <div className="flex">
                    <h1 className="pt-[11px] pl-[11px] pb-[11px]  font-bold">Can I try a chair before purchasing?</h1>
                    <FaPlus className="relative left-[28px] top-[14px]"/>
                    </div>
                    <p className="pl-[11px] text-[15px] text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                </div>

                <div data-aos="flip-right"className="bg-[#F7F7F7] h-[170px] m-auto w-[340px] mb-[30px] transition-transform transform hover:scale-110  duration-500">
                    <div className="flex">
                    <h1 className="pt-[11px] pl-[11px] pb-[11px]  font-bold text-nowrap text-[12px]">How do I clean and maintain my Comforty chair?</h1>
                    <FaPlus className="relative left-[24px] top-[12px]"/>
                    </div>
                    <p className="pl-[11px] text-[15px] text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                </div>
               </div>
               </div>


        </div>
    )
}