"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import heroImage2 from "@/images/productsImages/heroImage2.png";
import Footer from "@/components/footer";
import { getFoodData } from "../../../sanity.query";

export default function Shop() {
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
        <section className="bg-white w-full">
            {/* Hero Section */}
            <div className="relative w-full h-[300px] md:h-[400px]">
                <Image src={heroImage2} alt="Shop Banner" layout='fill' objectFit='cover' />
                <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                    <h1 className='text-white text-4xl md:text-6xl font-semibold'>Our Shop</h1>
                    <div className='flex items-center gap-2 text-white mt-4'>
                        <Link href="/" className='hover:underline'>Home</Link>
                        <span>/</span>
                        <span className='text-yellow-500'>Shop</span>
                    </div>
                </div>
            </div>
            
            {/* Product Grid */}
            <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {foodData.map((food,index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
                        {food.imageURL && (
                            <Image width={305} height={375} src={food.imageURL} alt={food.name} className='w-full h-60 object-cover rounded-md' />
                        )}
                        <div className="mt-4">
                            <p className="text-xl font-bold text-gray-900">{food.name}</p>
                            <p className="text-gray-600 text-sm mt-2">{food.description}</p>
                            <p className="text-2xl font-bold text-orange-500 mt-4">${food.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <Footer />
        </section>
    );
}