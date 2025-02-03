interface books {
  id: number,
  title: string,
  price: number,
  imageUrl: string,
}
  
  import {client} from '@/sanity/lib/client'
  import Image from "next/image"
  import { BsCartDash } from "react-icons/bs";
  
  
  
  export default async function Product() {
    const data = await client.fetch<books[]>(`*[_type == 'products']{
   title,price,
     "imageUrl":image.asset->url,
     _id
     
 }`)
    
    
    return (
      <div className="overflow-x-hidden">
  
  
  
  
  
  
  
  
  
  
        <div>
          <p className="    text-[25px] font-medium pb-[33px] text-center relative right-[45px] md:relative md:right-[155px] md:mt-[44px] lg:relative lg:right-[420px]   ">All Products</p>
        </div>
  
  
  
        {/* All products */}
  
  
  
  
    
              
           
             <div className="w-[220px] m-auto  md:w-[450px] md:m-auto lg:m-auto lg:w-[1000px]    ">
            <div className="  md:grid md:gap-5 md:grid-cols-2 lg:grid lg:gap-5 lg:grid-cols-4 ">
                 {
                    data.map((elem)=>{
                        return(
                            <div key={elem.id}>

                            

  
          
              <div className="">
              <Image className=" " src={elem.imageUrl} alt={elem.title} width={220} height={312} />
              <div className="flex">
                <p className="text-[#007580] w-[145px] ">{elem.title}</p>
                <BsCartDash className="  w-[44px] h-[44px] rounded-[5px] bg-[#029FAE] relative left-[33px] top-[10px] text-white " />
              </div>
              <h1 className="relative bottom-[20px]  ">${elem.price}</h1>
              <h1 className=" relative bottom-[270px] left-[15px] bg-[#01AD5A] w-[49px] h-[26px] text-center text-white rounded-[4px] ">New</h1>
            </div>
             
  
      
            </div>
                        )
                    })
                 }
  
  
  
    
          </div>
            </div>
              
        
    
  
  
  
  
  
  
        {/* Or subscribe to the newsletter */}
  
  
  
  
  
  
        <div className="bg-[#1E28320D] h-[1700px] mt-[33px] sm:h-[2000px] md:h-[1300px] lg:h-[500px]  ">
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
  
  
            <div className="md:flex ">
              <Image className="sm:w-[250px] lg:w-[120px] lg:h-[100px] mb-[45px]     md:mr-[45px]  " src="/image/Image (11).png" alt="logo" width={212} height={312} />
              <Image className="sm:w-[250px]  lg:w-[120px] lg:h-[100px]   md:h-[250px]" src="/image/Image (10).png" alt="logo" width={212} height={312} />
            </div>
            <div className="md:flex">
              <Image className="sm:w-[250px]  mb-[45px]  md:mr-[45px] lg:w-[120px] lg:h-[100px]   " src="/image/Image (15).png" alt="logo" width={212} height={312} />
              <Image className="sm:w-[250px]  lg:w-[120px] lg:h-[100px]    md:h-[225px]" src="/image/card (1).png" alt="logo" width={212} height={312} />
            </div>
            <div className="md:flex lg:me-[35px]">
              <Image className="sm:w-[250px] lg:w-[120px] lg:h-[100px]  mb-[45px]  md:mr-[45px] " src="/image/item-category 1.png" alt="logo" width={212} height={312} />
              <Image className="sm:w-[250px] lg:w-[120px]  md:h-[250px] lg:h-[100px] " src="/image/image1.png" alt="logo" width={212} height={312} />
            </div>
  
  
          </div>
  
        </div>
  
  
      </div>
  
    )
  }