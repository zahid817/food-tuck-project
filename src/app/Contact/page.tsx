"use client";
import Link from 'next/link'

import Image from 'next/image'
import heroImage2 from "@/images/productsImages/heroImage2.png"
import Footer from "@/components/footer"


export default function Contact() {
    return (
            <section className="bg-white w-full">
            <div className="relative w-full h-[400px]">
                <Image  src={heroImage2} alt="image" layout='fill' objectFit='cover'></Image>
                <div className=' absolute inset-0 flex items-center justify-center'>
                 <h1 className=' text-white text-[80px] font-semibold'>Contac</h1>
                    <div className=' absolute inset-0 flex items-center justify-center mt-28 ' >
                        <Link href={"/"}>
                        <h1 className='text-white'>Home
                        </h1>
                        </Link>    
                        <span className='text-white' >/</span>
                        <span className='text-[#FF9F0D]'>Contact</span>              
                    </div>
                    <div className="absolute top-[370px] ">
                      <Footer/>
                    </div> 
                </div>
                
            </div>
            </section>
    )
}