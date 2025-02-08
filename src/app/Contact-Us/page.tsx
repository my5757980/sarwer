import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
const  ContactUs=()=>{
    return(
        <div className="overflow-x-hidden">


        <div>
           <h1 className="text-center pt-[55px] font-bold text-[20px]">Get In Touch With Us</h1>
           <p className="text-center text-[#9F9F9F] pb-[33px]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>






        <div className="m-auto w-[200px] md:m-auto md:w-[450px] lg:m-auto lg:w-[600px]">
            <div className="md:grid md:gap-5 md:grid-cols-2">


         <div className="md:col-span-1">
        <div className="flex ">
        <IoLocation className="size-8"/>
        <div className="relative left-[8px] top-[8px]">
        <h1 className="text-[12px] font-bold">Address</h1>
        <p className="text-[12px]" >236 5th SE Avenue, New<br /> York NY10000, United<br /> States</p>
        </div>
        </div>
        


        <div className="flex    pt-[33px]">
        <FaPhoneAlt className="size-8"/>
        <div className="relative left-[12px] top-[8px]">
        <h1 className="text-[12px] font-bold">Phone</h1>
        <p className="text-[12px]" >Mobile: +(84) 546-6789 <br/>Hotline: +(84) 456-6789</p>
        </div>
        </div>
        



    


        <div className="flex    pt-[33px]">
        <Image className="size-8"src="/image/bi_clock-fill.png" alt="logo" width={1} height={1}/>
        <div className="relative left-[12px] top-[8px]">
        <h1 className="text-[12px] font-bold">Working Time</h1>
        <p className="text-[12px]">Monday-Friday: 9:00 -<br /> 22:00<br /> Saturday-Sunday: 9:00 -<br /> 21:00</p>
        </div>
        </div>
        </div>




    



          <div className="md:col-span-1">
        <h1 className="pb-[11px] pt-[22px] ">your name</h1>
        <input className="h-[44px] border-[2px] "placeholder="ABC"/>
        



        <h1 className="pb-[11px] pt-[22px]">Email address</h1>
        <input className="h-[44px] border-[2px] "placeholder="Abc@def.com"/>
        



        <h1 className="pb-[11px] pt-[22px]">Subject</h1>
        <input className="h-[44px] border-[2px] "placeholder="This is an optional"/>
        



        <h1 className="pb-[11px] pt-[22px]">Message</h1>
        <input className="h-[77px] border-[2px] "placeholder="Hi! i’d like to ask about"/>
        <br />



         <div className="pt-[33px]">
          <button className=" text-white items-center text-center  place-items-center  border-[1px] border-[#B88E2F]  rounded-[5px] w-[237px] h-[57px] bg-[#029FAE]">Submit</button>
        </div>
        </div>
        </div>



        </div>








        
        

        </div>
        
    )
}

export default ContactUs 