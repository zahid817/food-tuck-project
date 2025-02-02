"use client";
import Link from 'next/link';
import Image from 'next/image';
import heroImage2 from "@/images/productsImages/heroImage2.png";
import Footer from "@/components/footer";

export default function Contact() {
    return (
        <section className="bg-white w-full">
            <div className="relative w-full h-[300px] sm:h-[400px]">
                <Image src={heroImage2} alt="image" layout="fill" objectFit="cover" />
                <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                    <h1 className='text-white text-4xl sm:text-[80px] font-semibold'>Contact</h1>
                    <div className='flex items-center gap-2 mt-4 sm:mt-6'>
                        <Link href="/">
                            <h1 className='text-white text-lg sm:text-xl'>Home</h1>
                        </Link>
                        <span className='text-white text-lg sm:text-xl'>/</span>
                        <span className='text-[#FF9F0D] text-lg sm:text-xl'>Contact</span>
                    </div>
                </div>
            </div>
            <div className="mt-10 sm:mt-20">
                <Footer />
            </div>
        </section>
    );
}