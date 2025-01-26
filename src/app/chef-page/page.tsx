"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer"
import heroImage2 from "@/images/productsImages/heroImage2.png"



import { getChefData } from "../../../sanity.query"
export default function Chef(){
    interface ChefData {
        _id: string;
        imageURL: string;
        name:string
        experience:string;
        description:string; 
        available:boolean;  
        position: string;
        specialty:string;
    }
    const [chefData, setChefData] = useState<ChefData[]>([]);

      useEffect(() => {
        async function fetchData() {
          const data = await getChefData();
          setChefData(data);
        }
        fetchData();
        }, []);
        console.log(chefData);
    return(
        <section className="bg-white w-full grid-flow-col-2">
            <div className="relative w-full h-[400px]">
                <Image  src={heroImage2} alt="image" layout='fill' objectFit='cover'></Image>
                <div className=' absolute inset-0 flex items-center justify-center'>
                    <h1 className=' text-white text-[80px] font-semibold'>Our Chef</h1>
                    <div className=' absolute inset-0 flex items-center justify-center mt-28 ' >
                        <Link href={"/"}>
                        <h1 className='text-white'>Home</h1>
                        </Link>    
                        <span className='text-white' >/</span>
                        <span className='text-yellow-500'>Chef</span>              
                        
                    </div>
                   
                    
                </div>
                 
            </div>
        <div className=" grid grid-cols-3">
                    {Array.isArray(chefData ) &&  chefData.map((chef, index)  => (
                   <div key={index}>
                     <p>{chef.imageURL && <Image width={305} height={305} src={chef.imageURL} alt="image" className='xl:h-[250px] lg:h- 
                     [250px] md:h-[250px]'></Image>}</p>
                     
                     <p className="mb-[20px] font-bold text-[20px] text-[#333333] mt-[10px]  ">{chef.name}</p>
                     <p className="mb-[20px] font-normal text-[15px]  text-[#4F4F4F] mt-[10px]">{chef.description}</p>
                     <p >{chef.experience}</p>
                     <p >{chef.available}</p>
                     <p className="mb-[20px] font-bold text-[15px]  text-[#4F4F4F] mt-[10px]">{chef.position}</p>
                     <p className="mb-[20px] font-bold text-[15px]  text-[#4F4F4F] mt-[10px]">{chef.specialty}</p>                  
                                        
                          
                  </div>
                    
                    
                ))}
                <div className="h-[300px] absolute top-[2400px]">
                         <Footer/>
                        </div>   
        </div>  
        </section>
    )
}