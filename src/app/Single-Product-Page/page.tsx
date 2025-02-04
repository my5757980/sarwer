import Image from "next/image"
import { BsCartDash } from "react-icons/bs";
export default function SingleProductPage() {
  return (
    <div className="overflow-x-hidden">







      {/* section 1 */}

      <div className="w-[200px] m-auto     sm:w-[250px] sm:m-auto    md:w-[700px] md:m-auto flex flex-col gap-2">
        <div className="md:grid md:gap-5 md:grid-cols-2">
          <div className="md:col-span-1 lg:w-[500px] lg:m-auto">
            <Image className=" md:mt-[33px] lg:h-[500px] lg:relative lg:right-[140px] lg:w-[500px] md:w-[700px] md:h-[400px] sm:w-[250px]" src="/image/Image (15).png" alt="logo" width={200} height={607} />
          </div>
          <div className="md:col-span-1 md:relative md:bottom-[11px] lg:relative lg:left-[66px]">
            <h1 className="text-[35px] sm:text-[40px] lg:text-[50px] md:mt-[33px]  ">Library Stool  </h1>
            <h1 className="text-[35px] relative bottom-[22px] sm:text-[40px] lg:text-[50px]  ">Chair</h1>
            <button className=" lg:w-[200px] lg:h-[60px] md:mb-[22px] sm:mb-[10px] mb-[20px]  sm:w-[160px] sm:h-[50px] w-[144px] h-[44px] text-white bg-[#029FAE] rounded-[20px]">$20.00 USD</button>
            <hr className="  sm:mb-[10px] mb-[20px] border-t-2 border-[#D9D9D9]" />
            <p className="lg:text-[19px] sm:mb-[10px] mb-[20px] md:mb-[22px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <button className=" lg:w-[200px] lg:h-[60px] w-[212px] h-[63px] bg-[#029FAE] rounded-[10px] text-white ">Add To cart</button>
            <BsCartDash className="relative bottom-[48px] text-white w-[33px] h-[33px] left-[17px]"/>

          </div>
        </div>



        <div>



          {/* feature product */}
          <div className="flex justify-center gap-24 sm:flex ">
            <h1 className="font-bold sm:text-[15px] sm:text-nowrap md:mt-[40px] md:mr-[410px] text-nowrap sm:mr-[150px] lg:mr-[650px]">Featured Products</h1>
            <h1 className=" underline font-bold sm:text-[15px] sm:text-nowrap  md:mt-[40px] text-nowrap">View  all</h1>
          </div>


          <div className="  md:mr-[500px] md:flex md:flex-row   md:mt-[33px]  md:w-16rem md:m-auto w-[150px] m-auto    sm:w-[200px] sm:m-auto flex flex-col gap-5 mt-[33px] sm:mt-[44px]  ">


            <div className="lg:relative lg:right-[117px]">
              <Image className=" mb-[8px] transition-transform transform hover:scale-110  duration-500 lg:w-[180px] lg:h-[180px] sm:w-[200px] md:w-[120px] md:h-[120px]" src="/image/Image (13).png" alt="logo" width={150} height={150} />
              <div className="flex gap-12  ">
                <h1 className="sm:font-semibold text-[10px] md:text-[7px] md:text-nowrap lg:font-bold ">Library Stool Chair</h1>
                <p className="sm:font-semibold text-[10px] sm:pl-[44px] md:relative md:right-[55px] lg:font-bold lg:relative lg:left-[1px] ">$99</p>
              </div>
            </div>


            <div className="md:relative md:right-[44px] lg:relative lg:right-[120px]">
              <Image className="transition-transform transform hover:scale-110  duration-500   mb-[8px]  lg:w-[180px] lg:h-[180px]  sm:w-[200px] md:w-[120px] md:h-[120px]" src="/image/card (1).png" alt="logo" width={150} height={150} />
              <div className="flex gap-12 ">
                <h1 className="sm:font-semibold text-[10px] md:text-[7px] md:text-nowrap lg:font-bold ">Library Stool Chair</h1>
                <p className="sm:font-semibold text-[10px] sm:pl-[44px] md:relative md:right-[55px] lg:font-bold   lg:relative lg:left-[1px]">$99</p>
              </div>
            </div>


            <div className="md:relative md:right-[87px] lg:relative lg:right-[120px]">
              <Image className=" mb-[8px] transition-transform transform hover:scale-110  duration-500  lg:w-[180px] lg:h-[180px] sm:w-[200px] md:w-[120px] md:h-[120px]" src="/image/image1.png" alt="logo" width={150} height={150} />
              <div className="flex gap-12 ">
                <h1 className="sm:font-semibold text-[10px] md:text-[7px] md:text-nowrap lg:font-bold ">Library Stool Chair</h1>
                <p className="sm:font-semibold text-[10px] sm:pl-[44px] md:relative md:right-[55px] lg:font-bold   lg:relative lg:left-[1px]">$99</p>
              </div>
            </div>


            <div className="md:relative md:right-[127px] lg:relative lg:right-[117px]">
              <Image className="mb-[8px] transition-transform transform hover:scale-110  duration-500  lg:w-[180px] lg:h-[180px]   sm:w-[200px] md:w-[120px] md:h-[120px]" src="/image/item-category 1.png" alt="logo" width={150} height={150} />
              <div className="flex gap-12">
                <h1 className="sm:font-semibold text-[10px] md:text-[7px] md:text-nowrap lg:font-bold ">Library Stool Chair</h1>
                <p className="sm:font-semibold text-[10px] sm:pl-[44px] md:relative md:right-[55px] lg:font-bold   lg:relative lg:left-[1px]">$99</p>
              </div>
            </div>


            <div className="md:relative md:right-[170px] lg:relative lg:right-[115px]">
              <Image className=" transition-transform transform hover:scale-110  duration-500 mb-[8px]  lg:w-[180px] lg:h-[180px] sm:w-[200px] md:w-[120px] md:h-[120px]" src="/image/Image (10).png" alt="logo" width={150} height={150} />
              <div className="flex gap-12">
                <h1 className="sm:font-semibold text-[10px] md:text-[7px] md:text-nowrap lg:font-bold ">Library Stool Chair</h1>
                <p className="sm:font-semibold text-[10px] sm:pl-[44px] md:relative md:right-[55px] lg:font-bold lg:relative lg:left-[1px]">$99</p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}