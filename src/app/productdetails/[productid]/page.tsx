
interface books {
  title: string,
  description: string,
  price: number,
  imageUrl: string,

}



import Image from "next/image"
import { client } from "@/sanity/lib/client";
import { BsCartDash } from "react-icons/bs";
export default async function SingleProductPage({ params }: { params: { productid: string } }) {
  const data = await client.fetch<books[]>(`*[_type == 'products']{
       title,price,
       description,
         "imageUrl":image.asset->url,
         _id
         
     }`)

  console.log(data)







  const index = data.findIndex((item: any) => item._id === params.productid)
  const product = data[index];
  console.log(index);

  if (product)
    return (
      <div className="overflow-x-hidden">







        {/* section 1 */}

        <div className="w-[200px] m-auto        md:w-[700px] md:m-auto flex flex-col gap-2">
          <div data-aos="fade-down"className="md:grid md:gap-5 md:grid-cols-2">
            <div className="md:col-span-1 lg:w-[500px] lg:m-auto">
              <Image className=" md:mt-[33px] lg:h-[500px] lg:relative lg:right-[140px] lg:w-[500px] md:w-[700px] md:h-[400px] sm:w-[250px]" src={product.imageUrl} alt="logo" width={200} height={607} />
            </div>
            <div className="md:col-span-1 md:relative md:bottom-[11px] lg:relative lg:left-[66px]">
              <h1 className="text-[35px] leading-[40px] mb-[10px] sm:mt-[8px] md:mt-[40px] md:leading-[50px] md:text-[50px] ">{product.title}</h1>
              <button className=" duration-1000 hover:w-[300px] hover:bg-slate-900     lg:w-[200px] lg:h-[60px] md:mb-[22px] sm:mb-[15px] mb-[20px]  sm:w-[160px] sm:h-[50px] w-[144px] h-[44px] text-white bg-[#029FAE] rounded-[20px]">${product.price}USD</button>
              <hr className="  sm:mb-[10px] mb-[20px] border-t-2 border-[#D9D9D9]" />
              <p className="lg:text-[19px] sm:mb-[10px] mb-[20px] md:mb-[22px]">{product.description}</p>
              <button className="  duration-1000 hover:w-[300px] hover:bg-slate-900 lg:w-[200px] lg:h-[60px] w-[212px] h-[63px] bg-[#029FAE] rounded-[10px] text-white ">Add To cart</button>
              <BsCartDash className="relative bottom-[48px] text-white w-[33px] h-[33px] left-[17px]" />

            </div>
          </div>
        </div>






        {/* feature product */}
        <div>


          <div className="flex justify-center gap-24 sm:flex pb-[33px] ">
            <h1 data-aos="flip-right"className="font-bold sm:text-[15px] sm:text-nowrap md:mt-[40px] md:mr-[410px] text-nowrap sm:mr-[150px] lg:mr-[710px]">Featured Products</h1>
            <h1 data-aos="flip-right"className=" underline font-bold sm:text-[15px] sm:text-nowrap  md:mt-[40px] text-nowrap">View  all</h1>
          </div>


          <div className="m-auto w-[200px] md:m-auto md:w-[500px] lg:m-auto lg:w-[1000px]">
            <div data-aos="fade-right"className="md:grid md:gap-5 md:grid-cols-2 lg:grid lg:gap-5 lg:grid-cols-5 flex flex-col gap-12 pb-[44px]">


              <div className="shadow-xl  w-[170px] h-[210px]  hover:bg-blue-100 transition-transform transform hover:scale-110  duration-500  ">
                <Image className="" src="/image/Image (13).png" alt="logo" width={165} height={150} />
                <div className="flex gap-4 pt-[11px] pb-[22px]">
                  <h1 className=" text-[15px]   ">Library Stool Chair</h1>
                  <p className="text-[15px]  ">$99</p>
                </div>
              </div>




              <div className="shadow-xl   w-[170px] h-[210px] hover:bg-blue-100  transition-transform transform hover:scale-110  duration-500 ">
                <Image className="  " src="/image/card (1).png" alt="logo" width={165} height={150} />
                <div className=" flex gap-4 pt-[11px] pb-[22px]">
                  <h1 className="text-[15px]   ">Library Stool Chair</h1>
                  <p className="text-[15px]">$99</p>
                </div>
              </div>




              <div className="shadow-xl   w-[170px]  h-[210px]  hover:bg-blue-100 transition-transform transform hover:scale-110  duration-500 ">
                <Image className="" src="/image/image1.png" alt="logo" width={165} height={150} />
                <div className="flex gap-4 pt-[11px] pb-[22px]">
                  <h1 className="text-[15px] ">Library Stool Chair</h1>
                  <p className="text-[15px] ">$99</p>
                </div>
              </div>




              <div className="shadow-xl   w-[170px] h-[210px]  hover:bg-blue-100   transition-transform transform hover:scale-110  duration-500 ">
                <Image className="" src="/image/item-category 1.png" alt="logo" width={165} height={150} />
                <div className="flex gap-4 pt-[11px] pb-[22px]">
                  <h1 className="text-[15px]">Library Stool Chair</h1>
                  <p className="text-[15px] ">$99</p>
                </div>
              </div>




              <div className="shadow-xl    hover:bg-blue-100 w-[170px] h-[210px] transition-transform transform hover:scale-110  duration-500 ">
                <Image className=" " src="/image/Image (10).png" alt="logo" width={165} height={150} />
                <div className="flex gap-4 pt-[11px] pb-[22px]">
                  <h1 className="text-[15px] ">Library Stool Chair</h1>
                  <p className="text-[15px]">$99</p>
                </div>
              </div>
            </div>



          </div>
        </div>





      </div>


    )
}