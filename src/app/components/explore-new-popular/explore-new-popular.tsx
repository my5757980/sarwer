import Image from "next/image"
export default function ExploreNewPopular(){
    return(
        <div className="overflow-x-hidden">





     {/* Explore new and popular styles */}
               
           <div className=" m-auto w-[400px] sm:w-[400px] sm:m-auto md:w-[600px] md:m-auto ">
          <h1 className=" md:text-[17px] md:relative md:right-[288px] md:top-[-6px] md:font-bold rotate-[-90deg] text-[12px] relative right-[180px] top-[5px] sm:relative sm:top-[3px] sm:text-[13px]  ">Explore new and popular styles</h1>
          <div className="flex">
          <Image className=" md:w-[800px] sm:w-[180px] ml-[26px]"src="/image/item-category 1.png" alt="logo" width={120} height={100}/>
          <div className="flex">
          <div className=" ml-[7px] mr-[7px] flex flex-col gap-3">
          <Image className=" md:w-[450px] md:h-[150px] "src="/image/Image (9).png" alt="logo" width={100} height={100}/>
          <Image className="md:w-[450px] md:h-[150px]"src="/image/Image (11).png" alt="logo" width={100} height={100}/>
          </div>
          </div>
          <div className="flex flex-col gap-3">
          <Image className="md:w-[450px]  md:h-[150px]"src="/image/Image.png" alt="logo" width={100} height={100}/>
          <Image className="md:w-[450px]  md:h-[150px]"src="/image/Image (5).png" alt="logo" width={100} height={100}/>
          </div>
        </div>
        </div>
        </div>
    )
}