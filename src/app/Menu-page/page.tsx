"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import heroImage2 from "@/images/productsImages/heroImage2.png";
import Clents from "@/images/productsImages/clnt.png";
import Footer from "@/components/footer";
import { getFoodData } from "../../../sanity.query";

export default function Menu() {
    interface FoodData {
        _id: string;
        imageURL: string;
        name: string;
        price: number;
        description: string;
    }
    
    const [foodData, setFoodData] = useState<FoodData[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getFoodData();
            setFoodData(data);
        }
        fetchData();
    }, []);

    return (
        <section className="bg-[#e9d5d6] w-full">
            <div className="relative w-full h-[400px]">
                <Image src={heroImage2} alt="image" layout='fill' objectFit='cover' />
                <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                    <h1 className='text-white text-[50px] md:text-[80px] font-semibold'>Our Menu</h1>
                    <div className='flex gap-2 mt-4 text-white'>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span className='text-yellow-500'>Menu</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-10">
                <h1 className="font-extrabold text-[30px] md:text-[40px] text-[#333333] text-center">Menu</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10 mt-10">
                    {foodData.map((food, index) => (
                        <Link key={index} href={{ pathname: '/foodpage', query: { food: JSON.stringify(food) } }}>
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                {food.imageURL && <Image width={450} height={375} src={food.imageURL} alt="image" className='w-full md:w-[450px] h-auto' />}
                                <div className="text-center md:text-left">
                                    <p className="text-[25px] md:text-[30px] font-bold text-[#333333]">{food.name}</p>
                                    <p className="text-[14px] md:text-[15px] text-[#4F4F4F] mt-2">{food.description}</p>
                                    <p className="text-[25px] md:text-[30px] font-bold text-[#FF9F0D] mt-4">${food.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className='w-full flex justify-center py-10'>
                <Image src={Clents} alt="clnt" className="w-[90%] max-w-[600px] h-auto" />
            </div>
            
            <Footer />
        </section>
    );
}
