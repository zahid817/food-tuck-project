"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import heroImage2 from "@/images/productsImages/heroImage2.png";
import Footer from "@/components/footer";
import { getChefData } from "../../../sanity.query";

export default function Chef() {
    interface ChefData {
        _id: string;
        imageURL: string;
        name: string;
        experience: string;
        description: string;
        available: boolean;
        position: string;
        specialty: string;
    }
    
    const [chefData, setChefData] = useState<ChefData[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getChefData();
            setChefData(data);
        }
        fetchData();
    }, []);

    return (
        <section className="bg-white w-full">
            <div className="relative w-full h-[400px]">
                <Image src={heroImage2} alt="image" layout='fill' objectFit='cover' />
                <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                    <h1 className='text-white text-[50px] md:text-[80px] font-semibold'>Our Chefs</h1>
                    <div className='flex gap-2 mt-4 text-white'>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span className='text-yellow-500'>Chef</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-10">
                <h1 className="font-extrabold text-[30px] md:text-[40px] text-[#333333] text-center">Meet Our Chefs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    {chefData.map((chef, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-4 shadow-lg rounded-lg">
                            {chef.imageURL && <Image width={305} height={305} src={chef.imageURL} alt="image" className='w-full h-auto rounded-full' />}
                            <p className="text-[22px] md:text-[24px] font-bold text-[#333333] mt-4">{chef.name}</p>
                            <p className="text-[15px] text-[#4F4F4F] mt-2">{chef.description}</p>
                            <p className="text-[16px] font-medium text-[#4F4F4F] mt-2">Experience: {chef.experience}</p>
                            <p className="text-[16px] font-medium text-[#4F4F4F] mt-2">Position: {chef.position}</p>
                            <p className="text-[16px] font-medium text-[#4F4F4F] mt-2">Specialty: {chef.specialty}</p>
                            <p className={`text-[16px] font-bold mt-2 ${chef.available ? 'text-green-500' : 'text-red-500'}`}>{chef.available ? 'Available' : 'Not Available'}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </section>
    );
}