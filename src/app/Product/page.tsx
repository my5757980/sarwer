interface books {
  id: number,
  title: string,
  price: number,
  imageUrl: string,
  _id:number,
}

import { client } from '@/sanity/lib/client';
import Image from "next/image"
import ProductListing from '../components/product-listing/product-listing';



export default async function Product() {
  const data = await client.fetch<books[]>(`*[_type == 'products']{
    _id,
   title,price,
     "imageUrl":image.asset->url,
     _id
     
 }`)

  console.log(data)


  return (
    <div className="overflow-x-hidden">










      <div>
        <p data-aos="fade-right"className="    text-[25px] font-medium pb-[33px] text-center relative right-[45px] md:relative md:right-[155px] md:mt-[44px] lg:relative lg:right-[420px]   ">All Products</p>
      </div>



      {/* All products */}







      <div className="w-[220px] m-auto  md:w-[450px] md:m-auto lg:m-auto lg:w-[1000px]    ">
        <div data-aos="zoom-in"className=" flex flex-col gap-16 md:grid md:gap-5 md:grid-cols-2 lg:grid lg:gap-5 lg:grid-cols-4 ">
          {
            data.map((elem) => {
              return (
                <div key={elem.id}>
                <ProductListing  elem ={elem}/>
                </div>
              )
            })
          }

        </div>
      
      </div>



      {/* pagination */}


      
      <div data-aos="zoom-out"className="flex justify-center gap-8 pt-[55px]">
                   <button className="transition-transform transform hover:scale-110  duration-500  text-white border-[3px] border-black bg-cyan-900 w-[100px] flex items-center justify-center h-[60px] text-[25px]">1</button> 
                   <button className="transition-transform transform hover:scale-110  duration-500 text-white border-[3px] border-black bg-cyan-900 w-[100px] flex  items-center h-[60px] justify-center text-[25px]">2</button> 
                   <button className="transition-transform transform hover:scale-110  duration-500 text-white  border-[3px] border-black bg-cyan-900 w-[150px] flex items-center justify-center h-[60px] text-[25px]">Next</button> 
         </div>











      {/* Or subscribe to the newsletter */}






      <div data-aos="zoom-in" className="bg-[#1E28320D] h-[1700px] mt-[33px] sm:h-[2000px] md:h-[1300px] lg:h-[500px]  ">
        <p className="text-center font-bold text-[20px] pb-[33px] sm:text-[25px] pt-[25px] md:text-[30px] lg:text-[35px]">Or subscribe to the newsletter</p>

        <div className="flex gap-28 justify-center ">
          <p className="sm:text-[20px] md:text-[23px] lg:text-[26px]">Email address...</p>
          <p className="sm:text-[20px] md:text-[23px] lg:text-[26px]">SUBMIT</p>
        </div>
        <div className="flex justify-around">
          <hr className=" lg:w-[420px] md:w-[380px] border-t-2 border-black w-[310px] pb-[33px] sm:w-[350px]" />
        </div>
        <p className="text-center text-[15px] font-bold pb-[33px] sm:text-[20px] md:text-[25px] lg:text-[35px]">Follow products and discounts on Instagram</p>



        <div className="flex flex-col gap-10 items-center  lg:flex lg:flex-row lg:w-[900px] lg:m-auto    ">


          <div  data-aos="flip-right"className="md:flex ">
            <Image className=" transition-transform transform hover:scale-110  duration-500 sm:w-[250px] lg:w-[120px] lg:h-[100px] mb-[45px]     md:mr-[45px]  " src="/image/Image (11).png" alt="logo" width={212} height={312} />
            <Image className=" transition-transform transform hover:scale-110  duration-500 sm:w-[250px]  lg:w-[120px] lg:h-[100px]   md:h-[250px]" src="/image/Image (10).png" alt="logo" width={212} height={312} />
          </div>
          <div data-aos="slide-right"className="md:flex">
            <Image className=" transition-transform transform hover:scale-110  duration-500 sm:w-[250px]  mb-[45px]  md:mr-[45px] lg:w-[120px] lg:h-[100px]   " src="/image/Image (15).png" alt="logo" width={212} height={312} />
            <Image className="transition-transform transform hover:scale-110  duration-500 sm:w-[250px]  lg:w-[120px] lg:h-[100px]    md:h-[225px]" src="/image/card (1).png" alt="logo" width={212} height={312} />
          </div>
          <div data-aos="fade-left"className="md:flex lg:me-[35px]">
            <Image className=" transition-transform transform hover:scale-110  duration-500 sm:w-[250px] lg:w-[120px] lg:h-[100px]  mb-[45px]  md:mr-[45px] " src="/image/item-category 1.png" alt="logo" width={212} height={312} />
            <Image className=" transition-transform transform hover:scale-110  duration-500 sm:w-[250px] lg:w-[120px]  md:h-[250px] lg:h-[100px] " src="/image/image1.png" alt="logo" width={212} height={312} />
          </div>


        </div>

      </div>


    </div>

  )
}