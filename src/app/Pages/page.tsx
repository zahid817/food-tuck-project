"use client";
import Link from 'next/link';
import Image from 'next/image';
import heroImage2 from "@/images/productsImages/heroImage2.png";
import Footer from "@/components/footer";

export default function Pages() {
    return (
        <section className="bg-white w-full">
            {/* Hero Section */}
            <div className="relative w-full h-[300px] md:h-[400px]">
                <Image src={heroImage2} alt="404 Error" layout='fill' objectFit='cover' />
                <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                    <h1 className='text-white text-4xl md:text-6xl font-semibold'>404 Error</h1>
                    <div className='flex items-center gap-2 text-white mt-4'>
                        <Link href="/" className='hover:underline'>Home</Link>
                        <span>/</span>
                        <span className='text-yellow-500'>404</span>
                    </div>
                </div>
            </div>
            
            {/* Content Section */}
            <div className="container mx-auto px-4 py-10 text-center">
                <h1 className='text-6xl md:text-8xl font-extrabold text-yellow-500'>404</h1>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">Oops! Looks like something went wrong</h2>
                <p className="text-gray-600 text-sm mt-2">Page cannot be found! We’ll have it figured out in no time.</p>
                <p className="text-gray-600 text-sm mt-2">Meanwhile, check out these fresh ideas</p>
                
                <div className='mt-6'>
                    <Link href="/">
                        <button className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out">
                            Go Back to Home
                        </button>
                    </Link>
                </div>
            </div>
            
            {/* Footer */}
            <Footer />
        </section>
    );
}
