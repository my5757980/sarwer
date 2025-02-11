interface books {
    id: number,
    title: string,
    price: number,
    imageUrl: string,
  }
  





import { client } from '@/sanity/lib/client';
import ProductListing from '../product-listing/product-listing';



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
        {/* Heading */}
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
                
               <ProductListing  elem ={elem}/>
               </div>
              )
            })
          }
          

        </div>
      
      
      </div>
    







        </div>

    )
}
