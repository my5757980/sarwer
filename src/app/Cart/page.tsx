import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image"
export default function Cart() {
    return (
        <div className="overflow-hidden">




            {/* cart */}
            <div className="lg:grid lg:gap-5 lg:grid-cols-6">

                <div className="col-span-3">
                    <div className="m-auto w-[16rem] md:w-[350px]  ">


                        <h1 className="  mb-[22px] text-[28px] sm:text-[33px] md:text-[25px] ">Bag</h1>
                        <div className="md:grid md:gap-5 md:grid-cols-2">


                            <div className="col-span-1">
                                <Image className=" sm:w-[250px] md:w-[350px]  " src="/image/item-category 1.png" alt="logo" width={150} height={150} />
                            </div>


                            <div className="col-span-1  md: relative md:bottom-[28px]">
                                <div className="flex gap-24 mt-[22px] mb-[11px] ">
                                    <h1 className="text-nowrap text-[#272343] sm:text-[22px] ">Library Stool Chair</h1>
                                    <h1 className="text-nowrap">MRP: $99</h1>
                                </div>


                                <div className="">
                                    <h1 className="text-nowrap mb-[2px] text-[#757575] sm:text-[16px] ">Ashen Slate/Cobalt Bliss</h1>
                                    <h1 className="mb-[15px] text-[#757575] sm:text-[19px] ">Quantity 1</h1>
                                </div>


                                <div className="flex gap-3 ">
                                    <CiHeart className="size-7" />
                                    <RiDeleteBin6Line className="size-7 " />
                                </div>
                            </div>
                        </div>
                    </div>







                    <div className="m-auto w-[16rem] md:w-[350px]  ">
                        <div className="md:grid md:gap-5 md:grid-cols-2">

                            <div className="col-span-1">
                                <Image className=" mt-[44px] sm:w-[250px] md:w-[350px] " src="/image/Frame (3).png" alt="logo" width={150} height={150} />
                            </div>



                            <div className="col-span-1 md:relative md:top-[22px]">
                                <div className="flex gap-24 mt-[22px] mb-[11px]  ">
                                    <h1 className="text-nowrap text-[#272343] sm:text-[22px]  ">Library Stool Chair</h1>
                                    <h1 className="text-nowrap">MRP: $99</h1>
                                </div>



                                <div>
                                    <h1 className="text-nowrap mb-[2px] text-[#757575] sm:text-[16px] ">Ashen Slate/Cobalt Bliss</h1>
                                    <h1 className="mb-[15px] text-[#757575] sm:text-[19px] ">Quantity 1</h1>
                                </div>



                                <div className="flex gap-3 ">
                                    <CiHeart className="size-7" />
                                    <RiDeleteBin6Line className="size-7 " />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>








                <div className="col-span-3">
                    <div className="m-auto w-[16rem]  ">
                        <div className="">

                            <h1 className="mt-[44px] text-[22px] font-bold mb-[22px] sm:text-[25px] ">Summary</h1>



                            <div className="flex gap-48 mb-[11px]">
                                <h1 className="sm:text-[19px] ">Subtotal</h1>
                                <h1 className="sm:text-[19px] ">$198.00</h1>
                            </div>



                            <div className="flex gap-11 ">
                                <h1 className="text-nowrap sm:text-[19px]">Estimated Delivery & Handling</h1>
                                <h1 className="sm:text-[19px] ">Free</h1>
                            </div>



                            <div className="flex gap-[217px] mt-[28px]">
                                <h1 className="sm:text-[19px] ">Total</h1>
                                <h1 className="sm:text-[19px] ">$198.00</h1>
                            </div>

                            <button className=" duration-1000 hover:w-[200px] hover:bg-slate-900    mt-[33px] bg-[#029FAE] w-[300px] h-[55px] rounded-[30px] text-white">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}