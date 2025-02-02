"use client";

import Image from 'next/image';
import H1 from "@/images/productsImages/H1.png";
import heroImage2 from "@/images/productsImages/heroImage2.png";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <section className="bg-white w-full">
            {/* Hero Section */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
                <Image 
                    src={heroImage2} 
                    alt="Hero Image" 
                    layout="fill" 
                    objectFit="cover"
                    priority
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-center">
                        Home
                    </h1>
                    <div className="mt-8 text-center">
                        <h2 className="text-white text-lg sm:text-xl md:text-2xl">
                            Welcome to our website
                        </h2>
                    </div>
                </div>
            </div>

            {/* Starter Menu */}
            <div className="container mx-auto px-4 py-8 flex justify-center">
                <div className="w-full max-w-[400px] h-auto">
                    <Image 
                        src={H1} 
                        alt="Starter Menu" 
                        layout="responsive"
                        width={400}
                        height={100}
                    />
                </div>
            </div>

            {/* Footer */}
            <div className="mt-20">
                <Footer />
            </div>
        </section>
    );
}