
'use client'


import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";



export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-x-hidden">




      {/* Navbar */}

      <div>
        <div className=" md:bg-[#272343]  md:h-[50px] md:flex md:justify-around hidden  ">

          <div className="md:flex md:items-center md:gap-2">
            <Image src="/image/check 1.png" alt="logo" width={16} height={16} />
            <p className="md:text-white">Free shipping on all orders over $50</p>
          </div>
          <div className="md:flex md:items-center ">
            <p className="md:text-white">Eng</p>
            <Image className="md:ml-[5px] " src="/image/Vector (13).png" alt="logo" width={7} height={3.5} />
            <p className="md:text-white md:ml-[10px] md:mr-[10px]">Faqs</p>
            <Image src="/image/alert-circle 1.png" alt="logo" width={16} height={16} />
            <p className="md:text-white md:ml-[5px]">Need Help</p>
          </div>


        </div>




        <div className="md:bg-[#F0F2F3] md:h-[100px] md:flex md:items-center md:justify-around hidden">

          <div className="md:flex md:items-center md:gap-2">
            <Image src="/image/Logo Icon.png" alt="logo" width={50} height={50} />
            <p className="md:text-[25px] md:font-medium">Comforty</p>
          </div>


          <div className="md:flex md:items-center md:gap-3 md:bg-white md:w-[140px] md:h-[44px] md:justify-center">
            <Image className="" src="/image/Buy 2 (3).png" alt="logo" width={30} height={30} />
            <p>Cart</p>
            <div className="md:flex  " >
              <p className="md:bg-[#007580] md:w-[30px] md:h-[30px]  md:flex md:flex-row md:items-center md:justify-center  md:text-white md:rounded-full">2</p>
            </div>
          </div>

        </div>


      </div>






      <div>

        <div className="md:flex md:justify-around hidden">
          <div className="md:flex md:flex-row md:gap-5 md:mt-[33px]">
            <Link href="/">Home</Link>
            <Link href="Product">Product</Link>
            <Link href="Single-Product-Page">Single-Product-Page</Link>
            <Link href="Cart">Cart</Link>
            <Link href="Contact-Us">Contact-Us</Link>
            <Link href="Faq">Faq</Link>
            <Link href="About">About</Link>

          </div>
          <div className="md:flex md:gap-2 md:mt-[33px] ">
            <p>Contact:</p>
            <p>(808) 555-0111</p>
          </div>
        </div>



      </div>

      {/* mobileHamburger */}

      <div className="md:hidden flex flex-row justify-end h-[60px] items-center  " onClick={() =>
        setOpen(!open)
      }>

        <GiHamburgerMenu className=" text-black size-10 relative right-4" />


      </div>

      <ResponsiveMenu open={open} />





    </div>
  )
}