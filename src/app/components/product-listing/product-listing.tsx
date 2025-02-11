interface books {
  id: number,
  title: string,
  price: number,
  imageUrl: string,
}


import Image from "next/image"
import { BsCartDash } from "react-icons/bs";

const ProductListing =({elem}:{elem:books})=>{
    return(
        

        <div className="  hover:bg-blue-100 transition-transform transform hover:scale-110  duration-500 shadow-xl md:w-[230px]  w-[225px] mb-[33px]">

            <Image className="  " src={elem.imageUrl} alt={elem.title} width={220} height={312} />
            <div className="flex">
              <p className="text-[#007580] w-[145px] ">{elem.title}</p>
              <BsCartDash className="  w-[44px] h-[44px] rounded-[5px] bg-[#029FAE] relative left-[33px] top-[10px] text-white " />
            </div>
            <h1 className="relative bottom-[20px]  ">${elem.price}</h1>
            <h1 className=" relative bottom-[270px] left-[15px] bg-[#01AD5A] w-[49px] h-[26px] text-center text-white rounded-[4px] ">New</h1>
      
        </div>
      
    )
}

export default ProductListing;