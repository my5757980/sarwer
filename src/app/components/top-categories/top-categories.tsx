'use client'



import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";


interface Books {
  id: number;
  title: string;
  imageUrl: string;
}

export default function TopCategories() {
  
  const [data, setData] = useState<Books[]>([]);

  useEffect(() => {
    
    const fetchData = async () => {
      const result = await client.fetch<Books[]>(`*[_type == 'categories']{
        title,
        "imageUrl": image.asset->url,
        _id
      }`);
      setData(result);
    };

    fetchData();
  }, []); 

  return (
    <div className="overflow-x-hidden">
      {/* Top Categories */}
      <div className="m-auto w-[200px] sm:m-auto sm:w-[250px] md:m-auto md:w-[700px] lg:m-auto lg:w-[800px]">
        <h1 className="mt-[35px] mb-[35px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-bold">
          Top Categories
        </h1>

        <div className="md:flex md:gap-5 lg:flex lg:gap-12">
          {data.map((elem) => (
            <div key={elem.id}>
              <div>
                <Image
                  className=""
                  src={elem.imageUrl}
                  alt={elem.title}
                  width={200}
                  height={200}
                />
                <div className="relative bottom-[44px] sm:w-[200px] bg-black h-[44px] rounded-[5px] opacity-65">
                  <div className="relative top-[11px] left-[11px] sm:relative sm:top-[6px]">
                    <h1 className="text-[10px] text-white sm:text-[12px] lg:font-bold">
                      {elem.title}
                    </h1>
                    <p className="text-[7px] text-white sm:text-[9px] lg:font-bold">
                      3,584 Products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
