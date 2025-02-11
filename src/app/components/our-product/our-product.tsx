interface books {
    id: number,
    title: string,
    price: number,
    imageUrl: string,
  }
  




import Image from "next/image"
import { BsCartDash } from "react-icons/bs";
import { client } from '@/sanity/lib/client';



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
        <p className="    text-center text-[20px] font-bold pt-[44px] pb-[22px] lg:text-[30px]   ">Our Product</p>
      </div>



      {/* All products */}







      <div className="w-[220px] m-auto  md:w-[450px] md:m-auto lg:m-auto lg:w-[1000px]    ">
        <div className=" flex flex-col gap-16 md:grid md:gap-5 md:grid-cols-2 lg:grid lg:gap-5 lg:grid-cols-4 ">
          {
            data.slice(0,8).map((elem) => {
              return (
                <div key={elem.id}>





                  <div className="  hover:bg-blue-100 transition-transform transform hover:scale-110  duration-500 shadow-xl md:w-[230px]  w-[225px] mb-[33px]">
    
                      <Image className="  " src={elem.imageUrl} alt={elem.title} width={220} height={312} />
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







        </div>

    )
}
