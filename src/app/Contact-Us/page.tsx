import { IoLocation } from "react-icons/io5";
const  ContactUs=()=>{
    return(
        <div className="overflow-x-hidden">


        <div>
           <h1 className="text-center pt-[55px] font-bold text-[20px]">Get In Touch With Us</h1>
           <p className="text-center text-[#9F9F9F]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>



        <div className="flex">
        <IoLocation className="size-8"/>
        <div>
        <h1 className="text-[12px]">Address</h1>
        <p className="text-[12px]" >236 5th SE Avenue, New<br /> York NY10000, United<br /> States</p>
        </div>
        </div>

        
        

        </div>
        
    )
}

export default ContactUs 