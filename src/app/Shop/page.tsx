"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import heroImage2 from "@/images/productsImages/heroImage2.png"
import Footer from "@/components/footer"
import { getFoodData } from "../../../sanity.query";


export default function Shop() {
    interface FoodData {
        _id: string;
        imageURL: string;
        name:string
        price: number;
        description:string;   
    }
    const [foodData, setFoodData] = useState<FoodData[]>([]);

      useEffect(() => {
        async function fetchData() {
          const data = await getFoodData();
          setFoodData(data);
        }
        fetchData();
        }, []);
        console.log(foodData);
    return (
            <section className="bg-white w-full grid-flow-col-2">
            <div className="relative w-full h-[400px]">
                <Image  src={heroImage2} alt="image" layout='fill' objectFit='cover'></Image>
                <div className=' absolute inset-0 flex items-center justify-center'>
                    <h1 className=' text-white text-[80px] font-semibold'>Our Shop</h1>
                    <div className=' absolute inset-0 flex items-center justify-center mt-28 ' >
                        <Link href={"/"}>
                        <h1 className='text-white'>Home</h1>
                        </Link>    
                        <span className='text-white' >/</span>
                        <span className='text-yellow-500'>Shop</span>              
                        
                    </div>
                   
                    
                </div>
                 
            </div>
           
        <div className=" grid grid-cols-3">
            {/* <h1 className="font-extrabold text-[40px] text-[#333333]   mt-[30px] absolute left-[570px]"> Shop</h1> */}
                {Array.isArray(foodData ) &&  foodData.map((food, index)  => (
                <div key={index}>
                    <div className="w-[800px]">{food.imageURL && <Image width={305} height={375} src={food.imageURL}
                        alt="image"className='xl:h-[400px]lg:h- [300px] md:h-[200px] m-20'></Image>}
                    </div >
                    <div className=" inset-0 flex-row ml-[40px] mt-[50px] ">
                        <p className="mb-[20px] font-bold text-[30px] text-[#333333] mt-[10px]">{food.name}</p>
                        <p className="mb-[20px] font-normal text-[15px]  text-[#4F4F4F] mt-[10px]">{food.description}</p>
                        <p className="mb-[50px] font-bold text-[30px] text-[#FF9F0D] ">${food.price}</p>
                    </div>
         
                </div>
                    
                    
                ))}
                
                <div className="h-[250px] absolute top-[2710px]">
                 <Footer/>
                </div>     
                                                           
        </div> 
                
                        
                
            </section>
         
    )
}