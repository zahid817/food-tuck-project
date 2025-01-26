"use client";
import Link from 'next/link'

import Image from 'next/image'
import heroImage2 from "@/images/productsImages/heroImage2.png"
import Footer from "@/components/footer"


export default function Faq() {
    return (
        <section className="bg-white w-full">
            <div className="relative w-full h-[400px]">
                <Image src={heroImage2} alt="image" layout='fill' objectFit='cover'></Image>
                <div className=' absolute inset-0 flex items-center justify-center'>
                    <h1 className=' text-white text-[80px] font-semibold'>Faq page</h1>
                    <div className=' absolute inset-0 flex items-center justify-center mt-28 ' >
                        <Link href={"/"}>
                            <h1 className='text-white'>Home
                            </h1>
                        </Link>
                        <span className='text-white' >/</span>
                        <span className='text-yellow-500'>Faq page</span>
                    </div>
                </div>
                <div className='text-black font-bold'>
                    <h1 className='text-4xl text-center'>
                        Questions Looks Here

                    </h1>

                </div>









                <div className="absolute top-[1050px] ">
                    <Footer />
                </div>
            </div>
        </section>
    )
}